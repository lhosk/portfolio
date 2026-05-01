import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import {
  style_page_bg,
  style_section,
  style_section_title,
  style_cert_item,
  colors,
  fonts,
} from '../components/styles';

const facts = [
  { label: 'Location', value: 'Raleigh, NC' },
  { label: 'Education', value: 'M.S. CS, M.S. Applied Physics, B.S. Physics — UNC Charlotte' },
  { label: 'Focus', value: 'Computational Physics, Scientific Computing, ML, Simulations, Data Science' },
  { label: 'My Teams', value: 'West Ham, Colombia National Team, Millonarios, Carolina Hurricanes' },
  { label: 'Music', value: 'Dominic Fike, Yeek, Baird, Bakar, Matt Champion' },
  { label: 'Instruments', value: 'Acoustic, Electric, and Lap Steel Guitar, Ukelele, and Piano' },
  { label: 'Activities', value: 'Camping, Soccer, Tennis' },
  { label: 'Pets', value: 'Laz (cat), Pepper (dog)' },
];

const links = [
  { label: 'GitHub', value: 'github.com/lhosk', href: 'https://github.com/lhosk' },
  { label: 'LinkedIn', value: 'linkedin.com/in/lhosk', href: 'https://linkedin.com/in/lhosk' },
  { label: 'Spotify', value: 'open.spotify.com', href: 'https://open.spotify.com/user/b9sdhtywj28lh1yg15zfjg3s6' },
];

function About() {
  const [copied, setCopied] = useState(false);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);

  const copyEmail = () => {
    navigator.clipboard.writeText('LHoskin.Work@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 750);
  };

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={style_section_title}>ABOUT ME</div>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            style={{
              fontFamily: fonts.mono, fontSize: '12px', color: colors.muted,
              background: 'none', border: `0.5px solid ${colors.border}`,
              borderRadius: '8px', padding: '6px 14px', cursor: 'pointer',
              letterSpacing: '1px', textTransform: 'uppercase',
            }}
          >
            {showSidebar ? 'Hide Info →' : '← Show Info'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: showSidebar ? '1fr 1fr' : '1fr', gap: '28px', alignItems: 'start', transition: 'all 0.3s' }}>

          {/* left: text */}
          {true && (
            <div style={{ fontSize: 'clamp(14px, 1.5vw, 22px)', color: colors.muted, lineHeight: '1.8' }}>
              <p style={{ marginBottom: '14px' }}>
                I recently finished degrees in Computer Science and Applied Physics at University of North Carolina at Charlotte.
                I got into physics in high school and stuck with it through undergrad, but eventually I realized I wanted to do more than just solve equations on paper.
                Once I found computer science, it started to make a lot more sense to me. I liked that I could build things with the ideas I was learning, whether that meant simulations, visualizations, or computational models.
              </p>
              <p style={{ marginBottom: '14px' }}>
                That led me toward scientific computing, simulations, machine learning, and data science.
                I enjoy working on problems where the theory and the programming both matter.
                One of my favorite projects was building a virtual retinal display in LightTools and working on retinal projection simulations.
                Projects like that are what made me want to keep going deeper into computational work and high performance computing.
              </p>
              <p style={{ marginBottom: '14px' }}>
                Outside of work, I try to spend less time behind a screen.
                I've been getting outdoors more and spending time around places like Linville Gorge and Ocracoke Island.
                Most weekends I'm either playing soccer, watching sports, or listening to music.
                I follow West Ham United, the Colombia national football team, and Millonarios Futbol Club. I'm also a fan of the Carolina Hurricanes.
              </p>
              <p style={{ marginBottom: '14px' }}>
                Music is usually playing while I work. I play acoustic guitar, electric guitar, lap steel guitar, and a little ukulele.
                Lately I've been listening to Dominic Fike, Yeek, Baird, Bakar, and Matt Champion.
                When I'm not working on something, I'm usually hanging around at home with my cat Laz and my dog Pepper.
              </p>
            </div>
          )}

          {/* right: sidebar */}
          {showSidebar && <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

            <div style={{ ...style_cert_item, padding: '20px' }}>
              <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Quick Facts</div>
              {facts.map((f, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px', marginBottom: i < facts.length - 1 ? '10px' : 0, borderBottom: i < facts.length - 1 ? `0.5px solid ${colors.border}` : 'none' }}>
                  <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '1px', marginBottom: '3px' }}>{f.label.toUpperCase()}</div>
                  <div style={{ fontSize: '14px', color: colors.muted }}>{f.value}</div>
                </div>
              ))}
            </div>

            <div style={{ ...style_cert_item, padding: '20px' }}>
              <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Contact</div>
              {links.map((l, i) => (
                <div key={i}>
                  <a href={l.href} target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', padding: '10px 0' }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.text }}>{l.label}</span>
                    <span style={{ fontFamily: fonts.mono, fontSize: '12px', color: colors.accent }}>{l.value}</span>
                  </a>
                  <div style={{ height: '0.5px', background: colors.border }} />
                </div>
              ))}
              <div onClick={copyEmail} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '10px 0' }}>
                <span style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.text }}>Email</span>
                <span style={{ fontFamily: fonts.mono, fontSize: '12px', color: colors.accent }}>{copied ? 'Copied!' : 'LHoskin.Work@gmail.com'}</span>
              </div>
            </div>

          </div>}
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}

export default About;