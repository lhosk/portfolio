import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";
import rlgl from "../../assets/images/rlgl.png";

function Rlgl() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Red Light Green Light</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Arduino · C++ · Embedded Systems · Game Logic · Hardware Interfacing · Sensor Input · Sound Control</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>Recreates the classic Red Light Green Light game using an Arduino-based embedded system. Built for Physical Computing, focused on user interaction, timing control, and feedback through LEDs and sound.</p>
            <p style={{ marginBottom: '12px' }}>A potentiometer selects difficulty (25 clicks on Easy, 50 on Medium, higher on Hard). The LED sequence alternates between red, yellow, and green. Player timing is monitored through button inputs and feedback is provided via the digital display, light patterns, and a piezo buzzer.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Photo</div>
          <img src={rlgl} alt="Red Light Green Light Setup" style={{ width: '100%', maxWidth: '700px', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/Physical-Computing/blob/main/code_red_light_green_light.ino" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Rlgl;
