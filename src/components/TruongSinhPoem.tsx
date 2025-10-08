import { truongSinhPoem } from '../data/truongSinh';

export const TruongSinhPoem = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black mb-2 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
          {truongSinhPoem.title}
        </h2>
        <p className="text-gray-600">Công thức ghi nhớ Vòng Trường Sinh</p>
      </div>

      {/* Yang Stems */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-bold">
            ☯ {truongSinhPoem.yangStems.title}
          </div>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {truongSinhPoem.yangStems.lines.map((line, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <p className="text-center text-gray-800 font-medium">{line}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 bg-white/50 rounded-lg p-3 inline-block">
            💡 <span className="font-semibold">Can Dương đi thuận chiều:</span> Hợi → Tý → Sửu → Dần → Mão → Thìn → Tị → Ngọ → Mùi → Thân → Dậu → Tuất
          </p>
        </div>
      </div>

      {/* Yin Stems */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-2 rounded-full font-bold">
            ☯ {truongSinhPoem.yinStems.title}
          </div>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {truongSinhPoem.yinStems.lines.map((line, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <p className="text-center text-gray-800 font-medium">{line}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 bg-white/50 rounded-lg p-3 inline-block">
            💡 <span className="font-semibold">Can Âm đi ngược chiều:</span> Ngọ → Tị → Thìn → Mão → Dần → Sửu → Tý → Hợi → Tuất → Dậu → Thân → Mùi
          </p>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-black mb-6 text-center text-orange-600">
          📋 Bảng Tra Nhanh
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Yang table */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-blue-600 mb-4 text-center">Can Dương (Thuận)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span className="font-bold">Giáp Mộc</span>
                <span>Hợi → Mão (Đế Vượng)</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-bold">Bính Hỏa</span>
                <span>Dần → Ngọ (Đế Vượng)</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-bold">Mậu Thổ</span>
                <span>Dần → Ngọ (Đế Vượng)</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-bold">Canh Kim</span>
                <span>Tị → Dậu (Đế Vượng)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold">Nhâm Thủy</span>
                <span>Thân → Tý (Đế Vượng)</span>
              </div>
            </div>
          </div>

          {/* Yin table */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-pink-600 mb-4 text-center">Can Âm (Ngược)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span className="font-bold">Ất Mộc</span>
                <span>Ngọ → Dần (Đế Vượng)</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-bold">Đinh Hỏa</span>
                <span>Dậu → Tị (Đế Vượng)</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-bold">Kỷ Thổ</span>
                <span>Dậu → Tị (Đế Vượng)</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-bold">Tân Kim</span>
                <span>Tý → Thân (Đế Vượng)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-bold">Quý Thủy</span>
                <span>Mão → Hợi (Đế Vượng)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-black mb-6 text-center text-purple-600">
          🔑 Điểm Cần Nhớ
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3 text-center">⬆️</div>
            <h4 className="font-bold text-blue-600 mb-2 text-center">Can Dương - Thuận Chiều</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Giáp, Bính, Mậu, Canh, Nhâm</li>
              <li>• Đi theo chiều kim đồng hồ</li>
              <li>• Từ Trường Sinh → Đế Vượng thuận tự nhiên</li>
              <li>• Ví dụ: Giáp sinh Hợi, vượng Mão</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3 text-center">⬇️</div>
            <h4 className="font-bold text-pink-600 mb-2 text-center">Can Âm - Ngược Chiều</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Ất, Đinh, Kỷ, Tân, Quý</li>
              <li>• Đi ngược chiều kim đồng hồ</li>
              <li>• Từ Trường Sinh → Đế Vượng ngược lại</li>
              <li>• Ví dụ: Ất sinh Ngọ, vượng Dần</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
