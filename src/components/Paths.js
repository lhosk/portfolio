import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import HomePage from "../pages/HomePage.js";
import About from "../pages/About.js";
import Career from "../pages/Career.js";
import Projects from "../pages/Projects.js";
import Contact from "../pages/Contact.js";
import Music from "../pages/Music.js";
import Cnn from "../pages/projects/cnn.js";
import Connect4 from "../pages/projects/connect4.js";
import Detection from "../pages/projects/detection.js";
import Gl from "../pages/projects/gl.js";
import Archimedian from "../pages/projects/gl/archimedian.js";
import Cubes from "../pages/projects/gl/cubes.js";
import Drawing from "../pages/projects/gl/drawing.js";
import Perspective from "../pages/projects/gl/perspective.js";
import Rotating from "../pages/projects/gl/rotating.js";
import Triangles from "../pages/projects/gl/triangles.js";
import Volcano from "../pages/projects/gl/volcano.js";
import Mcs from "../pages/projects/mcs.js";
import Mcsapf from "../pages/projects/mcsapf.js";
import Parallel from "../pages/projects/parallel.js";
import Recommendation from "../pages/projects/recommendation.js";
import Rl from "../pages/projects/rl.js";
import Rlgl from "../pages/projects/rlgl.js";
import Srgan from "../pages/projects/srgan.js";
import Vrd from "../pages/projects/vrd.js";



function Paths() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/portfolio" element={<HomePage />} />
                <Route path="/portfolio/about" element={<About />} />
                <Route path="/portfolio/career" element={<Career />} />
                <Route path="/portfolio/projects" element={<Projects />} />
                <Route path="/portfolio/projects/cnn" element={<Cnn />} />
                <Route path="/portfolio/projects/connect4" element={<Connect4 />} />
                <Route path="/portfolio/projects/detection" element={<Detection />} />
                <Route path="/portfolio/projects/gl" element={<Gl />} />
                <Route path="/portfolio/projects/gl/Archimedian" element={<Archimedian />} />
                <Route path="/portfolio/projects/gl/Cubes" element={<Cubes />} />
                <Route path="/portfolio/projects/gl/Drawing" element={<Drawing />} />
                <Route path="/portfolio/projects/gl/Perspective" element={<Perspective />} /> 
                <Route path="/portfolio/projects/gl/Rotating" element={<Rotating />} /> 
                <Route path="/portfolio/projects/gl/Triangles" element={<Triangles />} />
                <Route path="/portfolio/projects/gl/Volcano" element={<Volcano />} />
                <Route path="/portfolio/projects/mcs" element={<Mcs />} />
                <Route path="/portfolio/projects/mcsapf" element={<Mcsapf />} />
                <Route path="/portfolio/projects/parallel" element={<Parallel />} />
                <Route path="/portfolio/projects/recommendation" element={<Recommendation />} />
                <Route path="/portfolio/projects/rl" element={<Rl />} />
                <Route path="/portfolio/projects/rlgl" element={<Rlgl />} />
                <Route path="/portfolio/projects/srgan" element={<Srgan />} />
                <Route path="/portfolio/projects/vrd" element={<Vrd />} />
                <Route path="/portfolio/contact" element={<Contact />} />
                <Route path="/portfolio/music" element={<Music />} />
            </Routes>
        </>
    );
}

export default Paths;