import React from 'react';
import {
  style_section,
  style_card,
  style_card_label,
  style_about_text,
  colors,
  fonts,
  fluid,
} from '../components/styles';
import { PageHeader } from '../components/DetailPage';
import { useIsNarrow, useCopyEmail } from '../components/hooks';
import { EMAIL, socials } from '../data/site';

const facts = [
  { label: 'Location', value: 'Raleigh, NC' },
  { label: 'Education', value: 'M.S. CS, M.S. Applied Physics, B.S. Physics — UNC Charlotte' },
  { label: 'Focus', value: 'Computational Physics, Scientific Computing, ML, Simulations, Data Science' },
  { label: 'My Teams', value: 'West Ham, Colombia National Team, Millonarios, Carolina Hurricanes' },
  { label: 'Music', value: 'Dominic Fike, Yeek, Baird, Bakar, Matt Champion' },
  { label: 'Instruments', value: 'Acoustic, Electric, and Lap Steel Guitar, Ukulele, and Piano' },
  { label: 'Activities', value: 'Camping, Soccer, Tennis' },
  { label: 'Pets', value: 'Laz (cat), Pepper (dog)' },
];

const rowLabel = { fontFamily: fonts.mono, fontSize: fluid(11, 12), fontWeight: 500, color: colors.text };
// value color comes from the row so .hover-ink can brighten it
const rowValue = { fontFamily: fonts.mono, fontSize: fluid(11, 12), fontWeight: 500, textAlign: 'right', overflowWrap: 'anywhere' };

const InfoPanel = () => {
  const [copied, copyEmail] = useCopyEmail();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <section style={style_card}>
        <h2 style={style_card_label}>Quick Facts</h2>
        {facts.map((f, i) => (
          <div key={f.label} style={{ padding: '6px 0', borderTop: i ? `1px solid ${colors.border}` : 'none' }}>
            <div style={{ fontFamily: fonts.mono, fontSize: '10.5px', fontWeight: 500, color: colors.faint, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '1px' }}>{f.label}</div>
            <div style={{ fontSize: fluid(13, 15), color: colors.text, lineHeight: '1.4' }}>{f.value}</div>
          </div>
        ))}
      </section>
      <section style={style_card}>
        <h2 style={style_card_label}>Contact</h2>
        {socials.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hover-ink"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', textDecoration: 'none', color: colors.accentInk, padding: '7px 0', borderBottom: `1px solid ${colors.border}` }}>
            <span style={rowLabel}>{l.label}</span>
            <span style={rowValue}>{l.handle} ↗</span>
          </a>
        ))}
        <button onClick={copyEmail} className="hover-ink"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', width: '100%', cursor: 'pointer', color: colors.accentInk, padding: '7px 0 0', background: 'none', border: 'none' }}>
          <span style={rowLabel}>Email</span>
          <span style={rowValue}>{copied ? 'Copied!' : EMAIL}</span>
        </button>
      </section>
    </div>
  );
};

const BioText = () => (
  <div className="prose" style={style_about_text}>
    <p style={{ fontSize: '1.04em', color: colors.text }}>
      I recently finished degrees in Computer Science and Applied Physics at University of North Carolina at Charlotte.
      I got into physics in high school and stuck with it through undergrad, but eventually I realized I wanted to do more than just solve equations on paper.
      Once I found computer science, it started to make a lot more sense to me. I liked that I could build things with the ideas I was learning, whether that meant simulations, visualizations, or computational models.
    </p>
    <p>
      That led me toward scientific computing, simulations, machine learning, and data science.
      I enjoy working on problems where the theory and the programming both matter.
      One of my favorite projects was building a virtual retinal display in LightTools and working on retinal projection simulations.
      Projects like that are what made me want to keep going deeper into computational work and high performance computing.
    </p>
    <p>
      Outside of work, I try to spend less time behind a screen.
      I've been getting outdoors more and spending time around places like Linville Gorge and Ocracoke Island.
      Most weekends I'm either playing soccer, watching sports, or listening to music.
      I follow West Ham United, the Colombia national football team, and Millonarios Futbol Club. I'm also a fan of the Carolina Hurricanes.
    </p>
    <p>
      Music is usually playing while I work. I play acoustic guitar, electric guitar, lap steel guitar, and a little ukulele.
      Lately I've been listening to Dominic Fike, Yeek, Baird, Bakar, and Matt Champion.
      When I'm not working on something, I'm usually hanging around at home with my cat Laz and my dog Pepper.
    </p>
  </div>
);

function About() {
  const isMobile = useIsNarrow(860);

  return (
    <main style={style_section}>
      <PageHeader title="About Me" />
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.25fr) minmax(0, 1fr)', gap: 'clamp(14px, 2.4vw, 32px)', alignItems: 'start' }}>
        <BioText />
        <InfoPanel />
      </div>
    </main>
  );
}

export default About;
