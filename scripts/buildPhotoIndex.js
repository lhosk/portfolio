const exifr = require('exifr');
const convert = require('heic-convert');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC   = 'photos-source';
const FULL  = 'public/photos/full';
const THUMB = 'public/photos/thumb';
const OUT   = 'src/data/photoIndex.json';
const CACHE = 'scripts/.geocache.json';   // gitignored — holds the coords

const THUMB_W = 600;
const FULL_W  = 2000;

const sleep = ms => new Promise(r => setTimeout(r, ms));

// natural sort: 0, 1, 2, ... 10, 11 instead of 0, 1, 10, 11, 2
const natural = (a, b) => a.localeCompare(b, undefined, { numeric: true });

// "CO" -> "Colombia"; leaves already-full names alone
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
const fullCountry = (c) => {
  if (!c) return null;
  if (c.length !== 2) return c;
  try { return regionNames.of(c.toUpperCase()) || c; } catch { return c; }
};

async function geocode(lat, lng) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'portfolio-photo-index/1.0' } });
    const a = (await res.json()).address || {};
    return {
      country: a.country || fullCountry(a.country_code) || null,
      state:   a.state || a.province || null,
      city:    a.city || a.town || a.village || a.hamlet || a.county || null,
    };
  } catch (e) {
    console.log(`    ! geocode failed: ${e.message}`);
    return { country: null, state: null, city: null };
  }
}

// apply precision — decides what actually reaches the public JSON
function applyPrecision(entry, place) {
  const p = entry.precision || 'city';
  const country = fullCountry(place.country);
  if (p === 'none')    return { city: null, state: null, country: null };
  if (p === 'country') return { city: null, state: null, country };
  if (p === 'state')   return { city: null, state: place.state, country };
  return { city: place.city, state: place.state, country };
}

(async () => {
  let index = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : [];
  let cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
  const byFile = new Map(index.map(e => [e.file, e]));

  const files = fs.readdirSync(SRC)
    .filter(f => /\.(heic|heif|jpg|jpeg|png)$/i.test(f))
    .sort(natural);

  let added = 0;

  for (const file of files) {
    const outName = `${path.parse(file).name}.jpg`;
    if (byFile.has(outName)) { console.log(`  skip  ${outName}`); continue; }

    const srcPath = path.join(SRC, file);

    let ex = {};
    try { ex = (await exifr.parse(srcPath, { gps: true })) || {}; }
    catch (e) { console.log(`  ! EXIF failed on ${file}: ${e.message}`); }

    let buf;
    if (/\.(heic|heif)$/i.test(file)) {
      buf = await convert({ buffer: fs.readFileSync(srcPath), format: 'JPEG', quality: 0.95 });
    } else {
      buf = fs.readFileSync(srcPath);
    }

    // sharp strips EXIF by default — images carry no coords
    await sharp(buf).rotate().resize({ width: FULL_W, withoutEnlargement: true })
      .jpeg({ quality: 88 }).toFile(path.join(FULL, outName));
    await sharp(buf).rotate().resize({ width: THUMB_W, withoutEnlargement: true })
      .jpeg({ quality: 80 }).toFile(path.join(THUMB, outName));

    const dims = await sharp(buf).metadata();
    const d = ex.DateTimeOriginal ? new Date(ex.DateTimeOriginal) : null;

    // coords + resolved place go to the CACHE only
    if (ex.latitude != null && ex.longitude != null && !cache[outName]) {
      const place = await geocode(ex.latitude, ex.longitude);
      cache[outName] = { lat: ex.latitude, lng: ex.longitude, ...place };
      await sleep(1100);
    }

    byFile.set(outName, {
      file: outName,
      camera: [ex.Make, ex.Model].filter(Boolean).join(' ').trim() || 'Unknown',
      iso: ex.ISO ?? null,
      focal: ex.FocalLength ?? null,
      fstop: ex.FNumber ?? null,
      shutter: ex.ExposureTime ?? null,
      country: null,      // filled by the precision pass below
      state: null,
      city: null,
      precision: 'city',  // city | state | country | none
      year: d ? d.getFullYear() : null,
      month: d ? d.getMonth() + 1 : null,
      hour: d ? +(d.getHours() + d.getMinutes() / 60).toFixed(2) : null,
      date: d ? d.toISOString() : null,
      width: dims.width,
      height: dims.height,
      subjects: [],
      caption: '',
    });

    added++;
    console.log(`  ok    ${file} -> ${outName}`);
  }

  // precision pass — runs on EVERY entry, every run
  const final = [...byFile.values()]
    .sort((a, b) => natural(a.file, b.file))
    .map(e => {
      const place = cache[e.file];
      if (!place) return e;                     // no GPS, or you typed it in manually
      const { lat, lng, ...names } = place;
      return { ...e, ...applyPrecision(e, names) };
    });

  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2));
  fs.writeFileSync(OUT, JSON.stringify(final, null, 2));
  console.log(`\n${added} new, ${final.length} total`);
})();