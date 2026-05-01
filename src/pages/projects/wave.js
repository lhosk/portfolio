import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";

function Wave() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Wave Perturbation Simulation</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · Computational Physics · Wave Packet Propagation · Fourier Analysis · Numerical Simulation · Scientific Visualization</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>Investigates the time-dependent evolution of a one-dimensional wave packet under a localized potential perturbation. The goal is to study how spatial disturbances modify wave propagation, phase evolution, and spectral content relative to an unperturbed baseline.</p>
            <p style={{ marginBottom: '12px' }}>The simulation numerically solves a Schrodinger-type wave equation using finite-difference time stepping combined with FFT-based spectral analysis. An initial Gaussian wave packet is propagated through both free space and a perturbed potential for direct comparison of arrival times, dispersion behavior, and momentum-space structure.</p>
            <p style={{ marginBottom: '12px' }}>The momentum-space amplitude function A(k) is extracted via Fourier transforms. Changes in phase, group velocity, and spectral distortion are tracked to isolate the physical impact of the localized potential.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://github.com/lhosk/wave-packet-perturbation" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
            <a href="https://github.com/lhosk/wave-packet-perturbation/blob/main/wave_pertubation_problem.pdf" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View Technical Problem Solution (PDF) ↗</a>
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Wave;
