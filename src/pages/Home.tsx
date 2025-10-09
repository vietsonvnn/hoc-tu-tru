import { useState } from 'react';
import { nguHanhData } from '../data/nguHanh';
import { amDuongData } from '../data/amDuong';
import { NguHanhCard } from '../components/NguHanhCard';
import { BonMuaGrid } from '../components/BonMuaGrid';
import { QuanHeTable } from '../components/QuanHeTable';
import { AmDuongCard } from '../components/AmDuongCard';
import { AmDuongHopXungTable } from '../components/AmDuongHopXungTable';
import { TrangThaiNguHanhTable } from '../components/TrangThaiNguHanhTable';
import { IntroductionSection } from '../components/IntroductionSection';
import { thienCanData } from '../data/thienCan';
import { diaChiData } from '../data/diaChi';
import { ThienCanCard } from '../components/ThienCanCard';
import { DiaChiCard } from '../components/DiaChiCard';
import { ThienCanQuanHeTable } from '../components/ThienCanQuanHeTable';
import { DiaChiQuanHeTable } from '../components/DiaChiQuanHeTable';
import { BatQuaiCompass } from '../components/BatQuaiCompass';
import { BodyMap } from '../components/BodyMap';
import { FlashCardComparison } from '../components/FlashCardComparison';
import { DiaChiTangCanTable } from '../components/DiaChiTangCanTable';
import { TruongSinhWheel } from '../components/TruongSinhWheel';
import { TruongSinhPoem } from '../components/TruongSinhPoem';
import { TruongSinhPhanLoai } from '../components/TruongSinhPhanLoai';
import { LuanDoanTheoTru } from '../components/LuanDoanTheoTru';
import { HandRulesDiagram } from '../components/HandRulesDiagram';
import { HandRulesGuide } from '../components/HandRulesGuide';
import { HandQuiz } from '../components/HandQuiz';
import { RelationQuiz } from '../components/RelationQuiz';
import { VideoSection } from '../components/VideoSection';
import { ThienCanNamSinhTable } from '../components/ThienCanNamSinhTable';

export const Home = () => {
  const [lesson, setLesson] = useState<'bai1' | 'bai2' | 'bai3' | 'phuluc1' | 'phuluc2' | 'phuluc3'>('bai1');
  const [bai1View, setBai1View] = useState<'intro' | 'video' | 'amduong' | 'nguhanh'>('intro');
  const [amDuongSubView, setAmDuongSubView] = useState<'cards' | 'hopxung'>('cards');
  const [nguHanhSubView, setNguHanhSubView] = useState<'cards' | 'seasons' | 'trangthai' | 'relations'>('cards');
  const [bai2View, setBai2View] = useState<'video' | 'thiencan' | 'diachi' | 'relations' | 'tracuu'>('thiencan');
  const [bai3View, setBai3View] = useState<'video' | 'tangcan' | 'truongsinh' | 'poem' | 'phanloai' | 'luandoan'>('tangcan');
  const [phuLuc1View, setPhuLuc1View] = useState<'huong' | 'cothe'>('huong');
  const [phuLuc2View, setPhuLuc2View] = useState<'compare' | 'quiz'>('compare');
  const [phuLuc3View, setPhuLuc3View] = useState<'diagram' | 'guide' | 'quiz'>('diagram');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmN2JiNGYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NCAxNi05Ljk0IDE2IDBzLTE2IDkuOTQtMTYgMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto py-12 px-4">
        {/* Phụ Lục Navigation - đặt lên trên cùng */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setLesson('phuluc1')}
              className={`group relative px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 ${
                lesson === 'phuluc1'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>📖</span>
                Bát Quái & Cơ Thể
              </span>
              {lesson === 'phuluc1' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setLesson('phuluc2')}
              className={`group relative px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 ${
                lesson === 'phuluc2'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-xl shadow-pink-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🔄</span>
                So Sánh Quan Hệ
              </span>
              {lesson === 'phuluc2' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setLesson('phuluc3')}
              className={`group relative px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 ${
                lesson === 'phuluc3'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xl shadow-cyan-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>👋</span>
                Quy Tắc Bàn Tay
              </span>
              {lesson === 'phuluc3' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
          </div>
        </div>

        {/* Header với gradient text */}
        <header className="text-center mb-16">
          <div className="inline-block mb-6">
            <div
              onClick={() => {
                setLesson('bai1');
                setBai1View('intro');
              }}
              className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <span className="text-4xl">☯</span>
            </div>
          </div>
          <h1
            onClick={() => {
              setLesson('bai1');
              setBai1View('intro');
            }}
            className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Học Tứ Trụ Bát Tự
          </h1>
          <p className="text-gray-700 text-xl font-medium max-w-2xl mx-auto">
            Hệ thống flashcard học Âm Dương, Ngũ Hành, Thiên Can, Địa Chi, Trường Sinh
          </p>
        </header>

        {/* Main Lesson Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
            <button
              onClick={() => setLesson('bai3')}
              className={`group relative px-10 py-5 rounded-3xl font-black text-xl transition-all duration-300 ${
                lesson === 'bai3'
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-2xl shadow-violet-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>🔮</span>
                Bài 3: Trường Sinh - Tàng Can
              </span>
              {lesson === 'bai3' && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-400 to-fuchsia-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
          </div>
        </div>

        {/* Sub Navigation - Bài 1 */}
        {lesson === 'bai1' && (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setBai1View('intro')}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  bai1View === 'intro'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-700 text-white shadow-2xl shadow-blue-500/50 scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>📖</span>
                  Giới Thiệu
                </span>
                {bai1View === 'intro' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                )}
              </button>
              <button
                onClick={() => setBai1View('amduong')}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  bai1View === 'amduong'
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-700 text-white shadow-2xl shadow-yellow-500/50 scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>☯️</span>
                  Âm Dương
                </span>
                {bai1View === 'amduong' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                )}
              </button>
              <button
                onClick={() => setBai1View('nguhanh')}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  bai1View === 'nguhanh'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-700 text-white shadow-2xl shadow-purple-500/50 scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>🌀</span>
                  Ngũ Hành
                </span>
                {bai1View === 'nguhanh' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                )}
              </button>
              <button
                onClick={() => setBai1View('video')}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  bai1View === 'video'
                    ? 'bg-gradient-to-r from-red-600 to-pink-700 text-white shadow-2xl shadow-red-500/50 scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>📺</span>
                  Video
                </span>
                {bai1View === 'video' && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                )}
              </button>
            </div>

            {/* Sub-sub navigation for Âm Dương */}
            {bai1View === 'amduong' && (
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                  onClick={() => setAmDuongSubView('cards')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    amDuongSubView === 'cards'
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white'
                  }`}
                >
                  🎴 Flashcards
                </button>
                <button
                  onClick={() => setAmDuongSubView('hopxung')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    amDuongSubView === 'hopxung'
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white'
                  }`}
                >
                  ⚖️ Hợp - Xung
                </button>
              </div>
            )}

            {/* Sub-sub navigation for Ngũ Hành */}
            {bai1View === 'nguhanh' && (
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                  onClick={() => setNguHanhSubView('cards')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    nguHanhSubView === 'cards'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white'
                  }`}
                >
                  🎴 Flashcards
                </button>
                <button
                  onClick={() => setNguHanhSubView('seasons')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    nguHanhSubView === 'seasons'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white'
                  }`}
                >
                  🌸 Theo Mùa
                </button>
                <button
                  onClick={() => setNguHanhSubView('trangthai')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    nguHanhSubView === 'trangthai'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white'
                  }`}
                >
                  🔄 Trạng Thái
                </button>
                <button
                  onClick={() => setNguHanhSubView('relations')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    nguHanhSubView === 'relations'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white/60 text-gray-700 hover:bg-white'
                  }`}
                >
                  ⚡ Quan Hệ
                </button>
              </div>
            )}
          </>
        )}

        {lesson === 'bai2' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setBai2View('thiencan')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai2View === 'thiencan'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-2xl shadow-indigo-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>☯</span>
                Thiên Can
              </span>
              {bai2View === 'thiencan' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400 to-indigo-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setBai2View('diachi')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai2View === 'diachi'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-2xl shadow-purple-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🐉</span>
                Địa Chi
              </span>
              {bai2View === 'diachi' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setBai2View('relations')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai2View === 'relations'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-700 text-white shadow-2xl shadow-pink-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>⚡</span>
                Quan Hệ
              </span>
              {bai2View === 'relations' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setBai2View('tracuu')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai2View === 'tracuu'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-2xl shadow-emerald-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🔍</span>
                Tra Cứu
              </span>
              {bai2View === 'tracuu' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setBai2View('video')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai2View === 'video'
                  ? 'bg-gradient-to-r from-red-600 to-pink-700 text-white shadow-2xl shadow-red-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>📺</span>
                Video
              </span>
              {bai2View === 'video' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
          </div>
        )}

        {lesson === 'bai3' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setBai3View('tangcan')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai3View === 'tangcan'
                  ? 'bg-gradient-to-r from-violet-600 to-violet-700 text-white shadow-2xl shadow-violet-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🔐</span>
                Địa Chi Tàng Can
              </span>
              {bai3View === 'tangcan' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400 to-violet-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setBai3View('truongsinh')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai3View === 'truongsinh'
                  ? 'bg-gradient-to-r from-fuchsia-600 to-fuchsia-700 text-white shadow-2xl shadow-fuchsia-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🔄</span>
                Vòng Trường Sinh
              </span>
              {bai3View === 'truongsinh' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setBai3View('poem')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai3View === 'poem'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-700 text-white shadow-2xl shadow-purple-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>📜</span>
                Ca Quyết
              </span>
              {bai3View === 'poem' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setBai3View('phanloai')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai3View === 'phanloai'
                  ? 'bg-gradient-to-r from-amber-600 to-yellow-700 text-white shadow-2xl shadow-amber-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>⚖️</span>
                Phân Loại
              </span>
              {bai3View === 'phanloai' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setBai3View('luandoan')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai3View === 'luandoan'
                  ? 'bg-gradient-to-r from-cyan-600 to-sky-700 text-white shadow-2xl shadow-cyan-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>📊</span>
                Luận Đoán
              </span>
              {bai3View === 'luandoan' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setBai3View('video')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                bai3View === 'video'
                  ? 'bg-gradient-to-r from-red-600 to-pink-700 text-white shadow-2xl shadow-red-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>📺</span>
                Video
              </span>
              {bai3View === 'video' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
          </div>
        )}

        {lesson === 'phuluc1' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setPhuLuc1View('huong')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                phuLuc1View === 'huong'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-2xl shadow-purple-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🧭</span>
                Bát Quái - Hướng
              </span>
              {phuLuc1View === 'huong' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-indigo-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setPhuLuc1View('cothe')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                phuLuc1View === 'cothe'
                  ? 'bg-gradient-to-r from-rose-600 to-pink-700 text-white shadow-2xl shadow-rose-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🫀</span>
                Cơ Thể Người
              </span>
              {phuLuc1View === 'cothe' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
          </div>
        )}

        {lesson === 'phuluc2' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setPhuLuc2View('compare')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                phuLuc2View === 'compare'
                  ? 'bg-gradient-to-r from-pink-600 to-rose-700 text-white shadow-2xl shadow-pink-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🔄</span>
                So Sánh
              </span>
              {phuLuc2View === 'compare' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setPhuLuc2View('quiz')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                phuLuc2View === 'quiz'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-2xl shadow-purple-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🎯</span>
                Quiz
              </span>
              {phuLuc2View === 'quiz' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-purple-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
          </div>
        )}

        {lesson === 'phuluc3' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setPhuLuc3View('diagram')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                phuLuc3View === 'diagram'
                  ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-2xl shadow-cyan-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>👋</span>
                Sơ Đồ Bàn Tay
              </span>
              {phuLuc3View === 'diagram' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setPhuLuc3View('guide')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                phuLuc3View === 'guide'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>📚</span>
                Hướng Dẫn
              </span>
              {phuLuc3View === 'guide' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
            <button
              onClick={() => setPhuLuc3View('quiz')}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                phuLuc3View === 'quiz'
                  ? 'bg-gradient-to-r from-orange-600 to-red-700 text-white shadow-2xl shadow-orange-500/50 scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>🎯</span>
                Quiz
              </span>
              {phuLuc3View === 'quiz' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-red-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
            </button>
          </div>
        )}

        {/* Content */}
        {lesson === 'bai1' && (
          <>
            {bai1View === 'intro' && <IntroductionSection />}

            {bai1View === 'video' && (
              <VideoSection
                videoId="TfWTqCEPOjk"
                title="Video Bài Học - Âm Dương & Ngũ Hành"
                description="Xem video để hiểu rõ hơn về Âm Dương và Ngũ Hành"
              />
            )}

            {bai1View === 'amduong' && (
              <>
                {amDuongSubView === 'cards' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {amDuongData.map((item, index) => (
                      <AmDuongCard key={index} data={item} />
                    ))}
                  </div>
                )}

                {amDuongSubView === 'hopxung' && <AmDuongHopXungTable />}
              </>
            )}

            {bai1View === 'nguhanh' && (
              <>
                {nguHanhSubView === 'cards' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nguHanhData.map((item, index) => (
                      <NguHanhCard key={index} data={item} />
                    ))}
                  </div>
                )}

                {nguHanhSubView === 'seasons' && (
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

                {nguHanhSubView === 'trangthai' && <TrangThaiNguHanhTable />}

                {nguHanhSubView === 'relations' && <QuanHeTable />}
              </>
            )}
          </>
        )}

        {lesson === 'bai2' && (
          <>
            {bai2View === 'video' && (
              <VideoSection
                videoId="6ivOtxRAonk"
                title="Video Bài Học - Thiên Can & Địa Chi"
                description="Xem video để hiểu rõ hơn về Thiên Can và Địa Chi"
              />
            )}

            {bai2View === 'thiencan' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {thienCanData.map((item, index) => (
                  <ThienCanCard
                    key={index}
                    data={item}
                  />
                ))}
              </div>
            )}

            {bai2View === 'diachi' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {diaChiData.map((item, index) => (
                  <DiaChiCard
                    key={index}
                    data={item}
                  />
                ))}
              </div>
            )}

            {bai2View === 'relations' && (
              <div className="space-y-16">
                <ThienCanQuanHeTable />
                <DiaChiQuanHeTable />
              </div>
            )}

            {bai2View === 'tracuu' && <ThienCanNamSinhTable />}
          </>
        )}

        {lesson === 'bai3' && (
          <>
            {bai3View === 'video' && (
              <VideoSection
                videoId="OVjG1YZfrjg"
                title="Video Bài Học - Địa Chi Tàng Can & Trường Sinh"
                description="Xem video để hiểu rõ hơn về Địa Chi Tàng Can và Vòng Trường Sinh"
              />
            )}

            {bai3View === 'tangcan' && <DiaChiTangCanTable />}
            {bai3View === 'truongsinh' && <TruongSinhWheel />}
            {bai3View === 'poem' && <TruongSinhPoem />}
            {bai3View === 'phanloai' && <TruongSinhPhanLoai />}
            {bai3View === 'luandoan' && <LuanDoanTheoTru />}
          </>
        )}

        {lesson === 'phuluc1' && (
          <>
            {phuLuc1View === 'huong' && <BatQuaiCompass />}
            {phuLuc1View === 'cothe' && <BodyMap />}
          </>
        )}

        {lesson === 'phuluc2' && (
          <>
            {phuLuc2View === 'compare' && <FlashCardComparison />}
            {phuLuc2View === 'quiz' && <RelationQuiz />}
          </>
        )}

        {lesson === 'phuluc3' && (
          <>
            {phuLuc3View === 'diagram' && <HandRulesDiagram />}
            {phuLuc3View === 'guide' && <HandRulesGuide />}
            {phuLuc3View === 'quiz' && <HandQuiz />}
          </>
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
