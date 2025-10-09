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
  position: { top?: string; bottom?: string; left?: string; right?: string };
  rotation: number;
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
    position: { top: '5%', left: '50%' },
    rotation: 0,
  },
  {
    huong: 'Đông Bắc',
    que: 'Cấn',
    kyHieu: '☶',
    nguHanh: 'Thổ',
    thienCan: [],
    diaChi: ['Sửu', 'Dần'],
    yNghia: 'Núi, dừng lại, ổn định, chắc chắn',
    position: { top: '15%', right: '15%' },
    rotation: 45,
  },
  {
    huong: 'Đông',
    que: 'Chấn',
    kyHieu: '☳',
    nguHanh: 'Mộc',
    thienCan: ['Giáp', 'Ất'],
    diaChi: ['Mão'],
    yNghia: 'Sấm, chấn động, khởi đầu, phát triển',
    position: { top: '50%', right: '5%' },
    rotation: 90,
  },
  {
    huong: 'Đông Nam',
    que: 'Tốn',
    kyHieu: '☴',
    nguHanh: 'Mộc',
    thienCan: [],
    diaChi: ['Thìn', 'Tị'],
    yNghia: 'Gió, nhẹ nhàng, thấm dần, lan tỏa',
    position: { bottom: '15%', right: '15%' },
    rotation: 135,
  },
  {
    huong: 'Nam',
    que: 'Ly',
    kyHieu: '☲',
    nguHanh: 'Hỏa',
    thienCan: ['Bính', 'Đinh'],
    diaChi: ['Ngọ'],
    yNghia: 'Lửa, sáng sủa, trí tuệ, văn minh',
    position: { bottom: '5%', left: '50%' },
    rotation: 180,
  },
  {
    huong: 'Tây Nam',
    que: 'Khôn',
    kyHieu: '☷',
    nguHanh: 'Thổ',
    thienCan: [],
    diaChi: ['Mùi', 'Thân'],
    yNghia: 'Đất, thuận tòng, bao dung, nuôi dưỡng',
    position: { bottom: '15%', left: '15%' },
    rotation: 225,
  },
  {
    huong: 'Tây',
    que: 'Đoài',
    kyHieu: '☱',
    nguHanh: 'Kim',
    thienCan: ['Canh', 'Tân'],
    diaChi: ['Dậu'],
    yNghia: 'Hồ, vui vẻ, giao tiếp, hùng biện',
    position: { top: '50%', left: '5%' },
    rotation: 270,
  },
  {
    huong: 'Tây Bắc',
    que: 'Càn',
    kyHieu: '☰',
    nguHanh: 'Kim',
    thienCan: [],
    diaChi: ['Tuất', 'Hợi'],
    yNghia: 'Trời, sáng tạo, cứng cỏi, quyền uy',
    position: { top: '15%', left: '15%' },
    rotation: 315,
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
  position: {},
  rotation: 0,
};

// Component bầu trời đêm tối ưu
const NightSkyBackground = () => {
  // Chỉ 100 sao để tránh lag
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Gradient background giống ảnh */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
        }}
      />

      {/* Milky Way effect */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(147, 197, 253, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Stars - không dùng boxShadow */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const BatQuaiCompass = () => {
  const [selectedDirection, setSelectedDirection] = useState<DirectionInfo | null>(null);

  const handleDirectionClick = (direction: DirectionInfo) => {
    setSelectedDirection(selectedDirection?.huong === direction.huong ? null : direction);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Nền bầu trời đêm */}
      <NightSkyBackground />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-start py-8 px-4 sm:py-12 sm:px-8">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 sm:mb-10 text-center z-10 w-full"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 text-white drop-shadow-2xl">
            Bát Quái Huyền Thiên
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-200">
            ✨ Khám phá tám hướng và ngũ hành ✨
          </p>
        </motion.div>

        {/* La bàn Bát Quái 3D */}
        <div className="relative w-full max-w-[90vw] sm:max-w-2xl md:max-w-3xl aspect-square mb-8 sm:mb-12 mx-auto">
          {/* Vòng ngoài phát sáng */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Vòng chính */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-indigo-900/50 backdrop-blur-lg border-2 border-blue-300/30 shadow-2xl">
            <div className="absolute inset-3 sm:inset-4 rounded-full bg-gradient-to-br from-slate-950/90 via-blue-950/90 to-purple-950/90 border border-blue-400/20"></div>
          </div>

          {/* Đường chia 8 hướng */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#93c5fd', stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <line x1="50" y1="5" x2="50" y2="95" stroke="url(#lineGlow)" strokeWidth="1" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="url(#lineGlow)" strokeWidth="1" />
            <line x1="15" y1="15" x2="85" y2="85" stroke="url(#lineGlow)" strokeWidth="0.8" />
            <line x1="85" y1="15" x2="15" y2="85" stroke="url(#lineGlow)" strokeWidth="0.8" />
          </svg>

          {/* Ký hiệu Bát Quái xoay chậm ở giữa */}
          <motion.div
            className="absolute inset-[25%] flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <div className="text-[15vmin] opacity-10 text-blue-300" style={{ filter: 'blur(3px)' }}>
              ☯
            </div>
          </motion.div>

          {/* Trung Cung */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDirectionClick(centerInfo)}
          >
            <div
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center border-3 backdrop-blur-xl transition-all duration-300"
              style={{
                background: selectedDirection?.huong === centerInfo.huong
                  ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.85) 0%, rgba(245, 158, 11, 0.85) 100%)'
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.7) 0%, rgba(147, 51, 234, 0.7) 100%)',
                borderColor: selectedDirection?.huong === centerInfo.huong ? '#fbbf24' : '#60a5fa',
                boxShadow: selectedDirection?.huong === centerInfo.huong
                  ? '0 0 50px rgba(251, 191, 36, 1), 0 0 100px rgba(251, 191, 36, 0.5)'
                  : '0 0 30px rgba(147, 197, 253, 0.6)',
              }}
            >
              <motion.div
                className="text-2xl sm:text-4xl md:text-5xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                style={{ filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 1))' }}
              >
                ☯
              </motion.div>
              <div className="text-[7px] sm:text-[9px] md:text-xs font-bold text-white mt-0.5 sm:mt-1">Trung Cung</div>
            </div>
          </motion.div>

          {/* 8 Hướng */}
          {directions.map((direction, index) => {
            const isSelected = selectedDirection?.huong === direction.huong;

            return (
              <motion.div
                key={direction.huong}
                className="absolute cursor-pointer z-10"
                style={{
                  ...direction.position,
                  transform: `translate(-50%, -50%)`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.5,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDirectionClick(direction)}
              >
                <div
                  className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-300 backdrop-blur-xl relative"
                  style={{
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(96, 165, 250, 0.95) 0%, rgba(147, 51, 234, 0.95) 100%)'
                      : 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.8) 100%)',
                    borderColor: isSelected ? '#fbbf24' : 'rgba(147, 197, 253, 0.5)',
                    boxShadow: isSelected
                      ? '0 0 50px rgba(251, 191, 36, 1), 0 0 100px rgba(251, 191, 36, 0.5)'
                      : '0 0 25px rgba(147, 197, 253, 0.4)',
                  }}
                >
                  <motion.div
                    className="text-xl sm:text-3xl md:text-4xl mb-0.5"
                    animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 1))' }}
                  >
                    {direction.kyHieu}
                  </motion.div>
                  <div className="text-[6px] sm:text-[8px] md:text-[10px] font-black text-white leading-tight">
                    {direction.huong}
                  </div>
                  <div className="text-[5px] sm:text-[7px] md:text-[9px] font-bold text-blue-200 opacity-90 leading-tight">
                    {direction.que}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Thông tin chi tiết */}
        <AnimatePresence>
          {selectedDirection && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="w-full max-w-[90vw] sm:max-w-2xl md:max-w-3xl z-10 mx-auto"
            >
              <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-2xl bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90 border-2 border-blue-300/40 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-5 sm:mb-6">
                  <motion.div
                    className="text-6xl sm:text-7xl md:text-9xl"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 1))',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {selectedDirection.kyHieu}
                  </motion.div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                      {selectedDirection.huong}
                    </h3>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 mb-1">
                      Quẻ {selectedDirection.que}
                    </div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-blue-200">
                      Ngũ Hành: {selectedDirection.nguHanh}
                    </div>
                  </div>
                </div>

                <div className="mb-5 sm:mb-6 p-3 sm:p-4 bg-white/15 rounded-xl border border-blue-200/20">
                  <div className="text-xs sm:text-sm font-bold text-yellow-300 mb-2 uppercase">Ý Nghĩa</div>
                  <div className="text-sm sm:text-base text-white/95 italic leading-relaxed">"{selectedDirection.yNghia}"</div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {selectedDirection.thienCan.length > 0 && (
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-yellow-300 mb-3 flex items-center gap-2 uppercase">
                        <span className="text-base sm:text-lg">☯</span>
                        Thiên Can
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedDirection.thienCan.map((can) => (
                          <motion.div
                            key={can}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="bg-gradient-to-br from-blue-500 to-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-bold shadow-lg text-sm sm:text-base border border-white/20"
                          >
                            {can}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedDirection.diaChi.length > 0 && (
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-yellow-300 mb-3 flex items-center gap-2 uppercase">
                        <span className="text-base sm:text-lg">🐉</span>
                        Địa Chi
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedDirection.diaChi.map((chi) => (
                          <motion.div
                            key={chi}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-purple-500 to-pink-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-bold shadow-lg text-sm sm:text-base border border-white/20"
                          >
                            {chi}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
