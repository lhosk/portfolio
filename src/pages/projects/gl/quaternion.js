import React from "react";
import NavBar from "../../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../../components/styles";

function Quaternion() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Quaternions and Light Shading</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>Expanded my 3D graphics skills with a WebGL trackball rotation system, real-time lighting controls, and full material-light interaction using Phong shading. I built a quaternion-based camera rotation, added adjustable sliders for ambient, diffuse, specular, shininess, and light position, and implemented a full teapot model with dynamic uniform updates.</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Controls</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted, lineHeight: '2' }}>
            <div>- Left-click and drag to rotate the teapot</div>
            <div>- Sliders adjust light position and material properties</div>
            <div>- Click Reset to restore defaults</div>
            <div>- Full Phong shading: ambient, diffuse, specular, shininess</div>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/opengl-and-webgl/tree/main/quaternion_and_shaders" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Demo</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe src={process.env.PUBLIC_URL + "/files/quaternion.html"} title="Quaternion Demo" scrolling="no" style={{ width: '417px', height: '950px', border: 'none', borderRadius: '12px' }} />
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Quaternion;
