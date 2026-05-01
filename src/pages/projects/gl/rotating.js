import React from "react";
import NavBar from "../../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../../components/styles";

function Rotating() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Rotating Squares</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>My first WebGL project. A rotating square that circles around another rotating square. Super basic, but it introduced me to the fundamentals of WebGL programming.</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/opengl-and-webgl/tree/main/rotating-squares" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Demo</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe src={process.env.PUBLIC_URL + "/files/rotating.html"} title="Rotating Demo" scrolling="no" style={{ width: '550px', height: '620px', border: 'none', borderRadius: '12px' }} />
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Rotating;
