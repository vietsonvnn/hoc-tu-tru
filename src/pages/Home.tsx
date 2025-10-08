import { useState } from 'react';
import { nguHanhData } from '../data/nguHanh';
import { NguHanhCard } from '../components/NguHanhCard';
import { BonMuaGrid } from '../components/BonMuaGrid';

export const Home = () => {
  const [view, setView] = useState<'cards' | 'seasons'>('cards');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmN2JiNGYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NCAxNi05Ljk0IDE2IDBzLTE2IDkuOTQtMTYgMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto py-12 px-4">
        {/* Header với gradient text */}
        <header className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-4xl">☯</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Học Tứ Trụ
          </h1>
          <p className="text-gray-700 text-xl font-medium max-w-2xl mx-auto">
            Hệ thống flashcard học Âm Dương, Ngũ Hành, Thiên Can, Địa Chi
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>{nguHanhData.length} thẻ học | Tương tác để ghi nhớ</span>
          </div>
        </header>

        {/* Navigation với style đẹp hơn */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setView('cards')}
            className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              view === 'cards'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-500/50 scale-105'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>🎴</span>
              Xem Flashcards
            </span>
            {view === 'cards' && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            )}
          </button>
          <button
            onClick={() => setView('seasons')}
            className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              view === 'seasons'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-2xl shadow-emerald-500/50 scale-105'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>🌸</span>
              Xem Theo Mùa
            </span>
            {view === 'seasons' && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            )}
          </button>
        </div>

        {/* Content */}
        {view === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nguHanhData.map((item, index) => (
              <NguHanhCard
                key={index}
                data={item}
              />
            ))}
          </div>
        )}

        {view === 'seasons' && (
          <div className="space-y-16">
            {nguHanhData
              .filter((item) => item.bonMua && item.bonMua.length > 0)
              .map((item, index) => (
                <div key={index}>
                  <BonMuaGrid bonMua={item.bonMua!} tenHanh={item.ten} />
                </div>
              ))}
          </div>
        )}

        {/* Info footer */}
        <footer className="mt-20 text-center">
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <p className="text-gray-700 font-medium">💡 Click vào thẻ để xem chi tiết | Nhấn lại để quay về</p>
          </div>
          <div className="mt-8 text-gray-500 text-sm">
            <p>© 2025 Học Tứ Trụ | Học một cách thông minh</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
