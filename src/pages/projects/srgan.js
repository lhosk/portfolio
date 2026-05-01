import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";
import srgan1 from "../../assets/images/srgan1.png";
import srgan2 from "../../assets/images/srgan2.png";
import srgan3 from "../../assets/images/srgan3.png";
import srgan4 from "../../assets/images/srgan4.png";

function Srgan() {
  const imgStyle = { width: '100%', maxWidth: '700px', borderRadius: '12px' };
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Super Resolution GAN</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · TensorFlow · GANs · SRGAN · CNN · Image Super-Resolution · Transfer Learning · Deep Learning</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>A full SRGAN designed to reconstruct high-resolution 128x128 images from low-resolution 32x32 inputs, and evaluate how super-resolved data affects classification accuracy in a binary cats-vs-dogs problem. Trained on a Google Colab A100 GPU using 24,000+ images.</p>
            <p style={{ marginBottom: '12px' }}>Three models trained in sequence: Model A (baseline CNN on real 128x128 images), SRGAN (generator-discriminator network that upscales 32x32 to 128x128), and Model B (CNN retrained on SRGAN-generated images for direct comparison).</p>
            <p style={{ marginBottom: '12px' }}>Model B achieved lower accuracy than Model A but retained strong performance, validating that SRGAN-enhanced data can be effective when higher-resolution images are unavailable.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Performance (Threshold 0.95)</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: fonts.mono, fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${colors.border}` }}>
                {['Model', 'Training Data', 'Accuracy', 'F1 Score', 'AUC'].map(h => <th key={h} style={{ padding: '8px', textAlign: 'left', color: colors.accent }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `0.5px solid ${colors.border}` }}>
                {['Model A', 'Real 128x128', '0.9571', '0.9571', '0.9922'].map((v,i) => <td key={i} style={{ padding: '8px', color: colors.muted }}>{v}</td>)}
              </tr>
              <tr>
                {['Model B', 'SRGAN 128x128', '0.8113', '0.7680', '0.9745'].map((v,i) => <td key={i} style={{ padding: '8px', color: colors.muted }}>{v}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Outputs</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>Model A accuracy</div><img src={srgan1} alt="Model A" style={imgStyle} /></div>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>Model B accuracy</div><img src={srgan2} alt="Model B" style={imgStyle} /></div>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>SRGAN training loss over 150 epochs</div><img src={srgan3} alt="SRGAN loss" style={imgStyle} /></div>
            <div><div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px' }}>Low-res input vs SRGAN output vs ground truth</div><img src={srgan4} alt="SRGAN comparison" style={imgStyle} /></div>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/srgan/tree/main" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Srgan;
