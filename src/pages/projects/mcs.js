import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";
import mcsImage from "../../assets/images/mcs.png";

function Mcs() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Monte Carlo Simulation: Circles and Spheres</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>MATLAB · Computational Physics · Geometry Visualization · 3D Plotting · Statistical Estimation · Numerical Methods</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>My first coding project, built for a computational physics course in MATLAB. The goal was to estimate the area of a circle using a Monte Carlo simulation.</p>
            <p style={{ marginBottom: '12px' }}>I expanded the model to handle multiple circles and incorporated holes, enabling calculations of areas like (area of circles minus area of holes). Then extended it to three dimensions to model spheres, spherical holes, and eventually elliptical geometries.</p>
            <p style={{ marginBottom: '12px' }}>The pink region in the output represents the measured sphere, and the black region represents a spherical hole.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Output</div>
          <img src={mcsImage} alt="Monte Carlo Simulation Output" style={{ width: '100%', maxWidth: '700px', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Mcs;
