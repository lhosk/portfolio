import React, { useEffect } from "react";
import { 
    style_ip_bg,
    style_ip_title,
    style_ip_career_section,
    style_ip_about_text
} from "../../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../../components/AudioManager.js";

function Cubes() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>

            {/* Force scrollable page */}
            <div style={{ minHeight: "150vh" }}>

                {/* Title */}
                <div style={style_ip_title}>Indexing Moving Cubes</div>

                {/* Textbox */}
                <div style={style_ip_career_section}>
                    <div style={style_ip_about_text}>
                        This project was a huge step up for me. I had to work with 
                        transformations in 3D space and update the cubes using 
                        matrix operations for translation, rotation, and scaling. 
                        Each cube fires off in a different direction along the x, y, 
                        and z axes, so I learned how to apply dynamic updates to 
                        their position vectors every frame. This was the first time 
                        WebGL really “clicked” for me in terms of how 3D graphics 
                        pipelines actually work.
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
                        src={process.env.PUBLIC_URL + "/files/cubes.html"}
                        title="Cubes Demo"
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

export default Cubes;
