import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import {
  style_page_bg,
  style_section,
  style_section_eyebrow,
  style_section_title,
  style_filter_btn,
  style_filter_btn_active,
  style_proj_grid,
  style_proj_card,
  style_proj_title,
  style_proj_desc,
  colors,
} from '../components/styles';
import shuttheboximg from "../assets/images/papers/shutthebox.png"
import phononimg from "../assets/images/papers/phonon.png"

const langColors = {
  Python:     { accent: 'rgba(75,139,190,0.53)',  label: '#2a5a8a' },
  'C++':      { accent: 'rgba(0,52,100,0.53)',    label: '#003464' },
  MATLAB:     { accent: 'rgba(141,14,37,0.53)',   label: '#8D0E25' },
  JavaScript: { accent: 'rgba(201,169,0,0.53)',   label: '#7a6600' },
};

const projectData = [
  { title: 'Optimal Strategy in Shut The Box', lang: 'Python', year: 2026, desc: 'Dynamic programming · Monte Carlo simulation · Game Theory', path: '/papers/shutthebox', image: shuttheboximg},
  { title: 'Introduction to Phonons (In Progress)', lang: 'Python', year: 2026, desc: 'Update Me', path: '/papers/phononintro', image: phononimg},
];

const langFilters = ['All', 'Python'];
const yearFilters = ['All Years', '2026'];

function Papers() {
  const [activeLang, setActiveLang] = useState('All');
  const [activeYear, setActiveYear] = useState('All Years');

  const availableLangs = activeYear === 'All Years'
    ? new Set(projectData.map(p => p.lang))
    : new Set(projectData.filter(p => p.year === parseInt(activeYear)).map(p => p.lang));

  const availableYears = activeLang === 'All'
    ? new Set(projectData.map(p => p.year))
    : new Set(projectData.filter(p => p.lang === activeLang).map(p => p.year));

  const isMatch = (p) => {
    const langMatch = activeLang === 'All' || p.lang === activeLang;
    const yearMatch = activeYear === 'All Years' || p.year === parseInt(activeYear);
    return langMatch && yearMatch;
  };

  const langBtnStyle = (f) => {
    const isActive = activeLang === f;
    const isAvailable = f === 'All' || availableLangs.has(f);
    if (isActive) return style_filter_btn_active;
    return { ...style_filter_btn, opacity: isAvailable ? 1 : 0.3, filter: isAvailable ? 'none' : 'blur(1px)', pointerEvents: isAvailable ? 'auto' : 'none' };
  };

  const yearBtnStyle = (y) => {
    const isActive = activeYear === y;
    const isAvailable = y === 'All Years' || availableYears.has(parseInt(y));
    if (isActive) return style_filter_btn_active;
    return { ...style_filter_btn, opacity: isAvailable ? 1 : 0.3, filter: isAvailable ? 'none' : 'blur(1px)', pointerEvents: isAvailable ? 'auto' : 'none' };
  };

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>PAPERS </div>

        <div style={{ display: 'flex', gap: 'clamp(4px, 0.6vw, 8px)', marginBottom: '10px', flexWrap: 'wrap' }}>
          {langFilters.map((f) => (
            <button key={f} style={langBtnStyle(f)} onClick={() => setActiveLang(f)}>
              {f === 'All' ? `All (${projectData.length})` : f}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 'clamp(4px, 0.6vw, 8px)', marginBottom: '24px', flexWrap: 'wrap' }}>
          {yearFilters.map((y) => (
            <button key={y} style={yearBtnStyle(y)} onClick={() => setActiveYear(y)}>
              {y}
            </button>
          ))}
        </div>

        <div style={style_proj_grid}>
          {projectData.map((p, i) => {
            const lc = langColors[p.lang];
            const matched = isMatch(p);
            return (
              <Link key={i} to={p.path} style={{ textDecoration: 'none', display: matched ? 'block' : 'none' }}>
                <div style={{ ...style_proj_card, position: 'relative', cursor: 'pointer' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'clamp(4px, 0.5vw, 6px)', background: lc.accent, borderRadius: '12px 12px 0 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(4px, 0.6vw, 8px)' }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 'clamp(10px, 1.1vw, 13px)', color: lc.label, letterSpacing: '1px' }}>
                      {p.lang.toUpperCase()}
                    </div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 'clamp(9px, 1vw, 11px)', color: colors.muted, fontWeight: '400' }}>
                      {p.year}
                    </div>
                  </div>
                  <div style={style_proj_title}>{p.title}</div>
                  <div style={style_proj_desc}>{p.desc}</div>
                  {p.image && (
                    <img src={p.image} alt={p.title}
                      style={{ width: '100%', maxHeight: 'clamp(80px, 12vw, 120px)', borderRadius: '8px', marginTop: '0px', objectFit: 'contain' }} />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}

export default Papers;