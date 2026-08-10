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
│   │   ├── full/                   # Originals (HEIC converted to JPG)
│   │   └── thumb/                  # 600px versions, auto-generated
│   ├── 404.html
│   └── index.html
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
│   │   ├── NavBar.js               # Site-wide navigation
│   │   └── styles.js               # Shared style objects + color tokens
│   │
│   ├── data/
│   │   └── photoIndex.json         # Generated photo metadata (see scripts/)
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
│   │   │   ├── FilterBar.js        # Country / state / city / month / year / people / camera
│   │   │   ├── TimeSlider.js       # Dual-handle time-of-day range
│   │   │   └── PhotoModal.js       # Full image + EXIF readout on click
│   │   │
│   │   ├── projects/
│   │   │   ├── gl/                 # WebGL project pages
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
│   │   │   ├── spinn.js
│   │   │   ├── srgan.js
│   │   │   ├── vrd.js
│   │   │   └── wave.js
│   │   │
│   │   ├── About.js
│   │   ├── Career.js
│   │   ├── HomePage.js
│   │   ├── Papers.js
│   │   ├── Photos.js
│   │   └── Projects.js
│   │
│   ├── App.js                      # Route definitions
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

## Photos pipeline

1. Drop originals into `public/photos/full/`
2. Run `node scripts/buildPhotoIndex.js`
   - Extracts EXIF: camera, ISO, focal length, f-stop, shutter, date/time, GPS
   - Reverse-geocodes GPS into country / state / city
   - Writes 600px thumbnails to `public/photos/thumb/`
   - Outputs `src/data/photoIndex.json`
3. Manually fill in `subjects` (Nobody / Lucas / Laz / Other) and `caption` in the JSON

Grid loads thumbnails only; full-size image loads on click.

## Some things to add later

- Quantum Papers
- Twitter Account