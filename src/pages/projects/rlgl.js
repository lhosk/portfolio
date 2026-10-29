import React from "react";
import DetailPage, { Card, Prose, Figure } from "../../components/DetailPage";
import rlgl from "../../assets/images/rlgl.png";

function Rlgl() {
  return (
    <DetailPage title="Red Light Green Light"
      stack="Arduino · C++ · Embedded Systems · Game Logic · Hardware Interfacing · Sensor Input · Sound Control"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/Physical-Computing/blob/main/code_red_light_green_light.ino" }]}>
      <Card label="Overview">
        <Prose>
          <p>Recreates the classic Red Light Green Light game using an Arduino-based embedded system. Built for Physical Computing, focused on user interaction, timing control, and feedback through LEDs and sound.</p>
          <p>A potentiometer selects difficulty (25 clicks on Easy, 50 on Medium, higher on Hard). The LED sequence alternates between red, yellow, and green. Player timing is monitored through button inputs and feedback is provided via the digital display, light patterns, and a piezo buzzer.</p>
        </Prose>
      </Card>
      <Card label="Photo">
        <Figure src={rlgl} alt="Red Light Green Light Arduino setup" />
      </Card>
    </DetailPage>
  );
}
export default Rlgl;
