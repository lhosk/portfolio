import React from "react";
import { Link } from "react-router-dom";
import DetailPage from "../../components/DetailPage";
import { style_proj_grid, style_proj_card, style_proj_title, style_proj_desc, langColors, colors, fonts } from "../../components/styles";
import { glDemos } from "../../data/projects";

function Gl() {
  const js = langColors.JavaScript;
  return (
    <DetailPage title="WebGL and OpenGL Projects"
      stack="JavaScript · WebGL · OpenGL · HTML5 Canvas · Graphics Programming"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/opengl-and-webgl" }]}>
      <div style={style_proj_grid}>
        {glDemos.map((p, i) => (
          <Link key={p.path} to={p.path} className="hover-lift" style={style_proj_card}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: js.bar }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontFamily: fonts.mono, fontSize: '11px', fontWeight: 500, color: js.ink, letterSpacing: '1.2px' }}>
                DEMO {String(i + 1).padStart(2, '0')}
              </span>
              <span className="arrow" style={{ color: colors.accent, fontFamily: fonts.mono }}>→</span>
            </div>
            <div style={style_proj_title}>{p.title}</div>
            <div style={style_proj_desc}>{p.desc}</div>
          </Link>
        ))}
      </div>
    </DetailPage>
  );
}
export default Gl;
