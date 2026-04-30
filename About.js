import React from 'react';
import NavBar from './NavBar';
import {
  style_page_bg,
  style_section,
  style_section_eyebrow,
  style_section_title,
  style_about_text,
  style_sidebar_card,
  style_sidebar_card_title,
  colors,
  fonts,
} from './styles';

const interests = [
  'Scientific computing and simulation',
  'Machine learning and data science',
  'Applied physics and optics',
  'Beach, mountains, camping',
  'Soccer (West Ham, Colombia)',
  'Guitar, lap steel, F1, hockey',
];

const education = [
  'M.S. CS at UNCC',
  'M.S. Applied Physics at UNCC',
  'B.S. Physics at UNCC',
];

function SidebarList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: '15px', color: colors.muted, padding: '4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'block', width: '5px', height: '5px', borderRadius: '50%', background: colors.accent, flexShrink: 0 }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function About() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_eyebrow}>Personal</div>
        <div style={style_section_title}>ABOUT ME</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start' }}>
          {/* Text */}
          <div style={style_about_text}>
            <p style={{ marginBottom: '14px' }}>
              I just finished dual masters degrees in <strong style={{ color: colors.text }}>Computer Science and Applied Physics</strong> at UNC Charlotte. I got into physics in high school and stuck with it through undergrad, then picked up CS along the way because I wanted to actually do something with it.
            </p>
            <p style={{ marginBottom: '14px' }}>
              Most of my work has been in <strong style={{ color: colors.text }}>scientific computing, machine learning, data science, and simulation</strong>. I like problems that need both the theory and the code to work together.
            </p>
            <p style={{ marginBottom: '14px' }}>
              Outside of school I spend a lot of time outdoors. Beaches, mountains, camping when I can. I try not to be inside all the time.
            </p>
            <p style={{ marginBottom: '14px' }}>
              I play soccer, billiards, and guitar. Also have a lap steel that breaks strings way too often. Music is pretty much always on while I work. Lately a lot of Dominic Fike, Yeek, Baird, Bakar, and Matt Champion.
            </p>
            <p style={{ marginBottom: '14px' }}>
              I follow <strong style={{ color: colors.text }}>West Ham United</strong> and the Colombia national team. I catch live soccer or hockey when I can and have been getting into F1 lately.
            </p>
            <p style={{ marginBottom: '14px' }}>
              At home I have a cat named Laz and a dog named Pepper. They tolerate each other most of the time.
            </p>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={style_sidebar_card}>
              <div style={style_sidebar_card_title}>Interests</div>
              <SidebarList items={interests} />
            </div>
            <div style={style_sidebar_card}>
              <div style={style_sidebar_card_title}>Education</div>
              <SidebarList items={education} />
            </div>
            <div style={style_sidebar_card}>
              <div style={style_sidebar_card_title}>Reach Out</div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }}>
                <a href="https://github.com/lhosk" target="_blank" rel="noreferrer" style={{ fontSize: '14px', color: colors.accent, textDecoration: 'none', fontFamily: fonts.mono }}>github</a>
                <a href="https://linkedin.com/in/lhosk" target="_blank" rel="noreferrer" style={{ fontSize: '14px', color: colors.accent, textDecoration: 'none', fontFamily: fonts.mono }}>linkedin</a>
                <span
                  onClick={() => navigator.clipboard.writeText('LHoskin.Work@gmail.com')}
                  style={{ fontSize: '14px', color: colors.accent, cursor: 'pointer', fontFamily: fonts.mono }}
                >
                  email
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}

export default About;
