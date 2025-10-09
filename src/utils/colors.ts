import type { NguHanhType } from '../types';

export const getNguHanhColor = (loai: NguHanhType) => {
  const colors = {
    Kim: {
      bg: 'bg-gradient-to-br from-gray-500 to-gray-600',
      text: 'text-white',
      border: 'border-gray-400',
      hover: 'hover:shadow-gray-300',
    },
    Mộc: {
      bg: 'bg-gradient-to-br from-green-500 to-green-600',
      text: 'text-white',
      border: 'border-green-400',
      hover: 'hover:shadow-green-300',
    },
    Thủy: {
      bg: 'bg-gradient-to-br from-blue-400 to-blue-500',
      text: 'text-white',
      border: 'border-blue-300',
      hover: 'hover:shadow-blue-200',
    },
    Hỏa: {
      bg: 'bg-gradient-to-br from-red-500 to-red-600',
      text: 'text-white',
      border: 'border-red-400',
      hover: 'hover:shadow-red-300',
    },
    Thổ: {
      bg: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      text: 'text-white',
      border: 'border-yellow-400',
      hover: 'hover:shadow-yellow-300',
    },
  };
  return colors[loai];
};

export const getMuaColor = (mua: string) => {
  const colors = {
    Xuân: 'bg-gradient-to-br from-green-500 to-green-600 text-white',
    Hạ: 'bg-gradient-to-br from-red-500 to-red-600 text-white',
    Thu: 'bg-gradient-to-br from-gray-500 to-gray-600 text-white',
    Đông: 'bg-gradient-to-br from-blue-400 to-blue-500 text-white',
  };
  return colors[mua as keyof typeof colors] || 'bg-gray-500 text-white';
};
