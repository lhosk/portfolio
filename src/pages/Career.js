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

function formatDate(years, isMobile) {
  if (!isMobile) return years;
  return years.replace(' to ', '\nto\n');
}

function Career() {
  const [examOpen, setExamOpen] = useState(true);
  const [openCert, setOpenCert] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>CAREER</div>

        {/* Education */}
        <div style={{ marginBottom: '28px' }}>
          <div style={style_career_label}>Education</div>
          {education.map((e, i) => (
            <div key={i} style={{ ...style_career_item, borderBottom: i < education.length - 1 ? `0.5px solid ${colors.border}` : 'none' }}>
              <div style={{ ...style_career_year, whiteSpace: 'pre-line', minWidth: isMobile ? '60px' : '110px' }}>
                {formatDate(e.years, isMobile)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={style_career_role}>{e.role}</div>
                <div style={style_career_place}>{e.place}</div>
                {e.sub && (
                  <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, fontWeight: '400', marginBottom: '4px' }}>{e.sub}</div>
                )}
                {e.role === 'M.S. in Applied Physics' && (
                  <div>
                    <div
                      onClick={() => setExamOpen(!examOpen)}
                      style={{ fontFamily: fonts.mono, fontSize: '12px', color: colors.muted, cursor: 'pointer', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span style={{ color: colors.accent }}>{examOpen ? '▲' : '▼'}</span> Comprehensive Exam Topics
                    </div>
                    {examOpen && (
                      <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px' }}>
                        {examTopics.map((t, j) => (
                          <li key={j} style={{ display: 'flex', gap: '6px', fontFamily: fonts.mono, fontSize: '13px', color: colors.muted, fontWeight: '400', lineHeight: '1.6', padding: '2px 0' }}>
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
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '28px' }}>
          <div style={style_career_label}>Experience</div>
          {experience.map((e, i) => (
            <div key={i} style={{ ...style_career_item, borderBottom: i < experience.length - 1 ? `0.5px solid ${colors.border}` : 'none' }}>
              <div style={{ ...style_career_year, whiteSpace: 'pre-line', minWidth: isMobile ? '60px' : '110px' }}>
                {formatDate(e.years, isMobile)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={style_career_role}>{e.role}</div>
                <div style={style_career_place}>{e.place}</div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '6px', fontFamily: fonts.mono, fontSize: '14px', color: colors.muted, fontWeight: '400', lineHeight: '1.6', padding: '1px 0' }}>
                      <span style={{ color: colors.accent, flexShrink: 0 }}>-</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '28px' }}>
          <div style={style_career_label}>Skills</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px' }}>
            {skills.map((s, i) => (
              <div key={i} style={style_cert_item}>
                <div style={{ fontSize: '15px', color: colors.text, marginBottom: '8px' }}>{s.title}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {s.chips.map((c) => <span key={c} style={style_chip}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div style={{ marginBottom: '28px' }}>
          <div style={style_career_label}>Certificates</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '8px' }}>
            {certificates.map((c, i) => (
              <div key={i}>
                <div
                  onClick={() => setOpenCert(openCert === i ? null : i)}
                  style={{ ...style_cert_item, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div>
                    <div style={{ fontSize: '15px', color: colors.text, marginBottom: '3px' }}>{c.name}</div>
                    <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted, fontWeight: '400' }}>{c.meta}</div>
                  </div>
                  <span style={{ fontFamily: fonts.mono, fontSize: '12px', color: colors.accent, marginLeft: '12px' }}>{openCert === i ? '▲' : '▼'}</span>
                </div>
                {openCert === i && (
                  <iframe
                    src={c.file}
                    title={c.name}
                    style={{ width: '100%', height: '500px', border: 'none', borderRadius: '12px', marginTop: '8px' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div style={{ marginBottom: '28px' }}>
          <div style={style_career_label}>Related Coursework</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '10px' }}>
            {coursework.map((group, i) => (
              <div key={i} style={style_cert_item}>
                <div style={{ fontSize: '15px', color: colors.text, marginBottom: '8px' }}>{group.title}</div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {group.courses.map((c, j) => (
                    <li key={j} style={{ display: 'flex', gap: '6px', fontFamily: fonts.mono, fontSize: '13px', color: colors.muted, fontWeight: '400', lineHeight: '1.8' }}>
                      <span style={{ color: colors.accent, flexShrink: 0 }}>-</span>{c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}

export default Career;