import type { BaziChart as BaziChartType } from '../utils/baziCalculator';
import { truongSinhCycles } from '../data/truongSinh';
import { thienCanData } from '../data/thienCan';
import { diaChiData } from '../data/diaChi';

interface BaziChartProps {
  chart: BaziChartType;
  stars: string[];
  gender: 'Nam' | 'Nữ';
}

export default function BaziChart({ chart, stars, gender }: BaziChartProps) {
  // Get color for Can
  const getCanColor = (can: string) => {
    const canData = thienCanData.find(c => c.can === can);
    if (!canData) return 'text-white';

    const colorMap: Record<string, string> = {
      'Mộc': 'text-green-400',
      'Hỏa': 'text-red-400',
      'Thổ': 'text-yellow-400',
      'Kim': 'text-gray-300',
      'Thủy': 'text-blue-400'
    };

    return colorMap[canData.nguHanh] || 'text-white';
  };

  // Get color for Chi
  const getChiColor = (chi: string) => {
    const chiData = diaChiData.find(c => c.chi === chi);
    if (!chiData) return 'text-white';

    const colorMap: Record<string, string> = {
      'Mộc': 'text-green-300',
      'Hỏa': 'text-red-300',
      'Thổ': 'text-yellow-300',
      'Kim': 'text-gray-200',
      'Thủy': 'text-blue-300'
    };

    return colorMap[chiData.nguHanh] || 'text-white';
  };

  // Get Trường Sinh for Nhật Can
  const getTruongSinh = (chi: string) => {
    const cycle = truongSinhCycles.find(c => c.can === chart.day.can);
    return cycle?.cycle[chi as keyof typeof cycle.cycle] || '';
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Main Bazi Table */}
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-6 text-center">
          Lá Số Bát Tự
        </h2>

        {/* Four Pillars */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {/* Year Pillar */}
          <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
            <div className="text-center mb-4">
              <div className="text-xs text-slate-400 mb-2">Niên trụ</div>
              <div className="text-sm font-semibold text-amber-400">Năm</div>
            </div>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Thiên Can</div>
                <div className={`text-2xl font-bold ${getCanColor(chart.year.can)}`}>
                  {chart.year.can}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Địa Chi</div>
                <div className={`text-2xl font-bold ${getChiColor(chart.year.chi)}`}>
                  {chart.year.chi}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-purple-400">{getTruongSinh(chart.year.chi)}</div>
              </div>
            </div>
          </div>

          {/* Month Pillar */}
          <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
            <div className="text-center mb-4">
              <div className="text-xs text-slate-400 mb-2">Nguyệt trụ</div>
              <div className="text-sm font-semibold text-amber-400">Tháng</div>
            </div>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Thiên Can</div>
                <div className={`text-2xl font-bold ${getCanColor(chart.month.can)}`}>
                  {chart.month.can}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Địa Chi</div>
                <div className={`text-2xl font-bold ${getChiColor(chart.month.chi)}`}>
                  {chart.month.chi}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-purple-400">{getTruongSinh(chart.month.chi)}</div>
              </div>
            </div>
          </div>

          {/* Day Pillar - Most Important */}
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl p-6 border-2 border-amber-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-xs px-2 py-1 rounded-bl-lg text-slate-900 font-bold">
              Nhật Chủ
            </div>
            <div className="text-center mb-4">
              <div className="text-xs text-slate-400 mb-2">Nhật trụ</div>
              <div className="text-sm font-semibold text-amber-300">Ngày</div>
            </div>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Thiên Can</div>
                <div className={`text-2xl font-bold ${getCanColor(chart.day.can)}`}>
                  {chart.day.can}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Địa Chi</div>
                <div className={`text-2xl font-bold ${getChiColor(chart.day.chi)}`}>
                  {chart.day.chi}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-purple-400">{getTruongSinh(chart.day.chi)}</div>
              </div>
            </div>
          </div>

          {/* Hour Pillar */}
          <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
            <div className="text-center mb-4">
              <div className="text-xs text-slate-400 mb-2">Thời trụ</div>
              <div className="text-sm font-semibold text-amber-400">Giờ</div>
            </div>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Thiên Can</div>
                <div className={`text-2xl font-bold ${getCanColor(chart.hour.can)}`}>
                  {chart.hour.can}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">Địa Chi</div>
                <div className={`text-2xl font-bold ${getChiColor(chart.hour.chi)}`}>
                  {chart.hour.chi}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-purple-400">{getTruongSinh(chart.hour.chi)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mệnh Cung & Thân Cung */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="text-sm text-purple-300 mb-1">Mệnh Cung</div>
            <div className={`text-xl font-bold ${getChiColor(chart.menhCung || '')}`}>
              {chart.menhCung}
            </div>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="text-sm text-purple-300 mb-1">Thân Cung</div>
            <div className={`text-xl font-bold ${getChiColor(chart.thanCung || '')}`}>
              {chart.thanCung}
            </div>
          </div>
        </div>

        {/* Stars */}
        {stars.length > 0 && (
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Các Sao Thần</h3>
            <div className="flex flex-wrap gap-2">
              {stars.map((star, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 border border-blue-400/40 rounded-full text-sm text-blue-200"
                >
                  {star}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Info */}
        <div className="mt-6 p-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
          <p className="text-sm text-slate-300">
            <strong className="text-amber-400">Giới tính:</strong> {gender} •
            <strong className="text-amber-400 ml-3">Nhật Chủ:</strong> {chart.day.can} {chart.day.chi}
          </p>
        </div>
      </div>
    </div>
  );
}
