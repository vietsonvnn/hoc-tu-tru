// Bazi (Four Pillars) Calculator - Accurate Implementation
// Based on algorithms from alvamind/bazi-calculator and tommitoan/bazica
import type { ThienCanType, DiaChiType } from '../types';
import { getLunarNewYear } from '../data/lunarNewYear';
import { getMonthBranchFromDate } from '../data/solarTerms';

// Thiên Can array (Heavenly Stems)
const THIEN_CAN: ThienCanType[] = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];

// Địa Chi array (Earthly Branches)
const DIA_CHI: DiaChiType[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

export interface BaziPillar {
  can: ThienCanType;
  chi: DiaChiType;
}

export interface BaziChart {
  year: BaziPillar;
  month: BaziPillar;
  day: BaziPillar;
  hour: BaziPillar;
  menhCung?: DiaChiType;
  thanCung?: DiaChiType;
}

// ==============================================
// YEAR PILLAR CALCULATION (NĂM CAN CHI)
// ==============================================
// CRITICAL: Year changes at Lunar New Year, not January 1

export function getYearPillar(solarDate: Date): BaziPillar {
  let lunarYear = solarDate.getFullYear();

  // Check if before Lunar New Year → use previous year
  try {
    const lunarNewYear = getLunarNewYear(lunarYear);
    if (solarDate < lunarNewYear) {
      lunarYear -= 1;
    }
  } catch {
    // If lunar new year data not available, approximate
    const approxLNY = new Date(lunarYear, 1, 1); // ~Feb 1
    if (solarDate < approxLNY) {
      lunarYear -= 1;
    }
  }

  // Calculate Heavenly Stem: (year - 3) % 10
  let stemValue = (lunarYear - 3) % 10;
  if (stemValue <= 0) stemValue += 10;
  const yearCan = THIEN_CAN[stemValue - 1];

  // Calculate Earthly Branch: (year - 3) % 12
  let branchValue = (lunarYear - 3) % 12;
  if (branchValue <= 0) branchValue += 12;
  const yearChi = DIA_CHI[branchValue - 1];

  return { can: yearCan, chi: yearChi };
}

// ==============================================
// MONTH PILLAR CALCULATION (THÁNG CAN CHI)
// ==============================================
// CRITICAL: Month changes at Solar Terms, not on 1st day

// Five Tigers Rule (Ngũ Hổ Độn) - Get first month stem
function getStemRuleByFiveTigers(yearStemValue: number): number {
  switch(yearStemValue) {
    case 1: case 6:  return 3;  // Giáp/Kỷ years → Bính (index 3)
    case 2: case 7:  return 5;  // Ất/Canh years → Mậu (index 5)
    case 3: case 8:  return 7;  // Bính/Tân years → Canh (index 7)
    case 4: case 9:  return 9;  // Đinh/Nhâm years → Nhâm (index 9)
    case 5: case 10: return 1;  // Mậu/Quý years → Giáp (index 1)
    default: return 3;
  }
}

export function getMonthPillar(solarDate: Date, yearCan: ThienCanType): BaziPillar {
  const month = solarDate.getMonth() + 1; // 1-12
  const day = solarDate.getDate();

  // Get month branch from solar term
  const monthBranch = getMonthBranchFromDate(month, day);
  const monthBranchValue = DIA_CHI.indexOf(monthBranch as DiaChiType) + 1;

  // Calculate month stem using Five Tigers Rule
  const yearStemValue = THIEN_CAN.indexOf(yearCan) + 1;
  const firstMonthStem = getStemRuleByFiveTigers(yearStemValue);

  // First month is 寅 (Dần, value 3), calculate offset from there
  let monthStemValue = (firstMonthStem - 1) + (monthBranchValue - 3);
  while (monthStemValue < 0) monthStemValue += 10;
  while (monthStemValue >= 10) monthStemValue -= 10;

  const monthCan = THIEN_CAN[monthStemValue];
  const monthChi = monthBranch as DiaChiType;

  return { can: monthCan, chi: monthChi };
}

// ==============================================
// DAY PILLAR CALCULATION (NHẬT CAN CHI)
// ==============================================
// CRITICAL: Use day count from reference date (Jan 1, 1900 = 甲子)

// Calculate days since reference date
function daysBetween(date1: Date, date2: Date): number {
  const oneDay = 1000 * 60 * 60 * 24;
  const diff = date2.getTime() - date1.getTime();
  return Math.floor(diff / oneDay);
}

export function getDayPillar(solarDate: Date): BaziPillar {
  // Reference: Jan 1, 1900 = 甲子 day (Giáp Tý)
  const referenceDate = new Date(1900, 0, 1, 0, 0, 0);

  // Adjust for day starting at 23:00 (11 PM)
  const adjustedDate = new Date(solarDate.getTime() + 3600000); // +1 hour for calculation

  // Calculate days difference
  const daysDiff = daysBetween(referenceDate, adjustedDate);

  // Calculate Stem: (daysDiff + 1) % 10
  let stemValue = (daysDiff + 1) % 10;
  if (stemValue === 0) stemValue = 10;
  const dayCan = THIEN_CAN[stemValue - 1];

  // Calculate Branch: (daysDiff - 1) % 12 (corrected offset)
  let branchValue = (daysDiff - 1) % 12;
  if (branchValue <= 0) branchValue += 12;
  const dayChi = DIA_CHI[branchValue - 1];

  return { can: dayCan, chi: dayChi };
}

// Alternative accurate method using Julian Day Number
export function getDayCanChi(year: number, month: number, day: number): BaziPillar {
  const date = new Date(year, month - 1, day);
  return getDayPillar(date);
}

// ==============================================
// HOUR PILLAR CALCULATION (GIỜ CAN CHI)
// ==============================================

// Get Hour Branch from hour (0-23)
export function getHourChi(hour: number): DiaChiType {
  // Hour to branch mapping:
  // 23-1: Tý, 1-3: Sửu, 3-5: Dần, etc.
  const chiIndex = Math.floor((hour + 1) / 2) % 12;
  return DIA_CHI[chiIndex];
}

// Five Rats Rule (Ngũ Tý Độn) - Get first hour (子) stem
function getStemRuleByFiveRats(dayStemValue: number): number {
  switch(dayStemValue) {
    case 1: case 6:  return 1;  // Giáp/Kỷ days → Giáp Tý (index 1)
    case 2: case 7:  return 3;  // Ất/Canh days → Bính Tý (index 3)
    case 3: case 8:  return 5;  // Bính/Tân days → Mậu Tý (index 5)
    case 4: case 9:  return 7;  // Đinh/Nhâm days → Canh Tý (index 7)
    case 5: case 10: return 9;  // Mậu/Quý days → Nhâm Tý (index 9)
    default: return 1;
  }
}

export function getHourPillar(hour: number, dayCan: ThienCanType): BaziPillar {
  const hourChi = getHourChi(hour);
  const hourBranchValue = DIA_CHI.indexOf(hourChi);

  // Calculate hour stem using Five Rats Rule
  const dayStemValue = THIEN_CAN.indexOf(dayCan) + 1;
  const ratHourStem = getStemRuleByFiveRats(dayStemValue);

  // 子 (Tý) is at index 0, calculate from there
  let hourStemValue = (ratHourStem - 1 + hourBranchValue) % 10;
  const hourCan = THIEN_CAN[hourStemValue];

  return { can: hourCan, chi: hourChi };
}

// Legacy function for compatibility
export function getHourCan(dayCan: ThienCanType, hour: number): ThienCanType {
  return getHourPillar(hour, dayCan).can;
}

// ==============================================
// LIFE PALACE (MỆNH CUNG) CALCULATION
// ==============================================
// Rule: "Months Clockwise, Hours Anti-Clockwise"

export function getMenhCung(monthChi: DiaChiType, hourChi: DiaChiType): DiaChiType {
  // Start at 寅 (Dần/Tiger) position = index 2
  let position = 2;

  // Count clockwise by month branch
  const monthIndex = DIA_CHI.indexOf(monthChi);
  position = (position + monthIndex) % 12;

  // Count ANTI-CLOCKWISE by hour branch
  const hourIndex = DIA_CHI.indexOf(hourChi);
  position = (position - hourIndex + 12) % 12;
  if (position < 0) position += 12;

  return DIA_CHI[position];
}

// ==============================================
// BODY PALACE (THÂN CUNG) CALCULATION
// ==============================================
// Rule: "Months Clockwise, Hours Clockwise"

export function getThanCung(monthChi: DiaChiType, hourChi: DiaChiType): DiaChiType {
  // Start at 寅 (Dần/Tiger) position = index 2
  let position = 2;

  // Count clockwise by month branch
  const monthIndex = DIA_CHI.indexOf(monthChi);
  position = (position + monthIndex) % 12;

  // Count CLOCKWISE by hour branch (difference from Life Palace)
  const hourIndex = DIA_CHI.indexOf(hourChi);
  position = (position + hourIndex) % 12;

  return DIA_CHI[position];
}

// ==============================================
// MAIN CALCULATION FUNCTION
// ==============================================

export function calculateBazi(
  year: number,
  month: number,
  day: number,
  hour: number
): BaziChart {
  const solarDate = new Date(year, month - 1, day, hour);

  // Calculate all four pillars
  const yearPillar = getYearPillar(solarDate);
  const monthPillar = getMonthPillar(solarDate, yearPillar.can);
  const dayPillar = getDayPillar(solarDate);
  const hourPillar = getHourPillar(hour, dayPillar.can);

  // Calculate palaces
  const menhCung = getMenhCung(monthPillar.chi, hourPillar.chi);
  const thanCung = getThanCung(monthPillar.chi, hourPillar.chi);

  return {
    year: yearPillar,
    month: monthPillar,
    day: dayPillar,
    hour: hourPillar,
    menhCung,
    thanCung
  };
}

// Legacy functions for backward compatibility
export function getYearCan(year: number): ThienCanType {
  const date = new Date(year, 6, 1); // Mid-year to avoid lunar new year issues
  return getYearPillar(date).can;
}

export function getYearChi(year: number): DiaChiType {
  const date = new Date(year, 6, 1);
  return getYearPillar(date).chi;
}

export function getMonthChi(lunarMonth: number): DiaChiType {
  // Mapping: 1→Dần, 2→Mão, ..., 11→Tý, 12→Sửu
  const mapping: DiaChiType[] = ['Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu'];
  return mapping[lunarMonth - 1] || 'Dần';
}

export function getMonthCan(yearCan: ThienCanType, lunarMonth: number): ThienCanType {
  const yearStemValue = THIEN_CAN.indexOf(yearCan) + 1;
  const firstMonthStem = getStemRuleByFiveTigers(yearStemValue);
  let monthStemValue = (firstMonthStem - 1 + lunarMonth - 1) % 10;
  return THIEN_CAN[monthStemValue];
}
