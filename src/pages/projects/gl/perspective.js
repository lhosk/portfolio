import React, { useEffect } from "react";
import { 
    style_ip_bg,
    style_ip_title,
    style_ip_career_section,
    style_ip_about_text,
    style_hyperlink
} from "../../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../../components/AudioManager.js";

function Perspective() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>

            {/* Force scrollable page */}
            <div style={{ minHeight: "150vh" }}>

                {/* Title */}
                <div style={style_ip_title}>Perspective of a Pot</div>

                {/* Textbox */}
                <div style={style_ip_career_section}>
                    <div style={style_ip_about_text}>
                        This project was another big step forward because it introduced 
                        me to controlling a full perspective camera in WebGL. I had to 
                        update the camera’s movement, handle the near and far clipping 
                        planes, and scale the x and y axes correctly to keep the pot 
                        looking realistic as it rotated. It really helped me understand 
                        how perspective projection works and how 3D scenes are mapped 
                        onto a 2D screen.
                        <br /><br />
                        Instructions:
                        <ul>
                            <li>Four Sliders at the bottom that change clipping and scaling</li>
                            <li>Hold left mouse button to move x and y viewing</li>
                            <li>Middle mouse button to move z viewing (Made for touchpad zoom, rather than middle mouse button)</li>
                            <li>Click on canvas then click "r" on the keyboard to reset view</li>
                        </ul>
                    </div>
                   <p>
                        <a 
                            href="https://github.com/lhosk/opengl-and-webgl/tree/main/perspective"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                </div>

                {/* Centered Canvas */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "1rem",
                    }}
                >
                    <iframe
                        src={process.env.PUBLIC_URL + "/files/perspective.html"}
                        title="Perspective Demo"
                        scrolling="no"
                        style={{
                            width: "550px",
                            height: "800px",
                            border: "none",
                            borderRadius: "10px",
                        }}
                    />
                </div>

            </div>

        </div>
    );
}

export default Perspective;
