import { motion } from 'framer-motion';
import type { MuaInfo } from '../types';
import { getMuaColor } from '../utils/colors';

interface BonMuaGridProps {
  bonMua: MuaInfo[];
  tenHanh: string;
}

const seasonIcons: Record<string, string> = {
  Xuân: '🌸',
  Hạ: '☀️',
  Thu: '🍂',
  Đông: '❄️',
};

const seasonNames: Record<string, string> = {
  Xuân: 'Xuân',
  Hạ: 'Hạ',
  Thu: 'Thu',
  Đông: 'Đông',
};

export const BonMuaGrid = ({ bonMua, tenHanh }: BonMuaGridProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            {tenHanh.split('-')[0].trim()} trong 4 mùa
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonMua.map((mua, index) => (
            <motion.div
              key={mua.mua}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              className="group cursor-pointer"
            >
              <div
                className={`${getMuaColor(mua.mua)} rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl relative overflow-hidden`}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-5xl transform group-hover:scale-125 transition-transform duration-300">
                      {seasonIcons[mua.mua]}
                    </div>
                    <h3 className="text-3xl font-black drop-shadow-lg">
                      {seasonNames[mua.mua]}
                    </h3>
                  </div>

                  <div className="w-16 h-1 bg-white/30 rounded-full mb-4"></div>

                  <p className="leading-relaxed text-base font-medium opacity-95">
                    {mua.moTa}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="text-6xl">{seasonIcons[mua.mua]}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
