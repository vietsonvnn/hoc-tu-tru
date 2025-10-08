// Thập Nhị Trường Sinh - 12 Birth Cycle Palaces
export interface TruongSinhPalace {
  ten: string;
  tenTiengAnh: string;
  thuTu: number;
  yNghia: string;
  dacDiem: string[];
  ungDung: string;
  bieu: string; // emoji representation
}

export const truongSinhData: TruongSinhPalace[] = [
  {
    ten: 'Trường Sinh',
    tenTiengAnh: 'Birth/Longevity',
    thuTu: 1,
    yNghia: 'Sự khởi đầu, sinh ra, mới mẻ',
    dacDiem: [
      'Như trẻ sơ sinh mới chào đời',
      'Đầy tiềm năng, sức sống mới',
      'Cần được chăm sóc, nuôi dưỡng',
      'Khởi đầu thuận lợi, có quý nhân'
    ],
    ungDung: 'Người có cung Trường Sinh thường trẻ trung, nhiệt huyết, dễ được giúp đỡ.',
    bieu: '👶'
  },
  {
    ten: 'Mộc Dục',
    tenTiengAnh: 'Bathing',
    thuTu: 2,
    yNghia: 'Tắm rửa, làm sạch, chuẩn bị',
    dacDiem: [
      'Như trẻ được tắm rửa sạch sẽ',
      'Giai đoạn lột xác, thay đổi',
      'Dễ gặp cám dỗ, dao động',
      'Cần cẩn trọng về đạo đức, tình cảm'
    ],
    ungDung: 'Dễ có nhiều cơ hội nhưng cũng nhiều cám dỗ, cần tỉnh táo.',
    bieu: '🛁'
  },
  {
    ten: 'Quan Đới',
    tenTiengAnh: 'Crown/Cap',
    thuTu: 3,
    yNghia: 'Đội mũ, trưởng thành, có trách nhiệm',
    dacDiem: [
      'Như thanh niên đội mũ, vào lễ trưởng thành',
      'Bắt đầu có trách nhiệm xã hội',
      'Tự lập, khẳng định bản thân',
      'Học hành tốt, tiếp thu nhanh'
    ],
    ungDung: 'Tuổi trẻ học giỏi, có tài, được kỳ vọng.',
    bieu: '👨‍🎓'
  },
  {
    ten: 'Lâm Quan',
    tenTiengAnh: 'Official',
    thuTu: 4,
    yNghia: 'Làm quan, đảm nhận công việc',
    dacDiem: [
      'Như người vào làm quan, có địa vị',
      'Đang trong thời kỳ phát triển mạnh',
      'Có quyền lực, được tôn trọng',
      'Sự nghiệp thăng tiến'
    ],
    ungDung: 'Giai đoạn sự nghiệp tốt, dễ thành công, có địa vị.',
    bieu: '💼'
  },
  {
    ten: 'Đế Vượng',
    tenTiengAnh: 'Emperor/Peak',
    thuTu: 5,
    yNghia: 'Cực thịnh, đỉnh cao nhất',
    dacDiem: [
      'Như vua chúa, cực thịnh nhất',
      'Mọi mặt đều ở đỉnh cao',
      'Quyền lực, sức khỏe, tài lộc tốt nhất',
      'Tự tin, mạnh mẽ, lãnh đạo'
    ],
    ungDung: 'Thời kỳ hoàng kim, may mắn nhất trong đời.',
    bieu: '👑'
  },
  {
    ten: 'Suy',
    tenTiengAnh: 'Decline',
    thuTu: 6,
    yNghia: 'Suy giảm, bắt đầu yếu đi',
    dacDiem: [
      'Như người bắt đầu già đi',
      'Năng lực giảm dần',
      'Cần cẩn trọng, bảo thủ',
      'Tránh mạo hiểm, nên giữ gìn'
    ],
    ungDung: 'Nên giữ gìn sức khỏe, không nên đầu tư mạo hiểm.',
    bieu: '📉'
  },
  {
    ten: 'Bệnh',
    tenTiengAnh: 'Illness',
    thuTu: 7,
    yNghia: 'Bệnh tật, yếu ớt',
    dacDiem: [
      'Như người bị bệnh',
      'Thể lực và tinh thần yếu',
      'Dễ gặp trở ngại, khó khăn',
      'Cần nghỉ ngơi, điều dưỡng'
    ],
    ungDung: 'Giai đoạn khó khăn, cần cẩn trọng về sức khỏe.',
    bieu: '🤒'
  },
  {
    ten: 'Tử',
    tenTiengAnh: 'Death',
    thuTu: 8,
    yNghia: 'Chết, kết thúc',
    dacDiem: [
      'Như người qua đời',
      'Kết thúc một giai đoạn',
      'Thất bại, mất mát',
      'Cần chuẩn bị cho chu kỳ mới'
    ],
    ungDung: 'Giai đoạn khó khăn nhất, nên tránh việc lớn.',
    bieu: '💀'
  },
  {
    ten: 'Mộ',
    tenTiengAnh: 'Tomb',
    thuTu: 9,
    yNghia: 'Mồ mả, chôn cất, tàng trữ',
    dacDiem: [
      'Như người vào mộ',
      'Trạng thái tiềm ẩn, ẩn dật',
      'Tích lũy, chuẩn bị',
      'Có thể là giam cầm hoặc bảo vệ'
    ],
    ungDung: 'Nên ở ẩn, tích lũy, không nên phô trương.',
    bieu: '⚰️'
  },
  {
    ten: 'Tuyệt',
    tenTiengAnh: 'Extinction',
    thuTu: 10,
    yNghia: 'Tuyệt diệt, không còn gì',
    dacDiem: [
      'Như không còn tồn tại',
      'Hoàn toàn mất đi dấu vết',
      'Trạng thái chân không',
      'Chuẩn bị thai nghén'
    ],
    ungDung: 'Giai đoạn chuyển tiếp, từ cái cũ sang cái mới.',
    bieu: '〇'
  },
  {
    ten: 'Thai',
    tenTiengAnh: 'Embryo',
    thuTu: 11,
    yNghia: 'Thai nhi, mang thai, bắt đầu mới',
    dacDiem: [
      'Như thai nhi trong bụng mẹ',
      'Đang hình thành, chuẩn bị',
      'Tiềm năng mới',
      'Cần được bảo vệ, nuôi dưỡng'
    ],
    ungDung: 'Giai đoạn ấp ủ kế hoạch, chuẩn bị cho tương lai.',
    bieu: '🤰'
  },
  {
    ten: 'Dưỡng',
    tenTiengAnh: 'Nourishment',
    thuTu: 12,
    yNghia: 'Nuôi dưỡng, lớn lên trong thai',
    dacDiem: [
      'Như thai nhi được nuôi dưỡng',
      'Tích lũy năng lượng',
      'Chuẩn bị chào đời',
      'Sắp trở lại Trường Sinh'
    ],
    ungDung: 'Chuẩn bị cho một khởi đầu mới, sắp có cơ hội.',
    bieu: '🌱'
  }
];

// Vòng Trường Sinh cho các Can
export interface TruongSinhCycle {
  can: string;
  cycle: { [diaChi: string]: string };
}

export const truongSinhCycles: TruongSinhCycle[] = [
  {
    can: 'Giáp',
    cycle: {
      'Hợi': 'Trường Sinh', 'Tý': 'Mộc Dục', 'Sửu': 'Quan Đới', 'Dần': 'Lâm Quan',
      'Mão': 'Đế Vượng', 'Thìn': 'Suy', 'Tị': 'Bệnh', 'Ngọ': 'Tử',
      'Mùi': 'Mộ', 'Thân': 'Tuyệt', 'Dậu': 'Thai', 'Tuất': 'Dưỡng'
    }
  },
  {
    can: 'Ất',
    cycle: {
      'Ngọ': 'Trường Sinh', 'Tị': 'Mộc Dục', 'Thìn': 'Quan Đới', 'Mão': 'Lâm Quan',
      'Dần': 'Đế Vượng', 'Sửu': 'Suy', 'Tý': 'Bệnh', 'Hợi': 'Tử',
      'Tuất': 'Mộ', 'Dậu': 'Tuyệt', 'Thân': 'Thai', 'Mùi': 'Dưỡng'
    }
  },
  {
    can: 'Bính',
    cycle: {
      'Dần': 'Trường Sinh', 'Mão': 'Mộc Dục', 'Thìn': 'Quan Đới', 'Tị': 'Lâm Quan',
      'Ngọ': 'Đế Vượng', 'Mùi': 'Suy', 'Thân': 'Bệnh', 'Dậu': 'Tử',
      'Tuất': 'Mộ', 'Hợi': 'Tuyệt', 'Tý': 'Thai', 'Sửu': 'Dưỡng'
    }
  },
  {
    can: 'Đinh',
    cycle: {
      'Dậu': 'Trường Sinh', 'Thân': 'Mộc Dục', 'Mùi': 'Quan Đới', 'Ngọ': 'Lâm Quan',
      'Tị': 'Đế Vượng', 'Thìn': 'Suy', 'Mão': 'Bệnh', 'Dần': 'Tử',
      'Sửu': 'Mộ', 'Tý': 'Tuyệt', 'Hợi': 'Thai', 'Tuất': 'Dưỡng'
    }
  },
  {
    can: 'Mậu',
    cycle: {
      'Dần': 'Trường Sinh', 'Mão': 'Mộc Dục', 'Thìn': 'Quan Đới', 'Tị': 'Lâm Quan',
      'Ngọ': 'Đế Vượng', 'Mùi': 'Suy', 'Thân': 'Bệnh', 'Dậu': 'Tử',
      'Tuất': 'Mộ', 'Hợi': 'Tuyệt', 'Tý': 'Thai', 'Sửu': 'Dưỡng'
    }
  },
  {
    can: 'Kỷ',
    cycle: {
      'Dậu': 'Trường Sinh', 'Thân': 'Mộc Dục', 'Mùi': 'Quan Đới', 'Ngọ': 'Lâm Quan',
      'Tị': 'Đế Vượng', 'Thìn': 'Suy', 'Mão': 'Bệnh', 'Dần': 'Tử',
      'Sửu': 'Mộ', 'Tý': 'Tuyệt', 'Hợi': 'Thai', 'Tuất': 'Dưỡng'
    }
  },
  {
    can: 'Canh',
    cycle: {
      'Tị': 'Trường Sinh', 'Ngọ': 'Mộc Dục', 'Mùi': 'Quan Đới', 'Thân': 'Lâm Quan',
      'Dậu': 'Đế Vượng', 'Tuất': 'Suy', 'Hợi': 'Bệnh', 'Tý': 'Tử',
      'Sửu': 'Mộ', 'Dần': 'Tuyệt', 'Mão': 'Thai', 'Thìn': 'Dưỡng'
    }
  },
  {
    can: 'Tân',
    cycle: {
      'Tý': 'Trường Sinh', 'Hợi': 'Mộc Dục', 'Tuất': 'Quan Đới', 'Dậu': 'Lâm Quan',
      'Thân': 'Đế Vượng', 'Mùi': 'Suy', 'Ngọ': 'Bệnh', 'Tị': 'Tử',
      'Thìn': 'Mộ', 'Mão': 'Tuyệt', 'Dần': 'Thai', 'Sửu': 'Dưỡng'
    }
  },
  {
    can: 'Nhâm',
    cycle: {
      'Thân': 'Trường Sinh', 'Dậu': 'Mộc Dục', 'Tuất': 'Quan Đới', 'Hợi': 'Lâm Quan',
      'Tý': 'Đế Vượng', 'Sửu': 'Suy', 'Dần': 'Bệnh', 'Mão': 'Tử',
      'Thìn': 'Mộ', 'Tị': 'Tuyệt', 'Ngọ': 'Thai', 'Mùi': 'Dưỡng'
    }
  },
  {
    can: 'Quý',
    cycle: {
      'Mão': 'Trường Sinh', 'Dần': 'Mộc Dục', 'Sửu': 'Quan Đới', 'Tý': 'Lâm Quan',
      'Hợi': 'Đế Vượng', 'Tuất': 'Suy', 'Dậu': 'Bệnh', 'Thân': 'Tử',
      'Mùi': 'Mộ', 'Ngọ': 'Tuyệt', 'Tị': 'Thai', 'Thìn': 'Dưỡng'
    }
  }
];

// Memorization formula
export const truongSinhPoem = {
  title: 'Ca Quyết Thập Nhị Trường Sinh',
  yangStems: {
    title: 'Can Dương (Giáp, Bính, Mậu, Canh, Nhâm) - Thuận chiều',
    lines: [
      'Giáp Mộc sinh ở Hợi, trưởng thành tại Mão',
      'Bính Mậu sinh ở Dần, cực thịnh ở Ngọ',
      'Canh Kim sinh ở Tị, vương thạnh tại Dậu',
      'Nhâm Thủy sinh ở Thân, đế vượng ở Tý'
    ]
  },
  yinStems: {
    title: 'Can Âm (Ất, Đinh, Kỷ, Tân, Quý) - Ngược chiều',
    lines: [
      'Ất Mộc sinh ở Ngọ, trưởng thành tại Dần',
      'Đinh Kỷ sinh ở Dậu, cực thịnh ở Tị',
      'Tân Kim sinh ở Tý, vương thạnh tại Thân',
      'Quý Thủy sinh ở Mão, đế vượng ở Hợi'
    ]
  }
};
