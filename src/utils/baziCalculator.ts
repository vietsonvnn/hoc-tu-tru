// Bazi (Four Pillars) Calculator
import { namSinhToThienCan } from '../data/thienCan';
import type { ThienCanType, DiaChiType } from '../types';

// Thiên Can array
const THIEN_CAN: ThienCanType[] = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];

// Địa Chi array
const DIA_CHI: DiaChiType[] = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

// Địa Chi tháng mapping (âm lịch) - index 0 không dùng, tháng 1 = index 1
const MONTH_TO_CHI: (DiaChiType | null)[] = [null, 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu'];

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
  const chi = MONTH_TO_CHI[lunarMonth];
  if (!chi) throw new Error(`Invalid lunar month: ${lunarMonth}`);
  return chi;
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

// Calculate Julian Day Number
function getJulianDayNumber(year: number, month: number, day: number): number {
  let a = Math.floor((14 - month) / 12);
  let y = year + 4800 - a;
  let m = month + 12 * a - 3;

  let jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y +
            Math.floor(y / 4) - Math.floor(y / 100) +
            Math.floor(y / 400) - 32045;

  return jdn;
}

// Accurate Day Can/Chi calculation using Julian Day Number
// Formula: Can = (N + 9) % 10, Chi = (N + 1) % 12
export function getDayCanChi(year: number, month: number, day: number): BaziPillar {
  const N = getJulianDayNumber(year, month, day);

  // Can: (N + 9) % 10, where 0 = Giáp, 1 = Ất, ...
  let canIndex = (N + 9) % 10;
  if (canIndex < 0) canIndex += 10;

  // Chi: (N + 1) % 12, where 0 = Tý, 1 = Sửu, ...
  let chiIndex = (N + 1) % 12;
  if (chiIndex < 0) chiIndex += 12;

  return {
    can: THIEN_CAN[canIndex],
    chi: DIA_CHI[chiIndex]
  };
}

// Calculate Mệnh Cung (Life Palace)
// Formula: 26 - (Chi Tháng + Chi Giờ)
// Nếu kết quả > 12 thì trừ đi 12
export function getMenhCung(monthChi: DiaChiType, hourChi: DiaChiType): DiaChiType {
  // Chuyển Chi thành số (1-12): Tý=1, Sửu=2, ..., Hợi=12
  const monthNumber = DIA_CHI.indexOf(monthChi) + 1;
  const hourNumber = DIA_CHI.indexOf(hourChi) + 1;

  let menhNumber = 26 - (monthNumber + hourNumber);

  // Nếu > 12 thì trừ đi 12
  if (menhNumber > 12) {
    menhNumber = menhNumber - 12;
  }

  // Nếu <= 0 thì cộng 12
  while (menhNumber <= 0) {
    menhNumber += 12;
  }

  // Chuyển từ số (1-12) về index (0-11)
  return DIA_CHI[menhNumber - 1];
}

// Calculate Thân Cung (Body Palace)
// Formula: Tháng + Giờ + 2
// Nếu > 12 thì trừ đi 12
export function getThanCung(monthChi: DiaChiType, hourChi: DiaChiType): DiaChiType {
  const monthNumber = DIA_CHI.indexOf(monthChi) + 1;
  const hourNumber = DIA_CHI.indexOf(hourChi) + 1;

  let thanNumber = monthNumber + hourNumber + 2;

  // Nếu > 12 thì lặp lại chu kỳ
  while (thanNumber > 12) {
    thanNumber -= 12;
  }

  return DIA_CHI[thanNumber - 1];
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
