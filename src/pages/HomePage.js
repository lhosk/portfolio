import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import {
  style_page_bg,
  style_home,
  style_home_eyebrow,
  style_home_name,
  style_home_subtitle,
  style_home_section_label,
  style_home_section_line,
  style_home_tag,
  style_contact_btn,
  colors
} from '../components/styles';

const languages = ['Bash', 'C++', 'JavaScript', 'LaTeX', 'Markdown', 'MATLAB', 'Python', 'SQL'];

function HomePage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('LHoskin.Work@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 750);
  };

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_home}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(255,79,0,0.08) 0%, transparent 60%)',
        }} />
        <div style={style_home_eyebrow}>2026 Portfolio</div>
        <div style={style_home_name}>LUCAS<br />HOSKIN</div>
        <div style={{...style_home_eyebrow, color: colors.muted}}>Raleigh, North Carolina</div>
        <div style={style_home_subtitle}>
          Applied physics and CS grad student at UNC Charlotte. I spend most of my time on scientific computing, data science, machine learning, and simulations.
        </div>
        <div style={{ width: 'fit-content', marginBottom: '36px' }}>
          <div style={style_home_section_label}>Languages</div>
          <div style={style_home_section_line} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {languages.map((lang) => (
              <span key={lang} style={style_home_tag}>{lang}</span>
            ))}
          </div>
        </div>
        <div style={{ width: 'fit-content' }}>
          <div style={style_home_section_label}>Contact Me / Socials</div>
          <div style={style_home_section_line} />
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a style={style_contact_btn} onClick={copyEmail}>{copied ? 'COPIED!' : 'Email'}</a>
          <a style={style_contact_btn} href="https://github.com/lhosk" target="_blank" rel="noreferrer">GitHub</a>
          <a style={style_contact_btn} href="https://linkedin.com/in/lhosk" target="_blank" rel="noreferrer">LinkedIn</a>
          <a style={style_contact_btn} href="https://open.spotify.com/user/b9sdhtywj28lh1yg15zfjg3s6" target="_blank" rel="noreferrer">Spotify</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;