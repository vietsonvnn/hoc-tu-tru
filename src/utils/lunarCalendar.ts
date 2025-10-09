// Lunar Calendar Conversion - Simplified version
// For production, consider using libraries like lunar-javascript or moment-lunar

export interface LunarDate {
  day: number;
  month: number;
  year: number;
  isLeapMonth: boolean;
}

// Simplified lunar calendar conversion (basic approximation)
// This is a simplified version - for accurate conversion, use a proper library
export function solarToLunar(
  solarYear: number,
  solarMonth: number,
  solarDay: number
): LunarDate {
  // This is a simplified approximation
  // In production, use a proper lunar calendar library

  // Approximate offset (lunar calendar is typically 30-45 days behind solar)
  const approxOffset = 30;

  const solarDate = new Date(solarYear, solarMonth - 1, solarDay);
  const lunarDate = new Date(solarDate.getTime() - approxOffset * 24 * 60 * 60 * 1000);

  return {
    day: lunarDate.getDate(),
    month: lunarDate.getMonth() + 1,
    year: lunarDate.getFullYear(),
    isLeapMonth: false
  };
}

// Get Lunar Month (1-12)
export function getLunarMonth(solarYear: number, solarMonth: number, solarDay: number): number {
  const lunar = solarToLunar(solarYear, solarMonth, solarDay);
  return lunar.month;
}

// Get Lunar Year
export function getLunarYear(solarYear: number, solarMonth: number, solarDay: number): number {
  const lunar = solarToLunar(solarYear, solarMonth, solarDay);
  return lunar.year;
}

// Note: For accurate lunar calendar conversion, install and use:
// npm install lunar-javascript
// or use a dedicated lunar calendar API
