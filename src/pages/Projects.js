import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    style_ip_bg,
    style_ip_title,
    style_proj_grid,
    style_proj_card_format,
    style_proj_card_title,
    style_proj_card_desc,
    style_proj_card_link,
} from "../components/styles.js";
import { playPageAudio, stopPageAudio } from "../components/AudioManager.js";

const langColors = {
    Python: "#4B8BBE",
    "C++": "#003464ff",
    MATLAB: "#8D0E25",
    JavaScript: "#F0DB4F",
};

const projectData = [
    { title: "CNN: Cats & Dogs Classifier", lang: "Python", desc: "Python, TensorFlow, CNN Architecture, Image Preprocessing, Model Training, Data Augmentation, Evaluation", path: "/projects/cnn" }, 
    { title: "Connect 4: Minimax & Alpha-Beta Pruning", lang: "Python", desc: "Python, Pygame, Minimax Algorithm, Alpha-Beta Pruning, Adversarial Search, Game AI, GUI Design, OOP", path: "/projects/connect4" },
    { title: "Real Time Object Detection", lang: "Python", desc: "Python, PyTorch, YOLOv8, Faster R-CNN, Object Detection, Model Training, Computer Vision, Real-Time Inference", path: "/projects/detection" },
    { title: "Monte Carlo Simulation: Circles and Spheres", lang: "MATLAB", desc: "MATLAB, Computational Physics, Geometry Visualization, 3D Plotting, Statistical Estimation, Numerical Methods", path: "/projects/mcs" },
    { title: "Monte Carlo Simulation: Atomic Packing Factor", lang: "C++", desc: "C++, Arduino, Monte Carlo Simulation, Embedded Systems, LCD Display, Hardware Interfacing, Sensor Input Handling", path: "/projects/mcsapf" },
    { title: "Parallel Computing", lang: "C++", desc: "C++, OpenMP, Pthreads, Parallel Computing, Numerical Integration, Performance Optimization", path: "/projects/parallel" },
    { title: "Recipe Recommendation System", lang: "Python", desc: "Python, NLP, Sentence Transformers, Pandas, NLTK, Hugging Face, OpenAI API, Text Preprocessing, Embedding Models", path: "/projects/recommendation" },
    { title: "Reinforcement Learning", lang: "Python", desc: "Python, Reinforcement Learning, Stable-Baselines3, A2C, Atari Environment, CNN Policy, OpenAI Gym, VecFrameStack", path: "/projects/rl" },
    { title: "Red Light Green Light Game", lang: "C++", desc: "Arduino, C++, Embedded Systems, Game Logic, Hardware Interfacing, Sensor Input Handling, Sound Control", path: "/projects/rlgl" },
    { title: "Stochastic Physics Informed Neural Network (SPINN)", lang: "Python", desc: "Python, Deep Learning, PINNs, RNNs, Ocean Wave Forecasting, Physics-Based Loss Functions, NOAA Buoy Data", path: "/projects/spinn" },
    { title: "Super Resolution Generative Adversarial Network", lang: "Python", desc: "Python, Deep Learning, TensorFlow, GANs, SRGAN, CNN Image Super-Resolution Transfer Learning Image Classification", path: "/projects/srgan" },
    { title: "Virtual Retinal Display", lang: "Python", desc: "Python, Optical Simulation, LightTools, Fusion 360, Virtual Retinal Display, Laser Intensity Modeling", path: "/projects/vrd" },
    { title: "Wave Perturbation Simulation", lang: "Python", desc: "Python, Computational Physics, Wave Packet Propagation, Potential Perturbations, Fourier Analysis, Numerical Simulation, Scientific Visualization", path: "/projects/wave" },
    { title: "Web/Open Gl Projects", lang: "JavaScript", desc: "A list of webGL and OpenGL projects! JavaScript, WebGL, OpenGL, HTML5 Canvas", path: "/projects/gl" },
];

function Projects() {
    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <div style={style_ip_title}>Projects</div>

            <div
                style={{ display: "flex", justifyContent: "center"}}
            >
                <div
                    style={{ border: "2px solid white", borderRadius: "14px", padding: "0.5rem 1rem", fontSize: "1.6rem", letterSpacing: "2px", textAlign: "center", backgroundColor: "white"}}
                >
                    <span style={{ color: langColors.Python, fontWeight: "bold", marginRight: "2rem" }}>Python</span>
                    <span style={{ color: langColors["C++"], fontWeight: "bold", marginRight: "2rem" }}>C++</span>
                    <span style={{ color: langColors.MATLAB, fontWeight: "bold", marginRight: "2rem" }}>MATLAB</span>
                    <span style={{ color: langColors.JavaScript, fontWeight: "bold" }}>JavaScript</span>
                </div>
            </div>

            <div style={style_proj_grid}>
                {projectData.map((p, idx) => (
                    <Link key={idx} to={p.path} style={style_proj_card_link}>
                        <div
                            style={{ ...style_proj_card_format, backgroundColor: langColors[p.lang], color: p.lang === "JavaScript" ? "black" : "white"}}
                        >
                            <div style={style_proj_card_title}>{p.title}</div>
                            <div style={style_proj_card_desc}>{p.desc}</div>
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{ height: "200px" }} />

        </div>
    );
}

export default Projects;
