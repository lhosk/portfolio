import React from "react";
import GlDemo from "./GlDemo";

function Triangles() {
  return (
    <GlDemo title="Drawing Triangles" file="triangles.html" width={550} height={620}
      github="https://github.com/lhosk/opengl-and-webgl/tree/main/drawing-triangles"
      overview="Introduced me to drawing triangles by manipulating vertex buffers, color buffers, and shader programs. Nearly all 3D models are built from triangles, so this was essential. I learned how to render multiple shapes using indexed vertices and how fragment colors are interpolated across surfaces. Click three points on the canvas to form a triangle and reload to clear." />
  );
}
export default Triangles;
