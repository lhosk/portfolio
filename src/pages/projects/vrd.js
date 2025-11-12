import React, { useEffect } from "react";
import NavBar from "../../components/NavBar.js";
import { 
    style_ip_bg, 
    style_ip_title, 
    style_ip_career_section, 
    style_ip_about_text, 
    style_hyperlink 
} from "../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../components/AudioManager.js";
import vrd1 from "../../assets/images/vrd1.png";

function Vrd() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>Virtual Retinal Display</div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            Python, Optical Simulation, LightTools, Fusion 360, 
                            Virtual Retinal Display, Laser Intensity Modeling
                        </strong>
                    </p>
                    <p>
                        This project served as my final research and design work for an 
                        Optical Systems Design course. It focused on developing a 
                        Virtual Retinal Display (VRD) prototype, a system that 
                        projects light directly onto the human retina to create 
                        high-resolution images without the need for a physical screen.
                    </p>
                    <p>
                        The optical path was modeled in LightTools, while 
                        the anatomical structure of the eye was designed in 
                        Fusion 360. A custom Python script 
                        was used to model the scanning behavior of RGB lasers 
                        and to calculate the power distribution across wavelengths 
                        corresponding to human visual perception.
                    </p>
                    <p>
                        The system uses three lasers (red, green, blue) normalized 
                        by their photopic sensitivity curves, with total output power 
                        constrained below 1 mW for safety. As each pixel is scanned 
                        sequentially across the retina, varying laser intensities 
                        reproduce full-color images and potentially moving video frames.
                    </p>
                    <p>
                        A combination of <strong>mirrors, lenses, and beam splitters</strong> 
                        was used to direct and attenuate the beams effectively, 
                        optimizing brightness and safety while maintaining color accuracy.
                    </p>
                    <p>
                        This work aims to explore an alternative display pathway to 
                        modern AR, VR, and MR systems, minimizing bulk optics 
                        and maximizing visual immersion through direct retinal projection.
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/Virtual-Retinal-Display"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://docs.google.com/presentation/d/1Hq2x0hZfLBl_PrwBWz_tflsaa60aI4YXy2t5TbkMhCA/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project Presentation
                        </a>
                    </p>
                </div>
            </div>

            {/* Image */}
            <div 
                style={{ 
                    textAlign: "center", 
                    marginTop: "2rem", 
                    paddingBottom: "2rem" 
                }}
            >
                <img 
                    src={vrd1} 
                    alt="Virtual Retinal Display Diagram" 
                    style={{ 
                        maxWidth: "650px", 
                        width: "90%", 
                        borderRadius: "15px", 
                        border: "2px solid white" 
                    }} 
                />
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default Vrd;
