# eli_lab archive inventory

Working rebuild map for `eli_lab_official`.

## Core rule

This site is hosted on **Vercel** and contains a substantial custom frontend layer. The Bootstrap-derived files have been manually rewritten and are part of the existing design system. Do **not** replace them with stock Bootstrap or remove them simply because of their filenames.

The existing JavaScript components are also intentional infrastructure for simplifying archive pages. Preserve their behavior and repair them incrementally.

## Existing frontend system

### CSS
- `css/bootstrap.css` — customized framework layer
- `css/bootstrap.min.css` — active compact framework layer
- `css/bootstrap.min copy.css` — duplicate/variant; compare before removal
- `css/modern-business.css` — site-specific layer
- many historical pages also use inline/custom styles

### Reusable JavaScript
- `js/projects_3.js` — reusable project grid
- `js/artPracticeGallery.js` — art-practice renderer
- `js/content-section.js` — reusable history/content blocks
- `js/animaContent.js` — animation/content component
- `js/collaborators.js` — collaborator component
- `js/exhibitions.js` — exhibition component
- `js/liveEvents.js` — live-event component
- `js/performances.js` — performance component
- `js/breadcrumb.js` + `js/breadcrumb-map.js` — breadcrumb system
- `js/my-carousel.js` + `js/carousel-init.js` — carousel system
- `js/nav-menu.js` — shared navigation
- `js/contact_me.js` — contact functionality
- jQuery / bootstrap runtime / validation scripts remain compatibility dependencies until audited

## Confirmed repairs

### About
`html/nav/about.html` had malformed/nested columns, mismatched project images/descriptions, a broken Kasane Teto URL, duplicated content and stale project information. It has been rebuilt as a current **About + archive gateway** while continuing to use the existing CSS and `projects_3.js` component.

### Art Practice
`html/extra/art_practice.html` contained incorrect relative paths such as `../../html/...` from an already nested `/html/extra/` page. Those links were repaired while retaining `artPracticeGallery.js`.

### Project renderer
`js/projects_3.js` remains structurally compatible with the existing layout but now accepts an optional section heading and lazy-loads project images. The old hardcoded `Latest Projects` label is no longer required.

## Existing archive layers

| Layer | Location | Purpose |
|---|---|---|
| Home | `index.html` | Hero/carousel + dynamic access to archive contents |
| Project indexes | `html/projects/*.html` | Existing project taxonomy |
| Project records | `html/projects/{animation,audio,interactive,games,collaborations}/` | Individual works/collaborations |
| Practice | `html/extra/art_practice.html` + nested pages | Older media/practice archive |
| History | `html/extra/brief_history.html` | Major historical source |
| Documentation | `html/extra/{exhibitions,performances,live_events,videoart}.html` | Events/documentation |
| Navigation | `html/nav/` | About/contact |
| WIP | `html/workinprogress.html` | Unfinished/experimental work |
| Historical sources | `old_pages/` | Older versions; research material |
| Images | `images/` | Large visual archive requiring mapping |

## Works currently confirmed

### Animation
- EWP Project — 2019–2023
- Daly Syndrome — in development
- Get Hit Below — existing page requires verification
- The Last Day of Kasane Teto — 2025
- Triple Baka by Ilya Minin (Eli) — 2025

### Audio / sound
- Geztålt
- eli
- Tanerlach
- nested material under `html/projects/audio/`

### Interactive
- Belial

### Games
- Desolation Odissey
- Elysium
- Metaliminal
- Night Mafia
- Outsider
- Sleepdom

### Art Practice / older material
- Serial Experiments Lens
- Graphics
- Painting
- CGI
- Installations
- Mixed Technique
- Photoseries
- Single Photos

### Collaborations
Existing records include Anna Mikhaylova, Asya Melnikova, Blikk, Dynakyris, E6, Georgiy Orlov Davydovsky, Igor Yanovsky, Julia Baranyuk, Marysia Izdebska, Nipagana, Oleg Makarov, Romaner, Sasha E__B and additional records requiring enumeration.

## Historical source

`html/extra/brief_history.html` contains material that should be reorganized rather than discarded:

- artist statement
- biography
- education
- professional history
- major works
- exhibitions
- performances
- lectures
- collaborations

The eventual structure should separate **About / Practice / Biography / Timeline / Documentation** while retaining historical facts.

## Identity

Current identity: **Ilya Minin (Eli)**.

Historical **ELIAS ADAMS** material should remain identifiable as archival provenance where relevant.

## New work migration

The old site predates a substantial part of the current eli_lab archive. Newer audiovisual, CGI, animation, sound, UTAU/Vocal Synth, Japan/field-recording and related works should be added after their actual repository assets/pages are mapped. Do not invent paths or images.

## Target structure

```text
eli_lab
├── Home
│   ├── Hero / conceptual entry
│   └── Selected Projects / archive access
├── About
│   ├── Current practice
│   ├── Artist statement
│   ├── Biography
│   └── Archive context
├── Projects
│   ├── All
│   ├── Animation / Video
│   ├── CGI / 3D
│   ├── Sound / Music
│   ├── Interactive
│   ├── Games
│   ├── Installation
│   ├── Performance
│   └── Collaborations
├── Extra / Documentation
│   ├── Art Practice
│   ├── Exhibitions
│   ├── Performances
│   ├── Live Events
│   ├── Video Art
│   └── Lectures / historical documentation
├── Archive
│   ├── Timeline
│   ├── Experiments / WIP
│   └── ELIAS ADAMS archive
└── Contact
```

## Next sequence

1. Audit every reusable JS component and its consumers.
2. Enumerate every project/index/extra page and classify complete, incomplete, duplicate, placeholder or historical.
3. Map `images/` assets to actual works.
4. Rebuild Projects indexes without breaking existing URLs.
5. Reorganize Extra/documentation.
6. Rework Biography/History from the old source.
7. Add newer eli_lab works with verified assets and metadata.
8. Only then remove genuinely unused dependencies.