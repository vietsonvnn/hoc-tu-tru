import { useState } from 'react';
import { motion } from 'framer-motion';
import type { AmDuongData } from '../types';

interface AmDuongCardProps {
  data: AmDuongData;
}

export const AmDuongCard = ({ data }: AmDuongCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isDuong = data.loai === 'Dương';
  const bgColor = isDuong
    ? 'bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500'
    : 'bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900';
  const icon = isDuong ? '☀️' : '🌙';

  return (
    <motion.div
      className="perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        className="relative w-full h-[500px] preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 ${bgColor} text-white rounded-3xl p-8 shadow-2xl border-4 ${isDuong ? 'border-yellow-300' : 'border-slate-500'} backface-hidden overflow-hidden`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 -ml-12 -mb-12"></div>

          <div className="relative h-full flex flex-col justify-center items-center text-center">
            <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <h2 className="text-5xl font-black mb-6 drop-shadow-lg">
              {data.loai}
            </h2>
            <div className="w-20 h-1 bg-white/50 rounded-full mb-6"></div>
            <p className="text-xl font-semibold opacity-90 leading-relaxed max-w-md">
              {data.moTa.substring(0, 80)}...
            </p>
            <div className="mt-8 text-sm opacity-75 font-medium">
              👆 Click để xem đặc điểm chi tiết
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 ${bgColor} text-white rounded-3xl p-6 shadow-2xl border-4 ${isDuong ? 'border-yellow-300' : 'border-slate-500'} backface-hidden overflow-y-auto`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-white/20">
            <h3 className="font-black text-3xl flex items-center gap-3">
              <span>{icon}</span>
              {data.loai}
            </h3>
          </div>

          <div className="space-y-4 text-sm">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="font-bold mb-3 text-lg flex items-center gap-2">
                <span>✨</span> Đặc điểm
              </div>
              <div className="grid grid-cols-2 gap-2">
                {data.dacDiem.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-lg px-3 py-2 text-center font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="font-bold mb-3 text-lg flex items-center gap-2">
                <span>📖</span> Mô tả chi tiết
              </div>
              <p className="leading-relaxed opacity-90">
                {data.moTa}
              </p>
            </div>
          </div>

          <div className="mt-6 text-center text-xs opacity-75 font-medium">
            👆 Click để quay lại
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
