# eli_lab archive inventory

Working rebuild map for `eli_lab_official`.

## Core rule

This site is hosted on **Vercel** and contains a substantial custom frontend layer. The Bootstrap-derived files have been manually rewritten and are part of the existing design system. Do **not** replace them with stock Bootstrap or remove them simply because of their filenames.

The existing JavaScript components are intentional infrastructure for simplifying archive pages. Preserve their behavior and repair them incrementally.

## Existing frontend system

### CSS
- `css/bootstrap.css` — customized framework layer
- `css/bootstrap.min.css` — active compact framework layer
- `css/bootstrap.min copy.css` — duplicate/variant; compare before removal
- `css/modern-business.css` — site-specific layer
- many historical pages also use inline/custom styles

### Reusable JavaScript
- `js/projects_3.js` — reusable project grid
- `js/projects_4.js` — project grid used by older indexes
- `js/projects_text.js` — text project cards
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

## Confirmed repairs / migration work

### About
`html/nav/about.html` is now a current **About + archive gateway**. Its selected-work images point to actual assets in the new animation archive, and it now exposes dedicated CGI/3D and Artwork entry points.

### Art Practice
`html/extra/art_practice.html` contained incorrect relative paths such as `../../html/...` from an already nested `/html/extra/` page. Those links were repaired while retaining `artPracticeGallery.js`.

### Project renderer
`js/projects_3.js` remains structurally compatible with the existing layout but now accepts an optional section heading and lazy-loads project images.

### New image-backed indexes
- `html/projects/cgi.html` — newly surfaced CGI / 3D archive material
- `html/projects/artwork.html` — newly surfaced painting / graphics / installation / mixed-technique material
- `html/projects/all.html` — expanded to expose the new archive categories
- `html/projects/animation.html` — now uses the newly added Kasane Teto / Triple Baka documentation images instead of generic WIP imagery
- `html/workinprogress.html` — generic placeholder converted from Lorem Ipsum into an explicit archive-record status page

## Image archive gaps identified

The image repository is substantially broader than the old project indexes. The following clusters were confirmed as material needing archive exposure or further page mapping:

### CGI / 3D
- `images/CG/3D ESSENTIALS (2020-2021)/` — Towny, Gaika, Drema, Swirl, Neuron Brain and related studies
- `images/CG/Latest/` — Bloody, Bloody 2
- `images/CG/Dessigns/`
- `images/CG/Graph/`
- `images/CG/Teto/`
- `images/CG/semi-spatial_apartment/`
- `images/CG Design Ilya Minin (Eli)/` — Bonza, Mockups, Motion Design, Online Shop, Others
- `images/CG For Site/` — 3D design, album covers, events, logo and other site-design material

The first representative CGI records are now surfaced through `cgi.html`; the remaining clusters still need individual identification rather than being falsely assigned to projects.

### Artwork / physical practice
- `images/Artwork/Graphics/Jewish gift/`
- `images/Artwork/Installations/No Skin/`
- `images/Artwork/Mixed Technique/`
- `images/Artwork/Painting/`
- `images/Artwork/Single Photos/`

Representative entries are now surfaced through `artwork.html`. The individual works still require historical titles/dates/context before becoming definitive records.

### Animation
The new image material includes substantial documentation for:
- `Tetopocalypsis (1–10).png`
- `Tetopocalypsis_additional (1–6).png`
- `the_last_day_of_KT` JPG/PNG sequence
- `the_last_day_of_KT_Additional` JPG sequence
- `triple_baka_screens` JPG/PNG sequence

The animation index now uses representative real images for the latter two works. Tetopocalypsis is still an identifiable image cluster without a verified project record and should be investigated next.

### Collaborations / performance
These image clusters contain additional documentation but should remain tied to their existing collaboration/performance taxonomy until individual records are checked:
- `images/Collaborations/`
- `images/Performances/`

## Works currently confirmed

### Animation
- EWP Project — 2019–2023
- Daly Syndrome — in development
- Get Hit Below — existing page requires verification
- The Last Day of Kasane Teto — 2025
- Triple Baka by Ilya Minin (Eli) — 2025
- Bogorodskoe — 2022
- 山は覚えている
- Tetopocalypsis — image archive present; project metadata/page still to be verified

### Audio / sound
- Geztålt
- eli
- Tanerlach
- Someone's voice (だれかの声) — feat. Akane Iirai
- しあわせがこわい — feat. 友人 / Eugene

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
- Installations / No Skin
- Mixed Technique
- Photoseries
- Single Photos
- Jewish gift
- 3D Essentials (2020–2021)
- Bonza / CG design material

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
│   ├── Artwork / Physical Practice
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

1. Enumerate the remaining `images/CG`, `CG Design`, `CG For Site`, `Artwork` and `Animation` clusters and identify their actual projects.
2. Audit each corresponding existing page for broken/placeholder content.
3. Create definitive records for identified works; use `workinprogress.html` only where metadata is genuinely incomplete.
4. Expand Extra/documentation using the historical image clusters.
5. Rework Biography/History from the old source.
6. Add newer eli_lab works with verified assets and metadata.
7. Only then remove genuinely unused dependencies.