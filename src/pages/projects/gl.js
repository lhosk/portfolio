import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    style_ip_bg,
    style_ip_title,
    style_proj_grid,
    style_proj_card_format,
    style_proj_card_title,
    style_proj_card_desc,
    style_proj_card_link,
} from "../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../components/AudioManager.js";

const projectData = [
    { 
        title: "Rotating Squares", 
        desc: "Two squares rotating around each other to learn basic WebGL animation.", 
        path: "/projects/gl/rotating" 
    },

    { 
        title: "Drawing Dots", 
        desc: "Interactive dot drawing with random colors and real-time pixel updates.", 
        path: "/projects/gl/drawing" 
    },

    { 
        title: "Drawing Triangles", 
        desc: "Rendering and coloring triangles using vertex buffers and shaders.", 
        path: "/projects/gl/triangles"
    },

    { 
        title: "Archimedian Spiral", 
        desc: "Generated a spiral mathematically and attached rotating squares along it.", 
        path: "/projects/gl/archimedian" 
    },

    { 
        title: "Volcano", 
        desc: "A particle effect using physics, random lifetimes, and dynamic updates.", 
        path: "/projects/gl/volcano" 
    },

    { 
        title: "Indexing Cubes", 
        desc: "3D cubes shooting in different directions using matrix transforms.", 
        path: "/projects/gl/cubes" 
    },

    { 
        title: "Perspective of A Pot", 
        desc: "Full perspective camera control with clipping planes and scaling.", 
        path: "/projects/gl/perspective" 
    },

    { 
        title: "Quaternions and Light Shading", 
        desc: "Interactive teapot with quaternion rotation and Phong lighting controls.", 
        path: "/projects/gl/quaternion" 
    },
];


function Gl() {
    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <div style={style_ip_title}>Projects</div>
            <div style={style_proj_grid}>
                {projectData.map((p, idx) => (
                    <Link key={idx} to={p.path} style={style_proj_card_link}>
                        <div style={style_proj_card_format}>
                            <div style={style_proj_card_title}>{p.title}</div>
                            <div style={style_proj_card_desc}>{p.desc}</div>
                        </div>
                    </Link>
                ))}
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>

        </div>
    );
}

export default Gl;
