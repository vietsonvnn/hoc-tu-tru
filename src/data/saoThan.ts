// Sao Thần - Lucky Stars and Inauspicious Stars in Bazi
import type { ThienCanType, DiaChiType } from '../types';

export interface SaoThan {
  ten: string;
  loai: 'cát' | 'hung';
  yNghia: string;
  moTa: string;
}

// Thiên Ất Quý Nhân (Heavenly Noble)
export const thienAtQuiNhan: Record<ThienCanType, DiaChiType[]> = {
  'Giáp': ['Sửu', 'Mùi'],
  'Mậu': ['Sửu', 'Mùi'],
  'Ất': ['Thân', 'Tý'],
  'Kỷ': ['Thân', 'Tý'],
  'Bính': ['Hợi', 'Dậu'],
  'Đinh': ['Hợi', 'Dậu'],
  'Canh': ['Sửu', 'Mùi'],
  'Tân': ['Dần', 'Ngọ'],
  'Nhâm': ['Mão', 'Tị'],
  'Quý': ['Mão', 'Tị']
};

// Đức Quý Nhân (Virtue Noble)
export const ducQuiNhan: Record<ThienCanType, DiaChiType[]> = {
  'Giáp': ['Hợi'],
  'Ất': ['Thân'],
  'Bính': ['Dậu'],
  'Đinh': ['Hợi'],
  'Mậu': ['Dậu'],
  'Kỷ': ['Thân'],
  'Canh': ['Dần'],
  'Tân': ['Tý'],
  'Nhâm': ['Tị'],
  'Quý': ['Mão']
};

// Văn Xương (Literature Star)
export const vanXuong: Record<ThienCanType, DiaChiType> = {
  'Giáp': 'Tị',
  'Ất': 'Ngọ',
  'Bính': 'Thân',
  'Đinh': 'Dậu',
  'Mậu': 'Thân',
  'Kỷ': 'Dậu',
  'Canh': 'Hợi',
  'Tân': 'Tý',
  'Nhâm': 'Dần',
  'Quý': 'Mão'
};

// Hoa Cái (Canopy Star)
export const hoaCai: Record<DiaChiType, DiaChiType> = {
  'Dần': 'Tuất',
  'Ngọ': 'Tuất',
  'Tuất': 'Tuất',
  'Thân': 'Thìn',
  'Tý': 'Thìn',
  'Thìn': 'Thìn',
  'Tị': 'Sửu',
  'Dậu': 'Sửu',
  'Sửu': 'Sửu',
  'Hợi': 'Mùi',
  'Mão': 'Mùi',
  'Mùi': 'Mùi'
};

// Thiên Y (Heavenly Doctor)
export const thienY: Record<DiaChiType, DiaChiType> = {
  'Tý': 'Sửu',
  'Sửu': 'Tý',
  'Dần': 'Hợi',
  'Mão': 'Tuất',
  'Thìn': 'Dậu',
  'Tị': 'Thân',
  'Ngọ': 'Mùi',
  'Mùi': 'Ngọ',
  'Thân': 'Tị',
  'Dậu': 'Thìn',
  'Tuất': 'Mão',
  'Hợi': 'Dần'
};

// Đào Hoa (Peach Blossom - Romance Star)
export const daoHoa: Record<DiaChiType, DiaChiType> = {
  'Dần': 'Mão',
  'Ngọ': 'Mão',
  'Tuất': 'Mão',
  'Thân': 'Dậu',
  'Tý': 'Dậu',
  'Thìn': 'Dậu',
  'Tị': 'Ngọ',
  'Dậu': 'Ngọ',
  'Sửu': 'Ngọ',
  'Hợi': 'Tý',
  'Mão': 'Tý',
  'Mùi': 'Tý'
};

// Thiên La - Địa Võng (Heaven Net - Earth Trap)
export const thienLaDiaVong: DiaChiType[] = ['Tuất', 'Hợi'];

// Dương Nhận (Yang Blade) - Hung tinh
export const duongNhan: Record<ThienCanType, DiaChiType> = {
  'Giáp': 'Mão',
  'Ất': 'Dần',
  'Bính': 'Ngọ',
  'Đinh': 'Tị',
  'Mậu': 'Ngọ',
  'Kỷ': 'Tị',
  'Canh': 'Dậu',
  'Tân': 'Thân',
  'Nhâm': 'Tý',
  'Quý': 'Hợi'
};

// Kiếp Sát (Robbery Star)
export const kiepSat: Record<DiaChiType, DiaChiType> = {
  'Tý': 'Tị',
  'Sửu': 'Dần',
  'Dần': 'Hợi',
  'Mão': 'Thân',
  'Thìn': 'Tị',
  'Tị': 'Dần',
  'Ngọ': 'Hợi',
  'Mùi': 'Thân',
  'Thân': 'Tị',
  'Dậu': 'Dần',
  'Tuất': 'Hợi',
  'Hợi': 'Thân'
};

// Giáp Lộc (Power Position)
export const giaLoc: Record<ThienCanType, DiaChiType> = {
  'Giáp': 'Dần',
  'Ất': 'Mão',
  'Bính': 'Tị',
  'Đinh': 'Ngọ',
  'Mậu': 'Tị',
  'Kỷ': 'Ngọ',
  'Canh': 'Thân',
  'Tân': 'Dậu',
  'Nhâm': 'Hợi',
  'Quý': 'Tý'
};

// Sao Thần descriptions
export const saoThanDescriptions: Record<string, SaoThan> = {
  'Thiên Ất Quý Nhân': {
    ten: 'Thiên Ất Quý Nhân',
    loai: 'cát',
    yNghia: 'Quý nhân thiên ban, gặp khó có người giúp',
    moTa: 'Là sao cát lớn nhất, gặp hung hóa cát, có quý nhân phù trợ suốt đời.'
  },
  'Đức Quý Nhân': {
    ten: 'Đức Quý Nhân',
    loai: 'cát',
    yNghia: 'Đức hạnh cao thượng, được mọi người kính trọng',
    moTa: 'Sao cát, chủ về đạo đức, nhân cách tốt, có uy tín trong xã hội.'
  },
  'Văn Xương': {
    ten: 'Văn Xương',
    loai: 'cát',
    yNghia: 'Thông minh, học hành tốt, tài văn chương',
    moTa: 'Sao cát về học vấn, thông minh lanh lợi, phát triển tốt trong học tập.'
  },
  'Hoa Cái': {
    ten: 'Hoa Cái',
    loai: 'cát',
    yNghia: 'Thích nghiên cứu tôn giáo, triết học, huyền học',
    moTa: 'Sao cô đơc, thích suy tư, nghiên cứu sâu, có tài năng về thuật số.'
  },
  'Thiên Y': {
    ten: 'Thiên Y',
    loai: 'cát',
    yNghia: 'Khỏe mạnh, có duyên với y dược',
    moTa: 'Sao cát về sức khỏe, ít bệnh tật, hoặc có khả năng chữa bệnh.'
  },
  'Đào Hoa': {
    ten: 'Đào Hoa',
    loai: 'cát',
    yNghia: 'Thu hút, dễ gặp duyên tình, có khí chất nghệ thuật',
    moTa: 'Sao tình duyên, dễ thu hút người khác phái, có năng khiếu nghệ thuật.'
  },
  'Giáp Lộc': {
    ten: 'Giáp Lộc',
    loai: 'cát',
    yNghia: 'Tài lộc, địa vị, quyền lực',
    moTa: 'Sao lộc, có tài, có quyền, sự nghiệp phát triển tốt.'
  },
  'Dương Nhận': {
    ten: 'Dương Nhận',
    loai: 'hung',
    yNghia: 'Nóng nảy, dễ gặp tranh chấp, tai nạn',
    moTa: 'Hung tinh, tính cách mạnh mẽ nhưng dễ gặp rắc rối, thương tích.'
  },
  'Kiếp Sát': {
    ten: 'Kiếp Sát',
    loai: 'hung',
    yNghia: 'Phá tài, mất mát, tiểu nhân hãm hại',
    moTa: 'Hung tinh, dễ bị mất tiền, gặp tiểu nhân, cần cẩn trọng.'
  },
  'Thiên La Địa Võng': {
    ten: 'Thiên La Địa Võng',
    loai: 'hung',
    yNghia: 'Bế tắc, khó khăn, như lưới trời bủa',
    moTa: 'Hung tinh, cuộc sống nhiều trở ngại, khó phát triển.'
  }
};

// Function to get stars for a Bazi chart
export function getSaoThan(
  nhatCan: ThienCanType,
  yearChi: DiaChiType,
  monthChi: DiaChiType,
  dayChi: DiaChiType,
  hourChi: DiaChiType
): string[] {
  const stars: string[] = [];

  // Check all chi positions
  const allChi = [yearChi, monthChi, dayChi, hourChi];

  // Thiên Ất Quý Nhân
  const thienAtChi = thienAtQuiNhan[nhatCan];
  if (allChi.some(chi => thienAtChi.includes(chi))) {
    stars.push('Thiên Ất Quý Nhân');
  }

  // Đức Quý Nhân
  const ducQuyChi = ducQuiNhan[nhatCan];
  if (allChi.some(chi => ducQuyChi.includes(chi))) {
    stars.push('Đức Quý Nhân');
  }

  // Văn Xương
  if (allChi.includes(vanXuong[nhatCan])) {
    stars.push('Văn Xương');
  }

  // Hoa Cái (based on year/day branch)
  if (allChi.includes(hoaCai[yearChi]) || allChi.includes(hoaCai[dayChi])) {
    stars.push('Hoa Cái');
  }

  // Thiên Y
  if (allChi.some(chi => Object.values(thienY).includes(chi))) {
    stars.push('Thiên Y');
  }

  // Đào Hoa
  if (allChi.includes(daoHoa[yearChi]) || allChi.includes(daoHoa[dayChi])) {
    stars.push('Đào Hoa');
  }

  // Giáp Lộc
  if (allChi.includes(giaLoc[nhatCan])) {
    stars.push('Giáp Lộc');
  }

  // Dương Nhận
  if (allChi.includes(duongNhan[nhatCan])) {
    stars.push('Dương Nhận');
  }

  // Kiếp Sát
  if (allChi.some(chi => Object.values(kiepSat).includes(chi))) {
    stars.push('Kiếp Sát');
  }

  // Thiên La Địa Võng
  if (allChi.some(chi => thienLaDiaVong.includes(chi))) {
    stars.push('Thiên La Địa Võng');
  }

  return stars;
}
