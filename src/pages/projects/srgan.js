import React from "react";
import DetailPage, { Card, Prose, Figure, FigureGrid } from "../../components/DetailPage";
import { colors, fonts } from "../../components/styles";
import srgan1 from "../../assets/images/srgan1.png";
import srgan2 from "../../assets/images/srgan2.png";
import srgan3 from "../../assets/images/srgan3.png";
import srgan4 from "../../assets/images/srgan4.png";

const results = [
  ['Model A', 'Real 128x128', '0.9571', '0.9571', '0.9922'],
  ['Model B', 'SRGAN 128x128', '0.8113', '0.7680', '0.9745'],
];

function Srgan() {
  const cell = { padding: '6px 10px', textAlign: 'left', whiteSpace: 'nowrap' };
  return (
    <DetailPage title="Super Resolution GAN"
      stack="Python · TensorFlow · GANs · SRGAN · CNN · Image Super-Resolution · Transfer Learning · Deep Learning"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/srgan/tree/main" }]}>
      <Card label="Overview">
        <Prose>
          <p>A full SRGAN designed to reconstruct high-resolution 128x128 images from low-resolution 32x32 inputs, and evaluate how super-resolved data affects classification accuracy in a binary cats-vs-dogs problem. Trained on a Google Colab A100 GPU using 24,000+ images.</p>
          <p>Three models trained in sequence: Model A (baseline CNN on real 128x128 images), SRGAN (generator-discriminator network that upscales 32x32 to 128x128), and Model B (CNN retrained on SRGAN-generated images for direct comparison).</p>
          <p>Model B achieved lower accuracy than Model A but retained strong performance, validating that SRGAN-enhanced data can be effective when higher-resolution images are unavailable.</p>
        </Prose>
      </Card>
      <Card label="Performance (Threshold 0.95)">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: fonts.mono, fontSize: '12.5px', fontVariantNumeric: 'tabular-nums' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${colors.borderStrong}` }}>
                {['Model', 'Training Data', 'Accuracy', 'F1 Score', 'AUC'].map((h) => (
                  <th key={h} style={{ ...cell, color: colors.accentInk, fontWeight: 500, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, r) => (
                <tr key={row[0]} style={{ borderBottom: r < results.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
                  {row.map((v, i) => <td key={i} style={{ ...cell, color: i === 0 ? colors.text : colors.muted, fontWeight: i === 0 ? 500 : 400 }}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card label="Outputs">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <FigureGrid>
            <Figure src={srgan1} alt="Model A accuracy" caption="Model A accuracy" />
            <Figure src={srgan2} alt="Model B accuracy" caption="Model B accuracy" />
          </FigureGrid>
          <Figure src={srgan3} alt="SRGAN training loss over 150 epochs" caption="SRGAN training loss over 150 epochs" />
          <Figure src={srgan4} alt="Low-res input vs SRGAN output vs ground truth" caption="Low-res input vs SRGAN output vs ground truth" />
        </div>
      </Card>
    </DetailPage>
  );
}
export default Srgan;
