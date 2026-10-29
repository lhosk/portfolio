import React from "react";
import DetailPage, { Card, Prose } from "../../components/DetailPage";
import { useIsNarrow } from "../../components/hooks";
import shutTheBoxPdf from "../../assets/papers/shutthebox.pdf";

function ShutTheBox() {
  const isMobile = useIsNarrow(768);

  return (
    <DetailPage title="Optimal Strategy in Shut The Box"
      stack="Python · Dynamic Programming · Monte Carlo Simulation · Game Theory"
      links={[
        { label: "Open Paper (PDF)", href: shutTheBoxPdf },
        { label: "View on GitHub", href: "https://github.com/lhosk/shut-the-box" },
      ]}>
      <Card label="Overview">
        <Prose>
          <p>This is one of the first papers I made outside of school. I started doing these because they were short, fun, and kept my coding, math, and physics skills up.</p>
          <p>The point of this paper is to determine the correct way to play the game <i>Shut The Box</i>.</p>
        </Prose>
      </Card>
      {/* phones get the PDF button in the header instead of an embedded viewer */}
      {!isMobile && (
        <Card label="Paper">
          <iframe src={shutTheBoxPdf} title="Optimal Strategy in Shut The Box"
            style={{ display: 'block', width: '100%', height: '85vh', minHeight: '640px', border: 'none', borderRadius: '8px', background: '#fff' }} />
        </Card>
      )}
    </DetailPage>
  );
}

export default ShutTheBox;
