import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { style_nav, style_nav_inner, style_nav_logo, style_nav_link, style_nav_link_active, colors, fonts } from './styles';
import { useIsNarrow } from './hooks';
import { navLinks, socials } from '../data/site';
import LocalTime from './LocalTime';

function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsNarrow(760);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // lock page scroll and listen for Escape while the menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path + '/'));

  const barLine = { display: 'block', width: '20px', height: '2px', borderRadius: '1px', background: colors.text, transition: 'transform 0.25s, opacity 0.2s' };
  const mobileLinks = [{ label: 'Home', path: '/' }, ...navLinks];

  return (
    <>
      <header style={style_nav}>
        <div style={style_nav_inner}>
          <Link to="/" style={style_nav_logo} aria-label="Lucas Hoskin, home" onClick={() => setMenuOpen(false)}>
            LUCAS HOSKIN<span style={{ color: colors.accent }}>.</span>
          </Link>

          {!isMobile && (
            <nav aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px, 2vw, 28px)' }}>
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link key={link.path} to={link.path} className={`nav-link${active ? ' active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                    style={active ? style_nav_link_active : style_nav_link}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px', marginRight: '-10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ ...barLine, transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
              <span style={{ ...barLine, opacity: menuOpen ? 0 : 1 }} />
              <span style={{ ...barLine, transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
            </button>
          )}
        </div>
      </header>

      {isMobile && menuOpen && (
        <div style={{ position: 'fixed', top: '54px', left: 0, right: 0, bottom: 0, zIndex: 999, background: colors.bg, overflowY: 'auto', display: 'flex', flexDirection: 'column', padding: '4px 16px 20px', animation: 'fade-in 0.2s ease' }}>
          <nav aria-label="Main" style={{ display: 'flex', flexDirection: 'column' }}>
            {mobileLinks.map((link, i) => {
              const active = isActive(link.path);
              return (
                <Link key={link.path} to={link.path} onClick={() => setMenuOpen(false)} aria-current={active ? 'page' : undefined}
                  style={{
                    display: 'flex', alignItems: 'baseline', gap: '12px', padding: '11px 0',
                    borderBottom: `1px solid ${colors.border}`, textDecoration: 'none',
                    fontFamily: fonts.serif, fontWeight: 'bold', fontSize: '19px', letterSpacing: '1.2px', textTransform: 'uppercase',
                    color: active ? colors.accent : colors.text,
                  }}>
                  <span style={{ fontFamily: fonts.mono, fontSize: '11px', fontWeight: 500, letterSpacing: '1px', color: active ? colors.accentInk : colors.faint }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: '20px', fontFamily: fonts.mono, fontSize: '12px', fontWeight: 400, color: colors.muted, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ color: colors.accentInk, textDecoration: 'none', fontWeight: 500 }}>{s.label} ↗</a>
              ))}
            </div>
            <div>Raleigh, NC · <LocalTime /></div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
