import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Career from './pages/Career';
import About from './pages/About';
import Cnn from './pages/projects/cnn';
import Connect4 from './pages/projects/connect4';
import Detection from './pages/projects/detection';
import Gl from './pages/projects/gl';
import Mcs from './pages/projects/mcs';
import McsApf from './pages/projects/mcsapf';
import Parallel from './pages/projects/parallel';
import Recommendation from './pages/projects/recommendation';
import Rl from './pages/projects/rl';
import Rlgl from './pages/projects/rlgl';
import Spinn from './pages/projects/spinn';
import Srgan from './pages/projects/srgan';
import Vrd from './pages/projects/vrd';
import Wave from './pages/projects/wave';
import Rotating from './pages/projects/gl/rotating';
import Drawing from './pages/projects/gl/drawing';
import Triangles from './pages/projects/gl/triangles';
import Archimedian from './pages/projects/gl/archimedian';
import Volcano from './pages/projects/gl/volcano';
import Cubes from './pages/projects/gl/cubes';
import Perspective from './pages/projects/gl/perspective';
import Quaternion from './pages/projects/gl/quaternion';

function App() {
  return (
    <Router basename="/porto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/cnn" element={<Cnn />} />
        <Route path="/projects/connect4" element={<Connect4 />} />
        <Route path="/projects/detection" element={<Detection />} />
        <Route path="/projects/gl" element={<Gl />} />
        <Route path="/projects/mcs" element={<Mcs />} />
        <Route path="/projects/mcsapf" element={<McsApf />} />
        <Route path="/projects/parallel" element={<Parallel />} />
        <Route path="/projects/recommendation" element={<Recommendation />} />
        <Route path="/projects/rl" element={<Rl />} />
        <Route path="/projects/rlgl" element={<Rlgl />} />
        <Route path="/projects/spinn" element={<Spinn />} />
        <Route path="/projects/srgan" element={<Srgan />} />
        <Route path="/projects/vrd" element={<Vrd />} />
        <Route path="/projects/wave" element={<Wave />} />
        <Route path="/projects/gl/rotating" element={<Rotating />} />
        <Route path="/projects/gl/drawing" element={<Drawing />} />
        <Route path="/projects/gl/triangles" element={<Triangles />} />
        <Route path="/projects/gl/archimedian" element={<Archimedian />} />
        <Route path="/projects/gl/volcano" element={<Volcano />} />
        <Route path="/projects/gl/cubes" element={<Cubes />} />
        <Route path="/projects/gl/perspective" element={<Perspective />} />
        <Route path="/projects/gl/quaternion" element={<Quaternion />} />
      </Routes>
    </Router>
  );
}

export default App;