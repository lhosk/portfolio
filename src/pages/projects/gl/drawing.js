import React, { useEffect } from "react";
import { 
    style_ip_bg,
    style_ip_title,
    style_ip_career_section,
    style_ip_about_text,
    style_hyperlink
} from "../../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../../components/AudioManager.js";

function Drawing() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>

            {/* Force scrollable page */}
            <div style={{ minHeight: "150vh" }}>

                {/* Title */}
                <div style={style_ip_title}>Drawing Dots</div>

                {/* Textbox */}
                <div style={style_ip_career_section}>
                    <div style={style_ip_about_text}>
                        This was the second WebGL project I created. It features a canvas where you can 
                        draw dots at random positions with random colors every frame. I also learned how
                        to erase and delete dots from the canvas. This project helped me understand how 
                        to manipulate pixels directly in WebGL.
                    </div>
                   <p>
                        <a 
                            href="https://github.com/lhosk/opengl-and-webgl/tree/main/drawing-app"
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
                        src={process.env.PUBLIC_URL + "/files/drawing.html"}
                        title="Drawing Demo"
                        scrolling="no"
                        style={{
                            width: "550px",
                            height: "620px",
                            border: "none",
                            borderRadius: "10px",
                        }}
                    />
                </div>

            </div>
        </div>
    );
}

export default Drawing;
