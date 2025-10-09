import { phanLoaiTruongSinh } from '../data/truongSinh';

export function TruongSinhPhanLoai() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Phân Loại Vòng Trường Sinh
        </h1>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Tứ Quý - Tứ Bình - Tứ Kỵ
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {phanLoaiTruongSinh.map((phanLoai) => (
            <div
              key={phanLoai.ten}
              className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-opacity-30 hover:scale-105 transition-transform duration-300"
              style={{
                borderColor: phanLoai.loai === 'quy' ? '#fbbf24' : phanLoai.loai === 'binh' ? '#60a5fa' : '#ef4444'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${phanLoai.mau_sac} opacity-20`}></div>

              <div className="relative p-6">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${phanLoai.mau_sac} bg-clip-text text-transparent`}>
                    {phanLoai.ten}
                  </h2>
                  <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${phanLoai.mau_sac}`}>
                    {phanLoai.loai === 'quy' ? '吉 Cát' : phanLoai.loai === 'binh' ? '平 Bình' : '凶 흉'}
                  </div>
                </div>

                {/* Các cung */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-300">Các Cung:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {phanLoai.cac_cung.map((cung) => (
                      <div
                        key={cung}
                        className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-3 py-2 text-center font-medium border border-white border-opacity-20"
                      >
                        {cung}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Đặc điểm */}
                <div className="bg-black bg-opacity-30 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-300">Đặc Điểm:</h3>
                  <p className="text-gray-200 leading-relaxed">{phanLoai.dac_diem}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ghi chú */}
        <div className="mt-12 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 border border-purple-400 border-opacity-30">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">📝 Ghi Chú</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              <span><strong className="text-yellow-300">Tứ Quý:</strong> Bốn cung quý hiếm, có giá trị cao trong luận đoán vận mệnh.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span><strong className="text-blue-300">Tứ Bình:</strong> Bốn cung trung bình, không quá tốt cũng không quá xấu.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <span><strong className="text-red-300">Tứ Kỵ:</strong> Bốn cung cần tránh, có ảnh hưởng tiêu cực.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
