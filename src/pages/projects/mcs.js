import React, { useEffect } from "react";
import NavBar from "../../components/NavBar.js";
import { 
    style_ip_bg, 
    style_ip_title, 
    style_ip_career_section, 
    style_ip_about_text 
} from "../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../components/AudioManager.js";
import mcsImage from "../../assets/images/mcs.png";

function Mcs() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>
                MCS: Circles & Spheres
            </div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>MATLAB, Computational Physics, Geometry Visualization, 3D Plotting, Statistical Estimation, Numerical Methods</strong>
                    </p>
                    <p>
                        This project marked my first experience with coding, created for a 
                        computational physics course in MATLAB. The goal was to estimate the 
                        area of a circle using a Monte Carlo simulation.
                    </p>
                    <p>
                        I later expanded the model to handle multiple circles and incorporated 
                        the concept of “holes,” enabling calculations of areas such as 
                        <i> (area of circles − area of holes)</i>.
                    </p>
                    <p>
                        After completing the 2D version, I extended the project into three 
                        dimensions, modeling spheres and spherical holes, and finally added 
                        elliptical geometries for broader applicability.
                    </p>
                    <p>
                        One of the outputs is shown below. The pink region represents the 
                        measured sphere, and the black region represents a spherical hole.
                    </p>
                    <p>
                        Since completing this project, my MATLAB proficiency has continued 
                        to improve through further research in quantum computing.
                    </p>
                </div>
            </div>

            {/* Image */}
            <div style={{ textAlign: "center", marginTop: "2rem", paddingBottom: "2rem" }}>
                <img 
                    src={mcsImage} 
                    alt="Monte Carlo Simulation Output" 
                    style={{ 
                        maxWidth: "650px", 
                        width: "90%", 
                        borderRadius: "15px", 
                        border: "2px solid white" 
                    }} 
                />
            </div>
        </div>
    );
}

export default Mcs;
