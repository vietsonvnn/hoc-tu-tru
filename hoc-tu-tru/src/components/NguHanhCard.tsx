import { useState } from 'react';
import { motion } from 'framer-motion';
import { NguHanhData } from '../types';
import { getNguHanhColor } from '../utils/colors';

interface NguHanhCardProps {
  data: NguHanhData;
  onClick?: () => void;
}

export const NguHanhCard = ({ data, onClick }: NguHanhCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const colors = getNguHanhColor(data.loai);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    onClick?.();
  };

  return (
    <div className="perspective-1000 cursor-pointer" onClick={handleClick}>
      <motion.div
        className="relative w-full h-80 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 ${colors.bg} ${colors.text} rounded-2xl p-6 shadow-lg border-2 ${colors.border} backface-hidden flex flex-col justify-center items-center`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">{data.ten}</h2>
          <p className="text-lg text-center italic">{data.tinhChat}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 ${colors.bg} ${colors.text} rounded-2xl p-6 shadow-lg border-2 ${colors.border} backface-hidden overflow-y-auto`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="font-bold text-xl mb-3">{data.ten}</h3>

          <div className="space-y-3 text-sm">
            <div>
              <span className="font-semibold">Tính chất: </span>
              {data.tinhChat}
            </div>

            <div>
              <span className="font-semibold">Hình ảnh: </span>
              {data.hinhAnh}
            </div>

            <div>
              <span className="font-semibold">Màu sắc: </span>
              {data.mauSac}
            </div>

            <div>
              <span className="font-semibold">Phương hướng: </span>
              {data.phuongHuong}
            </div>

            <div>
              <span className="font-semibold">Nghề nghiệp: </span>
              {data.ngheNghiep}
            </div>

            <div>
              <span className="font-semibold">Cơ thể, thực phẩm: </span>
              {data.coThe}
            </div>

            {data.moTaChiTiet && (
              <div className="mt-4 pt-3 border-t border-current/30">
                <p className="text-xs leading-relaxed">{data.moTaChiTiet}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
