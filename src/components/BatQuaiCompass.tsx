import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NguHanhType } from '../types';
import { getNguHanhColor } from '../utils/colors';

interface DirectionInfo {
  huong: string;
  nguHanh: NguHanhType;
  thienCan: string[];
  diaChi: string[];
  position: { top?: string; bottom?: string; left?: string; right?: string };
  rotation: number;
}

const directions: DirectionInfo[] = [
  {
    huong: 'Bắc',
    nguHanh: 'Thủy',
    thienCan: ['Nhâm', 'Quý'],
    diaChi: ['Tý'],
    position: { top: '5%', left: '50%' },
    rotation: 0,
  },
  {
    huong: 'Đông Bắc',
    nguHanh: 'Thổ',
    thienCan: [],
    diaChi: ['Sửu', 'Dần'],
    position: { top: '15%', right: '15%' },
    rotation: 45,
  },
  {
    huong: 'Đông',
    nguHanh: 'Mộc',
    thienCan: ['Giáp', 'Ất'],
    diaChi: ['Mão'],
    position: { top: '50%', right: '5%' },
    rotation: 90,
  },
  {
    huong: 'Đông Nam',
    nguHanh: 'Mộc',
    thienCan: [],
    diaChi: ['Thìn', 'Tị'],
    position: { bottom: '15%', right: '15%' },
    rotation: 135,
  },
  {
    huong: 'Nam',
    nguHanh: 'Hỏa',
    thienCan: ['Bính', 'Đinh'],
    diaChi: ['Ngọ'],
    position: { bottom: '5%', left: '50%' },
    rotation: 180,
  },
  {
    huong: 'Tây Nam',
    nguHanh: 'Thổ',
    thienCan: [],
    diaChi: ['Mùi', 'Thân'],
    position: { bottom: '15%', left: '15%' },
    rotation: 225,
  },
  {
    huong: 'Tây',
    nguHanh: 'Kim',
    thienCan: ['Canh', 'Tân'],
    diaChi: ['Dậu'],
    position: { top: '50%', left: '5%' },
    rotation: 270,
  },
  {
    huong: 'Tây Bắc',
    nguHanh: 'Kim',
    thienCan: [],
    diaChi: ['Tuất', 'Hợi'],
    position: { top: '15%', left: '15%' },
    rotation: 315,
  },
];

const centerInfo = {
  huong: 'Trung Cung',
  nguHanh: 'Thổ' as NguHanhType,
  thienCan: ['Mậu', 'Kỷ'],
  diaChi: [],
};

export const BatQuaiCompass = () => {
  const [selectedDirection, setSelectedDirection] = useState<DirectionInfo | typeof centerInfo | null>(null);

  const handleDirectionClick = (direction: DirectionInfo | typeof centerInfo) => {
    setSelectedDirection(selectedDirection?.huong === direction.huong ? null : direction);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Bát Quái - Tám Hướng
        </h2>
        <p className="text-gray-600 text-lg">
          Click vào mỗi hướng để xem Ngũ Hành, Thiên Can, Địa Chi tương ứng
        </p>
      </motion.div>

      <div className="relative w-full aspect-square max-w-3xl mx-auto mb-8">
        {/* Vòng tròn ngoài */}
        <div className="absolute inset-0 rounded-full border-8 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl"></div>

        {/* Các đường chia hướng */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* Đường thẳng đứng */}
          <line x1="50" y1="10" x2="50" y2="90" stroke="#cbd5e1" strokeWidth="0.5" />
          {/* Đường ngang */}
          <line x1="10" y1="50" x2="90" y2="50" stroke="#cbd5e1" strokeWidth="0.5" />
          {/* Đường chéo 1 */}
          <line x1="20" y1="20" x2="80" y2="80" stroke="#cbd5e1" strokeWidth="0.5" />
          {/* Đường chéo 2 */}
          <line x1="80" y1="20" x2="20" y2="80" stroke="#cbd5e1" strokeWidth="0.5" />
        </svg>

        {/* Trung Cung */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleDirectionClick(centerInfo)}
        >
          <div
            className={`${getNguHanhColor(centerInfo.nguHanh).bg} ${
              selectedDirection?.huong === centerInfo.huong ? 'ring-4 ring-yellow-500' : ''
            } w-24 h-24 rounded-full flex items-center justify-center shadow-xl border-4 border-white`}
          >
            <div className="text-center">
              <div className="text-2xl font-black text-white">☯</div>
              <div className="text-xs font-bold text-white mt-1">Trung</div>
            </div>
          </div>
        </motion.div>

        {/* 8 Hướng */}
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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleDirectionClick(direction)}
            >
              <div
                className={`${colors.bg} ${isSelected ? 'ring-4 ring-white' : ''}
                  w-20 h-20 rounded-full flex items-center justify-center shadow-lg
                  border-4 ${colors.border} transition-all duration-300`}
              >
                <div className="text-center">
                  <div className={`text-sm font-black ${colors.text}`}>
                    {direction.huong.replace(' ', '\n').split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Chi tiết hướng đã chọn */}
      <AnimatePresence>
        {selectedDirection && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className={`${getNguHanhColor(selectedDirection.nguHanh).bg} rounded-3xl p-8 shadow-2xl`}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-6xl">🧭</div>
                <div className="text-center">
                  <h3 className={`text-4xl font-black ${getNguHanhColor(selectedDirection.nguHanh).text} mb-2`}>
                    {selectedDirection.huong}
                  </h3>
                  <div className="text-xl font-bold text-white/90">
                    Ngũ Hành: {selectedDirection.nguHanh}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {selectedDirection.thienCan.length > 0 && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className={`font-black text-xl mb-3 ${getNguHanhColor(selectedDirection.nguHanh).text} flex items-center gap-2`}>
                      <span>☯</span> Thiên Can
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedDirection.thienCan.map((can) => (
                        <span
                          key={can}
                          className="bg-white/40 px-4 py-2 rounded-xl font-bold text-gray-800"
                        >
                          {can}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedDirection.diaChi.length > 0 && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className={`font-black text-xl mb-3 ${getNguHanhColor(selectedDirection.nguHanh).text} flex items-center gap-2`}>
                      <span>🐉</span> Địa Chi
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedDirection.diaChi.map((chi) => (
                        <span
                          key={chi}
                          className="bg-white/40 px-4 py-2 rounded-xl font-bold text-gray-800"
                        >
                          {chi}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedDirection(null)}
                  className="px-6 py-3 bg-white/30 backdrop-blur-sm rounded-xl font-bold hover:bg-white/50 transition-all"
                >
                  Đóng
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chú thích */}
      <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6">
        <h4 className="font-black text-lg mb-4 text-gray-800">📚 Giải thích:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <span className="font-bold">• Bát Quái:</span> Tám hướng chính trong phong thủy, mỗi hướng tương ứng với một Ngũ Hành
          </div>
          <div>
            <span className="font-bold">• Trung Cung:</span> Trung tâm, thuộc Thổ, điều hòa 8 phương
          </div>
          <div>
            <span className="font-bold">• Thiên Can:</span> Can thuộc hướng đó (10 can trời)
          </div>
          <div>
            <span className="font-bold">• Địa Chi:</span> Chi thuộc hướng đó (12 con giáp)
          </div>
        </div>
      </div>
    </div>
  );
};
