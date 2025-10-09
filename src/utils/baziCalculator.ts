// Bazi (Four Pillars) Calculator
import { namSinhToThienCan } from '../data/thienCan';
import type { ThienCanType, DiaChiType } from '../types';

// Thiên Can array
const THIEN_CAN: ThienCanType[] = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];

// Địa Chi array
const DIA_CHI: DiaChiType[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

// Địa Chi tháng mapping (âm lịch)
const MONTH_TO_CHI: DiaChiType[] = ['', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu'];

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

// Get Thiên Can of Year from year number
export function getYearCan(year: number): ThienCanType {
  const lastDigit = year % 10;
  return namSinhToThienCan[lastDigit];
}

// Get Địa Chi of Year from year number
export function getYearChi(year: number): DiaChiType {
  const index = (year - 4) % 12;
  return DIA_CHI[index < 0 ? index + 12 : index];
}

// Get Địa Chi of Month from lunar month (1-12)
export function getMonthChi(lunarMonth: number): DiaChiType {
  return MONTH_TO_CHI[lunarMonth];
}

// Get Thiên Can of Month based on Year Can
// Formula: Giáp/Kỷ năm gặp Bính Dần đầu
export function getMonthCan(yearCan: ThienCanType, lunarMonth: number): ThienCanType {
  const yearCanIndex = THIEN_CAN.indexOf(yearCan);

  // Starting Can for month 1 (Dần) based on year Can
  const startingCanIndex = {
    0: 2, // Giáp → Bính
    1: 4, // Ất → Mậu
    2: 6, // Bính → Canh
    3: 8, // Đinh → Nhâm
    4: 0, // Mậu → Giáp
    5: 2, // Kỷ → Bính
    6: 4, // Canh → Mậu
    7: 6, // Tân → Canh
    8: 8, // Nhâm → Nhâm
    9: 0, // Quý → Giáp
  }[yearCanIndex] || 0;

  const monthCanIndex = (startingCanIndex + (lunarMonth - 1)) % 10;
  return THIEN_CAN[monthCanIndex];
}

// Get Địa Chi of Hour from hour (0-23)
export function getHourChi(hour: number): DiaChiType {
  const chiIndex = Math.floor((hour + 1) / 2) % 12;
  return DIA_CHI[chiIndex];
}

// Get Thiên Can of Hour based on Day Can
// Formula similar to month Can
export function getHourCan(dayCan: ThienCanType, hour: number): ThienCanType {
  const dayCanIndex = THIEN_CAN.indexOf(dayCan);
  const hourChi = getHourChi(hour);
  const hourChiIndex = DIA_CHI.indexOf(hourChi);

  // Starting Can for hour 子 (Tý) based on day Can
  const startingCanIndex = {
    0: 0, // Giáp → Giáp
    1: 2, // Ất → Bính
    2: 4, // Bính → Mậu
    3: 6, // Đinh → Canh
    4: 8, // Mậu → Nhâm
    5: 0, // Kỷ → Giáp
    6: 2, // Canh → Bính
    7: 4, // Tân → Mậu
    8: 6, // Nhâm → Canh
    9: 8, // Quý → Nhâm
  }[dayCanIndex] || 0;

  const hourCanIndex = (startingCanIndex + hourChiIndex) % 10;
  return THIEN_CAN[hourCanIndex];
}

// Simplified Day Can/Chi calculation (approximation)
// For accurate calculation, use perpetual calendar algorithm
export function getDayCanChi(year: number, month: number, day: number): BaziPillar {
  // This is a simplified approximation
  // In production, use a proper perpetual calendar algorithm

  const totalDays = Math.floor((new Date(year, month - 1, day).getTime() - new Date(1900, 0, 1).getTime()) / (1000 * 60 * 60 * 24));

  const canIndex = (totalDays + 10) % 10;
  const chiIndex = (totalDays + 10) % 12;

  return {
    can: THIEN_CAN[canIndex],
    chi: DIA_CHI[chiIndex]
  };
}

// Calculate Mệnh Cung (Life Palace)
export function getMenhCung(monthChi: DiaChiType, hourChi: DiaChiType): DiaChiType {
  const monthIndex = DIA_CHI.indexOf(monthChi);
  const hourIndex = DIA_CHI.indexOf(hourChi);

  let sum = monthIndex + hourIndex;
  if (sum >= 12) sum -= 12;

  const menhIndex = (14 - sum) % 12;
  return DIA_CHI[menhIndex];
}

// Calculate Thân Cung (Body Palace)
export function getThanCung(monthChi: DiaChiType, hourChi: DiaChiType): DiaChiType {
  const monthIndex = DIA_CHI.indexOf(monthChi);
  const hourIndex = DIA_CHI.indexOf(hourChi);

  let diff = monthIndex - hourIndex + 2;
  while (diff < 0) diff += 12;
  diff = diff % 12;

  return DIA_CHI[diff];
}

// Main function to calculate complete Bazi chart
export function calculateBazi(
  year: number,
  month: number,
  day: number,
  hour: number,
  lunarMonth: number
): BaziChart {
  const yearCan = getYearCan(year);
  const yearChi = getYearChi(year);

  const monthChi = getMonthChi(lunarMonth);
  const monthCan = getMonthCan(yearCan, lunarMonth);

  const dayPillar = getDayCanChi(year, month, day);

  const hourChi = getHourChi(hour);
  const hourCan = getHourCan(dayPillar.can, hour);

  const menhCung = getMenhCung(monthChi, hourChi);
  const thanCung = getThanCung(monthChi, hourChi);

  return {
    year: { can: yearCan, chi: yearChi },
    month: { can: monthCan, chi: monthChi },
    day: dayPillar,
    hour: { can: hourCan, chi: hourChi },
    menhCung,
    thanCung
  };
}
