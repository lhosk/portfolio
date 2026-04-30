import React, { useState } from 'react';
import NavBar from './NavBar';
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
} from './styles';

const langColors = {
  Python: { accent: 'rgba(75,139,190,0.53)', label: '#2a5a8a' },
  'C++':  { accent: 'rgba(0,52,100,0.53)',   label: '#003464' },
  MATLAB: { accent: 'rgba(141,14,37,0.53)',  label: '#8D0E25' },
  JavaScript: { accent: 'rgba(201,169,0,0.53)', label: '#7a6600' },
};

const projectData = [
  { title: 'Stochastic Physics Informed Neural Network (SPINN)', lang: 'Python', desc: 'PyTorch · PINNs · RNNs · Ocean wave forecasting · AWS SageMaker' },
  { title: 'Applied AI', lang: 'Python', desc: 'SRGAN · Connect 4 Minimax · A2C Atari RL · YOLOv8 · Faster R-CNN' },
  { title: 'Natural Language Processing', lang: 'Python', desc: 'TF-IDF · NLTK · SBERT · LDA · RAG recipe recommendation · Semantic search' },
  { title: 'Virtual Retinal Display (VRD)', lang: 'Python', desc: 'LightTools · Fusion 360 · Laser intensity modeling · CIE color mapping' },
  { title: 'Computational Chemistry', lang: 'Python', desc: 'Jaynes-Cummings model · Hartree-Fock · DFT · Psi4 · Polariton systems' },
  { title: 'Wave Perturbation Simulation', lang: 'Python', desc: 'Wave packet propagation · Fourier analysis · Numerical simulation' },
  { title: 'CNN: Cats and Dogs Classifier', lang: 'Python', desc: 'TensorFlow · CNN architecture · Data augmentation · Image preprocessing' },
  { title: 'Connect 4: Minimax and Alpha-Beta Pruning', lang: 'Python', desc: 'Pygame · Minimax · Alpha-Beta pruning · Adversarial search' },
  { title: 'Reinforcement Learning', lang: 'Python', desc: 'Stable-Baselines3 · A2C · Atari · VecFrameStack · OpenAI Gym' },
  { title: 'Parallel Computing', lang: 'C++', desc: 'OpenMP · Pthreads · Numerical integration · Performance optimization' },
  { title: 'Monte Carlo Simulation: Atomic Packing Factor', lang: 'C++', desc: 'Arduino · Embedded systems · LCD display · Sensor input handling' },
  { title: 'Red Light Green Light Game', lang: 'C++', desc: 'Arduino · Embedded systems · Game logic · Hardware interfacing' },
  { title: 'Monte Carlo Simulation: Circles and Spheres', lang: 'MATLAB', desc: 'Computational physics · Geometry visualization · 3D plotting' },
  { title: 'WebGL and OpenGL Projects', lang: 'JavaScript', desc: 'WebGL · OpenGL · HTML5 Canvas · Graphics programming' },
];

const filters = ['All', 'Python', 'C++', 'MATLAB', 'JavaScript'];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projectData : projectData.filter(p => p.lang === active);

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_eyebrow}>Work</div>
        <div style={style_section_title}>PROJECTS</div>

        {/* Filter bar */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {filters.map((f) => (
            <button
              key={f}
              style={active === f ? style_filter_btn_active : style_filter_btn}
              onClick={() => setActive(f)}
            >
              {f === 'All' ? `All (${projectData.length})` : f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={style_proj_grid}>
          {filtered.map((p, i) => {
            const lc = langColors[p.lang];
            return (
              <div key={i} style={{ ...style_proj_card, position: 'relative' }}>
                {/* top accent bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: lc.accent, borderRadius: '12px 12px 0 0' }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px', color: lc.label, marginBottom: '8px', letterSpacing: '1px' }}>
                  {p.lang.toUpperCase()}
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
