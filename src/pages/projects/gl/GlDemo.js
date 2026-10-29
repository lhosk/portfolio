import React, { useRef, useState, useEffect } from "react";
import DetailPage, { Card, Prose, BulletList } from "../../../components/DetailPage";
import { colors } from "../../../components/styles";
import { useIsNarrow, useViewportHeight } from "../../../components/hooks";

// sticky nav + the Demo card's label and padding, kept clear when fitting a demo to the screen height
const SCREEN_RESERVE = 130;

// The demos in public/files are fixed-size pages, so scale the whole iframe down to fit its column
// (and never past maxScale)
function ScaledFrame({ src, title, width, height, maxScale = 1 }) {
  const ref = useRef(null);
  const [avail, setAvail] = useState(width);

  useEffect(() => {
    const ro = new ResizeObserver(([entry]) => setAvail(entry.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const scale = Math.min(maxScale, avail / width);

  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: width * scale, height: height * scale, overflow: 'hidden', borderRadius: '8px', background: '#fff', boxShadow: `0 0 0 1px ${colors.border}` }}>
        <iframe src={src} title={title} scrolling="no"
          style={{ display: 'block', width, height, border: 'none', transform: `scale(${scale})`, transformOrigin: 'top left' }} />
      </div>
    </div>
  );
}

// text on the left, demo on the right; stacks on narrow screens
function GlDemo({ title, overview, controls, github, file, width = 550, height = 620 }) {
  const stacked = useIsNarrow(1000);
  const viewportHeight = useViewportHeight();

  // shrink with the screen height so the whole demo stays in view,
  // and with the width by giving the demo column at most 46% of the row
  const fit = Math.max(0.3, Math.min(1, (viewportHeight - SCREEN_RESERVE) / height));
  const columns = stacked ? 'minmax(0, 1fr)' :`minmax(0, 1fr) min(${Math.round(width * fit) + 40}px, 46%)`;

  return (
    <DetailPage title={title} links={[{ label: "View on GitHub", href: github }]}>
      <div style={{ display: 'grid', gridTemplateColumns: columns, gap: '10px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Card label="Overview">
            <Prose><p>{overview}</p></Prose>
          </Card>
          {controls && (
            <Card label="Controls">
              <BulletList items={controls} />
            </Card>
          )}
        </div>
        <Card label="Demo">
          <ScaledFrame src={`${process.env.PUBLIC_URL}/files/${file}`} title={`${title} demo`} width={width} height={height} maxScale={fit} />
        </Card>
      </div>
    </DetailPage>
  );
}

export default GlDemo;
