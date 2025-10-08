export type NguHanhType = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';

export type MuaType = 'Xuân' | 'Hạ' | 'Thu' | 'Đông';

export type TrangThaiType = 'Vượng' | 'Tướng' | 'Hưu' | 'Tù' | 'Tử';

export interface MuaInfo {
  mua: MuaType;
  moTa: string;
}

export interface TrangThaiTheoMua {
  xuan: TrangThaiType;
  ha: TrangThaiType;
  thu: TrangThaiType;
  dong: TrangThaiType;
  tuQuy: TrangThaiType;
}

export interface NguHanhData {
  ten: string;
  loai: NguHanhType;
  tinhChat: string;
  hinhAnh: string;
  mauSac: string;
  phuongHuong: string;
  ngheNghiep: string;
  coThe: string;
  moTaChiTiet?: string;
  bonMua?: MuaInfo[];
  trangThai?: TrangThaiTheoMua;
}

export interface LearningProgress {
  cardId: string;
  isLearned: boolean;
  lastReviewed?: Date;
  reviewCount: number;
}

// Quan hệ nâng cao Ngũ Hành
export interface QuanHeNangCao {
  loai: 'Sinh' | 'Tiet' | 'Khac' | 'Hao';
  tenQuanHe: string;
  quaDo: string;
  giaiCuu: string;
}

export interface QuanHeTheoHanh {
  hanh: NguHanhType;
  cacQuanHe: QuanHeNangCao[];
}

// ============= THIÊN CAN - ĐỊA CHI =============

// 10 Thiên Can
export type ThienCanType = 'Giáp' | 'Ất' | 'Bính' | 'Đinh' | 'Mậu' | 'Kỷ' | 'Canh' | 'Tân' | 'Nhâm' | 'Quý';

export type CucTinhType = 'Dương' | 'Âm';

export interface ThienCanData {
  ten: string; // Tên đầy đủ như "Giáp Mộc"
  can: ThienCanType;
  nguHanh: NguHanhType;
  cucTinh: CucTinhType;
  hinhAnh: string; // Hình ảnh như "Cây đại thụ"
  tinhCach: string[];
  phuong: string;
  coThe: string;
  mauSac: string;
  moTa?: string;
}

// 12 Địa Chi
export type DiaChiType = 'Tý' | 'Sửu' | 'Dần' | 'Mão' | 'Thìn' | 'Tị' | 'Ngọ' | 'Mùi' | 'Thân' | 'Dậu' | 'Tuất' | 'Hợi';

export interface DiaChiData {
  ten: string; // Tên như "Tý Thủy"
  chi: DiaChiType;
  nguHanh: NguHanhType;
  cucTinh: CucTinhType;
  mua: MuaType | 'Đông' | 'Xuân' | 'Hạ' | 'Thu';
  phuong: string;
  coThe: string;
  conThu: string;
  thoiGian: string;
  thang: string;
  mauSac: string;
}

// Quan hệ Thiên Can
export type ThienCanQuanHeType = 'Sinh' | 'Khac' | 'Xung' | 'Hop';

export interface ThienCanQuanHe {
  can: ThienCanType;
  sinh?: string; // Can nào sinh ra
  beSinh?: string; // Được can nào sinh
  khac?: string; // Khắc can nào
  beKhac?: string; // Bị can nào khắc
  xung?: string; // Xung với can nào
  hop?: { voi: string; hoa: NguHanhType }; // Hợp với can nào, hóa thành gì
}

// Quan hệ Địa Chi
export type DiaChiQuanHeType = 'Sinh' | 'Khac' | 'Xung' | 'Hop' | 'Hinh' | 'Hai' | 'Pha' | 'TamHop' | 'TamHoi';

export interface DiaChiQuanHe {
  chi: DiaChiType;
  lucHop?: { voi: DiaChiType; hoa: NguHanhType }; // Lục hợp
  xung?: DiaChiType; // Lục xung
  hinh?: DiaChiType[]; // Tương hình
  hai?: DiaChiType; // Lục hại
  pha?: DiaChiType; // Lục phá
  tamHop?: { chi1: DiaChiType; chi2: DiaChiType; hoa: NguHanhType }; // Tam hợp
  tamHoi?: { chi1: DiaChiType; chi2: DiaChiType; hoa: NguHanhType }; // Tam hội
}

// Tổ hợp Can Chi cùng trụ
export interface CanChiToHop {
  can: ThienCanType;
  chi: DiaChiType;
  loai: 'TuongSinh' | 'TuongKhac' | 'SongThe' | 'CheDau' | 'TietCuoc' | 'TuHop';
  moTa: string;
}
