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
    { title: "Rotating Squares", desc: "", path: "/portfolio/projects/gl/rotating" },
    { title: "Drawing Dots", desc: "", path: "/portfolio/projects/gl/drawing" },
    { title: "Drawing Triangles", desc: "", path: "/portfolio/projects/gl/triangles" },
    { title: "Archimedian Spiral", desc: "", path: "/portfolio/projects/gl/archimedian" }, 
    { title: "Volcano", desc: "", path: "/portfolio/projects/gl/volcano" },
    { title: "Indexing Cubes", desc: "", path: "/portfolio/projects/gl/cubes" },
    { title: "Perspective of A Pot", desc: "", path: "/portfolio/projects/gl/perspective" },
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
        </div>
    );
}

export default Gl;
