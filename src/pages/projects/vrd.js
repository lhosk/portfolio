import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";
import vrd1 from "../../assets/images/vrd1.png";

function Vrd() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Virtual Retinal Display</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · LightTools · Fusion 360 · Optical Simulation · Laser Intensity Modeling · CIE Color Mapping</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>Final research and design project for an Optical Systems Design course. Developed a Virtual Retinal Display prototype — a system that projects light directly onto the human retina to create high-resolution images without a physical screen.</p>
            <p style={{ marginBottom: '12px' }}>The optical path was modeled in LightTools while the anatomical structure of the eye was designed in Fusion 360. A custom Python script models the scanning behavior of RGB lasers and calculates power distribution across wavelengths corresponding to human visual perception.</p>
            <p style={{ marginBottom: '12px' }}>Three lasers (red, green, blue) normalized by photopic sensitivity curves, with total output power kept below 1 mW for safety. Mirrors, lenses, and beam splitters direct and attenuate the beams to maintain color accuracy while optimizing brightness and safety.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Diagram</div>
          <img src={vrd1} alt="VRD Diagram" style={{ width: '100%', maxWidth: '700px', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://github.com/lhosk/Virtual-Retinal-Display" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
            <a href="https://drive.google.com/file/d/1BuR9d79Ee25qUjlR7Gobtb5KOs4Y-sKy/view?usp=sharing" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View Presentation ↗</a>
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Vrd;
