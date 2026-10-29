import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { colors, fonts } from '../../components/styles';
import { useIsNarrow } from '../../components/hooks';
import { MONTHS, fmtHour, fmtShutter, thumbUrl, fullUrl } from './format';

const s_overlay = {
  position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(28,22,16,0.6)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
  backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', animation: 'fade-in 0.2s ease',
};

const s_modal = {
  display: 'flex', flexWrap: 'nowrap', maxWidth: '94vw', maxHeight: '92vh', background: '#fdfcf9',
  padding: 'clamp(10px, 1.5vw, 20px)', overflowY: 'auto', WebkitOverflowScrolling: 'touch', outline: 'none',
  boxShadow: '0 30px 80px -20px rgba(0,0,0,0.45)',
};

const s_meta = {
  fontFamily: fonts.mono, fontSize: '12px', fontWeight: 400, color: colors.muted, lineHeight: '1.75', flex: '0 0 auto',
};

const s_navBtn = {
  fontFamily: fonts.mono, fontSize: '11.5px', fontWeight: 500, letterSpacing: '1px', color: colors.accentInk,
  background: 'none', border: 'none', padding: '4px 0', cursor: 'pointer',
};

// Full-size viewer. Arrow keys / swipe step through the photos currently shown in the grid.
function PhotoModal({ photos, index, onClose, onStep }) {
  const p = photos[index];
  const isMobile = useIsNarrow(700);
  const panelRef = useRef(null);
  const touchX = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onStep(1);
      else if (e.key === 'ArrowLeft') onStep(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onStep]);

  useEffect(() => { panelRef.current?.focus(); }, []);

  // warm the cache so stepping feels instant
  useEffect(() => {
    if (photos.length < 2) return;
    [1, -1].forEach((d) => {
      new Image().src = fullUrl(photos[(index + d + photos.length) % photos.length].file);
    });
  }, [index, photos]);

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
  };

  const place = [p.city, p.state, p.country].filter(Boolean).join(', ');

  return createPortal(
    <div style={s_overlay} onClick={onClose}>
      <div ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={p.caption || 'Photo'}
        onClick={(e) => e.stopPropagation()} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        style={{ ...s_modal, flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center', gap: isMobile ? '10px' : '20px' }}>
        <div style={{ flex: '0 1 auto', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
          {/* the cached thumbnail sits underneath until the full image paints over it */}
          <img key={p.file} src={fullUrl(p.file)} alt={p.caption || p.file}
            style={{
              display: 'block', width: 'auto', height: 'auto',
              maxWidth: isMobile ? '84vw' : '62vw', maxHeight: isMobile ? '56vh' : '80vh',
              background: `url(${thumbUrl(p.file)}) center / cover no-repeat`,
            }} />
        </div>

        <div style={{ ...s_meta, width: isMobile ? '100%' : '210px' }}>
          {p.caption && (
            <div style={{ fontFamily: fonts.serif, fontWeight: 'bold', fontSize: isMobile ? '15px' : '17px', lineHeight: '1.3', color: colors.text, marginBottom: '6px' }}>
              {p.caption}
            </div>
          )}
          {place && <div style={{ color: colors.accentInk, fontWeight: 500 }}>{place}</div>}
          {p.year && <div>{MONTHS[p.month]} {p.year}{p.hour != null ? ` · ${fmtHour(p.hour)}` : ''}</div>}
          <div style={{ height: '1px', background: colors.border, margin: '8px 0' }} />
          <div>{p.camera === 'Unknown' ? 'No camera info' : p.camera}</div>
          {p.focal != null && <div>{p.focal}mm</div>}
          {p.fstop != null && <div>f/{p.fstop}</div>}
          {p.shutter != null && <div>{fmtShutter(p.shutter)}</div>}
          {p.iso != null && <div>ISO {p.iso}</div>}

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '4px 12px', marginTop: '10px', paddingTop: '8px', borderTop: `1px solid ${colors.border}` }}>
            {photos.length > 1 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <button className="hover-ink" style={s_navBtn} onClick={() => onStep(-1)} aria-label="Previous photo">← PREV</button>
                <span style={{ color: colors.faint, fontVariantNumeric: 'tabular-nums' }}>{index + 1}/{photos.length}</span>
                <button className="hover-ink" style={s_navBtn} onClick={() => onStep(1)} aria-label="Next photo">NEXT →</button>
              </div>
            )}
            <button className="hover-ink" style={s_navBtn} onClick={onClose}>CLOSE ✕</button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default PhotoModal;
