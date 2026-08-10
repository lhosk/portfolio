import React, { useState, useMemo, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { style_page_bg, style_section, style_section_title, colors } from '../components/styles';
import photoIndex from '../data/photoIndex.json';

// change this one line if your accent lives under a different key
const ACCENT = colors.accent || '#003464';

const MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const SUBJECT_OPTIONS = ['Animals', 'Lucas', 'Nobody', 'Other'];

// default sort — newest first
const DEFAULT_SORTS = [{ key: 'date', dir: 'desc' }];

// fields you can sort on
const SORT_FIELDS = [
  { key: 'file', label: 'Filename' },
  { key: 'country', label: 'Country' },
  { key: 'state', label: 'State' },
  { key: 'city', label: 'City' },
  { key: 'year', label: 'Year' },
  { key: 'month', label: 'Month' },
  { key: 'hour', label: 'Time of day' },
  { key: 'date', label: 'Date' },
  { key: 'camera', label: 'Camera' },
  { key: 'iso', label: 'ISO' },
  { key: 'focal', label: 'Focal length' },
  { key: 'fstop', label: 'F-stop' },
  { key: 'shutter', label: 'Shutter' },
];

// ---------- formatting helpers ----------
const fmtShutter = (s) => {
  if (s == null) return null;
  return s >= 1 ? `${s}s` : `1/${Math.round(1 / s)}s`;
};

const fmtHour = (h) => {
  const hr = Math.floor(h);
  const min = Math.round((h - hr) * 60);
  const ampm = hr >= 12 ? 'PM' : 'AM';
  const h12 = hr % 12 === 0 ? 12 : hr % 12;
  return `${h12}:${String(min).padStart(2, '0')} ${ampm}`;
};

const uniq = (arr) => [...new Set(arr.filter(v => v != null && v !== ''))]
  .sort((a, b) => (typeof a === 'number' && typeof b === 'number') ? a - b : String(a).localeCompare(String(b)));

// ---------- inline styles ----------
const s_label = {
  fontFamily: "'DM Mono', monospace", fontSize: 'clamp(9px, 1vw, 11px)', color: colors.muted,
  letterSpacing: '1px', marginBottom: '4px', display: 'block',
};

const s_select = {
  fontFamily: "'DM Mono', monospace", fontSize: 'clamp(10px, 1.1vw, 12px)', padding: '6px 8px',
  borderRadius: '6px', border: `1px solid ${ACCENT}`, background: 'transparent',
  color: colors.text || '#222', cursor: 'pointer', minWidth: '120px',
};

// same tint as the sort chips — used when a filter is off "All"
const s_selectActive = { ...s_select, background: `${ACCENT}18`, fontWeight: 700 };

const s_btn = {
  fontFamily: "'DM Mono', monospace", fontSize: 'clamp(10px, 1.1vw, 12px)', padding: '6px 12px',
  borderRadius: '6px', border: `1px solid ${ACCENT}`, background: 'transparent',
  color: colors.text || '#222', cursor: 'pointer', letterSpacing: '1px',
};

const s_chip = { ...s_btn, display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${ACCENT}18` };

const s_filterRow = {
  display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px', alignItems: 'flex-end',
};

const s_grid = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(220px, 24vw, 340px), 1fr))',
  gap: 'clamp(4px, 8vw, 40px)',
};

const s_thumb = {
  width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', cursor: 'pointer', display: 'block',
};

const s_overlay = {
  position: 'fixed', inset: 0, background: 'rgba(20,20,20,0.55)', display: 'flex',
  alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px',
  backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
};

// applied to the page content while a photo is open
const s_dimmed = {
  filter: 'grayscale(0.6) brightness(0.9)', transition: 'filter 0.25s ease',
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
};

const s_modal = {
  display: 'flex', flexWrap: 'nowrap', gap: '24px', alignItems: 'center', width: 'auto',
  maxWidth: '90vw', maxHeight: '88vh', background: '#fff',
  padding: 'clamp(16px, 2vw, 28px)', overflowY: 'auto', WebkitOverflowScrolling: 'touch',
};

const s_meta = {
  fontFamily: "'DM Mono', monospace", fontSize: '12px', color: ACCENT,
  lineHeight: '1.9', flex: '0 0 200px',
};

const s_slider = { width: '100%', accentColor: ACCENT };

const s_modalImg = {
  maxWidth: '60vw', maxHeight: '78vh', width: 'auto', height: 'auto', display: 'block',
};

// ---------- component ----------
function Photos() {
  const [country, setCountry] = useState('All');
  const [state, setState] = useState('All');
  const [city, setCity] = useState('All');
  const [year, setYear] = useState('All');
  const [month, setMonth] = useState('All');
  const [subject, setSubject] = useState('All');
  const [camera, setCamera] = useState('All');
  const [hourMin, setHourMin] = useState(0);
  const [hourMax, setHourMax] = useState(24);
  const [sorts, setSorts] = useState(DEFAULT_SORTS);
  const [selected, setSelected] = useState(null);
  const isMobile = useIsMobile();

  const resetFilters = () => {
    setCountry('All'); setState('All'); setCity('All');
    setYear('All'); setMonth('All'); setSubject('All'); setCamera('All');
    setHourMin(0); setHourMax(24);
  };

  const resetSorts = () => setSorts(DEFAULT_SORTS);

  // does a photo pass every filter EXCEPT the one named?
  const passes = (p, skip) => {
    if (skip !== 'country' && country !== 'All' && p.country !== country) return false;
    if (skip !== 'state' && state !== 'All' && p.state !== state) return false;
    if (skip !== 'city' && city !== 'All' && p.city !== city) return false;
    if (skip !== 'year' && year !== 'All' && p.year !== +year) return false;
    if (skip !== 'month' && month !== 'All' && p.month !== +month) return false;
    if (skip !== 'camera' && camera !== 'All' && p.camera !== camera) return false;
    if (skip !== 'subject' && subject !== 'All') {
      const subs = p.subjects || [];
      if (subject === 'Nobody' ? subs.length > 0 : !subs.includes(subject)) return false;
    }
    if (skip !== 'hour' && p.hour != null && (p.hour < hourMin || p.hour > hourMax)) return false;
    return true;
  };

  // multi-level comparator — walks the sort stack in order
  const compare = (a, b) => {
    for (const { key, dir } of sorts) {
      const av = a[key], bv = b[key];
      if (av == null && bv == null) continue;
      if (av == null) return 1;          // nulls always last
      if (bv == null) return -1;
      let c = typeof av === 'number' && typeof bv === 'number'
        ? av - bv
        : String(av).localeCompare(String(bv), undefined, { numeric: true });
      if (c !== 0) return dir === 'desc' ? -c : c;
    }
    return 0;
  };

  const visible = useMemo(() => {
    const list = photoIndex.filter(p => passes(p, null));
    return sorts.length ? [...list].sort(compare) : list;
  }, [country, state, city, year, month, subject, camera, hourMin, hourMax, sorts]);

  const opts = (key) => uniq(photoIndex.filter(p => passes(p, key)).map(p => p[key]));

  // ---------- sort stack actions ----------
  const addSort = (key) => {
    if (!key || sorts.some(s => s.key === key)) return;
    setSorts([...sorts, { key, dir: 'asc' }]);
  };
  const flipSort = (i) => {
    const next = [...sorts];
    next[i] = { ...next[i], dir: next[i].dir === 'asc' ? 'desc' : 'asc' };
    setSorts(next);
  };
  const dropSort = (i) => setSorts(sorts.filter((_, j) => j !== i));

  const labelOf = (key) => SORT_FIELDS.find(f => f.key === key)?.label || key;
  const unusedSorts = SORT_FIELDS.filter(f => !sorts.some(s => s.key === f.key));

  const Dropdown = ({ label, value, setValue, options, render }) => (
    <div>
      <label style={s_label}>{label}</label>
      <select style={value !== 'All' ? s_selectActive : s_select}
        value={value} onChange={e => setValue(e.target.value)}>
        <option value="All">All</option>
        {options.map(o => <option key={o} value={o}>{render ? render(o) : o}</option>)}
      </select>
    </div>
  );

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={{ ...style_section, paddingLeft: 'clamp(24px, 10vw, 160px)', paddingRight: 'clamp(24px, 10vw, 160px)',
        ...(selected ? s_dimmed : { transition: 'filter 0.25s ease' }) }}>
        <div style={style_section_title}>PHOTOS</div>

        {/* filters */}
        <div style={s_filterRow}>
          <Dropdown label="COUNTRY" value={country} setValue={setCountry} options={opts('country')} />
          <Dropdown label="STATE" value={state} setValue={setState} options={opts('state')} />
          <Dropdown label="CITY" value={city} setValue={setCity} options={opts('city')} />
          <Dropdown label="YEAR" value={year} setValue={setYear} options={opts('year')} />
          <Dropdown label="MONTH" value={month} setValue={setMonth} options={opts('month')} render={m => MONTHS[m]} />
          <Dropdown label="CAMERA" value={camera} setValue={setCamera} options={opts('camera')} />

          <div>
            <label style={s_label}>PEOPLE</label>
            <select style={subject !== 'All' ? s_selectActive : s_select}
              value={subject} onChange={e => setSubject(e.target.value)}>
              <option value="All">All</option>
              {SUBJECT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <button style={s_btn} onClick={resetFilters}>RESET FILTERS ↺</button>
        </div>

        {/* time of day range */}
        <div style={{ marginBottom: '20px', maxWidth: '360px' }}>
          <label style={s_label}>TIME OF DAY — {fmtHour(hourMin)} to {fmtHour(hourMax)}</label>
          <input type="range" min="0" max="24" step="0.25" value={hourMin} style={s_slider}
            onChange={e => setHourMin(Math.min(+e.target.value, hourMax))} />
          <input type="range" min="0" max="24" step="0.25" value={hourMax} style={s_slider}
            onChange={e => setHourMax(Math.max(+e.target.value, hourMin))} />
        </div>

        {/* sort stack */}
        <div style={{ marginBottom: '20px' }}>
          <label style={s_label}>SORT BY (STACKS IN ORDER)</label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            {sorts.map((s, i) => (
              <span key={s.key} style={s_chip}>
                <span style={{ opacity: 0.5 }}>{i + 1}</span>
                <span onClick={() => flipSort(i)} style={{ cursor: 'pointer' }}>
                  {labelOf(s.key)} {s.dir === 'asc' ? '↑' : '↓'}
                </span>
                <span onClick={() => dropSort(i)} style={{ cursor: 'pointer', opacity: 0.5 }}>✕</span>
              </span>
            ))}
            {unusedSorts.length > 0 && (
              <select style={s_select} value="" onChange={e => { addSort(e.target.value); e.target.value = ''; }}>
                <option value="">+ add sort</option>
                {unusedSorts.map(f => <option key={f.key} value={f.key}>{f.label}</option>)}
              </select>
            )}
            <button style={s_btn} onClick={resetSorts}>RESET SORT ↺</button>
          </div>
        </div>

        <div style={{ ...s_label, marginBottom: '12px' }}>{visible.length} OF {photoIndex.length}</div>

        {/* grid */}
        <div style={s_grid}>
          {visible.map(p => (
            <img key={p.file} src={`${process.env.PUBLIC_URL}/photos/thumb/${p.file}`}
              alt={p.caption || p.file} style={s_thumb} onClick={() => setSelected(p)} loading="lazy" />
          ))}
        </div>

        <div style={{ height: '80px' }} />
      </div>

      {/* modal */}
      {selected && (
        <div style={s_overlay} onClick={() => setSelected(null)}>
          <div style={{
            ...s_modal,
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            gap: isMobile ? '14px' : '24px',
          }}
            onClick={e => e.stopPropagation()}>
            <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
              <img src={`${process.env.PUBLIC_URL}/photos/full/${selected.file}`}
                alt={selected.caption || selected.file}
                style={{ ...s_modalImg, maxWidth: isMobile ? '82vw' : '60vw', maxHeight: isMobile ? '52vh' : '78vh' }} />
            </div>
            <div style={{ ...s_meta, flex: '0 0 auto', width: isMobile ? '100%' : '200px' }}>
              {selected.caption && <div style={{ fontSize: '14px', marginBottom: '12px', color: '#333' }}>{selected.caption}</div>}
              {[selected.city, selected.state, selected.country].filter(Boolean).length > 0 && (
                <div>{[selected.city, selected.state, selected.country].filter(Boolean).join(', ')}</div>
              )}
              {selected.year && (
                <div>{MONTHS[selected.month]} {selected.year}{selected.hour != null ? ` · ${fmtHour(selected.hour)}` : ''}</div>
              )}
              <div style={{ height: '10px' }} />
              <div>{selected.camera === 'Unknown' ? 'No camera info' : selected.camera}</div>
              {selected.focal != null && <div>{selected.focal}mm</div>}
              {selected.fstop != null && <div>f/{selected.fstop}</div>}
              {selected.shutter != null && <div>{fmtShutter(selected.shutter)}</div>}
              {selected.iso != null && <div>ISO {selected.iso}</div>}
              <div style={{ marginTop: '16px', cursor: 'pointer', color: ACCENT }} onClick={() => setSelected(null)}>
                CLOSE ✕
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Photos;