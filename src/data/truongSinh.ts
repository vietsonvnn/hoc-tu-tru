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

// Phân loại Tứ Quý - Tứ Bình - Tứ Kỵ
export interface PhanLoaiTruongSinh {
  ten: string;
  loai: 'quy' | 'binh' | 'ky';
  cac_cung: string[];
  dac_diem: string;
  mau_sac: string;
}

export const phanLoaiTruongSinh: PhanLoaiTruongSinh[] = [
  {
    ten: 'Tứ Quý',
    loai: 'quy',
    cac_cung: ['Thai', 'Trường Sinh', 'Đế Vượng', 'Mộ'],
    dac_diem: 'Bốn cung quý hiếm, có giá trị cao. Thai là khởi đầu, Trường Sinh là sinh khí, Đế Vượng là cực thịnh, Mộ là tàng trữ.',
    mau_sac: 'from-yellow-500 to-amber-600'
  },
  {
    ten: 'Tứ Bình',
    loai: 'binh',
    cac_cung: ['Quan Đới', 'Lâm Quan', 'Dưỡng', 'Suy'],
    dac_diem: 'Bốn cung bình thường, ổn định. Đại diện cho giai đoạn phát triển và suy thoái tự nhiên.',
    mau_sac: 'from-blue-500 to-cyan-600'
  },
  {
    ten: 'Tứ Kỵ',
    loai: 'ky',
    cac_cung: ['Tử', 'Tuyệt', 'Bệnh', 'Mộc Dục'],
    dac_diem: 'Bốn cung kỵ, cần chú ý. Tử là kết thúc, Tuyệt là đoạn tuyệt, Bệnh là yếu đuối, Mộc Dục là dễ cám dỗ.',
    mau_sac: 'from-red-500 to-rose-600'
  }
];

// Thông tin luận đoán theo Trụ
export interface LuanDoanTheoTru {
  cung: string;
  tru_nam: string;
  tru_thang: string;
  tru_ngay: string;
  tru_gio: string;
}

export const luanDoanTheoTru: LuanDoanTheoTru[] = [
  {
    cung: 'Trường Sinh',
    tru_nam: 'Thời thơ ấu không lo thiếu thốn, sinh ra trong gia đình giàu có, được cha mẹ yêu thương.',
    tru_thang: 'Anh em, bạn bè hòa thuận, tình cảm thân thiết, đối xử với người khác như anh em ruột thịt. Tình cảm gia đình sâu đậm.',
    tru_ngay: 'Được vợ giúp đỡ nhiều, là người có số mệnh hạnh phúc, may mắn. Đối với nam mệnh, sau trung niên có nhiều cơ hội phát triển.',
    tru_gio: 'Con cái sẽ hiếu thảo, sau này có sự nghiệp phát triển, có thể đạt được danh lợi, và được con cái hiếu thuận.'
  },
  {
    cung: 'Mộc Dục',
    tru_nam: 'Có nhiều xung đột với cha mẹ, dễ rời nhà từ nhỏ. Hoặc cha mẹ có thể không hòa thuận.',
    tru_thang: 'Có khí chất nghệ thuật, trước trung niên thường có nhiều biến động trong sự nghiệp, cuộc đời nhiều sóng gió.',
    tru_ngay: 'Thường gặp rắc rối về tình cảm, dễ bị vướng vào các rối ren tình ái. Thuở nhỏ gặp khó khăn, trung niên trở đi được bình an.',
    tru_gio: 'Duyên phận với con cái mỏng, vận mệnh sau này kém.'
  },
  {
    cung: 'Quan Đới',
    tru_nam: 'Tinh thần cầu tiến mạnh mẽ, thời niên thiếu thông minh, trí tuệ, ham học hỏi. Tình cảm vợ chồng sẽ gặp khó khăn sau trung niên.',
    tru_thang: 'Trong thời thanh niên có nhiều biến đổi lớn, chỗ ở hoặc công việc thường xuyên thay đổi, nhưng trung niên sẽ có sự phát triển lớn.',
    tru_ngay: 'Mặc dù thời niên thiếu sức khỏe không tốt nhưng sau khi lớn lên lại rất khỏe mạnh, là một người có tài năng xuất chúng.',
    tru_gio: 'Con cái xuất chúng, được hưởng phúc từ con cái.'
  },
  {
    cung: 'Lâm Quan',
    tru_nam: 'Phù hợp với công việc ổn định, có sự phát triển tốt từ sớm nhưng nên làm việc cẩn thận.',
    tru_thang: 'Gọi là "kiến lộc" là mệnh phải tự lập sớm, đến trung niên sẽ có sự phát triển khá lớn.',
    tru_ngay: 'Gọi là "chuyên lộc" là người có mệnh tốt, nhưng cần đề phòng chuyện phá tài.',
    tru_gio: 'Gọi là "quy lộc", biểu thị hậu vận cát tường và an lành.'
  },
  {
    cung: 'Đế Vượng',
    tru_nam: 'Là người có tính cách độc lập, thích tự mình hoàn thành mọi việc.',
    tru_thang: 'Thường có tính cách quyết đoán, tham vọng lớn, không thích làm việc theo cách thông thường. Có thể phá sản.',
    tru_ngay: 'Có ý chí mạnh mẽ trong sự nghiệp, trung niên có thành tựu. Thậm chí có người từ khi còn trẻ đã có thể phát triển lớn.',
    tru_gio: 'Có dấu hiệu cô đơn, cần phải tăng cường mối quan hệ xã hội trong hậu vận.'
  },
  {
    cung: 'Suy',
    tru_nam: 'Tính cách khá nội tâm, cả đời cần đề phòng bị người khác lợi dụng, liên luỵ, thậm chí có thể dẫn đến nợ nần, hậu vận cũng không mấy dễ dàng.',
    tru_thang: 'Đây là mệnh nửa cuộc đời thuận lợi, nửa cuộc đời vất vả. Lưu ý: có thể vì giúp đỡ người khác bảo lãnh, hoặc có tiền bạc cho người khác mà không đòi lại được, dẫn đến nợ nần.',
    tru_ngay: 'Không nên đặt quá nhiều kỳ vọng, cứ từng bước thực hiện sẽ đạt được thành công.',
    tru_gio: 'Không lợi về con cái, con cái dễ sinh hư, cần tăng cường giáo dục.'
  },
  {
    cung: 'Bệnh',
    tru_nam: 'Biểu thị thời thơ ấu dễ bị yếu đuối, làm việc thiếu kiên trì.',
    tru_thang: 'Cuộc sống gia đình cần đề phòng tranh cãi, thiếu khả năng thực thi, trước trung niên có thể phải thay đổi công việc thường xuyên. Cần đề phòng xung đột vợ chồng.',
    tru_ngay: 'Cần chú trọng đến việc dưỡng sinh, tăng cường sức khỏe.',
    tru_gio: 'Cần lưu ý đến tài chính trong hậu vận.'
  },
  {
    cung: 'Tử',
    tru_nam: 'Biểu thị mối quan hệ với người thân mỏng manh.',
    tru_thang: 'Cần chú ý sức khỏe sau trung niên, mối quan hệ nam nữ kém, công việc thường vất vả.',
    tru_ngay: 'Dễ gặp biến đổi trong tình cảm vợ chồng, cần cải thiện tính cách để tránh sự thăng trầm.',
    tru_gio: 'Tính cách khá nóng nảy, và mối quan hệ với con cái không tốt.'
  },
  {
    cung: 'Mộ',
    tru_nam: 'Thường phải đến trung niên mới thấy thành tựu, vận trình phát triển khá chậm.',
    tru_thang: 'Thời niên thiếu chi tiêu lớn, dễ có tính cách rụt rè.',
    tru_ngay: 'Có khả năng kiếm tiền mạnh mẽ, nhưng cần đến trung niên mới có thể phát triển rực rỡ.',
    tru_gio: 'Hậu vận tài chính khá tốt.'
  },
  {
    cung: 'Tuyệt',
    tru_nam: 'Biểu thị phải tự lập xa nhà, sau trung niên tài vận khá tốt. Cuối đời bình an.',
    tru_thang: 'Ít bạn bè, cần đề phòng việc bị cô lập do tính cách chủ quan.',
    tru_ngay: 'Mặc dù có thành tựu, nhưng cả đời cần đề phòng những quyết định cảm tính.',
    tru_gio: 'Cần tăng cường giáo dục phát triển tính cách cho con cái.'
  },
  {
    cung: 'Thai',
    tru_nam: 'Thời thơ ấu cần chú ý nhiều đến sức khỏe.',
    tru_thang: 'Trung niên sự nghiệp sẽ có thay đổi lớn. Có người thay đổi nghề, có người khởi nghiệp, cũng có người thất nghiệp.',
    tru_ngay: 'Tuổi trẻ thường thay đổi nghề nghiệp, cần đến trung niên mới thấy vận tốt. Lưu ý! Cuộc đời sẽ có một lần gặp bệnh nặng, đối mặt với sinh tử.',
    tru_gio: 'Con cái có tính cách nội tâm, cần được giáo dục cẩn thận.'
  },
  {
    cung: 'Dưỡng',
    tru_nam: 'Cha mẹ có khả năng kiếm tiền tốt.',
    tru_thang: 'Dễ xảy ra sự kiện tình cảm trong trung niên.',
    tru_ngay: 'Lục thân duyên phận mỏng manh, dễ gặp khó khăn trong hôn nhân, vợ chồng khó hòa hợp.',
    tru_gio: 'Gia đình viên mãn, sự nghiệp ổn định.'
  }
];
