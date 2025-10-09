import { useState } from 'react';

export interface BaziFormData {
  year: number;
  month: number;
  day: number;
  hour: number;
  gender: 'Nam' | 'Nữ';
}

interface BaziFormProps {
  onSubmit: (data: BaziFormData) => void;
}

export default function BaziForm({ onSubmit }: BaziFormProps) {
  const [formData, setFormData] = useState<BaziFormData>({
    year: 1987,
    month: 9,
    day: 3,
    hour: 14,
    gender: 'Nam'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-6 text-center">
          Nhập Thông Tin Ngày Sinh
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Năm sinh</label>
              <input
                type="number"
                min="1900"
                max="2100"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="1987"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Tháng</label>
              <input
                type="number"
                min="1"
                max="12"
                value={formData.month}
                onChange={(e) => setFormData({ ...formData, month: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="9"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Ngày</label>
              <input
                type="number"
                min="1"
                max="31"
                value={formData.day}
                onChange={(e) => setFormData({ ...formData, day: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="3"
              />
            </div>
          </div>

          {/* Hour and Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Giờ sinh (0-23)</label>
              <input
                type="number"
                min="0"
                max="23"
                value={formData.hour}
                onChange={(e) => setFormData({ ...formData, hour: parseInt(e.target.value) })}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="14"
              />
              <p className="text-xs text-slate-400 mt-1">Ví dụ: 14:15 → nhập 14</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Giới tính</label>
              <div className="flex gap-4 mt-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Nam"
                    checked={formData.gender === 'Nam'}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'Nam' | 'Nữ' })}
                    className="w-4 h-4 text-amber-500 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-white">Nam</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Nữ"
                    checked={formData.gender === 'Nữ'}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'Nam' | 'Nữ' })}
                    className="w-4 h-4 text-amber-500 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-white">Nữ</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Lập Lá Số Bát Tự
          </button>
        </form>

        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
          <p className="text-sm text-blue-300">
            💡 <strong>Lưu ý:</strong> Nhập ngày sinh theo Dương lịch. Hệ thống sẽ tự động chuyển đổi sang Âm lịch.
          </p>
        </div>
      </div>
    </div>
  );
}
