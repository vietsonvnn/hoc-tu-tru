import type { NguHanhType, TrangThaiType } from '../types';

// Mô tả trạng thái
export const getTrangThaiInfo = (trangThai: TrangThaiType) => {
  const info = {
    Vượng: {
      label: 'Vượng',
      description: 'Phát triển rực rỡ nhất, đỉnh cao sức mạnh',
      color: 'bg-emerald-500/20 border-emerald-500',
      icon: '💪',
    },
    Tướng: {
      label: 'Tướng',
      description: 'Được nuôi dưỡng, chuẩn bị phát triển mạnh',
      color: 'bg-blue-500/20 border-blue-500',
      icon: '🌱',
    },
    Hưu: {
      label: 'Hưu',
      description: 'Yếu dần, nghỉ ngơi, không làm được việc',
      color: 'bg-yellow-500/20 border-yellow-500',
      icon: '😴',
    },
    Tù: {
      label: 'Tù',
      description: 'Bị khống chế, bí bách, không phát triển được',
      color: 'bg-orange-500/20 border-orange-500',
      icon: '🔒',
    },
    Tử: {
      label: 'Tử',
      description: 'Yếu nhất, như chết đi',
      color: 'bg-red-500/20 border-red-500',
      icon: '💀',
    },
  };

  return info[trangThai];
};

// Quan hệ Tương Sinh
export const getQuanHeSinh = (loai: NguHanhType) => {
  const relations = {
    Thủy: { sinh: 'Mộc', beSinh: 'Kim' },
    Mộc: { sinh: 'Hỏa', beSinh: 'Thủy' },
    Hỏa: { sinh: 'Thổ', beSinh: 'Mộc' },
    Thổ: { sinh: 'Kim', beSinh: 'Hỏa' },
    Kim: { sinh: 'Thủy', beSinh: 'Thổ' },
  };
  return relations[loai];
};

// Quan hệ Tương Khắc
export const getQuanHeKhac = (loai: NguHanhType) => {
  const relations = {
    Mộc: { khac: 'Thổ', beKhac: 'Kim' },
    Thổ: { khac: 'Thủy', beKhac: 'Mộc' },
    Thủy: { khac: 'Hỏa', beKhac: 'Thổ' },
    Hỏa: { khac: 'Kim', beKhac: 'Thủy' },
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
