export type NguHanhType = 'Kim' | 'Moc' | 'Thuy' | 'Hoa' | 'Tho';

export type MuaType = 'Xuan' | 'Ha' | 'Thu' | 'Dong';

export type TrangThaiType = 'Vuong' | 'Tuong' | 'Huu' | 'Tu' | 'Tu';

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
