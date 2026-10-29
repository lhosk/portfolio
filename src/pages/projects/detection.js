import React from "react";
import DetailPage, { Card, Prose, Video } from "../../components/DetailPage";
import detection1 from "../../assets/videos/detection1.mp4";

function Detection() {
  return (
    <DetailPage title="Real-Time Object Detection"
      stack="Python · PyTorch · YOLOv8 · Faster R-CNN · Computer Vision · Real-Time Inference"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/object-detection/blob/main/object_detection.ipynb" }]}>
      <Card label="Overview">
        <Prose>
          <p>A real-time object detection pipeline using YOLOv8 and Faster R-CNN for live video stream analysis, object localization, and multi-class recognition.</p>
          <p>The workflow involved dataset preprocessing, converting between OpenImages, COCO, and YOLO formats, and training detection models using GPU acceleration. Bounding box visualizations and performance overlays were implemented to evaluate precision, recall, and frame-by-frame accuracy in real-time.</p>
        </Prose>
      </Card>
      <Card label="Demo">
        <Video src={detection1} />
      </Card>
    </DetailPage>
  );
}
export default Detection;
