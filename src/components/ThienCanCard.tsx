import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ThienCanData } from '../types';
import { getNguHanhColor } from '../utils/colors';

interface ThienCanCardProps {
  data: ThienCanData;
}

const canIcons: Record<string, string> = {
  Giap: '🌳',
  At: '🌿',
  Binh: '☀️',
  Dinh: '🕯️',
  Mau: '⛰️',
  Ky: '🏞️',
  Canh: '⚔️',
  Tan: '💍',
  Nham: '🌊',
  Quy: '💧',
};

export const ThienCanCard = ({ data }: ThienCanCardProps) => {
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
              {canIcons[data.can]}
            </div>
            <h2 className="text-4xl font-black mb-4 drop-shadow-lg">
              {data.ten}
            </h2>
            <div className="w-16 h-1 bg-current/30 rounded-full mb-6"></div>

            {/* Cực tính */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 mb-4">
              <p className="text-lg font-bold flex items-center justify-center gap-2">
                <span className="text-sm opacity-60">{data.cucTinh === 'Dương' ? '➕' : '➖'}</span>
                <span>{data.cucTinh}</span>
              </p>
            </div>

            {/* Hình ảnh */}
            <p className="text-xl font-semibold italic opacity-90 leading-relaxed">
              {data.hinhAnh}
            </p>

            {/* Số đuôi năm sinh */}
            {data.namSinhCuoi !== undefined && (
              <div className="mt-6 bg-white/30 backdrop-blur-sm rounded-2xl px-8 py-4">
                <p className="text-sm font-bold opacity-75 mb-1">Năm sinh cuối</p>
                <p className="text-5xl font-black">
                  {data.namSinhCuoi}
                </p>
              </div>
            )}

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
              <span>{canIcons[data.can]}</span>
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
                <div className="font-bold mb-1 flex items-center gap-1">
                  <span>🧭</span> Phương
                </div>
                <p className="opacity-90">{data.phuong}</p>
              </div>

              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-1 flex items-center gap-1">
                  <span>🎨</span> Màu sắc
                </div>
                <p className="opacity-90">{data.mauSac}</p>
              </div>

              {data.namSinhCuoi !== undefined && (
                <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm col-span-2">
                  <div className="font-bold mb-1 flex items-center gap-1">
                    <span>🔢</span> Năm sinh cuối
                  </div>
                  <p className="opacity-90 text-2xl font-black">{data.namSinhCuoi}</p>
                </div>
              )}
            </div>

            {/* Hình ảnh */}
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>🖼️</span> Hình ảnh
              </div>
              <p className="opacity-90">{data.hinhAnh}</p>
            </div>

            {/* Tính cách */}
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-2 flex items-center gap-2">
                <span>✨</span> Tính cách
              </div>
              <ul className="opacity-90 space-y-1">
                {data.tinhCach.map((tc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>{tc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cơ thể */}
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>🫀</span> Cơ thể
              </div>
              <p className="opacity-90">{data.coThe}</p>
            </div>

            {/* Mô tả */}
            {data.moTa && (
              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-2 flex items-center gap-2">
                  <span>📖</span> Mô tả
                </div>
                <p className="text-xs leading-relaxed opacity-90">{data.moTa}</p>
              </div>
            )}
          </div>

          <div className="mt-4 text-center text-xs opacity-75 font-medium">
            👆 Click để quay lại
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
