import type { ThienCanQuanHe, DiaChiQuanHe } from '../types';

// Quan hệ Thiên Can
export const thienCanQuanHe: ThienCanQuanHe[] = [
  {
    can: 'Giáp',
    sinh: 'Bính, Đinh (Hỏa)',
    beSinh: 'Nhâm, Quý (Thủy)',
    khac: 'Mậu, Kỷ (Thổ)',
    beKhac: 'Canh, Tân (Kim)',
    xung: 'Canh',
    hop: { voi: 'Kỷ', hoa: 'Thổ' },
  },
  {
    can: 'Ất',
    sinh: 'Bính, Đinh (Hỏa)',
    beSinh: 'Nhâm, Quý (Thủy)',
    khac: 'Mậu, Kỷ (Thổ)',
    beKhac: 'Canh, Tân (Kim)',
    xung: 'Tân',
    hop: { voi: 'Canh', hoa: 'Kim' },
  },
  {
    can: 'Bính',
    sinh: 'Mậu, Kỷ (Thổ)',
    beSinh: 'Giáp, Ất (Mộc)',
    khac: 'Canh, Tân (Kim)',
    beKhac: 'Nhâm, Quý (Thủy)',
    xung: 'Nhâm',
    hop: { voi: 'Tân', hoa: 'Thủy' },
  },
  {
    can: 'Đinh',
    sinh: 'Mậu, Kỷ (Thổ)',
    beSinh: 'Giáp, Ất (Mộc)',
    khac: 'Canh, Tân (Kim)',
    beKhac: 'Nhâm, Quý (Thủy)',
    xung: 'Quý',
    hop: { voi: 'Nhâm', hoa: 'Mộc' },
  },
  {
    can: 'Mậu',
    sinh: 'Canh, Tân (Kim)',
    beSinh: 'Bính, Đinh (Hỏa)',
    khac: 'Nhâm, Quý (Thủy)',
    beKhac: 'Giáp, Ất (Mộc)',
    hop: { voi: 'Quý', hoa: 'Hỏa' },
  },
  {
    can: 'Kỷ',
    sinh: 'Canh, Tân (Kim)',
    beSinh: 'Bính, Đinh (Hỏa)',
    khac: 'Nhâm, Quý (Thủy)',
    beKhac: 'Giáp, Ất (Mộc)',
    hop: { voi: 'Giáp', hoa: 'Thổ' },
  },
  {
    can: 'Canh',
    sinh: 'Nhâm, Quý (Thủy)',
    beSinh: 'Mậu, Kỷ (Thổ)',
    khac: 'Giáp, Ất (Mộc)',
    beKhac: 'Bính, Đinh (Hỏa)',
    xung: 'Giáp',
    hop: { voi: 'Ất', hoa: 'Kim' },
  },
  {
    can: 'Tân',
    sinh: 'Nhâm, Quý (Thủy)',
    beSinh: 'Mậu, Kỷ (Thổ)',
    khac: 'Giáp, Ất (Mộc)',
    beKhac: 'Bính, Đinh (Hỏa)',
    xung: 'Ất',
    hop: { voi: 'Bính', hoa: 'Thủy' },
  },
  {
    can: 'Nhâm',
    sinh: 'Giáp, Ất (Mộc)',
    beSinh: 'Canh, Tân (Kim)',
    khac: 'Bính, Đinh (Hỏa)',
    beKhac: 'Mậu, Kỷ (Thổ)',
    xung: 'Bính',
    hop: { voi: 'Đinh', hoa: 'Mộc' },
  },
  {
    can: 'Quý',
    sinh: 'Giáp, Ất (Mộc)',
    beSinh: 'Canh, Tân (Kim)',
    khac: 'Bính, Đinh (Hỏa)',
    beKhac: 'Mậu, Kỷ (Thổ)',
    xung: 'Đinh',
    hop: { voi: 'Mậu', hoa: 'Hỏa' },
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
      'Dần - Thân là Dịch Mã nên dễ có việc phải di chuyển, xa nhà',
      'Phiền não xoay quanh công việc, chức vụ, quyền lợi',
      'Làm ăn nhiều thất bại, tài lộc bất ổn',
      'Nếu xấu: tai nạn giao thông, té ngã, gãy xương'
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
      'Dần - Thân là Dịch Mã nên dễ có việc phải di chuyển, xa nhà',
      'Phiền não xoay quanh công việc, chức vụ, quyền lợi',
      'Làm ăn nhiều thất bại, tài lộc bất ổn',
      'Nếu xấu: tai nạn giao thông, té ngã, gãy xương'
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
