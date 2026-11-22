# 🗺️ CV Geospaziale Interattivo — Ing. Cataldo (Aldo) Carletta

Curriculum vitae in formato **web interattivo e geolocalizzato**: le esperienze professionali e il percorso formativo sono mostrati su una mappa, con un marker per ogni luogo in cui si sono svolti.

👉 **Sito:** [ing-aldo-c.github.io](https://ing-aldo-c.github.io/) · **Mappa:** [ing-aldo-c.github.io/mappa.html](https://ing-aldo-c.github.io/mappa.html)

## ✨ Funzionalità

- 🗺️ Mappa interattiva con Leaflet.js, vista satellitare e stradale
- 📍 Marker geolocalizzati per esperienze lavorative, titoli di studio e convegni da relatore
- 🔵 Filtro per categoria (Esperienze / Formazione / Convegni)
- 🌐 Versione italiana e inglese (pulsante IT/EN, oppure `?lang=en` nell'indirizzo)
- 📱 Layout responsive per mobile e desktop
- 🌙 Interfaccia scura

## 📁 Struttura

```
.
├── index.html              # Home page: presentazione e contatti
├── mappa.html              # CV geospaziale interattivo
├── 404.html                # Pagina di errore
├── data/
│   └── cv-data.js          # ⬅ Esperienze, formazione e convegni (da modificare per aggiornare la mappa)
├── assets/
│   ├── css/                # home.css, mappa.css
│   ├── js/                 # mappa.js (Leaflet), home.js, lang.js (IT/EN)
│   ├── img/                # foto-cv.jpg, preview.png (anteprima social)
│   └── icons/              # favicon e icone app
├── favicon.ico
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── .nojekyll               # pubblicazione statica su GitHub Pages, senza Jekyll
```

## ✏️ Come aggiornare il CV

1. Apri `data/cv-data.js`.
2. Aggiungi o modifica una voce negli elenchi `esperienze`, `formazione` o `convegni` (date nel formato `MM/AAAA`, `"IN CORSO"` per le attività attuali, coordinate `lat`/`lng` in gradi decimali, `null` per gli eventi online).
3. Per la versione inglese compila i campi che finiscono con `_en` (es. `ruolo_en`, `desc_en`); se mancano viene mostrato il testo italiano.
4. Fai il commit: GitHub Pages pubblica la modifica in circa un minuto.

## 🛠️ Tecnologie

| Tecnologia | Utilizzo |
|---|---|
| HTML5 / CSS3 / JavaScript | Struttura, stile e logica |
| [Leaflet.js](https://leafletjs.com/) 1.9.4 | Mappa interattiva |
| OpenStreetMap | Mappa stradale |
| Esri World Imagery | Immagini satellitari ed etichette |
| Font Awesome 6 | Icone dei marker |
| Google Fonts (Inter) | Tipografia |
| GitHub Pages | Hosting |

## 👤 Autore

**Ing. Cataldo (Aldo) Carletta** — Ingegnere idraulico · Responsabile Telecontrollo e GIS
Contatti e profilo LinkedIn sul [sito](https://ing-aldo-c.github.io/).

## 📄 Licenza

© 2026 Cataldo Carletta — tutti i diritti riservati. Testi, foto e dati personali non possono essere riutilizzati senza autorizzazione.
