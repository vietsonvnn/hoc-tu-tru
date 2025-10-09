import { useState } from 'react';
import { luanDoanTheoTru } from '../data/truongSinh';

export function LuanDoanTheoTru() {
  const [selectedCung, setSelectedCung] = useState(luanDoanTheoTru[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Luận Đoán Theo Trụ
        </h1>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Ý nghĩa các cung Trường Sinh trên 4 trụ: Năm - Tháng - Ngày - Giờ
        </p>

        {/* Chọn cung */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center text-yellow-300">Chọn Cung:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {luanDoanTheoTru.map((item) => (
              <button
                key={item.cung}
                onClick={() => setSelectedCung(item)}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                  selectedCung.cung === item.cung
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-cyan-300 shadow-lg shadow-cyan-500/50 scale-105'
                    : 'bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-20'
                }`}
              >
                {item.cung}
              </button>
            ))}
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-400 border-opacity-30 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {selectedCung.cung}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Trụ Năm */}
            <div className="bg-gradient-to-br from-red-900 to-red-800 bg-opacity-50 rounded-xl p-6 border border-red-400 border-opacity-30 hover:shadow-lg hover:shadow-red-500/30 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-2xl font-bold mr-4">
                  年
                </div>
                <h3 className="text-2xl font-bold text-red-300">Trụ Năm</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">{selectedCung.tru_nam}</p>
            </div>

            {/* Trụ Tháng */}
            <div className="bg-gradient-to-br from-green-900 to-green-800 bg-opacity-50 rounded-xl p-6 border border-green-400 border-opacity-30 hover:shadow-lg hover:shadow-green-500/30 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-2xl font-bold mr-4">
                  月
                </div>
                <h3 className="text-2xl font-bold text-green-300">Trụ Tháng</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">{selectedCung.tru_thang}</p>
            </div>

            {/* Trụ Ngày */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 bg-opacity-50 rounded-xl p-6 border border-blue-400 border-opacity-30 hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl font-bold mr-4">
                  日
                </div>
                <h3 className="text-2xl font-bold text-blue-300">Trụ Ngày</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">{selectedCung.tru_ngay}</p>
            </div>

            {/* Trụ Giờ */}
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 bg-opacity-50 rounded-xl p-6 border border-purple-400 border-opacity-30 hover:shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold mr-4">
                  時
                </div>
                <h3 className="text-2xl font-bold text-purple-300">Trụ Giờ</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">{selectedCung.tru_gio}</p>
            </div>
          </div>
        </div>

        {/* Chú giải */}
        <div className="mt-8 bg-gradient-to-r from-yellow-900 to-orange-900 rounded-2xl p-6 border border-yellow-400 border-opacity-30">
          <h3 className="text-xl font-bold mb-3 text-yellow-300">💡 Chú Giải</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-200">
            <div>
              <strong className="text-red-300">Trụ Năm:</strong> Đại diện cho tổ tiên, cha mẹ, thời thơ ấu (0-16 tuổi)
            </div>
            <div>
              <strong className="text-green-300">Trụ Tháng:</strong> Đại diện cho anh em, bạn bè, thanh niên (17-32 tuổi)
            </div>
            <div>
              <strong className="text-blue-300">Trụ Ngày:</strong> Đại diện cho bản thân, vợ/chồng, trung niên (33-48 tuổi)
            </div>
            <div>
              <strong className="text-purple-300">Trụ Giờ:</strong> Đại diện cho con cái, hậu vận, tuổi già (49+ tuổi)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
