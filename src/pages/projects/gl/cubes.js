import React from "react";
import GlDemo from "./GlDemo";

function Cubes() {
  return (
    <GlDemo title="Indexing Moving Cubes" file="cubes.html" width={550} height={620}
      github="https://github.com/lhosk/opengl-and-webgl/tree/main/exploding_cubes"
      overview="This program was a big step up! It shows transformations in 3D space and updating cubes using matrix operations for translation, rotation, and scaling. Each cube fires off in a different direction along the x, y, and z axes. This was the first time WebGL really clicked for me in terms of how 3D graphics pipelines actually work." />
  );
}
export default Cubes;
