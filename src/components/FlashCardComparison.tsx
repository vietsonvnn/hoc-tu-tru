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
  // Mapping Thiên Can -> Ngũ Hành
  const canToNguHanh: Record<string, NguHanhType> = {
    'Giáp': 'Mộc', 'Ất': 'Mộc',
    'Bính': 'Hỏa', 'Đinh': 'Hỏa',
    'Mậu': 'Thổ', 'Kỷ': 'Thổ',
    'Canh': 'Kim', 'Tân': 'Kim',
    'Nhâm': 'Thủy', 'Quý': 'Thủy'
  };

  // Hợp (5 cặp Thiên Can Hợp)
  const hops = [
    { pair: ['Giáp', 'Kỷ'], hoa: 'Thổ', desc: 'Giáp Kỷ hợp hóa Thổ - Trung hòa, vững chắc' },
    { pair: ['Ất', 'Canh'], hoa: 'Kim', desc: 'Ất Canh hợp hóa Kim - Cương nhu tương tế' },
    { pair: ['Bính', 'Tân'], hoa: 'Thủy', desc: 'Bính Tân hợp hóa Thủy - Âm dương điều hòa' },
    { pair: ['Đinh', 'Nhâm'], hoa: 'Mộc', desc: 'Đinh Nhâm hợp hóa Mộc - Văn võ song toàn' },
    { pair: ['Mậu', 'Quý'], hoa: 'Hỏa', desc: 'Mậu Quý hợp hóa Hỏa - Thủy hỏa ký tế' }
  ];

  for (const hop of hops) {
    if ((hop.pair[0] === can1 && hop.pair[1] === can2) || (hop.pair[0] === can2 && hop.pair[1] === can1)) {
      return {
        type: 'hợp',
        label: 'Thiên Can Hợp',
        icon: '🤝',
        color: 'text-green-600',
        desc: `${can1} hợp ${can2} hóa ${hop.hoa}`,
        detail: hop.desc
      };
    }
  }

  // Khắc (thông qua quan hệ Ngũ Hành)
  const nh1 = canToNguHanh[can1];
  const nh2 = canToNguHanh[can2];

  if (nh1 && nh2) {
    const nhRelation = analyzeNguHanhRelation(nh1, nh2);
    if (nhRelation.type === 'khắc') {
      return {
        type: 'khắc',
        label: 'Thiên Can Khắc',
        icon: '⚔',
        color: 'text-red-600',
        desc: `${can1} (${nh1}) khắc ${can2} (${nh2})`,
        detail: `${nh1} khắc ${nh2} - Tương khắc thông qua Ngũ Hành`
      };
    }
    if (nhRelation.type === 'sinh') {
      return {
        type: 'sinh',
        label: 'Thiên Can Sinh',
        icon: '→',
        color: 'text-blue-600',
        desc: `${can1} (${nh1}) sinh ${can2} (${nh2})`,
        detail: `${nh1} sinh ${nh2} - Tương sinh thông qua Ngũ Hành`
      };
    }
    if (nhRelation.type === 'đồng' && can1 !== can2) {
      return {
        type: 'đồng hành',
        label: 'Đồng Ngũ Hành',
        icon: '=',
        color: 'text-purple-600',
        desc: `${can1} và ${can2} cùng ${nh1}`,
        detail: 'Cùng Ngũ Hành, hỗ trợ lẫn nhau'
      };
    }
  }

  return { type: 'bình thường', label: 'Bình thường', icon: '↔', color: 'text-gray-600', desc: 'Không có quan hệ đặc biệt', detail: '' };
};

// Hàm phân tích quan hệ Địa Chi
const analyzeDiaChiRelation = (chi1: string, chi2: string) => {
  const allResults = [];

  // Lục Hợp (Hợp 2 chi)
  const lucHops = [
    { chi: ['Tý', 'Sửu'], hoa: 'Thổ', nghia: 'Tý Sửu hợp Thổ - Ổn định, vững chắc' },
    { chi: ['Dần', 'Hợi'], hoa: 'Mộc', nghia: 'Dần Hợi hợp Mộc - Phát triển, sinh trưởng' },
    { chi: ['Mão', 'Tuất'], hoa: 'Hỏa', nghia: 'Mão Tuất hợp Hỏa - Nhiệt huyết, sáng tạo' },
    { chi: ['Thìn', 'Dậu'], hoa: 'Kim', nghia: 'Thìn Dậu hợp Kim - Quyết đoán, sắc bén' },
    { chi: ['Tị', 'Thân'], hoa: 'Thủy', nghia: 'Tị Thân hợp Thủy - Thông minh, linh hoạt' },
    { chi: ['Ngọ', 'Mùi'], hoa: 'Thủy/Hỏa', nghia: 'Ngọ Mùi hợp - Âm dương hòa hợp' }
  ];

  for (const hop of lucHops) {
    if ((hop.chi[0] === chi1 && hop.chi[1] === chi2) || (hop.chi[0] === chi2 && hop.chi[1] === chi1)) {
      allResults.push({
        type: 'lục hợp',
        label: 'Lục Hợp (Địa Chi Hợp)',
        icon: '🤝',
        color: 'text-green-600',
        desc: `${chi1} hợp ${chi2} hóa ${hop.hoa}`,
        detail: hop.nghia
      });
    }
  }

  // Lục Xung
  const lucXungs = [
    { chi: ['Tý', 'Ngọ'], nghia: 'Bắc - Nam xung, Thủy - Hỏa đối lập' },
    { chi: ['Sửu', 'Mùi'], nghia: 'Đông Bắc - Tây Nam xung, Thổ - Thổ va chạm' },
    { chi: ['Dần', 'Thân'], nghia: 'Đông Bắc - Tây Nam xung, Mộc - Kim khắc' },
    { chi: ['Mão', 'Dậu'], nghia: 'Đông - Tây xung, Mộc - Kim đối đầu' },
    { chi: ['Thìn', 'Tuất'], nghia: 'Đông Nam - Tây Bắc xung, Thổ - Thổ va chạm' },
    { chi: ['Tị', 'Hợi'], nghia: 'Nam - Bắc xung, Hỏa - Thủy đối nghịch' }
  ];

  for (const xung of lucXungs) {
    if ((xung.chi[0] === chi1 && xung.chi[1] === chi2) || (xung.chi[0] === chi2 && xung.chi[1] === chi1)) {
      allResults.push({
        type: 'lục xung',
        label: 'Lục Xung (Địa Chi Xung)',
        icon: '⚔️',
        color: 'text-red-600',
        desc: `${chi1} xung ${chi2}`,
        detail: `Xung đột mạnh - ${xung.nghia}`
      });
    }
  }

  // Tam Hợp (cần 3 chi, ở đây chỉ note 2 chi có khả năng hợp)
  const tamHops = [
    { chi: ['Thân', 'Tý', 'Thìn'], hoa: 'Thủy', note: 'Thân Tý Thìn tam hợp Thủy cục' },
    { chi: ['Hợi', 'Mão', 'Mùi'], hoa: 'Mộc', note: 'Hợi Mão Mùi tam hợp Mộc cục' },
    { chi: ['Dần', 'Ngọ', 'Tuất'], hoa: 'Hỏa', note: 'Dần Ngọ Tuất tam hợp Hỏa cục' },
    { chi: ['Tị', 'Dậu', 'Sửu'], hoa: 'Kim', note: 'Tị Dậu Sửu tam hợp Kim cục' }
  ];

  for (const tamHop of tamHops) {
    if (tamHop.chi.includes(chi1) && tamHop.chi.includes(chi2)) {
      const missing = tamHop.chi.find(c => c !== chi1 && c !== chi2);
      allResults.push({
        type: 'bán hợp',
        label: `Bán Hợp (Thiếu ${missing})`,
        icon: '🔗',
        color: 'text-blue-600',
        desc: `${chi1} và ${chi2} có thể tam hợp ${tamHop.hoa} cục`,
        detail: `${tamHop.note}. Cần thêm ${missing} để hoàn thiện tam hợp.`
      });
    }
  }

  // Lục Hại
  const lucHais = [
    { chi: ['Tý', 'Mùi'], nghia: 'Tý Mùi hại - Ngăn cản phát triển' },
    { chi: ['Sửu', 'Ngọ'], nghia: 'Sửu Ngọ hại - Cản trở tiến bộ' },
    { chi: ['Dần', 'Tị'], nghia: 'Dần Tị hại - Phá hoại hòa hợp' },
    { chi: ['Mão', 'Thìn'], nghia: 'Mão Thìn hại - Tổn hại âm thầm' },
    { chi: ['Thân', 'Hợi'], nghia: 'Thân Hợi hại - Phá hủy quan hệ' },
    { chi: ['Dậu', 'Tuất'], nghia: 'Dậu Tuất hại - Làm tổn thương' }
  ];

  for (const hai of lucHais) {
    if ((hai.chi[0] === chi1 && hai.chi[1] === chi2) || (hai.chi[0] === chi2 && hai.chi[1] === chi1)) {
      allResults.push({
        type: 'lục hại',
        label: 'Lục Hại (Địa Chi Hại)',
        icon: '💢',
        color: 'text-red-500',
        desc: `${chi1} hại ${chi2}`,
        detail: hai.nghia
      });
    }
  }

  // Tự Hình (tự hình phạt)
  const tuHinhs = [
    { chi: ['Thìn', 'Thìn'], nghia: 'Thìn tự hình - Tự làm khó mình' },
    { chi: ['Ngọ', 'Ngọ'], nghia: 'Ngọ tự hình - Tự phá hoại' },
    { chi: ['Dậu', 'Dậu'], nghia: 'Dậu tự hình - Tự gây rắc rối' },
    { chi: ['Hợi', 'Hợi'], nghia: 'Hợi tự hình - Tự hại bản thân' }
  ];

  for (const tuHinh of tuHinhs) {
    if (chi1 === chi2 && tuHinh.chi[0] === chi1) {
      allResults.push({
        type: 'tự hình',
        label: 'Tự Hình',
        icon: '🔄',
        color: 'text-orange-600',
        desc: `${chi1} gặp ${chi2} (tự hình)`,
        detail: tuHinh.nghia
      });
    }
  }

  // Tương Hình (hình phạt)
  const tuongHinhs = [
    { chi: ['Tý', 'Mão'], nghia: 'Tý Mão hình - Vô lễ, mất kính trọng' },
    { chi: ['Dần', 'Tị', 'Thân'], nghia: 'Dần Tị Thân tam hình - Hình phạt tam hợp, cực kỳ hung' },
    { chi: ['Sửu', 'Tuất', 'Mùi'], nghia: 'Sửu Tuất Mùi tam hình - Hình phạt thế lực' }
  ];

  for (const hinh of tuongHinhs) {
    if (hinh.chi.includes(chi1) && hinh.chi.includes(chi2) && chi1 !== chi2) {
      allResults.push({
        type: 'hình',
        label: 'Tương Hình (Hình Phạt)',
        icon: '⚡',
        color: 'text-orange-600',
        desc: `${chi1} hình ${chi2}`,
        detail: hinh.nghia
      });
    }
  }

  // Phá (Tương Phá)
  const tuongPhas = [
    { chi: ['Tý', 'Dậu'], nghia: 'Tý Dậu phá - Phá hoại quan hệ' },
    { chi: ['Sửu', 'Thìn'], nghia: 'Sửu Thìn phá - Phá vỡ cục diện' },
    { chi: ['Dần', 'Hợi'], nghia: 'Dần Hợi phá - Phá tan kế hoạch' },
    { chi: ['Mão', 'Ngọ'], nghia: 'Mão Ngọ phá - Phá hủy tình cảm' },
    { chi: ['Tị', 'Thân'], nghia: 'Tị Thân phá - Phá bỏ thỏa thuận' },
    { chi: ['Mùi', 'Tuất'], nghia: 'Mùi Tuất phá - Phá vỡ đồng minh' }
  ];

  for (const pha of tuongPhas) {
    if ((pha.chi[0] === chi1 && pha.chi[1] === chi2) || (pha.chi[0] === chi2 && pha.chi[1] === chi1)) {
      allResults.push({
        type: 'phá',
        label: 'Tương Phá (Địa Chi Phá)',
        icon: '💥',
        color: 'text-red-400',
        desc: `${chi1} phá ${chi2}`,
        detail: pha.nghia
      });
    }
  }

  return allResults.length > 0 ? allResults : [{ type: 'bình thường', label: 'Bình thường', icon: '↔', color: 'text-gray-600', desc: 'Không có quan hệ đặc biệt', detail: 'Hai chi này không có quan hệ đặc biệt nào đáng chú ý' }];
};

export const FlashCardComparison = () => {
  const [card1, setCard1] = useState<Card | null>(null);
  const [card2, setCard2] = useState<Card | null>(null);
  const [card3, setCard3] = useState<Card | null>(null);
  const [selectingCard, setSelectingCard] = useState<1 | 2 | 3 | null>(null);

  const handleCardSelect = (card: Card) => {
    if (selectingCard === 1) {
      setCard1(card);
      setSelectingCard(null);
    } else if (selectingCard === 2) {
      setCard2(card);
      setSelectingCard(null);
    } else if (selectingCard === 3) {
      setCard3(card);
      setSelectingCard(null);
    }
  };

  const handleSwap = () => {
    const temp = card1;
    setCard1(card2);
    setCard2(temp);
  };

  const analyzeRelation = (c1: Card, c2: Card) => {
    const results = [];

    // Quan hệ Ngũ Hành
    const nguHanhRelation = analyzeNguHanhRelation(c1.nguHanh, c2.nguHanh);
    results.push({
      category: 'Quan Hệ Ngũ Hành',
      pair: `${c1.name} ↔ ${c2.name}`,
      ...nguHanhRelation
    });

    // Nếu cả 2 đều là Thiên Can
    if (c1.type === 'thiencan' && c2.type === 'thiencan') {
      const canRelation = analyzeThienCanRelation(c1.name, c2.name);
      results.push({
        category: 'Quan Hệ Thiên Can',
        pair: `${c1.name} ↔ ${c2.name}`,
        ...canRelation
      });
    }

    // Nếu cả 2 đều là Địa Chi - có thể có nhiều quan hệ
    if (c1.type === 'diachi' && c2.type === 'diachi') {
      const chiRelations = analyzeDiaChiRelation(c1.name, c2.name);
      // Địa Chi có thể có nhiều quan hệ cùng lúc
      if (Array.isArray(chiRelations)) {
        chiRelations.forEach(rel => {
          results.push({
            category: 'Quan Hệ Địa Chi',
            pair: `${c1.name} ↔ ${c2.name}`,
            ...rel
          });
        });
      }
    }

    return results;
  };

  const getAllRelations = () => {
    const allRelations = [];

    if (card1 && card2) {
      allRelations.push({
        title: 'Thẻ 1 ↔ Thẻ 2',
        relations: analyzeRelation(card1, card2)
      });
    }

    if (card1 && card3) {
      allRelations.push({
        title: 'Thẻ 1 ↔ Thẻ 3',
        relations: analyzeRelation(card1, card3)
      });
    }

    if (card2 && card3) {
      allRelations.push({
        title: 'Thẻ 2 ↔ Thẻ 3',
        relations: analyzeRelation(card2, card3)
      });
    }

    // Kiểm tra Tam Hợp hoàn chỉnh khi có đủ 3 Địa Chi
    if (card1 && card2 && card3 &&
        card1.type === 'diachi' && card2.type === 'diachi' && card3.type === 'diachi') {
      const tamHops = [
        { chi: ['Thân', 'Tý', 'Thìn'], hoa: 'Thủy', nghia: 'Thân Tý Thìn tam hợp Thủy cục - Thông minh, linh hoạt, khôn khéo' },
        { chi: ['Hợi', 'Mão', 'Mùi'], hoa: 'Mộc', nghia: 'Hợi Mão Mùi tam hợp Mộc cục - Nhân từ, phát triển, sáng tạo' },
        { chi: ['Dần', 'Ngọ', 'Tuất'], hoa: 'Hỏa', nghia: 'Dần Ngọ Tuất tam hợp Hỏa cục - Nhiệt huyết, quyền lực, hành động' },
        { chi: ['Tị', 'Dậu', 'Sửu'], hoa: 'Kim', nghia: 'Tị Dậu Sửu tam hợp Kim cục - Quyết đoán, cứng rắn, nghĩa khí' }
      ];

      const threeChis = [card1.name, card2.name, card3.name].sort();

      for (const tamHop of tamHops) {
        const sortedTamHop = [...tamHop.chi].sort();
        if (JSON.stringify(threeChis) === JSON.stringify(sortedTamHop)) {
          allRelations.push({
            title: '🎯 Tam Hợp Hoàn Chỉnh (3 Thẻ)',
            relations: [{
              category: 'Tam Hợp Địa Chi',
              pair: `${card1.name} - ${card2.name} - ${card3.name}`,
              type: 'tam hợp',
              label: `Tam Hợp ${tamHop.hoa} Cục`,
              icon: '✨',
              color: 'text-purple-600',
              desc: `${tamHop.chi.join(' - ')} hợp hóa ${tamHop.hoa}`,
              detail: `${tamHop.nghia}. Đây là cục hợp mạnh nhất, ba chi cùng hướng về một mục tiêu.`
            }]
          });
        }
      }

      // Kiểm tra Tam Hình
      const tamHinhs = [
        { chi: ['Dần', 'Tị', 'Thân'], nghia: 'Dần Tị Thân tam hình - Hình phạt cực hung, nhiều tai họa' },
        { chi: ['Sửu', 'Tuất', 'Mùi'], nghia: 'Sửu Tuất Mùi tam hình - Hình phạt thế lực, quyền lực đấu đá' }
      ];

      for (const tamHinh of tamHinhs) {
        const sortedTamHinh = [...tamHinh.chi].sort();
        if (JSON.stringify(threeChis) === JSON.stringify(sortedTamHinh)) {
          allRelations.push({
            title: '⚠️ Tam Hình Hoàn Chỉnh (3 Thẻ)',
            relations: [{
              category: 'Tam Hình Địa Chi',
              pair: `${card1.name} - ${card2.name} - ${card3.name}`,
              type: 'tam hình',
              label: 'Tam Hình (Cực Hung)',
              icon: '⛔',
              color: 'text-red-700',
              desc: `${tamHinh.chi.join(' - ')} tam hình`,
              detail: tamHinh.nghia
            }]
          });
        }
      }
    }

    return allRelations.length > 0 ? allRelations : null;
  };

  const allRelations = getAllRelations();

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
        <p className="text-gray-900 dark:text-gray-100 text-lg">
          Chọn 2-3 thẻ bất kỳ để xem mối quan hệ giữa chúng
        </p>
      </motion.div>

      {/* Khu vực chọn 3 thẻ */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Nút hoán đổi giữa thẻ 1 và 2 */}
        {card1 && card2 && (
          <div className="md:col-span-3 flex justify-center -mb-4 relative z-10">
            <motion.button
              onClick={handleSwap}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <span className="text-xl">⇄</span>
              Hoán Đổi Thẻ 1 ↔ 2
            </motion.button>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                <div className="font-bold text-gray-900 dark:text-gray-100">Chọn Thẻ 1</div>
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
                <div className="font-bold text-gray-900 dark:text-gray-100">Chọn Thẻ 2</div>
              </div>
            </button>
          )}
        </motion.div>

        {/* Thẻ 3 (Optional) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-black mb-4 text-center text-pink-600">Thẻ 3 (Tùy chọn)</h3>
          {card3 ? (
            <div className={`${getNguHanhColor(card3.nguHanh).bg} rounded-2xl p-6 border-4 ${getNguHanhColor(card3.nguHanh).border}`}>
              <div className="text-center">
                <div className="text-4xl font-black mb-2">{card3.name}</div>
                <div className="text-sm font-semibold opacity-80">
                  {card3.type === 'nguhanh' && 'Ngũ Hành'}
                  {card3.type === 'thiencan' && 'Thiên Can'}
                  {card3.type === 'diachi' && 'Địa Chi'}
                </div>
                <div className="text-sm font-bold mt-1">({card3.nguHanh})</div>
              </div>
              <button
                onClick={() => setCard3(null)}
                className="mt-4 w-full bg-white/30 hover:bg-white/50 py-2 rounded-lg font-bold transition-all"
              >
                Xóa
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSelectingCard(3)}
              className="w-full h-48 border-4 border-dashed border-gray-300 rounded-2xl hover:border-pink-400 hover:bg-pink-50/50 transition-all duration-300 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl mb-2">+</div>
                <div className="font-bold text-gray-900 dark:text-gray-100">Chọn Thẻ 3</div>
              </div>
            </button>
          )}
        </motion.div>
      </div>

      {/* Hiển thị kết quả phân tích */}
      <AnimatePresence>
        {allRelations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-12"
          >
            <div className="space-y-8">
              {allRelations.map((relationGroup, groupIndex) => (
                <div key={groupIndex} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-2xl border-2 border-indigo-200">
                  <h3 className="text-3xl font-black mb-6 text-center text-indigo-800 flex items-center justify-center gap-3">
                    <span>⚡</span>
                    {relationGroup.title}
                    <span>⚡</span>
                  </h3>

                  <div className="space-y-6">
                    {relationGroup.relations.map((rel: any, index: number) => (
                      <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-black text-gray-900 dark:text-gray-100">{rel.category}</h4>
                            <div className="text-sm text-gray-900 dark:text-gray-100 font-semibold mt-1">{rel.pair}</div>
                          </div>
                          <span className={`text-4xl ${rel.color}`}>{rel.icon}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className={`px-4 py-2 rounded-xl font-black text-lg ${rel.color} bg-white shadow-md`}>
                              {rel.label}
                            </span>
                          </div>
                          <div className="text-gray-900 dark:text-gray-100 font-semibold">{rel.desc}</div>
                          {rel.detail && (
                            <div className="text-sm text-gray-900 dark:text-gray-100 italic bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                              💡 {rel.detail}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
        <h4 className="font-black text-lg mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <span>💡</span> Hướng dẫn sử dụng:
        </h4>
        <div className="space-y-2 text-sm text-gray-900 dark:text-gray-100">
          <p><span className="font-bold">• Bước 1:</span> Click vào ô "Chọn Thẻ 1" và chọn một thẻ bất kỳ (Ngũ Hành, Thiên Can, hoặc Địa Chi)</p>
          <p><span className="font-bold">• Bước 2:</span> Click vào ô "Chọn Thẻ 2" và chọn thẻ thứ hai</p>
          <p><span className="font-bold">• Bước 3:</span> (Tùy chọn) Click vào ô "Chọn Thẻ 3" để so sánh thêm thẻ thứ ba</p>
          <p><span className="font-bold">• Hoán đổi:</span> Click nút "Hoán Đổi" để đổi vị trí Thẻ 1 và Thẻ 2</p>
          <p><span className="font-bold">• Kết quả:</span> Xem phân tích quan hệ giữa tất cả các cặp thẻ (1↔2, 1↔3, 2↔3)</p>
          <p className="mt-4 font-bold text-blue-700">Quan hệ Ngũ Hành:</p>
          <p><span className="font-bold text-green-600">• Tương Sinh →:</span> Hỗ trợ, nuôi dưỡng lẫn nhau</p>
          <p><span className="font-bold text-red-600">• Tương Khắc ⚔:</span> Kiểm soát, chế ngự</p>

          <p className="mt-4 font-bold text-indigo-700">Quan hệ Thiên Can:</p>
          <p><span className="font-bold text-green-600">• Hợp 🤝:</span> Giáp-Kỷ, Ất-Canh, Bính-Tân, Đinh-Nhâm, Mậu-Quý</p>
          <p><span className="font-bold text-red-600">• Xung ⚔️:</span> Xung đột, đối lập</p>

          <p className="mt-4 font-bold text-purple-700">Quan hệ Địa Chi (phức tạp hơn):</p>
          <p><span className="font-bold text-green-600">• Lục Hợp 🤝:</span> 6 cặp hợp 2 chi (Tý-Sửu, Dần-Hợi...)</p>
          <p><span className="font-bold text-purple-600">• Tam Hợp ✨:</span> 3 chi hợp cục (Thân-Tý-Thìn, Hợi-Mão-Mùi...)</p>
          <p><span className="font-bold text-blue-600">• Bán Hợp 🔗:</span> 2 chi có thể tam hợp (thiếu 1 chi)</p>
          <p><span className="font-bold text-red-600">• Lục Xung ⚔️:</span> 6 cặp xung đối lập (Tý-Ngọ, Mão-Dậu...)</p>
          <p><span className="font-bold text-orange-600">• Tương Hình ⚡:</span> Hình phạt (Tý-Mão, Dần-Tị-Thân...)</p>
          <p><span className="font-bold text-red-500">• Lục Hại 💢:</span> 6 cặp hại âm thầm (Tý-Mùi, Sửu-Ngọ...)</p>
          <p><span className="font-bold text-red-400">• Tương Phá 💥:</span> Phá hoại quan hệ (Tý-Dậu, Mão-Ngọ...)</p>
          <p><span className="font-bold text-orange-600">• Tự Hình 🔄:</span> Thìn-Thìn, Ngọ-Ngọ, Dậu-Dậu, Hợi-Hợi</p>

          <p className="mt-4 text-xs italic text-gray-900 dark:text-gray-100">💡 Lưu ý: Địa Chi có thể có NHIỀU quan hệ cùng lúc (VD: Tị-Thân vừa Lục Hợp, vừa Tương Phá)</p>
        </div>
      </div>
    </div>
  );
};
