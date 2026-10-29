import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { style_page_bg } from './components/styles';
import HomePage from './pages/HomePage';
import Career from './pages/Career';
import About from './pages/About';
import Projects from './pages/Projects';
import Papers from './pages/Papers';
import Photos from './pages/Photos';
import NotFound from './pages/NotFound';
// Project Pages — each loads as its own chunk so the landing page stays light
const Cnn = lazy(() => import('./pages/projects/cnn'));
const Connect4 = lazy(() => import('./pages/projects/connect4'));
const Detection = lazy(() => import('./pages/projects/detection'));
const Gl = lazy(() => import('./pages/projects/gl'));
const Mcs = lazy(() => import('./pages/projects/mcs'));
const McsApf = lazy(() => import('./pages/projects/mcsapf'));
const Parallel = lazy(() => import('./pages/projects/parallel'));
const Recommendation = lazy(() => import('./pages/projects/recommendation'));
const Rl = lazy(() => import('./pages/projects/rl'));
const Rlgl = lazy(() => import('./pages/projects/rlgl'));
const SoccerData = lazy(() => import('./pages/projects/soccerdata'));
const Spinn = lazy(() => import('./pages/projects/spinn'));
const Srgan = lazy(() => import('./pages/projects/srgan'));
const Vrd = lazy(() => import('./pages/projects/vrd'));
const Wave = lazy(() => import('./pages/projects/wave'));
const Rotating = lazy(() => import('./pages/projects/gl/rotating'));
const Drawing = lazy(() => import('./pages/projects/gl/drawing'));
const Triangles = lazy(() => import('./pages/projects/gl/triangles'));
const Archimedian = lazy(() => import('./pages/projects/gl/archimedian'));
const Volcano = lazy(() => import('./pages/projects/gl/volcano'));
const Cubes = lazy(() => import('./pages/projects/gl/cubes'));
const Perspective = lazy(() => import('./pages/projects/gl/perspective'));
const Quaternion = lazy(() => import('./pages/projects/gl/quaternion'));
// Papers Pages
const ShutTheBox = lazy(() => import('./pages/papers/shutthebox'));
const PhononIntro = lazy(() => import('./pages/papers/phononintro'));

function App() {
  return (
    <Router>
      <div style={style_page_bg}>
        <NavBar />
        <Suspense fallback={<main style={{ flex: 1 }} />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/papers/shutthebox" element={<ShutTheBox />} />
            <Route path="/papers/phononintro" element={<PhononIntro />} />
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
            <Route path="/projects/soccerdata" element={<SoccerData />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
