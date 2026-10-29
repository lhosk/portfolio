import React from "react";
import DetailPage, { Card, Prose, Figure } from "../../components/DetailPage";
import mcsImage from "../../assets/images/mcs.png";

function Mcs() {
  return (
    <DetailPage title="Monte Carlo Simulation: Circles and Spheres"
      stack="MATLAB · Computational Physics · Geometry Visualization · 3D Plotting · Statistical Estimation · Numerical Methods">
      <Card label="Overview">
        <Prose>
          <p>My first coding project, built for a computational physics course in MATLAB. The goal was to estimate the area of a circle using a Monte Carlo simulation.</p>
          <p>I expanded the model to handle multiple circles and incorporated holes, enabling calculations of areas like (area of circles minus area of holes). Then extended it to three dimensions to model spheres, spherical holes, and eventually elliptical geometries.</p>
          <p>The pink region in the output represents the measured sphere, and the black region represents a spherical hole.</p>
        </Prose>
      </Card>
      <Card label="Output">
        <Figure src={mcsImage} alt="Monte Carlo simulation output: a sphere with a spherical hole" />
      </Card>
    </DetailPage>
  );
}
export default Mcs;
