import { useState } from 'react';
import { handPositions } from '../data/handRules';

export const HandRulesDiagram = () => {
  const [selectedPos, setSelectedPos] = useState<number | null>(null);

  const getFingerColor = (position: number) => {
    if (position >= 1 && position <= 3) return 'from-green-400 to-green-500'; // Xuân
    if (position >= 4 && position <= 6) return 'from-red-400 to-red-500'; // Hè
    if (position >= 7 && position <= 9) return 'from-yellow-400 to-yellow-500'; // Thu
    return 'from-blue-400 to-blue-500'; // Đông
  };

  const selected = selectedPos ? handPositions.find(p => p.position === selectedPos) : null;

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Sơ Đồ Bàn Tay
        </h2>
        <p className="text-gray-700 text-lg">
          12 Địa Chi - 12 Tháng - 4 Mùa trên Bàn Tay Phải
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Hand Diagram */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            🖐 Bàn Tay Phải (Lòng bàn tay hướng vào mình)
          </h3>

          {/* Interactive Hand */}
          <div className="relative aspect-[3/4] max-w-md mx-auto">
            {/* Ngón trỏ (bên trái) - Từ dưới lên trên: Dần(1) → Mão(2) → Thìn(3) */}
            <div className="absolute left-[6%] top-0 w-1/5 h-4/5 flex flex-col-reverse">
              {[1, 2, 3].map((pos) => {
                const info = handPositions.find(p => p.position === pos);
                return (
                  <button
                    key={pos}
                    onClick={() => setSelectedPos(pos)}
                    className={`flex-1 m-1 rounded-xl font-bold text-white transition-all hover:scale-105 ${
                      selectedPos === pos ? 'ring-4 ring-purple-600 scale-110' : ''
                    } bg-gradient-to-br ${getFingerColor(pos)} shadow-lg`}
                  >
                    <div className="text-xs">{info?.diaChi}</div>
                    <div className="text-[10px]">T{info?.thang}</div>
                  </button>
                );
              })}
            </div>

            {/* Ngón giữa - Từ trên xuống dưới: Tị(4) → Ngọ(5) → Mùi(6) */}
            <div className="absolute left-[28%] top-0 w-1/5 h-full flex flex-col">
              {[4, 5, 6].map((pos) => {
                const info = handPositions.find(p => p.position === pos);
                return (
                  <button
                    key={pos}
                    onClick={() => setSelectedPos(pos)}
                    className={`flex-1 m-1 rounded-xl font-bold text-white transition-all hover:scale-105 ${
                      selectedPos === pos ? 'ring-4 ring-purple-600 scale-110' : ''
                    } bg-gradient-to-br ${getFingerColor(pos)} shadow-lg`}
                  >
                    <div className="text-xs">{info?.diaChi}</div>
                    <div className="text-[10px]">T{info?.thang}</div>
                  </button>
                );
              })}
            </div>

            {/* Ngón áp út - Từ dưới lên trên: Thân(7) → Dậu(8) → Tuất(9) */}
            <div className="absolute right-[22%] top-0 w-1/5 h-full flex flex-col-reverse">
              {[7, 8, 9].map((pos) => {
                const info = handPositions.find(p => p.position === pos);
                return (
                  <button
                    key={pos}
                    onClick={() => setSelectedPos(pos)}
                    className={`flex-1 m-1 rounded-xl font-bold text-white transition-all hover:scale-105 ${
                      selectedPos === pos ? 'ring-4 ring-purple-600 scale-110' : ''
                    } bg-gradient-to-br ${getFingerColor(pos)} shadow-lg`}
                  >
                    <div className="text-xs">{info?.diaChi}</div>
                    <div className="text-[10px]">T{info?.thang}</div>
                  </button>
                );
              })}
            </div>

            {/* Ngón út (bên phải) - Từ trên xuống dưới: Hợi(10) → Tý(11) → Sửu(12) */}
            <div className="absolute right-0 top-0 w-1/5 h-4/5 flex flex-col">
              {[10, 11, 12].map((pos) => {
                const info = handPositions.find(p => p.position === pos);
                return (
                  <button
                    key={pos}
                    onClick={() => setSelectedPos(pos)}
                    className={`flex-1 m-1 rounded-xl font-bold text-white transition-all hover:scale-105 ${
                      selectedPos === pos ? 'ring-4 ring-purple-600 scale-110' : ''
                    } bg-gradient-to-br ${getFingerColor(pos)} shadow-lg`}
                  >
                    <div className="text-xs">{info?.diaChi}</div>
                    <div className="text-[10px]">T{info?.thang}</div>
                  </button>
                );
              })}
            </div>

            {/* Palm (Lòng bàn tay) */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-b-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl">👍</div>
                <div className="text-xs font-semibold text-gray-600">Ngón cái</div>
                <div className="text-[10px] text-gray-500">chỉ/đếm</div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 bg-purple-50 rounded-xl p-4">
            <p className="text-sm text-gray-700 text-center">
              💡 <span className="font-semibold">Click vào mỗi vị trí</span> để xem chi tiết
            </p>
          </div>
        </div>

        {/* Details Panel */}
        <div className="space-y-6">
          {selected ? (
            <div className={`bg-gradient-to-br ${getFingerColor(selected.position)} text-white rounded-3xl p-8 shadow-2xl`}>
              <div className="text-center mb-6">
                <div className="text-6xl font-black mb-2">{selected.diaChi}</div>
                <div className="text-2xl opacity-90">Tháng {selected.thang}</div>
              </div>

              <div className="space-y-4 bg-white/20 backdrop-blur rounded-2xl p-6">
                <div>
                  <div className="text-sm opacity-80">Vị trí:</div>
                  <div className="text-lg font-bold">{selected.finger}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Ngũ Hành:</div>
                  <div className="text-lg font-bold">{selected.nguHanh}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Mùa:</div>
                  <div className="text-lg font-bold">{selected.mua}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Ý nghĩa:</div>
                  <div className="text-base">{selected.yNghia}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">👈</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Chọn một vị trí trên bàn tay
                </h3>
                <p className="text-gray-600">
                  Click vào bất kỳ đốt ngón tay nào để xem thông tin chi tiết về Địa Chi, tháng, và ý nghĩa
                </p>
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h4 className="font-bold text-gray-800 mb-4 text-center">🎨 Bảng Màu Mùa</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-500"></div>
                <div>
                  <div className="font-semibold text-gray-800">Xuân</div>
                  <div className="text-xs text-gray-600">Dần-Mão-Thìn</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-400 to-red-500"></div>
                <div>
                  <div className="font-semibold text-gray-800">Hè</div>
                  <div className="text-xs text-gray-600">Tị-Ngọ-Mùi</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500"></div>
                <div>
                  <div className="font-semibold text-gray-800">Thu</div>
                  <div className="text-xs text-gray-600">Thân-Dậu-Tuất</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500"></div>
                <div>
                  <div className="font-semibold text-gray-800">Đông</div>
                  <div className="text-xs text-gray-600">Hợi-Tý-Sửu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg">
            <h4 className="font-bold text-orange-600 mb-3 text-center">⚡ Mẹo Ghi Nhớ</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• <span className="font-semibold">1 ngón = 1 mùa</span> (3 tháng)</li>
              <li>• <span className="font-semibold">Bắt đầu từ Dần</span> (đốt dưới ngón trỏ)</li>
              <li>• <span className="font-semibold">Đi theo chiều kim đồng hồ</span></li>
              <li>• <span className="font-semibold">4 ngón × 3 đốt = 12 chi</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
