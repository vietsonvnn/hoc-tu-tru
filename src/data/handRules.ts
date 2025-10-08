// Quy Tắc Bàn Tay - Hand Rules for Tứ Trụ
// Vận dụng tất cả kiến thức: Ngũ Hành, Thiên Can, Địa Chi, Trường Sinh

export interface FingerPosition {
  finger: string; // Ngón tay
  position: number; // Vị trí (1-12)
  diaChi: string; // Địa Chi
  thang: number; // Tháng âm lịch
  nguHanh: string; // Ngũ Hành
  mua: string; // Mùa
  yNghia: string; // Ý nghĩa
}

export interface HandRule {
  id: string;
  title: string;
  description: string;
  category: 'diachi' | 'thiencan' | 'truongsinh' | 'quanhe';
  steps: string[];
  applications: string[];
  tips: string[];
}

// 12 vị trí trên bàn tay (theo chiều kim đồng hồ từ đốt ngón trỏ)
export const handPositions: FingerPosition[] = [
  {
    finger: 'Trỏ - Đốt dưới',
    position: 1,
    diaChi: 'Dần',
    thang: 1,
    nguHanh: 'Mộc',
    mua: 'Xuân',
    yNghia: 'Tháng giêng, đầu xuân, Mộc sinh'
  },
  {
    finger: 'Trỏ - Đốt giữa',
    position: 2,
    diaChi: 'Mão',
    thang: 2,
    nguHanh: 'Mộc',
    mua: 'Xuân',
    yNghia: 'Tháng hai, giữa xuân, Mộc vượng'
  },
  {
    finger: 'Trỏ - Đốt trên',
    position: 3,
    diaChi: 'Thìn',
    thang: 3,
    nguHanh: 'Thổ',
    mua: 'Xuân',
    yNghia: 'Tháng ba, cuối xuân, Mộ của Thủy'
  },
  {
    finger: 'Giữa - Đốt trên',
    position: 4,
    diaChi: 'Tị',
    thang: 4,
    nguHanh: 'Hỏa',
    mua: 'Hè',
    yNghia: 'Tháng tư, đầu hè, Hỏa sinh'
  },
  {
    finger: 'Giữa - Đốt giữa',
    position: 5,
    diaChi: 'Ngọ',
    thang: 5,
    nguHanh: 'Hỏa',
    mua: 'Hè',
    yNghia: 'Tháng năm, giữa hè, Hỏa vượng'
  },
  {
    finger: 'Giữa - Đốt dưới',
    position: 6,
    diaChi: 'Mùi',
    thang: 6,
    nguHanh: 'Thổ',
    mua: 'Hè',
    yNghia: 'Tháng sáu, cuối hè, Mộ của Mộc'
  },
  {
    finger: 'Áp út - Đốt dưới',
    position: 7,
    diaChi: 'Thân',
    thang: 7,
    nguHanh: 'Kim',
    mua: 'Thu',
    yNghia: 'Tháng bảy, đầu thu, Kim sinh'
  },
  {
    finger: 'Áp út - Đốt giữa',
    position: 8,
    diaChi: 'Dậu',
    thang: 8,
    nguHanh: 'Kim',
    mua: 'Thu',
    yNghia: 'Tháng tám, giữa thu, Kim vượng'
  },
  {
    finger: 'Áp út - Đốt trên',
    position: 9,
    diaChi: 'Tuất',
    thang: 9,
    nguHanh: 'Thổ',
    mua: 'Thu',
    yNghia: 'Tháng chín, cuối thu, Mộ của Hỏa'
  },
  {
    finger: 'Út - Đốt trên',
    position: 10,
    diaChi: 'Hợi',
    thang: 10,
    nguHanh: 'Thủy',
    mua: 'Đông',
    yNghia: 'Tháng mười, đầu đông, Thủy sinh'
  },
  {
    finger: 'Út - Đốt giữa',
    position: 11,
    diaChi: 'Tý',
    thang: 11,
    nguHanh: 'Thủy',
    mua: 'Đông',
    yNghia: 'Tháng mười một, giữa đông, Thủy vượng'
  },
  {
    finger: 'Út - Đốt dưới',
    position: 12,
    diaChi: 'Sửu',
    thang: 12,
    nguHanh: 'Thổ',
    mua: 'Đông',
    yNghia: 'Tháng mười hai, cuối đông, Mộ của Kim'
  }
];

// Các quy tắc bàn tay
export const handRules: HandRule[] = [
  {
    id: 'diachi-12-thang',
    title: 'Quy Tắc 12 Địa Chi - 12 Tháng',
    description: 'Dùng bàn tay trái để nhớ 12 Địa Chi và 12 tháng âm lịch',
    category: 'diachi',
    steps: [
      'Duỗi bàn tay trái, lòng bàn tay hướng về phía mình',
      'Bắt đầu từ đốt dưới ngón trỏ = Dần (tháng 1)',
      'Đi theo chiều kim đồng hồ: Trỏ lên → Giữa xuống → Áp út xuống → Út lên',
      'Kết thúc ở đốt dưới ngón út = Sửu (tháng 12)',
      'Ngón cái dùng để chỉ/đếm các vị trí'
    ],
    applications: [
      'Xác định Địa Chi của tháng sinh',
      'Tính Địa Chi của giờ sinh',
      'Xem quan hệ giữa các chi',
      'Tìm vị trí Trường Sinh, Đế Vượng'
    ],
    tips: [
      '4 ngón tay × 3 đốt = 12 vị trí',
      'Dần-Mão-Thìn (Xuân) ở ngón trỏ',
      'Tị-Ngọ-Mùi (Hè) ở ngón giữa',
      'Thân-Dậu-Tuất (Thu) ở ngón áp út',
      'Hợi-Tý-Sửu (Đông) ở ngón út',
      'Mỗi ngón = 1 mùa'
    ]
  },
  {
    id: 'thien-can-dinh-vi',
    title: 'Quy Tắc Thiên Can Định Vị',
    description: 'Xác định Thiên Can năm/ngày từ Địa Chi trên bàn tay',
    category: 'thiencan',
    steps: [
      'Tìm Địa Chi năm trên bàn tay (ví dụ: năm Dần)',
      'Áp dụng công thức: Giáp/Kỷ năm gặp Bính Dần đầu',
      'Nếu năm thiên can là Giáp hoặc Kỷ → năm đó Dần tháng bắt đầu bằng Bính',
      'Đi theo thứ tự 10 Can: Giáp-Ất-Bính-Đinh-Mậu-Kỷ-Canh-Tân-Nhâm-Quý',
      'Đếm tiếp các tháng theo vòng 12 chi'
    ],
    applications: [
      'Tính Thiên Can của các tháng trong năm',
      'Lập Tứ Trụ (năm, tháng, ngày, giờ)',
      'Xác định Can chi của ngày cụ thể'
    ],
    tips: [
      'Giáp/Kỷ năm → Dần tháng 1 là Bính Dần',
      'Ất/Canh năm → Dần tháng 1 là Mậu Dần',
      'Bính/Tân năm → Dần tháng 1 là Canh Dần',
      'Đinh/Nhâm năm → Dần tháng 1 là Nhâm Dần',
      'Mậu/Quý năm → Dần tháng 1 là Giáp Dần'
    ]
  },
  {
    id: 'truong-sinh-can-duong',
    title: 'Quy Tắc Trường Sinh Can Dương',
    description: 'Tìm 12 cung Trường Sinh cho 5 Can Dương (Giáp, Bính, Mậu, Canh, Nhâm)',
    category: 'truongsinh',
    steps: [
      'Xác định Can cần tìm (ví dụ: Giáp Mộc)',
      'Tìm vị trí Trường Sinh: Giáp sinh ở Hợi',
      'Đi THUẬN chiều kim đồng hồ trên bàn tay',
      'Hợi (Sinh) → Tý (Dục) → Sửu (Đới) → Dần (Quan) → Mão (Vượng) → ...',
      '12 bước = 12 cung: Sinh-Dục-Đới-Quan-Vượng-Suy-Bệnh-Tử-Mộ-Tuyệt-Thai-Dưỡng'
    ],
    applications: [
      'Xem cung Trường Sinh của Nhật Can',
      'Đánh giá vượng suy của Can tại Địa Chi',
      'Luận đoán vận khí theo 12 cung'
    ],
    tips: [
      'Can DƯƠNG đi THUẬN (theo chiều kim đồng hồ)',
      'Giáp sinh Hợi, Bính/Mậu sinh Dần, Canh sinh Tị, Nhâm sinh Thân',
      'Đế Vượng cách Trường Sinh 4 bước (Giáp vượng Mão)'
    ]
  },
  {
    id: 'truong-sinh-can-am',
    title: 'Quy Tắc Trường Sinh Can Âm',
    description: 'Tìm 12 cung Trường Sinh cho 5 Can Âm (Ất, Đinh, Kỷ, Tân, Quý)',
    category: 'truongsinh',
    steps: [
      'Xác định Can Âm cần tìm (ví dụ: Ất Mộc)',
      'Tìm vị trí Trường Sinh: Ất sinh ở Ngọ',
      'Đi NGƯỢC chiều kim đồng hồ trên bàn tay',
      'Ngọ (Sinh) → Tị (Dục) → Thìn (Đới) → Mão (Quan) → Dần (Vượng) → ...',
      'Ngược chiều nhưng vẫn đủ 12 cung'
    ],
    applications: [
      'Xem cung Trường Sinh cho Nhật Can Âm',
      'So sánh sự khác biệt giữa Can Âm/Dương',
      'Luận Tứ Trụ có Can Âm'
    ],
    tips: [
      'Can ÂM đi NGƯỢC (ngược chiều kim đồng hồ)',
      'Ất sinh Ngọ, Đinh/Kỷ sinh Dậu, Tân sinh Tý, Quý sinh Mão',
      'Đế Vượng vẫn cách Trường Sinh 4 bước nhưng theo hướng ngược'
    ]
  },
  {
    id: 'xung-hop-hai-he',
    title: 'Quy Tắc Xung-Hợp-Hại-Hẹ',
    description: 'Dùng bàn tay để tìm quan hệ giữa các Địa Chi',
    category: 'quanhe',
    steps: [
      'Tìm 2 Địa Chi cần xem quan hệ trên bàn tay',
      'XUNG (đối xung): Cách nhau 6 vị trí (đối diện)',
      'HỢP (lục hợp): Cách nhau 5 hoặc 7 vị trí',
      'HẠI (tương hại): Ngay cạnh các cặp Hợp',
      'HỆ (tương hình): Cách nhau 3 vị trí (góc tam giác)'
    ],
    applications: [
      'Xem hợp/xung giữa năm-tháng-ngày-giờ',
      'Luận hôn nhân, đối tác',
      'Chọn ngày giờ tốt',
      'Xem xung-hợp trong Đại Vận, Lưu Niên'
    ],
    tips: [
      'XUNG: Tý-Ngọ, Sửu-Mùi, Dần-Thân, Mão-Dậu, Thìn-Tuất, Tị-Hợi',
      'HỢP: Tý-Sửu, Dần-Hợi, Mão-Tuất, Thìn-Dậu, Tị-Thân, Ngọ-Mùi',
      'Dễ nhớ: Xung = đối diện, Hợp = kế cận qua 1 chi',
      'Tam hợp: Thân-Tý-Thìn (Thủy), Hợi-Mão-Mùi (Mộc), Dần-Ngọ-Tuất (Hỏa), Tị-Dậu-Sửu (Kim)'
    ]
  }
];

// Bài tập thực hành
export const handPractices = [
  {
    title: 'Bài tập 1: Đếm 12 Địa Chi',
    task: 'Dùng ngón cái chỉ và đọc to 12 Địa Chi theo thứ tự, lặp lại 10 lần',
    goal: 'Ghi nhớ vị trí mỗi chi trên bàn tay'
  },
  {
    title: 'Bài tập 2: Tìm Địa Chi của tháng sinh',
    task: 'Cho biết tháng sinh của bạn (âm lịch), tìm Địa Chi tương ứng trên bàn tay',
    goal: 'Áp dụng quy tắc vào thực tế'
  },
  {
    title: 'Bài tập 3: Tìm cặp Xung',
    task: 'Chọn 1 Địa Chi bất kỳ, tìm chi Xung với nó (cách 6 vị trí)',
    goal: 'Hiểu quan hệ Xung giữa các chi'
  },
  {
    title: 'Bài tập 4: Đếm Trường Sinh Can Dương',
    task: 'Chọn Giáp Mộc, bắt đầu từ Hợi, đếm thuận 12 cung Trường Sinh',
    goal: 'Thành thạo vòng Trường Sinh Can Dương'
  },
  {
    title: 'Bài tập 5: Đếm Trường Sinh Can Âm',
    task: 'Chọn Ất Mộc, bắt đầu từ Ngọ, đếm ngược 12 cung Trường Sinh',
    goal: 'Thành thạo vòng Trường Sinh Can Âm'
  }
];

// Mẹo ghi nhớ
export const memoryTips = [
  {
    tip: 'Vẽ số lên bàn tay',
    description: 'Dùng bút vẽ số 1-12 ở mỗi đốt ngón tay để ghi nhớ ban đầu'
  },
  {
    tip: 'Tập đếm mỗi ngày',
    description: 'Mỗi ngày đếm 1 lần 12 Địa Chi, sẽ thuộc lòng sau 1 tuần'
  },
  {
    tip: 'Dùng bàn tay khi học',
    description: 'Mỗi khi học lý thuyết, luôn áp dụng lên bàn tay để hình dung'
  },
  {
    tip: 'Nhớ quy luật mùa',
    description: 'Mỗi ngón tay = 1 mùa giúp nhớ nhanh hơn (Trỏ=Xuân, Giữa=Hè...)'
  },
  {
    tip: 'Thực hành với người khác',
    description: 'Hỏi/thi nhau tìm Địa Chi, Xung, Hợp trên bàn tay để ghi nhớ lâu'
  }
];
