import { useState } from 'react';
import { motion } from 'framer-motion';
import type { DiaChiData } from '../types';
import { getNguHanhColor } from '../utils/colors';

interface DiaChiCardProps {
  data: DiaChiData;
}

const chiIcons: Record<string, string> = {
  Tý: '🐭',
  Sửu: '🐂',
  Dần: '🐅',
  Mão: '🐈',
  Thìn: '🐉',
  Tị: '🐍',
  Ngọ: '🐴',
  Mùi: '🐑',
  Thân: '🐵',
  Dậu: '🐓',
  Tuất: '🐕',
  Hợi: '🐖',
};

export const DiaChiCard = ({ data }: DiaChiCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const colors = getNguHanhColor(data.nguHanh);

  return (
    <motion.div
      className="perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        className="relative w-full h-[550px] preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 ${colors.bg} ${colors.text} rounded-3xl p-8 shadow-2xl border-4 ${colors.border} backface-hidden overflow-hidden`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 -ml-12 -mb-12"></div>

          <div className="relative h-full flex flex-col justify-center items-center text-center">
            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {chiIcons[data.chi]}
            </div>
            <h2 className="text-4xl font-black mb-4 drop-shadow-lg">
              {data.ten}
            </h2>
            <div className="w-16 h-1 bg-current/30 rounded-full mb-6"></div>

            {/* Cực tính & Con thú */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                <p className="text-sm font-bold">
                  {data.cucTinh === 'Dương' ? '➕ Dương' : '➖ Âm'}
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2">
                <p className="text-sm font-bold">{data.conThu}</p>
              </div>
            </div>

            {/* Thời gian */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 mb-4">
              <p className="text-lg font-bold">🕐 {data.thoiGian}</p>
            </div>

            {/* Tháng */}
            <p className="text-md font-semibold opacity-90">
              📅 {data.thang}
            </p>

            <div className="mt-6 text-sm opacity-75 font-medium">
              👆 Click để xem chi tiết
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 ${colors.bg} ${colors.text} rounded-3xl p-6 shadow-2xl border-4 ${colors.border} backface-hidden overflow-y-auto`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-current/20">
            <h3 className="font-black text-2xl flex items-center gap-2">
              <span>{chiIcons[data.chi]}</span>
              {data.ten}
            </h3>
          </div>

          <div className="space-y-4 text-sm">
            {/* Thông tin cơ bản */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-1">☯ Cực tính</div>
                <p className="opacity-90">{data.cucTinh === 'Dương' ? '➕ Dương' : '➖ Âm'}</p>
              </div>

              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-1">🌀 Ngũ hành</div>
                <p className="opacity-90">{data.nguHanh}</p>
              </div>

              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-1">🌸 Mùa</div>
                <p className="opacity-90">{data.mua}</p>
              </div>

              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-1">🧭 Phương</div>
                <p className="opacity-90">{data.phuong}</p>
              </div>
            </div>

            {/* Con thú */}
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>🐾</span> Con thú
              </div>
              <p className="opacity-90">{data.conThu}</p>
            </div>

            {/* Thời gian */}
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>🕐</span> Thời gian
              </div>
              <p className="opacity-90">{data.thoiGian}</p>
            </div>

            {/* Tháng âm lịch */}
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>📅</span> Tháng
              </div>
              <p className="opacity-90">{data.thang}</p>
            </div>

            {/* Cơ thể */}
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>🫀</span> Cơ thể
              </div>
              <p className="opacity-90">{data.coThe}</p>
            </div>

            {/* Màu sắc */}
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>🎨</span> Màu sắc
              </div>
              <p className="opacity-90">{data.mauSac}</p>
            </div>
          </div>

          <div className="mt-4 text-center text-xs opacity-75 font-medium">
            👆 Click để quay lại
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
