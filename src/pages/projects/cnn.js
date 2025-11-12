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

function Cnn() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>CNN: Cats & Dogs Classifier</div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            Python, TensorFlow, Convolutional Neural Networks (CNN), 
                            Image Classification, Data Augmentation, Transfer Learning
                        </strong>
                    </p>
                    <p>
                        This project implements a deep learning model to classify 
                        images of cats and dogs using a Convolutional Neural Network (CNN). 
                        It was designed to explore the fundamentals of computer vision 
                        and convolutional architectures for binary image classification tasks.
                    </p>
                    <p>
                        The model was trained on a dataset of labeled cat and dog images 
                        that were resized and normalized to improve performance. 
                        A custom architecture was created using multiple convolutional, 
                        max-pooling, and fully connected layers.
                    </p>
                    <p>
                        Data augmentation techniques such as random flipping, rotation, 
                        and brightness adjustment were applied to reduce overfitting 
                        and improve the network’s generalization ability.
                    </p>
                    <p>
                        The trained model achieved high validation accuracy and 
                        demonstrated robust performance on unseen data. 
                        Visualization tools were also used to analyze feature 
                        activations and layer performance across epochs.
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/machine-learning/blob/main/dogs_vs_cats_CNN/dogs_vs_cats_CNN.ipynb"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                </div>
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default Cnn;
