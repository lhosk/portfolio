import React, { useEffect } from "react";
import NavBar from "../../components/NavBar.js";
import { 
    style_ip_bg, 
    style_ip_title, 
    style_ip_career_section, 
    style_ip_about_text, 
    style_hyperlink 
} from "../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../components/AudioManager.js";
import detection1 from "../../assets/videos/detection1.mp4";

function Detection() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>Real-Time Object Detection</div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            Python, PyTorch, YOLOv8, Faster R-CNN, Computer Vision, 
                            Model Training, Bounding Box Evaluation, Real-Time Inference
                        </strong>
                    </p>
                    <p>
                        This project implements a real-time object detection pipeline
                        using state-of-the-art models such as YOLOv8 and Faster R-CNN. 
                        It focuses on live video stream analysis, object localization, 
                        and multi-class recognition.
                    </p>
                    <p>
                        The workflow involved dataset preprocessing, converting between 
                        OpenImages, COCO, and YOLO formats, and training detection models 
                        using GPU acceleration for optimal performance.
                    </p>
                    <p>
                        Bounding box visualizations and performance overlays were implemented 
                        to evaluate precision, recall, and frame-by-frame detection accuracy 
                        in real-time.
                    </p>
                    <p>
                        The final system demonstrates how deep learning based vision models 
                        can be integrated into dynamic visual environments and interactive 
                        recognition systems.
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/object-detection/blob/main/object_detection.ipynb"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                </div>
            </div>

            {/* Video Demonstration */}
            <div 
                style={{ 
                    textAlign: "center", 
                    marginTop: "2rem", 
                    paddingBottom: "2rem" 
                }}
            >
                <video 
                    src={detection1} 
                    controls 
                    style={{ 
                        width: "90%", 
                        maxWidth: "650px", 
                        borderRadius: "15px", 
                        border: "2px solid white" 
                    }} 
                />
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default Detection;
