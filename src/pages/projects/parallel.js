import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";
import parallel1 from "../../assets/images/parallel1.png";
import parallel2 from "../../assets/images/parallel2.png";

function Parallel() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Parallel Computing</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>C++ · OpenMP · Pthreads · Parallel Computing · Numerical Integration · Performance Optimization · SLURM · HPC</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>Explores high-performance parallel computing using OpenMP and Pthreads to measure runtime efficiency and thread-level performance. My first multi-threaded project on an HPC cluster.</p>
            <p style={{ marginBottom: '12px' }}>Each implementation computes a numerical integration task, dividing work among multiple threads to compare execution time, synchronization, and scheduling strategies. All jobs were run via Slurm on the UNCC HPC using Bash, WinSCP, and PuTTY.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Results</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img src={parallel1} alt="OpenMP Performance" style={{ width: '100%', maxWidth: '700px', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
            <img src={parallel2} alt="Pthreads Performance" style={{ width: '100%', maxWidth: '700px', borderRadius: '12px', display: 'block', margin: '0 auto' }} />
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <a href="https://github.com/lhosk/Parallel-Computing" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Parallel;
