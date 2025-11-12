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
import srgan1 from "../../assets/images/srgan1.png";
import srgan2 from "../../assets/images/srgan2.png";
import srgan3 from "../../assets/images/srgan3.png";
import srgan4 from "../../assets/images/srgan4.png";

function Srgan() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    const imageStyle = {
        maxWidth: "700px",
        width: "90%",
        borderRadius: "15px",
        border: "2px solid white",
        margin: "1.5rem 0 3rem 0",
        boxShadow: "0 0 15px rgba(255,255,255,0.08)"
    };

    const captionStyle = {
        fontSize: "1rem",
        color: "rgba(255,255,255,0.7)",
        marginBottom: "0.5rem",
        fontStyle: "italic"
    };

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>SR - Generative Adversarial Network</div>

            {/* Main Description */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            Python, TensorFlow, GANs, SRGAN, CNN, Image Super-Resolution, 
                            Transfer Learning, Deep Learning, Image Classification
                        </strong>
                    </p>
                    <p>
                        This project implements a full Super-Resolution Generative Adversarial Network (SRGAN)
                        designed to reconstruct high-resolution (128×128) images from low-resolution (32×32) inputs and evaluate 
                        how super-resolved data affects classification accuracy in a binary cats-vs-dogs problem. 
                        It was developed and trained on a Google Colab A100 GPU using over 24,000 total images 
                        from the <a href="https://www.kaggle.com/datasets/karakaggle/kaggle-cat-vs-dog-dataset" target="_blank" rel="noopener noreferrer" style={style_hyperlink}>Kaggle Cat vs Dog Dataset</a>.
                    </p>
                    <p>
                        The system consists of three models trained in sequence:
                    </p>
                    <ul style={{ lineHeight: "1.8rem" }}>
                        <li>Model A — A baseline CNN classifier trained on real 128×128 images.</li>
                        <li>SRGAN — A generator–discriminator network that learns to upscale 32×32 inputs into 128×128 outputs using perceptual and adversarial loss functions.</li>
                        <li>Model B — A retrained CNN classifier that uses the SRGAN-generated images as its training data, allowing direct performance comparison with Model A.</li>
                    </ul>
                    <p>
                        The SRGAN combines a generator with residual and upsampling blocks and a discriminator built as a PatchGAN-style CNN. 
                        Both are trained adversarially using VGG-based perceptual loss, mean squared error loss, and binary cross-entropy. 
                        Training ran for 150 epochs with a learning rate of 1e-4 and Adam optimizer.
                    </p>
                    <p>
                        Once trained, the generator created high-resolution images that were visually and structurally consistent with the original dataset. 
                        Model B achieved lower accuracy than Model A but retained strong performance, validating that SRGAN-enhanced data 
                        can be used effectively when higher-resolution images are unavailable.
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/srgan/tree/main"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                </div>
            </div>

            {/* Images with Context */}
            <div style={{ textAlign: "center", marginTop: "2rem", paddingBottom: "2rem" }}>
                <p style={captionStyle}>Model A — CNN classifier trained on real 128×128 images</p>
                <img src={srgan1} alt="Model A Accuracy Plot" style={imageStyle} />

                <p style={captionStyle}>Model B — CNN retrained using SRGAN-generated images</p>
                <img src={srgan2} alt="Model B Accuracy Plot" style={imageStyle} />

                <p style={captionStyle}>SRGAN training — generator and discriminator loss over 150 epochs</p>
                <img src={srgan3} alt="SRGAN Loss Plot" style={imageStyle} />

                <p style={captionStyle}>SRGAN output comparison — low-res input, SRGAN reconstruction, and ground truth</p>
                <img src={srgan4} alt="SRGAN Image Comparison" style={imageStyle} />
            </div>

            {/* Performance Summary */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p><strong>Performance Comparison (Threshold = 0.95)</strong></p>
                    <table style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "0.5rem",
                        fontSize: "1.05rem",
                        textAlign: "center",
                        color: "white"
                    }}>
                        <thead>
                            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.3)" }}>
                                <th style={{ padding: "0.5rem" }}>Model</th>
                                <th style={{ padding: "0.5rem" }}>Training Data</th>
                                <th style={{ padding: "0.5rem" }}>Accuracy</th>
                                <th style={{ padding: "0.5rem" }}>F1 Score</th>
                                <th style={{ padding: "0.5rem" }}>AUC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                                <td style={{ padding: "0.5rem" }}>Model A</td>
                                <td style={{ padding: "0.5rem" }}>Real 128×128</td>
                                <td style={{ padding: "0.5rem" }}>0.9571</td>
                                <td style={{ padding: "0.5rem" }}>0.9571</td>
                                <td style={{ padding: "0.5rem" }}>0.9922</td>
                            </tr>
                            <tr>
                                <td style={{ padding: "0.5rem" }}>Model B</td>
                                <td style={{ padding: "0.5rem" }}>SRGAN 128×128</td>
                                <td style={{ padding: "0.5rem" }}>0.8113</td>
                                <td style={{ padding: "0.5rem" }}>0.7680</td>
                                <td style={{ padding: "0.5rem" }}>0.9745</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default Srgan;
