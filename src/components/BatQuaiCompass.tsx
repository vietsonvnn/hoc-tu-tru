import { useState } from 'react';
import { motion } from 'framer-motion';
import type { NguHanhType } from '../types';

interface DirectionInfo {
  huong: string;
  que: string;
  kyHieu: string;
  nguHanh: NguHanhType;
  thienCan: string[];
  diaChi: string[];
  yNghia: string;
}

const directions: DirectionInfo[] = [
  {
    huong: 'Tây Bắc',
    que: 'Càn',
    kyHieu: '☰',
    nguHanh: 'Kim',
    thienCan: [],
    diaChi: ['Tuất', 'Hợi'],
    yNghia: 'Trời, sáng tạo, cứng cỏi, quyền uy',
  },
  {
    huong: 'Bắc',
    que: 'Khảm',
    kyHieu: '☵',
    nguHanh: 'Thủy',
    thienCan: ['Nhâm', 'Quý'],
    diaChi: ['Tý'],
    yNghia: 'Thủy, hiểm nạn, trí tuệ, linh hoạt',
  },
  {
    huong: 'Đông Bắc',
    que: 'Cấn',
    kyHieu: '☶',
    nguHanh: 'Thổ',
    thienCan: [],
    diaChi: ['Sửu', 'Dần'],
    yNghia: 'Núi, dừng lại, ổn định, chắc chắn',
  },
  {
    huong: 'Tây',
    que: 'Đoài',
    kyHieu: '☱',
    nguHanh: 'Kim',
    thienCan: ['Canh', 'Tân'],
    diaChi: ['Dậu'],
    yNghia: 'Hồ, vui vẻ, giao tiếp, hùng biện',
  },
  {
    huong: 'Đông',
    que: 'Chấn',
    kyHieu: '☳',
    nguHanh: 'Mộc',
    thienCan: ['Giáp', 'Ất'],
    diaChi: ['Mão'],
    yNghia: 'Sấm, chấn động, khởi đầu, phát triển',
  },
  {
    huong: 'Tây Nam',
    que: 'Khôn',
    kyHieu: '☷',
    nguHanh: 'Thổ',
    thienCan: [],
    diaChi: ['Mùi', 'Thân'],
    yNghia: 'Đất, thuận tòng, bao dung, nuôi dưỡng',
  },
  {
    huong: 'Nam',
    que: 'Ly',
    kyHieu: '☲',
    nguHanh: 'Hỏa',
    thienCan: ['Bính', 'Đinh'],
    diaChi: ['Ngọ'],
    yNghia: 'Lửa, sáng sủa, trí tuệ, văn minh',
  },
  {
    huong: 'Đông Nam',
    que: 'Tốn',
    kyHieu: '☴',
    nguHanh: 'Mộc',
    thienCan: [],
    diaChi: ['Thìn', 'Tị'],
    yNghia: 'Gió, nhẹ nhàng, thấm dần, lan tỏa',
  },
];

const centerInfo: DirectionInfo = {
  huong: 'Trung Cung',
  que: 'Trung Cung',
  kyHieu: '☯',
  nguHanh: 'Thổ',
  thienCan: ['Mậu', 'Kỷ'],
  diaChi: [],
  yNghia: 'Trung tâm, hài hòa, cân bằng vũ trụ',
};

// Hàm lấy màu badge theo ngũ hành
const getNguHanhBadgeColor = (nguHanh: NguHanhType): string => {
  const colors: Record<NguHanhType, string> = {
    Thủy: 'bg-[rgba(147,197,253,0.5)] text-blue-900',
    Mộc: 'bg-[rgba(134,239,172,0.5)] text-green-900',
    Hỏa: 'bg-[rgba(252,165,165,0.5)] text-red-900',
    Thổ: 'bg-[rgba(253,224,71,0.5)] text-yellow-900',
    Kim: 'bg-[rgba(203,213,225,0.5)] text-slate-900',
  };
  return colors[nguHanh] || '';
};

// Hàm lấy màu accent theo ngũ hành
const getNguHanhAccentColor = (nguHanh: NguHanhType): string => {
  const colors: Record<NguHanhType, string> = {
    Thủy: '#3b82f6',
    Mộc: '#10b981',
    Hỏa: '#ef4444',
    Thổ: '#f59e0b',
    Kim: '#64748b',
  };
  return colors[nguHanh] || '#3b82f6';
};

export const BatQuaiCompass = () => {
  const [selectedDirection, setSelectedDirection] = useState<DirectionInfo | null>(null);
  const [filterNguHanh, setFilterNguHanh] = useState<'all' | NguHanhType>('all');

  const handleDirectionClick = (direction: DirectionInfo) => {
    setSelectedDirection(selectedDirection?.huong === direction.huong ? null : direction);
  };

  const filteredDirections = filterNguHanh === 'all'
    ? directions
    : directions.filter(d => d.nguHanh === filterNguHanh);

  const allDirections = filterNguHanh === 'all' ? [...directions, centerInfo] : filteredDirections;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🧭 Bát Quái - Hướng & Ngũ Hành
          </h1>
          <p className="text-gray-600 font-medium">Tám hướng và năng lượng của vũ trụ</p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 rounded-3xl backdrop-blur-md bg-white/40 shadow-[15px_15px_30px_rgba(174,174,192,0.2),-15px_-15px_30px_rgba(255,255,255,0.9)] border border-white/60"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {(['all', 'Thủy', 'Mộc', 'Hỏa', 'Thổ', 'Kim'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setFilterNguHanh(filter)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  filterNguHanh === filter
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[8px_8px_16px_rgba(102,126,234,0.3),-8px_-8px_16px_rgba(255,255,255,0.5)]'
                    : 'bg-[rgba(255,255,255,0.6)] backdrop-blur-md text-gray-700 shadow-[6px_6px_12px_rgba(174,174,192,0.15),-6px_-6px_12px_rgba(255,255,255,0.9)] hover:shadow-[8px_8px_16px_rgba(174,174,192,0.2),-8px_-8px_16px_rgba(255,255,255,1)] hover:-translate-y-0.5'
                }`}
              >
                {filter === 'all' ? 'Tất cả' : filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {allDirections.map((direction, index) => {
            const isCenter = direction.huong === 'Trung Cung';
            const isSelected = selectedDirection?.huong === direction.huong;
            const accentColor = getNguHanhAccentColor(direction.nguHanh);

            return (
              <motion.div
                key={direction.huong}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleDirectionClick(direction)}
                className={`
                  relative p-6 rounded-3xl cursor-pointer transition-all duration-400
                  backdrop-blur-xl bg-[rgba(255,255,255,0.5)] border border-white/60
                  ${isSelected
                    ? 'shadow-[inset_8px_8px_16px_rgba(174,174,192,0.15),inset_-8px_-8px_16px_rgba(255,255,255,0.9)]'
                    : 'shadow-[15px_15px_30px_rgba(174,174,192,0.2),-15px_-15px_30px_rgba(255,255,255,0.9)] hover:shadow-[20px_20px_40px_rgba(174,174,192,0.3),-20px_-20px_40px_rgba(255,255,255,1)] hover:-translate-y-2'
                  }
                  ${isCenter ? 'lg:col-span-3 md:col-span-2' : ''}
                `}
                style={{
                  ...(isSelected && {
                    boxShadow: `inset 8px 8px 16px rgba(174,174,192,0.15), inset -8px -8px 16px rgba(255,255,255,0.9), 0 0 0 3px ${accentColor}`,
                  }),
                }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div
                    className="text-5xl p-3 rounded-2xl bg-[rgba(255,255,255,0.4)] shadow-[6px_6px_12px_rgba(174,174,192,0.15),-6px_-6px_12px_rgba(255,255,255,0.9)]"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    {direction.kyHieu}
                  </div>
                  <div className={`px-3 py-1.5 rounded-xl font-bold text-xs backdrop-blur-md shadow-[4px_4px_8px_rgba(174,174,192,0.15),-4px_-4px_8px_rgba(255,255,255,0.9)] ${getNguHanhBadgeColor(direction.nguHanh)}`}>
                    {direction.nguHanh}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-black text-gray-900 mb-1 ${isCenter ? 'md:text-3xl' : ''}`}>
                  {direction.huong}
                </h3>
                <p className="text-sm text-gray-600 font-semibold mb-4">Quẻ {direction.que}</p>

                {/* Description */}
                <div className="mb-4 p-3 rounded-xl bg-[rgba(255,255,255,0.3)] backdrop-blur-sm shadow-[inset_2px_2px_4px_rgba(174,174,192,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.9)]">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {direction.yNghia}
                  </p>
                </div>

                {/* Footer Info */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/50">
                  {direction.thienCan.length > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-gray-100/50 text-gray-600 font-medium">
                      ☯ {direction.thienCan.join(', ')}
                    </span>
                  )}
                  {direction.diaChi.length > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-gray-100/50 text-gray-600 font-medium">
                      📍 {direction.diaChi.join(', ')}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Info */}
        {selectedDirection && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="p-8 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-purple-600/90 to-indigo-600/90 text-white shadow-2xl"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="text-8xl" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))' }}>
                {selectedDirection.kyHieu}
              </div>
              <div>
                <h2 className="text-4xl font-black mb-2">{selectedDirection.huong}</h2>
                <p className="text-xl font-bold text-yellow-300">Quẻ {selectedDirection.que}</p>
                <p className="text-lg text-blue-200">Ngũ Hành: {selectedDirection.nguHanh}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
              <div className="text-xs font-bold text-yellow-300 mb-2 uppercase">Ý Nghĩa</div>
              <p className="text-base italic">"{selectedDirection.yNghia}"</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {selectedDirection.thienCan.length > 0 && (
                <div>
                  <div className="text-sm font-bold text-yellow-300 mb-3">☯ Thiên Can</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedDirection.thienCan.map((can) => (
                      <span key={can} className="px-4 py-2 rounded-xl bg-blue-500/80 backdrop-blur-sm font-bold shadow-lg border border-white/20">
                        {can}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedDirection.diaChi.length > 0 && (
                <div>
                  <div className="text-sm font-bold text-yellow-300 mb-3">🐉 Địa Chi</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedDirection.diaChi.map((chi) => (
                      <span key={chi} className="px-4 py-2 rounded-xl bg-purple-500/80 backdrop-blur-sm font-bold shadow-lg border border-white/20">
                        {chi}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
