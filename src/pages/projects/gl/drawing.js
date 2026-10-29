import React from "react";
import GlDemo from "./GlDemo";

function Drawing() {
  return (
    <GlDemo title="Drawing Dots" file="drawing.html" width={550} height={620}
      github="https://github.com/lhosk/opengl-and-webgl/tree/main/drawing-app"
      overview="My second WebGL project. A canvas where you can draw dots at random positions with random colors every frame. Also includes erasing and deleting dots. This helped me understand how to manipulate pixels directly in WebGL." />
  );
}
export default Drawing;
