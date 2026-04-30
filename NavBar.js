import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { style_nav, style_nav_logo, style_nav_link, style_nav_link_active } from './styles';

function NavBar() {
  const location = useLocation();

  const links = [
    { label: 'HOME', path: '/' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CAREER', path: '/career' },
    { label: 'ABOUT', path: '/about' },
  ];

  return (
    <nav style={style_nav}>
      <div style={style_nav_logo}>LUCAS HOSKIN</div>
      <div style={{ display: 'flex', gap: '4px' }}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={location.pathname === link.path ? style_nav_link_active : style_nav_link}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
