import React from 'react';
import NavBar from './NavBar';
import {
  style_page_bg,
  style_section,
  style_section_eyebrow,
  style_section_title,
  style_career_label,
  style_career_item,
  style_career_year,
  style_career_role,
  style_career_place,
  style_skill_group,
  style_skill_group_title,
  style_chip,
  style_cert_item,
  colors,
  fonts,
} from './styles';

const education = [
  { years: 'Aug 2021 to Dec 2023', role: 'B.S. in Physics', place: 'UNC Charlotte' },
  { years: 'Jan 2024 to Apr 2026', role: 'M.S. in Applied Physics', place: 'UNC Charlotte' },
  { years: 'Jan 2024 to Apr 2026', role: 'M.S. in Computer Science', place: 'UNC Charlotte' },
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
  { title: 'Languages', chips: ['Python', 'C++', 'JavaScript', 'MATLAB', 'SQL', 'Bash', 'LaTeX'] },
  { title: 'ML and AI', chips: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'CUDA', 'NumPy', 'Pandas'] },
  { title: 'Developer Tools', chips: ['Git', 'Jupyter', 'SLURM', 'VS Code', 'Anaconda', 'Colab', 'SSH'] },
  { title: 'Data and Visualization', chips: ['Power BI', 'Tableau', 'Matplotlib', 'SymPy'] },
  { title: 'Graphics and Vision', chips: ['OpenGL', 'WebGL', 'React'] },
  { title: 'Physics and Optics', chips: ['LightTools', 'Fusion 360', 'Arduino', 'Zemax', 'Inkscape', 'Prusa Slicer'] },
];

const certificates = [
  { name: 'Artificial Intelligence', meta: 'Womanium Quantum · 2024' },
  { name: 'Quantum Computing Hardware', meta: 'Womanium Quantum · 2024' },
  { name: 'QBronze', meta: 'QWorld · 2024' },
  { name: 'Quantum Machine Learning', meta: 'PennyLane · 2024' },
  { name: 'AWS Academy Data Engineering', meta: 'Amazon Web Services · 2025' },
  { name: 'AWS Machine Learning Foundations', meta: 'Amazon Web Services · 2025' },
];

function Career() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_eyebrow}>Background</div>
        <div style={style_section_title}>CAREER</div>

        {/* Education */}
        <div style={{ marginBottom: '28px' }}>
          <div style={style_career_label}>Education</div>
          {education.map((e, i) => (
            <div key={i} style={{ ...style_career_item, borderBottom: i < education.length - 1 ? `0.5px solid ${colors.border}` : 'none' }}>
              <div style={style_career_year}>{e.years}</div>
              <div>
                <div style={style_career_role}>{e.role}</div>
                <div style={style_career_place}>{e.place}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '28px' }}>
          <div style={style_career_label}>Experience</div>
          {experience.map((e, i) => (
            <div key={i} style={{ ...style_career_item, borderBottom: i < experience.length - 1 ? `0.5px solid ${colors.border}` : 'none' }}>
              <div style={style_career_year}>{e.years}</div>
              <div style={{ flex: 1 }}>
                <div style={style_career_role}>{e.role}</div>
                <div style={style_career_place}>{e.place}</div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '6px', fontFamily: fonts.mono, fontSize: '14px', color: colors.muted, fontWeight: '400', lineHeight: '1.6', padding: '1px 0' }}>
                      <span style={{ color: colors.accent, flexShrink: 0 }}>-</span>
                      {b}
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {skills.map((s, i) => (
              <div key={i} style={style_skill_group}>
                <div style={style_skill_group_title}>{s.title}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {s.chips.map((c) => (
                    <span key={c} style={style_chip}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div style={{ marginBottom: '28px' }}>
          <div style={style_career_label}>Certificates</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {certificates.map((c, i) => (
              <div key={i} style={style_cert_item}>
                <div style={{ fontSize: '15px', color: colors.text, marginBottom: '3px' }}>{c.name}</div>
                <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted, fontWeight: '400' }}>{c.meta}</div>
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
