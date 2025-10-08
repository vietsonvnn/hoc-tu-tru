import { useState } from 'react';
import { nguHanhData } from '../data/nguHanh';
import { NguHanhCard } from '../components/NguHanhCard';
import { BonMuaGrid } from '../components/BonMuaGrid';
import { NguHanhData } from '../types';

export const Home = () => {
  const [selectedCard, setSelectedCard] = useState<NguHanhData | null>(null);
  const [view, setView] = useState<'cards' | 'seasons'>('cards');

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Học Tứ Trụ
          </h1>
          <p className="text-gray-600 text-lg">
            Hệ thống flashcard học Âm Dương, Ngũ Hành, Thiên Can, Địa Chi
          </p>
        </header>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setView('cards')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              view === 'cards'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Xem Flashcards
          </button>
          <button
            onClick={() => setView('seasons')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              view === 'seasons'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Xem Theo Mùa
          </button>
        </div>

        {/* Content */}
        {view === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nguHanhData.map((item, index) => (
              <NguHanhCard
                key={index}
                data={item}
                onClick={() => setSelectedCard(item)}
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
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Click vào thẻ để xem chi tiết | Nhấn lại để quay về</p>
        </footer>
      </div>
    </div>
  );
};
