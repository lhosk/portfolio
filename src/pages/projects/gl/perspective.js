import React from "react";
import GlDemo from "./GlDemo";

function Perspective() {
  return (
    <GlDemo title="Perspective of a Pot" file="perspective.html" width={550} height={800}
      github="https://github.com/lhosk/opengl-and-webgl/tree/main/perspective"
      overview="Introduced me to controlling a full perspective camera in WebGL. I had to handle near and far clipping planes and scale the x and y axes correctly to keep the pot looking realistic as it rotated. Really helped me understand how perspective projection works and how 3D scenes are mapped onto a 2D screen."
      controls={[
        'Four sliders at the bottom change clipping and scaling',
        'Hold left mouse button to move x and y viewing',
        'Middle mouse button to move z viewing',
        'Click canvas then press R to reset view',
      ]} />
  );
}
export default Perspective;
