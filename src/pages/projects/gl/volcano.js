import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../../components/styles";

const DEMO_WIDTH = 550;
const DEMO_HEIGHT = 620;

function Volcano() {
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
        <div style={style_section_title}>Volcano</div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: isMobile ? '13px' : '16px', color: colors.muted, lineHeight: '1.8' }}>A particle physics simulation that got me comfortable mixing physics with WebGL. I experimented with spawning particles at random intervals, removing them over time, and adjusting velocity, spread, and particle lifetime. Simple project but it taught me a lot about how visual effects are built from tiny moving pieces. Use the button to start and stop the simulation.</div>
        </div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/opengl-and-webgl/tree/main/volcano" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ ...style_cert_item, padding: isMobile ? '18px' : '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Demo</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: `${DEMO_WIDTH * scale}px`, height: `${DEMO_HEIGHT * scale}px`, overflow: 'hidden', borderRadius: '12px' }}>
              <iframe src={process.env.PUBLIC_URL + "/files/volcano.html"} title="Volcano Demo" scrolling="no"
                style={{ width: `${DEMO_WIDTH}px`, height: `${DEMO_HEIGHT}px`, border: 'none', borderRadius: '12px', transform: `scale(${scale})`, transformOrigin: 'top left' }} />
            </div>
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Volcano;