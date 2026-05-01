import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import {
  style_page_bg,
  style_section,
  style_section_eyebrow,
  style_section_title,
  style_filter_btn,
  style_filter_btn_active,
  style_proj_grid,
  style_proj_card,
  style_proj_title,
  style_proj_desc,
  colors,
} from '../components/styles';

const langColors = {
  Python:     { accent: 'rgba(75,139,190,0.53)',  label: '#2a5a8a' },
  'C++':      { accent: 'rgba(0,52,100,0.53)',    label: '#003464' },
  MATLAB:     { accent: 'rgba(141,14,37,0.53)',   label: '#8D0E25' },
  JavaScript: { accent: 'rgba(201,169,0,0.53)',   label: '#7a6600' },
};

const projectData = [
  { title: 'Stochastic Physics Informed Neural Network (SPINN)', lang: 'Python', year: 2025, desc: 'PyTorch · PINNs · RNNs · Ocean wave forecasting · AWS SageMaker', path: '/projects/spinn' },
  { title: 'Super Resolution GAN', lang: 'Python', year: 2025, desc: 'TensorFlow · SRGAN · CNN image super-resolution · Transfer learning', path: '/projects/srgan' },
  { title: 'Real-Time Object Detection', lang: 'Python', year: 2025, desc: 'PyTorch · YOLOv8 · Faster R-CNN · Computer vision', path: '/projects/detection' },
  { title: 'Virtual Retinal Display (VRD)', lang: 'Python', year: 2025, desc: 'LightTools · Fusion 360 · Laser intensity modeling · CIE color mapping', path: '/projects/vrd' },
  { title: 'Recipe Recommendation System', lang: 'Python', year: 2025, desc: 'NLP · Sentence transformers · OpenAI API · NLTK · Pandas', path: '/projects/recommendation' },
  { title: 'CNN: Cats and Dogs Classifier', lang: 'Python', year: 2025, desc: 'TensorFlow · CNN architecture · Data augmentation · Image preprocessing', path: '/projects/cnn' },
  { title: 'Wave Perturbation Simulation', lang: 'Python', year: 2025, desc: 'Wave packet propagation · Fourier analysis · Numerical simulation', path: '/projects/wave' },
  { title: 'Connect 4: Minimax and Alpha-Beta Pruning', lang: 'Python', year: 2025, desc: 'Pygame · Minimax · Alpha-Beta pruning · Adversarial search', path: '/projects/connect4' },
  { title: 'Reinforcement Learning', lang: 'Python', year: 2024, desc: 'Stable-Baselines3 · A2C · Atari · VecFrameStack · OpenAI Gym', path: '/projects/rl' },
  { title: 'Parallel Computing', lang: 'C++', year: 2024, desc: 'OpenMP · Pthreads · Numerical integration · Performance optimization', path: '/projects/parallel' },
  { title: 'Monte Carlo Simulation: Atomic Packing Factor', lang: 'C++', year: 2024, desc: 'Arduino · Embedded systems · LCD display · Sensor input handling', path: '/projects/mcsapf' },
  { title: 'Red Light Green Light Game', lang: 'C++', year: 2024, desc: 'Arduino · Embedded systems · Game logic · Hardware interfacing', path: '/projects/rlgl' },
  { title: 'Monte Carlo Simulation: Circles and Spheres', lang: 'MATLAB', year: 2023, desc: 'Computational physics · Geometry visualization · 3D plotting', path: '/projects/mcs' },
  { title: 'WebGL and OpenGL Projects', lang: 'JavaScript', year: 2025, desc: 'WebGL · OpenGL · HTML5 Canvas · Graphics programming', path: '/projects/gl' },
];

const langFilters = ['All', 'Python', 'C++', 'MATLAB', 'JavaScript'];
const yearFilters = ['All Years', '2023', '2024', '2025'];

function Projects() {
  const [activeLang, setActiveLang] = useState('All');
  const [activeYear, setActiveYear] = useState('All Years');
  const navigate = useNavigate();

  const availableLangs = activeYear === 'All Years'
    ? new Set(projectData.map(p => p.lang))
    : new Set(projectData.filter(p => p.year === parseInt(activeYear)).map(p => p.lang));

  const availableYears = activeLang === 'All'
    ? new Set(projectData.map(p => p.year))
    : new Set(projectData.filter(p => p.lang === activeLang).map(p => p.year));

  const isMatch = (p) => {
    const langMatch = activeLang === 'All' || p.lang === activeLang;
    const yearMatch = activeYear === 'All Years' || p.year === parseInt(activeYear);
    return langMatch && yearMatch;
  };

  const langBtnStyle = (f) => {
    const isActive = activeLang === f;
    const isAvailable = f === 'All' || availableLangs.has(f);
    if (isActive) return style_filter_btn_active;
    return { ...style_filter_btn, opacity: isAvailable ? 1 : 0.3, filter: isAvailable ? 'none' : 'blur(1px)' };
  };

  const yearBtnStyle = (y) => {
    const isActive = activeYear === y;
    const isAvailable = y === 'All Years' || availableYears.has(parseInt(y));
    if (isActive) return style_filter_btn_active;
    return { ...style_filter_btn, opacity: isAvailable ? 1 : 0.3, filter: isAvailable ? 'none' : 'blur(1px)' };
  };

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_eyebrow}>Work</div>
        <div style={style_section_title}>PROJECTS</div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
          {langFilters.map((f) => (
            <button key={f} style={langBtnStyle(f)} onClick={() => setActiveLang(f)}>
              {f === 'All' ? `All (${projectData.length})` : f}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {yearFilters.map((y) => (
            <button key={y} style={yearBtnStyle(y)} onClick={() => setActiveYear(y)}>
              {y}
            </button>
          ))}
        </div>

        <div style={style_proj_grid}>
          {projectData.map((p, i) => {
            const lc = langColors[p.lang];
            const matched = isMatch(p);
            return (
              <div
                key={i}
                onClick={() => matched && navigate(p.path)}
                style={{
                  ...style_proj_card,
                  position: 'relative',
                  display: matched ? 'block' : 'none',
                  cursor: 'pointer',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: lc.accent, borderRadius: '12px 12px 0 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px', color: lc.label, letterSpacing: '1px' }}>
                    {p.lang.toUpperCase()}
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: colors.muted, fontWeight: '400' }}>
                    {p.year}
                  </div>
                </div>
                <div style={style_proj_title}>{p.title}</div>
                <div style={style_proj_desc}>{p.desc}</div>
              </div>
            );
          })}
        </div>

        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}

export default Projects;
