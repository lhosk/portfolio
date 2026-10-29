import React from 'react';
import { Link } from 'react-router-dom';
import {
  style_container,
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
import { useCopyEmail } from '../components/hooks';
import { socials } from '../data/site';
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
  const [copied, copyEmail] = useCopyEmail();

  return (
    <main style={style_home}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(74,54,34,0.2) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        WebkitMaskImage: 'linear-gradient(115deg, transparent 25%, #000 85%)',
        maskImage: 'linear-gradient(115deg, transparent 25%, #000 85%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(209,66,0,0.13) 0%, transparent 60%)',
      }} />

      <div style={{ ...style_container, position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(22px, 4vw, 56px)' }}>
        <div style={{ flex: '1 1 440px', minWidth: 0, containerType: 'inline-size' }}>
          <div className="fade-up" style={{ ...style_home_eyebrow, ...fadeDelay(0) }}>2026 Portfolio</div>
          <h1 className="fade-up" style={{ ...style_home_name, ...fadeDelay(1) }}>
            LUCAS HOSKIN<span style={{ color: colors.accent }}>.</span>
          </h1>
          <div className="fade-up" style={{ ...style_home_eyebrow, color: colors.muted, ...fadeDelay(2) }}>Raleigh, North Carolina</div>
          <p className="fade-up" style={{ ...style_home_subtitle, ...fadeDelay(3) }}>
            Applied physics and CS grad student at UNC Charlotte. I spend most of my time on scientific computing, data science, machine learning, and simulations.
          </p>
          <div className="fade-up" style={{ width: 'fit-content', maxWidth: '100%', marginBottom: '18px', ...fadeDelay(4) }}>
            <div style={style_home_section_label}>Languages</div>
            <div style={style_home_section_line} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {languages.map((lang) => (
                <span key={lang} style={style_home_tag}>{lang}</span>
              ))}
            </div>
          </div>
          <div className="fade-up" style={{ width: 'fit-content', maxWidth: '100%', ...fadeDelay(5) }}>
            <div style={style_home_section_label}>Contact Me / Socials</div>
            <div style={style_home_section_line} />
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <button className="hover-accent" style={style_contact_btn} onClick={copyEmail}>{copied ? 'Copied!' : 'Email'}</button>
              {socials.map((s) => (
                <a key={s.label} className="hover-accent" style={style_contact_btn} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="fade-up" style={{ flex: '1 1 300px', maxWidth: '460px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px', ...fadeDelay(6) }}>
          <div style={style_home_section_label}>Latest Project</div>
          <Link to="/projects/soccerdata" className="hover-lift" style={{ ...style_home_card, padding: 0, overflow: 'hidden' }}>
            <img src={featuredImg} alt="Touch heatmap from the 2026 World Cup analytics project" style={{ width: '100%', display: 'block', aspectRatio: '2 / 1', objectFit: 'cover', objectPosition: 'center 65%' }} />
            <div style={{ padding: '10px 12px' }}>
              <div style={{ fontFamily: fonts.mono, fontSize: '11px', fontWeight: 500, color: colors.accentInk, letterSpacing: '1.5px', marginBottom: '3px' }}>PYTHON · 2026</div>
              <div style={{ ...style_home_card_title, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}>
                2026 World Cup Analytics<span className="arrow" style={{ color: colors.accent }}>→</span>
              </div>
              <div style={style_home_card_desc}>Scraped event data, a SQLite pipeline and match graphics for every game.</div>
            </div>
          </Link>

          <div style={{ ...style_home_section_label, marginTop: '6px' }}>Explore</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: '8px' }}>
            {explore.map((e) => (
              <Link key={e.path} to={e.path} className="hover-lift" style={style_home_card}>
                <div style={{ ...style_home_card_title, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  {e.title}<span className="arrow" style={{ color: colors.accent }}>→</span>
                </div>
                <div style={style_home_card_desc}>{e.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
