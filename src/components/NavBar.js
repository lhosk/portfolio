import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { style_nav, style_nav_logo, style_nav_link, style_nav_link_active, colors, fonts } from './styles';

function NavBar() {
  const location = useLocation();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { label: 'HOME', path: '/' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CAREER', path: '/career' },
    { label: 'ABOUT', path: '/about' },
  ];

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formattedDate = time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <nav style={{ ...style_nav, flexDirection: 'column', height: 'auto', padding: '0' }}>
      {/* top row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 28px', height: '64px' }}>
        <div style={style_nav_logo}>LUCAS HOSKIN</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {links.map((link) => (
            <Link key={link.path} to={link.path} style={location.pathname === link.path ? style_nav_link_active : style_nav_link}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* bottom row — time */}
      <div style={{
        width: '100%',
        borderTop: `0.5px solid ${colors.border}`,
        padding: '6px 28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.06)',
      }}>
        <span style={{ fontFamily: fonts.mono, fontSize: 'clamp(12px, 1.5vw, 20px)', color: colors.muted, fontWeight: '400' }}>
          {formattedDate}
        </span>
        <span style={{ fontFamily: fonts.mono, fontSize: 'clamp(12px, 1.5vw, 20px)', color: colors.muted, fontWeight: '400' }}>
          {formattedTime}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;