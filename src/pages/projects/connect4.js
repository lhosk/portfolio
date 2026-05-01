import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";

function Connect4() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Connect 4: Minimax and Alpha-Beta Pruning</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · Pygame · Minimax Algorithm · Alpha-Beta Pruning · Adversarial Search · Game AI · OOP</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>A two-player Connect Four game with interactive visuals, user-selectable AI modes, and real-time logging. The user can choose between Minimax and Alpha-Beta Pruning AIs and decide who plays first. The system records all moves, time per decision, and total nodes searched.</p>
            <p style={{ marginBottom: '12px' }}>The Minimax agent can occasionally be beaten, but the Alpha-Beta Pruning version stays challenging and efficient.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Structure</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted, lineHeight: '2' }}>
            <div>interface.py — Game visuals and UI</div>
            <div>main.py — Main game loop and win condition logic</div>
            <div>solver.py — AI implementations (Minimax and Alpha-Beta)</div>
            <div>textlog.py — Move history and performance metrics</div>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/Intro-To-AI/tree/main/Connect-Four-Minimax-And-AB-Pruning" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Connect4;
