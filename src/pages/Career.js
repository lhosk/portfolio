import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import {
  style_page_bg,
  style_section,
  style_section_title,
  style_career_label,
  style_career_item,
  style_career_year,
  style_career_role,
  style_career_place,
  style_chip,
  style_cert_item,
  colors,
  fonts,
} from '../components/styles';

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

function Section({ label, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginBottom: '10px' }}>
      <div onClick={() => setOpen(!open)}
        style={{ ...style_career_label, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', userSelect: 'none' }}>
        <span style={{ fontSize: 'clamp(18px, 1.5vw, 24px)', transition: 'transform 0.2s' }}>{open ? '▲' : '▼'}</span>
        <span>{label}</span>
      </div>
      {open && children}
    </div>
  );
}

function Career() {
  const [examOpen, setExamOpen] = useState(window.innerWidth >= 768);
  const [openCert, setOpenCert] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const sz = {
    sub:     isMobile ? '10px' : 'clamp(12px, 1.3vw, 13px)',
    exam:    isMobile ? '10px' : 'clamp(11px, 1.2vw, 12px)',
    examLi:  isMobile ? '10px' : 'clamp(12px, 1.3vw, 13px)',
    bullet:  isMobile ? '10px' : 'clamp(12px, 1.4vw, 14px)',
    skillT:  isMobile ? '12px' : 'clamp(14px, 1.5vw, 16px)',
    certN:   isMobile ? '12px' : 'clamp(14px, 1.5vw, 16px)',
    certM:   isMobile ? '10px' : 'clamp(12px, 1.3vw, 13px)',
    certArr: isMobile ? '10px' : 'clamp(11px, 1.2vw, 18px)',
    cwLi:    isMobile ? '10px' : 'clamp(12px, 1.3vw, 13px)',
  };

  const itemStyle = isMobile
    ? { ...style_career_item, flexDirection: 'column', gap: '4px' }
    : style_career_item;

  const yearStyle = isMobile
    ? { ...style_career_year, fontSize: '10px', minWidth: 'auto', marginBottom: '2px' }
    : { ...style_career_year, minWidth: '110px' };

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>CAREER</div>

        <Section label="Education">
          {education.map((e, i) => (
            <div key={i} style={{ ...itemStyle, borderBottom: i < education.length - 1 ? `0.5px solid ${colors.border}` : 'none' }}>
              <div style={yearStyle}>{e.years}</div>
              <div style={{ flex: 1 }}>
                <div style={style_career_role}>{e.role}</div>
                <div style={style_career_place}>{e.place}</div>
                {e.sub && (
                  <div style={{ fontFamily: fonts.mono, fontSize: sz.sub, color: colors.accent, fontWeight: '400', marginBottom: '4px' }}>{e.sub}</div>
                )}
                {e.role === 'M.S. in Applied Physics' && (
                  <div>
                    <div onClick={() => setExamOpen(!examOpen)}
                      style={{ fontFamily: fonts.mono, fontSize: sz.exam, color: colors.muted, cursor: 'pointer', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: colors.accent, fontSize: '12px' }}>{examOpen ? '▲' : '▼'}</span> Comprehensive Exam Topics
                    </div>
                    {examOpen && (
                      <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px' }}>
                        {examTopics.map((t, j) => (
                          <li key={j} style={{ display: 'flex', gap: '6px', fontFamily: fonts.mono, fontSize: sz.examLi, color: colors.muted, fontWeight: '400', lineHeight: '1.6', padding: '2px 0' }}>
                            <span style={{ color: colors.accent, flexShrink: 0 }}>-</span>{t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Section>

        <Section label="Experience" defaultOpen={!isMobile}>
          {experience.map((e, i) => (
            <div key={i} style={{ ...itemStyle, borderBottom: i < experience.length - 1 ? `0.5px solid ${colors.border}` : 'none' }}>
              <div style={yearStyle}>{e.years}</div>
              <div style={{ flex: 1 }}>
                <div style={style_career_role}>{e.role}</div>
                <div style={style_career_place}>{e.place}</div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '6px', fontFamily: fonts.mono, fontSize: sz.bullet, color: colors.muted, fontWeight: '400', lineHeight: '1.6', padding: '1px 0' }}>
                      <span style={{ color: colors.accent, flexShrink: 0 }}>-</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Section>

        <Section label="Skills" defaultOpen={!isMobile}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '6px' : '10px' }}>
            {skills.map((s, i) => (
              <div key={i} style={style_cert_item}>
                <div style={{ fontSize: sz.skillT, color: colors.text, marginBottom: isMobile ? '5px' : '8px' }}>{s.title}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '3px' : '5px' }}>
                  {s.chips.map((c) => <span key={c} style={{ ...style_chip, ...(isMobile ? { fontSize: '9px', padding: '3px 6px' } : {}) }}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section label="Certificates" defaultOpen={!isMobile}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '8px' }}>
            {certificates.map((c, i) => (
              <div key={i}>
                <div onClick={() => setOpenCert(openCert === i ? null : i)}
                  style={{ ...style_cert_item, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: sz.certN, color: colors.text, marginBottom: '3px' }}>{c.name}</div>
                    <div style={{ fontFamily: fonts.mono, fontSize: sz.certM, color: colors.muted, fontWeight: '400' }}>{c.meta}</div>
                  </div>
                  <span style={{ fontFamily: fonts.mono, fontSize: sz.certArr, color: colors.accent, marginLeft: '12px' }}>{openCert === i ? '▲' : '▼'}</span>
                </div>
                {openCert === i && (
                  isMobile ? (
                    <a href={c.file} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'block', marginTop: '8px', padding: '10px 12px', borderRadius: '12px', textAlign: 'center', fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, border: `0.5px solid ${colors.border}`, textDecoration: 'none' }}>
                      Open certificate PDF ↗
                    </a>
                  ) : (
                    <iframe src={`${c.file}#view=FitH`} title={c.name}
                      style={{ width: '100%', height: '500px', border: 'none', borderRadius: '12px', marginTop: '8px' }} />
                  )
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section label="Related Coursework" defaultOpen={!isMobile}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px' }}>
            {coursework.map((group, i) => (
              <div key={i} style={style_cert_item}>
                <div style={{ fontSize: sz.skillT, color: colors.text, marginBottom: '8px' }}>{group.title}</div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {group.courses.map((c, j) => (
                    <li key={j} style={{ display: 'flex', gap: '6px', fontFamily: fonts.mono, fontSize: sz.cwLi, color: colors.muted, fontWeight: '400', lineHeight: '1.8' }}>
                      <span style={{ color: colors.accent, flexShrink: 0 }}>-</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}

export default Career;