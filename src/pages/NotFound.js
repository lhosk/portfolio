import React from 'react';
import { Link } from 'react-router-dom';
import { style_section, style_link_btn } from '../components/styles';
import { PageHeader } from '../components/DetailPage';

function NotFound() {
  return (
    <main style={style_section}>
      <PageHeader eyebrow="404" title="Page not found" />
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Link to="/" className="hover-darken" style={style_link_btn}>Home</Link>
        <Link to="/projects" className="hover-darken" style={style_link_btn}>Projects</Link>
        <Link to="/photos" className="hover-darken" style={style_link_btn}>Photos</Link>
      </div>
    </main>
  );
}

export default NotFound;
