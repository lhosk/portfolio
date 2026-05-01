import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_proj_grid, style_proj_card, style_proj_title, style_proj_desc, colors, fonts } from "../../components/styles";

const glProjects = [
  { title: "Rotating Squares", desc: "Two squares rotating around each other to learn basic WebGL animation.", path: "/projects/gl/rotating" },
  { title: "Drawing Dots", desc: "Interactive dot drawing with random colors and real-time pixel updates.", path: "/projects/gl/drawing" },
  { title: "Drawing Triangles", desc: "Rendering and coloring triangles using vertex buffers and shaders.", path: "/projects/gl/triangles" },
  { title: "Archimedean Spiral", desc: "Generated a spiral mathematically and attached rotating squares along it.", path: "/projects/gl/archimedian" },
  { title: "Volcano", desc: "A particle effect using physics, random lifetimes, and dynamic updates.", path: "/projects/gl/volcano" },
  { title: "Indexing Cubes", desc: "3D cubes shooting in different directions using matrix transforms.", path: "/projects/gl/cubes" },
  { title: "Perspective of a Pot", desc: "Full perspective camera control with clipping planes and scaling.", path: "/projects/gl/perspective" },
  { title: "Quaternions and Light Shading", desc: "Interactive teapot with quaternion rotation and Phong lighting controls.", path: "/projects/gl/quaternion" },
];

function Gl() {
  const navigate = useNavigate();
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>WebGL and OpenGL Projects</div>
        <div style={style_proj_grid}>
          {glProjects.map((p, i) => (
            <div key={i} onClick={() => navigate(p.path)} style={{ ...style_proj_card, position: 'relative', cursor: 'pointer' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'rgba(201,169,0,0.53)', borderRadius: '12px 12px 0 0' }} />
              <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: '#7a6600', marginBottom: '8px', letterSpacing: '1px' }}>JAVASCRIPT</div>
              <div style={style_proj_title}>{p.title}</div>
              <div style={style_proj_desc}>{p.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Gl;
