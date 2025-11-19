import React, { useEffect } from "react";
import { 
    style_ip_bg,
    style_ip_title,
    style_ip_career_section,
    style_ip_about_text
} from "../../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../../components/AudioManager.js";

function Volcano() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>

            {/* Force scrollable page */}
            <div style={{ minHeight: "150vh" }}>

                {/* Title */}
                <div style={style_ip_title}>Volcano</div>

                {/* Textbox */}
                <div style={style_ip_career_section}>
                    <div style={style_ip_about_text}>
                        This simulation helped me get more comfortable mixing physics 
                        with WebGL. I played around with spawning particles at random 
                        intervals, removing them over time, and adjusting things like 
                        velocity, spread, and how long each particle lived. It was a 
                        simple project, but it taught me a lot about how visual effects 
                        are built up from tons of tiny moving pieces working together.
                        You can start and stop the simulation using the same button!
                    </div>
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
                        src={process.env.PUBLIC_URL + "/files/volcano.html"}
                        title="Volcano Demo"
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

export default Volcano;
