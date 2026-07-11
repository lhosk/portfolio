import { GLCanvas } from "./helpers";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   § 6  Eigenfunctions & Eigenvalues
   
   Two panels side by side:
   Left:  eigenfunction (cos(kx)) → p̂ gives same shape
   Right: non-eigenfunction (Gaussian) → p̂ gives different shape
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const EIGEN_FS = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_res;

const vec3 ACCENT = vec3(1.0, 0.31, 0.0);
const vec3 GREEN  = vec3(0.2, 0.8, 0.4);
const vec3 RED    = vec3(1.0, 0.3, 0.3);
const vec3 BLUE   = vec3(0.2, 0.6, 1.0);
const vec3 GRAY   = vec3(0.45);
const float PI = 3.14159265;

void main() {
  float aspect = u_res.x / u_res.y;

  /* split into left and right panels */
  float isRight = step(0.5, v_uv.x);
  float localUvX = isRight > 0.5 ? (v_uv.x - 0.5) * 2.0 : v_uv.x * 2.0;

  vec2 p = vec2((localUvX - 0.5) * 2.2, (v_uv.y - 0.5) * 2.0);

  vec3 col = vec3(0.055, 0.055, 0.06);

  /* divider line */
  float divider = smoothstep(0.004, 0.001, abs(v_uv.x - 0.5));
  col += GRAY * 0.3 * divider;

  /* pulse animation for emphasis */
  float pulse = 0.7 + 0.3 * sin(u_time * 2.0);

  if (isRight < 0.5) {
    /* ── LEFT: eigenfunction case ── */
    /* input: cos(kx) */
    float k = 6.0;
    float inputY = cos(k * p.x) * 0.3;
    float inputCurve = smoothstep(0.014, 0.004, abs((p.y - 0.35) - inputY));
    col += GREEN * 0.7 * inputCurve;

    /* output: p̂ cos(kx) = ℏk sin(kx) — same frequency, same shape family */
    float outputY = sin(k * p.x) * 0.3;
    float outputCurve = smoothstep(0.014, 0.004, abs((p.y + 0.35) - outputY));
    col += GREEN * 0.5 * pulse * outputCurve;

    /* axes */
    col += GRAY * 0.2 * smoothstep(0.005, 0.002, abs(p.y - 0.35));
    col += GRAY * 0.2 * smoothstep(0.005, 0.002, abs(p.y + 0.35));

  } else {
    /* ── RIGHT: non-eigenfunction case ── */
    /* input: Gaussian */
    float gauss = exp(-p.x * p.x / 0.3);
    float inputY = gauss * 0.35;
    float inputCurve = smoothstep(0.014, 0.004, abs((p.y - 0.35) - inputY));
    col += BLUE * 0.7 * inputCurve;

    /* output: p̂ Gaussian = x · Gaussian (different shape!) */
    float outputY = p.x * gauss * 0.5;
    float outputCurve = smoothstep(0.014, 0.004, abs((p.y + 0.35) - outputY));
    col += RED * 0.5 * pulse * outputCurve;

    /* axes */
    col += GRAY * 0.2 * smoothstep(0.005, 0.002, abs(p.y - 0.35));
    col += GRAY * 0.2 * smoothstep(0.005, 0.002, abs(p.y + 0.35));
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

export function EigenfunctionAnimation() {
  return <GLCanvas fragmentShader={EIGEN_FS} aspect={2.5} />;
}