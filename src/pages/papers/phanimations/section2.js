import { GLCanvas } from "./helpers";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   § 2a  ψ(x) — wave function that goes negative
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const PSI_FS = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_res;

const vec3 POS_COL = vec3(0.2, 0.6, 1.0);
const vec3 NEG_COL = vec3(1.0, 0.3, 0.3);
const vec3 GRAY    = vec3(0.45);

float psi(float x) {
  return exp(-x * x / 0.32) * cos(x * 4.5);
}

void main() {
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2((v_uv.x - 0.5) * 3.0, (v_uv.y - 0.24) * 1.25);

  vec3 col = vec3(0.055, 0.055, 0.06);

  col += GRAY * 0.25 * smoothstep(0.008, 0.003, abs(p.y));
  col += GRAY * 0.12 * smoothstep(0.008, 0.003, abs(p.x));

  float y = psi(p.x) * 0.8;
  float curve = smoothstep(0.016, 0.005, abs(p.y - y));

  float fillPos = step(0.0, y) * step(0.0, p.y) * step(p.y, y);
  float fillNeg = step(y, 0.0) * step(p.y, 0.0) * step(y, p.y);

  vec3 curveCol = y >= 0.0 ? POS_COL : NEG_COL;
  col += curveCol * 0.7 * curve;
  col += POS_COL * 0.08 * fillPos;
  col += NEG_COL * 0.08 * fillNeg;

  gl_FragColor = vec4(col, 1.0);
}
`;

export function PsiAnimation() {
  return <GLCanvas fragmentShader={PSI_FS} aspect={2.4} />;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   § 2b  |ψ(x)|² — probability density
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const PSI_SQ_FS = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_res;

const vec3 ACCENT = vec3(1.0, 0.31, 0.0);
const vec3 GRAY   = vec3(0.45);

float psiSq(float x) {
  float val = exp(-x * x / 0.32) * cos(x * 4.5);
  return val * val;
}

void main() {
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2((v_uv.x - 0.5) * 3.0, (v_uv.y - 0.095) * 1.05);

  vec3 col = vec3(0.055, 0.055, 0.06);

  col += GRAY * 0.25 * smoothstep(0.008, 0.003, abs(p.y));
  col += GRAY * 0.12 * smoothstep(0.008, 0.003, abs(p.x));

  float y = psiSq(p.x) * 0.8;
  float curve = smoothstep(0.016, 0.005, abs(p.y - y));
  col += ACCENT * 0.7 * curve;

  float fill = step(0.0, p.y) * step(p.y, y);
  col += ACCENT * 0.10 * fill;

  gl_FragColor = vec4(col, 1.0);
}
`;

export function PsiSquaredAnimation() {
  return <GLCanvas fragmentShader={PSI_SQ_FS} aspect={2.9} />;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   § 2c  Riemann sum → integral
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const RIEMANN_FS = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_res;

const vec3 ACCENT = vec3(1.0, 0.31, 0.0);
const vec3 BAR_COL = vec3(0.2, 0.6, 1.0);
const vec3 GRAY   = vec3(0.45);

float psiSq(float x) {
  float val = exp(-x * x / 0.32) * cos(x * 4.5);
  return val * val;
}

void main() {
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2((v_uv.x - 0.5) * 3.0, (v_uv.y - 0.095) * 1.05);

  vec3 col = vec3(0.055, 0.055, 0.06);

  float regionA = -0.55;
  float regionB =  0.55;

  float cycle = mod(u_time * 0.5, 3.0);
  float numBars = 4.0 + cycle * 12.0;

  float barW = (regionB - regionA) / numBars;
  if (p.x > regionA && p.x < regionB && p.y > 0.0) {
    float barIdx = floor((p.x - regionA) / barW);
    float barLeft = regionA + barIdx * barW;
    float barH = psiSq(barLeft + barW * 0.5) * 0.8;

    float inBarX = step(barLeft + 0.003, p.x) * step(p.x, barLeft + barW - 0.003);
    float inBarY = step(p.y, barH);

    col += BAR_COL * 0.18 * inBarX * inBarY;

    float edgeL = smoothstep(0.006, 0.002, abs(p.x - barLeft));
    float edgeR = smoothstep(0.006, 0.002, abs(p.x - (barLeft + barW)));
    float edgeT = smoothstep(0.006, 0.002, abs(p.y - barH)) * inBarX;
    float edges = (edgeL + edgeR) * step(p.y, barH) + edgeT;
    col += BAR_COL * 0.35 * min(edges, 1.0);
  }

  float mA = smoothstep(0.008, 0.003, abs(p.x - regionA));
  float mB = smoothstep(0.008, 0.003, abs(p.x - regionB));
  float dash = step(0.5, fract(p.y * 8.0));
  float inRange = step(-0.05, p.y) * step(p.y, 0.85);
  col += ACCENT * 0.4 * mA * dash * inRange;
  col += ACCENT * 0.4 * mB * dash * inRange;

  float y = psiSq(p.x) * 0.8;
  float curve = smoothstep(0.016, 0.005, abs(p.y - y));
  col += ACCENT * 0.7 * curve;

  col += GRAY * 0.25 * smoothstep(0.008, 0.003, abs(p.y));
  col += GRAY * 0.12 * smoothstep(0.008, 0.003, abs(p.x));

  gl_FragColor = vec4(col, 1.0);
}
`;

export function RiemannSumAnimation() {
  return <GLCanvas fragmentShader={RIEMANN_FS} aspect={2.9} />;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   § 2d  Particle in a box — n cycles 1→4
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const PIB_FS = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_res;

const vec3 ACCENT = vec3(1.0, 0.31, 0.0);
const vec3 GRAY   = vec3(0.45);
const vec3 WHITE  = vec3(1.0);
const float PI = 3.14159265;

void main() {
  float aspect = u_res.x / u_res.y;
  vec2 p = vec2((v_uv.x - 0.5) * 1.6, (v_uv.y - 0.5) * 1.5);

  vec3 col = vec3(0.055, 0.055, 0.06);

  float wallL = -0.5;
  float wallR =  0.5;

  float n = floor(mod(u_time / 1.5, 4.0)) + 1.0;

  float tInStep = fract(u_time / 1.5);
  float blend = smoothstep(0.0, 0.15, tInStep);
  float nPrev = floor(mod((u_time / 1.5) - 1.0, 4.0)) + 1.0;

  float psiCur  = sin(n     * PI * (p.x - wallL)) * 0.55;
  float psiPrev = sin(nPrev * PI * (p.x - wallL)) * 0.55;
  float psi = mix(psiPrev, psiCur, blend);

  float inBox = step(wallL, p.x) * step(p.x, wallR);

  float curve = smoothstep(0.012, 0.004, abs(p.y - psi)) * inBox;
  col += ACCENT * 0.7 * curve;

  float fillPos = step(0.0, psi) * step(0.0, p.y) * step(p.y, psi) * inBox;
  float fillNeg = step(psi, 0.0) * step(p.y, 0.0) * step(psi, p.y) * inBox;
  col += ACCENT * 0.10 * fillPos;
  col += ACCENT * 0.10 * fillNeg;

  float lwL = smoothstep(0.018, 0.006, abs(p.x - wallL));
  float lwR = smoothstep(0.018, 0.006, abs(p.x - wallR));
  float wallH = step(-0.65, p.y) * step(p.y, 0.65);
  col += WHITE * 0.6 * lwL * wallH;
  col += WHITE * 0.6 * lwR * wallH;

  float hatchL = step(wallL - 0.08, p.x) * step(p.x, wallL) * wallH;
  float hatchR = step(wallR, p.x) * step(p.x, wallR + 0.08) * wallH;
  float hatch = step(0.5, fract((p.x + p.y) * 18.0));
  col += GRAY * 0.25 * hatchL * hatch;
  col += GRAY * 0.25 * hatchR * hatch;

  float bracketY = -0.58;
  float bracketLine = smoothstep(0.006, 0.002, abs(p.y - bracketY))
                    * step(wallL, p.x) * step(p.x, wallR);
  col += GRAY * 0.4 * bracketLine;
  float capL = smoothstep(0.006, 0.002, abs(p.x - wallL))
             * step(bracketY - 0.04, p.y) * step(p.y, bracketY + 0.04);
  float capR = smoothstep(0.006, 0.002, abs(p.x - wallR))
             * step(bracketY - 0.04, p.y) * step(p.y, bracketY + 0.04);
  col += GRAY * 0.4 * capL;
  col += GRAY * 0.4 * capR;

  col += GRAY * 0.15 * smoothstep(0.005, 0.002, abs(p.y)) * inBox;

  gl_FragColor = vec4(col, 1.0);
}
`;

export function ParticleInBoxAnimation() {
  return <GLCanvas fragmentShader={PIB_FS} aspect={2.2} />;
}