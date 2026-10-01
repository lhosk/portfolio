import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";
import shotMaps from "../../assets/images/soccerdata/shot_maps.png";
import shotMapsVsAll from "../../assets/images/soccerdata/shot_maps_vs_all.png";
import touchDual from "../../assets/images/soccerdata/touch_heatmap_dual.png";
import touchTeam from "../../assets/images/soccerdata/team_b_touch_all.png";
import ballWinners from "../../assets/images/soccerdata/ball_winners.png";
import discipline from "../../assets/images/soccerdata/discipline.png";

const gallery = [
  { src: shotMaps, label: "Shot maps: Switzerland vs Colombia, every shot by outcome" },
  { src: shotMapsVsAll, label: "Colombia's attack vs everything its opponents managed" },
  { src: touchDual, label: "Dual touch map: Colombia vs Switzerland" },
  { src: touchTeam, label: "Paraguay touch map across all five games" },
  { src: ballWinners, label: "Ball winners per 90: USA vs Belgium" },
  { src: discipline, label: "Fouls per 90 vs cards for every player with 90+ minutes" },
];

const steps = [
  { name: "Scrape", text: "Pull match stats and lineups from SofaScore, and event data with x/y coordinates for every pass, shot and touch from Opta." },
  { name: "Import", text: "Merge both sources into one SQLite database, link players across sources, and evolve the schema when new stats appear." },
  { name: "Render", text: "Generate charts by hand from notebooks, or in batches from a render queue of teams, matchups, players or the whole tournament." },
  { name: "Post", text: "Export dark-themed graphics sized for X and share them as @GukasCOL." },
];

function SoccerData() {
  const cardLabel = { fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' };
  const imgStyle = { width: '100%', display: 'block', borderRadius: '10px' };
  const labelStyle = { fontFamily: fonts.mono, fontSize: '11px', color: colors.muted, marginBottom: '8px', textAlign: 'center', fontWeight: '400' };
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>World Cup 2026 Soccer Data</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={cardLabel}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · Pandas · SQLite · Matplotlib · mplsoccer · SciPy · scikit-learn · Jupyter · Web Scraping · Opta + SofaScore Event Data</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={cardLabel}>Links</div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="https://github.com/lhosk/soccerdata" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
            <a href="https://x.com/GukasCOL" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>@GukasCOL on X ↗</a>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={cardLabel}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>A soccer database and graphics pipeline built for the 2026 World Cup. Match stats, lineups and event-level data are scraped from SofaScore and Opta, merged into a single SQLite database, and turned into data visualizations: shot maps, touch heatmaps, pass networks, radars, scatters, bar charts, match dashboards and even pass-sequence videos.</p>
            <p style={{ marginBottom: '12px' }}>The two sources are linked automatically, including matching abbreviated Opta names like "L. Messi" to full SofaScore names. Imports are archived so re-importing never duplicates data, and when a source adds a new stat the schema evolves on its own.</p>
            <p style={{ marginBottom: '12px' }}>Everything is config-driven. Leagues, team colors and the chart palette live in JSON, so adding a new competition takes no code changes. Each chart is registered with the modes it supports (team, team vs team, player, all teams, all players), so a single render queue entry produces every relevant chart at once.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={cardLabel}>Pipeline</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px' }}>
            {steps.map((s, i) => (
              <div key={s.name}>
                <div style={{ fontFamily: fonts.mono, fontSize: '12px', color: colors.text, marginBottom: '6px' }}>{String(i + 1).padStart(2, '0')} · {s.name.toUpperCase()}</div>
                <div style={{ fontSize: '14px', color: colors.muted, lineHeight: '1.6' }}>{s.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ ...cardLabel, marginBottom: '16px' }}>Outputs</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '24px' }}>
            {gallery.map((g) => (
              <div key={g.label}>
                <div style={labelStyle}>{g.label}</div>
                <a href={g.src} target="_blank" rel="noreferrer"><img src={g.src} alt={g.label} loading="lazy" style={imgStyle} /></a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default SoccerData;
