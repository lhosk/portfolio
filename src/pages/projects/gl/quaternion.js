import React from "react";
import GlDemo from "./GlDemo";

function Quaternion() {
  return (
    <GlDemo title="Quaternions and Light Shading" file="quaternion.html" width={417} height={950}
      github="https://github.com/lhosk/opengl-and-webgl/tree/main/quaternion_and_shaders"
      overview="Expanded my 3D graphics skills with a WebGL trackball rotation system, real-time lighting controls, and full material-light interaction using Phong shading. I built a quaternion-based camera rotation, added adjustable sliders for ambient, diffuse, specular, shininess, and light position, and implemented a full teapot model with dynamic uniform updates."
      controls={[
        'Left-click and drag to rotate the teapot',
        'Sliders adjust light position and material properties',
        'Click Reset to restore defaults',
        'Full Phong shading: ambient, diffuse, specular, shininess',
      ]} />
  );
}
export default Quaternion;
