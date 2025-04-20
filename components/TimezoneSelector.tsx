'use client';

import React from 'react';

type TimezoneSelectorProps = {
  value: string;
  onChange: (timezone: string) => void;
};

const TIMEZONES = [
  "Etc/UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Tokyo",
  "Asia/Hong_Kong",
  "Australia/Sydney",
  "New Zealand/Auckland"
  // Add more as needed
];

export default function TimezoneSelector({ value, onChange }: TimezoneSelectorProps) {
  return (
    <label>
      Timezone:
      <select value={value} onChange={e => onChange(e.target.value)}>
        {TIMEZONES.map(tz => (
          <option key={tz} value={tz}>
            {tz}
          </option>
        ))}
      </select>
    </label>
  );
}
