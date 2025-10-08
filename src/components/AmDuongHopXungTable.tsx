import { motion } from 'framer-motion';
import { hopXungData } from '../data/amDuong';

export const AmDuongHopXungTable = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
          Hợp - Xung Âm Dương
        </h2>
        <p className="text-gray-600 text-lg">
          Đặc tính của Âm Dương là Hợp Xung, Âm Dương Tham Hợp, Kỵ Xung
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {hopXungData.map((relation, idx) => (
          <motion.div
            key={relation.loai}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`rounded-3xl shadow-2xl overflow-hidden ${
              relation.loai === 'Hợp'
                ? 'bg-gradient-to-br from-green-50 to-emerald-100'
                : 'bg-gradient-to-br from-red-50 to-orange-100'
            }`}
          >
            {/* Header */}
            <div
              className={`px-8 py-6 ${
                relation.loai === 'Hợp'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600'
                  : 'bg-gradient-to-r from-red-600 to-orange-600'
              } text-white`}
            >
              <h3 className="text-3xl font-black flex items-center gap-3">
                <span className="text-4xl">
                  {relation.loai === 'Hợp' ? '🤝' : '⚔️'}
                </span>
                {relation.loai}
              </h3>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Cát */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <h4 className="font-black text-xl text-gray-800">
                    Cát (Tốt)
                  </h4>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex flex-wrap gap-2">
                    {relation.cat.map((item, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          relation.loai === 'Hợp'
                            ? 'bg-green-100 text-green-800 border border-green-300'
                            : 'bg-red-100 text-red-800 border border-red-300'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hung */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⚠️</span>
                  <h4 className="font-black text-xl text-gray-800">
                    Hung (Xấu)
                  </h4>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex flex-wrap gap-2">
                    {relation.hung.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 border border-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200"
      >
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-black text-lg text-gray-800 mb-2">
              Lưu ý quan trọng
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Hợp và Xung đều có thể mang lại cát hoặc hung tùy theo hoàn cảnh cụ thể.
              <strong> Hợp</strong> tốt khi cần hợp tác, đoàn kết nhưng xấu khi bị ràng buộc, phụ thuộc.
              <strong> Xung</strong> tốt khi cần thay đổi, đột phá nhưng xấu khi gây xung đột, ly tán.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
