// Địa Chi Tàng Can - Hidden Stems in Earthly Branches
export interface DiaChiTangCanItem {
  diaChi: string;
  category: 'tu-chinh' | 'tu-sinh' | 'tu-mo';
  tangCan: string[];
  chinhKhi: string;
  phuKhi?: string;
  tapKhi?: string;
  soNgay: { [key: string]: number };
  yNghia: string;
}

export const diaChiTangCanData: DiaChiTangCanItem[] = [
  // Tứ Chính
  { diaChi: 'Tý', category: 'tu-chinh', tangCan: ['Quý'], chinhKhi: 'Quý', soNgay: { 'Quý': 30 }, yNghia: 'Tý chỉ chứa Quý Thủy (100%), thuần khiết một hành Thủy.' },
  { diaChi: 'Ngọ', category: 'tu-chinh', tangCan: ['Đinh', 'Kỷ'], chinhKhi: 'Đinh', phuKhi: 'Kỷ', soNgay: { 'Đinh': 21, 'Kỷ': 9 }, yNghia: 'Ngọ chứa Đinh Hỏa (70%) và Kỷ Thổ (30%).' },
  { diaChi: 'Mão', category: 'tu-chinh', tangCan: ['Ất'], chinhKhi: 'Ất', soNgay: { 'Ất': 30 }, yNghia: 'Mão chỉ chứa Ất Mộc (100%), thuần khiết một hành Mộc.' },
  { diaChi: 'Dậu', category: 'tu-chinh', tangCan: ['Tân'], chinhKhi: 'Tân', soNgay: { 'Tân': 30 }, yNghia: 'Dậu chỉ chứa Tân Kim (100%), thuần khiết một hành Kim.' },

  // Tứ Sinh
  { diaChi: 'Dần', category: 'tu-sinh', tangCan: ['Giáp', 'Bính', 'Mậu'], chinhKhi: 'Giáp', phuKhi: 'Bính', tapKhi: 'Mậu', soNgay: { 'Giáp': 18, 'Bính': 9, 'Mậu': 3 }, yNghia: 'Dần chứa Giáp (60%), Bính (30%), Mậu (10%) - Nơi sinh khởi của Mộc.' },
  { diaChi: 'Thân', category: 'tu-sinh', tangCan: ['Canh', 'Nhâm', 'Mậu'], chinhKhi: 'Canh', phuKhi: 'Nhâm', tapKhi: 'Mậu', soNgay: { 'Canh': 18, 'Nhâm': 9, 'Mậu': 3 }, yNghia: 'Thân chứa Canh (60%), Nhâm (30%), Mậu (10%) - Nơi sinh khởi của Kim.' },
  { diaChi: 'Tị', category: 'tu-sinh', tangCan: ['Bính', 'Canh', 'Mậu'], chinhKhi: 'Bính', phuKhi: 'Canh', tapKhi: 'Mậu', soNgay: { 'Bính': 18, 'Canh': 9, 'Mậu': 3 }, yNghia: 'Tị chứa Bính (60%), Canh (30%), Mậu (10%) - Nơi sinh khởi của Hỏa.' },
  { diaChi: 'Hợi', category: 'tu-sinh', tangCan: ['Nhâm', 'Giáp'], chinhKhi: 'Nhâm', phuKhi: 'Giáp', soNgay: { 'Nhâm': 21, 'Giáp': 9 }, yNghia: 'Hợi chứa Nhâm (70%), Giáp (30%) - Nơi sinh khởi của Thủy.' },

  // Tứ Mộ
  { diaChi: 'Thìn', category: 'tu-mo', tangCan: ['Mậu', 'Ất', 'Quý'], chinhKhi: 'Mậu', phuKhi: 'Ất', tapKhi: 'Quý', soNgay: { 'Mậu': 18, 'Ất': 9, 'Quý': 3 }, yNghia: 'Thìn chứa Mậu (60%), Ất (30%), Quý (10%) - Mộ của Thủy, cuối Xuân.' },
  { diaChi: 'Tuất', category: 'tu-mo', tangCan: ['Mậu', 'Tân', 'Đinh'], chinhKhi: 'Mậu', phuKhi: 'Tân', tapKhi: 'Đinh', soNgay: { 'Mậu': 18, 'Tân': 9, 'Đinh': 3 }, yNghia: 'Tuất chứa Mậu (60%), Tân (30%), Đinh (10%) - Mộ của Hỏa, cuối Thu.' },
  { diaChi: 'Sửu', category: 'tu-mo', tangCan: ['Kỷ', 'Quý', 'Tân'], chinhKhi: 'Kỷ', phuKhi: 'Quý', tapKhi: 'Tân', soNgay: { 'Kỷ': 18, 'Quý': 9, 'Tân': 3 }, yNghia: 'Sửu chứa Kỷ (60%), Quý (30%), Tân (10%) - Mộ của Kim, cuối Đông.' },
  { diaChi: 'Mùi', category: 'tu-mo', tangCan: ['Kỷ', 'Đinh', 'Ất'], chinhKhi: 'Kỷ', phuKhi: 'Đinh', tapKhi: 'Ất', soNgay: { 'Kỷ': 18, 'Đinh': 9, 'Ất': 3 }, yNghia: 'Mùi chứa Kỷ (60%), Đinh (30%), Ất (10%) - Mộ của Mộc, cuối Hè.' }
];

export const diaChiTangCanPoem = {
  title: 'Ca Quyết Địa Chi Tàng Can',
  lines: [
    'Tý cung Quý thủy tại kỳ trung',
    'Sửu Quý Tân Kim Kỷ Thổ đồng',
    'Dần cung Giáp Mộc kiêm Bính Mậu',
    'Mão cung Ất Mộc độc tương phùng',
    'Thìn tàng Ất Mậu tam phân Quý',
    'Tị giấu Canh Kim Bính Mậu tòng',
    'Ngọ cung Đinh hỏa tịnh Kỷ thổ',
    'Mùi cung Ất Kỷ Đinh cộng tông',
    'Thân vị Canh Kim Nhâm thủy Mậu',
    'Dậu cung Tân Kim độc phong long',
    'Tuất cung Tân Kim cập Đinh Mậu',
    'Hợi tàng Nhâm Giáp là chân tôn'
  ]
};
