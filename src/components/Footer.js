import React from 'react';
import { style_container, colors, fonts } from './styles';
import { useCopyEmail } from './hooks';
import { socials } from '../data/site';
import LocalTime from './LocalTime';

const linkStyle = {
  fontFamily: fonts.mono, fontSize: '12px', fontWeight: 500, color: colors.muted,
  textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
};

function Footer() {
  const [copied, copyEmail] = useCopyEmail();

  return (
    <footer style={{ borderTop: `1px solid ${colors.border}` }}>
      <div style={{ ...style_container, display: 'flex', flexWrap: 'wrap', gap: '6px 24px', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 12px' }}>
          <span style={{ fontSize: '13px', letterSpacing: '1.2px' }}>
            LUCAS HOSKIN<span style={{ color: colors.accent }}>.</span>
          </span>
          <span style={{ fontFamily: fonts.mono, fontSize: '11.5px', fontWeight: 400, color: colors.faint }}>
            Raleigh, NC · <LocalTime />
          </span>
        </div>

        <div style={{ display: 'flex', gap: '6px 16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button className="hover-ink" style={linkStyle} onClick={copyEmail}>{copied ? 'Copied!' : 'Email'}</button>
          {socials.map((s) => (
            <a key={s.label} className="hover-ink" style={linkStyle} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>
          ))}
          <button className="hover-ink" style={linkStyle} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top ↑</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
