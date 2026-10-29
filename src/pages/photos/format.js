// format.js — shared helpers for the photo page

export const MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const thumbUrl = (file) => `${process.env.PUBLIC_URL}/photos/thumb/${file}`;
export const fullUrl = (file) => `${process.env.PUBLIC_URL}/photos/full/${file}`;

export const fmtShutter = (s) => {
  if (s == null) return null;
  return s >= 1 ? `${s}s` : `1/${Math.round(1 / s)}s`;
};

// 13.5 -> "1:30 PM", 24 -> "12:00 AM" (midnight at the end of the range)
export const fmtHour = (h) => {
  const total = Math.round(h * 60);
  const hr = Math.floor(total / 60) % 24;
  const min = total % 60;
  const ampm = hr >= 12 ? 'PM' : 'AM';
  const h12 = hr % 12 === 0 ? 12 : hr % 12;
  return `${h12}:${String(min).padStart(2, '0')} ${ampm}`;
};

export const uniq = (arr) => [...new Set(arr.filter((v) => v != null && v !== ''))]
  .sort((a, b) => (typeof a === 'number' && typeof b === 'number') ? a - b : String(a).localeCompare(String(b)));
