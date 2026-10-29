import React from "react";
import GlDemo from "./GlDemo";

function Volcano() {
  return (
    <GlDemo title="Volcano" file="volcano.html" width={550} height={620}
      github="https://github.com/lhosk/opengl-and-webgl/tree/main/volcano"
      overview="A particle physics simulation that got me comfortable mixing physics with WebGL. I experimented with spawning particles at random intervals, removing them over time, and adjusting velocity, spread, and particle lifetime. Simple project but it taught me a lot about how visual effects are built from tiny moving pieces. Use the button to start and stop the simulation." />
  );
}
export default Volcano;
