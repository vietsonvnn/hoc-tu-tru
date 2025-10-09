import { useState } from 'react';
import { motion } from 'framer-motion';
import type { NguHanhData } from '../types';
import { getNguHanhColor } from '../utils/colors';
import { getTrangThaiInfo, getQuanHeSinh, getQuanHeKhac, getMuaName } from '../utils/nguHanhRelations';

interface NguHanhCardProps {
  data: NguHanhData;
  onClick?: () => void;
}

const elementIcons: Record<string, string> = {
  Kim: '🔱',
  Mộc: '🌳',
  Thủy: '💧',
  Hỏa: '🔥',
  Thổ: '⛰️',
};

export const NguHanhCard = ({ data, onClick }: NguHanhCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const colors = getNguHanhColor(data.loai);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    onClick?.();
  };

  return (
    <motion.div
      className="perspective-1000 cursor-pointer group"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        className="relative w-full h-[600px] preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 ${colors.bg} ${colors.text} rounded-3xl p-8 shadow-2xl border-4 ${colors.border} backface-hidden overflow-hidden`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            visibility: isFlipped ? 'hidden' : 'visible'
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 -ml-12 -mb-12"></div>

          <div className="relative h-full flex flex-col justify-center items-center text-center">
            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {elementIcons[data.loai]}
            </div>
            <h2 className="text-3xl font-black mb-4 drop-shadow-lg">
              {data.ten.split('-')[0].trim()}
            </h2>
            <div className="w-16 h-1 bg-current/30 rounded-full mb-4"></div>
            <p className="text-lg font-semibold italic opacity-90 leading-relaxed">
              {data.tinhChat}
            </p>
            <div className="mt-6 text-sm opacity-75 font-medium">
              👆 Click để xem chi tiết
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 ${colors.bg} ${colors.text} rounded-3xl p-6 shadow-2xl border-4 ${colors.border} backface-hidden overflow-y-auto`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            visibility: isFlipped ? 'visible' : 'hidden'
          }}
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-current/20">
            <h3 className="font-black text-2xl flex items-center gap-2">
              <span>{elementIcons[data.loai]}</span>
              {data.ten.split('-')[0].trim()}
            </h3>
          </div>

          <div className="space-y-4 text-sm">
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>✨</span> Tính chất
              </div>
              <p className="opacity-90">{data.tinhChat}</p>
            </div>

            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>🖼️</span> Hình ảnh
              </div>
              <p className="opacity-90">{data.hinhAnh}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-1 flex items-center gap-1">
                  <span>🎨</span> Màu sắc
                </div>
                <p className="opacity-90">{data.mauSac}</p>
              </div>

              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-1 flex items-center gap-1">
                  <span>🧭</span> Hướng
                </div>
                <p className="opacity-90">{data.phuongHuong}</p>
              </div>
            </div>

            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>💼</span> Nghề nghiệp
              </div>
              <p className="opacity-90">{data.ngheNghiep}</p>
            </div>

            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-1 flex items-center gap-2">
                <span>🫀</span> Cơ thể
              </div>
              <p className="opacity-90">{data.coThe}</p>
            </div>

            {data.moTaChiTiet && (
              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-2 flex items-center gap-2">
                  <span>📖</span> Chi tiết
                </div>
                <p className="text-xs leading-relaxed opacity-90">{data.moTaChiTiet}</p>
              </div>
            )}

            {/* Trạng thái theo mùa */}
            {data.trangThai && (
              <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold mb-3 flex items-center gap-2">
                  <span>🔄</span> Trạng thái theo mùa
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {Object.entries(data.trangThai).map(([mua, trangThai]) => {
                    const info = getTrangThaiInfo(trangThai);
                    return (
                      <div
                        key={mua}
                        className={`${info.color} border rounded-lg p-2 text-center`}
                        title={info.description}
                      >
                        <div className="font-semibold mb-1">{getMuaName(mua)}</div>
                        <div className="flex items-center justify-center gap-1">
                          <span>{info.icon}</span>
                          <span className="font-bold">{info.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quan hệ Sinh - Khắc */}
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="font-bold mb-3 flex items-center gap-2">
                <span>⚡</span> Quan hệ Sinh - Khắc
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="opacity-75">Sinh ra:</span>
                  <span className="font-bold text-green-200">→ {getQuanHeSinh(data.loai).sinh}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-75">Được sinh:</span>
                  <span className="font-bold text-blue-200">← {getQuanHeSinh(data.loai).beSinh}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-75">Khắc:</span>
                  <span className="font-bold text-red-200">⚔️ {getQuanHeKhac(data.loai).khac}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-75">Bị khắc:</span>
                  <span className="font-bold text-orange-200">🛡️ {getQuanHeKhac(data.loai).beKhac}</span>
                </div>
              </div>
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
