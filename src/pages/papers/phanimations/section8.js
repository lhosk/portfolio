import { GLCanvas } from "./helpers";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   § 8  Uncertainty Principle

   Two panels:
   Left:  ψ(x) position space — Gaussian with width σ
   Right: φ(p) momentum space — Gaussian with width 1/σ

   σ oscillates: narrow x = wide p, wide x = narrow p
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const UNCERTAINTY_FS = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_res;

const vec3 ACCENT = vec3(1.0, 0.31, 0.0);
const vec3 BLUE   = vec3(0.2, 0.6, 1.0);
const vec3 GREEN  = vec3(0.2, 0.8, 0.4);
const vec3 GRAY   = vec3(0.45);

void main() {
  float aspect = u_res.x / u_res.y;

  /* oscillating width parameter */
  float sigma = 0.18 + 0.22 * (0.5 + 0.5 * sin(u_time * 0.8));

  /* split into left and right panels */
  float isRight = step(0.5, v_uv.x);
  float localUvX = isRight > 0.5 ? (v_uv.x - 0.5) * 2.0 : v_uv.x * 2.0;
  vec2 p = vec2((localUvX - 0.5) * 2.5, (v_uv.y - 0.15) * 1.2);

  vec3 col = vec3(0.055, 0.055, 0.06);

  /* divider */
  float divider = smoothstep(0.004, 0.001, abs(v_uv.x - 0.5));
  col += GRAY * 0.3 * divider;

  if (isRight < 0.5) {
    /* ── LEFT: position space ψ(x) ── */
    float gauss = exp(-p.x * p.x / (2.0 * sigma * sigma));
    float y = gauss * 0.75;
    float curve = smoothstep(0.014, 0.004, abs(p.y - y));
    col += BLUE * 0.7 * curve;

    /* fill */
    float fill = step(0.0, p.y) * step(p.y, y);
    col += BLUE * 0.08 * fill;

    /* Δx markers */
    float dash = step(0.5, fract(p.y * 8.0));
    float range = step(-0.05, p.y) * step(p.y, 0.8);
    col += ACCENT * 0.35 * smoothstep(0.007, 0.002, abs(p.x + sigma)) * dash * range;
    col += ACCENT * 0.35 * smoothstep(0.007, 0.002, abs(p.x - sigma)) * dash * range;

    /* axis */
    col += GRAY * 0.2 * smoothstep(0.005, 0.002, abs(p.y));

  } else {
    /* ── RIGHT: momentum space φ(p) ── */
    float sigmaP = 1.0 / (2.0 * sigma);
    float gaussP = exp(-p.x * p.x / (2.0 * sigmaP * sigmaP));
    float y = gaussP * 0.75;
    float curve = smoothstep(0.014, 0.004, abs(p.y - y));
    col += GREEN * 0.7 * curve;

    /* fill */
    float fill = step(0.0, p.y) * step(p.y, y);
    col += GREEN * 0.08 * fill;

    /* Δp markers */
    float dash = step(0.5, fract(p.y * 8.0));
    float range = step(-0.05, p.y) * step(p.y, 0.8);
    col += ACCENT * 0.35 * smoothstep(0.007, 0.002, abs(p.x + sigmaP)) * dash * range;
    col += ACCENT * 0.35 * smoothstep(0.007, 0.002, abs(p.x - sigmaP)) * dash * range;

    /* axis */
    col += GRAY * 0.2 * smoothstep(0.005, 0.002, abs(p.y));
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

export function UncertaintyAnimation() {
  return <GLCanvas fragmentShader={UNCERTAINTY_FS} aspect={2.5} />;
}