import { useRef, useEffect } from "react";

/* ─── WebGL helpers ─── */
export function compileShader(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export function linkProgram(gl, vs, fs) {
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(prog));
    return null;
  }
  return prog;
}

export const QUAD_VS = `
  attribute vec2 a_pos;
  varying vec2 v_uv;
  void main() {
    v_uv = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;

/* ─── Reusable WebGL canvas ─── */
export function GLCanvas({ fragmentShader, aspect = 2.5, style = {} }) {
  const containerRef = useRef(null);
  const canvasRef    = useRef(null);

  useEffect(() => {
    const canvas    = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr  = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    canvas.width  = rect.width * dpr;
    canvas.height = (rect.width / aspect) * dpr;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vs   = compileShader(gl, gl.VERTEX_SHADER,  QUAD_VS);
    const fs   = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vs || !fs) return;
    const prog = linkProgram(gl, vs, fs);
    if (!prog) return;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const aPos  = gl.getAttribLocation(prog, "a_pos");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes  = gl.getUniformLocation(prog, "u_res");

    gl.useProgram(prog);
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    let raf;
    const t0 = performance.now();
    function render() {
      const t = (performance.now() - t0) / 1000.0;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    }
    render();
    return () => cancelAnimationFrame(raf);
  }, [fragmentShader, aspect]);

  return (
    <div ref={containerRef} style={{ width: "100%", position: "relative", aspectRatio: `${aspect} / 1`, ...style }}>
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "8px", display: "block" }} />
    </div>
  );
}