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
    ],
  },
];
