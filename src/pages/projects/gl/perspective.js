import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../../components/styles";

const DEMO_WIDTH = 550;
const DEMO_HEIGHT = 800;

function Perspective() {
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
        <div style={style_section_title}>Perspective of a Pot</div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: isMobile ? '13px' : '16px', color: colors.muted, lineHeight: '1.8' }}>Introduced me to controlling a full perspective camera in WebGL. I had to handle near and far clipping planes and scale the x and y axes correctly to keep the pot looking realistic as it rotated. Really helped me understand how perspective projection works and how 3D scenes are mapped onto a 2D screen.</div>
        </div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Controls</div>
          <div style={{ fontFamily: fonts.mono, fontSize: isMobile ? '11px' : '13px', color: colors.muted, lineHeight: '2' }}>
            <div>- Four sliders at the bottom change clipping and scaling</div>
            <div>- Hold left mouse button to move x and y viewing</div>
            <div>- Middle mouse button to move z viewing</div>
            <div>- Click canvas then press R to reset view</div>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/opengl-and-webgl/tree/main/perspective" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Demo</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: `${DEMO_WIDTH * scale}px`, height: `${DEMO_HEIGHT * scale}px`, overflow: 'hidden', borderRadius: '12px' }}>
              <iframe src={process.env.PUBLIC_URL + "/files/perspective.html"} title="Perspective Demo" scrolling="no"
                style={{ width: `${DEMO_WIDTH}px`, height: `${DEMO_HEIGHT}px`, border: 'none', borderRadius: '12px', transform: `scale(${scale})`, transformOrigin: 'top left' }} />
            </div>
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Perspective;