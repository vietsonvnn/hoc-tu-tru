import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { NguHanhType } from '../types';
import { getNguHanhColor } from '../utils/colors';

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
  nguHanh: 'Thổ' as NguHanhType,
  thienCan: ['Mậu', 'Kỷ'],
  diaChi: [],
  yNghia: 'Trung tâm, hài hòa, cân bằng vũ trụ',
  position: {},
  rotation: 0,
};

// Tạo sao băng
const ShootingStar = () => {
  const randomDelay = Math.random() * 10;
  const randomDuration = Math.random() * 2 + 1;
  const randomTop = Math.random() * 50;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: '-5%',
        top: `${randomTop}%`,
        boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: ['0vw', '120vw'],
        y: ['0vh', '80vh'],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        repeatDelay: Math.random() * 20 + 10,
        ease: "linear",
      }}
    />
  );
};

// Component bầu trời đêm với nhiều ngôi sao
const NightSky = () => {
  // Giảm số lượng sao xuống 150 để tránh lag
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 3,
    opacity: Math.random() * 0.4 + 0.2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Gradient background - màu nhạt hơn */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-indigo-950/60 to-purple-950/50" />

      {/* Dải ngân hà - nhạt hơn */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)',
        }}
      />

      {/* Các ngôi sao nhấp nháy - loại bỏ boxShadow để tăng performance */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white/80"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity * 0.6, star.opacity * 1.2, star.opacity * 0.6],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sao băng */}
      {Array.from({ length: 3 }, (_, i) => (
        <ShootingStar key={`shooting-${i}`} />
      ))}

      {/* Sương mù mờ ảo - nhạt hơn */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(88, 28, 135, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Component La Bàn Bát Quái 3D
export const BatQuaiCompass = () => {
  const [selectedDirection, setSelectedDirection] = useState<DirectionInfo | null>(null);
  const compassRef = useRef<HTMLDivElement>(null);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animation cho smooth movement - tăng damping để mượt hơn
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), { stiffness: 40, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!compassRef.current) return;

      const rect = compassRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleDirectionClick = (direction: DirectionInfo) => {
    setSelectedDirection(selectedDirection?.huong === direction.huong ? null : direction);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto">
      {/* Bầu trời đêm */}
      <NightSky />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 sm:mb-16 text-center z-10"
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6"
            style={{
              background: 'linear-gradient(to right, #60a5fa, #a78bfa, #ec4899, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 80px rgba(167, 139, 250, 0.5)',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Bát Quái Huyền Thiên
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-purple-200 font-semibold"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✨ Di chuyển chuột để khám phá bí ẩn vũ trụ ✨
          </motion.p>
        </motion.div>

        {/* La Bàn Bát Quái 3D */}
        <div
          ref={compassRef}
          className="relative w-full max-w-2xl aspect-square mb-8 sm:mb-16"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="w-full h-full relative"
          >
            {/* Vòng ngoài phát sáng */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Vòng chính */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-pink-900/80 backdrop-blur-xl border-4 border-purple-400/30 shadow-2xl">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-950/90 via-purple-950/90 to-indigo-950/90 border-2 border-purple-400/20"></div>
            </div>

            {/* Vòng ánh sáng xoay */}
            <motion.div
              className="absolute inset-[15%] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, rgba(168, 85, 247, 0.6) 10%, transparent 20%, rgba(236, 72, 153, 0.6) 30%, transparent 40%)',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Vòng tròn giữa */}
            <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-purple-900/60 via-indigo-900/60 to-purple-900/60 shadow-inner backdrop-blur-md border border-purple-400/20"></div>

            {/* Các đường chia hướng phát sáng */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 0.8 }} />
                  <stop offset="50%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#a78bfa', stopOpacity: 0.8 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Các đường chính */}
              <line x1="50" y1="5" x2="50" y2="95" stroke="url(#lineGlow)" strokeWidth="2" filter="url(#glow)" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="url(#lineGlow)" strokeWidth="2" filter="url(#glow)" />
              <line x1="13" y1="13" x2="87" y2="87" stroke="url(#lineGlow)" strokeWidth="1.5" opacity="0.7" filter="url(#glow)" />
              <line x1="87" y1="13" x2="13" y2="87" stroke="url(#lineGlow)" strokeWidth="1.5" opacity="0.7" filter="url(#glow)" />

              {/* Vòng tròn trang trí */}
              {[35, 40, 45].map((r, i) => (
                <circle
                  key={r}
                  cx="50"
                  cy="50"
                  r={r}
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="0.8"
                  opacity={0.3 - i * 0.1}
                  filter="url(#glow)"
                />
              ))}
            </svg>

            {/* Ký hiệu Bát Quái ở giữa xoay chậm */}
            <motion.div
              className="absolute inset-[30%] flex items-center justify-center"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="text-[8vmin] sm:text-[10vmin] opacity-20 text-purple-300"
                style={{
                  filter: 'blur(2px)',
                }}
              >
                ☯
              </div>
            </motion.div>

            {/* Trung Cung */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              whileHover={{
                scale: 1.2,
                rotateZ: 180,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleDirectionClick(centerInfo)}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div
                className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center border-4 border-yellow-400/50 backdrop-blur-xl transition-all duration-300"
                style={{
                  background: selectedDirection?.huong === centerInfo.huong
                    ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.6) 0%, rgba(245, 158, 11, 0.6) 100%)'
                    : 'linear-gradient(135deg, rgba(168, 85, 247, 0.5) 0%, rgba(236, 72, 153, 0.5) 100%)',
                  boxShadow: selectedDirection?.huong === centerInfo.huong
                    ? '0 0 60px rgba(251, 191, 36, 0.8), inset 0 0 30px rgba(245, 158, 11, 0.6)'
                    : '0 0 40px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(236, 72, 153, 0.4)',
                }}
              >
                <motion.div
                  className="text-3xl sm:text-5xl mb-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
                  }}
                >
                  ☯
                </motion.div>
                <div className="text-[8px] sm:text-xs font-black text-white">Trung Cung</div>
              </div>
            </motion.div>

            {/* 8 Hướng Bát Quái */}
            {directions.map((direction, index) => {
              const colors = getNguHanhColor(direction.nguHanh);
              const isSelected = selectedDirection?.huong === direction.huong;

              return (
                <motion.div
                  key={direction.huong}
                  className="absolute cursor-pointer z-10"
                  style={{
                    ...direction.position,
                    transform: `translate(-50%, -50%)`,
                  }}
                  initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    delay: index * 0.15 + 1,
                    type: "spring",
                    stiffness: 150,
                    damping: 15
                  }}
                  whileHover={{
                    scale: 1.3,
                    z: 100,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDirectionClick(direction)}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center border-4 transition-all duration-300 backdrop-blur-xl relative overflow-hidden"
                    style={{
                      background: isSelected
                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(236, 72, 153, 0.9) 100%)'
                        : 'rgba(30, 27, 75, 0.7)',
                      borderColor: isSelected ? '#fbbf24' : 'rgba(167, 139, 250, 0.5)',
                      boxShadow: isSelected
                        ? '0 0 60px rgba(251, 191, 36, 1), inset 0 0 30px rgba(236, 72, 153, 0.5)'
                        : '0 0 30px rgba(167, 139, 250, 0.4)',
                    }}
                    animate={isSelected ? {
                      boxShadow: [
                        '0 0 60px rgba(251, 191, 36, 1), inset 0 0 30px rgba(236, 72, 153, 0.5)',
                        '0 0 80px rgba(236, 72, 153, 1), inset 0 0 40px rgba(251, 191, 36, 0.5)',
                        '0 0 60px rgba(251, 191, 36, 1), inset 0 0 30px rgba(236, 72, 153, 0.5)',
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {/* Hiệu ứng ánh sáng xoay */}
                    {isSelected && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'conic-gradient(from 0deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    )}

                    <motion.div
                      className="text-2xl sm:text-4xl mb-0.5 relative z-10"
                      animate={isSelected ? {
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0],
                      } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{
                        filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.9))',
                      }}
                    >
                      {direction.kyHieu}
                    </motion.div>
                    <div className="text-[7px] sm:text-[10px] font-black text-purple-100 leading-tight relative z-10">
                      {direction.huong}
                    </div>
                    <div className="text-[6px] sm:text-[9px] font-bold text-purple-200 opacity-90 leading-tight relative z-10">
                      {direction.que}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Thông tin chi tiết */}
        <AnimatePresence>
          {selectedDirection && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="w-full max-w-4xl z-10 mb-8"
            >
              <div
                className="rounded-3xl p-6 sm:p-10 backdrop-blur-2xl border-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.9) 0%, rgba(109, 40, 217, 0.9) 100%)',
                  borderColor: 'rgba(251, 191, 36, 0.5)',
                  boxShadow: '0 0 80px rgba(168, 85, 247, 0.5), inset 0 0 60px rgba(236, 72, 153, 0.2)',
                }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
                  <motion.div
                    className="text-6xl sm:text-9xl"
                    animate={{
                      rotateY: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotateY: { duration: 5, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                    style={{
                      filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 1))',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {selectedDirection.kyHieu || '🧭'}
                  </motion.div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-3xl sm:text-6xl font-black text-white mb-2 sm:mb-3">
                      {selectedDirection.huong}
                    </h3>
                    <div className="text-xl sm:text-3xl font-bold text-yellow-300 mb-1 sm:mb-2">
                      Quẻ {selectedDirection.que || 'Trung Cung'}
                    </div>
                    <div className="text-base sm:text-xl font-bold text-purple-200">
                      Ngũ Hành: {selectedDirection.nguHanh}
                    </div>
                    {selectedDirection.yNghia && (
                      <div className="text-sm sm:text-lg font-semibold text-purple-100 mt-2 sm:mt-3 italic">
                        "{selectedDirection.yNghia}"
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {selectedDirection.thienCan.length > 0 && (
                    <motion.div
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-purple-300/30"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                    >
                      <div className="font-black text-lg sm:text-2xl mb-3 sm:mb-4 text-purple-100 flex items-center gap-2">
                        <span>☯</span> Thiên Can
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {selectedDirection.thienCan.map((can) => (
                          <motion.span
                            key={can}
                            className="bg-purple-500/40 px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl font-bold text-white border border-purple-300/50 text-sm sm:text-base"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(168, 85, 247, 0.6)' }}
                          >
                            {can}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {selectedDirection.diaChi.length > 0 && (
                    <motion.div
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-purple-300/30"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                    >
                      <div className="font-black text-lg sm:text-2xl mb-3 sm:mb-4 text-purple-100 flex items-center gap-2">
                        <span>🐉</span> Địa Chi
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {selectedDirection.diaChi.map((chi) => (
                          <motion.span
                            key={chi}
                            className="bg-pink-500/40 px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl font-bold text-white border border-pink-300/50 text-sm sm:text-base"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(236, 72, 153, 0.6)' }}
                          >
                            {chi}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chú thích cuối trang */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="w-full max-w-4xl z-10"
        >
          <div
            className="rounded-2xl p-4 sm:p-6 backdrop-blur-xl border"
            style={{
              background: 'rgba(30, 27, 75, 0.6)',
              borderColor: 'rgba(167, 139, 250, 0.3)',
            }}
          >
            <h4 className="font-black text-base sm:text-lg mb-3 sm:mb-4 text-purple-200 flex items-center gap-2">
              <span>💡</span> Bát Quái - Tám Hướng Kinh Dịch
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-purple-100">
              {directions.map(dir => (
                <p key={dir.huong} className="flex items-start gap-2">
                  <span className="text-lg sm:text-xl">{dir.kyHieu}</span>
                  <span>
                    <span className="font-bold">{dir.que} ({dir.huong}):</span> {dir.yNghia}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
