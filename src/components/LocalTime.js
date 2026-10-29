import React from 'react';
import { useNow } from './hooks';

// live time in Raleigh, e.g. "2:20:31 PM EDT"
function LocalTime() {
  const now = useNow();
  return (
    <span style={{ fontVariantNumeric: 'tabular-nums' }}>
      {now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit', second: '2-digit', timeZoneName: 'short',
      })}
    </span>
  );
}

export default LocalTime;
