import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";
import rl1 from "../../assets/videos/rl1.mp4";
import rl2 from "../../assets/videos/rl2.mp4";

function Rl() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Reinforcement Learning</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · Stable-Baselines3 · A2C · Atari Learning Environment · Reinforcement Learning · Policy Gradients</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>RL agents trained on classic Atari games using the Advantage Actor-Critic algorithm from Stable-Baselines3. My first step into reinforcement learning and policy-based optimization.</p>
            <p style={{ marginBottom: '12px' }}>Training used 12 parallel instances to accelerate learning through batch updates and increased exploration diversity. Pong required about 2.5 million steps to hit human-level performance. Freeway converged in only 100,000 steps due to its simpler state-action mapping.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Videos</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <video src={rl1} controls style={{ width: '100%', maxWidth: '700px', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
            <video src={rl2} controls style={{ width: '100%', maxWidth: '700px', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/Intro-To-AI/tree/main/Reinforcement-Learning" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Rl;
