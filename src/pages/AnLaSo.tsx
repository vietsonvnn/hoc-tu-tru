import { useState } from 'react';
import BaziForm, { type BaziFormData } from '../components/BaziForm';
import BaziChart from '../components/BaziChart';
import { calculateBazi, type BaziChart as BaziChartType } from '../utils/baziCalculator';
import { getLunarMonth } from '../utils/lunarCalendar';
import { getSaoThan } from '../data/saoThan';

export default function AnLaSo() {
  const [baziChart, setBaziChart] = useState<BaziChartType | null>(null);
  const [stars, setStars] = useState<string[]>([]);
  const [gender, setGender] = useState<'Nam' | 'Nữ'>('Nam');

  const handleFormSubmit = (data: BaziFormData) => {
    // Calculate lunar month (simplified)
    const lunarMonth = getLunarMonth(data.year, data.month, data.day);

    // Calculate Bazi chart
    const chart = calculateBazi(data.year, data.month, data.day, data.hour, lunarMonth);

    // Calculate stars
    const calculatedStars = getSaoThan(
      chart.day.can,
      chart.year.chi,
      chart.month.chi,
      chart.day.chi,
      chart.hour.chi
    );

    setBaziChart(chart);
    setStars(calculatedStars);
    setGender(data.gender);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 mb-4">
            An Lá Số Bát Tự
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Lập lá số Tứ Trụ (Bát Tự) theo phương pháp cổ truyền Đông phương
          </p>
        </div>

        {/* Form */}
        <BaziForm onSubmit={handleFormSubmit} />

        {/* Chart Display */}
        {baziChart && (
          <div className="animate-fadeIn">
            <BaziChart chart={baziChart} stars={stars} gender={gender} />

            {/* Additional Info Section */}
            <div className="max-w-6xl mx-auto mt-8 space-y-6">
              {/* What is Bazi */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Bát Tự là gì?</h3>
                <div className="space-y-3 text-slate-300">
                  <p>
                    <strong className="text-amber-300">Bát Tự</strong> hay <strong>Tứ Trụ</strong> là phương pháp luận mệnh cổ truyền của Trung Hoa,
                    dựa trên 8 chữ (4 Can + 4 Chi) từ thời gian sinh (Năm, Tháng, Ngày, Giờ).
                  </p>
                  <p>
                    <strong className="text-amber-300">4 Trụ:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Niên Trụ (Năm):</strong> Ông bà, tổ tiên, gốc gác xuất thân (0-16 tuổi)</li>
                    <li><strong>Nguyệt Trụ (Tháng):</strong> Cha mẹ, anh em, môi trường gia đình (17-32 tuổi)</li>
                    <li><strong>Nhật Trụ (Ngày):</strong> Bản thân, vợ/chồng, tính cách chính (33-48 tuổi)</li>
                    <li><strong>Thời Trụ (Giờ):</strong> Con cái, hậu vận, tuổi già (49+ tuổi)</li>
                  </ul>
                  <p>
                    <strong className="text-amber-300">Nhật Chủ</strong> (Thiên Can của Nhật Trụ) đại diện cho bản thân, là trung tâm của lá số.
                  </p>
                </div>
              </div>

              {/* How to Read */}
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Cách đọc Lá Số</h3>
                <div className="grid md:grid-cols-2 gap-6 text-slate-300">
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">1. Xem Nhật Chủ</h4>
                    <p className="text-sm">
                      Thiên Can của cột Ngày là bản thân bạn. Xem thuộc ngũ hành gì (Mộc, Hỏa, Thổ, Kim, Thủy).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">2. Phân tích Ngũ Hành</h4>
                    <p className="text-sm">
                      Đếm số lượng 5 hành trong 8 chữ. Hành nào nhiều = vượng, ít = yếu.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">3. Xem Trường Sinh</h4>
                    <p className="text-sm">
                      12 cung vòng đời: Sinh, Dục, Đới, Quan, Vượng, Suy, Bệnh, Tử, Mộ, Tuyệt, Thai, Dưỡng.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">4. Tìm Sao Thần</h4>
                    <p className="text-sm">
                      Các sao cát (Quý Nhân, Văn Xương...) và hung tinh (Dương Nhận, Kiếp Sát...).
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
                <h4 className="font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                  ⚠️ Lưu ý quan trọng
                </h4>
                <p className="text-sm text-yellow-200">
                  Đây là công cụ tính toán tự động với thuật toán đơn giản hóa. Để có kết quả chính xác nhất,
                  bạn nên tham khảo thêm từ các chuyên gia tử vi, phong thủy có kinh nghiệm.
                  Việc chuyển đổi Âm/Dương lịch và tính toán Nhật Can cần độ chính xác cao.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
