import React, { useEffect } from "react";
import { 
    style_ip_bg,
    style_ip_title,
    style_ip_career_section,
    style_ip_about_text,
    style_hyperlink
} from "../../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../../components/AudioManager.js";

function Archimedian() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>

            {/* Force scrollable page */}
            <div style={{ minHeight: "150vh" }}>

                {/* Title */}
                <div style={style_ip_title}>Archimedian Spiral</div>

                {/* Textbox */}
                <div style={style_ip_career_section}>
                    <div style={style_ip_about_text}>
                        This WebGL project taught me the math behind generating an 
                        Archimedian spiral by stepping through angles and radii. 
                        I also experimented with attaching rotating squares to each 
                        point of the spiral to visualize how the curve grows as it turns. 
                        It wasn’t super advanced, but it definitely helped me get comfortable 
                        with combining geometry, animation loops, and transformations.
                        To reset, just refresh the page. Also, you must make the spiral before
                        making the squares (the squares follow the points of the spiral).
                    </div>
                    <p>
                        <a 
                            href="https://github.com/lhosk/opengl-and-webgl/tree/main/archimedian-spiral"
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
                        src={process.env.PUBLIC_URL + "/files/archimedian.html"}
                        title="Archimedian Spiral Demo"
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

export default Archimedian;
