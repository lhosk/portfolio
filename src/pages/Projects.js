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

const projectData = [
    { title: "CNN: Cats & Dogs Classifier", desc: "Python, TensorFlow, CNN Architecture, Image Preprocessing, Model Training, Data Augmentation, Evaluation", path: "/projects/cnn" }, 
    { title: "Connect 4: Minimax & Alpha-Beta Pruning", desc: "Python, Pygame, Minimax Algorithm, Alpha-Beta Pruning, Adversarial Search, Game AI, GUI Design, OOP", path: "/projects/connect4" },
    { title: "Real Time Object Detection", desc: "Python, PyTorch, YOLOv8, Faster R-CNN, Object Detection, Model Training, Computer Vision, Real-Time Inference", path: "/projects/detection" },
    { title: "Monte Carlo Simulation: Circles and Spheres", desc: "MATLAB, Computational Physics, Geometry Visualization, 3D Plotting, Statistical Estimation, Numerical Methods", path: "/projects/mcs" },
    { title: "Monte Carlo Simulation: Atomic Packing Factor", desc: "C++, Arduino, Monte Carlo Simulation, Embedded Systems, LCD Display, Hardware Interfacing, Sensor Input Handling", path: "/projects/mcsapf" },
    { title: "Parallel Computing", desc: "C++, OpenMP, Pthreads, Parallel Computing, Numerical Integration, Performance Optimization", path: "/projects/parallel" },
    { title: "Recipe Recommendation System", desc: "Python, NLP, Sentence Transformers, Pandas, NLTK, Hugging Face, OpenAI API, Text Preprocessing, Embedding Models", path: "/projects/recommendation" },
    { title: "Reinforcement Learning", desc: "Python, Reinforcement Learning, Stable-Baselines3, A2C, Atari Environment, CNN Policy, OpenAI Gym, VecFrameStack", path: "/projects/rl" },
    { title: "Red Light Green Light Game", desc: "Arduino, C++, Embedded Systems, Game Logic, Hardware Interfacing, Sensor Input Handling, Sound Control", path: "/projects/rlgl" },
    { title: "Super Resolution Generative Adversarial Network", desc: "Python, Deep Learning, TensorFlow, GANs, SRGAN, CNN Image Super-Resolution Transfer Learning Image Classification", path: "/projects/srgan" },
    { title: "Virtual Retinal Display", desc: "Python, Optical Simulation, LightTools, Fusion 360, Virtual Retinal Display, Laser Intensity Modeling", path: "/projects/vrd" },
    { title: "Web/Open Gl Projects", desc: "A list of webGL and OpenGL projects! JavaScript, WebGL, OpenGL, HTML5 Canvas", path: "/projects/gl" },
];

function Projects() {
    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <div style={style_ip_title}>Projects</div>
            <div style={style_proj_grid}>
                {projectData.map((p, idx) => (
                    <Link key={idx} to={p.path} style={style_proj_card_link}>
                        <div style={style_proj_card_format}>
                            <div style={style_proj_card_title}>{p.title}</div>
                            <div style={style_proj_card_desc}>{p.desc}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;
