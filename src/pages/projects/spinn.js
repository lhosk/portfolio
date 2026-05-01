import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";
import img6 from "../../assets/images/6.png";
import img14 from "../../assets/images/14.png";
import imgComparing from "../../assets/images/comparing.png";
import imgPinn from "../../assets/images/pinn.png";
import imgStochasticPeriod from "../../assets/images/stochastic_period.png";
import imgStochasticWaveHeight from "../../assets/images/stochastic_waveheight.png";

function Spinn() {
  const imgStyle = { width: '100%', maxWidth: '700px', borderRadius: '12px' };
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Stochastic Physics Informed Neural Network</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · PyTorch · PINNs · RNNs · Stochastic Modeling · Ocean Wave Physics · Time-Series Forecasting · AWS SageMaker</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>Investigates Physics-Informed Neural Networks and Stochastic PINNs for long-horizon ocean wave forecasting. The core idea is to embed known physical constraints directly into neural network training, rather than relying purely on data-driven models.</p>
            <p style={{ marginBottom: '12px' }}>By incorporating stochastic elements into the physics loss and initial conditions, the model captures uncertainty in the underlying dynamics and produces more physically meaningful predictions. The model predicts wave height 3 days into the future using NDBC buoy data off the coast of Wilmington, NC.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Results</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>10 year data — 6 features</div><img src={img6} alt="6 features" style={imgStyle} /></div>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>10 year data — 14 features</div><img src={img14} alt="14 features" style={imgStyle} /></div>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>Days vs Years models</div><img src={imgComparing} alt="Comparing" style={imgStyle} /></div>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>PINN vs Baseline RNN vs True Data</div><img src={imgPinn} alt="PINN results" style={imgStyle} /></div>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>Stochastic model — wave period prediction</div><img src={imgStochasticPeriod} alt="Wave period" style={imgStyle} /></div>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>Stochastic model — wave height prediction</div><img src={imgStochasticWaveHeight} alt="Wave height" style={imgStyle} /></div>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/stochastic-pinn" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Spinn;
