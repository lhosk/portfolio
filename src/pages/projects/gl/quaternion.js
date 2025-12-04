import React, { useEffect } from "react";
import { 
    style_ip_bg,
    style_ip_title,
    style_ip_career_section,
    style_ip_about_text,
    style_hyperlink
} from "../../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../../components/AudioManager.js";

function Quaternion() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>

            {/* Force scrollable page */}
            <div style={{ minHeight: "150vh" }}>

                {/* Title */}
                <div style={style_ip_title}>Quaternion & Lighting</div>

                {/* Textbox */}
                <div style={style_ip_career_section}>
                    <div style={style_ip_about_text}>
                        This project expanded my 3D graphics skills by introducing a 
                        WebGL trackball rotation system, real-time lighting controls, 
                        and full material-light interaction using Phong shading. I built 
                        a quaternion-based camera rotation, added adjustable sliders for 
                        ambient, diffuse, specular, shininess, and light position, and 
                        implemented a full teapot model with dynamic uniform updates.
                        <br /><br />
                        Instructions:
                        <ul>
                            <li>Left-click + drag to rotate the teapot</li>
                            <li>Sliders adjust the light position and material properties</li>
                            <li>Click “Reset” to restore light/material defaults</li>
                            <li>Full Phong shading: ambient, diffuse, specular, shininess</li>
                        </ul>
                    </div>
                   <p>
                        <a 
                            href="https://github.com/lhosk/opengl-and-webgl/tree/main/quaternion_and_shaders"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                </div>

                {/* Centered Canvas / Iframe */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "1rem",
                    }}
                >
                    <iframe
                        src={process.env.PUBLIC_URL + "/files/quaternion.html"}
                        title="Lighting Demo"
                        scrolling="no"
                        style={{
                            width: "417px",
                            height: "950px",
                            border: "none",
                            borderRadius: "10px",
                        }}
                    />
                </div>

                <div style={{ height: "100px" }} />

            </div>

        </div>
    );
}

export default Quaternion;
