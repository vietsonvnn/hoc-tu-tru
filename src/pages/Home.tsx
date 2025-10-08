import { useState } from 'react';
import { nguHanhData } from '../data/nguHanh';
import { NguHanhCard } from '../components/NguHanhCard';
import { BonMuaGrid } from '../components/BonMuaGrid';
import { QuanHeTable } from '../components/QuanHeTable';

export const Home = () => {
  const [lesson, setLesson] = useState<'bai1' | 'bai2'>('bai1');
  const [view, setView] = useState<'cards' | 'seasons' | 'relations'>('cards');

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

        {/* Main Lesson Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setLesson('bai1')}
            className={`group relative px-10 py-5 rounded-3xl font-black text-xl transition-all duration-300 ${
              lesson === 'bai1'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl shadow-orange-500/50 scale-105'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>🌀</span>
              Bài 1: Ngũ Hành
            </span>
            {lesson === 'bai1' && (
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400 to-red-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            )}
          </button>
          <button
            onClick={() => setLesson('bai2')}
            className={`group relative px-10 py-5 rounded-3xl font-black text-xl transition-all duration-300 ${
              lesson === 'bai2'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-500/50 scale-105'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>🎋</span>
              Bài 2: Thiên Can - Địa Chi
            </span>
            {lesson === 'bai2' && (
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            )}
          </button>
        </div>

        {/* Sub Navigation - Only show for Bài 1 */}
        {lesson === 'bai1' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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
                Flashcards
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
                Theo Mùa
              </span>
              {view === 'seasons' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setView('relations')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                view === 'relations'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-700 text-white shadow-2xl shadow-purple-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>⚡</span>
                Quan Hệ
              </span>
              {view === 'relations' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
          </div>
        )}

        {/* Content */}
        {lesson === 'bai1' && (
          <>
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

            {view === 'relations' && <QuanHeTable />}
          </>
        )}

        {lesson === 'bai2' && (
          <div className="text-center py-20">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl px-12 py-10 shadow-2xl">
              <div className="text-6xl mb-6">🎋</div>
              <h2 className="text-3xl font-black text-gray-800 mb-4">
                Thiên Can - Địa Chi
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Nội dung đang được chuẩn bị...
              </p>
              <div className="text-sm text-gray-500">
                Vui lòng upload tài liệu lý thuyết để bắt đầu
              </div>
            </div>
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
