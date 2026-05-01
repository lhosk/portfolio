import React from "react";
import NavBar from "../../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../../components/styles";

function Archimedian() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Archimedean Spiral</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>Taught me the math behind generating an Archimedean spiral by stepping through angles and radii. I also attached rotating squares to each point of the spiral to visualize how the curve grows as it turns. Helped me get comfortable combining geometry, animation loops, and transformations. You must generate the spiral before adding the squares — the squares follow the spiral's points. Refresh to reset.</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/opengl-and-webgl/tree/main/archimedian-spiral" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Demo</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe src={process.env.PUBLIC_URL + "/files/archimedian.html"} title="Archimedean Spiral Demo" scrolling="no" style={{ width: '550px', height: '620px', border: 'none', borderRadius: '12px' }} />
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Archimedian;
