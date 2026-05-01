import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";
import detection1 from "../../assets/videos/detection1.mp4";

function Detection() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Real-Time Object Detection</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · PyTorch · YOLOv8 · Faster R-CNN · Computer Vision · Real-Time Inference</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>A real-time object detection pipeline using YOLOv8 and Faster R-CNN for live video stream analysis, object localization, and multi-class recognition.</p>
            <p style={{ marginBottom: '12px' }}>The workflow involved dataset preprocessing, converting between OpenImages, COCO, and YOLO formats, and training detection models using GPU acceleration. Bounding box visualizations and performance overlays were implemented to evaluate precision, recall, and frame-by-frame accuracy in real-time.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Demo</div>
          <video src={detection1} controls style={{ width: '100%', maxWidth: '700px', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/object-detection/blob/main/object_detection.ipynb" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Detection;
