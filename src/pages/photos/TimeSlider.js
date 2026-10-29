import React from 'react';
import { colors, fonts } from '../../components/styles';
import { fmtHour } from './format';

const THUMB = 20; // px, keep in sync with .range-dual in index.css

// one track, two handles; each handle is its own native range input so keyboard and touch just work
function TimeSlider({ min, max, onChange, labelStyle }) {
  const anyTime = min === 0 && max === 24;
  const at = (h) => `calc(${THUMB / 2}px + ${h / 24} * (100% - ${THUMB}px))`;

  return (
    <div style={{ flex: '1 1 260px', maxWidth: '400px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}>
        <span style={labelStyle}>Time of day</span>
        <span style={{ fontFamily: fonts.mono, fontSize: '11.5px', fontWeight: 500, color: anyTime ? colors.faint : colors.accentInk }}>
          {anyTime ? 'Any time' : `${fmtHour(min)} – ${fmtHour(max)}`}
        </span>
      </div>
      <div className="range-dual">
        <div className="range-track" />
        <div className="range-fill" style={{ left: at(min), width: `calc(${(max - min) / 24} * (100% - ${THUMB}px))` }} />
        <input type="range" min="0" max="24" step="0.25" value={min} aria-label="Earliest time of day"
          aria-valuetext={fmtHour(min)} style={{ zIndex: min > 20 ? 4 : 3 }}
          onChange={(e) => onChange(Math.min(+e.target.value, max), max)} />
        <input type="range" min="0" max="24" step="0.25" value={max} aria-label="Latest time of day"
          aria-valuetext={fmtHour(max)} style={{ zIndex: 3 }}
          onChange={(e) => onChange(min, Math.max(+e.target.value, min))} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: fonts.mono, fontSize: '10px', fontWeight: 400, color: colors.faint }}>
        <span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>12 AM</span>
      </div>
    </div>
  );
}

export default TimeSlider;
