import { useState } from 'react';
import { diaChiTangCanData, diaChiTangCanPoem } from '../data/diaChiTangCan';

export const DiaChiTangCanTable = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tu-chinh' | 'tu-sinh' | 'tu-mo'>('all');

  const filteredData = selectedCategory === 'all'
    ? diaChiTangCanData
    : diaChiTangCanData.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'tu-chinh': return 'from-blue-500 to-blue-600';
      case 'tu-sinh': return 'from-green-500 to-green-600';
      case 'tu-mo': return 'from-amber-500 to-amber-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'tu-chinh': return 'Tứ Chính';
      case 'tu-sinh': return 'Tứ Sinh';
      case 'tu-mo': return 'Tứ Mộ Khố';
      default: return '';
    }
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Địa Chi Tàng Can
        </h2>
        <p className="text-gray-700 text-lg">
          Thiên Can ẩn tàng trong Địa Chi
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-3 rounded-xl font-bold transition-all ${
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:shadow-lg'
          }`}
        >
          Tất Cả
        </button>
        <button
          onClick={() => setSelectedCategory('tu-chinh')}
          className={`px-6 py-3 rounded-xl font-bold transition-all ${
            selectedCategory === 'tu-chinh'
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:shadow-lg'
          }`}
        >
          Tứ Chính
        </button>
        <button
          onClick={() => setSelectedCategory('tu-sinh')}
          className={`px-6 py-3 rounded-xl font-bold transition-all ${
            selectedCategory === 'tu-sinh'
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:shadow-lg'
          }`}
        >
          Tứ Sinh
        </button>
        <button
          onClick={() => setSelectedCategory('tu-mo')}
          className={`px-6 py-3 rounded-xl font-bold transition-all ${
            selectedCategory === 'tu-mo'
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:shadow-lg'
          }`}
        >
          Tứ Mộ Khố
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Địa Chi</th>
              <th className="px-6 py-4 text-left font-bold">Phân Loại</th>
              <th className="px-6 py-4 text-left font-bold">Tàng Can</th>
              <th className="px-6 py-4 text-left font-bold">Số Ngày</th>
              <th className="px-6 py-4 text-left font-bold">Ý Nghĩa</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-purple-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="text-2xl font-black text-purple-600">{item.diaChi}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${getCategoryColor(item.category)}`}>
                    {getCategoryName(item.category)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <div>
                      <span className="text-xs text-gray-500">Chính: </span>
                      <span className="font-bold text-purple-600">{item.chinhKhi}</span>
                    </div>
                    {item.phuKhi && (
                      <div>
                        <span className="text-xs text-gray-500">Phụ: </span>
                        <span className="font-bold text-pink-600">{item.phuKhi}</span>
                      </div>
                    )}
                    {item.tapKhi && (
                      <div>
                        <span className="text-xs text-gray-500">Tạp: </span>
                        <span className="font-bold text-gray-600">{item.tapKhi}</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    {Object.entries(item.soNgay).map(([can, ngay]) => (
                      <div key={can}>
                        <span className="font-semibold">{can}:</span> {ngay} ngày
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {item.yNghia}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Memorization Poem */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-black mb-4 text-center text-orange-600">
          {diaChiTangCanPoem.title}
        </h3>
        <div className="max-w-2xl mx-auto space-y-2">
          {diaChiTangCanPoem.lines.map((line, index) => (
            <p key={index} className={`text-center font-medium ${line === '' ? 'h-4' : 'text-gray-800'}`}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Classification Info */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
          <h4 className="text-xl font-black mb-3 text-blue-600">Tứ Chính (4)</h4>
          <p className="text-sm text-gray-700 mb-3">Tý, Mão, Ngọ, Dậu</p>
          <p className="text-sm text-gray-600">
            Bốn chi chính vị, đại diện cho 4 mùa cực thịnh, khí thuần khiết nhất.
            Chỉ chứa 1 Thiên Can chính.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg">
          <h4 className="text-xl font-black mb-3 text-green-600">Tứ Sinh (4)</h4>
          <p className="text-sm text-gray-700 mb-3">Dần, Thân, Tị, Hợi</p>
          <p className="text-sm text-gray-600">
            Bốn chi sinh khởi, đại diện cho sự khởi đầu của 4 mùa.
            Chứa 2-3 Thiên Can, có Thiên Nguyên, Địa Nguyên, Nhân Nguyên.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 shadow-lg">
          <h4 className="text-xl font-black mb-3 text-amber-600">Tứ Mộ Khố (4)</h4>
          <p className="text-sm text-gray-700 mb-3">Thìn, Tuất, Sửu, Mùi</p>
          <p className="text-sm text-gray-600">
            Bốn chi mộ khố, đại diện cho cuối mùa, nơi chứa chấp và tàng trữ.
            Chứa 3 Thiên Can hỗn tạp, là kho tàng của ngũ hành.
          </p>
        </div>
      </div>
    </div>
  );
};
