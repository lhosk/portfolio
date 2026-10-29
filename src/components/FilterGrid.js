import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  style_filter_btn,
  style_filter_btn_active,
  style_proj_grid,
  style_proj_card,
  style_proj_title,
  style_proj_desc,
  langColors,
  colors,
  fonts,
  fluid,
} from './styles';
import { StatusBadge } from './DetailPage';

export function ProjectCard({ p }) {
  const lc = langColors[p.lang];
  return (
    <Link to={p.path} className="hover-lift" style={style_proj_card}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: lc.bar }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
        <span style={{ fontFamily: fonts.mono, fontSize: fluid(10.5, 11), fontWeight: 500, color: lc.ink, letterSpacing: '1.2px' }}>
          {p.lang.toUpperCase()}
        </span>
        <span style={{ fontFamily: fonts.mono, fontSize: fluid(10.5, 11), fontWeight: 400, color: colors.faint }}>{p.year}</span>
      </div>
      {p.status && <div style={{ marginBottom: '6px' }}><StatusBadge>{p.status}</StatusBadge></div>}
      <div style={style_proj_title}>{p.title}</div>
      <div style={style_proj_desc}>{p.desc}</div>
      {p.image && (
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <div style={{ borderRadius: '7px', background: colors.surface2, padding: '8px', display: 'flex', justifyContent: 'center' }}>
            <img src={p.image} alt="" loading="lazy" style={{ height: '72px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </Link>
  );
}

// Language + year filter pills over a card grid. A row only shows when it has a choice to make.
function FilterGrid({ items }) {
  const [lang, setLang] = useState('All');
  const [year, setYear] = useState('All');

  const langs = [...new Set(items.map((p) => p.lang))];
  const years = [...new Set(items.map((p) => p.year))].sort((a, b) => b - a);

  const langMatch = (p, l = lang) => l === 'All' || p.lang === l;
  const yearMatch = (p, y = year) => y === 'All' || p.year === y;
  const visible = items.filter((p) => langMatch(p) && yearMatch(p));

  const pill = (active, count) => (active
    ? style_filter_btn_active
    : { ...style_filter_btn, opacity: count ? 1 : 0.4, cursor: count ? 'pointer' : 'default' });

  const count = (n, active) => (
    <span style={{ fontWeight: 400, opacity: active ? 0.85 : 0.6 }}>{n}</span>
  );

  const row = { display: 'flex', gap: '6px', flexWrap: 'wrap' };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: 'clamp(12px, 1.6vw, 16px)' }}>
        {langs.length > 1 && (
          <div role="group" aria-label="Filter by language" style={row}>
            {['All', ...langs].map((l) => {
              const n = items.filter((p) => langMatch(p, l) && yearMatch(p)).length;
              const active = lang === l;
              return (
                <button key={l} onClick={() => setLang(l)} disabled={!n} aria-pressed={active}
                  className={active || !n ? undefined : 'hover-border'} style={pill(active, n)}>
                  {l !== 'All' && <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: langColors[l].bar, boxShadow: active ? '0 0 0 1.5px #fff' : 'none' }} />}
                  {l}
                  {count(n, active)}
                </button>
              );
            })}
          </div>
        )}

        {years.length > 1 && (
          <div role="group" aria-label="Filter by year" style={row}>
            {['All', ...years].map((y) => {
              const n = items.filter((p) => yearMatch(p, y) && langMatch(p)).length;
              const active = year === y;
              return (
                <button key={y} onClick={() => setYear(y)} disabled={!n} aria-pressed={active}
                  className={active || !n ? undefined : 'hover-border'} style={pill(active, n)}>
                  {y === 'All' ? 'All years' : y}
                  {count(n, active)}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div style={style_proj_grid}>
        {visible.map((p) => <ProjectCard key={p.path} p={p} />)}
      </div>
    </>
  );
}

export default FilterGrid;
