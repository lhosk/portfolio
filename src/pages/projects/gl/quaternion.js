import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../../components/styles";

const DEMO_WIDTH = 417;
const DEMO_HEIGHT = 950;

function Quaternion() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth < 768);
      setContainerWidth(window.innerWidth);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const availableWidth = Math.min(containerWidth - 64, DEMO_WIDTH);
  const scale = Math.min(1, availableWidth / DEMO_WIDTH);

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Quaternions and Light Shading</div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: isMobile ? '13px' : '16px', color: colors.muted, lineHeight: '1.8' }}>Expanded my 3D graphics skills with a WebGL trackball rotation system, real-time lighting controls, and full material-light interaction using Phong shading. I built a quaternion-based camera rotation, added adjustable sliders for ambient, diffuse, specular, shininess, and light position, and implemented a full teapot model with dynamic uniform updates.</div>
        </div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Controls</div>
          <div style={{ fontFamily: fonts.mono, fontSize: isMobile ? '11px' : '13px', color: colors.muted, lineHeight: '2' }}>
            <div>- Left-click and drag to rotate the teapot</div>
            <div>- Sliders adjust light position and material properties</div>
            <div>- Click Reset to restore defaults</div>
            <div>- Full Phong shading: ambient, diffuse, specular, shininess</div>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/opengl-and-webgl/tree/main/quaternion_and_shaders" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Demo</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: `${DEMO_WIDTH * scale}px`, height: `${DEMO_HEIGHT * scale}px`, overflow: 'hidden', borderRadius: '12px' }}>
              <iframe src={process.env.PUBLIC_URL + "/files/quaternion.html"} title="Quaternion Demo" scrolling="no"
                style={{ width: `${DEMO_WIDTH}px`, height: `${DEMO_HEIGHT}px`, border: 'none', borderRadius: '12px', transform: `scale(${scale})`, transformOrigin: 'top left' }} />
            </div>
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Quaternion;