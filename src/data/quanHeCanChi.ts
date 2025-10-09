import type { ThienCanQuanHe, DiaChiQuanHe } from '../types';

// Quan hệ Thiên Can
export const thienCanQuanHe: ThienCanQuanHe[] = [
  {
    can: 'Giáp',
    sinh: 'Bính, Đinh (Hỏa)',
    sinhYNghia: [
      'Giáp sinh Hỏa: Mộc sinh Hỏa, tốt cho sự nghiệp, danh tiếng',
      'Thể hiện sự phát triển, lan tỏa năng lượng',
      'Giúp người khác, có tác dụng tích cực'
    ],
    beSinh: 'Nhâm, Quý (Thủy)',
    beSinhYNghia: [
      'Thủy sinh Mộc: Được hỗ trợ, nuôi dưỡng',
      'Có quý nhân phù trợ, tài lộc ổn định',
      'Sức khỏe tốt, tinh thần minh mẫn'
    ],
    khac: 'Mậu, Kỷ (Thổ)',
    khacYNghia: [
      'Mộc khắc Thổ: Kiểm soát được tài chính, quyền lực',
      'Có khả năng quản lý, lãnh đạo',
      'Cần cẩn trọng không nên quá áp đặt'
    ],
    beKhac: 'Canh, Tân (Kim)',
    beKhacYNghia: [
      'Kim khắc Mộc: Bị áp lực, hạn chế, thách thức',
      'Dễ gặp khó khăn trong công việc, sức khỏe',
      'Cần học cách linh hoạt, kiên nhẫn'
    ],
    xung: 'Canh',
    xungYNghia: [
      'Giáp Canh xung: Xung mạnh nhất, Kim chặt Mộc',
      'Mâu thuẫn căng thẳng, dễ có tranh chấp',
      'Công việc thất bại, sức khỏe suy yếu',
      'Cần tránh va chạm, giữ hòa khí'
    ],
    hop: { voi: 'Kỷ', hoa: 'Thổ' },
    hopYNghia: [
      'Giáp Kỷ hợp hóa Thổ: Trung chính, vị kỷ',
      'Tốt cho công danh, ổn định tài chính',
      'Tính cách trung thực, đáng tin cậy',
      'Dễ được người khác quý trọng, tôn trọng'
    ],
  },
  {
    can: 'Ất',
    sinh: 'Bính, Đinh (Hỏa)',
    sinhYNghia: [
      'Ất sinh Hỏa: Mộc Âm nuôi lửa nhỏ, tinh tế',
      'Tốt cho học vấn, tài năng nghệ thuật',
      'Sự nuôi dưỡng nhẹ nhàng, bền vững'
    ],
    beSinh: 'Nhâm, Quý (Thủy)',
    beSinhYNghia: [
      'Thủy sinh Mộc Âm: Phát triển từ từ nhưng bền vững',
      'Có sự hỗ trợ tinh thần từ quý nhân',
      'Tài lộc ổn định, sức khỏe tốt'
    ],
    khac: 'Mậu, Kỷ (Thổ)',
    khacYNghia: [
      'Mộc Âm khắc Thổ: Khả năng quản lý tài chính khéo léo',
      'Biết cách xoay sở, linh hoạt',
      'Tuy nhẹ nhàng nhưng hiệu quả'
    ],
    beKhac: 'Canh, Tân (Kim)',
    beKhacYNghia: [
      'Kim khắc Mộc Âm: Áp lực tinh thần, lo âu',
      'Dễ bị tổn thương, cần bảo vệ bản thân',
      'Có thể gặp trở ngại từ cấp trên'
    ],
    xung: 'Tân',
    xungYNghia: [
      'Ất Tân xung: Kim Âm cắt Mộc Âm',
      'Xung nhẹ hơn Giáp-Canh nhưng vẫn bất lợi',
      'Dễ có tranh chấp nhỏ, mâu thuẫn ẩn',
      'Cần khéo léo hóa giải'
    ],
    hop: { voi: 'Canh', hoa: 'Kim' },
    hopYNghia: [
      'Ất Canh hợp hóa Kim: Nhân nghĩa kết hợp',
      'Tốt cho quan hệ xã hội, hợp tác',
      'Có tính cương nhu kết hợp',
      'Dễ thành công trong kinh doanh'
    ],
  },
  {
    can: 'Bính',
    sinh: 'Mậu, Kỷ (Thổ)',
    sinhYNghia: [
      'Bính sinh Thổ: Hỏa sinh Thổ, tạo nền tảng vững chắc',
      'Tốt cho ổn định, xây dựng cơ nghiệp',
      'Giúp củng cố địa vị, quyền lực'
    ],
    beSinh: 'Giáp, Ất (Mộc)',
    beSinhYNghia: [
      'Mộc sinh Hỏa: Được hỗ trợ, năng lượng dồi dào',
      'Có quý nhân giúp đỡ trong công việc',
      'Phát triển tốt, thăng tiến nhanh'
    ],
    khac: 'Canh, Tân (Kim)',
    khacYNghia: [
      'Hỏa khắc Kim: Kiểm soát được tài chính, vật chất',
      'Có khả năng kiếm tiền, tích lũy',
      'Cần cẩn trọng không nên quá tham'
    ],
    beKhac: 'Nhâm, Quý (Thủy)',
    beKhacYNghia: [
      'Thủy khắc Hỏa: Bị ngăn cản, hạn chế',
      'Dễ gặp khó khăn, trở ngại lớn',
      'Cần kiên trì, bền bỉ vượt qua'
    ],
    xung: 'Nhâm',
    xungYNghia: [
      'Bính Nhâm xung: Hỏa Dương gặp Thủy Dương',
      'Xung rất mạnh, xung đột gay gắt',
      'Sự nghiệp bất ổn, nhiều biến động',
      'Cần hòa giải, tránh đối đầu trực diện'
    ],
    hop: { voi: 'Tân', hoa: 'Thủy' },
    hopYNghia: [
      'Bính Tân hợp hóa Thủy: Uy quyền kết hợp',
      'Tốt cho quyền lực, địa vị',
      'Có khả năng lãnh đạo, quản lý',
      'Dễ được kính trọng, tin tưởng'
    ],
  },
  {
    can: 'Đinh',
    sinh: 'Mậu, Kỷ (Thổ)',
    sinhYNghia: [
      'Đinh sinh Thổ: Hỏa Âm ấm áp, nuôi dưỡng',
      'Tốt cho sự ổn định lâu dài',
      'Tạo nền tảng vững chắc từ từ'
    ],
    beSinh: 'Giáp, Ất (Mộc)',
    beSinhYNghia: [
      'Mộc sinh Hỏa Âm: Được nuôi dưỡng đều đặn',
      'Có sự hỗ trợ tinh tế từ quý nhân',
      'Phát triển bền vững, lâu dài'
    ],
    khac: 'Canh, Tân (Kim)',
    khacYNghia: [
      'Hỏa Âm khắc Kim: Luyện kim thành khí',
      'Kiểm soát tài chính khéo léo, tinh tế',
      'Biết cách tích lũy, đầu tư thông minh'
    ],
    beKhac: 'Nhâm, Quý (Thủy)',
    beKhacYNghia: [
      'Thủy khắc Hỏa Âm: Áp lực ẩn, khó khăn tinh thần',
      'Dễ bị dập tắt nhiệt huyết, ý chí',
      'Cần bảo vệ năng lượng nội tại'
    ],
    xung: 'Quý',
    xungYNghia: [
      'Đinh Quý xung: Hỏa Âm gặp Thủy Âm',
      'Xung nhẹ hơn Bính-Nhâm nhưng vẫn bất lợi',
      'Mâu thuẫn ẩn, khó hòa giải',
      'Cần khéo léo xử lý'
    ],
    hop: { voi: 'Nhâm', hoa: 'Mộc' },
    hopYNghia: [
      'Đinh Nhâm hợp hóa Mộc: Dâm dật, tình cảm',
      'Tốt cho quan hệ tình cảm, hôn nhân',
      'Nhưng dễ sa đà vào dục vọng',
      'Cần giữ được sự tỉnh táo'
    ],
  },
  {
    can: 'Mậu',
    sinh: 'Canh, Tân (Kim)',
    sinhYNghia: [
      'Mậu sinh Kim: Thổ sinh Kim, tích lũy tài sản',
      'Tốt cho của cải, tài chính',
      'Tạo nền tảng vật chất vững chắc'
    ],
    beSinh: 'Bính, Đinh (Hỏa)',
    beSinhYNghia: [
      'Hỏa sinh Thổ: Được hỗ trợ mạnh mẽ',
      'Có quý nhân giúp đỡ, phù trợ',
      'Sự nghiệp phát triển tốt'
    ],
    khac: 'Nhâm, Quý (Thủy)',
    khacYNghia: [
      'Thổ khắc Thủy: Kiểm soát được tài chính, dòng tiền',
      'Có khả năng ngăn chặn rủi ro',
      'Cần cẩn trọng không nên quá cứng nhắc'
    ],
    beKhac: 'Giáp, Ất (Mộc)',
    beKhacYNghia: [
      'Mộc khắc Thổ: Bị áp lực từ cấp trên, lãnh đạo',
      'Dễ gặp khó khăn trong công việc',
      'Cần biết cách ứng xử linh hoạt'
    ],
    hop: { voi: 'Quý', hoa: 'Hỏa' },
    hopYNghia: [
      'Mậu Quý hợp hóa Hỏa: Vô tình kết hợp',
      'Tốt cho danh tiếng, uy tín',
      'Nhưng dễ thiếu tình cảm thật',
      'Cần chân thành, thực tế'
    ],
  },
  {
    can: 'Kỷ',
    sinh: 'Canh, Tân (Kim)',
    sinhYNghia: [
      'Kỷ sinh Kim: Thổ Âm nuôi kim khí',
      'Tốt cho tích lũy tài sản từ từ',
      'Tạo nền tảng vật chất vững bền'
    ],
    beSinh: 'Bính, Đinh (Hỏa)',
    beSinhYNghia: [
      'Hỏa sinh Thổ Âm: Được nuôi dưỡng ấm áp',
      'Có sự hỗ trợ tinh tế, quan tâm',
      'Phát triển ổn định, bền vững'
    ],
    khac: 'Nhâm, Quý (Thủy)',
    khacYNghia: [
      'Thổ Âm khắc Thủy: Kiểm soát tài chính khéo léo',
      'Biết cách quản lý tiền bạc',
      'Tích lũy được của cải'
    ],
    beKhac: 'Giáp, Ất (Mộc)',
    beKhacYNghia: [
      'Mộc khắc Thổ Âm: Áp lực công việc, trách nhiệm',
      'Dễ bị kìm hãm, hạn chế',
      'Cần kiên trì, vượt qua khó khăn'
    ],
    hop: { voi: 'Giáp', hoa: 'Thổ' },
    hopYNghia: [
      'Kỷ Giáp hợp hóa Thổ: Trung chính kết hợp',
      'Tốt cho công danh, sự nghiệp',
      'Tính cách trung thực, đáng tin',
      'Dễ được quý trọng, tôn trọng'
    ],
  },
  {
    can: 'Canh',
    sinh: 'Nhâm, Quý (Thủy)',
    sinhYNghia: [
      'Canh sinh Thủy: Kim sinh Thủy, tốt cho trí tuệ',
      'Phát triển năng lực, kỹ năng',
      'Giúp người khác, có lợi ích chung'
    ],
    beSinh: 'Mậu, Kỷ (Thổ)',
    beSinhYNghia: [
      'Thổ sinh Kim: Được hỗ trợ vững chắc',
      'Có quý nhân phù trợ, nền tảng tốt',
      'Tài lộc ổn định, sức khỏe dồi dào'
    ],
    khac: 'Giáp, Ất (Mộc)',
    khacYNghia: [
      'Kim khắc Mộc: Kiểm soát được quyền lực, địa vị',
      'Có khả năng quản lý, điều hành',
      'Cần cẩn trọng không nên quá khắc nghiệt'
    ],
    beKhac: 'Bính, Đinh (Hỏa)',
    beKhacYNghia: [
      'Hỏa khắc Kim: Bị thử thách, rèn luyện',
      'Dễ gặp áp lực, khó khăn',
      'Nhưng cũng là cơ hội để trưởng thành'
    ],
    xung: 'Giáp',
    xungYNghia: [
      'Canh Giáp xung: Kim chặt Mộc, xung rất mạnh',
      'Mâu thuẫn gay gắt, xung đột lớn',
      'Công việc thất bại, sức khỏe yếu',
      'Cần tránh va chạm, giữ hòa khí'
    ],
    hop: { voi: 'Ất', hoa: 'Kim' },
    hopYNghia: [
      'Canh Ất hợp hóa Kim: Nhân nghĩa hòa hợp',
      'Tốt cho quan hệ đối tác, hợp tác',
      'Cương nhu kết hợp, hiệu quả cao',
      'Dễ thành công trong kinh doanh'
    ],
  },
  {
    can: 'Tân',
    sinh: 'Nhâm, Quý (Thủy)',
    sinhYNghia: [
      'Tân sinh Thủy: Kim Âm sinh Thủy nhẹ nhàng',
      'Tốt cho phát triển trí tuệ, học vấn',
      'Sự hỗ trợ tinh tế, hiệu quả'
    ],
    beSinh: 'Mậu, Kỷ (Thổ)',
    beSinhYNghia: [
      'Thổ sinh Kim Âm: Được nuôi dưỡng, bảo vệ',
      'Có quý nhân che chở, hỗ trợ',
      'Tài lộc ổn định, an toàn'
    ],
    khac: 'Giáp, Ất (Mộc)',
    khacYNghia: [
      'Kim Âm khắc Mộc: Kiểm soát khéo léo, tinh tế',
      'Biết cách quản lý, điều hành',
      'Hiệu quả cao nhưng không gây áp lực'
    ],
    beKhac: 'Bính, Đinh (Hỏa)',
    beKhacYNghia: [
      'Hỏa khắc Kim Âm: Bị rèn luyện, tôi luyện',
      'Áp lực lớn, thử thách khó khăn',
      'Cần kiên trì để vượt qua'
    ],
    xung: 'Ất',
    xungYNghia: [
      'Tân Ất xung: Kim Âm cắt Mộc Âm',
      'Xung nhẹ hơn Canh-Giáp nhưng vẫn bất lợi',
      'Mâu thuẫn ẩn, khó hòa giải',
      'Cần khéo léo xử lý'
    ],
    hop: { voi: 'Bính', hoa: 'Thủy' },
    hopYNghia: [
      'Tân Bính hợp hóa Thủy: Uy quyền hòa hợp',
      'Tốt cho địa vị, quyền lực',
      'Có khả năng lãnh đạo tốt',
      'Dễ được tôn trọng, tin tưởng'
    ],
  },
  {
    can: 'Nhâm',
    sinh: 'Giáp, Ất (Mộc)',
    sinhYNghia: [
      'Nhâm sinh Mộc: Thủy sinh Mộc, tốt cho phát triển',
      'Nuôi dưỡng tài năng, học vấn',
      'Giúp người khác thành công'
    ],
    beSinh: 'Canh, Tân (Kim)',
    beSinhYNghia: [
      'Kim sinh Thủy: Được hỗ trợ, tài trợ',
      'Có quý nhân giúp đỡ về tài chính',
      'Phát triển tốt, thông suốt'
    ],
    khac: 'Bính, Đinh (Hỏa)',
    khacYNghia: [
      'Thủy khắc Hỏa: Kiểm soát được danh tiếng, uy tín',
      'Có khả năng dập tắt tai họa',
      'Cần cẩn trọng không nên quá áp đặt'
    ],
    beKhac: 'Mậu, Kỷ (Thổ)',
    beKhacYNghia: [
      'Thổ khắc Thủy: Bị ngăn cản, hạn chế',
      'Dễ gặp khó khăn về tài chính, dòng tiền',
      'Cần linh hoạt, tìm đường vượt qua'
    ],
    xung: 'Bính',
    xungYNghia: [
      'Nhâm Bính xung: Thủy Dương gặp Hỏa Dương',
      'Xung rất mạnh, mâu thuẫn lớn',
      'Sự nghiệp bất ổn, nhiều biến động',
      'Cần hòa giải, tránh đối đầu'
    ],
    hop: { voi: 'Đinh', hoa: 'Mộc' },
    hopYNghia: [
      'Nhâm Đinh hợp hóa Mộc: Dâm dật hòa hợp',
      'Tốt cho tình cảm, quan hệ',
      'Nhưng dễ sa đà vào dục vọng',
      'Cần giữ được tỉnh táo'
    ],
  },
  {
    can: 'Quý',
    sinh: 'Giáp, Ất (Mộc)',
    sinhYNghia: [
      'Quý sinh Mộc: Thủy Âm nuôi Mộc nhẹ nhàng',
      'Tốt cho học vấn, phát triển tài năng',
      'Sự nuôi dưỡng tinh tế, bền vững'
    ],
    beSinh: 'Canh, Tân (Kim)',
    beSinhYNghia: [
      'Kim sinh Thủy Âm: Được hỗ trợ ổn định',
      'Có quý nhân phù trợ về tài chính',
      'Tích lũy được của cải từ từ'
    ],
    khac: 'Bính, Đinh (Hỏa)',
    khacYNghia: [
      'Thủy Âm khắc Hỏa: Kiểm soát khéo léo',
      'Biết cách xử lý vấn đề danh tiếng',
      'Hiệu quả cao nhưng nhẹ nhàng'
    ],
    beKhac: 'Mậu, Kỷ (Thổ)',
    beKhacYNghia: [
      'Thổ khắc Thủy Âm: Bị ngăn chặn, kìm hãm',
      'Áp lực về tài chính, dòng tiền',
      'Cần kiên trì, tìm cách vượt qua'
    ],
    xung: 'Đinh',
    xungYNghia: [
      'Quý Đinh xung: Thủy Âm gặp Hỏa Âm',
      'Xung nhẹ hơn Nhâm-Bính nhưng vẫn bất lợi',
      'Mâu thuẫn ẩn, khó giải quyết',
      'Cần khéo léo hòa giải'
    ],
    hop: { voi: 'Mậu', hoa: 'Hỏa' },
    hopYNghia: [
      'Quý Mậu hợp hóa Hỏa: Vô tình hòa hợp',
      'Tốt cho danh tiếng, uy tín',
      'Nhưng dễ thiếu tình cảm thật',
      'Cần chân thành trong giao tiếp'
    ],
  },
];

// Quan hệ Địa Chi - Lục Hợp, Lục Xung
export const diaChiQuanHe: DiaChiQuanHe[] = [
  {
    chi: 'Tý',
    lucHop: { voi: 'Sửu', hoa: 'Thổ' },
    xung: 'Ngọ',
    xungYNghia: [
      'Là vị trí của Đào Hoa nên vì tình cảm mà phiền não',
      'Bản thân lúc nào cũng lo lắng, buồn phiền, bất an',
      'Nhà hay nhiều chuyện, phiền nhiễu',
      'Nguy hại nhất là làm chuyện trái pháp luật'
    ],
    hinh: ['Mão'],
    hinhYNghia: [
      'Vô ân là người dễ bị phản bội, bạc tình bạc nghĩa',
      'Nhất là khi đi với người khác mình càng được thì người kia lại tổn',
      'Hay gặp tai nạn',
      'Sức khỏe mất dần, khó hồi phục'
    ],
    hai: 'Mùi',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Dậu',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Thân', chi2: 'Thìn', hoa: 'Thủy' },
    tamHoi: { chi1: 'Hợi', chi2: 'Sửu', hoa: 'Thủy' },
  },
  {
    chi: 'Sửu',
    lucHop: { voi: 'Tý', hoa: 'Thổ' },
    xung: 'Mùi',
    xungYNghia: [
      'Công việc chức vụ có nhiều biến động, thăng trầm',
      'Thường bị đổ vỡ, tan rã, không bền vững',
      'Trái ý với cấp trên, bị mất lòng tin',
      'Làm ăn khó phát triển, nhiều trở ngại'
    ],
    hinh: ['Tuất', 'Mùi'],
    hinhYNghia: [
      'Thế là bị người có thế lực hoặc có học vấn hãm hại',
      'Trung Hình - làm gì cũng khó thành công, dễ bất hoà',
      'Bị phạt do vi phạm luật pháp',
      'Bệnh nan y, khó chữa khỏi'
    ],
    hai: 'Ngọ',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Thìn',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Tị', chi2: 'Dậu', hoa: 'Kim' },
    tamHoi: { chi1: 'Tý', chi2: 'Hợi', hoa: 'Thủy' },
  },
  {
    chi: 'Dần',
    lucHop: { voi: 'Hợi', hoa: 'Mộc' },
    xung: 'Thân',
    xungYNghia: [
      'Dần - Thân là Dịch Mã nên dễ có việc phải di chuyển, xa nhà',
      'Phiền não xoay quanh công việc, chức vụ, quyền lợi',
      'Làm ăn nhiều thất bại, tài lộc bất ổn',
      'Nếu xấu: tai nạn giao thông, té ngã, gãy xương'
    ],
    hinh: ['Tị', 'Thân'],
    hinhYNghia: [
      'Vô ân là người dễ bị phản bội, bạc tình bạc nghĩa',
      'Nhất là khi đi với người khác mình càng được thì người kia lại tổn',
      'Hay gặp tai nạn',
      'Sức khỏe mất dần, khó hồi phục'
    ],
    hai: 'Tị',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Hợi',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Ngọ', chi2: 'Tuất', hoa: 'Hỏa' },
    tamHoi: { chi1: 'Mão', chi2: 'Thìn', hoa: 'Mộc' },
  },
  {
    chi: 'Mão',
    lucHop: { voi: 'Tuất', hoa: 'Hỏa' },
    xung: 'Dậu',
    xungYNghia: [
      'Là vị trí của Đào Hoa nên vì tình cảm mà phiền não',
      'Bản thân lúc nào cũng lo lắng, buồn phiền, bất an',
      'Nhà hay nhiều chuyện, phiền nhiễu',
      'Nguy hại nhất là làm chuyện trái pháp luật'
    ],
    hinh: ['Tý'],
    hinhYNghia: [
      'Vô ân là người dễ bị phản bội, bạc tình bạc nghĩa',
      'Nhất là khi đi với người khác mình càng được thì người kia lại tổn',
      'Hay gặp tai nạn',
      'Sức khỏe mất dần, khó hồi phục'
    ],
    hai: 'Thìn',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Ngọ',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Hợi', chi2: 'Mùi', hoa: 'Mộc' },
    tamHoi: { chi1: 'Dần', chi2: 'Thìn', hoa: 'Mộc' },
  },
  {
    chi: 'Thìn',
    lucHop: { voi: 'Dậu', hoa: 'Kim' },
    xung: 'Tuất',
    xungYNghia: [
      'Công việc chức vụ có nhiều biến động, thăng trầm',
      'Thường bị đổ vỡ, tan rã, không bền vững',
      'Trái ý với cấp trên, bị mất lòng tin',
      'Làm ăn khó phát triển, nhiều trở ngại'
    ],
    hinh: ['Thìn'],
    hinhYNghia: [
      'Tự hình là tự mình hại mình',
      'Tính tình cứng đầu, bướng bỉnh',
      'Hay tự trách, tự ti, tự làm khổ mình',
      'Dễ gặp hung hiểm, tai họa'
    ],
    hai: 'Mão',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Sửu',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Thân', chi2: 'Tý', hoa: 'Thủy' },
    tamHoi: { chi1: 'Mão', chi2: 'Dần', hoa: 'Mộc' },
  },
  {
    chi: 'Tị',
    lucHop: { voi: 'Thân', hoa: 'Thủy' },
    xung: 'Hợi',
    xungYNghia: [
      'Xung Hỏa - Thủy gây mâu thuẫn Âm Dương, bất hòa',
      'Tính tình thất thường, hay thay đổi, thiếu kiên định',
      'Công việc hay thất bại, nhiều trở ngại, không thuận lợi',
      'Sức khỏe kém, dễ mắc bệnh về tim mạch, thần kinh'
    ],
    hinh: ['Dần', 'Thân'],
    hinhYNghia: [
      'Vô ân là người dễ bị phản bội, bạc tình bạc nghĩa',
      'Nhất là khi đi với người khác mình càng được thì người kia lại tổn',
      'Hay gặp tai nạn',
      'Sức khỏe mất dần, khó hồi phục'
    ],
    hai: 'Dần',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Thân',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Sửu', chi2: 'Dậu', hoa: 'Kim' },
    tamHoi: { chi1: 'Ngọ', chi2: 'Mùi', hoa: 'Hỏa' },
  },
  {
    chi: 'Ngọ',
    lucHop: { voi: 'Mùi', hoa: 'Thổ' },
    xung: 'Tý',
    xungYNghia: [
      'Là vị trí của Đào Hoa nên vì tình cảm mà phiền não',
      'Bản thân lúc nào cũng lo lắng, buồn phiền, bất an',
      'Nhà hay nhiều chuyện, phiền nhiễu',
      'Nguy hại nhất là làm chuyện trái pháp luật'
    ],
    hinh: ['Ngọ'],
    hinhYNghia: [
      'Tự hình là tự mình hại mình',
      'Tính tình cứng đầu, bướng bỉnh',
      'Hay tự trách, tự ti, tự làm khổ mình',
      'Dễ gặp hung hiểm, tai họa'
    ],
    hai: 'Sửu',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Mão',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Dần', chi2: 'Tuất', hoa: 'Hỏa' },
    tamHoi: { chi1: 'Tị', chi2: 'Mùi', hoa: 'Hỏa' },
  },
  {
    chi: 'Mùi',
    lucHop: { voi: 'Ngọ', hoa: 'Thổ' },
    xung: 'Sửu',
    xungYNghia: [
      'Công việc chức vụ có nhiều biến động, thăng trầm',
      'Thường bị đổ vỡ, tan rã, không bền vững',
      'Trái ý với cấp trên, bị mất lòng tin',
      'Làm ăn khó phát triển, nhiều trở ngại'
    ],
    hinh: ['Tuất', 'Sửu'],
    hinhYNghia: [
      'Thế là bị người có thế lực hoặc có học vấn hãm hại',
      'Trung Hình - làm gì cũng khó thành công, dễ bất hoà',
      'Bị phạt do vi phạm luật pháp',
      'Bệnh nan y, khó chữa khỏi'
    ],
    hai: 'Tý',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Tuất',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Hợi', chi2: 'Mão', hoa: 'Mộc' },
    tamHoi: { chi1: 'Ngọ', chi2: 'Tị', hoa: 'Hỏa' },
  },
  {
    chi: 'Thân',
    lucHop: { voi: 'Tị', hoa: 'Thủy' },
    xung: 'Dần',
    xungYNghia: [
      'Dần - Thân là Dịch Mã nên dễ có việc phải di chuyển, xa nhà',
      'Phiền não xoay quanh công việc, chức vụ, quyền lợi',
      'Làm ăn nhiều thất bại, tài lộc bất ổn',
      'Nếu xấu: tai nạn giao thông, té ngã, gãy xương'
    ],
    hinh: ['Dần', 'Tị'],
    hinhYNghia: [
      'Vô ân là người dễ bị phản bội, bạc tình bạc nghĩa',
      'Nhất là khi đi với người khác mình càng được thì người kia lại tổn',
      'Hay gặp tai nạn',
      'Sức khỏe mất dần, khó hồi phục'
    ],
    hai: 'Hợi',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Tị',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Tý', chi2: 'Thìn', hoa: 'Thủy' },
    tamHoi: { chi1: 'Dậu', chi2: 'Tuất', hoa: 'Kim' },
  },
  {
    chi: 'Dậu',
    lucHop: { voi: 'Thìn', hoa: 'Kim' },
    xung: 'Mão',
    xungYNghia: [
      'Là vị trí của Đào Hoa nên vì tình cảm mà phiền não',
      'Bản thân lúc nào cũng lo lắng, buồn phiền, bất an',
      'Nhà hay nhiều chuyện, phiền nhiễu',
      'Nguy hại nhất là làm chuyện trái pháp luật'
    ],
    hinh: ['Dậu'],
    hinhYNghia: [
      'Tự hình là tự mình hại mình',
      'Tính tình cứng đầu, bướng bỉnh',
      'Hay tự trách, tự ti, tự làm khổ mình',
      'Dễ gặp hung hiểm, tai họa'
    ],
    hai: 'Tuất',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Tý',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Tị', chi2: 'Sửu', hoa: 'Kim' },
    tamHoi: { chi1: 'Thân', chi2: 'Tuất', hoa: 'Kim' },
  },
  {
    chi: 'Tuất',
    lucHop: { voi: 'Mão', hoa: 'Hỏa' },
    xung: 'Thìn',
    xungYNghia: [
      'Công việc chức vụ có nhiều biến động, thăng trầm',
      'Thường bị đổ vỡ, tan rã, không bền vững',
      'Trái ý với cấp trên, bị mất lòng tin',
      'Làm ăn khó phát triển, nhiều trở ngại'
    ],
    hinh: ['Sửu', 'Mùi'],
    hinhYNghia: [
      'Thế là bị người có thế lực hoặc có học vấn hãm hại',
      'Trung Hình - làm gì cũng khó thành công, dễ bất hoà',
      'Bị phạt do vi phạm luật pháp',
      'Bệnh nan y, khó chữa khỏi'
    ],
    hai: 'Dậu',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Mùi',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Dần', chi2: 'Ngọ', hoa: 'Hỏa' },
    tamHoi: { chi1: 'Dậu', chi2: 'Thân', hoa: 'Kim' },
  },
  {
    chi: 'Hợi',
    lucHop: { voi: 'Dần', hoa: 'Mộc' },
    xung: 'Tị',
    xungYNghia: [
      'Xung Thủy - Hỏa gây mâu thuẫn Âm Dương, bất hòa',
      'Tính tình thất thường, hay thay đổi, thiếu kiên định',
      'Công việc hay thất bại, nhiều trở ngại, không thuận lợi',
      'Sức khỏe kém, dễ mắc bệnh về tim mạch, thần kinh'
    ],
    hinh: ['Hợi'],
    hinhYNghia: [
      'Tự hình là tự mình hại mình',
      'Tính tình cứng đầu, bướng bỉnh',
      'Hay tự trách, tự ti, tự làm khổ mình',
      'Dễ gặp hung hiểm, tai họa'
    ],
    hai: 'Thân',
    haiYNghia: [
      'Là điều bất lợi dẫn đến sự khó khăn, chậm trễ',
      'Thường bị hãm hại, nhiều hao tổn về tiền bạc',
      'Mâu thuẫn cãi vã với vợ chồng, cha mẹ, anh em',
      'Nhà hay có chuyện đau ốm, bệnh tật'
    ],
    pha: 'Dần',
    phaYNghia: [
      'Quan hệ giữa hai người mất tình cảm hoặc bị phá hoại',
      'Sự nghiệp, tình cảm bị gián đoạn, khó duy trì lâu dài',
      'Làm ăn bị thất bại, tiền của tiêu hao nhanh chóng',
      'Thường có kẻ xấu phá hoại'
    ],
    tamHop: { chi1: 'Mão', chi2: 'Mùi', hoa: 'Mộc' },
    tamHoi: { chi1: 'Tý', chi2: 'Sửu', hoa: 'Thủy' },
  },
];
