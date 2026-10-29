// projects.js — cards for the Projects, Papers and WebGL pages.
// Detail pages look themselves up here by path for their header and "next" link.
import shuttheboximg from '../assets/images/papers/shutthebox.png';
import phononimg from '../assets/images/papers/phonon.png';

export const projects = [
  { title: '2026 World Cup Analytics', lang: 'Python', year: 2026, desc: 'Pandas · SQLite · mplsoccer · Opta + SofaScore event data · Data visualization', path: '/projects/soccerdata' },
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

export const papers = [
  { title: 'Optimal Strategy in Shut The Box', lang: 'Python', year: 2026, desc: 'Dynamic programming · Monte Carlo simulation · Game Theory', path: '/papers/shutthebox', image: shuttheboximg },
  { title: 'Introduction to Phonons', status: 'In progress', lang: 'JavaScript', year: 2026, desc: 'Quantum Mechanics · Phonons · Linear Algebra · Statistical Mechanics', path: '/papers/phononintro', image: phononimg },
];

export const glDemos = [
  { title: 'Rotating Squares', lang: 'JavaScript', year: 2025, desc: 'Two squares rotating around each other to learn basic WebGL animation.', path: '/projects/gl/rotating' },
  { title: 'Drawing Dots', lang: 'JavaScript', year: 2025, desc: 'Interactive dot drawing with random colors and real-time pixel updates.', path: '/projects/gl/drawing' },
  { title: 'Drawing Triangles', lang: 'JavaScript', year: 2025, desc: 'Rendering and coloring triangles using vertex buffers and shaders.', path: '/projects/gl/triangles' },
  { title: 'Archimedean Spiral', lang: 'JavaScript', year: 2025, desc: 'Generated a spiral mathematically and attached rotating squares along it.', path: '/projects/gl/archimedian' },
  { title: 'Volcano', lang: 'JavaScript', year: 2025, desc: 'A particle effect using physics, random lifetimes, and dynamic updates.', path: '/projects/gl/volcano' },
  { title: 'Indexing Cubes', lang: 'JavaScript', year: 2025, desc: '3D cubes shooting in different directions using matrix transforms.', path: '/projects/gl/cubes' },
  { title: 'Perspective of a Pot', lang: 'JavaScript', year: 2025, desc: 'Full perspective camera control with clipping planes and scaling.', path: '/projects/gl/perspective' },
  { title: 'Quaternions and Light Shading', lang: 'JavaScript', year: 2025, desc: 'Interactive teapot with quaternion rotation and Phong lighting controls.', path: '/projects/gl/quaternion' },
];

const groups = [
  { list: glDemos, back: { to: '/projects/gl', label: 'WebGL projects' }, next: 'Next demo' },
  { list: projects, back: { to: '/projects', label: 'All projects' }, next: 'Next project' },
  { list: papers, back: { to: '/papers', label: 'All papers' }, next: 'Next paper' },
];

// { item, back, next, nextLabel } for a detail page path, or null
export function findEntry(pathname) {
  for (const g of groups) {
    const i = g.list.findIndex((p) => p.path === pathname);
    if (i === -1) continue;
    const next = g.list.length > 1 ? g.list[(i + 1) % g.list.length] : null;
    return { item: g.list[i], back: g.back, next, nextLabel: g.next };
  }
  return null;
}
