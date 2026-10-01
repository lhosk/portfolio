import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  style_home_card,
  style_home_card_title,
  style_home_card_desc,
  colors,
  fonts,
} from '../components/styles';
import featuredImg from '../assets/images/soccerdata/touch_heatmap_dual.png';

const languages = ['Bash', 'C++', 'JavaScript', 'LaTeX', 'Markdown', 'MATLAB', 'Python', 'SQL'];

const explore = [
  { title: 'Projects', desc: 'ML, simulations, graphics and data', path: '/projects' },
  { title: 'Papers', desc: 'Physics write-ups and interactive explainers', path: '/papers' },
  { title: 'Career', desc: 'Experience, skills and certificates', path: '/career' },
  { title: 'Photos', desc: 'Places, people and animals', path: '/photos' },
];

const fadeDelay = (i) => ({ animationDelay: `${i * 0.08}s` });

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
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.13) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          WebkitMaskImage: 'linear-gradient(115deg, transparent 25%, #000 85%)',
          maskImage: 'linear-gradient(115deg, transparent 25%, #000 85%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(209,66,0,0.14) 0%, transparent 60%)',
        }} />

        <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(32px, 5vw, 72px)' }}>
          <div style={{ flex: '1 1 440px', minWidth: 0, containerType: 'inline-size' }}>
            <div className="fade-up" style={{ ...style_home_eyebrow, ...fadeDelay(0) }}>2026 Portfolio</div>
            <div className="fade-up" style={{ ...style_home_name, ...fadeDelay(1) }}>
              LUCAS HOSKIN<span style={{ color: colors.accent }}>.</span>
            </div>
            <div className="fade-up" style={{ ...style_home_eyebrow, color: colors.muted, ...fadeDelay(2) }}>Raleigh, North Carolina</div>
            <div className="fade-up" style={{ ...style_home_subtitle, ...fadeDelay(3) }}>
              Applied physics and CS grad student at UNC Charlotte. I spend most of my time on scientific computing, data science, machine learning, and simulations.
            </div>
            <div className="fade-up" style={{ width: 'fit-content', maxWidth: '100%', marginBottom: '36px', ...fadeDelay(4) }}>
              <div style={style_home_section_label}>Languages</div>
              <div style={style_home_section_line} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {languages.map((lang) => (
                  <span key={lang} style={style_home_tag}>{lang}</span>
                ))}
              </div>
            </div>
            <div className="fade-up" style={{ width: 'fit-content', maxWidth: '100%', ...fadeDelay(5) }}>
              <div style={style_home_section_label}>Contact Me / Socials</div>
              <div style={style_home_section_line} />
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="hover-accent" style={style_contact_btn} onClick={copyEmail}>{copied ? 'COPIED!' : 'Email'}</a>
              <a className="hover-accent" style={style_contact_btn} href="https://github.com/lhosk" target="_blank" rel="noreferrer">GitHub</a>
              <a className="hover-accent" style={style_contact_btn} href="https://linkedin.com/in/lhosk" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="hover-accent" style={style_contact_btn} href="https://open.spotify.com/user/b9sdhtywj28lh1yg15zfjg3s6" target="_blank" rel="noreferrer">Spotify</a>
              </div>
            </div>
          </div>

          <div className="fade-up" style={{ flex: '1 1 320px', maxWidth: '520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px', ...fadeDelay(6) }}>
            <div style={style_home_section_label}>Latest Project</div>
            <Link to="/projects/soccerdata" className="hover-lift" style={{ ...style_home_card, padding: 0, overflow: 'hidden' }}>
              <img src={featuredImg} alt="Touch heatmap from the World Cup 2026 soccer data project" style={{ width: '100%', display: 'block', aspectRatio: '7 / 4', objectFit: 'cover', objectPosition: 'center 65%' }} />
              <div style={{ padding: 'clamp(12px, 1.4vw, 16px)' }}>
                <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', marginBottom: '6px' }}>PYTHON · 2026</div>
                <div style={style_home_card_title}>World Cup 2026 Soccer Data</div>
                <div style={style_home_card_desc}>Scraped event data, a SQLite pipeline and match graphics for every game.</div>
              </div>
            </Link>

            <div style={{ ...style_home_section_label, marginTop: '10px' }}>Explore</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '12px' }}>
              {explore.map((e) => (
                <Link key={e.path} to={e.path} className="hover-lift" style={style_home_card}>
                  <div style={{ ...style_home_card_title, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    {e.title}<span style={{ color: colors.accent }}>→</span>
                  </div>
                  <div style={style_home_card_desc}>{e.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
