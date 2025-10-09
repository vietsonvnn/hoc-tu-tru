// Solar Terms (24 Tiết Khí) data for accurate month calculation
// Bazi month boundaries change at Solar Terms, not on 1st day of month
// These are the 12 main solar terms that mark month changes

export type SolarTermName =
  | '立春' | '驚蟄' | '清明' | '立夏' | '芒種' | '小暑'
  | '立秋' | '白露' | '寒露' | '立冬' | '大雪' | '小寒';

export interface SolarTermInfo {
  name: SolarTermName;
  branch: string;
  approxMonth: number;
  approxDay: number;
}

// Main solar terms that mark month boundaries
export const SOLAR_TERMS: SolarTermInfo[] = [
  { name: '立春', branch: '寅', approxMonth: 2, approxDay: 4 },   // Lập Xuân → Dần
  { name: '驚蟄', branch: '卯', approxMonth: 3, approxDay: 6 },   // Kinh Trập → Mão
  { name: '清明', branch: '辰', approxMonth: 4, approxDay: 5 },   // Thanh Minh → Thìn
  { name: '立夏', branch: '巳', approxMonth: 5, approxDay: 6 },   // Lập Hạ → Tỵ
  { name: '芒種', branch: '午', approxMonth: 6, approxDay: 6 },   // Mang Chủng → Ngọ
  { name: '小暑', branch: '未', approxMonth: 7, approxDay: 7 },   // Tiểu Thử → Mùi
  { name: '立秋', branch: '申', approxMonth: 8, approxDay: 8 },   // Lập Thu → Thân
  { name: '白露', branch: '酉', approxMonth: 9, approxDay: 8 },   // Bạch Lộ → Dậu
  { name: '寒露', branch: '戌', approxMonth: 10, approxDay: 8 },  // Hàn Lộ → Tuất
  { name: '立冬', branch: '亥', approxMonth: 11, approxDay: 7 },  // Lập Đông → Hợi
  { name: '大雪', branch: '子', approxMonth: 12, approxDay: 7 },  // Đại Tuyết → Tý
  { name: '小寒', branch: '丑', approxMonth: 1, approxDay: 6 }    // Tiểu Hàn → Sửu
];

// Simplified solar term calculation
// Returns the month branch based on solar date
export function getMonthBranchFromDate(month: number, day: number): string {
  // Find the appropriate solar term based on month and day
  for (let i = 0; i < SOLAR_TERMS.length; i++) {
    const term = SOLAR_TERMS[i];

    // Check if date falls in this term's period
    if (month === term.approxMonth) {
      if (day >= term.approxDay) {
        return term.branch;
      } else if (i > 0) {
        return SOLAR_TERMS[i - 1].branch;
      } else {
        return SOLAR_TERMS[SOLAR_TERMS.length - 1].branch;
      }
    }
  }

  // Fallback: find closest term by month
  const term = SOLAR_TERMS.find(t => t.approxMonth === month);
  return term ? term.branch : '寅';
}
