import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NguHanhType } from '../types';
import { getNguHanhColor } from '../utils/colors';
import { nguHanhData } from '../data/nguHanh';
import { thienCanData } from '../data/thienCan';
import { diaChiData } from '../data/diaChi';

type CardType = 'nguhanh' | 'thiencan' | 'diachi';

interface Card {
  type: CardType;
  name: string;
  nguHanh: NguHanhType;
  data?: any;
}

// Hàm phân tích quan hệ giữa 2 Ngũ Hành
const analyzeNguHanhRelation = (nh1: NguHanhType, nh2: NguHanhType) => {
  const relations: Record<NguHanhType, Record<string, NguHanhType[]>> = {
    Kim: {
      sinh: ['Thủy'],
      khắc: ['Mộc'],
      bịSinh: ['Thổ'],
      bịKhắc: ['Hỏa'],
      đồng: ['Kim']
    },
    Mộc: {
      sinh: ['Hỏa'],
      khắc: ['Thổ'],
      bịSinh: ['Thủy'],
      bịKhắc: ['Kim'],
      đồng: ['Mộc']
    },
    Thủy: {
      sinh: ['Mộc'],
      khắc: ['Hỏa'],
      bịSinh: ['Kim'],
      bịKhắc: ['Thổ'],
      đồng: ['Thủy']
    },
    Hỏa: {
      sinh: ['Thổ'],
      khắc: ['Kim'],
      bịSinh: ['Mộc'],
      bịKhắc: ['Thủy'],
      đồng: ['Hỏa']
    },
    Thổ: {
      sinh: ['Kim'],
      khắc: ['Thủy'],
      bịSinh: ['Hỏa'],
      bịKhắc: ['Mộc'],
      đồng: ['Thổ']
    }
  };

  if (relations[nh1].sinh.includes(nh2)) {
    return { type: 'sinh', label: 'Tương Sinh', icon: '→', color: 'text-green-600', desc: `${nh1} sinh ${nh2}`, detail: 'Hỗ trợ, nuôi dưỡng, tạo điều kiện phát triển' };
  }
  if (relations[nh1].khắc.includes(nh2)) {
    return { type: 'khắc', label: 'Tương Khắc', icon: '⚔', color: 'text-red-600', desc: `${nh1} khắc ${nh2}`, detail: 'Kiểm soát, chế ngự, áp chế' };
  }
  if (relations[nh1].bịSinh.includes(nh2)) {
    return { type: 'bịsinh', label: 'Được Sinh', icon: '←', color: 'text-blue-600', desc: `${nh1} được ${nh2} sinh`, detail: 'Nhận hỗ trợ, được nuôi dưỡng' };
  }
  if (relations[nh1].bịKhắc.includes(nh2)) {
    return { type: 'bịkhắc', label: 'Bị Khắc', icon: '⚡', color: 'text-orange-600', desc: `${nh1} bị ${nh2} khắc`, detail: 'Bị kiểm soát, bị chế ngự' };
  }
  if (relations[nh1].đồng.includes(nh2)) {
    return { type: 'đồng', label: 'Đồng Hành', icon: '=', color: 'text-purple-600', desc: `${nh1} đồng với ${nh2}`, detail: 'Cùng loại, hỗ trợ lẫn nhau' };
  }

  return { type: 'none', label: 'Không có', icon: '?', color: 'text-gray-600', desc: 'Không có quan hệ rõ ràng', detail: '' };
};

// Hàm phân tích quan hệ Thiên Can
const analyzeThienCanRelation = (can1: string, can2: string) => {
  // Hợp
  const hops = [
    ['Giáp', 'Kỷ'],
    ['Ất', 'Canh'],
    ['Bính', 'Tân'],
    ['Đinh', 'Nhâm'],
    ['Mậu', 'Quý']
  ];

  for (const hop of hops) {
    if ((hop[0] === can1 && hop[1] === can2) || (hop[0] === can2 && hop[1] === can1)) {
      return { type: 'hợp', label: 'Thiên Can Hợp', icon: '🤝', color: 'text-green-600', desc: `${can1} hợp ${can2}`, detail: 'Hòa hợp, hỗ trợ, làm việc tốt cùng nhau' };
    }
  }

  // Xung (đối diện nhau)
  const xungs = [
    ['Giáp', 'Canh'],
    ['Ất', 'Tân'],
    ['Bính', 'Nhâm'],
    ['Đinh', 'Quý'],
    ['Mậu', 'Giáp'],
    ['Kỷ', 'Ất']
  ];

  for (const xung of xungs) {
    if ((xung[0] === can1 && xung[1] === can2) || (xung[0] === can2 && xung[1] === can1)) {
      return { type: 'xung', label: 'Thiên Can Xung', icon: '⚔️', color: 'text-red-600', desc: `${can1} xung ${can2}`, detail: 'Xung đột, đối lập, khó hợp tác' };
    }
  }

  return { type: 'bình thường', label: 'Bình thường', icon: '↔', color: 'text-gray-600', desc: 'Không có quan hệ đặc biệt', detail: '' };
};

// Hàm phân tích quan hệ Địa Chi
const analyzeDiaChiRelation = (chi1: string, chi2: string) => {
  // Hợp
  const hops = [
    ['Tý', 'Sửu'],
    ['Dần', 'Hợi'],
    ['Mão', 'Tuất'],
    ['Thìn', 'Dậu'],
    ['Tị', 'Thân'],
    ['Ngọ', 'Mùi']
  ];

  for (const hop of hops) {
    if ((hop[0] === chi1 && hop[1] === chi2) || (hop[0] === chi2 && hop[1] === chi1)) {
      return { type: 'hợp', label: 'Địa Chi Hợp', icon: '🤝', color: 'text-green-600', desc: `${chi1} hợp ${chi2}`, detail: 'Hòa hợp, hỗ trợ, tốt đẹp' };
    }
  }

  // Xung
  const xungs = [
    ['Tý', 'Ngọ'],
    ['Sửu', 'Mùi'],
    ['Dần', 'Thân'],
    ['Mão', 'Dậu'],
    ['Thìn', 'Tuất'],
    ['Tị', 'Hợi']
  ];

  for (const xung of xungs) {
    if ((xung[0] === chi1 && xung[1] === chi2) || (xung[0] === chi2 && xung[1] === chi1)) {
      return { type: 'xung', label: 'Địa Chi Xung', icon: '⚔️', color: 'text-red-600', desc: `${chi1} xung ${chi2}`, detail: 'Xung đột mạnh, đối lập trực diện' };
    }
  }

  // Hình
  const hinhs = [
    ['Tý', 'Mão'],
    ['Dần', 'Tị', 'Thân'],
    ['Sửu', 'Tuất', 'Mùi'],
    ['Thìn', 'Thìn'],
    ['Ngọ', 'Ngọ'],
    ['Dậu', 'Dậu'],
    ['Hợi', 'Hợi']
  ];

  for (const hinh of hinhs) {
    if (hinh.includes(chi1) && hinh.includes(chi2) && chi1 !== chi2) {
      return { type: 'hình', label: 'Địa Chi Hình', icon: '⚡', color: 'text-orange-600', desc: `${chi1} hình ${chi2}`, detail: 'Hình phạt, căng thẳng, bất lợi' };
    }
  }

  // Hại
  const hais = [
    ['Tý', 'Mùi'],
    ['Sửu', 'Ngọ'],
    ['Dần', 'Tị'],
    ['Mão', 'Thìn'],
    ['Thân', 'Hợi'],
    ['Dậu', 'Tuất']
  ];

  for (const hai of hais) {
    if ((hai[0] === chi1 && hai[1] === chi2) || (hai[0] === chi2 && hai[1] === chi1)) {
      return { type: 'hại', label: 'Địa Chi Hại', icon: '💢', color: 'text-red-500', desc: `${chi1} hại ${chi2}`, detail: 'Hại, phá hoại âm thầm' };
    }
  }

  return { type: 'bình thường', label: 'Bình thường', icon: '↔', color: 'text-gray-600', desc: 'Không có quan hệ đặc biệt', detail: '' };
};

export const FlashCardComparison = () => {
  const [card1, setCard1] = useState<Card | null>(null);
  const [card2, setCard2] = useState<Card | null>(null);
  const [selectingCard, setSelectingCard] = useState<1 | 2 | null>(null);

  const handleCardSelect = (card: Card) => {
    if (selectingCard === 1) {
      setCard1(card);
      setSelectingCard(null);
    } else if (selectingCard === 2) {
      setCard2(card);
      setSelectingCard(null);
    }
  };

  const analyzeRelation = () => {
    if (!card1 || !card2) return null;

    const results = [];

    // Quan hệ Ngũ Hành
    const nguHanhRelation = analyzeNguHanhRelation(card1.nguHanh, card2.nguHanh);
    results.push({
      category: 'Quan Hệ Ngũ Hành',
      ...nguHanhRelation
    });

    // Nếu cả 2 đều là Thiên Can
    if (card1.type === 'thiencan' && card2.type === 'thiencan') {
      const canRelation = analyzeThienCanRelation(card1.name, card2.name);
      results.push({
        category: 'Quan Hệ Thiên Can',
        ...canRelation
      });
    }

    // Nếu cả 2 đều là Địa Chi
    if (card1.type === 'diachi' && card2.type === 'diachi') {
      const chiRelation = analyzeDiaChiRelation(card1.name, card2.name);
      results.push({
        category: 'Quan Hệ Địa Chi',
        ...chiRelation
      });
    }

    return results;
  };

  const relation = analyzeRelation();

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          So Sánh Quan Hệ Flashcard
        </h2>
        <p className="text-gray-600 text-lg">
          Chọn 2 thẻ bất kỳ để xem mối quan hệ giữa chúng
        </p>
      </motion.div>

      {/* Khu vực chọn 2 thẻ */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Thẻ 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-black mb-4 text-center text-indigo-600">Thẻ 1</h3>
          {card1 ? (
            <div className={`${getNguHanhColor(card1.nguHanh).bg} rounded-2xl p-6 border-4 ${getNguHanhColor(card1.nguHanh).border}`}>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">{card1.name}</div>
                <div className="text-sm font-semibold opacity-80">
                  {card1.type === 'nguhanh' && 'Ngũ Hành'}
                  {card1.type === 'thiencan' && 'Thiên Can'}
                  {card1.type === 'diachi' && 'Địa Chi'}
                </div>
                <div className="text-sm font-bold mt-1">({card1.nguHanh})</div>
              </div>
              <button
                onClick={() => setCard1(null)}
                className="mt-4 w-full bg-white/30 hover:bg-white/50 py-2 rounded-lg font-bold transition-all"
              >
                Xóa
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSelectingCard(1)}
              className="w-full h-48 border-4 border-dashed border-gray-300 rounded-2xl hover:border-indigo-400 hover:bg-indigo-50/50 transition-all duration-300 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl mb-2">+</div>
                <div className="font-bold text-gray-600">Chọn Thẻ 1</div>
              </div>
            </button>
          )}
        </motion.div>

        {/* Thẻ 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-black mb-4 text-center text-purple-600">Thẻ 2</h3>
          {card2 ? (
            <div className={`${getNguHanhColor(card2.nguHanh).bg} rounded-2xl p-6 border-4 ${getNguHanhColor(card2.nguHanh).border}`}>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">{card2.name}</div>
                <div className="text-sm font-semibold opacity-80">
                  {card2.type === 'nguhanh' && 'Ngũ Hành'}
                  {card2.type === 'thiencan' && 'Thiên Can'}
                  {card2.type === 'diachi' && 'Địa Chi'}
                </div>
                <div className="text-sm font-bold mt-1">({card2.nguHanh})</div>
              </div>
              <button
                onClick={() => setCard2(null)}
                className="mt-4 w-full bg-white/30 hover:bg-white/50 py-2 rounded-lg font-bold transition-all"
              >
                Xóa
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSelectingCard(2)}
              className="w-full h-48 border-4 border-dashed border-gray-300 rounded-2xl hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-300 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl mb-2">+</div>
                <div className="font-bold text-gray-600">Chọn Thẻ 2</div>
              </div>
            </button>
          )}
        </motion.div>
      </div>

      {/* Hiển thị kết quả phân tích */}
      <AnimatePresence>
        {relation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-2xl border-2 border-indigo-200">
              <h3 className="text-3xl font-black mb-6 text-center text-indigo-800 flex items-center justify-center gap-3">
                <span>⚡</span>
                Kết Quả Phân Tích Quan Hệ
                <span>⚡</span>
              </h3>

              <div className="space-y-6">
                {relation.map((rel, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-black text-gray-800">{rel.category}</h4>
                      <span className={`text-4xl ${rel.color}`}>{rel.icon}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className={`px-4 py-2 rounded-xl font-black text-lg ${rel.color} bg-white shadow-md`}>
                          {rel.label}
                        </span>
                      </div>
                      <div className="text-gray-700 font-semibold">{rel.desc}</div>
                      {rel.detail && (
                        <div className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg">
                          💡 {rel.detail}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal chọn thẻ */}
      <AnimatePresence>
        {selectingCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectingCard(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-6xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-black text-gray-800">
                  Chọn Thẻ {selectingCard}
                </h3>
                <button
                  onClick={() => setSelectingCard(null)}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold text-xl"
                >
                  ×
                </button>
              </div>

              {/* Ngũ Hành */}
              <div className="mb-8">
                <h4 className="text-xl font-black mb-4 text-orange-600">Ngũ Hành</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {nguHanhData.map((nh) => {
                    const card = { type: 'nguhanh' as CardType, name: nh.ten, nguHanh: nh.loai, data: nh };
                    const colors = getNguHanhColor(nh.loai);
                    return (
                      <button
                        key={nh.ten}
                        onClick={() => handleCardSelect(card)}
                        className={`${colors.bg} p-4 rounded-xl border-2 ${colors.border} hover:scale-105 transition-all duration-200 shadow-lg`}
                      >
                        <div className="text-2xl font-black">{nh.ten}</div>
                        <div className="text-xs font-semibold opacity-80">Ngũ Hành</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Thiên Can */}
              <div className="mb-8">
                <h4 className="text-xl font-black mb-4 text-indigo-600">Thiên Can</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {thienCanData.map((tc) => {
                    const card = { type: 'thiencan' as CardType, name: tc.ten, nguHanh: tc.nguHanh, data: tc };
                    const colors = getNguHanhColor(tc.nguHanh);
                    return (
                      <button
                        key={tc.ten}
                        onClick={() => handleCardSelect(card)}
                        className={`${colors.bg} p-4 rounded-xl border-2 ${colors.border} hover:scale-105 transition-all duration-200 shadow-lg`}
                      >
                        <div className="text-2xl font-black">{tc.ten}</div>
                        <div className="text-xs font-semibold opacity-80">Thiên Can</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Địa Chi */}
              <div className="mb-4">
                <h4 className="text-xl font-black mb-4 text-purple-600">Địa Chi</h4>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {diaChiData.map((dc) => {
                    const card = { type: 'diachi' as CardType, name: dc.ten, nguHanh: dc.nguHanh, data: dc };
                    const colors = getNguHanhColor(dc.nguHanh);
                    return (
                      <button
                        key={dc.ten}
                        onClick={() => handleCardSelect(card)}
                        className={`${colors.bg} p-4 rounded-xl border-2 ${colors.border} hover:scale-105 transition-all duration-200 shadow-lg`}
                      >
                        <div className="text-2xl font-black">{dc.ten}</div>
                        <div className="text-xs font-semibold opacity-80">Địa Chi</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chú thích */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
        <h4 className="font-black text-lg mb-4 text-gray-800 flex items-center gap-2">
          <span>💡</span> Hướng dẫn sử dụng:
        </h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-bold">• Bước 1:</span> Click vào ô "Chọn Thẻ 1" và chọn một thẻ bất kỳ (Ngũ Hành, Thiên Can, hoặc Địa Chi)</p>
          <p><span className="font-bold">• Bước 2:</span> Click vào ô "Chọn Thẻ 2" và chọn thẻ thứ hai</p>
          <p><span className="font-bold">• Bước 3:</span> Xem kết quả phân tích quan hệ giữa 2 thẻ</p>
          <p className="mt-4 font-bold">Các loại quan hệ:</p>
          <p><span className="font-bold text-green-600">• Tương Sinh:</span> Hỗ trợ, nuôi dưỡng lẫn nhau</p>
          <p><span className="font-bold text-red-600">• Tương Khắc:</span> Kiểm soát, chế ngự</p>
          <p><span className="font-bold text-green-600">• Hợp:</span> Hòa hợp, hỗ trợ tốt</p>
          <p><span className="font-bold text-red-600">• Xung:</span> Xung đột, đối lập</p>
          <p><span className="font-bold text-orange-600">• Hình:</span> Hình phạt, căng thẳng</p>
          <p><span className="font-bold text-red-500">• Hại:</span> Phá hoại âm thầm</p>
        </div>
      </div>
    </div>
  );
};
