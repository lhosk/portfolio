import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  style_section,
  style_section_title,
  style_back_link,
  style_eyebrow,
  style_card,
  style_card_label,
  style_prose,
  style_chip,
  style_link_btn,
  style_list_item,
  langColors,
  colors,
  fonts,
  fluid,
} from './styles';
import { findEntry } from '../data/projects';

export function StatusBadge({ children }) {
  return (
    <span style={{
      fontFamily: fonts.mono, fontSize: '10.5px', fontWeight: 500, letterSpacing: '1.2px', textTransform: 'uppercase',
      color: colors.accentInk, background: colors.accentSoft, border: `1px solid rgba(209,66,0,0.35)`,
      borderRadius: '999px', padding: '2px 8px', whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  );
}

// back link + eyebrow on one row, then the title and anything else (chips, buttons)
export function PageHeader({ back, eyebrow, eyebrowColor, status, title, children }) {
  return (
    <header style={{ marginBottom: 'clamp(12px, 1.6vw, 18px)' }}>
      {(back || eyebrow || status) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px 12px', flexWrap: 'wrap', marginBottom: '6px' }}>
          {back && (
            <Link to={back.to} className="hover-ink" style={style_back_link}>
              <span className="arrow-back">←</span> {back.label}
            </Link>
          )}
          {back && eyebrow && <span aria-hidden="true" style={{ width: '1px', height: '11px', background: colors.borderStrong }} />}
          {eyebrow && <span style={{ ...style_eyebrow, color: eyebrowColor || colors.accentInk }}>{eyebrow}</span>}
          {status && <StatusBadge>{status}</StatusBadge>}
        </div>
      )}
      <h1 style={style_section_title}>{title}</h1>
      {children && <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>{children}</div>}
    </header>
  );
}

export function Card({ label, children, style }) {
  return (
    <section style={{ ...style_card, ...style }}>
      {label && <h2 style={style_card_label}>{label}</h2>}
      {children}
    </section>
  );
}

export function Prose({ children }) {
  return <div className="prose" style={style_prose}>{children}</div>;
}

export function Chips({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      {items.map((c) => <span key={c} style={style_chip}>{c}</span>)}
    </div>
  );
}

export function LinkButtons({ links }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="hover-darken" style={style_link_btn}>
          {l.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

export function BulletList({ items }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map((t, i) => (
        <li key={i} style={style_list_item}>
          <span style={{ color: colors.accent, flexShrink: 0 }}>–</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

const s_caption = {
  fontFamily: fonts.mono, fontSize: '11.5px', fontWeight: 400, color: colors.muted,
  textAlign: 'center', lineHeight: '1.4', marginTop: '6px',
};

// click-through image, shown at natural size up to the column width (and 400px tall)
export function Figure({ src, alt, caption, maxHeight = '400px' }) {
  return (
    <figure style={{ margin: 0 }}>
      <a href={src} target="_blank" rel="noreferrer" title="Open full size" style={{ display: 'block' }}>
        <img src={src} alt={alt} loading="lazy"
          style={{ display: 'block', maxWidth: '100%', maxHeight, height: 'auto', margin: '0 auto', borderRadius: '8px', border: `1px solid ${colors.border}`, cursor: 'zoom-in' }} />
      </a>
      {caption && <figcaption style={s_caption}>{caption}</figcaption>}
    </figure>
  );
}

export function FigureGrid({ min = 340, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`, gap: '16px 14px', alignItems: 'start' }}>
      {children}
    </div>
  );
}

export function Video({ src, caption }) {
  return (
    <figure style={{ margin: 0 }}>
      <video src={src} controls preload="metadata" playsInline
        style={{ display: 'block', width: '100%', maxWidth: '720px', margin: '0 auto', borderRadius: '8px', background: '#000' }} />
      {caption && <figcaption style={s_caption}>{caption}</figcaption>}
    </figure>
  );
}

export function Chevron({ open, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true"
      style={{ flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
      <path d="M3.5 6l4.5 4.5L12.5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Layout for every project / paper / demo write-up.
// The header (back link, language, year, "next" card) comes from data/projects.js by path.
function DetailPage({ title, stack, links = [], children }) {
  const { pathname } = useLocation();
  const entry = findEntry(pathname);
  const item = entry?.item;

  return (
    <main style={style_section}>
      <PageHeader
        back={entry?.back}
        eyebrow={item && `${item.lang} · ${item.year}`}
        eyebrowColor={item && langColors[item.lang]?.ink}
        status={item?.status}
        title={title}>
        {stack && <Chips items={stack.split(' · ')} />}
        {links.length > 0 && <LinkButtons links={links} />}
      </PageHeader>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {children}
      </div>

      {entry?.next && (
        <Link to={entry.next.path} className="hover-lift"
          style={{ ...style_card, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', textDecoration: 'none', color: colors.text, marginTop: '14px' }}>
          <div>
            <div style={style_card_label}>{entry.nextLabel}</div>
            <div style={{ fontSize: fluid(13.5, 16), lineHeight: '1.3', textTransform: 'uppercase', letterSpacing: '1px' }}>{entry.next.title}</div>
          </div>
          <span className="arrow" aria-hidden="true" style={{ color: colors.accent, fontSize: '20px', fontFamily: fonts.mono }}>→</span>
        </Link>
      )}
    </main>
  );
}

export default DetailPage;
