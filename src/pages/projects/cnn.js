import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";

function Cnn() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>CNN: Cats and Dogs Classifier</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · TensorFlow · CNN Architecture · Image Classification · Data Augmentation · Transfer Learning</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>This project implements a deep learning model to classify images of cats and dogs using a Convolutional Neural Network. It was designed to explore the fundamentals of computer vision and convolutional architectures for binary image classification tasks.</p>
            <p style={{ marginBottom: '12px' }}>The model was trained on a labeled dataset that was resized and normalized to improve performance. A custom architecture was built using multiple convolutional, max-pooling, and fully connected layers.</p>
            <p style={{ marginBottom: '12px' }}>Data augmentation techniques such as random flipping, rotation, and brightness adjustment were applied to reduce overfitting and improve generalization. The model achieved high validation accuracy and visualization tools were used to analyze feature activations across epochs.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/machine-learning/blob/main/dogs_vs_cats_CNN/dogs_vs_cats_CNN.ipynb" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Cnn;
