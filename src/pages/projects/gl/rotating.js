import React, { useEffect } from "react";
import { 
    style_ip_bg,
    style_ip_title,
    style_ip_career_section,
    style_ip_about_text,
    style_hyperlink
} from "../../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../../components/AudioManager.js";

function Rotating() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>

            {/* Force scrollable page */}
            <div style={{ minHeight: "150vh" }}>

                {/* Title */}
                <div style={style_ip_title}>Rotating Squares</div>

                {/* Textbox */}
                <div style={style_ip_career_section}>
                    <div style={style_ip_about_text}>
                        This was the first WebGL project I created. It features a rotating square that 
                        circles around another rotating square. It's super basic, but introduced me to 
                        the fundamentals of WebGL programming.
                    </div>
                   <p>
                        <a 
                            href="https://github.com/lhosk/opengl-and-webgl/tree/main/rotating-squares"
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
                        src={process.env.PUBLIC_URL + "/files/rotating.html"}
                        title="Rotating Demo"
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

export default Rotating;
