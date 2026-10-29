import React from "react";
import DetailPage, { Card, Prose } from "../../components/DetailPage";

function Cnn() {
  return (
    <DetailPage title="CNN: Cats and Dogs Classifier"
      stack="Python · TensorFlow · CNN Architecture · Image Classification · Data Augmentation · Transfer Learning"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/machine-learning/blob/main/dogs_vs_cats_CNN/dogs_vs_cats_CNN.ipynb" }]}>
      <Card label="Overview">
        <Prose>
          <p>This project implements a deep learning model to classify images of cats and dogs using a Convolutional Neural Network. It was designed to explore the fundamentals of computer vision and convolutional architectures for binary image classification tasks.</p>
          <p>The model was trained on a labeled dataset that was resized and normalized to improve performance. A custom architecture was built using multiple convolutional, max-pooling, and fully connected layers.</p>
          <p>Data augmentation techniques such as random flipping, rotation, and brightness adjustment were applied to reduce overfitting and improve generalization. The model achieved high validation accuracy and visualization tools were used to analyze feature activations across epochs.</p>
        </Prose>
      </Card>
    </DetailPage>
  );
}
export default Cnn;
