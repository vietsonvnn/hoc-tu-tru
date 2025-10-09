import { useState } from 'react';
import { Home } from './pages/Home';
import AnLaSo from './pages/AnLaSo';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'anlaso'>('home');

  return (
    <div>
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-slate-700 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Học Tử Tự Tuy
              </h1>
              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === 'home'
                      ? 'bg-amber-500 text-slate-900'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  Học Cơ Bản
                </button>
                <button
                  onClick={() => setCurrentPage('anlaso')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === 'anlaso'
                      ? 'bg-amber-500 text-slate-900'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  An Lá Số
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      {currentPage === 'home' && <Home />}
      {currentPage === 'anlaso' && <AnLaSo />}
    </div>
  );
}

export default App;
