import React from "react";
import DetailPage, { Card, Prose, Figure, FigureGrid, BulletList, StepGrid, BalancedGrid } from "../../components/DetailPage";
import { colors, fonts, fluid } from "../../components/styles";
import driverHeatmaps from "../../assets/images/thorium/driver_heatmaps.png";
import particleTracks from "../../assets/images/thorium/particle_tracks.png";
import assemblyHeatmaps from "../../assets/images/thorium/assembly_heatmaps.png";
import energySpectrum from "../../assets/images/thorium/energy_spectrum.png";
import detectorLocations from "../../assets/images/thorium/detector_locations.png";
import detectorTimePlots from "../../assets/images/thorium/detector_time_plots.png";
import drivenDepletion from "../../assets/images/thorium/driven_depletion.png";
import sensitivity from "../../assets/images/thorium/sensitivity.png";

const steps = [
  { name: "Cross sections", text: "Plotted fission and capture data for U-235, U-233 and Th-232 to see why thorium needs help to start fissioning." },
  { name: "Pin cell", text: "A single uranium fuel pin, with k-effective convergence and the neutron energy spectrum." },
  { name: "Assembly", text: "Full 17x17 assemblies with uranium and with thorium fuel, comparing flux and power per rod side by side." },
  { name: "Driven assembly", text: "A thorium assembly with a small amount of U-233, kept below critical and driven by a 14.1 MeV point source, with particle track plots." },
  { name: "Detector study", text: "Estimated k from simulated detector readings at different distances from the source." },
  { name: "Depletion", text: "Tracked U-233 breeding, Pa-233 buildup and k over one year, at fixed power and with the driver held constant. Then varied fuel temperature, water density and lattice pitch." },
];

const highlights = [
  { value: "28.4x", label: "Source multiplication, against 22.4x from 1/(1 - k)" },
  { value: "0.930", label: "k inferred near the source, against a true value of 0.955" },
  { value: "28.3x to 11.3x", label: "Multiplication over one year with the driver held constant" },
  { value: "0.970 to 0.993", label: "k after lowering the water density in the over-moderated lattice" },
];

const results = [
  "The driven assembly multiplied the source by 28.4x, while 1/(1 - k) predicted 22.4x. The gap comes from fast fission and (n,2n) reactions caused by the 14 MeV source neutrons.",
  "Detectors near the source underestimated k: 0.930 near the source, 0.951 far away, against a true value of 0.955.",
  "With the driver held constant for one year, multiplication fell from 28.3x to 11.3x and power fell from 200 to 75 W/cm.",
  "In the fixed-power pin case, Pa-233 built up to about 19% of the U-233 inventory.",
  "The lattice is over-moderated. Lowering the water density raised k from 0.970 to 0.993. The Doppler coefficient came out at about -2.9 pcm/K.",
];

const learned = [
  "The 1/(1 - k) formula assumes source neutrons behave like fission neutrons. A 14 MeV source doesn't, so the formula underpredicts multiplication.",
  "Where you put a detector changes the k you infer. Close to the source, the flux shape is set by the source instead of the reactor itself.",
  "A driven system doesn't hold its power on its own. As the fuel burns and k drops, power falls even though the source stays the same.",
  "Less water can mean more reactivity. In an over-moderated lattice, removing water raises k, which goes against my first instinct.",
];

const limitations = [
  "The models are 2D lattices with reflective edges, so there is no leakage from a finite core.",
  "Materials and geometry are simplified and water-moderated. This is not a model of any real reactor design.",
  "The driver is a point source of 14.1 MeV neutrons. The accelerator and target that would produce them are not modeled.",
];

const gallery = [
  { src: driverHeatmaps, label: "Flux and power per rod with the driver on" },
  { src: particleTracks, label: "Three source neutrons and the fission neutrons they caused" },
  { src: assemblyHeatmaps, label: "Uranium vs thorium assembly flux and rod power" },
  { src: energySpectrum, label: "Neutron energy spectrum in the pin cell" },
  { src: detectorLocations, label: "Detector positions near and far from the source" },
  { src: detectorTimePlots, label: "Detector readings used to estimate k" },
  { src: drivenDepletion, label: "One year of depletion with the driver held constant" },
  { src: sensitivity, label: "Effect of fuel temperature, water density and pitch" },
];

function Thorium() {
  return (
    <DetailPage title="Thorium Subcritical Reactor Study"
      stack="Python · OpenMC 0.16 · ENDF/B-VIII.0 · Monte Carlo · Reactor Physics · Depletion · NumPy · Matplotlib · WSL/Linux"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/thorium-subcritical-reactor-study" }]}>
      <Card label="Overview">
        <Prose>
          <p>Monte Carlo models of a thorium fuel assembly kept subcritical and driven by an external neutron source.</p>
          <p>I used OpenMC to build neutron transport models that go from a single fuel pin up to a 17x17 thorium assembly driven by a 14.1 MeV neutron source. I compared the simulated results against simple theory and tracked how the fuel changes over a year of operation. It's a learning project, built with simplified 2D water-moderated models.</p>
        </Prose>
      </Card>
      <Card label="What I built">
        <StepGrid steps={steps} />
      </Card>
      <Card label="Key results">
        <BalancedGrid gap="10px" style={{ marginBottom: '14px' }}>
          {highlights.map((h) => (
            <div key={h.value} style={{ background: colors.surface2, borderRadius: '8px', padding: '10px 12px' }}>
              <div style={{ fontFamily: fonts.mono, fontSize: fluid(17, 21), fontWeight: 500, color: colors.accentInk, lineHeight: '1.2', marginBottom: '4px' }}>{h.value}</div>
              <div style={{ fontSize: fluid(12, 13), color: colors.muted, lineHeight: '1.45' }}>{h.label}</div>
            </div>
          ))}
        </BalancedGrid>
        <BulletList items={results} />
      </Card>
      <Card label="Figures">
        <FigureGrid min={480}>
          {gallery.map((g) => <Figure key={g.label} src={g.src} alt={g.label} caption={g.label} />)}
        </FigureGrid>
      </Card>
      <Card label="What I learned">
        <BulletList items={learned} />
      </Card>
      <Card label="Limitations">
        <BulletList items={limitations} />
      </Card>
    </DetailPage>
  );
}
export default Thorium;
