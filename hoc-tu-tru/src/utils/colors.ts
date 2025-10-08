import { NguHanhType } from '../types';

export const getNguHanhColor = (loai: NguHanhType) => {
  const colors = {
    Kim: {
      bg: 'bg-gradient-to-br from-gray-100 to-gray-200',
      text: 'text-gray-800',
      border: 'border-gray-300',
      hover: 'hover:shadow-gray-300',
    },
    Moc: {
      bg: 'bg-gradient-to-br from-green-500 to-green-600',
      text: 'text-white',
      border: 'border-green-400',
      hover: 'hover:shadow-green-300',
    },
    Thuy: {
      bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      text: 'text-white',
      border: 'border-blue-400',
      hover: 'hover:shadow-blue-300',
    },
    Hoa: {
      bg: 'bg-gradient-to-br from-red-500 to-red-600',
      text: 'text-white',
      border: 'border-red-400',
      hover: 'hover:shadow-red-300',
    },
    Tho: {
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
    Xuan: 'bg-gradient-to-br from-green-500 to-green-600 text-white',
    Ha: 'bg-gradient-to-br from-red-500 to-red-600 text-white',
    Thu: 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800',
    Dong: 'bg-gradient-to-br from-blue-500 to-blue-600 text-white',
  };
  return colors[mua as keyof typeof colors] || 'bg-gray-100';
};
