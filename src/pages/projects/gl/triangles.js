import React, { useEffect } from "react";
import { 
    style_ip_bg,
    style_ip_title,
    style_ip_career_section,
    style_ip_about_text
} from "../../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../../components/AudioManager.js";

function Triangles() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>

            {/* Force scrollable page */}
            <div style={{ minHeight: "150vh" }}>

                {/* Title */}
                <div style={style_ip_title}>Drawing Triangles</div>

                {/* Textbox */}
                <div style={style_ip_career_section}>
                    <div style={style_ip_about_text}>
                        This WebGL project introduced me to drawing triangles by manipulating 
                        vertex buffers, color buffers, and shader programs. Working with triangles 
                        is essential in graphics programming since nearly all 3D models are built 
                        from them. This helped me understand how to render multiple shapes using 
                        indexed vertices and how fragment colors are interpolated across surfaces.
                        To start drawing, click three points on the canvas to form a triangle.
                        You can make as many triangles as you want and reload the page to clear the canvas.
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
                        src={process.env.PUBLIC_URL + "/files/triangles.html"}
                        title="Triangles Demo"
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

export default Triangles;
