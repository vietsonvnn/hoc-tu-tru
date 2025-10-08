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
  { diaChi: 'Tý', category: 'tu-chinh', tangCan: ['Quý'], chinhKhi: 'Quý', soNgay: { 'Quý': 30 }, yNghia: 'Tý chỉ chứa Quý Thủy, thuần khiết một hành Thủy.' },
  { diaChi: 'Mão', category: 'tu-chinh', tangCan: ['Ất'], chinhKhi: 'Ất', soNgay: { 'Ất': 30 }, yNghia: 'Mão chỉ chứa Ất Mộc, thuần khiết một hành Mộc.' },
  { diaChi: 'Ngọ', category: 'tu-chinh', tangCan: ['Đinh', 'Kỷ'], chinhKhi: 'Đinh', phuKhi: 'Kỷ', soNgay: { 'Đinh': 30 }, yNghia: 'Ngọ chứa Đinh Hỏa và Kỷ Thổ.' },
  { diaChi: 'Dậu', category: 'tu-chinh', tangCan: ['Tân'], chinhKhi: 'Tân', soNgay: { 'Tân': 30 }, yNghia: 'Dậu chỉ chứa Tân Kim, thuần khiết một hành Kim.' },
  { diaChi: 'Dần', category: 'tu-sinh', tangCan: ['Giáp', 'Bính', 'Mậu'], chinhKhi: 'Giáp', phuKhi: 'Bính', tapKhi: 'Mậu', soNgay: { 'Mậu': 7, 'Bính': 7, 'Giáp': 16 }, yNghia: 'Dần là nơi sinh khởi của Mộc.' },
  { diaChi: 'Thân', category: 'tu-sinh', tangCan: ['Mậu', 'Canh', 'Nhâm'], chinhKhi: 'Canh', phuKhi: 'Nhâm', tapKhi: 'Mậu', soNgay: { 'Nhâm': 7, 'Canh': 7, 'Mậu': 16 }, yNghia: 'Thân là nơi sinh khởi của Kim.' },
  { diaChi: 'Tị', category: 'tu-sinh', tangCan: ['Bính', 'Canh', 'Mậu'], chinhKhi: 'Bính', phuKhi: 'Mậu', tapKhi: 'Canh', soNgay: { 'Mậu': 7, 'Canh': 7, 'Bính': 16 }, yNghia: 'Tị là nơi sinh khởi của Hỏa.' },
  { diaChi: 'Hợi', category: 'tu-sinh', tangCan: ['Nhâm', 'Giáp'], chinhKhi: 'Nhâm', phuKhi: 'Giáp', soNgay: { 'Mậu': 7, 'Giáp': 7, 'Nhâm': 16 }, yNghia: 'Hợi là nơi sinh khởi của Thủy.' },
  { diaChi: 'Thìn', category: 'tu-mo', tangCan: ['Mậu', 'Ất', 'Quý'], chinhKhi: 'Mậu', phuKhi: 'Ất', tapKhi: 'Quý', soNgay: { 'Ất': 9, 'Quý': 3, 'Mậu': 18 }, yNghia: 'Thìn là Mộ của Thủy, cuối Xuân.' },
  { diaChi: 'Tuất', category: 'tu-mo', tangCan: ['Mậu', 'Tân', 'Đinh'], chinhKhi: 'Mậu', phuKhi: 'Tân', tapKhi: 'Đinh', soNgay: { 'Đinh': 9, 'Tân': 3, 'Mậu': 18 }, yNghia: 'Tuất là Mộ của Hỏa, cuối Thu.' },
  { diaChi: 'Sửu', category: 'tu-mo', tangCan: ['Kỷ', 'Quý', 'Tân'], chinhKhi: 'Kỷ', phuKhi: 'Quý', tapKhi: 'Tân', soNgay: { 'Quý': 9, 'Tân': 3, 'Kỷ': 18 }, yNghia: 'Sửu là Mộ của Kim, cuối Đông.' },
  { diaChi: 'Mùi', category: 'tu-mo', tangCan: ['Kỷ', 'Ất', 'Đinh'], chinhKhi: 'Kỷ', phuKhi: 'Đinh', tapKhi: 'Ất', soNgay: { 'Ất': 9, 'Đinh': 3, 'Kỷ': 18 }, yNghia: 'Mùi là Mộ của Mộc, cuối Hè.' }
];

export const diaChiTangCanPoem = {
  title: 'Ca Quyết Địa Chi Tàng Can',
  lines: ['Tý tàng Quý nước trong đông lạnh', 'Sửu có Kỷ Quý Tân ba khí', 'Dần tàng Giáp Mộc và Bính Mậu', 'Mão chứa Ất Mộc xuân đầy khí', '', 'Thìn là Mậu Ất cùng Quý nước', 'Tị chứa Bính Hỏa Canh và Mậu', 'Ngọ tàng Đinh Hỏa cùng Kỷ Thổ', 'Mùi có Kỷ Thổ Đinh và Ất', '', 'Thân tàng Mậu Thổ Canh và Nhâm', 'Dậu chứa Tân Kim thu phương khí', 'Tuất là Mậu Thổ Tân và Đinh', 'Hợi tàng Nhâm Thủy với Giáp Mộc']
};
