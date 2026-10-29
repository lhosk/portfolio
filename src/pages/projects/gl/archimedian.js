import React from "react";
import GlDemo from "./GlDemo";

function Archimedian() {
  return (
    <GlDemo title="Archimedean Spiral" file="archimedian.html" width={550} height={620}
      github="https://github.com/lhosk/opengl-and-webgl/tree/main/archimedian-spiral"
      overview="Taught me the math behind generating an Archimedean spiral by stepping through angles and radii. I also attached rotating squares to each point of the spiral to visualize how the curve grows as it turns. Helped me get comfortable combining geometry, animation loops, and transformations. The spiral must be generated before the squares & refresh the browser to reset." />
  );
}
export default Archimedian;
