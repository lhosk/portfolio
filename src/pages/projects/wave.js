import React from "react";
import DetailPage, { Card, Prose } from "../../components/DetailPage";

function Wave() {
  return (
    <DetailPage title="Wave Perturbation Simulation"
      stack="Python · Computational Physics · Wave Packet Propagation · Fourier Analysis · Numerical Simulation · Scientific Visualization"
      links={[
        { label: "View on GitHub", href: "https://github.com/lhosk/wave-packet-perturbation" },
        { label: "View Technical Problem Solution (PDF)", href: "https://github.com/lhosk/wave-packet-perturbation/blob/main/wave_pertubation_problem.pdf" },
      ]}>
      <Card label="Overview">
        <Prose>
          <p>Investigates the time-dependent evolution of a one-dimensional wave packet under a localized potential perturbation. The goal is to study how spatial disturbances modify wave propagation, phase evolution, and spectral content relative to an unperturbed baseline.</p>
          <p>The simulation numerically solves a Schrodinger-type wave equation using finite-difference time stepping combined with FFT-based spectral analysis. An initial Gaussian wave packet is propagated through both free space and a perturbed potential for direct comparison of arrival times, dispersion behavior, and momentum-space structure.</p>
          <p>The momentum-space amplitude function A(k) is extracted via Fourier transforms. Changes in phase, group velocity, and spectral distortion are tracked to isolate the physical impact of the localized potential.</p>
        </Prose>
      </Card>
    </DetailPage>
  );
}
export default Wave;
