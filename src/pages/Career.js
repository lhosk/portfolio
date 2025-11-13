import React, { useEffect, useState } from "react";
import {
    style_ip_bg,
    style_ip_title,
    style_ip_career_section,
    style_ip_career_section_header,
    style_ip_career_list,
    style_ip_career_list_nested,
    style_ip_career_cert_dropdown,
    style_ip_career_cert_iframe,
} from "../components/styles.js";
import { playPageAudio, stopPageAudio } from "../components/AudioManager.js";

// import certificate PDFs
import cert1 from "../assets/certificates/cert1.pdf";
import cert2 from "../assets/certificates/cert2.pdf";
import cert3 from "../assets/certificates/cert3.pdf";
import cert4 from "../assets/certificates/cert4.pdf";
import cert5 from "../assets/certificates/cert5.pdf";
import cert6 from "../assets/certificates/cert6.pdf";

function Career() {
    const [openCert, setOpenCert] = useState(null);

    useEffect(() => {
        playPageAudio("career");
        return () => stopPageAudio();
    }, []);

    const toggleCert = (index) => {
        setOpenCert(openCert === index ? null : index);
    };

    return (
        <div style={style_ip_bg}>
            <div style={style_ip_title}>Career Overview</div>

            {/* Education */}
            <div style={style_ip_career_section}>
                <div style={style_ip_career_section_header}>Education</div>
                <div style={{ textAlign: "left", marginTop: "0.5rem" }}>
                    <b>University of North Carolina at Charlotte (UNCC)</b>
                    <ul style={style_ip_career_list_nested}>
                        <li>B.S. in Physics (2021–2023)</li>
                        <li>M.S. in Applied Physics (2024–2025)</li>
                        <li>M.S. in Computer Science (2024–2025)</li>
                    </ul>
                </div>
            </div>

            {/* Experience */}
            <div style={style_ip_career_section}>
                <div style={style_ip_career_section_header}>Experience</div>
                <div style={{ textAlign: "left", marginTop: "0.5rem" }}>
                    <b>Researcher</b> – BioMolecular Physics Group, UNCC (2023–2024)
                    <ul style={style_ip_career_list_nested}>
                        <li>Developed multi-qubit Hamiltonian and propagator models</li>
                        <li>Optimized convergence in ground-state energy calculations</li>
                    </ul>
                    <b>Teaching Assistant</b> – UNCC Physics Dept. (2023–Present)
                    <ul style={style_ip_career_list_nested}>
                        <li>Taught and assisted over 500 students in PHYS 2101/2102 lecture and lab sections</li>
                        <li>Collaborated with faculty to improve lab instruction and student performance</li>
                    </ul>
                </div>
            </div>

            {/* Skills */}
            <div style={style_ip_career_section}>
                <div style={style_ip_career_section_header}>Skills</div>
                <ul style={style_ip_career_list}>
                    <li><b>Developer Tools:</b> Anaconda, Colab, Git, Jupyter, PuTTY, SLURM, SSH, VS Code, WinSCP</li>
                    <li><b>Languages:</b> Python, C++, JavaScript, LaTeX, Markdown, MATLAB, SQL</li>
                    <li><b>Libraries & Frameworks:</b> CUDA, NLTK, PyTorch, React, SBERT, Scikit-learn, SymPy, OpenGL</li>
                    <li><b>LLMs & APIs:</b> Anthropic API, ChatGPT (OpenAI API), HuggingFace</li>
                    <li><b>Operating Systems:</b> Linux, Ubuntu, Windows</li>
                    <li><b>Physical & Optical Computing:</b> Arduino, Fusion (CAD), Inkscape, LightTools, Prusa Slicer</li>
                    <li><b>Software Engineering:</b> Agile, OOP, Scrum, UML and Sequence Diagrams</li>
                </ul>
            </div>

            {/* Certificates */}
            <div style={style_ip_career_section}>
                <div style={style_ip_career_section_header}>Certificates</div>

                {/* Cert 1 */}
                <div style={style_ip_career_cert_dropdown} onClick={() => toggleCert(1)}>
                    Artificial Intelligence – Womanium Quantum (2024) {openCert === 1 ? "▲" : "▼"}
                </div>
                {openCert === 1 && <iframe src={cert1} title="Cert 1" style={style_ip_career_cert_iframe}></iframe>}

                {/* Cert 2 */}
                <div style={style_ip_career_cert_dropdown} onClick={() => toggleCert(2)}>
                    Quantum Computing Hardware – Womanium Quantum (2024) {openCert === 2 ? "▲" : "▼"}
                </div>
                {openCert === 2 && <iframe src={cert2} title="Cert 2" style={style_ip_career_cert_iframe}></iframe>}

                {/* Cert 3 */}
                <div style={style_ip_career_cert_dropdown} onClick={() => toggleCert(3)}>
                    QBronze – QWorld (2024) {openCert === 3 ? "▲" : "▼"}
                </div>
                {openCert === 3 && <iframe src={cert3} title="Cert 3" style={style_ip_career_cert_iframe}></iframe>}

                {/* Cert 4 */}
                <div style={style_ip_career_cert_dropdown} onClick={() => toggleCert(4)}>
                    Quantum Machine Learning – PennyLane (2024) {openCert === 4 ? "▲" : "▼"}
                </div>
                {openCert === 4 && <iframe src={cert4} title="Cert 4" style={style_ip_career_cert_iframe}></iframe>}

                {/* Cert 5 */}
                <div style={style_ip_career_cert_dropdown} onClick={() => toggleCert(5)}>
                    AWS Academy Data Engineering (2025) {openCert === 5 ? "▲" : "▼"}
                </div>
                {openCert === 5 && <iframe src={cert5} title="Cert 5" style={style_ip_career_cert_iframe}></iframe>}

                {/* Cert 6 */}
                <div style={style_ip_career_cert_dropdown} onClick={() => toggleCert(6)}>
                    AWS Machine Learning Foundations (2025) {openCert === 6 ? "▲" : "▼"}
                </div>
                {openCert === 6 && <iframe src={cert6} title="Cert 6" style={style_ip_career_cert_iframe}></iframe>}
            </div>
            
            {/* Relevant Courses */}
            <div style={style_ip_career_section}>
                <div style={style_ip_career_section_header}>Relevant Graduate Courses</div>
                <div style={{ textAlign: "left", marginTop: "0.5rem" }}>
                    <b>Computer Science</b>
                    <ul style={{ marginTop: "0.5rem", listStyle: "none", paddingLeft: "2rem", lineHeight: "2rem" }}>
                        <li>Artificial Intelligence (Intro, Regular, and Applied)</li>
                        <li>Text Mining & Information Retrieval (NLP)</li>
                        <li>Software System Design & Implementation</li>
                        <li>Machine Learning (Intro and Applied)</li>
                        <li>Physical Computing</li>
                        <li>Parallel Computing</li>
                        <li>Computer Graphics</li>
                    </ul>

                    <b>Data Science Concentration</b>
                    <ul style={{ marginTop: "0.5rem", listStyle: "none", paddingLeft: "2rem", lineHeight: "2rem" }}>
                        <li>Big Data Analytics for Competitive Advantage</li>
                        <li>Database Systems</li>
                        <li>Data Mining</li>
                    </ul>

                    <b>Physics and Optics</b>
                    <ul style={{ marginTop: "0.5rem", listStyle: "none", paddingLeft: "2rem", lineHeight: "2rem" }}>
                        <li>Quantum Mechanics I and II + Quantum Theory I</li>
                        <li>Solid State Physics I and II</li>
                        <li>Computational Chemistry</li>
                        <li>Theoretical Physics</li>
                        <li>Illumination Optics</li>
                        <li>Stochastic Calculus</li>
                    </ul>
                </div>
            </div>

            <div style={{ height: "10vh" }}></div>
        </div>
    );
}

export default Career;