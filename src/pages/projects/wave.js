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

function WavePerturbation() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>Wave Perturbation Simulation</div>

            {/* Main Description */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            Python, Computational Physics, Wave Packet Propagation, Potential Perturbations, 
                            Fourier Analysis, Numerical Simulation, Scientific Visualization
                        </strong>
                    </p>

                    <p>
                        This project investigates the time-dependent evolution of a one-dimensional wave packet
                        under the presence of a localized potential perturbation. The goal is to study how
                        spatial disturbances modify wave propagation, phase evolution, and spectral content
                        relative to an unperturbed baseline system.
                    </p>

                    <p>
                        The simulation numerically solves a Schrödinger-type wave equation using finite-difference
                        time stepping combined with FFT-based spectral analysis. An initial Gaussian wave packet
                        is propagated through both free space and a perturbed potential, allowing direct
                        comparison of arrival times, dispersion behavior, and momentum-space structure.
                    </p>

                    <p>
                        To quantify the effects of the perturbation, the momentum-space amplitude function
                        <em> A(k) </em> is extracted via Fourier transforms. Changes in phase, group velocity,
                        and spectral distortion are tracked to isolate the physical impact of the localized
                        potential.
                    </p>

                    <p>
                        The full simulation code, including numerical implementation details and visualization
                        tools, is available below.
                    </p>

                    <p>
                        <a 
                            href="https://github.com/lhosk/wave-packet-perturbation"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project Code on GitHub
                        </a>
                    </p>

                    <p>
                        In addition to the code, I wrote a complete technical solution that walks through the
                        mathematical formulation of the problem, the assumptions involved, and the step-by-step
                        derivation used to motivate the numerical approach. This document is not a formal
                        publication, but rather a rigorous problem solution accompanying the simulation.
                    </p>

                    <p>
                        <a 
                            href="https://github.com/lhosk/wave-packet-perturbation/blob/main/wave_pertubation_problem.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Technical Problem Solution (PDF)
                        </a>
                    </p>
                </div>
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default WavePerturbation;
