import { useState } from 'react';
import { truongSinhData, truongSinhCycles } from '../data/truongSinh';

export const TruongSinhWheel = () => {
  const [selectedCan, setSelectedCan] = useState<string>('Giáp');

  const currentCycle = truongSinhCycles.find(c => c.can === selectedCan)?.cycle || {};

  const diaChiOrder = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

  const getPalaceColor = (palace: string) => {
    switch(palace) {
      case 'Trường Sinh': return 'bg-gradient-to-br from-green-400 to-green-500';
      case 'Mộc Dục': return 'bg-gradient-to-br from-blue-400 to-blue-500';
      case 'Quan Đới': return 'bg-gradient-to-br from-cyan-400 to-cyan-500';
      case 'Lâm Quan': return 'bg-gradient-to-br from-indigo-400 to-indigo-500';
      case 'Đế Vượng': return 'bg-gradient-to-br from-yellow-400 to-yellow-500';
      case 'Suy': return 'bg-gradient-to-br from-orange-400 to-orange-500';
      case 'Bệnh': return 'bg-gradient-to-br from-red-400 to-red-500';
      case 'Tử': return 'bg-gradient-to-br from-purple-800 to-purple-900';
      case 'Mộ': return 'bg-gradient-to-br from-gray-600 to-gray-700';
      case 'Tuyệt': return 'bg-gradient-to-br from-gray-800 to-gray-900';
      case 'Thai': return 'bg-gradient-to-br from-pink-300 to-pink-400';
      case 'Dưỡng': return 'bg-gradient-to-br from-emerald-300 to-emerald-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Vòng Trường Sinh
        </h2>
        <p className="text-gray-700 text-lg">
          12 Giai đoạn sinh - tử của Thiên Can
        </p>
      </div>

      {/* Thiên Can Selector */}
      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Chọn Thiên Can</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {truongSinhCycles.map(({ can }) => (
            <button
              key={can}
              onClick={() => setSelectedCan(can)}
              className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
                selectedCan === can
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-110'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {can}
            </button>
          ))}
        </div>
      </div>

      {/* Circular Wheel */}
      <div className="relative w-full max-w-4xl mx-auto aspect-square">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full relative">
            {diaChiOrder.map((diaChi, index) => {
              const angle = (index * 30) - 90; // 30 degrees per segment, start at top
              const radius = 45; // percentage from center
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              const palace = currentCycle[diaChi];
              const palaceData = truongSinhData.find(p => p.ten === palace);

              return (
                <div
                  key={diaChi}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className={`${getPalaceColor(palace)} text-white rounded-2xl p-4 shadow-xl min-w-[140px] hover:scale-110 transition-transform`}>
                    <div className="text-center">
                      <div className="text-3xl mb-1">{palaceData?.bieu}</div>
                      <div className="text-xl font-black mb-1">{diaChi}</div>
                      <div className="text-sm font-bold">{palace}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full w-32 h-32 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-black">{selectedCan}</div>
                <div className="text-xs mt-1">Thiên Can</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Palace Details */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {truongSinhData.map((palace, index) => (
          <div
            key={index}
            className={`${getPalaceColor(palace.ten)} text-white rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform`}
          >
            <div className="text-4xl mb-2 text-center">{palace.bieu}</div>
            <h4 className="text-2xl font-black mb-2 text-center">{palace.ten}</h4>
            <p className="text-sm opacity-90 mb-3 text-center">{palace.tenTiengAnh}</p>
            <p className="text-sm font-medium mb-3">{palace.yNghia}</p>
            <ul className="text-sm space-y-1">
              {palace.dacDiem.map((dd, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{dd}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-white/30">
              <p className="text-xs italic">{palace.ungDung}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
