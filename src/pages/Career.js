import React, { useState, useEffect, useRef } from 'react';
import {
  style_section,
  style_card,
  style_eyebrow,
  style_career_item,
  style_career_year,
  style_career_role,
  style_career_place,
  colors,
  fonts,
  fluid,
} from '../components/styles';
import { PageHeader, BulletList, Chips, Chevron } from '../components/DetailPage';
import { useIsNarrow } from '../components/hooks';

import cert1 from '../assets/certificates/cert1.pdf';
import cert2 from '../assets/certificates/cert2.pdf';
import cert3 from '../assets/certificates/cert3.pdf';
import cert4 from '../assets/certificates/cert4.pdf';
import cert5 from '../assets/certificates/cert5.pdf';
import cert6 from '../assets/certificates/cert6.pdf';

const education = [
  { years: 'Aug 2021 to Dec 2023', role: 'B.S. in Physics', place: 'UNC Charlotte' },
  { years: 'Jan 2024 to May 2026', role: 'M.S. in Applied Physics', place: 'UNC Charlotte' },
  { years: 'Jun 2025 to May 2026', role: 'M.S. in Computer Science', place: 'UNC Charlotte', sub: 'Concentration in Data Science' },
];

const experience = [
  {
    years: 'May 2023 to Aug 2024',
    role: 'Researcher',
    place: 'BioMolecular Physics Group, UNC Charlotte',
    bullets: [
      'Parameterized ground-state optimization to minimize system energy and check convergence',
      'Reproduced and analyzed quantum algorithm results using MATLAB and Python',
      'Built Hamiltonian and propagator models for multi-qubit simulations',
    ],
  },
  {
    years: 'Jan 2023 to Dec 2025',
    role: 'Teaching Assistant',
    place: 'Department of Physics and Optical Science, UNC Charlotte',
    bullets: [
      'Led PHYS 2101/2101L/2102L for 500+ students including high-voltage lab environments',
      'Managed multiple lab sections while coordinating with faculty and other TAs',
      'Applied data-science techniques to improve instruction and documented results through technical reports',
    ],
  },
];

const skills = [
  { title: 'Languages', chips: ['Bash', 'C++', 'JavaScript', 'LaTeX', 'Markdown', 'MATLAB', 'Python', 'SQL'] },
  { title: 'ML and AI', chips: ['CUDA', 'HuggingFace', 'NumPy', 'Pandas', 'PyTorch', 'Scikit-learn', 'TensorFlow'] },
  { title: 'Developer Tools', chips: ['Anaconda', 'Colab', 'Git', 'Jupyter', 'SLURM', 'SSH', 'VS Code'] },
  { title: 'Data and Visualization', chips: ['Matplotlib', 'Power BI', 'SymPy', 'Tableau'] },
  { title: 'Graphics and Vision', chips: ['OpenGL', 'React', 'WebGL'] },
  { title: 'Physics, Optics and Physical Computing', chips: ['Arduino', 'Fusion 360', 'Inkscape', 'LightTools', 'Prusa Slicer', 'Zemax'] },
];

const certificates = [
  { name: 'Artificial Intelligence', meta: 'Womanium Quantum · 2024', file: cert1 },
  { name: 'Quantum Computing Hardware', meta: 'Womanium Quantum · 2024', file: cert2 },
  { name: 'QBronze', meta: 'QWorld · 2024', file: cert3 },
  { name: 'Quantum Machine Learning', meta: 'PennyLane · 2024', file: cert4 },
  { name: 'AWS Academy Data Engineering', meta: 'Amazon Web Services · 2025', file: cert5 },
  { name: 'AWS Machine Learning Foundations', meta: 'Amazon Web Services · 2025', file: cert6 },
];

const examTopics = [
  'Magnetic properties of solids: paramagnetism, diamagnetism, ferromagnetism, and the Zeeman effect',
  'Fourier transforms of complex functions using the Cauchy residue theorem and inverse Fourier transforms',
  'Numerical simulation of electron wave packet propagation through potential perturbations',
];

const coursework = [
  {
    title: 'Physics and Optics',
    courses: [
      'Quantum Mechanics I and II',
      'Quantum Theory I',
      'Solid State Physics I and II',
      'Theoretical Physics',
      'Illumination and Computational Optics',
      'Waves and Optics',
      'Advanced Laboratory in Modern Optics and Modern Physics',
      'Biomedical Optics',
    ],
  },
  {
    title: 'Computer Science',
    courses: [
      'Artificial Intelligence (Intro, Applied, Advanced)',
      'Machine Learning (Intro, Applied)',
      'Parallel Computing',
      'Computer Graphics',
      'Big Data Analytics',
      'Database Systems',
      'Data Mining',
      'Physical Computing',
    ],
  },
];

const cardGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '8px' };
const sectionColumnGap = 'clamp(20px, 3vw, 40px)';
const groupTitle = { fontSize: fluid(13, 14), color: colors.text, marginBottom: '7px' };
const smallBtn = { fontFamily: fonts.mono, fontSize: '11px', fontWeight: 500, letterSpacing: '1px', color: colors.accentInk, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none', padding: 0 };

function Section({ label, children, defaultOpen = true, wide = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section style={wide ? { gridColumn: '1 / -1' } : undefined}>
      <button onClick={() => setOpen(!open)} aria-expanded={open}
        style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '4px 0', background: 'none', border: 'none', cursor: 'pointer', color: colors.accentInk, textAlign: 'left' }}>
        <span style={style_eyebrow}>{label}</span>
        <span style={{ flex: 1, height: '1px', background: colors.border }} />
        <Chevron open={open} size={12} />
      </button>
      {open && <div style={{ marginTop: '4px', animation: 'fade-in 0.25s ease' }}>{children}</div>}
    </section>
  );
}

function Career() {
  const isMobile = useIsNarrow(768);
  const twoColumns = !useIsNarrow(1000);
  const [examOpen, setExamOpen] = useState(!isMobile);
  const [openCert, setOpenCert] = useState(null);
  const previewRef = useRef(null);

  // the preview opens below the grid, so bring it on screen
  useEffect(() => {
    if (openCert != null) previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [openCert]);

  const itemStyle = (i, list) => ({
    ...style_career_item,
    ...(isMobile && { gridTemplateColumns: '1fr', gap: '2px' }),
    borderBottom: i < list.length - 1 ? `1px solid ${colors.border}` : 'none',
  });

  const cert = openCert != null ? certificates[openCert] : null;

  return (
    <main style={style_section}>
      <PageHeader title="Career" />

      {/* wide screens: education | experience, skills | certificates, then coursework across both */}
      <div style={{ display: 'grid', gridTemplateColumns: twoColumns ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)', gap: `clamp(12px, 1.6vw, 20px) ${sectionColumnGap}`, alignItems: 'start' }}>
        <Section label="Education">
          {education.map((e, i) => (
            <div key={e.role} style={itemStyle(i, education)}>
              <div style={style_career_year}>{e.years}</div>
              <div>
                <div style={style_career_role}>{e.role}</div>
                <div style={style_career_place}>{e.place}</div>
                {e.sub && (
                  <div style={{ fontFamily: fonts.mono, fontSize: fluid(11, 12), fontWeight: 500, color: colors.accentInk }}>{e.sub}</div>
                )}
                {e.role === 'M.S. in Applied Physics' && (
                  <div>
                    <button onClick={() => setExamOpen(!examOpen)} aria-expanded={examOpen}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: fonts.mono, fontSize: fluid(11, 12), fontWeight: 500, color: colors.text, background: 'none', border: 'none', cursor: 'pointer', padding: '1px 0' }}>
                      <span style={{ color: colors.accentInk, display: 'flex' }}><Chevron open={examOpen} size={11} /></span>
                      Comprehensive Exam Topics
                    </button>
                    {examOpen && <div style={{ marginTop: '4px' }}><BulletList items={examTopics} /></div>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Section>

        <Section label="Experience">
          {experience.map((e, i) => (
            <div key={e.role} style={itemStyle(i, experience)}>
              <div style={style_career_year}>{e.years}</div>
              <div>
                <div style={style_career_role}>{e.role}</div>
                <div style={style_career_place}>{e.place}</div>
                <BulletList items={e.bullets} />
              </div>
            </div>
          ))}
        </Section>

        <Section label="Skills" defaultOpen={!isMobile}>
          <div style={cardGrid}>
            {skills.map((s) => (
              <div key={s.title} style={{ ...style_card, padding: '10px 12px' }}>
                <div style={groupTitle}>{s.title}</div>
                <Chips items={s.chips} />
              </div>
            ))}
          </div>
        </Section>

        <Section label="Certificates" defaultOpen={!isMobile}>
          <div style={cardGrid}>
            {certificates.map((c, i) => {
              const active = openCert === i;
              const cardStyle = {
                ...style_card, padding: '9px 12px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px',
                textAlign: 'left', textDecoration: 'none', cursor: 'pointer', fontFamily: fonts.serif, fontWeight: 'bold',
                ...(active && { border: `1px solid ${colors.accent}` }),
              };
              const inner = (
                <>
                  <div>
                    <div style={{ fontSize: fluid(13, 14), color: colors.text, marginBottom: '1px' }}>{c.name}</div>
                    <div style={{ fontFamily: fonts.mono, fontSize: fluid(10.5, 11.5), fontWeight: 400, color: colors.faint }}>{c.meta}</div>
                  </div>
                  <span style={{ ...smallBtn, whiteSpace: 'nowrap' }}>{isMobile ? 'OPEN ↗' : active ? 'HIDE' : 'VIEW'}</span>
                </>
              );
              // phones get the PDF in a new tab, desktop gets an inline preview
              return isMobile ? (
                <a key={c.name} href={c.file} target="_blank" rel="noopener noreferrer" className="hover-border" style={cardStyle}>{inner}</a>
              ) : (
                <button key={c.name} onClick={() => setOpenCert(active ? null : i)} aria-expanded={active} className="hover-border" style={cardStyle}>{inner}</button>
              );
            })}
          </div>

          {!isMobile && cert && (
            <div ref={previewRef} style={{ ...style_card, padding: '10px', marginTop: '8px', scrollMarginTop: '70px', animation: 'fade-in 0.25s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', padding: '0 2px 8px' }}>
                <span style={style_eyebrow}>{cert.name}</span>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <a href={cert.file} target="_blank" rel="noopener noreferrer" className="hover-ink" style={smallBtn}>OPEN PDF ↗</a>
                  <button onClick={() => setOpenCert(null)} className="hover-ink" style={smallBtn}>CLOSE ✕</button>
                </div>
              </div>
              <iframe key={cert.file} src={`${cert.file}#view=FitH`} title={cert.name}
                style={{ display: 'block', width: '100%', height: '560px', border: 'none', borderRadius: '8px', background: '#fff' }} />
            </div>
          )}
        </Section>

        <Section label="Related Coursework" defaultOpen={!isMobile} wide>
          {/* same column gap as the sections above, so the two cards line up with them */}
          <div style={{ ...cardGrid, columnGap: sectionColumnGap }}>
            {coursework.map((group) => (
              <div key={group.title} style={{ ...style_card, padding: '10px 12px' }}>
                <div style={groupTitle}>{group.title}</div>
                <BulletList items={group.courses} />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

export default Career;
