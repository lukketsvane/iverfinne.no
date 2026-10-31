#!/usr/bin/env python3
"""Build the current FORMLÆRE reader as a self-contained, printable A4 PDF.

Run from any directory: python scripts/build-traktat-pdf.py
Requires Python 3.10+, WeasyPrint >= 68, and system fonts Bitstream Charter,
DejaVu Serif/Mono, and Latin Modern Math. Install the renderer with
`python -m pip install weasyprint`; Debian/Ubuntu also needs Pango and Harfbuzz.
No network access is used. Text, notes, citations and illustration placements
are read from the same tracked files as the website; the source is never edited.
"""

from __future__ import annotations

import argparse
import html
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "public" / "traktat"


def parse_source(source: str) -> tuple[list[dict], list[dict]]:
    tokens: list[dict] = []
    propositions: list[dict] = []
    active = None
    buffer: list[str] = []

    def flush() -> None:
        text = "\n".join(buffer).strip()
        buffer.clear()
        if text:
            if active is not None:
                active["paragraphs"].append(text)
            else:
                tokens.append({"kind": "paragraph", "text": text})

    for line in source.replace("\r\n", "\n").replace("\r", "\n").split("\n"):
        if line.startswith("## ") or line.startswith("# "):
            flush()
            active = None
            kind, prefix = ("heading", 3) if line.startswith("## ") else ("title", 2)
            tokens.append({"kind": kind, "text": line[prefix:].strip()})
            continue
        match = re.match(r"^\*\*(\d+(?:\.\d+)*)([datio])\*\*\s+(.*)$", line)
        if match:
            flush()
            active = {"kind": "prop", "n": match[1], "status": match[2], "paragraphs": []}
            tokens.append(active)
            propositions.append(active)
            if match[3]:
                buffer.append(match[3])
        elif not line.strip():
            flush()
        else:
            buffer.append(line)
    flush()
    return tokens, propositions


def utf16_index(text: str, offset: int) -> int:
    """The reviewed browser offsets count UTF-16 units, not Unicode code points."""
    return len(text.encode("utf-16-le")[: offset * 2].decode("utf-16-le"))


def markup(text: str, numbers: set[str]) -> str:
    def plain(value: str) -> str:
        escaped = html.escape(value)
        group = re.compile(r"\((\s*\d+(?:\.\d+)*(?:\s*[,;–—−-]\s*\d+(?:\.\d+)*)*\s*)\)")

        def link_group(match: re.Match) -> str:
            return "(" + re.sub(
                r"\d+(?:\.\d+)*",
                lambda n: f'<a href="#{n[0]}">{n[0]}</a>' if n[0] in numbers else n[0],
                match[1],
            ) + ")"

        return group.sub(link_group, escaped)

    result = []
    for part in re.split(r"(\*\*[^*]+\*\*|\*[^*]+\*)", text):
        if part.startswith("**") and part.endswith("**"):
            result.append("<strong>" + plain(part[2:-2]) + "</strong>")
        elif part.startswith("*") and part.endswith("*"):
            result.append("<em>" + plain(part[1:-1]) + "</em>")
        else:
            result.append(plain(part))
    return "".join(result)


def build_html(source_dir: Path) -> tuple[str, dict]:
    source = (source_dir / "formlaere.txt").read_text(encoding="utf-8")
    catalog = json.loads((source_dir / "kjelder.json").read_text(encoding="utf-8"))
    citations = json.loads((source_dir / "citations.json").read_text(encoding="utf-8"))
    reader = (source_dir / "scroll.html").read_text(encoding="utf-8")
    tokens, propositions = parse_source(source)
    if len(propositions) != 375 or propositions[0]["n"] != "1" or propositions[-1]["n"] != "7.4":
        raise ValueError("Expected the current complete 375-proposition edition")
    order = {p["n"]: i for i, p in enumerate(propositions)}
    numbers = set(order)
    index = {item["paragraph"]: item["spans"] for item in citations["entries"]}
    sources = {str(item["id"]): item for item in catalog["sources"]}
    notes = sorted((n for n in catalog["annotations"] if n["proposition"] in order), key=lambda n: order[n["proposition"]])
    intro = [n for n in catalog.get("intro", []) if any(t["kind"] == "paragraph" and n["anchor"] in t["text"] for t in tokens)]
    all_notes = intro + notes
    note_numbers = {id(n): i + 1 for i, n in enumerate(all_notes)}
    placements = re.search(r"const FIGURES_AFTER=(\{.*?\});", reader)
    if not placements:
        raise ValueError("Illustration placements are missing from scroll.html")
    figures = json.loads(placements[1])
    image_count = 0
    citation_count = 0

    def refs(ids: list[str]) -> str:
        unknown = set(ids) - set(sources)
        if unknown:
            raise ValueError(f"Unknown source IDs: {unknown}")
        return ", ".join(f'<a href="#referanse-{html.escape(str(n))}">{html.escape(str(n))}</a>' for n in ids)

    def rich(paragraph: str) -> str:
        nonlocal citation_count
        result, cursor = [], 0
        for citation in index.get(paragraph, []):
            start, end = (utf16_index(paragraph, citation[k]) for k in ("start", "end"))
            if start < cursor or paragraph[start:end] != citation["text"]:
                raise ValueError("Reviewed citation span does not match the current paragraph")
            result.append(markup(paragraph[cursor:start], numbers))
            result.append('\u2060<sup class="source-ref">' + refs(citation["sourceIds"]) + "</sup>")
            cursor = end
            citation_count += 1
        result.append(markup(paragraph[cursor:], numbers))
        return "".join(result)

    def note_links(items: list[dict]) -> str:
        return "".join(f'\u2060<sup class="note-ref"><a href="#notat-{note_numbers[id(n)]}">n{note_numbers[id(n)]}</a></sup>' for n in items)

    body = []
    start = next(i for i, t in enumerate(tokens) if t["kind"] == "heading" and t["text"] == "Føreord")
    for token in tokens[start:]:
        if token["kind"] == "heading":
            slug = "del-" + re.sub(r"[^a-z0-9æøå]+", "-", token["text"].lower()).strip("-")
            body.append(f'<h2 id="{slug}" class="section-title">{html.escape(token["text"])}</h2>')
        elif token["kind"] == "paragraph":
            marks = note_links([n for n in intro if n["anchor"] in token["text"]])
            body.append('<p class="plain-paragraph">' + rich(token["text"]) + marks + "</p>")
        elif token["kind"] == "prop":
            number = token["n"]
            content = []
            for i, paragraph in enumerate(token["paragraphs"]):
                marks = note_links([n for n in notes if n["proposition"] == number]) if i == len(token["paragraphs"]) - 1 else ""
                content.append('<p class="prop-paragraph">' + rich(paragraph) + marks + "</p>")
            depth = 0 if "." not in number else min(4, len(number.split(".")[1]))
            body.append(f'<article class="prop depth{depth}" id="{number}"><span class="n">{number}<sup class="status">{token["status"]}</sup></span><div class="t">' + "".join(content) + "</div></article>")
            for figure in figures.get(number, []):
                path = source_dir / "illustrations" / figure["file"]
                if not path.is_file():
                    raise FileNotFoundError(f"Missing active illustration: {path}")
                body.append(f'<figure class="tractate-figure"><img src="{path.resolve().as_uri()}" alt="{html.escape(figure["alt"], quote=True)}"></figure>')
                image_count += 1

    for is_note, title, items in [(True, "Notat", all_notes), (False, "Referansar", catalog["sources"])]:
        section = "notat" if is_note else "referansar"
        body.append(f'<section class="endmatter" id="{section}"><h2 class="section-title">{title}</h2><ol class="endmatter-list">')
        for i, item in enumerate(items):
            number = i + 1 if is_note else str(item["id"])
            target = f'notat-{number}' if is_note else f'referanse-{number}'
            label = f"n{number}" if is_note else number
            content = []
            if is_note:
                proposition = item.get("proposition")
                back = f'<a href="#{proposition or "del-føreord"}">{proposition or "Føreord"}</a>'
                relation = " · " + html.escape(item["relation"]) if item.get("relation") else ""
                content.append(f'<div class="endnote-meta">{back}{relation}</div>')
                content.append("<p>" + html.escape(item["note"]) + "</p>")
                content.append('<p class="source-links">[' + refs(item.get("sources", [])) + "]</p>")
            else:
                content.append("<p>" + html.escape(item["citation"]) + "</p>")
                url = item.get("url") or ("https://doi.org/" + item["doi"] if item.get("doi") else None)
                if url and re.match(r"^https?://", url):
                    text = "DOI: " + item["doi"] if item.get("doi") else "Opne kjelda"
                    content.append(f'<p class="source-links"><a href="{html.escape(url, quote=True)}">{html.escape(text)}</a></p>')
            body.append(f'<li class="endnote" id="{target}"><span class="endnote-number">{label}</span><div class="endnote-body">' + "".join(content) + "</div></li>")
        body.append("</ol></section>")

    css = r"""
@page { size: A4; margin: 16mm 14mm; @bottom-center { content: counter(page); font: 7.5pt 'DejaVu Sans Mono'; color: #777; } }
* { box-sizing: border-box; }
html { font-family: 'Bitstream Charter', 'DejaVu Serif', 'Latin Modern Math'; color: #000; background: #fff; font-size: 12pt; }
body { margin: 0; font-size: 10.5pt; line-height: 1.42; }
a { color: inherit; text-decoration: none; }
p { orphans: 3; widows: 3; }
.section-title { font: 400 13.8pt/1.3 'Bitstream Charter', 'DejaVu Serif'; margin: 28.8pt 0 9.6pt; padding-top: 7.8pt; border-top: .4pt solid #ddd; break-after: avoid; }
.section-title:first-child { margin-top: 7.8pt; padding-top: 0; border: 0; }
.plain-paragraph { white-space: pre-line; margin: 8pt 0; }
.prop { position: relative; padding: 2.16pt 0; margin-top: 4pt; }
.prop .n { float: left; width: 36pt; font: 400 8pt/1.4 'DejaVu Sans Mono', monospace; color: #666; padding-top: 1.8pt; white-space: nowrap; }
.status { font-size: 6.5pt; margin-left: .6pt; }
.prop .t { margin-left: 40.2pt; }
.prop-paragraph { margin: 0; white-space: pre-line; }
.prop-paragraph + .prop-paragraph { margin-top: .57em; }
.prop.depth0 { margin-top: 13.2pt; }
.prop.depth1 { margin-top: 9.36pt; }
.prop.depth2 { margin-top: 5.76pt; }
.prop.depth3 { margin-top: 4.08pt; }
.prop.depth4 { margin-top: 2.88pt; }
.source-ref { font: 400 6.8pt/0 'DejaVu Sans Mono', monospace; vertical-align: super; padding-left: .5pt; white-space: nowrap; }
.note-ref { font: 400 6.5pt/0 'DejaVu Sans Mono', monospace; vertical-align: super; color: #666; margin-left: 3pt; white-space: nowrap; }
.tractate-figure { margin: 6pt 0 19.8pt 40.2pt; break-inside: avoid; }
.tractate-figure img { display: block; width: 100%; height: auto; max-height: 135mm; object-fit: contain; object-position: left center; }
.endmatter { break-before: page; }
.endmatter-list { list-style: none; margin: 0; padding: 0; }
.endnote { break-inside: avoid; font-size: 9pt; line-height: 1.45; padding: 5.4pt 0; }
.endnote-number { float: left; width: 36pt; font: 400 7.8pt/1.4 'DejaVu Sans Mono', monospace; color: #666; padding-top: 1.44pt; }
.endnote-body { margin-left: 40.2pt; overflow-wrap: anywhere; }
.endnote-body p { margin: 0; }
.endnote-body p + p { margin-top: 3.6pt; }
.endnote-meta { font: 400 7.44pt/1.4 'DejaVu Sans Mono', monospace; color: #666; margin-bottom: 3pt; }
.source-links { font: 400 7.8pt/1.4 'DejaVu Sans Mono', 'Latin Modern Math', monospace; }
"""
    document = '<!doctype html><html lang="nn"><head><meta charset="utf-8"><title>FORMLÆRE - Iver Raknes Finne</title><meta name="author" content="Iver Raknes Finne"><style>' + css + "</style></head><body>" + "\n".join(body) + "</body></html>"
    return document, {"propositions": len(propositions), "notes": len(all_notes), "references": len(sources), "citation_groups": citation_count, "illustrations": image_count}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=SOURCE_DIR / "formlaere.pdf")
    parser.add_argument("--html", type=Path, help="Optionally retain generated static HTML for inspection")
    args = parser.parse_args()
    try:
        from weasyprint import HTML
    except ImportError as exc:
        raise SystemExit("Install the renderer: python -m pip install weasyprint") from exc
    document, stats = build_html(SOURCE_DIR)
    if args.html:
        args.html.parent.mkdir(parents=True, exist_ok=True)
        args.html.write_text(document, encoding="utf-8")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    rendered = HTML(string=document, base_url=str(SOURCE_DIR)).render()
    rendered.write_pdf(args.output, pdf_tags=True)
    print(json.dumps({"output": str(args.output.resolve()), "pages": len(rendered.pages), **stats}, ensure_ascii=False))


if __name__ == "__main__":
    main()
