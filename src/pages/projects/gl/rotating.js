import React from "react";
import GlDemo from "./GlDemo";

function Rotating() {
  return (
    <GlDemo title="Rotating Squares" file="rotating.html" width={550} height={620}
      github="https://github.com/lhosk/opengl-and-webgl/tree/main/rotating-squares"
      overview="My first WebGL project. A rotating square that circles around another rotating square. Super basic, but it introduced me to the fundamentals of WebGL programming." />
  );
}
export default Rotating;
