import { motion } from 'framer-motion';
import { gioiThieuData } from '../data/amDuong';

export const IntroductionSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
          Giới Thiệu Bát Tự - Tứ Trụ
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Hiểu rõ nền tảng triết lý phương Đông và hệ thống luận mệnh Bát Tự
        </p>
      </motion.div>

      <div className="space-y-8">
        {gioiThieuData.map((section, idx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className={`rounded-3xl shadow-2xl overflow-hidden ${
              idx === 0
                ? 'bg-gradient-to-br from-blue-50 to-cyan-100'
                : idx === 1
                ? 'bg-gradient-to-br from-purple-50 to-pink-100'
                : 'bg-gradient-to-br from-green-50 to-emerald-100'
            }`}
          >
            {/* Header */}
            <div
              className={`px-8 py-6 ${
                idx === 0
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                  : idx === 1
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600'
              } text-white`}
            >
              <h3 className="text-3xl font-black flex items-center gap-3">
                <span className="text-4xl">
                  {idx === 0 ? '📚' : idx === 1 ? '☯️' : '📖'}
                </span>
                {section.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="space-y-4">
                {section.content.map((paragraph, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border-l-4 border-gray-300"
                  >
                    <p className="text-gray-800 leading-relaxed text-base">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Visual Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-8 shadow-xl border-2 border-orange-200"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">☯️</div>
          <h3 className="text-2xl font-black text-gray-800 mb-4">
            Câu hỏi thường gặp
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-gray-800 mb-2">
                Cần trang bị gì?
              </h4>
              <p className="text-gray-600 text-sm">
                Kiến thức Âm Dương, Ngũ Hành, Thiên Can, Địa Chi là nền tảng cơ bản nhất
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5">
              <div className="text-3xl mb-2">📖</div>
              <h4 className="font-bold text-gray-800 mb-2">
                Cách đọc lá số?
              </h4>
              <p className="text-gray-600 text-sm">
                Phân tích Mệnh - Vận - Phong Thủy qua 4 trụ năm, tháng, ngày, giờ
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5">
              <div className="text-3xl mb-2">⏰</div>
              <h4 className="font-bold text-gray-800 mb-2">
                Học bao lâu?
              </h4>
              <p className="text-gray-600 text-sm">
                Tùy thuộc nỗ lực, cần thời gian để thực hành và tích lũy kinh nghiệm
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
