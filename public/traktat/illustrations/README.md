# FORMLÆRE — illustrasjonar

Utsnitt frå `formlaere-ny-utgave 2.pdf` (74 sider). **52 transparente PNG-ar** frå 51 illustrerte sider. Kvart filnamn viser opphavleg PDF-side. Filer frå same side har suffiks `-01` og `-02`. Originalteikningane er ikkje teikna om; bakgrunnen er fjerna og utsnitta er trimma.

PNG-ar inneheld berre svart strek med alfa (gjennomsiktig bakgrunn), slik at same fil kan fungere i både lys og mørk lesemodus.

```css
.formlaere-illustration { display: block; max-width: 100%; height: auto; }
[data-theme='dark'] .formlaere-illustration { filter: invert(1); }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) .formlaere-illustration { filter: invert(1); }
}
```

Bruk til dømes `<img class="formlaere-illustration" src="/traktat/illustrations/page-15.png" alt="Illustrasjon frå side 15">`.

Sjå `manifest.json` for alle illustrasjonane. Sidan kjelde-PDF-en er eit skanna dokument, kan nokre bilete innehalde etikettar som er teikna som del av illustrasjonen.
