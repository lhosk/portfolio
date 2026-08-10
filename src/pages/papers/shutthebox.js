import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import shuthteboxpdf from "../../assets/papers/shutthebox.pdf"
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";

function ShutTheBox() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Optimal Strategy in Shut The Box</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · Dynamic Programming · Monte Carlo Simulation · Game Theory</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>This is one of the first papers I made outside of school. I started doing these because they were short, fun, and kept my coding, math, and physics skills up.</p>
            <p style={{ marginBottom: '12px' }}>The point of this paper is to determine the correct way to play the game <i>Shut The Box</i>.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/shut-the-box" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Paper</div>
          {isMobile ? (
            <a href={shuthteboxpdf} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', padding: '10px 12px', borderRadius: '12px', textAlign: 'center', fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, border: `0.5px solid ${colors.border}`, textDecoration: 'none' }}>
              Open paper PDF ↗
            </a>
          ) : (
            <iframe
              src={shuthteboxpdf}
              title="Optimal Strategy in Shut The Box"
              style={{ width: '100%', height: '800px', border: 'none', borderRadius: '8px', background: '#fff'}}
            />
          )}
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}

export default ShutTheBox;