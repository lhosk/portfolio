import React from 'react';
import { colors, fonts } from '../../components/styles';
import TimeSlider from './TimeSlider';
import { MONTHS } from './format';

const SUBJECT_OPTIONS = ['Animals', 'Lucas', 'Nobody', 'Other'];

// fields you can sort on
export const SORT_FIELDS = [
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

const CHEVRON = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%234a433b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")";

export const s_label = {
  display: 'block', fontFamily: fonts.mono, fontSize: '10.5px', fontWeight: 500, color: colors.faint,
  letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '3px',
};

const s_select = {
  width: '100%', fontFamily: fonts.mono, fontSize: '12px', fontWeight: 400, color: colors.text,
  padding: '6px 26px 6px 10px', borderRadius: '7px', border: `1px solid ${colors.borderStrong}`,
  backgroundColor: '#fffdf9', backgroundImage: CHEVRON, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center',
  appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', cursor: 'pointer',
  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
};

// tinted when a filter is off "All"
const s_selectActive = {
  ...s_select, border: `1px solid ${colors.accent}`, backgroundColor: 'rgba(209,66,0,0.07)', color: colors.accentInk, fontWeight: 500,
};

export const s_btn = {
  fontFamily: fonts.mono, fontSize: '11.5px', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase',
  padding: '6px 11px', borderRadius: '7px', border: `1px solid ${colors.borderStrong}`, background: 'transparent',
  color: colors.text, cursor: 'pointer',
};

const s_chip = {
  display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: fonts.mono, fontSize: '12px', fontWeight: 500,
  padding: '5px 10px', borderRadius: '7px', border: `1px solid ${colors.accent}`, background: 'rgba(209,66,0,0.07)', color: colors.accentInk,
};

const s_chipBtn = { font: 'inherit', color: 'inherit', background: 'none', border: 'none', padding: 0, cursor: 'pointer' };

function Dropdown({ label, value, onChange, options, render }) {
  return (
    <label style={{ display: 'block', minWidth: 0 }}>
      <span style={s_label}>{label}</span>
      <select style={value !== 'All' ? s_selectActive : s_select} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="All">All</option>
        {options.map((o) => <option key={o} value={o}>{render ? render(o) : o}</option>)}
      </select>
    </label>
  );
}

function SortStack({ sorts, setSorts }) {
  const labelOf = (key) => SORT_FIELDS.find((f) => f.key === key)?.label || key;
  const unused = SORT_FIELDS.filter((f) => !sorts.some((s) => s.key === f.key));

  const addSort = (key) => {
    if (!key || sorts.some((s) => s.key === key)) return;
    setSorts([...sorts, { key, dir: 'asc' }]);
  };
  const flipSort = (i) => {
    const next = [...sorts];
    next[i] = { ...next[i], dir: next[i].dir === 'asc' ? 'desc' : 'asc' };
    setSorts(next);
  };
  const dropSort = (i) => setSorts(sorts.filter((_, j) => j !== i));

  return (
    <div style={{ flex: '2 1 340px' }}>
      <span style={s_label}>Sort by <span style={{ textTransform: 'none', letterSpacing: '0.5px' }}>(stacks in order)</span></span>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        {sorts.map((s, i) => (
          <span key={s.key} style={s_chip}>
            <span style={{ opacity: 0.55 }}>{i + 1}</span>
            <button style={s_chipBtn} onClick={() => flipSort(i)} title="Flip direction">
              {labelOf(s.key)} {s.dir === 'asc' ? '↑' : '↓'}
            </button>
            <button style={{ ...s_chipBtn, opacity: 0.6 }} onClick={() => dropSort(i)} aria-label={`Remove ${labelOf(s.key)} sort`}>✕</button>
          </span>
        ))}
        {unused.length > 0 && (
          <select style={{ ...s_select, width: 'auto' }} value="" aria-label="Add a sort" onChange={(e) => addSort(e.target.value)}>
            <option value="">+ Add sort</option>
            {unused.map((f) => <option key={f.key} value={f.key}>{f.label}</option>)}
          </select>
        )}
      </div>
    </div>
  );
}

function FilterBar({ filters, setFilter, opts, sorts, setSorts, resetFilters, resetSorts }) {
  const dropdown = (key, label, render) => (
    <Dropdown label={label} value={filters[key]} onChange={(v) => setFilter(key, v)} options={opts(key)} render={render} />
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '8px 10px' }}>
        {dropdown('country', 'Country')}
        {dropdown('state', 'State')}
        {dropdown('city', 'City')}
        {dropdown('year', 'Year')}
        {dropdown('month', 'Month', (m) => MONTHS[m])}
        {dropdown('camera', 'Camera')}
        <Dropdown label="People" value={filters.subject} onChange={(v) => setFilter('subject', v)} options={SUBJECT_OPTIONS} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 36px', alignItems: 'flex-start' }}>
        <TimeSlider min={filters.hourMin} max={filters.hourMax} labelStyle={{ ...s_label, marginBottom: 0 }}
          onChange={(lo, hi) => { setFilter('hourMin', lo); setFilter('hourMax', hi); }} />
        <SortStack sorts={sorts} setSorts={setSorts} />
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button className="hover-border" style={s_btn} onClick={resetFilters}>Reset filters ↺</button>
        <button className="hover-border" style={s_btn} onClick={resetSorts}>Reset sort ↺</button>
      </div>
    </div>
  );
}

export default FilterBar;
