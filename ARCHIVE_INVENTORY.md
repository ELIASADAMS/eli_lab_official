# eli_lab archive inventory

Initial inventory for the rebuild of `eli_lab_official`.

This is a **classification document**, not a claim that every historical work is already fully documented. Existing HTML is treated as source material; missing facts are intentionally marked for later verification.

## Current repository layers

| Layer | Location | Role in new archive |
|---|---|---|
| Homepage | `index.html` | New archive-first entrance |
| Project indexes | `html/projects/*.html` | Legacy work taxonomy; migrate into master Works index |
| Project records | `html/projects/{animation,audio,interactive,games,collaborations}/` | Existing artwork/project records |
| Practice / history | `html/extra/` | Biography, artistic practice, exhibitions, performances, events, video art |
| Navigation pages | `html/nav/` | About and contact |
| WIP | `html/workinprogress.html` | Experiments / unfinished work |
| Historical pages | `old_pages/` | Source material; preserve, compare, extract, do not publish blindly |
| Images | `images/` | Existing visual archive; requires later asset inventory |
| Legacy framework | `css/`, `js/`, `font-awesome/`, `node_modules/` | Technical debt / compatibility layer |

## Works currently confirmed

### Animation

- `EWP Project` — `html/projects/animation/ewp_project.html` — 2019–2023 source material
- `Daly Syndrome` — `html/projects/animation/daly_syndrome.html` — 2023–present / in development
- `Get Hit Below` — `html/projects/animation/get_hit_below.html` — metadata requires verification
- `The Last Day of Kasane Teto` — `html/projects/animation/the_last_day_of_kasane_teto.html` — 2025
- `Triple Baka by Ilya Minin (Eli)` — `html/projects/animation/triple_baka_by_ilya_minin_(eli).html` — 2025

Legacy index: `html/projects/animation.html`

### Audio / sound

- `Geztålt` — `html/projects/audio/geztalt.html` — collaborative sound/media project
- `eli` — `html/projects/audio/eli.html` — project page; details require normalization
- `Tanerlach` — `html/projects/audio/tanerlach.html` — project page; details require normalization
- Nested directories also exist for `audio/eli` and `audio/geztalt`.

Legacy index: `html/projects/audio.html`

### Interactive

- `Belial` — `html/projects/interactive/belial.html`

Legacy index: `html/projects/interactive.html`

### Games

- `Desolation Odissey` — `html/projects/games/desolation_odissey.html`
- `Elysium` — `html/projects/games/elysium.html`
- `Metaliminal` — `html/projects/games/metaliminal.html`
- `Night Mafia` — `html/projects/games/night_mafia.html`
- `Outsider` — `html/projects/games/outsider.html`
- `Sleepdom` — `html/projects/games/sleepdom.html`

Legacy index: `html/projects/games.html`

### Collaborations

Individual collaboration records currently exist under `html/projects/collaborations/`, including confirmed pages for:

- Anna Mikhaylova
- Asya Melnikova
- Blikk
- Dynakyris
- E6 (directory)
- Georgiy Orlov Davydovsky
- Igor Yanovsky
- Julia Baranyuk
- Marysia Izdebska
- Nipagana
- Oleg Makarov
- Romaner
- Sasha E__B
- additional collaboration records in the same directory require the next full API enumeration pass

Legacy index: `html/projects/collaborations.html`

## Practice / documentation source material

### `html/extra/`

- `art_practice.html` — artistic practice / conceptual material
- `brief_history.html` — major historical source; contains artist statement, education, experience, works, exhibitions, performances, lectures and collaborations
- `exhibitions.html` — exhibition documentation
- `live_events.html` — live event documentation
- `performances.html` — performance history
- `videoart.html` — video-art category
- nested directories exist for `art_practice`, `live_events`, and `performances`

These should become archive dimensions, not an undifferentiated `Extra` menu.

## Navigation / identity source material

### `html/nav/`

- `about.html`
- `contact.html`

The current identity should be **Ilya Minin (Eli)**. Historical **ELIAS ADAMS** material is retained as provenance and should eventually receive an explicit archive label.

## Work in progress

- `html/workinprogress.html`

This should become a legitimate `Experiments / WIP` archive category. Placeholder content should be replaced by explicit statuses rather than presented as completed works.

## Historical source pages

### `old_pages/`

- `about copy.html`
- `brief_history copy.html`
- `brief_history copy 2.html`
- `temptation.html`
- `test.html`
- `upd.html`

These are research sources. The multiple biography variants are particularly important because they may contain information that disappeared from the current page.

## Technical debt discovered during initial rebuild

1. Homepage depends on Bootstrap and a legacy carousel for basic structure.
2. Navigation depends on Bootstrap's collapse/dropdown behavior and uses absolute `/html/...` URLs, which can break on repository-based GitHub Pages deployments.
3. `projects_3.js` labels the homepage section `Latest Projects` even though the list is a fixed historical selection.
4. Several legacy pages contain nested `.row` structures, inline styles and inconsistent containers.
5. `Geztålt` contains placeholder `Lorem ipsum` material and links that point to missing/incorrect relative paths; this is an explicit cleanup target.
6. Legacy pages share duplicated or copied HTML structures and, in several cases, identical blob content despite different filenames.
7. Bootstrap is duplicated (`bootstrap.css`, `bootstrap.min.css`, `bootstrap.min copy.css`).
8. `node_modules/` is committed and should eventually be removed from the static archive repository if it is not required by a real build process.
9. `app.js` is empty.
10. The archive has no single machine-readable source of truth for title, year, medium, status, collaborators, media and related works.

## New structure already started

- `css/eli-archive.css` — responsive design system for new archive pages
- `html/archive/index.html` — new archive entrance / migration map
- `index.html` — rebuilt archive-first homepage
- `js/nav-menu.js` — rebuilt navigation that works without Bootstrap and resolves the GitHub Pages repository root dynamically

## Target taxonomy

```text
eli_lab
├── Works
│   ├── Selected
│   ├── All
│   ├── CGI / 3D
│   ├── Animation
│   ├── Video Art
│   ├── Sound / Music
│   ├── Interactive
│   ├── Games
│   ├── Installation
│   └── Performance
├── Archive
│   ├── Timeline
│   ├── Projects
│   ├── Experiments / WIP
│   └── ELIAS ADAMS Archive
├── Practice
│   ├── About
│   ├── Artist Statement
│   ├── Practice / Methods
│   └── Biography
├── Documentation
│   ├── Exhibitions
│   ├── Performances
│   ├── Live Events
│   ├── Lectures
│   └── Collaborations
└── Index
    ├── People
    ├── Characters
    ├── Technologies
    ├── Locations
    └── Themes
```

## Next migration pass

1. Enumerate every remaining collaboration and nested project file.
2. Audit all HTML for broken links, placeholder text, duplicate structures and malformed markup.
3. Build a master work data file from confirmed facts only.
4. Normalize artwork records into one template.
5. Move historical biography material into About / Biography / Timeline / Documentation without losing source text.
6. Replace remaining legacy Bootstrap layouts progressively; do not break working historical URLs until replacements exist.
7. Audit the `images/` tree and map assets to works.
