// styles.js — shared styles for all pages

export const colors = {
  bg: '#ebe5da',
  navBg: 'rgba(235,229,218,0.86)',
  surface: '#f8f5ef',                // cards sit lighter than the page
  surface2: 'rgba(74,54,34,0.06)',   // inset fills: chips, equations
  border: 'rgba(74,54,34,0.16)',
  borderStrong: 'rgba(74,54,34,0.32)',
  accent: '#d14200',                 // fills, lines, hovers
  accentInk: '#b03800',              // accent for small text (AA on bg)
  accentSoft: 'rgba(209,66,0,0.09)',
  text: '#1c1814',
  muted: '#4a433b',
  faint: '#6b6257',
};

export const fonts = {
  serif: "'Cochin', 'Cochin LT Std', 'Book Antiqua', 'Palatino Linotype', Georgia, serif",
  mono: "'DM Mono', monospace",
};

// size that scales from `min` px on a 390px-wide phone to `max` px on a 1440px-wide desktop
export const fluid = (min, max) => `clamp(${min}px, calc(${min}px + ${max - min} * (100vw - 390px) / 1050), ${max}px)`;

// bar = card stripe, ink = readable text on the page bg
export const langColors = {
  Python:     { bar: '#4b8bbe', ink: '#2f6593' },
  'C++':      { bar: '#003464', ink: '#003464' },
  MATLAB:     { bar: '#8d0e25', ink: '#8d0e25' },
  JavaScript: { bar: '#c9a900', ink: '#725d00' },
};

// LAYOUT
export const style_page_bg = {
  background: colors.bg,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: fonts.serif,
  fontWeight: 'bold',
  color: colors.text,
};

export const style_container = {
  width: '100%',
  maxWidth: '1600px',
  margin: '0 auto',
  padding: '0 clamp(12px, 2.5vw, 32px)',
};

export const style_section = {
  ...style_container,
  flex: 1,
  paddingTop: 'clamp(14px, 2vw, 24px)',
  paddingBottom: 'clamp(28px, 4vw, 44px)',
};

export const style_eyebrow = {
  fontFamily: fonts.mono,
  fontSize: fluid(10.5, 11.5),
  fontWeight: 500,
  color: colors.accentInk,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
};

export const style_section_title = {
  fontSize: fluid(19, 26),
  lineHeight: '1.15',
  color: colors.text,
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

export const style_back_link = {
  fontFamily: fonts.mono,
  fontSize: fluid(10.5, 11.5),
  fontWeight: 500,
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: colors.accentInk,
  textDecoration: 'none',
};

// CARDS
export const style_card = {
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: '10px',
  padding: 'clamp(12px, 1.3vw, 18px)',
  boxShadow: '0 1px 2px rgba(74,54,34,0.05)',
};

export const style_card_label = {
  ...style_eyebrow,
  fontSize: fluid(10, 11),
  marginBottom: '8px',
};

export const style_prose = {
  fontSize: fluid(13.5, 15.5),
  fontWeight: 'normal',
  color: colors.muted,
  lineHeight: '1.6',
};

export const style_chip = {
  fontFamily: fonts.mono,
  fontSize: fluid(10.5, 11.5),
  fontWeight: 400,
  lineHeight: '1.3',
  padding: '3px 8px',
  borderRadius: '5px',
  background: colors.surface2,
  color: colors.muted,
  border: `1px solid ${colors.border}`,
};

// solid orange button for outbound links (GitHub, slides, PDFs)
export const style_link_btn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: fonts.mono,
  fontSize: fluid(11, 12),
  fontWeight: 500,
  letterSpacing: '0.5px',
  padding: `${fluid(5, 6)} ${fluid(10, 12)}`,
  borderRadius: '7px',
  border: `1px solid ${colors.accent}`,
  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.45)',
  background: colors.accent,
  color: '#fff',
  textDecoration: 'none',
  cursor: 'pointer',
};

// HOME
export const style_home = {
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  padding: 'clamp(20px, 3vw, 40px) 0',
};

export const style_home_eyebrow = {
  fontFamily: fonts.mono,
  fontSize: fluid(11.5, 14),
  fontWeight: 500,
  color: colors.accentInk,
  letterSpacing: '2.5px',
  textTransform: 'uppercase',
  marginBottom: '10px',
};

export const style_home_name = {
  fontSize: 'clamp(26px, 8.5cqw, 58px)',
  whiteSpace: 'nowrap',
  lineHeight: '1.05',
  color: colors.text,
  marginBottom: '10px',
};

export const style_home_subtitle = {
  fontSize: fluid(13.5, 16.5),
  fontWeight: 'normal',
  color: colors.muted,
  maxWidth: 'min(540px, 100%)',
  lineHeight: '1.6',
  marginBottom: '20px',
};

export const style_home_section_label = {
  fontFamily: fonts.mono,
  fontSize: fluid(11, 12),
  fontWeight: 500,
  color: colors.muted,
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  marginBottom: '6px',
};

export const style_home_section_line = {
  height: '2px',
  background: colors.accent,
  width: '100%',
  marginBottom: '10px',
};

export const style_home_tag = {
  fontFamily: fonts.serif,
  fontSize: fluid(12, 14),
  padding: `${fluid(3, 4)} ${fluid(8, 9)}`,
  borderRadius: '7px',
  border: `1px solid ${colors.border}`,
  color: colors.text,
  background: colors.surface,
  textAlign: 'center',
};

export const style_contact_btn = {
  display: 'flex',
  alignItems: 'center',
  padding: `${fluid(5, 6)} ${fluid(10, 12)}`,
  borderRadius: '8px',
  fontSize: fluid(11.5, 12.5),
  cursor: 'pointer',
  border: `1px solid ${colors.borderStrong}`,
  background: colors.surface,
  color: colors.text,
  fontFamily: fonts.serif,
  fontWeight: 'bold',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '1.2px',
};

export const style_home_card = {
  display: 'block',
  textDecoration: 'none',
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: '10px',
  padding: '10px 12px',
  color: colors.text,
};

export const style_home_card_title = {
  fontSize: fluid(13, 15),
  color: colors.text,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '2px',
};

export const style_home_card_desc = {
  fontFamily: fonts.mono,
  fontSize: fluid(11, 12),
  color: colors.muted,
  fontWeight: 400,
  lineHeight: '1.45',
};

// NAVBAR
export const style_nav = {
  height: '54px',
  borderBottom: `1px solid ${colors.border}`,
  background: colors.navBg,
  backdropFilter: 'saturate(1.4) blur(12px)',
  WebkitBackdropFilter: 'saturate(1.4) blur(12px)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

export const style_nav_inner = {
  ...style_container,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const style_nav_logo = {
  fontSize: fluid(15, 18),
  color: colors.text,
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
  fontFamily: fonts.serif,
  fontWeight: 'bold',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};

export const style_nav_link = {
  fontSize: '13px',
  color: colors.muted,
  letterSpacing: '1.2px',
  fontFamily: fonts.serif,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '4px 0',
};

export const style_nav_link_active = {
  ...style_nav_link,
  color: colors.text,
};

// PROJECTS + PAPERS
export const style_filter_btn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: fonts.mono,
  fontSize: fluid(11, 12),
  fontWeight: 500,
  lineHeight: '1.2',
  padding: `${fluid(3, 4)} ${fluid(8, 10)}`,
  borderRadius: '999px',
  border: `1px solid ${colors.border}`,
  background: colors.surface,
  color: colors.muted,
  cursor: 'pointer',
  transition: 'background-color 0.15s, border-color 0.15s, color 0.15s, opacity 0.15s',
};

export const style_filter_btn_active = {
  ...style_filter_btn,
  border: `1px solid ${colors.accent}`,
  background: colors.accent,
  color: '#fff',
};

export const style_proj_grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
  gap: 'clamp(8px, 1vw, 14px)',
  alignItems: 'stretch',
};

export const style_proj_card = {
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: '10px',
  padding: `${fluid(10, 13)} ${fluid(11, 14)} ${fluid(10, 12)}`,
  position: 'relative',
  overflow: 'hidden',
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  color: colors.text,
};

export const style_proj_title = {
  fontSize: fluid(13.5, 14.5),
  color: colors.text,
  lineHeight: '1.3',
  marginBottom: '5px',
};

export const style_proj_desc = {
  fontSize: fluid(11, 11.5),
  color: colors.muted,
  lineHeight: '1.5',
  fontFamily: fonts.mono,
  fontWeight: 400,
};

// CAREER
export const style_career_item = {
  display: 'grid',
  gridTemplateColumns: '150px 1fr',
  gap: '14px',
  padding: '10px 0',
  borderBottom: `1px solid ${colors.border}`,
};

export const style_career_year = {
  fontFamily: fonts.mono,
  fontSize: fluid(11, 12),
  color: colors.faint,
  paddingTop: '3px',
  fontWeight: 400,
};

export const style_career_role = {
  fontSize: fluid(13.5, 16),
  color: colors.text,
  marginBottom: '2px',
};

export const style_career_place = {
  fontSize: fluid(11.5, 12.5),
  color: colors.muted,
  fontFamily: fonts.mono,
  fontWeight: 400,
  marginBottom: '4px',
};

export const style_list_item = {
  display: 'flex',
  gap: '8px',
  fontFamily: fonts.mono,
  fontSize: fluid(11.5, 12.5),
  color: colors.muted,
  fontWeight: 400,
  lineHeight: '1.5',
  padding: '1px 0',
};

// ABOUT
export const style_about_text = {
  ...style_prose,
  fontSize: fluid(13.5, 15.5),
};
