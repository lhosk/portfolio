# Portfolio

Personal portfolio site built with React + React Router.

## Structure

```
PORTFOLIO/
├── build/                          # Production build output (generated)
│   ├── files/
│   ├── static/
│   ├── 404.html
│   ├── asset-manifest.json
│   └── index.html
│
├── node_modules/                   # Dependencies (generated)
│
├── public/
│   ├── files/                      # Standalone WebGL demos (raw HTML + JS)
│   │   ├── archimedian.html / .js
│   │   ├── cubes.html / .js
│   │   ├── drawing.html / .js
│   │   ├── perspective.html / .js
│   │   ├── quaternion.html / .js
│   │   ├── rotating.html / .js
│   │   ├── triangles.html / .js
│   │   ├── volcano.html / .js
│   │   ├── teapot_test.html / .js
│   │   ├── teapot.js
│   │   ├── createTeapotData.js
│   │   ├── initShaders.js
│   │   ├── mat_vec.js
│   │   ├── MV.js
│   │   ├── patches.js
│   │   ├── utils.js
│   │   ├── vertices.js
│   │   └── README
│   ├── photos/                     # Served as static URLs, NOT bundled
│   │   ├── full/                   # 2000px JPGs (HEIC converted), auto-generated
│   │   └── thumb/                  # 600px versions, auto-generated
│   ├── 404.html
│   ├── favicon.png                 # Tab icon
│   ├── apple-touch-icon.png        # Home-screen icon
│   ├── og-image.png                # Link preview card (LinkedIn, iMessage, X)
│   └── index.html
│
├── photos-source/                  # Original photos (gitignored)
│
├── scripts/
│   └── buildPhotoIndex.js          # Reads EXIF, makes thumbs, geocodes GPS
│
├── src/
│   ├── assets/
│   │   ├── certificates/
│   │   ├── images/
│   │   ├── papers/
│   │   ├── sounds/
│   │   └── videos/
│   │
│   ├── components/
│   │   ├── DetailPage.js           # Layout for every write-up, plus PageHeader, Card, Figure, Chips...
│   │   ├── FilterGrid.js           # Language / year filter pills + card grid (Projects, Papers)
│   │   ├── Footer.js               # Links + live Raleigh time
│   │   ├── LocalTime.js
│   │   ├── NavBar.js               # Site-wide navigation
│   │   ├── hooks.js                # useIsNarrow, useCopyEmail, useNow
│   │   └── styles.js               # Shared style objects + color tokens
│   │
│   ├── data/
│   │   ├── photoIndex.json         # Generated photo metadata (see scripts/)
│   │   ├── projects.js             # Project, paper and WebGL demo cards
│   │   └── site.js                 # Email, socials, nav links
│   │
│   ├── pages/
│   │   ├── papers/
│   │   │   ├── phanimations/       # Animation modules for the phonon paper
│   │   │   │   ├── helpers.js
│   │   │   │   ├── index.js
│   │   │   │   ├── section2.js
│   │   │   │   ├── section6.js
│   │   │   │   └── section8.js
│   │   │   ├── phononintro.js
│   │   │   ├── phononintroanimations.js
│   │   │   └── shutthebox.js
│   │   │
│   │   ├── photos/
│   │   │   ├── FilterBar.js        # Country / state / city / month / year / people / camera + sort stack
│   │   │   ├── TimeSlider.js       # Dual-handle time-of-day range
│   │   │   ├── PhotoModal.js       # Full image + EXIF readout; arrow keys / swipe to step
│   │   │   └── format.js           # Month names, time + shutter formatting
│   │   │
│   │   ├── projects/
│   │   │   ├── gl/                 # WebGL project pages
│   │   │   │   ├── GlDemo.js       # Shared layout: overview, controls, scaled demo iframe
│   │   │   │   ├── archimedian.js
│   │   │   │   ├── cubes.js
│   │   │   │   ├── drawing.js
│   │   │   │   ├── perspective.js
│   │   │   │   ├── quaternion.js
│   │   │   │   ├── rotating.js
│   │   │   │   ├── triangles.js
│   │   │   │   └── volcano.js
│   │   │   ├── cnn.js
│   │   │   ├── connect4.js
│   │   │   ├── detection.js
│   │   │   ├── gl.js
│   │   │   ├── mcs.js
│   │   │   ├── mcsapf.js
│   │   │   ├── parallel.js
│   │   │   ├── recommendation.js
│   │   │   ├── rl.js
│   │   │   ├── rlgl.js
│   │   │   ├── soccerdata.js
│   │   │   ├── spinn.js
│   │   │   ├── srgan.js
│   │   │   ├── vrd.js
│   │   │   └── wave.js
│   │   │
│   │   ├── About.js
│   │   ├── Career.js
│   │   ├── HomePage.js
│   │   ├── NotFound.js
│   │   ├── Papers.js
│   │   ├── Photos.js
│   │   └── Projects.js
│   │
│   ├── App.js                      # Route definitions (detail pages lazy-load)
│   ├── index.css                   # Global CSS: hovers, focus rings, nav underline, slider
│   └── index.js                    # React entry point
│
├── .gitattributes
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Pages

- **HomePage** — landing page
- **About** — bio
- **Career** — experience + certificates
- **Projects** — filterable project grid (language / year)
- **Papers** — filterable writeups grid
- **Photos** — photo gallery with EXIF-based filters
- **NotFound** — catch-all for bad links

## Adding a project or paper

1. Add a card to `projects` (or `papers`) in `src/data/projects.js`: title, language, year, short description, path. Order there is the order on the page.
2. Create the page in `src/pages/projects/`, using `DetailPage`. It reads the language, year, back link and "next project" card from the data file by path, so the page only needs its title, stack, links and content:

   ```jsx
   <DetailPage title="My Project" stack="Python · PyTorch" links={[{ label: 'View on GitHub', href: '...' }]}>
     <Card label="Overview"><Prose><p>...</p></Prose></Card>
     <Card label="Results"><Figure src={img} caption="..." /></Card>
   </DetailPage>
   ```
3. Add a lazy route for it in `src/App.js`.

Colors and type live in `src/components/styles.js`. `accent` is for fills and lines; use `accentInk` for small orange text so it stays readable on the light background. Font sizes use `fluid(min, max)`, which scales from the phone size (390px wide) to the desktop size (1440px wide).

## Photos pipeline

1. Drop originals (HEIC / JPG / PNG) into `photos-source/`
2. Run `node scripts/buildPhotoIndex.js`
   - Extracts EXIF: camera, ISO, focal length, f-stop, shutter, date/time, GPS
   - Reverse-geocodes GPS into country / state / city
   - Writes 2000px images to `public/photos/full/` and 600px thumbnails to `public/photos/thumb/`
   - Outputs `src/data/photoIndex.json` (already-indexed photos are skipped)
3. Manually fill in `subjects` (`Lucas` / `Animals` / `Other`, empty means Nobody) and `caption` in the JSON

Grid loads thumbnails only; the full-size image loads on click, with the cached thumbnail shown underneath until it arrives.

## Commands

```
npm start          # dev server at http://localhost:3000/portfolio
npm run build      # production build into build/
npm run deploy     # build, then publish build/ to GitHub Pages
```

`start` and `build` run Node with `--no-deprecation`. Create React App is no longer maintained, and newer Node versions flag some of the APIs it uses (`fs.F_OK`, old webpack-dev-server options) as deprecated. Those warnings come from its internals, not from this site's code. If a build says the Browserslist data is old, run `npx update-browserslist-db@latest`.

## Some things to add later

- Quantum Papers
- Twitter Account