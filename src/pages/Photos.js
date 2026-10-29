import React, { useState, useMemo, useCallback } from 'react';
import { style_section, style_card, colors, fonts } from '../components/styles';
import { PageHeader, Chevron } from '../components/DetailPage';
import { useIsNarrow } from '../components/hooks';
import photoIndex from '../data/photoIndex.json';
import FilterBar, { s_btn } from './photos/FilterBar';
import PhotoModal from './photos/PhotoModal';
import { thumbUrl, uniq } from './photos/format';

const DEFAULT_FILTERS = {
  country: 'All', state: 'All', city: 'All', year: 'All', month: 'All', camera: 'All', subject: 'All',
  hourMin: 0, hourMax: 24,
};

// default sort — newest first
const DEFAULT_SORTS = [{ key: 'date', dir: 'desc' }];

// does a photo pass every filter EXCEPT the one named?
const passes = (p, f, skip) => {
  for (const key of ['country', 'state', 'city', 'camera']) {
    if (skip !== key && f[key] !== 'All' && p[key] !== f[key]) return false;
  }
  for (const key of ['year', 'month']) {
    if (skip !== key && f[key] !== 'All' && p[key] !== +f[key]) return false;
  }
  if (skip !== 'subject' && f.subject !== 'All') {
    const subs = p.subjects || [];
    if (f.subject === 'Nobody' ? subs.length > 0 : !subs.includes(f.subject)) return false;
  }
  if (skip !== 'hour' && p.hour != null && (p.hour < f.hourMin || p.hour > f.hourMax)) return false;
  return true;
};

// multi-level comparator — walks the sort stack in order
const makeCompare = (sorts) => (a, b) => {
  for (const { key, dir } of sorts) {
    const av = a[key], bv = b[key];
    if (av == null && bv == null) continue;
    if (av == null) return 1;          // nulls always last
    if (bv == null) return -1;
    const c = typeof av === 'number' && typeof bv === 'number'
      ? av - bv
      : String(av).localeCompare(String(bv), undefined, { numeric: true });
    if (c !== 0) return dir === 'desc' ? -c : c;
  }
  return 0;
};

const s_grid = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(220px, 24vw, 280px), 1fr))',
  gap: 'clamp(8px, 2.4vw, 32px)',
};

// applied to the page content while a photo is open
const s_dimmed = { filter: 'grayscale(0.6) brightness(0.9)', transition: 'filter 0.25s ease' };

function Thumb({ photo, onOpen }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <button className="photo-tile" onClick={onOpen} aria-label={`Open photo: ${photo.caption || photo.file}`}>
      <img src={thumbUrl(photo.file)} alt={photo.caption || photo.file} loading="lazy" decoding="async"
        className={loaded ? 'loaded' : undefined} onLoad={() => setLoaded(true)} />
    </button>
  );
}

function Photos() {
  const isMobile = useIsNarrow(700);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sorts, setSorts] = useState(DEFAULT_SORTS);
  const [panelOpen, setPanelOpen] = useState(!isMobile);
  const [selectedFile, setSelectedFile] = useState(null);

  const setFilter = (key, value) => setFilters((f) => ({ ...f, [key]: value }));
  const resetFilters = () => setFilters(DEFAULT_FILTERS);
  const resetSorts = () => setSorts(DEFAULT_SORTS);

  const visible = useMemo(() => {
    const list = photoIndex.filter((p) => passes(p, filters, null));
    return sorts.length ? [...list].sort(makeCompare(sorts)) : list;
  }, [filters, sorts]);

  const opts = (key) => uniq(photoIndex.filter((p) => passes(p, filters, key)).map((p) => p[key]));

  const activeCount = ['country', 'state', 'city', 'year', 'month', 'camera', 'subject'].filter((k) => filters[k] !== 'All').length
    + (filters.hourMin > 0 || filters.hourMax < 24 ? 1 : 0);

  const index = selectedFile ? visible.findIndex((p) => p.file === selectedFile) : -1;
  const closeModal = useCallback(() => setSelectedFile(null), []);
  const step = useCallback((d) => {
    setSelectedFile((cur) => {
      const i = visible.findIndex((p) => p.file === cur);
      return i === -1 ? cur : visible[(i + d + visible.length) % visible.length].file;
    });
  }, [visible]);

  const label = { fontFamily: fonts.mono, fontSize: '11.5px', fontWeight: 500, letterSpacing: '1.2px', textTransform: 'uppercase' };

  return (
    <>
      <main style={{ ...style_section, ...(index !== -1 ? s_dimmed : { transition: 'filter 0.25s ease' }) }}>
        <PageHeader title="Photos" />

        {/* filters + sort */}
        <div style={{ ...style_card, padding: 0, marginBottom: 'clamp(12px, 1.8vw, 20px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '7px clamp(10px, 1.4vw, 16px)' }}>
            <button onClick={() => setPanelOpen(!panelOpen)} aria-expanded={panelOpen}
              style={{ ...label, display: 'flex', alignItems: 'center', gap: '10px', color: colors.text, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}>
              Filter &amp; Sort
              {activeCount > 0 && (
                <span style={{ fontSize: '11px', color: '#fff', background: colors.accent, borderRadius: '999px', padding: '2px 8px', letterSpacing: '0.5px' }}>{activeCount}</span>
              )}
              <span style={{ color: colors.accentInk, display: 'flex' }}><Chevron open={panelOpen} /></span>
            </button>
            <span style={{ ...label, fontWeight: 400, color: colors.faint }}>
              {visible.length} of {photoIndex.length}
            </span>
          </div>
          {panelOpen && (
            <div style={{ borderTop: `1px solid ${colors.border}`, padding: 'clamp(10px, 1.4vw, 16px)', animation: 'fade-in 0.2s ease' }}>
              <FilterBar filters={filters} setFilter={setFilter} opts={opts}
                sorts={sorts} setSorts={setSorts} resetFilters={resetFilters} resetSorts={resetSorts} />
            </div>
          )}
        </div>

        {/* grid */}
        {visible.length > 0 ? (
          <div style={s_grid}>
            {visible.map((p) => <Thumb key={p.file} photo={p} onOpen={() => setSelectedFile(p.file)} />)}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ fontSize: '18px', color: colors.muted }}>No photos match those filters.</div>
            <button className="hover-border" style={s_btn} onClick={resetFilters}>Reset filters ↺</button>
          </div>
        )}
      </main>

      {index !== -1 && <PhotoModal photos={visible} index={index} onClose={closeModal} onStep={step} />}
    </>
  );
}

export default Photos;
