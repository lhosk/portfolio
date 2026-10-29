import React from "react";
import DetailPage, { Card, Prose, Figure } from "../../components/DetailPage";
import vrd1 from "../../assets/images/vrd1.png";

function Vrd() {
  return (
    <DetailPage title="Virtual Retinal Display"
      stack="Python · LightTools · Fusion 360 · Optical Simulation · Laser Intensity Modeling · CIE Color Mapping"
      links={[
        { label: "View on GitHub", href: "https://github.com/lhosk/Virtual-Retinal-Display" },
        { label: "View Presentation", href: "https://drive.google.com/file/d/1BuR9d79Ee25qUjlR7Gobtb5KOs4Y-sKy/view?usp=sharing" },
      ]}>
      <Card label="Overview">
        <Prose>
          <p>Final research and design project for an Optical Systems Design course. Developed a Virtual Retinal Display prototype — a system that projects light directly onto the human retina to create high-resolution images without a physical screen.</p>
          <p>The optical path was modeled in LightTools while the anatomical structure of the eye was designed in Fusion 360. A custom Python script models the scanning behavior of RGB lasers and calculates power distribution across wavelengths corresponding to human visual perception.</p>
          <p>Three lasers (red, green, blue) normalized by photopic sensitivity curves, with total output power kept below 1 mW for safety. Mirrors, lenses, and beam splitters direct and attenuate the beams to maintain color accuracy while optimizing brightness and safety.</p>
        </Prose>
      </Card>
      <Card label="Diagram">
        <Figure src={vrd1} alt="Virtual retinal display optical diagram" />
      </Card>
    </DetailPage>
  );
}
export default Vrd;
