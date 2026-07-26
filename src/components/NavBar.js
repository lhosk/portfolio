import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { style_nav, style_nav_logo, style_nav_link, style_nav_link_active, colors, fonts } from './styles';

function NavBar() {
  const location = useLocation();
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const links = [
    { label: 'HOME', path: '/' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'PAPERS', path: '/papers' },
    { label: 'CAREER', path: '/career' },
    { label: 'ABOUT', path: '/about' },
    // { label: 'PHOTOS', path: '/photos' },
    // { label: 'COMPANY', path: '/company' },
    // { label: 'SOCCER', path: '/soccer' },
  ];

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formattedDate = time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });

  const barLine = { display: 'block', width: '24px', height: '2px', background: colors.text, transition: 'all 0.3s' };
  const timeStyle = { fontFamily: fonts.mono, fontSize: 'clamp(12px, 1.5vw, 20px)', color: colors.muted, fontWeight: '400' };

  return (
    <>
      <nav style={{ ...style_nav, flexDirection: 'column', height: 'auto', padding: '0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 28px', height: '64px' }}>
          <div style={style_nav_logo}>LUCAS HOSKIN</div>

          {!isMobile && (
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {links.map((link) => (
                <Link key={link.path} to={link.path} style={location.pathname === link.path ? style_nav_link_active : style_nav_link}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ ...barLine, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ ...barLine, opacity: menuOpen ? 0 : 1 }} />
              <span style={{ ...barLine, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          )}
        </div>

        <div style={{ width: '100%', borderTop: `0.5px solid ${colors.border}`, padding: '6px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.06)' }}>
          <span style={timeStyle}>{formattedDate}</span>
          <span style={timeStyle}>{formattedTime}</span>
        </div>
      </nav>

      {isMobile && menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 999, background: colors.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu"
            style={{ position: 'absolute', top: '20px', right: '28px', background: 'none', border: 'none', fontSize: '28px', color: colors.text, cursor: 'pointer', fontFamily: fonts.mono }}>
            ✕
          </button>
          {links.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none', fontFamily: fonts.serif, fontWeight: 'bold', fontSize: '22px',
                letterSpacing: '2px', textTransform: 'uppercase', padding: '12px 24px', borderRadius: '8px',
                color: location.pathname === link.path ? '#fff' : colors.muted,
                background: location.pathname === link.path ? colors.accent : 'transparent',
              }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default NavBar;