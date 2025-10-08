import { useState } from 'react';
import { handRules, handPractices, memoryTips } from '../data/handRules';

export const HandRulesGuide = () => {
  const [selectedRule, setSelectedRule] = useState<string>(handRules[0].id);

  const currentRule = handRules.find(r => r.id === selectedRule) || handRules[0];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'diachi': return 'from-blue-500 to-blue-600';
      case 'thiencan': return 'from-purple-500 to-purple-600';
      case 'truongsinh': return 'from-pink-500 to-pink-600';
      case 'quanhe': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'diachi': return '🐉';
      case 'thiencan': return '☯';
      case 'truongsinh': return '🔄';
      case 'quanhe': return '⚡';
      default: return '📘';
    }
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Hướng Dẫn Quy Tắc
        </h2>
        <p className="text-gray-700 text-lg">
          Chi tiết các quy tắc bàn tay thực hành
        </p>
      </div>

      {/* Rule Selector */}
      <div className="flex flex-wrap justify-center gap-3">
        {handRules.map((rule) => (
          <button
            key={rule.id}
            onClick={() => setSelectedRule(rule.id)}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              selectedRule === rule.id
                ? `bg-gradient-to-r ${getCategoryColor(rule.category)} text-white shadow-lg scale-105`
                : 'bg-white text-gray-700 hover:shadow-lg hover:scale-105'
            }`}
          >
            <span className="mr-2">{getCategoryIcon(rule.category)}</span>
            {rule.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Current Rule Details */}
      <div className={`bg-gradient-to-br ${getCategoryColor(currentRule.category)} text-white rounded-3xl p-8 shadow-2xl`}>
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{getCategoryIcon(currentRule.category)}</div>
          <h3 className="text-3xl font-black mb-2">{currentRule.title}</h3>
          <p className="text-lg opacity-90">{currentRule.description}</p>
        </div>

        {/* Steps */}
        <div className="bg-white/20 backdrop-blur rounded-2xl p-6 mb-6">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>📋</span> Các Bước Thực Hiện
          </h4>
          <ol className="space-y-3">
            {currentRule.steps.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <span className="flex-1 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Applications */}
        <div className="bg-white/20 backdrop-blur rounded-2xl p-6 mb-6">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🎯</span> Ứng Dụng Thực Tế
          </h4>
          <ul className="space-y-2">
            {currentRule.applications.map((app, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-300">▸</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tips */}
        <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>💡</span> Mẹo Ghi Nhớ
          </h4>
          <ul className="space-y-2">
            {currentRule.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-300">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Practices Section */}
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <h3 className="text-3xl font-black mb-6 text-center bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          🏋️ Bài Tập Thực Hành
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {handPractices.map((practice, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3 text-center">{index + 1}</div>
              <h4 className="font-bold text-gray-800 mb-3 text-center">{practice.title}</h4>
              <div className="mb-4 text-sm text-gray-700 bg-white/80 rounded-lg p-3">
                <span className="font-semibold text-green-600">Nhiệm vụ:</span> {practice.task}
              </div>
              <div className="text-sm text-gray-600 bg-teal-100 rounded-lg p-3">
                <span className="font-semibold text-teal-700">Mục tiêu:</span> {practice.goal}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Memory Tips Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl">
        <h3 className="text-3xl font-black mb-6 text-center text-orange-600">
          🧠 Mẹo Ghi Nhớ Nhanh
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {memoryTips.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-2">{item.tip}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 rounded-3xl p-8 shadow-xl">
        <div className="text-center">
          <div className="text-5xl mb-4">🌟</div>
          <h3 className="text-2xl font-black text-gray-800 mb-4">
            Tại Sao Dùng Quy Tắc Bàn Tay?
          </h3>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <span className="font-bold text-purple-600">✓ Không cần dụng cụ:</span> Bàn tay luôn có sẵn, có thể tính toán mọi lúc mọi nơi
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <span className="font-bold text-pink-600">✓ Ghi nhớ lâu:</span> Học bằng cơ thể (muscle memory) giúp nhớ lâu hơn học lý thuyết
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <span className="font-bold text-rose-600">✓ Nhanh chóng:</span> Tính toán Địa Chi, Trường Sinh, Xung-Hợp chỉ trong vài giây
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <span className="font-bold text-orange-600">✓ Truyền thống:</span> Phương pháp được sử dụng hàng nghìn năm bởi các thầy tử vi
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-200">
        <h4 className="text-xl font-bold text-center mb-4 text-indigo-600">
          🚀 Bước Tiếp Theo
        </h4>
        <div className="max-w-2xl mx-auto">
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="font-bold text-indigo-600">1.</span>
              <span>Học thuộc 12 Địa Chi trên bàn tay (2-3 ngày)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-indigo-600">2.</span>
              <span>Thực hành tìm Xung-Hợp bằng bàn tay (1 tuần)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-indigo-600">3.</span>
              <span>Học Trường Sinh Can Dương (1 tuần)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-indigo-600">4.</span>
              <span>Học Trường Sinh Can Âm (1 tuần)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-indigo-600">5.</span>
              <span>Áp dụng vào lập Tứ Trụ thực tế</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
