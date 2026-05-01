import React from "react";
import NavBar from "../../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../../components/styles";

function Triangles() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Drawing Triangles</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>Introduced me to drawing triangles by manipulating vertex buffers, color buffers, and shader programs. Nearly all 3D models are built from triangles, so this was essential. I learned how to render multiple shapes using indexed vertices and how fragment colors are interpolated across surfaces. Click three points on the canvas to form a triangle — make as many as you want, reload to clear.</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/opengl-and-webgl/tree/main/drawing-triangles" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Demo</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe src={process.env.PUBLIC_URL + "/files/triangles.html"} title="Triangles Demo" scrolling="no" style={{ width: '550px', height: '620px', border: 'none', borderRadius: '12px' }} />
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Triangles;
