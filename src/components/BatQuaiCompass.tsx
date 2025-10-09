import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NguHanhType } from '../types';

interface DirectionInfo {
  huong: string;
  que: string;
  kyHieu: string;
  nguHanh: NguHanhType;
  thienCan: string[];
  diaChi: string[];
  yNghia: string;
  mauChinh: string;
  mauPhu: string;
}

const directions: DirectionInfo[] = [
  {
    huong: 'Bắc',
    que: 'Khảm',
    kyHieu: '☵',
    nguHanh: 'Thủy',
    thienCan: ['Nhâm', 'Quý'],
    diaChi: ['Tý'],
    yNghia: 'Thủy, hiểm nạn, trí tuệ, linh hoạt',
    mauChinh: 'from-blue-600',
    mauPhu: 'to-blue-800',
  },
  {
    huong: 'Đông Bắc',
    que: 'Cấn',
    kyHieu: '☶',
    nguHanh: 'Thổ',
    thienCan: [],
    diaChi: ['Sửu', 'Dần'],
    yNghia: 'Núi, dừng lại, ổn định, chắc chắn',
    mauChinh: 'from-yellow-600',
    mauPhu: 'to-yellow-800',
  },
  {
    huong: 'Đông',
    que: 'Chấn',
    kyHieu: '☳',
    nguHanh: 'Mộc',
    thienCan: ['Giáp', 'Ất'],
    diaChi: ['Mão'],
    yNghia: 'Sấm, chấn động, khởi đầu, phát triển',
    mauChinh: 'from-green-600',
    mauPhu: 'to-green-800',
  },
  {
    huong: 'Đông Nam',
    que: 'Tốn',
    kyHieu: '☴',
    nguHanh: 'Mộc',
    thienCan: [],
    diaChi: ['Thìn', 'Tị'],
    yNghia: 'Gió, nhẹ nhàng, thấm dần, lan tỏa',
    mauChinh: 'from-emerald-600',
    mauPhu: 'to-emerald-800',
  },
  {
    huong: 'Nam',
    que: 'Ly',
    kyHieu: '☲',
    nguHanh: 'Hỏa',
    thienCan: ['Bính', 'Đinh'],
    diaChi: ['Ngọ'],
    yNghia: 'Lửa, sáng sủa, trí tuệ, văn minh',
    mauChinh: 'from-red-600',
    mauPhu: 'to-red-800',
  },
  {
    huong: 'Tây Nam',
    que: 'Khôn',
    kyHieu: '☷',
    nguHanh: 'Thổ',
    thienCan: [],
    diaChi: ['Mùi', 'Thân'],
    yNghia: 'Đất, thuận tòng, bao dung, nuôi dưỡng',
    mauChinh: 'from-amber-600',
    mauPhu: 'to-amber-800',
  },
  {
    huong: 'Tây',
    que: 'Đoài',
    kyHieu: '☱',
    nguHanh: 'Kim',
    thienCan: ['Canh', 'Tân'],
    diaChi: ['Dậu'],
    yNghia: 'Hồ, vui vẻ, giao tiếp, hùng biện',
    mauChinh: 'from-gray-600',
    mauPhu: 'to-gray-800',
  },
  {
    huong: 'Tây Bắc',
    que: 'Càn',
    kyHieu: '☰',
    nguHanh: 'Kim',
    thienCan: [],
    diaChi: ['Tuất', 'Hợi'],
    yNghia: 'Trời, sáng tạo, cứng cỏi, quyền uy',
    mauChinh: 'from-slate-600',
    mauPhu: 'to-slate-800',
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
  mauChinh: 'from-purple-600',
  mauPhu: 'to-purple-800',
};

export const BatQuaiCompass = () => {
  const [selectedDirection, setSelectedDirection] = useState<DirectionInfo | null>(null);

  const handleDirectionClick = (direction: DirectionInfo) => {
    setSelectedDirection(selectedDirection?.huong === direction.huong ? null : direction);
  };

  const allDirections = [centerInfo, ...directions];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl font-black mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
          Bát Quái - Tám Hướng
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Chọn hướng để xem chi tiết Ngũ Hành, Thiên Can, Địa Chi
        </p>
      </motion.div>

      {/* Direction Cards */}
      <div className="space-y-3">
        {allDirections.map((direction, index) => {
          const isSelected = selectedDirection?.huong === direction.huong;

          return (
            <motion.div
              key={direction.huong}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Card chính */}
              <motion.button
                onClick={() => handleDirectionClick(direction)}
                className={`w-full bg-gradient-to-r ${direction.mauChinh} ${direction.mauPhu} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-left relative overflow-hidden group`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 text-[120px] leading-none opacity-20">
                    {direction.kyHieu}
                  </div>
                </div>

                <div className="relative flex items-center justify-between">
                  {/* Left: Icon & Name */}
                  <div className="flex items-center gap-4">
                    <div className="text-5xl sm:text-6xl opacity-90 group-hover:scale-110 transition-transform duration-300">
                      {direction.kyHieu}
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-white mb-1 flex items-center gap-2">
                        {direction.huong}
                        <motion.span
                          className="text-xl"
                          animate={{ x: isSelected ? 5 : 0 }}
                        >
                          ▶
                        </motion.span>
                      </div>
                      <div className="text-sm sm:text-base text-white/80 font-semibold">
                        Quẻ {direction.que}
                      </div>
                    </div>
                  </div>

                  {/* Right: Ngũ Hành */}
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-bold text-white/90">
                      {direction.nguHanh}
                    </div>
                  </div>
                </div>
              </motion.button>

              {/* Chi tiết mở rộng */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-b-2xl -mt-2 pt-6 pb-6 px-6 shadow-xl border-2 border-t-0 border-purple-200 dark:border-purple-900">
                      {/* Ý nghĩa */}
                      <div className="mb-6">
                        <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">
                          Ý NGHĨA
                        </div>
                        <div className="text-gray-700 dark:text-gray-300 italic">
                          "{direction.yNghia}"
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Thiên Can */}
                        {direction.thienCan.length > 0 && (
                          <div>
                            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
                              <span className="text-lg">☯</span>
                              THIÊN CAN
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {direction.thienCan.map((can) => (
                                <motion.div
                                  key={can}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className={`bg-gradient-to-r ${direction.mauChinh} ${direction.mauPhu} text-white px-4 py-2 rounded-xl font-bold shadow-md`}
                                >
                                  {can}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Địa Chi */}
                        {direction.diaChi.length > 0 && (
                          <div>
                            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
                              <span className="text-lg">🐉</span>
                              ĐỊA CHI
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {direction.diaChi.map((chi) => (
                                <motion.div
                                  key={chi}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.1 }}
                                  className={`bg-gradient-to-r ${direction.mauChinh} ${direction.mauPhu} text-white px-4 py-2 rounded-xl font-bold shadow-md`}
                                >
                                  {chi}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Empty state nếu không có Can Chi */}
                      {direction.thienCan.length === 0 && direction.diaChi.length === 0 && (
                        <div className="text-center text-gray-500 dark:text-gray-400 py-4">
                          Hướng này không có Thiên Can và Địa Chi riêng
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
