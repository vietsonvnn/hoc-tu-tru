import type { NguHanhType, TrangThaiType } from '../types';

// Mô tả trạng thái
export const getTrangThaiInfo = (trangThai: TrangThaiType) => {
  const info = {
    Vuong: {
      label: 'Vượng',
      description: 'Phát triển rực rỡ nhất, đỉnh cao sức mạnh',
      color: 'bg-emerald-500/20 border-emerald-500',
      icon: '💪',
    },
    Tuong: {
      label: 'Tưởng',
      description: 'Được nuôi dưỡng, chuẩn bị phát triển mạnh',
      color: 'bg-blue-500/20 border-blue-500',
      icon: '🌱',
    },
    Huu: {
      label: 'Hưu',
      description: 'Yếu dần, nghỉ ngơi, không làm được việc',
      color: 'bg-yellow-500/20 border-yellow-500',
      icon: '😴',
    },
    Tu: {
      label: 'Tù',
      description: 'Bị khống chế, bí bách, không phát triển được',
      color: 'bg-orange-500/20 border-orange-500',
      icon: '🔒',
    },
    Tu2: {
      label: 'Tử',
      description: 'Yếu nhất, như chết đi',
      color: 'bg-red-500/20 border-red-500',
      icon: '💀',
    },
  };

  // Handle both 'Tu' cases
  return trangThai === 'Tu' ? info.Tu : info[trangThai as keyof typeof info] || info.Tu;
};

// Quan hệ Tương Sinh
export const getQuanHeSinh = (loai: NguHanhType) => {
  const relations = {
    Thuy: { sinh: 'Mộc', beSinh: 'Kim' },
    Moc: { sinh: 'Hỏa', beSinh: 'Thủy' },
    Hoa: { sinh: 'Thổ', beSinh: 'Mộc' },
    Tho: { sinh: 'Kim', beSinh: 'Hỏa' },
    Kim: { sinh: 'Thủy', beSinh: 'Thổ' },
  };
  return relations[loai];
};

// Quan hệ Tương Khắc
export const getQuanHeKhac = (loai: NguHanhType) => {
  const relations = {
    Moc: { khac: 'Thổ', beKhac: 'Kim' },
    Tho: { khac: 'Thủy', beKhac: 'Mộc' },
    Thuy: { khac: 'Hỏa', beKhac: 'Thổ' },
    Hoa: { khac: 'Kim', beKhac: 'Thủy' },
    Kim: { khac: 'Mộc', beKhac: 'Hỏa' },
  };
  return relations[loai];
};

// Tên mùa theo key
export const getMuaName = (key: string) => {
  const names: Record<string, string> = {
    xuan: 'Xuân',
    ha: 'Hạ',
    thu: 'Thu',
    dong: 'Đông',
    tuQuy: 'Tứ Quý',
  };
  return names[key] || key;
};
