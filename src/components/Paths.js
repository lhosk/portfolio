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
import Quaternion from "../pages/projects/gl/quaternion.js";

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
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/music" element={<Music />} />

                <Route path="/projects/cnn" element={<Cnn />} />
                <Route path="/projects/connect4" element={<Connect4 />} />
                <Route path="/projects/detection" element={<Detection />} />

                <Route path="/projects/gl" element={<Gl />} />

                <Route path="/projects/gl/archimedian" element={<Archimedian />} />
                <Route path="/projects/gl/cubes" element={<Cubes />} />
                <Route path="/projects/gl/drawing" element={<Drawing />} />
                <Route path="/projects/gl/perspective" element={<Perspective />} />
                <Route path="/projects/gl/rotating" element={<Rotating />} />
                <Route path="/projects/gl/triangles" element={<Triangles />} />
                <Route path="/projects/gl/volcano" element={<Volcano />} />
                <Route path="/projects/gl/quaternion" element={<Quaternion />} />

                <Route path="/projects/mcs" element={<Mcs />} />
                <Route path="/projects/mcsapf" element={<Mcsapf />} />
                <Route path="/projects/parallel" element={<Parallel />} />
                <Route path="/projects/recommendation" element={<Recommendation />} />
                <Route path="/projects/rl" element={<Rl />} />
                <Route path="/projects/rlgl" element={<Rlgl />} />
                <Route path="/projects/srgan" element={<Srgan />} />
                <Route path="/projects/vrd" element={<Vrd />} />
            </Routes>
        </>
    );
}

export default Paths;
