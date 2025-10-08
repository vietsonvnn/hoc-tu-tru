import type { MuaInfo } from '../types';
import { getMuaColor } from '../utils/colors';

interface BonMuaGridProps {
  bonMua: MuaInfo[];
  tenHanh: string;
}

export const BonMuaGrid = ({ bonMua, tenHanh }: BonMuaGridProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {tenHanh.split('-')[0].trim()} trong 4 mùa
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bonMua.map((mua) => (
          <div
            key={mua.mua}
            className={`${getMuaColor(mua.mua)} rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <h3 className="text-2xl font-bold mb-4">
              {mua.mua === 'Xuan' && 'Xuân'}
              {mua.mua === 'Ha' && 'Hạ'}
              {mua.mua === 'Thu' && 'Thu'}
              {mua.mua === 'Dong' && 'Đông'}
            </h3>
            <p className="leading-relaxed text-base">{mua.moTa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
