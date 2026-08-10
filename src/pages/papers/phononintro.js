import React, { useRef, useEffect } from "react";
import NavBar from "../../components/NavBar";
import {
  style_page_bg,
  style_section,
  style_section_title,
  style_cert_item,
  colors,
  fonts,
} from "../../components/styles";
import katex from "katex";
import "katex/dist/katex.min.css";
import { PsiAnimation, PsiSquaredAnimation, RiemannSumAnimation, ParticleInBoxAnimation, EigenfunctionAnimation, UncertaintyAnimation } from "./phanimations";

/* ─── LaTeX equation component ─── */
function Eq({ tex, block }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      katex.render(tex, ref.current, {
        displayMode: !!block,
        throwOnError: false,
      });
    }
  }, [tex, block]);

  if (block) {
    return (
      <div
        ref={ref}
        style={{
          background: colors.surface2,
          padding: "14px 20px",
          borderRadius: "6px",
          margin: "10px 0",
          overflowX: "auto",
        }}
      />
    );
  }
  return <span ref={ref} />;
}

/* ─── Style tokens ─── */
const card = { ...style_cert_item, padding: "28px", marginBottom: "16px" };
const metaEyebrow = { fontFamily: fonts.mono, fontSize: "11px", color: colors.accent, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" };
const body = { fontSize: "16px", color: colors.muted, lineHeight: "1.8" };
const p = { marginBottom: "12px" };

function PhononIntro() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>
          Introduction to Phonons &amp; Quantum Mechanics (In Progress)
        </div>

        {/* ── Meta ── */}
        <div style={card}>
          <div style={metaEyebrow}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: "13px", color: colors.muted }}>
            JavaScript · Quantum Mechanics · Phonons · Linear Algebra · Statistical Mechanics
          </div>
        </div>

        <div style={card}>
          <div style={metaEyebrow}>Overview</div>
          <div style={body}>
            <p style={p}>
              This paper is a primer that builds from the basics of quantum
              mechanics to phonons and entanglement. It is written to prepare
              the reader for follow-up papers.
            </p>
            <p style={p}>
              No prior quantum mechanics knowledge is assumed. Familiarity with calculus
              and basic linear algebra is helpful.
            </p>
            <p>
              Also, don't expect full sentences for this one... Sorry!
            </p>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 1  Classical vs Quantum
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 1 — Classical vs Quantum</div>
          <div style={body}>
            <p style={p}>
              In classical mechanics, a particle has a definite position <Eq tex="x" /> and
              a definite momentum <Eq tex="p = mv" /> at every instant. This helps us "predict" the future!
            </p>
            <p style={p}>
              However, the rules change when we zoom to the size of atoms... quantum mechanics. 
              A particle doesn't have a definite position or momentum until measured. 
              Instead, it exists in a mix of possibilities which is described by a <em>wave function</em>.
            </p>
            <p>
              Essentially: classical mechanics is <em>deterministic</em> (know the state,
              predict the future). Quantum mechanics is <em>probabilistic</em> (know the
              state, predict the probabilities of outcomes).
            </p>
          </div>
          {/* animation slot */}
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 2  Wave Functions & Probability
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 2 — Wave Functions &amp; Probability</div>
          <div style={body}>
            <p style={p}>
              The wave function <Eq tex="\psi(x)" /> may look scary, but it's just another
              function like <Eq tex="y(x)" />. It also changes depending on the situation.
              We'll talk more about this later though. For now, the wave function is a
              complex-valued function that contains everything you can know about a particle
              (energy, angular momentum, etc.)! By itself it doesn't directly tell you where
              the particle is, but its square does.
            </p>
            <p style={p}>
              For example, the probability of finding the particle between positions{" "}
              <Eq tex="a" /> and <Eq tex="b" /> is:
            </p>
            <Eq block tex="P(a \leq x \leq b) = \int_a^b |\psi(x)|^2 \, dx" />
            <p style={p}>
              Where did the integral sign and the absolute value sign come from though?
              Let's break it down visually. Here's what a wave function can look like 
              (notice that it goes <em>negative</em> in some regions)
            </p>
          </div>
          <div style={{ margin: "auto", maxWidth: "600px"}}>
            <PsiAnimation />
            <div style={{ fontFamily: fonts.mono, fontSize: "12px", color: colors.muted, textAlign: "center", marginTop: "6px" }}>
              ψ(x) — the wave function
            </div>
          </div>
          <div style={body}>
            <p style={p}>
              Since <Eq tex="\psi(x)" /> can be negative, you can't use it directly as a
              probability (probabilities can't be negative... Ex. if we flip heads or tails, 
              we don't say the probability of one of them is negative x percentage). 
              Soooo, we take the absolute value and square it: <Eq tex="|\psi(x)|^2" />. 
              This flips all the negative parts positive:
            </p>
          </div>
          <div style={{ margin: "auto", maxWidth: "600px"}}>
            <PsiSquaredAnimation />
            <div style={{ fontFamily: fonts.mono, fontSize: "12px", color: colors.muted, textAlign: "center", marginTop: "6px" }}>
              |ψ(x)|² — the probability density. Always positive.
            </div>
          </div>
          <div style={body}>
            <p style={p}>
              This is called the <em>probability density</em>. It tells you how likely each
              region is, per unit length, to have a particle. But it's not a probability yet.
              To get an actual probability (a number between 0 and 1), you need to add up the 
              density over a region. That's what the integral does. Think of it as a Riemann 
              sum, stacking up little rectangles of probability from under the curve:
            </p>
          </div>
          <div style={{ margin: "auto", maxWidth: "600px"}}>
            <RiemannSumAnimation />
            <div style={{ fontFamily: fonts.mono, fontSize: "12px", color: colors.muted, textAlign: "center", marginTop: "6px" }}>
              Riemann sum of |ψ(x)|² between a and b. More bars → closer to the integral.
            </div>
          </div>
          <div style={body}>
            <p style={p}>
              As the rectangles get thinner and thinner, the sum becomes the integral. The
              area under <Eq tex="|\psi(x)|^2" /> between <Eq tex="a" /> and{" "}
              <Eq tex="b" /> is the probability of finding the particle in that region.
            </p>
            <p style={p}>
              And the total probability of finding the particle <em>somewhere</em> must be 1:
            </p>
            <Eq block tex="\int_{-\infty}^{\infty} |\psi(x)|^2 \, dx = 1" />
            <p style={p}>
              This is called <em>normalization</em>. Any valid wave function must satisfy it. 
            </p>
            <p style={p}>
              <span style={{ color: colors.accent }}>Let me clarify.</span> The bounds for this are <Eq tex="-\infty" /> and <Eq tex="\infty" />. 
              This means that a particle must exist within all of space for a wave function to be valid.
            </p>
            <p style={p}>
              However, if we abritrarily limit the bounds to <Eq tex="-a" /> and <Eq tex="a" />, it doesn't have to be equal to 1.
              A particle might not exist in that location!
            </p>
            <p style={p}>
              For future references, here is the wave function for a 1D particle in a box:
            </p>
            <Eq block tex="\psi_n(x) = \sqrt{\frac{2}{L}} \sin\!\left(\frac{n\pi x}{L}\right)" />
            <p style={p}>
              This function defines a particle trapped between two walls
              separated by length <Eq tex="L" />. The quantum number <Eq tex="n = 1, 2, 3, \ldots" /> determines
              how many bumps the wave function has. Higher <Eq tex="n" /> means higher energy. I will have another 
              section that goes over quantum numbers.
              Finally, <Eq tex="x" /> is the position!
            </p>
            <div style={{ margin: "16px auto", maxWidth: "600px" }}>
                <ParticleInBoxAnimation />
                <div style={{ fontFamily: fonts.mono, fontSize: "12px", color: colors.muted, textAlign: "center", marginTop: "6px" }}>
                    ψₙ(x) inside a box of length L. The mode number n cycles 1 → 4.
                </div>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 3  Operators & Measurement
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 3 — Operators &amp; Measurement</div>
          <div style={body}>
            <p style={p}>
              In quantum mechanics, every physical quantity (position, momentum, energy) is
              represented by an <em>operator</em>. The two most common operators are the
              position and the momentum operators:
            </p>
            <Eq block tex="\hat{x} = x \quad \text{(multiply by } x \text{)}" />
            <Eq block tex="\hat{p} = -i\hbar \frac{d}{dx} \quad \text{(take the derivative, scale by } {-i\hbar} \text{)}" />
            <p style={p}>
              <Eq tex="\hbar" /> (h-bar) is the reduced Planck constant (<Eq tex="\approx 1.055 \times 10^{-34}" /> J·s)
            </p>
            <p style={p}>
              So, how do we apply these operators? We start with the the complex conjugate (denoted by a star) of our 
              wave function, then our operator (denoted by a hat), then our wave function again. Here is an example with the <Eq tex="\hat{A}" /> operator:
            </p>
            <Eq block tex="\langle A \rangle = \int_{-\infty}^{\infty} \psi^*(x) \, \hat{A} \, \psi(x) \, dx" />
            <p style={p}>
              I should state, the <Eq tex="\hat{A}" /> operator is an abritrary letter for the scenario and doesn't have real or physical meaning.
              Also, the complex conjugate only changes the sign of imaginary numbers, so although there is a more interesting background to it, I won't explain more than that.
            </p>
            <p style={p}>
              Since quantum mechanics only gives probabilities, we talk about the{" "}
              <em>expectation value</em> of a measurement. This is the average result you'd get
              over many identical experiments:
            </p>
            <Eq block tex="\langle x \rangle = \int_{-\infty}^{\infty} \psi^*(x) \, x \, \psi(x) \, dx" />
            <p style={p}>
              Consider our wave function to be that of a particle in a box and our operator is the momentum operator, our expectation value would look like:
            </p>
            <Eq block tex="\langle \hat{p} \rangle = \int_{-\infty}^{\infty} \psi^*(x) \, \hat{p} \, \psi(x) \, dx = \int_{-\infty}^{\infty} \sqrt{\frac{2}{L}} \sin\!\left(\frac{n\pi x}{L}\right) -i\hbar \frac{d}{dx} \sqrt{\frac{2}{L}} \sin\!\left(\frac{n\pi x}{L}\right) dx" />
            <p>
              This derivation can be looked up on youtube or with the help of AI. They can be tricky!
            </p>
            <p>
              The expectation value tells you the average. But how spread out are the
              results? That's the <em>variance</em>, and it leads us directly to
              uncertainty.
            </p>
          </div>
          {/* animation slot */}
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 4  Complex Numbers & Conjugation
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 4 — Complex Numbers &amp; Conjugation</div>
          <div style={body}>
            <p style={p}>
              We mentioned in § 3 that the wave function uses a complex conjugate. Let's
              actually explain what that means.
            </p>
            <p style={p}>
              A complex number has a real part and an imaginary part:
            </p>
            <Eq block tex="z = a + bi" />
            <p style={p}>
              where <Eq tex="i = \sqrt{-1}" />. Yeah... the square root of negative one.
              It doesn't exist on the number line, but it's incredibly useful in physics.
            </p>
            <p style={p}>
              The <em>complex conjugate</em> (written <Eq tex="z^*" />) just flips the sign of the imaginary part:
            </p>
            <Eq block tex="z = a + bi \quad \Rightarrow \quad z^* = a - bi" />
            <p style={p}>
              Why do we care? Because when you multiply a complex number by its conjugate,
              you get a real, positive number:
            </p>
            <Eq block tex="z^* z = (a - bi)(a + bi) = a^2 + b^2" />
            <p style={p}>
              This is why <Eq tex="|\psi|^2 = \psi^* \psi" /> is always positive! The
              wave function can be complex (it usually is), but squaring it with the
              conjugate guarantees a real probability density.
            </p>
            <p>
              <span style={{ color: colors.accent }}>Quick example:</span> if <Eq tex="z = 3 + 4i" />,
              then <Eq tex="z^* = 3 - 4i" />, and <Eq tex="z^* z = 9 + 16 = 25" />. Always real, always positive.
            </p>
          </div>
          {/* animation slot */}
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 5  Operators as Transformations
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 5 — Operators as Transformations</div>
          <div style={body}>
            <p style={p}>
              In § 3 we computed expectation values using <Eq tex="\langle A \rangle = \int \psi^* \hat{A}\, \psi \, dx" />.
              But sometimes you'll see an operator applied to just one wave function:{" "}
              <Eq tex="\hat{A}\,\psi" />. What's the difference?
            </p>
            <p style={p}>
              <Eq tex="\hat{A}\,\psi" /> by itself is a <em>transformation</em>. You feed in
              a function, you get back a (possibly different) function. No number comes out —
              just another wave function.
            </p>
            <p style={p}>
              <span style={{ color: colors.accent }}>Example:</span> apply the momentum
              operator to <Eq tex="\psi(x) = x^3" />:
            </p>
            <Eq block tex="\hat{p}\,\psi = -i\hbar \frac{d}{dx} x^3 = -3i\hbar x^2" />
            <p style={p}>
              You got a new function. That's all a transformation is.
            </p>
            <p style={p}>
              The sandwich <Eq tex="\int \psi^* \hat{A}\, \psi \, dx" /> does something
              different — it takes that transformed function and "compares" it against the
              original by integrating their product. The result is a single number: the
              expectation value.
            </p>
            <p style={p}>
              Think of it like this:
            </p>
            <p style={p}>
              — <Eq tex="\hat{A}\,\psi" /> = "what does the operator do to this state?"
            </p>
            <p>
              — <Eq tex="\int \psi^* \hat{A}\, \psi \, dx" /> = "what's the average measurement of A in this state?"
            </p>
          </div>
          {/* animation slot */}
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 6  Eigenfunctions & Eigenvalues
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 6 — Eigenfunctions &amp; Eigenvalues</div>
          <div style={body}>
            <p style={p}>
              Sometimes when you apply an operator to a function, you get the <em>same
              function back</em> times a constant. When that happens, something special is
              going on.
            </p>
            <p style={p}>
              Take the plane wave <Eq tex="\psi(x) = e^{ikx}" /> and hit it with the
              momentum operator:
            </p>
            <Eq block tex="\hat{p}\,e^{ikx} = -i\hbar \frac{d}{dx} e^{ikx} = -i\hbar \cdot ik \cdot e^{ikx} = \hbar k \cdot e^{ikx}" />
            <p style={p}>
              Same function back, times <Eq tex="\hbar k" />. That means:
            </p>
            <p style={p}>
              — <Eq tex="e^{ikx}" /> is an <em>eigenfunction</em> of <Eq tex="\hat{p}" />
            </p>
            <p style={p}>
              — <Eq tex="\hbar k" /> is the <em>eigenvalue</em> (the actual momentum)
            </p>
            <p style={p}>
              The general form is:
            </p>
            <Eq block tex="\hat{A}\,\psi = a\,\psi" />
            <p style={p}>
              where <Eq tex="a" /> is the eigenvalue. If a state is an eigenfunction of
              some operator, it has a <em>definite value</em> for that quantity. No
              fuzziness.
            </p>
            <p style={p}>
              But what if it's NOT an eigenfunction? Let's try a Gaussian:
            </p>
            <Eq block tex="\hat{p}\,e^{-x^2} = -i\hbar \frac{d}{dx} e^{-x^2} = 2i\hbar x \cdot e^{-x^2}" />
            <p style={p}>
              That's a <em>different</em> function — not the same one times a constant.
              So the Gaussian doesn't have a definite momentum. It's a superposition of
              many momenta, which is exactly why <Eq tex="\Delta p \neq 0" />.
            </p>
            <p>
              <span style={{ color: colors.accent }}>The pattern:</span> eigenfunction of <Eq tex="\hat{A}" /> =
              definite value of A, zero uncertainty. NOT an eigenfunction = superposition
              of values, nonzero uncertainty.
            </p>
          </div>
          <div style={{ margin: "16px auto", maxWidth: "600px" }}>
            <EigenfunctionAnimation />
            <div style={{ fontFamily: fonts.mono, fontSize: "12px", color: colors.muted, textAlign: "center", marginTop: "6px" }}>
              Left: eigenfunction (same shape back, green). Right: not an eigenfunction (different shape, red).
            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 7  Commutators
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 7 — Commutators</div>
          <div style={body}>
            <p style={p}>
              In normal math, <Eq tex="3 \times 5 = 5 \times 3" />. Order doesn't matter.
              Operators don't always work like that.
            </p>
            <p style={p}>
              The <em>commutator</em> measures how much the order matters:
            </p>
            <Eq block tex="[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}" />
            <p style={p}>
              If it equals zero, they commute — order doesn't matter. If it's not zero,
              you get different results depending on which you apply first.
            </p>
            <p style={p}>
              Let's actually compute <Eq tex="[\hat{x}, \hat{p}]" /> step by step. Apply
              both orderings to a test function <Eq tex="f(x)" />:
            </p>
            <Eq block tex="\hat{x}\hat{p}\,f = x \cdot \left(-i\hbar \frac{df}{dx}\right) = -i\hbar\, x \frac{df}{dx}" />
            <Eq block tex="\hat{p}\hat{x}\,f = -i\hbar \frac{d}{dx}(xf) = -i\hbar\left(f + x\frac{df}{dx}\right)" />
            <p style={p}>
              That second line used the product rule: <Eq tex="\frac{d}{dx}(xf) = f + x\frac{df}{dx}" />.
            </p>
            <p style={p}>
              Now subtract:
            </p>
            <Eq block tex="[\hat{x}, \hat{p}]\,f = -i\hbar\, x \frac{df}{dx} + i\hbar\left(f + x\frac{df}{dx}\right) = i\hbar\, f" />
            <p style={p}>
              The <Eq tex="x \frac{df}{dx}" /> terms cancel:
            </p>
            <Eq block tex="[\hat{x}, \hat{p}] = i\hbar" />
            <p style={p}>
              This is the <em>canonical commutation relation</em>. It's the mathematical
              reason you can never know position and momentum at the same time.
            </p>
            <p>
              If they commuted (gave zero), you could know both exactly. But they
              don't... so you can't. The uncertainty principle follows directly from this.
            </p>
          </div>
          {/* animation slot */}
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 8  The Uncertainty Principle
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 8 — The Uncertainty Principle</div>
          <div style={body}>
            <p style={p}>
              OK so we showed in § 7 that <Eq tex="[\hat{x}, \hat{p}] = i\hbar \neq 0" />.
              Now let's see why that leads to uncertainty.
            </p>
            <p style={p}>
              The uncertainty of a measurement is just the standard deviation:
            </p>
            <Eq block tex="\Delta x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2}" />
            <p style={p}>
              Same for momentum: <Eq tex="\Delta p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2}" />.
              How spread out are the results around the average.
            </p>
            <p style={p}>
              Heisenberg's uncertainty principle says there's a hard floor:
            </p>
            <Eq block tex="\Delta x \cdot \Delta p \geq \frac{\hbar}{2}" />
            <p style={p}>
              <span style={{ color: colors.accent }}>Let me clarify.</span> This is NOT about
              your instruments being bad. It's NOT about "disturbing" the particle by looking
              at it. It comes directly from the commutator being nonzero (§ 7). It's math.
            </p>
            <p style={p}>
              If you want position to be super precise (small <Eq tex="\Delta x" />), the
              wave function has to be really narrow. But a narrow function oscillates like
              crazy in momentum space, so <Eq tex="\Delta p" /> gets huge. Squeeze one,
              the other inflates.
            </p>
            <p style={p}>
              The minimum <Eq tex="\Delta x \cdot \Delta p = \hbar/2" /> is achieved only
              by Gaussian wave functions. We're going to come back to this constantly.
            </p>
            <p>
              Also — you can't just "look" at <Eq tex="\psi(x)" /> and know{" "}
              <Eq tex="\Delta p" />. Position uncertainty you can kinda eyeball from the
              width, but momentum is invisible in the <Eq tex="x" /> plot. You need the math.
            </p>
          </div>
          <div style={{ margin: "16px auto", maxWidth: "600px" }}>
            <UncertaintyAnimation />
            <div style={{ fontFamily: fonts.mono, fontSize: "12px", color: colors.muted, textAlign: "center", marginTop: "6px" }}>
              Left: ψ(x) position space. Right: φ(p) momentum space. Narrow one → wide other.
            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 9  The Schrödinger Equation
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 9 — The Schrödinger Equation</div>
          <div style={body}>
            <p style={p}>
              So how does the wave function actually change over time? The Schrödinger
              equation. Basically the quantum <Eq tex="F = ma" />.
            </p>
            <Eq block tex="i\hbar \frac{\partial}{\partial t} \psi(x, t) = \hat{H} \, \psi(x, t)" />
            <p style={p}>
              Left side = how the wave function changes in time. Right side = the
              Hamiltonian (energy operator from § 5) acting on it.
            </p>
            <p style={p}>
              For a particle in some potential <Eq tex="V(x)" />:
            </p>
            <Eq block tex="\hat{H} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x)" />
            <p style={p}>
              First term = kinetic energy. Second term = potential energy.
            </p>
            <p style={p}>
              Most of the time we care about <em>stationary states</em> — states with
              definite energy. For those, the time part is just a phase factor{" "}
              <Eq tex="e^{-iEt/\hbar}" /> and the equation simplifies to:
            </p>
            <Eq block tex="\hat{H} \, \psi(x) = E \, \psi(x)" />
            <p style={p}>
              This is an eigenvalue problem (§ 6)! Same idea as{" "}
              <Eq tex="A\vec{v} = \lambda\vec{v}" /> from linear algebra. Find the wave
              functions that the Hamiltonian just scales by a constant — that constant is
              the energy.
            </p>
            <p>
              Different potentials <Eq tex="V(x)" /> give different solutions. Next up:
              two of the most important ones.
            </p>
          </div>
          {/* animation slot */}
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 10  Quantum Numbers
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div style={card}>
          <div style={metaEyebrow}>§ 10 — Quantum Numbers</div>
          <div style={body}>
            <p style={p}>
              We used <Eq tex="n" /> in the particle in a box without really explaining it.
              Let's fix that.
            </p>
            <p style={p}>
              In quantum mechanics, energy and other properties come in discrete chunks.{" "}
              <em>Quantum numbers</em> are the integers (or half-integers) that label which
              chunk you're in.
            </p>
            <p style={p}>
              For the particle in a box: <Eq tex="n = 1, 2, 3, \ldots" /> tells you which
              energy level. <Eq tex="n = 1" /> is the ground state, <Eq tex="n = 2" /> is
              the next up, etc.
            </p>
            <p style={p}>
              For the harmonic oscillator: <Eq tex="n = 0, 1, 2, \ldots" /> counts how many
              quanta of energy. Notice it starts at 0 here, not 1.
            </p>
            <p style={p}>
              In atoms, you get a whole set:
            </p>
            <p style={p}>
              — <Eq tex="n" /> = principal (which shell, how far from the nucleus)
            </p>
            <p style={p}>
              — <Eq tex="\ell" /> = angular momentum (shape of orbital: s, p, d, f)
            </p>
            <p style={p}>
              — <Eq tex="m_\ell" /> = magnetic (orientation of the orbital)
            </p>
            <p style={p}>
              — <Eq tex="m_s" /> = spin (<Eq tex="+1/2" /> or <Eq tex="-1/2" />)
            </p>
            <p>
              We won't need all of these for phonons, but the key idea: quantum numbers
              label the allowed states. They're indices that tell you which state you're in.
            </p>
          </div>
        
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 11  Particle in a Box
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/*
          <div style={card}>
          <div style={metaEyebrow}>§ 11 — Particle in a Box</div>
          <div style={body}>
            <p style={p}>
              We previewed this in § 2, but let's do it properly. A particle is trapped
              between two walls at <Eq tex="x = 0" /> and <Eq tex="x = L" />. The
              potential is:
            </p>
            <p style={p}>
              — <Eq tex="V(x) = 0" /> inside the box (free to move)
            </p>
            <p style={p}>
              — <Eq tex="V(x) = \infty" /> outside (can't escape)
            </p>
            <p style={p}>
              Solving the Schrödinger equation (§ 9) with these boundary conditions gives:
            </p>
            <Eq block tex="\psi_n(x) = \sqrt{\frac{2}{L}} \sin\!\left(\frac{n\pi x}{L}\right), \quad n = 1, 2, 3, \ldots" />
            <p style={p}>
              The energy levels are:
            </p>
            <Eq block tex="E_n = \frac{n^2 \pi^2 \hbar^2}{2mL^2}" />
            <p style={p}>
              Some things to notice:
            </p>
            <p style={p}>
              — Energy goes as <Eq tex="n^2" />, so higher levels are spaced further apart
              (unlike the harmonic oscillator where they're equally spaced)
            </p>
            <p style={p}>
              — Smaller box (smaller <Eq tex="L" />) = higher energy. Confining a particle
              more tightly costs energy — this is the uncertainty principle in action!
            </p>
            <p style={p}>
              — <Eq tex="\psi_n" /> has <Eq tex="n - 1" /> nodes (zero crossings inside
              the box). More nodes = higher energy = more wiggly.
            </p>
            <p>
              The particle in a box is the simplest quantum system that shows quantization.
              The harmonic oscillator is more useful for phonons though — that's next.
            </p>
          </div>
          
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 12  The Quantum Harmonic Oscillator
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 12 — The Quantum Harmonic Oscillator</div>
          <div style={body}>
            <p style={p}>
              A harmonic oscillator is anything with a restoring force proportional to
              displacement. Ball on a spring. Atom vibrating in a lattice. Potential is a
              parabola:
            </p>
            <Eq block tex="V(x) = \frac{1}{2} m \omega^2 x^2" />
            <p style={p}>
              Solve the Schrödinger equation with this (the derivation is long... look it
              up or ask AI). You get:
            </p>
            <Eq block tex="E_n = \hbar \omega \left(n + \frac{1}{2}\right), \quad n = 0, 1, 2, \ldots" />
            <p style={p}>
              — Energies are equally spaced by <Eq tex="\hbar\omega" /> (unlike the box
              where spacing grows)
            </p>
            <p style={p}>
              — Quantum number <Eq tex="n" /> counts quanta of energy (§ 10)
            </p>
            <p style={p}>
              — Lowest energy is NOT zero — it's <Eq tex="\frac{1}{2}\hbar\omega" />,
              the <em>zero-point energy</em>. The oscillator can never be perfectly still.
            </p>
            <p style={p}>
              The ground state (<Eq tex="n = 0" />) wave function is a Gaussian:
            </p>
            <Eq block tex="\psi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} \exp\!\left(-\frac{m\omega x^2}{2\hbar}\right)" />
            <p style={p}>
              And here's why we care — from this Gaussian:
            </p>
            <Eq block tex="\Delta x = \sqrt{\frac{\hbar}{2m\omega}}, \qquad \Delta p = \sqrt{\frac{\hbar m \omega}{2}}" />
            <Eq block tex="\Delta x \cdot \Delta p = \frac{\hbar}{2}" />
            <p>
              Exactly the Heisenberg minimum! This is our baseline. When we couple
              oscillators together, this number goes UP — and that's the whole point of
              the follow-up paper.
            </p>
          </div>
       
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 13  Spin
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 13 — Spin</div>
          <div style={body}>
            <p style={p}>
              Every particle has a property called <em>spin</em>. It's NOT the particle
              physically spinning like a top — it's an intrinsic quantum property with no
              classical analogy. But it behaves like angular momentum mathematically, so
              that's where the name comes from.
            </p>
            <p style={p}>
              Spin is quantized. A particle's spin quantum number <Eq tex="s" /> can be:
            </p>
            <p style={p}>
              — An integer: <Eq tex="0, 1, 2, \ldots" /> (these particles are called <em>bosons</em>)
            </p>
            <p style={p}>
              — A half-integer: <Eq tex="1/2, 3/2, 5/2, \ldots" /> (these are <em>fermions</em>)
            </p>
            <p style={p}>
              For a given spin <Eq tex="s" />, the spin can point in <Eq tex="2s + 1" />{" "}
              directions. For an electron (<Eq tex="s = 1/2" />):
            </p>
            <Eq block tex="m_s = +\frac{1}{2} \quad \text{(spin up)} \qquad m_s = -\frac{1}{2} \quad \text{(spin down)}" />
            <p style={p}>
              That's it — two options. Up or down. This is a two-state system, which is
              also why quantum computing uses "qubits."
            </p>
            <p style={p}>
              For a photon (<Eq tex="s = 1" />): three possible values{" "}
              <Eq tex="m_s = -1, 0, +1" />, corresponding to polarization states.
            </p>
            <p>
              Spin might seem random at this point, but it determines the most fundamental
              classification of all particles — and that directly affects how phonons behave.
            </p>
          </div>
          
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 14  Fermions & Bosons
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 14 — Fermions &amp; Bosons</div>
          <div style={body}>
            <p style={p}>
              Every particle in the universe is either a <em>fermion</em> or a{" "}
              <em>boson</em>. No exceptions. The difference comes from spin (§ 13):
            </p>
            <p style={p}>
              — <em>Fermions</em>: half-integer spin (<Eq tex="1/2, 3/2, \ldots" />).
              Electrons, protons, neutrons, quarks.
            </p>
            <p style={p}>
              — <em>Bosons</em>: integer spin (<Eq tex="0, 1, 2, \ldots" />).
              Photons, gluons, the Higgs boson... and <em>phonons</em>.
            </p>
            <p style={p}>
              <span style={{ color: colors.accent }}>The key difference:</span> what happens
              when you swap two identical particles?
            </p>
            <p style={p}>
              For bosons, the wave function stays the same:
            </p>
            <Eq block tex="\Psi(x_1, x_2) = +\Psi(x_2, x_1) \quad \text{(symmetric)}" />
            <p style={p}>
              For fermions, the wave function picks up a minus sign:
            </p>
            <Eq block tex="\Psi(x_1, x_2) = -\Psi(x_2, x_1) \quad \text{(antisymmetric)}" />
            <p style={p}>
              This minus sign has MASSIVE consequences. If two fermions are in the same
              state, then <Eq tex="\Psi(x_1, x_2) = -\Psi(x_1, x_2)" />, which means{" "}
              <Eq tex="\Psi = 0" />. The probability is zero. It literally can't happen.
            </p>
            <p>
              Bosons have no such restriction — you can cram as many bosons into the same
              state as you want. This is why lasers work (many photons in one state) and
              why phonons can pile up at low energies.
            </p>
          </div>
          
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 15  Pauli Exclusion Principle
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 15 — Pauli Exclusion Principle</div>
          <div style={body}>
            <p style={p}>
              We just showed that two fermions can't be in the same state. This is the{" "}
              <em>Pauli exclusion principle</em>, and it shapes basically all of chemistry
              and material science.
            </p>
            <p style={p}>
              This is why electrons fill up energy levels one by one in atoms. It's why the
              periodic table exists. It's why matter is solid instead of collapsing.
            </p>
            <p style={p}>
              <span style={{ color: colors.accent }}>For phonons though?</span> Phonons are
              bosons. The exclusion principle does NOT apply. Multiple phonons can occupy
              the exact same mode at the same time. This is fundamentally different behavior.
            </p>
            <p style={p}>
              When we write the harmonic oscillator energy as{" "}
              <Eq tex="E_k = \hbar\omega_k(n_k + 1/2)" />, that <Eq tex="n_k" /> is the
              number of phonons in mode <Eq tex="k" />. It can be 0, 1, 2, 100, whatever.
              No limit. Try doing that with electrons!
            </p>
            <p>
              This distinction — fermions excluded, bosons welcome — is why phonon physics
              and electron physics are so different even though both involve quantum
              mechanics.
            </p>
          </div>
         
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 16  Creation & Annihilation Operators
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 16 — Creation &amp; Annihilation Operators</div>
          <div style={body}>
            <p style={p}>
              There's a super elegant way to handle the harmonic oscillator using two new
              operators: the <em>creation operator</em> <Eq tex="\hat{a}^\dagger" /> and
              the <em>annihilation operator</em> <Eq tex="\hat{a}" />.
            </p>
            <p style={p}>
              What they do is simple:
            </p>
            <Eq block tex="\hat{a}^\dagger |n\rangle = \sqrt{n+1}\,|n+1\rangle \quad \text{(adds one quantum)}" />
            <Eq block tex="\hat{a}\,|n\rangle = \sqrt{n}\,|n-1\rangle \quad \text{(removes one quantum)}" />
            <p style={p}>
              <Eq tex="\hat{a}^\dagger" /> creates a phonon. <Eq tex="\hat{a}" />{" "}
              destroys one. That's why they're called creation and annihilation operators.
            </p>
            <p style={p}>
              The Hamiltonian rewrites beautifully:
            </p>
            <Eq block tex="\hat{H} = \hbar\omega\left(\hat{a}^\dagger\hat{a} + \frac{1}{2}\right)" />
            <p style={p}>
              The combination <Eq tex="\hat{n} = \hat{a}^\dagger\hat{a}" /> is the{" "}
              <em>number operator</em>. It counts how many quanta are in the system:
            </p>
            <Eq block tex="\hat{n}\,|n\rangle = n\,|n\rangle" />
            <p style={p}>
              These operators are defined in terms of position and momentum:
            </p>
            <Eq block tex="\hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} + \frac{i\hat{p}}{m\omega}\right)" />
            <Eq block tex="\hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} - \frac{i\hat{p}}{m\omega}\right)" />
            <p style={p}>
              And they satisfy their own commutation relation:
            </p>
            <Eq block tex="[\hat{a}, \hat{a}^\dagger] = 1" />
            <p>
              This formalism is how phonon physics is actually done. Instead of solving
              differential equations, you just count quanta with{" "}
              <Eq tex="\hat{a}^\dagger" /> and <Eq tex="\hat{a}" />.
            </p>
          </div>
        
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 17  Two Coupled Oscillators
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 17 — Two Coupled Oscillators</div>
          <div style={body}>
            <p style={p}>
              Now the fun starts. Take two identical oscillators and connect them with a
              spring of coupling strength <Eq tex="\kappa" />:
            </p>
            <Eq block tex="H = \frac{p_1^2}{2m} + \frac{p_2^2}{2m} + \frac{1}{2}m\omega^2 x_1^2 + \frac{1}{2}m\omega^2 x_2^2 + \frac{1}{2}\kappa(x_1 - x_2)^2" />
            <p style={p}>
              That last term is the coupling — penalizes the two oscillators for being far
              apart. <Eq tex="\kappa = 0" /> means independent. Big <Eq tex="\kappa" /> means
              tightly linked.
            </p>
            <p style={p}>
              This looks messy, but there's a trick. Define <em>normal mode coordinates</em>:
            </p>
            <Eq block tex="x_+ = \frac{x_1 + x_2}{\sqrt{2}} \quad \text{(center-of-mass: both move together)}" />
            <Eq block tex="x_- = \frac{x_1 - x_2}{\sqrt{2}} \quad \text{(relative: they move apart)}" />
            <p style={p}>
              In these coordinates the Hamiltonian magically separates into two independent
              oscillators with different frequencies:
            </p>
            <Eq block tex="\omega_+ = \omega, \qquad \omega_- = \sqrt{\omega^2 + \frac{2\kappa}{m}}" />
            <p style={p}>
              Center-of-mass doesn't care about coupling. Relative mode is faster because
              the coupling spring adds extra stiffness.
            </p>
            <p style={p}>
              Ground state? Just two Gaussians — one in <Eq tex="x_+" /> and one in{" "}
              <Eq tex="x_-" />. Simple in normal mode space.
            </p>
            <p style={p}>
              <span style={{ color: colors.accent }}>But here's the key.</span> Because{" "}
              <Eq tex="\omega_+ \neq \omega_-" />, those two Gaussians have different
              widths. When you transform back to <Eq tex="(x_1, x_2)" />, the wave
              function becomes a tilted ellipse. That tilt means <Eq tex="x_1" /> and{" "}
              <Eq tex="x_2" /> are correlated.
            </p>
            <p>
              That correlation... is entanglement. But we'll get to that.
            </p>
          </div>
      
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 18  N Coupled Oscillators & Normal Modes
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 18 — N Coupled Oscillators &amp; Normal Modes</div>
          <div style={body}>
            <p style={p}>
              Two oscillators was cool. Now imagine <Eq tex="N" /> in a chain:
            </p>
            <Eq block tex="H = \sum_{i=1}^{N} \frac{p_i^2}{2m} + \sum_{i=1}^{N} \frac{1}{2}m\omega^2 x_i^2 + \sum_{i=1}^{N-1} \frac{1}{2}\kappa(x_i - x_{i+1})^2" />
            <p style={p}>
              Same trick — diagonalize the potential energy matrix to find <Eq tex="N" />{" "}
              independent normal modes, each with frequency <Eq tex="\omega_k" />:
            </p>
            <Eq block tex="\omega_k = \sqrt{\omega^2 + \frac{4\kappa}{m}\sin^2\!\left(\frac{\pi k}{2(N+1)}\right)}, \quad k = 1, \ldots, N" />
            <p style={p}>
              This is the <em>dispersion relation</em>. How frequency depends on mode number.
            </p>
            <p style={p}>
              — Low <Eq tex="k" />: slow, collective oscillations. Neighbors move together.
            </p>
            <p style={p}>
              — High <Eq tex="k" />: fast, neighbors move in opposite directions.
            </p>
            <p>
              Ground state is a product of <Eq tex="N" /> Gaussians, one per mode. Since
              every mode has a different frequency (different width), transforming back to
              physical coordinates creates correlations. More modes = more complex
              entanglement.
            </p>
          </div>
          
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 19  Phonons
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 19 — Phonons: Quantized Lattice Vibrations</div>
          <div style={body}>
            <p style={p}>
              In a real crystal, atoms sit in a lattice and vibrate around equilibrium. If
              vibrations are small, restoring forces are approximately linear — so the system
              is a chain of coupled harmonic oscillators. Exactly what we just studied!
            </p>
            <p style={p}>
              Each normal mode behaves as its own quantum harmonic oscillator:
            </p>
            <Eq block tex="E_k = \hbar\omega_k\!\left(n_k + \frac{1}{2}\right)" />
            <p style={p}>
              A <em>phonon</em> is one quantum of vibrational energy in mode <Eq tex="k" />.
              Adding a phonon = <Eq tex="\hat{a}_k^\dagger" /> acting on the state =
              increasing <Eq tex="n_k" /> by 1 = adding energy <Eq tex="\hbar\omega_k" />.
            </p>
            <p style={p}>
              <span style={{ color: colors.accent }}>Important:</span> phonons are NOT
              particles. No atom "is" the phonon. They're collective excitations —
              coordinated motion spread across many atoms. Think of a wave at a sports
              stadium. No single person is "the wave."
            </p>
            <p style={p}>
              And remember from § 14 — phonons are <em>bosons</em>. Multiple phonons can
              occupy the same mode. No Pauli exclusion. This is why phonon statistics follow
              the Bose-Einstein distribution (coming up next).
            </p>
            <p style={p}>
              Phonons carry crystal momentum <Eq tex="\hbar k" />, transport heat, and
              interact with electrons. Central to thermal conductivity, specific heat,
              superconductivity, and more.
            </p>
            <p>
              The ground state — all <Eq tex="n_k = 0" /> — still has nonzero energy{" "}
              <Eq tex="\sum_k \frac{1}{2}\hbar\omega_k" /> and fluctuations at every site.
              Zero-point vibrations, even at absolute zero.
            </p>
          </div>
          
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 20  Bose-Einstein Statistics
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 20 — Bose-Einstein Statistics</div>
          <div style={body}>
            <p style={p}>
              Since phonons are bosons, how many of them occupy a given mode at temperature{" "}
              <Eq tex="T" />? The <em>Bose-Einstein distribution</em>:
            </p>
            <Eq block tex="\langle n_k \rangle = \frac{1}{e^{\hbar\omega_k / k_B T} - 1}" />
            <p style={p}>
              where <Eq tex="k_B" /> is the Boltzmann constant. This tells you the average
              number of phonons in mode <Eq tex="k" /> at temperature <Eq tex="T" />.
            </p>
            <p style={p}>
              — At low <Eq tex="T" />: the exponential is huge, so{" "}
              <Eq tex="\langle n_k \rangle \approx 0" />. Not many phonons around.
            </p>
            <p style={p}>
              — At high <Eq tex="T" />: the exponential is close to 1, so{" "}
              <Eq tex="\langle n_k \rangle \approx k_B T / \hbar\omega_k" />. Lots of
              phonons, proportional to temperature.
            </p>
            <p style={p}>
              <span style={{ color: colors.accent }}>Compare to fermions:</span> the
              Fermi-Dirac distribution has a <Eq tex="+ 1" /> instead of <Eq tex="- 1" />:
            </p>
            <Eq block tex="\langle n_k \rangle_{\text{fermion}} = \frac{1}{e^{(E_k - \mu) / k_B T} + 1}" />
            <p style={p}>
              That plus sign caps the occupation at 1 — Pauli exclusion (§ 15). The minus
              sign for bosons puts no cap.
            </p>
            <p>
              This is why phonons and electrons behave so differently at finite temperature.
              Same quantum mechanics, different statistics because of spin.
            </p>
          </div>
          
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 21  Entanglement
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 21 — Entanglement</div>
          <div style={body}>
            <p style={p}>
              Two particles A and B. If the total wave function can be written as a product:
            </p>
            <Eq block tex="\Psi(x_A, x_B) = \psi_A(x_A) \cdot \psi_B(x_B)" />
            <p style={p}>
              then they're <em>not</em> entangled. Each has its own state. Measuring A
              tells you nothing about B.
            </p>
            <p style={p}>
              But if it <em>can't</em> be factored:
            </p>
            <Eq block tex="\Psi(x_A, x_B) = \alpha \, \psi_1(x_A)\phi_1(x_B) + \beta \, \psi_2(x_A)\phi_2(x_B)" />
            <p style={p}>
              then they're <em>entangled</em>. Measuring A instantly constrains what you
              know about B. Even if they're far apart.
            </p>
            <p style={p}>
              For our coupled oscillators: ground state in normal mode coordinates is a
              product of Gaussians (not entangled in that basis). But in physical
              coordinates <Eq tex="(x_1, x_2)" /> it's a correlated Gaussian that CAN'T
              be factored. Stronger coupling <Eq tex="\kappa" /> = more frequency
              difference = more tilt = more entanglement.
            </p>
            <p>
              Entanglement isn't just a curiosity — when sites are entangled, local
              measurements carry less information. That's what makes{" "}
              <Eq tex="\Delta x \cdot \Delta p" /> grow beyond <Eq tex="\hbar/2" /> locally.
            </p>
          </div>
          
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 22  Density Matrices & Tracing Out
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 22 — Density Matrices &amp; Tracing Out</div>
          <div style={body}>
            <p style={p}>
              What if you only have access to <em>part</em> of a system? You need the{" "}
              <em>density matrix</em>.
            </p>
            <p style={p}>
              For a pure state <Eq tex="|\psi\rangle" />, the density matrix is:
            </p>
            <Eq block tex="\rho = |\psi\rangle\langle\psi|" />
            <p style={p}>
              Same info, different packaging. The power comes when you want a subsystem.
              Particles A and B in joint state <Eq tex="\rho_{AB}" />. Describe A alone
              by <em>tracing out</em> B:
            </p>
            <Eq block tex="\rho_A = \text{Tr}_B(\rho_{AB})" />
            <p style={p}>
              "Trace out" = sum over all possible states of B. Mathematically average away
              what you don't know.
            </p>
            <p style={p}>
              What's left is A's <em>reduced density matrix</em>:
            </p>
            <p style={p}>
              — NOT entangled: <Eq tex="\rho_A" /> is pure. Clean. All info intact.
            </p>
            <p style={p}>
              — Entangled: <Eq tex="\rho_A" /> is <em>mixed</em>. Looks like a messy
              statistical mixture. Info has "leaked" into correlations with B.
            </p>
            <p style={p}>
              Expectation values from the density matrix:
            </p>
            <Eq block tex="\langle A \rangle = \text{Tr}(\rho_A \hat{A})" />
            <p>
              The <Eq tex="\Delta x" /> and <Eq tex="\Delta p" /> computed from the
              reduced density matrix include the extra noise from entanglement. This is
              literally how entanglement inflates local uncertainty.
            </p>
          </div>
       
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 23  Entanglement Entropy
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        <div style={card}>
          <div style={metaEyebrow}>§ 23 — Entanglement Entropy</div>
          <div style={body}>
            <p style={p}>
              How do you actually <em>measure</em> how entangled two things are? The{" "}
              <em>von Neumann entropy</em> of the reduced density matrix:
            </p>
            <Eq block tex="S = -\text{Tr}(\rho_A \ln \rho_A)" />
            <p style={p}>
              — <Eq tex="S = 0" />: no entanglement. <Eq tex="\rho_A" /> is pure.
            </p>
            <p style={p}>
              — <Eq tex="S" /> big: lots of entanglement. <Eq tex="\rho_A" /> is very mixed.
            </p>
            <p style={p}>
              For Gaussian states (like our coupled oscillators), there are nice formulas
              to compute this from the covariance matrix. We'll do that in the follow-up
              paper. The intuition is what matters:
            </p>
            <p style={p}>
              More entanglement → bigger <Eq tex="S" /> → reduced state more mixed →
              local measurements noisier.
            </p>
            <p>
              This is the bridge. <Eq tex="S" /> quantifies entanglement.{" "}
              <Eq tex="\Delta x \cdot \Delta p" /> quantifies local noise vs the Heisenberg
              minimum. The follow-up paper shows these are directly related.
            </p>
          </div>
          
        </div>

        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           § 24  Putting It All Together
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        {/* <div style={card}>
          <div style={metaEyebrow}>§ 24 — Putting It All Together</div>
          <div style={body}>
            <p style={p}>
              Let's trace the logic:
            </p>
            <p style={p}>
              Atoms in a lattice vibrate → coupled quantum harmonic oscillators →
              collective vibrations quantized into phonons (bosons, so no exclusion
              principle) → ground state sits at Heisenberg minimum.
            </p>
            <p style={p}>
              But coupling creates entanglement between sites. Focus on one atom, trace out
              the rest → reduced density matrix looks mixed → local{" "}
              <Eq tex="\Delta x \cdot \Delta p" /> inflates beyond <Eq tex="\hbar/2" />.
            </p>
            <p style={p}>
              Stronger coupling = more entanglement = noisier local measurements. The
              global minimum is preserved — uncertainty isn't created, it's{" "}
              <em>redistributed</em> by entanglement across the chain.
            </p>
            <p>
              The follow-up paper computes this site by site for chains of varying length
              and coupling strength. But conceptually... that's it. That's the whole
              foundation right here.
            </p>
          </div>
        </div> */}
        IN PROGRESS
        <div style={{ height: "80px" }} />
      </div>
    </div>
  );
}

export default PhononIntro;