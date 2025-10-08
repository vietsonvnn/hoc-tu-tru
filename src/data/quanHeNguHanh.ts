import type { QuanHeTheoHanh } from '../types';

export const quanHeNguHanhData: QuanHeTheoHanh[] = [
  {
    hanh: 'Kim',
    cacQuanHe: [
      {
        loai: 'Sinh',
        tenQuanHe: 'Sinh quá độ',
        quaDo: 'Quá độ là hung hoa. Thổ sinh Kim, Thổ nhiều chôn Kim.',
        giaiCuu: 'Được Mộc mà tơi Thổ, Kim được hiển lộ.',
      },
      {
        loai: 'Tiet',
        tenQuanHe: 'Tiết quá độ',
        quaDo: 'Quá độ là hung hoa. Kim sinh Thủy, Thủy nhiều chìm Kim.',
        giaiCuu: 'Dùng Kim trợ giúp, không dùng Thổ chế.',
      },
      {
        loai: 'Khac',
        tenQuanHe: 'Khắc quá độ',
        quaDo: 'Quá độ là hung hoa. Kim suy gặp Hỏa sẽ bị tan chảy.',
        giaiCuu: 'Gặp Thổ tiết Hỏa để sinh phù Kim.',
      },
      {
        loai: 'Hao',
        tenQuanHe: 'Hao quá độ',
        quaDo: 'Quá độ là hung hoa. Kim có thể khắc Mộc, Mộc rắn thì Kim khuyết.',
        giaiCuu: 'Lấy Kim chặt Mộc.',
      },
      {
        loai: 'PhanSinh',
        tenQuanHe: 'Phản sinh',
        quaDo: 'Thổ sinh Kim, nhưng Kim quá mạnh thì lại hao Thổ (Kim đa táng Thổ).',
        giaiCuu: 'Cần Hỏa điều hòa, sinh Thổ và khắc Kim.',
      },
      {
        loai: 'PhanKhac',
        tenQuanHe: 'Phản khắc',
        quaDo: 'Kim khắc Mộc, nhưng Mộc mạnh thì lại khiến Kim gãy (Mộc kiên kim khuyết).',
        giaiCuu: 'Cần Hỏa khắc Mộc, hoặc Thổ sinh Kim.',
      },
      {
        loai: 'TuongThua',
        tenQuanHe: 'Tương thừa',
        quaDo: 'Khắc chế theo chiều thuận nhưng quá mức. Ví dụ: Kim khắc Mộc quá đáng.',
        giaiCuu: 'Cần hành trung gian để điều hòa, như Thủy tiết Kim và sinh Mộc.',
      },
      {
        loai: 'TuongVu',
        tenQuanHe: 'Tương vũ (lăng vũ)',
        quaDo: 'Khắc chế ngược chiều, kẻ yếu khắc người mạnh. Ví dụ: Mộc yếu gặp Kim mạnh bị chặt.',
        giaiCuu: 'Cần bổ sung hành yếu hoặc khắc hành mạnh.',
      },
    ],
  },
  {
    hanh: 'Mộc',
    cacQuanHe: [
      {
        loai: 'Sinh',
        tenQuanHe: 'Sinh quá độ',
        quaDo: 'Thủy sinh Mộc, Thủy nhiều trôi Mộc.',
        giaiCuu: 'Được Thổ chế Thủy, Mộc được sinh.',
      },
      {
        loai: 'Tiet',
        tenQuanHe: 'Tiết quá độ',
        quaDo: 'Mộc sinh Hỏa, Hỏa nhiều cháy Mộc.',
        giaiCuu: 'Dùng Thủy chế Hỏa để sinh Mộc.',
      },
      {
        loai: 'Khac',
        tenQuanHe: 'Khắc quá độ',
        quaDo: 'Thủy yếu gặp Kim sẽ bị chặt phá.',
        giaiCuu: 'Gặp Thủy tiết Kim để sinh phù Mộc.',
      },
      {
        loai: 'Hao',
        tenQuanHe: 'Hao quá độ',
        quaDo: 'Mộc có thể khắc Thổ, Thổ nặng thì Mộc bị gãy.',
        giaiCuu: 'Lấy Mộc làm tơi Thổ.',
      },
      {
        loai: 'PhanSinh',
        tenQuanHe: 'Phản sinh',
        quaDo: 'Thủy sinh Mộc, nhưng Mộc quá mạnh thì lại hao Thủy (Mộc đa thủy súc).',
        giaiCuu: 'Cần Kim sinh Thủy, hoặc Hỏa tiết Mộc.',
      },
      {
        loai: 'PhanKhac',
        tenQuanHe: 'Phản khắc',
        quaDo: 'Mộc khắc Thổ, nhưng Thổ mạnh thì lại chôn vùi Mộc (Thổ trọng mộc chiết).',
        giaiCuu: 'Cần Thủy khắc Thổ và sinh Mộc.',
      },
      {
        loai: 'TuongThua',
        tenQuanHe: 'Tương thừa',
        quaDo: 'Mộc khắc Thổ quá mức, Thổ bị tổn thương nặng.',
        giaiCuu: 'Cần Hỏa sinh Thổ để cân bằng.',
      },
      {
        loai: 'TuongVu',
        tenQuanHe: 'Tương vũ',
        quaDo: 'Thổ yếu gặp Mộc mạnh sẽ bị lõm sâu, hư hại.',
        giaiCuu: 'Cần Hỏa sinh Thổ hoặc Kim khắc Mộc.',
      },
    ],
  },
  {
    hanh: 'Thủy',
    cacQuanHe: [
      {
        loai: 'Sinh',
        tenQuanHe: 'Sinh quá độ',
        quaDo: 'Kim sinh Thủy, Kim nhiều đục Thủy.',
        giaiCuu: 'Được Hỏa chế Kim, Thủy được trong.',
      },
      {
        loai: 'Tiet',
        tenQuanHe: 'Tiết quá độ',
        quaDo: 'Thủy sinh Mộc, Mộc thịnh ách Thủy.',
        giaiCuu: 'Được Kim chế Mộc và có thể sinh Thủy.',
      },
      {
        loai: 'Khac',
        tenQuanHe: 'Khắc quá độ',
        quaDo: 'Thủy yếu gặp Thổ sẽ bị ứ tắc.',
        giaiCuu: 'Gặp Kim tiết Thổ để sinh phù Thủy.',
      },
      {
        loai: 'Hao',
        tenQuanHe: 'Hao quá độ',
        quaDo: 'Thủy có thể khắc Hỏa, Hỏa nóng thì Thủy bốc hơi.',
        giaiCuu: 'Lấy Thủy dập Hỏa.',
      },
      {
        loai: 'PhanSinh',
        tenQuanHe: 'Phản sinh',
        quaDo: 'Kim sinh Thủy, nhưng Thủy quá mạnh thì lại làm Kim chìm (Thủy đa kim trầm).',
        giaiCuu: 'Cần Thổ khắc Thủy và sinh Kim.',
      },
      {
        loai: 'PhanKhac',
        tenQuanHe: 'Phản khắc',
        quaDo: 'Thủy khắc Hỏa, nhưng Hỏa mạnh thì lại làm Thủy cạn (Hỏa viêm thủy kiệt).',
        giaiCuu: 'Cần Mộc tiết Thủy và sinh Hỏa.',
      },
      {
        loai: 'TuongThua',
        tenQuanHe: 'Tương thừa',
        quaDo: 'Thủy khắc Hỏa quá mức, Hỏa bị dập tắt hoàn toàn.',
        giaiCuu: 'Cần Mộc tiết Thủy và sinh Hỏa.',
      },
      {
        loai: 'TuongVu',
        tenQuanHe: 'Tương vũ',
        quaDo: 'Hỏa yếu gặp Thủy mạnh sẽ bị dập tắt ngay.',
        giaiCuu: 'Cần Mộc sinh Hỏa hoặc Thổ khắc Thủy.',
      },
    ],
  },
  {
    hanh: 'Hỏa',
    cacQuanHe: [
      {
        loai: 'Sinh',
        tenQuanHe: 'Sinh quá độ',
        quaDo: 'Mộc sinh Hỏa, Mộc nhiều bế tắc.',
        giaiCuu: 'Được Thủy chế Mộc, Hỏa được khơi thông.',
      },
      {
        loai: 'Tiet',
        tenQuanHe: 'Tiết quá độ',
        quaDo: 'Thủy sinh Thổ, Thổ nhiều làm Hỏa tối.',
        giaiCuu: 'Dùng Mộc chế vừa có thể sinh Hỏa.',
      },
      {
        loai: 'Khac',
        tenQuanHe: 'Khắc quá độ',
        quaDo: 'Hỏa yếu gặp Thủy sẽ bị dập tắt.',
        giaiCuu: 'Gặp Mộc sinh tiết khí của Thủy.',
      },
      {
        loai: 'Hao',
        tenQuanHe: 'Hao quá độ',
        quaDo: 'Hỏa có thể khắc Kim, Kim nhiều thì Hỏa tắt.',
        giaiCuu: 'Lấy Hỏa làm tan chảy Kim.',
      },
      {
        loai: 'PhanSinh',
        tenQuanHe: 'Phản sinh',
        quaDo: 'Mộc sinh Hỏa, nhưng Hỏa quá mạnh thì lại đốt cháy Mộc (Hỏa đa mộc phần).',
        giaiCuu: 'Cần Thủy khắc Hỏa và sinh Mộc.',
      },
      {
        loai: 'PhanKhac',
        tenQuanHe: 'Phản khắc',
        quaDo: 'Hỏa khắc Kim, nhưng Kim mạnh thì lại dập tắt Hỏa (Kim kiên hỏa tức).',
        giaiCuu: 'Cần Mộc sinh Hỏa, hoặc Thủy khắc Kim.',
      },
      {
        loai: 'TuongThua',
        tenQuanHe: 'Tương thừa',
        quaDo: 'Hỏa khắc Kim quá mức, Kim bị nóng chảy hoàn toàn.',
        giaiCuu: 'Cần Thổ tiết Hỏa và sinh Kim.',
      },
      {
        loai: 'TuongVu',
        tenQuanHe: 'Tương vũ',
        quaDo: 'Kim yếu gặp Hỏa mạnh sẽ tan chảy ngay.',
        giaiCuu: 'Cần Thổ sinh Kim hoặc Thủy khắc Hỏa.',
      },
    ],
  },
  {
    hanh: 'Thổ',
    cacQuanHe: [
      {
        loai: 'Sinh',
        tenQuanHe: 'Sinh quá độ',
        quaDo: 'Hỏa sinh Thổ, Hỏa nhiều Thổ khô.',
        giaiCuu: 'Được Thủy chế Hỏa, Thổ tơi mềm.',
      },
      {
        loai: 'Tiet',
        tenQuanHe: 'Tiết quá độ',
        quaDo: 'Thổ sinh Kim, Kim nhiều Thổ hư.',
        giaiCuu: 'Dùng Hỏa chế Kim vừa có thể sinh Thổ.',
      },
      {
        loai: 'Khac',
        tenQuanHe: 'Khắc quá độ',
        quaDo: 'Thổ yếu gặp Mộc sẽ bị lõm.',
        giaiCuu: 'Gặp Hỏa tiết Mộc để sinh phù Thổ.',
      },
      {
        loai: 'Hao',
        tenQuanHe: 'Hao quá độ',
        quaDo: 'Thổ có thể khắc Thủy, Thủy nhiều thì Thổ trôi.',
        giaiCuu: 'Lấy Thổ ngăn Thủy.',
      },
      {
        loai: 'PhanSinh',
        tenQuanHe: 'Phản sinh',
        quaDo: 'Hỏa sinh Thổ, nhưng Thổ quá mạnh thì lại làm Hỏa tối (Thổ đa hỏa hối).',
        giaiCuu: 'Cần Mộc sinh Hỏa, hoặc Kim tiết Thổ.',
      },
      {
        loai: 'PhanKhac',
        tenQuanHe: 'Phản khắc',
        quaDo: 'Thổ khắc Thủy, nhưng Thủy mạnh thì lại làm Thổ trôi (Thủy thịnh thổ lưu).',
        giaiCuu: 'Cần Hỏa sinh Thổ, hoặc Thổ trợ lực.',
      },
      {
        loai: 'TuongThua',
        tenQuanHe: 'Tương thừa',
        quaDo: 'Thổ khắc Thủy quá mức, Thủy bị ngăn cản hoàn toàn.',
        giaiCuu: 'Cần Kim sinh Thủy để cân bằng.',
      },
      {
        loai: 'TuongVu',
        tenQuanHe: 'Tương vũ',
        quaDo: 'Thủy yếu gặp Thổ mạnh sẽ bị ứ đọng, không lưu thông.',
        giaiCuu: 'Cần Kim sinh Thủy hoặc Mộc khắc Thổ.',
      },
    ],
  },
];
