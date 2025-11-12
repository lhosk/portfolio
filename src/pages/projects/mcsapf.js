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
import mcsapfImage from "../../assets/images/mcsapf.png";

function McsApf() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>
                MCS: Atomic Packing Factor
            </div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>C++, Arduino, Monte Carlo Simulation, Embedded Systems, 
                        LCD Display, Hardware Interfacing, Sensor Input Handling</strong>
                    </p>
                    <p>
                        This was my second Monte Carlo simulation project and my first time working 
                        with Arduino. I used it as an end-of-semester presentation for my Physical 
                        Computing course, inspired by my Solid State Physics class.
                    </p>
                    <p>
                        The Atomic Packing Factor (APF) represents the ratio of the total atomic 
                        volume to the unit cell volume. Essentially, it measures how densely atoms 
                        are packed within a crystal structure.
                    </p>
                    <p>
                        The APF can be calculated analytically for specific lattice configurations, 
                        but for quick estimation, this Monte Carlo Simulation allows users to input 
                        atomic radii and positions to compute the packing factor numerically.
                    </p>
                    <p>
                        <strong>Program Highlights:</strong><br />
                        • Implements Monte Carlo methods to approximate APF<br />
                        • Displays real-time results using an LCD module<br />
                        • Demonstrates solid-state physics principles through code<br />
                        • Integrates both numerical modeling and embedded systems
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/physical-computing/blob/main/code_monte_carlo_simulation_on_atomic_packing_factor.ino"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                </div>
            </div>

            {/* Image */}
            <div style={{ textAlign: "center", marginTop: "2rem", paddingBottom: "2rem" }}>
                <img 
                    src={mcsapfImage} 
                    alt="Monte Carlo Simulation - Atomic Packing Factor" 
                    style={{ maxWidth: "650px",  width: "90%", borderRadius: "15px", border: "2px solid white" }} 
                />
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default McsApf;
