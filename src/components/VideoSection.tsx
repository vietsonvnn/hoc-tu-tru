import { motion } from 'framer-motion';

interface VideoSectionProps {
  videoId: string;
  title?: string;
  description?: string;
}

export const VideoSection = ({
  videoId,
  title = "Video Bài Học",
  description = "Xem video để hiểu rõ hơn về nội dung bài học"
}: VideoSectionProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 text-lg">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden p-8"
      >
        {/* YouTube Embed */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Info */}
        <div className="mt-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📺</div>
            <div>
              <h3 className="font-black text-lg text-gray-800 mb-2">
                Hướng dẫn xem video
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Xem video từ đầu đến cuối để hiểu toàn bộ nội dung</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Có thể tạm dừng và ghi chú lại các điểm quan trọng</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Kết hợp với flashcards để ôn tập hiệu quả hơn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-600">
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold"
          >
            <span>🔗</span>
            <span>Xem trên YouTube</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
