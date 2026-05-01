// styles.js — shared styles for all pages

export const colors = {
  bg: '#999798',
  accent: '#FF4F00',
  text: '#1a1a1a',
  muted: '#3a3838',
  surface: 'rgba(0,0,0,0.1)',
  surface2: 'rgba(0,0,0,0.18)',
  border: 'rgba(0,0,0,0.15)',
};

export const fonts = {
  serif: "'Cochin', 'Cochin LT Std', 'Book Antiqua', 'Palatino Linotype', Georgia, serif",
  mono: "'DM Mono', monospace",
};

export const style_page_bg = {
  background: colors.bg,
  minHeight: '100vh',
  fontFamily: fonts.serif,
  fontWeight: 'bold',
  color: colors.text,
};

export const style_section = {
  padding: 'clamp(24px, 4vw, 48px) clamp(8px, 3vw, 48px)',
};

export const style_section_eyebrow = {
  fontFamily: fonts.mono,
  fontSize: '16px',
  color: colors.accent,
  letterSpacing: '2.5px',
  textTransform: 'uppercase',
  marginBottom: '10px',
};

export const style_section_title = {
  fontSize: 'clamp(24px, 3vw, 34px)',
  // fontSize: '34px',
  color: colors.text,
  marginBottom: '24px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
};

export const style_home = {
  minHeight: 'calc(100vh - 64px)',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '48px 36px 48px 80px',  // bump this last value up
};

export const style_home_eyebrow = {
  fontFamily: fonts.mono,
  fontSize: 'clamp(16px, 1.5vw, 22px)',
  color: colors.accent,
  letterSpacing: '3px',
  textTransform: 'uppercase',
  marginBottom: '16px',
};

export const style_home_name = {
  fontSize: 'clamp(36px, 5vw, 72px)',
  lineHeight: '1.05',
  color: colors.text,
  marginBottom: '16px',
};

export const style_home_subtitle = {
  fontSize: 'clamp(14px, 1.5vw, 22px)',
  color: colors.muted,
  maxWidth: '570px',
  lineHeight: '1.8',
  marginBottom: '36px',
};

export const style_home_section_label = {
  fontFamily: fonts.mono,
  fontSize: '18px',
  color: colors.muted,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginBottom: '10px',
};

export const style_home_section_line = {
  height: '2px',
  background: colors.accent,
  width: '100%',
  marginBottom: '16px',
};

export const style_home_tag = {
  fontFamily: fonts.serif,
  fontSize: '17px',
  padding: '11px 8.5px',
  borderRadius: '9px',
  border: `0.5px solid ${colors.muted}`,
  color: colors.muted,
  background: colors.surface,
  textAlign: 'center',
};

export const style_contact_btn = {
  display: 'flex',
  alignItems: 'center',
  padding: '11px 16px',
  borderRadius: '9px',
  fontSize: '17px',
  cursor: 'pointer',
  transition: 'all 0.18s',
  border: `0.5px solid ${colors.muted}`,
  background: colors.surface,
  color: colors.muted,
  fontFamily: fonts.serif,
  fontWeight: 'bold',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

// NAVBAR
export const style_nav = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 28px',
  height: '64px',
  borderBottom: `0.5px solid ${colors.border}`,
  background: 'rgba(153,151,152,0.85)',
  backdropFilter: 'blur(10px)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

export const style_nav_logo = {
  fontSize: 'clamp(8px, 2.2vw, 32px)',
  color: colors.text,
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontFamily: fonts.serif,
  fontWeight: 'bold',
};

// export const style_nav_link = {
//   padding: 'clamp(4px, 0.5vw, 6px) clamp(6px, 1vw, 14px)',
//   borderRadius: '20px',
//   fontSize: 'clamp(8px, 2vw, 24px)',
//   color: colors.muted,
//   cursor: 'pointer',
//   letterSpacing: '1px',
//   border: 'none',
//   background: 'none',
//   fontFamily: fonts.serif,
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
//   textDecoration: 'none',
// };

// export const style_nav_link_active = {
//   padding: 'clamp(4px, 0.5vw, 6px) clamp(6px, 1vw, 14px)',
//   borderRadius: '20px',
//   fontSize: 'clamp(8px, 2vw, 24px)',
//   color: '#fff',
//   background: colors.accent,
//   cursor: 'pointer',
//   letterSpacing: '1px',
//   border: 'none',
//   fontFamily: fonts.serif,
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
//   textDecoration: 'none',
// };

export const style_nav_link = {
  padding: 'clamp(4px, 0.5vw, 6px) clamp(6px, 1vw, 14px)',
  borderRadius: '20px',
  fontSize: 'clamp(12px, 2.2vw, 28px)',
  color: colors.muted,
  cursor: 'pointer',
  letterSpacing: '0px',
  border: 'none',
  background: 'none',
  fontFamily: fonts.serif,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textDecoration: 'none',
};

export const style_nav_link_active = {
  ...style_nav_link,
  color: '#fff',
  background: colors.accent,
};

// PROJECTS
export const style_filter_btn = {
  fontFamily: fonts.mono,
  fontSize: '15px',
  padding: '7px 16px',
  borderRadius: '20px',
  border: `0.5px solid ${colors.border}`,
  background: colors.surface,
  color: colors.muted,
  cursor: 'pointer',
  fontWeight: '500',
};

export const style_filter_btn_active = {
  ...style_filter_btn,
  background: colors.accent,
  color: '#fff',
  border: `0.5px solid ${colors.accent}`,
};

export const style_proj_grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: 'clamp(12px, 2vw, 32px)',
};

export const style_proj_card = {
  background: colors.surface,
  border: `0.25px solid ${colors.accent}`,
  borderRadius: '12px',
  padding: '18px',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  textDecoration: 'none',
  display: 'block',
};

export const style_proj_title = {
  fontSize: '16px',
  color: colors.text,
  lineHeight: '1.4',
  marginBottom: '6px',
};

export const style_proj_desc = {
  fontSize: '13px',
  color: colors.muted,
  lineHeight: '1.5',
  fontFamily: fonts.mono,
  fontWeight: '400',
};

// CAREER
export const style_career_label = {
  fontFamily: fonts.mono,
  fontSize: '16px',
  color: colors.accent,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  marginBottom: '12px',
};

export const style_career_item = {
  display: 'flex',
  gap: '16px',
  padding: '14px 0',
  borderBottom: `0.5px solid ${colors.border}`,
};

export const style_career_year = {
  fontFamily: fonts.mono,
  fontSize: '14px',
  color: colors.muted,
  minWidth: '110px',
  paddingTop: '2px',
  fontWeight: '400',
};

export const style_career_role = {
  fontSize: '18px',
  color: colors.text,
  marginBottom: '3px',
};

export const style_career_place = {
  fontSize: '15px',
  color: colors.muted,
  fontFamily: fonts.mono,
  fontWeight: '400',
  marginBottom: '6px',
};

export const style_skill_group = {
  background: colors.surface,
  border: `0.5px solid ${colors.border}`,
  borderRadius: '12px',
  padding: '14px',
};

export const style_skill_group_title = {
  fontFamily: fonts.mono,
  fontSize: '13px',
  color: colors.text,
  marginBottom: '8px',
  letterSpacing: '1px',
};

export const style_chip = {
  fontFamily: fonts.mono,
  fontSize: '13px',
  padding: '5px 10px',
  borderRadius: '4px',
  background: 'rgba(0,0,0,0.12)',
  color: colors.muted,
  border: `0.5px solid ${colors.border}`,
  fontWeight: '400',
};

export const style_cert_item = {
  background: colors.surface,
  border: `0.5px solid ${colors.border}`,
  borderRadius: '12px',
  padding: '12px 14px',
};

// ABOUT
export const style_about_text = {
  fontSize: '17px',
  color: colors.muted,
  lineHeight: '1.8',
};

export const style_sidebar_card = {
  background: colors.surface,
  border: `0.5px solid ${colors.border}`,
  borderRadius: '12px',
  padding: '16px',
};

export const style_sidebar_card_title = {
  fontFamily: fonts.mono,
  fontSize: '13px',
  color: colors.accent,
  marginBottom: '10px',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
};
