import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NguHanhType } from '../types';
import { getNguHanhColor } from '../utils/colors';

interface DirectionInfo {
  huong: string;
  que: string;           // Tên quẻ
  kyHieu: string;        // Ký hiệu quẻ (☰, ☷, etc.)
  nguHanh: NguHanhType;
  thienCan: string[];
  diaChi: string[];
  yNghia: string;        // Ý nghĩa của quẻ
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

export const BatQuaiCompass = () => {
  const [selectedDirection, setSelectedDirection] = useState<DirectionInfo | null>(null);

  const handleDirectionClick = (direction: DirectionInfo) => {
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
                  w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg
                  border-4 ${colors.border} transition-all duration-300`}
              >
                <div className="text-3xl mb-1">{direction.kyHieu}</div>
                <div className={`text-xs font-black ${colors.text}`}>
                  {direction.huong}
                </div>
                <div className={`text-xs font-bold ${colors.text} opacity-80`}>
                  {direction.que}
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
                <div className="text-7xl">{selectedDirection.kyHieu || '🧭'}</div>
                <div className="text-center">
                  <h3 className={`text-5xl font-black ${getNguHanhColor(selectedDirection.nguHanh).text} mb-2`}>
                    {selectedDirection.huong} - Quẻ {selectedDirection.que || 'Trung Cung'}
                  </h3>
                  <div className="text-xl font-bold text-white/90">
                    Ngũ Hành: {selectedDirection.nguHanh}
                  </div>
                  {selectedDirection.yNghia && (
                    <div className="text-lg font-semibold text-white/80 mt-2 italic">
                      "{selectedDirection.yNghia}"
                    </div>
                  )}
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

      {/* Bảng tổng hợp Bát Quái */}
      <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white px-6 py-4">
          <h3 className="text-2xl font-black">☯ Bảng Bát Quái - Kinh Dịch</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Hướng</th>
                <th className="px-6 py-4 text-left font-bold">Quẻ</th>
                <th className="px-6 py-4 text-left font-bold">Ký hiệu</th>
                <th className="px-6 py-4 text-left font-bold">Ngũ Hành</th>
                <th className="px-6 py-4 text-left font-bold">Ý nghĩa</th>
                <th className="px-6 py-4 text-left font-bold">Thiên Can</th>
                <th className="px-6 py-4 text-left font-bold">Địa Chi</th>
              </tr>
            </thead>
            <tbody>
              {directions.map((dir, index) => {
                const colors = getNguHanhColor(dir.nguHanh);
                return (
                  <tr
                    key={dir.huong}
                    className={`border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                    onClick={() => handleDirectionClick(dir)}
                  >
                    <td className="px-6 py-4 font-bold text-gray-800">{dir.huong}</td>
                    <td className="px-6 py-4 font-semibold text-gray-700">{dir.que}</td>
                    <td className="px-6 py-4 text-3xl">{dir.kyHieu}</td>
                    <td className="px-6 py-4">
                      <span className={`${colors.bg} px-3 py-1 rounded-lg font-bold ${colors.text} border ${colors.border}`}>
                        {dir.nguHanh}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 italic">{dir.yNghia}</td>
                    <td className="px-6 py-4 text-sm">
                      {dir.thienCan.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {dir.thienCan.map((can) => (
                            <span key={can} className="bg-blue-100 px-2 py-1 rounded text-xs font-semibold">
                              {can}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex flex-wrap gap-1">
                        {dir.diaChi.map((chi) => (
                          <span key={chi} className="bg-green-100 px-2 py-1 rounded text-xs font-semibold">
                            {chi}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chú thích */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-purple-200">
        <h4 className="font-black text-lg mb-4 text-gray-800 flex items-center gap-2">
          <span>💡</span> Giải thích Bát Quái:
        </h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-bold">• Càn (Tây Bắc):</span> Quẻ Trời, mạnh mẽ, cứng cỏi, quyền uy, lãnh đạo
          </p>
          <p>
            <span className="font-bold">• Đoài (Tây):</span> Quẻ Hồ, vui vẻ, giao tiếp, hùng biện, hài lòng
          </p>
          <p>
            <span className="font-bold">• Ly (Nam):</span> Quẻ Lửa, sáng sủa, trí tuệ, văn minh, ánh sáng
          </p>
          <p>
            <span className="font-bold">• Chấn (Đông):</span> Quẻ Sấm, chấn động, khởi đầu, phát triển, hành động
          </p>
          <p>
            <span className="font-bold">• Tốn (Đông Nam):</span> Quẻ Gió, nhẹ nhàng, thấm dần, lan tỏa, linh hoạt
          </p>
          <p>
            <span className="font-bold">• Khảm (Bắc):</span> Quẻ Thủy, hiểm nạn, trí tuệ sâu sắc, khó khăn vượt qua
          </p>
          <p>
            <span className="font-bold">• Cấn (Đông Bắc):</span> Quẻ Núi, dừng lại, ổn định, chắc chắn, không lay chuyển
          </p>
          <p>
            <span className="font-bold">• Khôn (Tây Nam):</span> Quẻ Đất, thuận tòng, bao dung, nuôi dưỡng, sinh sôi
          </p>
        </div>
      </div>
    </div>
  );
};
