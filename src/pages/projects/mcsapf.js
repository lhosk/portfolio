import React from "react";
import DetailPage, { Card, Prose, Figure } from "../../components/DetailPage";
import mcsapfImage from "../../assets/images/mcsapf.png";

function McsApf() {
  return (
    <DetailPage title="Monte Carlo Simulation: Atomic Packing Factor"
      stack="C++ · Arduino · Monte Carlo Simulation · Embedded Systems · LCD Display · Hardware Interfacing"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/physical-computing/blob/main/code_monte_carlo_simulation_on_atomic_packing_factor.ino" }]}>
      <Card label="Overview">
        <Prose>
          <p>My second Monte Carlo simulation and first time working with Arduino. Used as an end-of-semester presentation for Physical Computing, inspired by Solid State Physics.</p>
          <p>The Atomic Packing Factor represents the ratio of total atomic volume to unit cell volume — how densely atoms are packed in a crystal structure. This Monte Carlo simulation lets users input atomic radii and positions to compute the packing factor numerically, displaying results in real-time on an LCD module.</p>
        </Prose>
      </Card>
      <Card label="Photo">
        <Figure src={mcsapfImage} alt="Atomic packing factor Arduino setup" />
      </Card>
    </DetailPage>
  );
}
export default McsApf;
