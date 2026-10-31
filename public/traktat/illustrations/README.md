# FORMLÆRE — illustrasjonar

Individuelle, stramt utskorne illustrasjonar med **svart strek og transparent bakgrunn**.

- 52 originale figurar er henta frå `formlaere-ny-utgave 2.pdf` (sidetalet går fram av filnamnet).
- 25 nye utsnitt frå dei ti innsendte boksidene 31. oktober 2026 har prefikset `scan-20261031-`. Diagram med fleire sjølvstendige delar er delte i eigne PNG-filer.
- Ingen tekst i proposisjonane eller sidehovud skal følgje figurfila; handskrivne etikettar som er del av teikninga, er bevarte.
- **Lysmodus:** vanleg PNG med svart strek. **Mørkmodus:** `filter: invert(1)` på illustrasjonen (ikkje på heile sida).
- Alle bileta er tilgjengelege under `/traktat/illustrations/` i GitHub-repositoriet. Nettlesaren sine proposisjonar skal stå venstrestilt; oversiktstreet viser djupna.
- `manifest.json` inneheld filnamn, PDF-side eller bileteopphav, format og dimensjonar for alle 77 illustrasjonane.

Bruk i CSS:

```css
.traktat-illustrasjon { display: block; width: min(100%, 36rem); height: auto; margin-left: 0; margin-right: auto; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .traktat-illustrasjon { filter: invert(1); }
}
:root[data-theme="dark"] .traktat-illustrasjon { filter: invert(1); }
```

## Montering i traktatlesaren

`placements.json` knyter dei første 25 etterspurde illustrasjonane til eksisterande proposisjonsnummer. Figuren vert vist etter proposisjonen, med svart strek på transparent bakgrunn og kvit strek i mørkmodus.
