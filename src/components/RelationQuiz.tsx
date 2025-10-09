import { useState, useEffect } from 'react';
import { nguHanhData } from '../data/nguHanh';
import { thienCanData } from '../data/thienCan';
import { diaChiData } from '../data/diaChi';
import type { NguHanhType } from '../types';
import { getNguHanhColor } from '../utils/colors';

type QuizMode = 'nguhanh' | 'thiencan' | 'diachi';
type GameState = 'ready' | 'playing' | 'correct' | 'wrong' | 'finished';

// Helper functions from FlashCardComparison
const analyzeNguHanhRelation = (nh1: NguHanhType, nh2: NguHanhType) => {
  const relations: Record<NguHanhType, Record<string, NguHanhType[]>> = {
    Kim: { sinh: ['Thủy'], khắc: ['Mộc'], bịSinh: ['Thổ'], bịKhắc: ['Hỏa'], đồng: ['Kim'] },
    Mộc: { sinh: ['Hỏa'], khắc: ['Thổ'], bịSinh: ['Thủy'], bịKhắc: ['Kim'], đồng: ['Mộc'] },
    Thủy: { sinh: ['Mộc'], khắc: ['Hỏa'], bịSinh: ['Kim'], bịKhắc: ['Thổ'], đồng: ['Thủy'] },
    Hỏa: { sinh: ['Thổ'], khắc: ['Kim'], bịSinh: ['Mộc'], bịKhắc: ['Thủy'], đồng: ['Hỏa'] },
    Thổ: { sinh: ['Kim'], khắc: ['Thủy'], bịSinh: ['Hỏa'], bịKhắc: ['Mộc'], đồng: ['Thổ'] }
  };

  if (relations[nh1].sinh.includes(nh2)) return 'Sinh';
  if (relations[nh1].khắc.includes(nh2)) return 'Khắc';
  if (relations[nh1].bịSinh.includes(nh2)) return 'Được Sinh';
  if (relations[nh1].bịKhắc.includes(nh2)) return 'Bị Khắc';
  if (relations[nh1].đồng.includes(nh2)) return 'Đồng';
  return 'Không rõ';
};

const analyzeThienCanRelation = (can1: string, can2: string) => {
  // Mapping Thiên Can -> Ngũ Hành
  const canToNguHanh: Record<string, NguHanhType> = {
    'Giáp': 'Mộc', 'Ất': 'Mộc',
    'Bính': 'Hỏa', 'Đinh': 'Hỏa',
    'Mậu': 'Thổ', 'Kỷ': 'Thổ',
    'Canh': 'Kim', 'Tân': 'Kim',
    'Nhâm': 'Thủy', 'Quý': 'Thủy'
  };

  // Hợp
  const hops = [['Giáp', 'Kỷ'], ['Ất', 'Canh'], ['Bính', 'Tân'], ['Đinh', 'Nhâm'], ['Mậu', 'Quý']];
  for (const hop of hops) {
    if ((hop[0] === can1 && hop[1] === can2) || (hop[0] === can2 && hop[1] === can1)) {
      return 'Hợp';
    }
  }

  // Khắc qua Ngũ Hành
  const nh1 = canToNguHanh[can1];
  const nh2 = canToNguHanh[can2];
  if (nh1 && nh2) {
    const nhRel = analyzeNguHanhRelation(nh1, nh2);
    if (nhRel === 'Khắc') return 'Khắc';
    if (nhRel === 'Sinh') return 'Sinh';
    if (nhRel === 'Đồng' && can1 !== can2) return 'Đồng Hành';
  }

  return 'Bình thường';
};

const analyzeDiaChiRelation = (chi1: string, chi2: string) => {
  // Lục Hợp
  const lucHops = [
    ['Tý', 'Sửu'], ['Dần', 'Hợi'], ['Mão', 'Tuất'],
    ['Thìn', 'Dậu'], ['Tị', 'Thân'], ['Ngọ', 'Mùi']
  ];
  for (const hop of lucHops) {
    if ((hop[0] === chi1 && hop[1] === chi2) || (hop[0] === chi2 && hop[1] === chi1)) {
      return 'Lục Hợp';
    }
  }

  // Lục Xung
  const lucXungs = [
    ['Tý', 'Ngọ'], ['Sửu', 'Mùi'], ['Dần', 'Thân'],
    ['Mão', 'Dậu'], ['Thìn', 'Tuất'], ['Tị', 'Hợi']
  ];
  for (const xung of lucXungs) {
    if ((xung[0] === chi1 && xung[1] === chi2) || (xung[0] === chi2 && xung[1] === chi1)) {
      return 'Lục Xung';
    }
  }

  return 'Bình thường';
};

export const RelationQuiz = () => {
  const [mode, setMode] = useState<QuizMode>('nguhanh');
  const [gameState, setGameState] = useState<GameState>('ready');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions] = useState(10);
  const [questionData, setQuestionData] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing' || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleWrongAnswer();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const startQuiz = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    generateQuestion();
  };

  const generateQuestion = () => {
    let item1, item2, correctAnswer, options;

    switch (mode) {
      case 'nguhanh': {
        const nh1 = nguHanhData[Math.floor(Math.random() * nguHanhData.length)];
        const nh2 = nguHanhData[Math.floor(Math.random() * nguHanhData.length)];
        correctAnswer = analyzeNguHanhRelation(nh1.ten as NguHanhType, nh2.ten as NguHanhType);
        options = ['Sinh', 'Khắc', 'Được Sinh', 'Bị Khắc', 'Đồng'];
        item1 = nh1;
        item2 = nh2;
        break;
      }

      case 'thiencan': {
        const tc1 = thienCanData[Math.floor(Math.random() * thienCanData.length)];
        const tc2 = thienCanData[Math.floor(Math.random() * thienCanData.length)];
        correctAnswer = analyzeThienCanRelation(tc1.can, tc2.can);
        options = ['Hợp', 'Khắc', 'Sinh', 'Đồng Hành', 'Bình thường'];
        item1 = tc1;
        item2 = tc2;
        break;
      }

      case 'diachi': {
        const dc1 = diaChiData[Math.floor(Math.random() * diaChiData.length)];
        const dc2 = diaChiData[Math.floor(Math.random() * diaChiData.length)];
        correctAnswer = analyzeDiaChiRelation(dc1.ten, dc2.ten);
        options = ['Lục Hợp', 'Lục Xung', 'Bình thường'];
        item1 = dc1;
        item2 = dc2;
        break;
      }
    }

    setQuestionData({ item1, item2, correctAnswer, options });
    setTimeLeft(15);
  };

  const handleAnswer = (answer: string) => {
    if (gameState !== 'playing') return;

    if (answer === questionData.correctAnswer) {
      setScore(score + 1);
      setStreak(streak + 1);
      if (streak + 1 > bestStreak) setBestStreak(streak + 1);
      setGameState('correct');
      setTimeout(() => {
        if (currentQuestion + 1 >= totalQuestions) {
          setGameState('finished');
        } else {
          setCurrentQuestion(currentQuestion + 1);
          setGameState('playing');
          generateQuestion();
        }
      }, 1500);
    } else {
      handleWrongAnswer();
    }
  };

  const handleWrongAnswer = () => {
    setStreak(0);
    setGameState('wrong');
    setTimeout(() => {
      if (currentQuestion + 1 >= totalQuestions) {
        setGameState('finished');
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setGameState('playing');
        generateQuestion();
      }
    }, 2000);
  };

  const getTimeColor = () => {
    if (timeLeft > 10) return 'text-green-600';
    if (timeLeft > 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          🎯 Quiz Quan Hệ
        </h2>
        <p className="text-gray-700 text-lg">Kiểm tra kiến thức về Sinh - Khắc - Hợp - Xung</p>
      </div>

      {/* Ready State */}
      {gameState === 'ready' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Chọn Loại Câu Hỏi</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => setMode('nguhanh')}
                className={`p-6 rounded-xl font-bold transition-all ${
                  mode === 'nguhanh'
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-4xl mb-2">🌀</div>
                <div>Ngũ Hành</div>
                <div className="text-xs opacity-80 mt-1">Sinh - Khắc</div>
              </button>

              <button
                onClick={() => setMode('thiencan')}
                className={`p-6 rounded-xl font-bold transition-all ${
                  mode === 'thiencan'
                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-4xl mb-2">☯</div>
                <div>Thiên Can</div>
                <div className="text-xs opacity-80 mt-1">Hợp - Xung</div>
              </button>

              <button
                onClick={() => setMode('diachi')}
                className={`p-6 rounded-xl font-bold transition-all ${
                  mode === 'diachi'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-4xl mb-2">🐉</div>
                <div>Địa Chi</div>
                <div className="text-xs opacity-80 mt-1">Lục Hợp - Lục Xung</div>
              </button>
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="w-full py-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-2xl font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            🚀 Bắt Đầu Quiz
          </button>

          {bestStreak > 0 && (
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 text-center">
              <div className="text-sm text-gray-700 mb-1">Chuỗi đúng dài nhất</div>
              <div className="text-4xl font-black text-orange-600">🔥 {bestStreak}</div>
            </div>
          )}
        </div>
      )}

      {/* Playing State */}
      {(gameState === 'playing' || gameState === 'correct' || gameState === 'wrong') && questionData && (
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <div className="text-sm text-gray-600">Câu hỏi</div>
              <div className="text-2xl font-black text-blue-600">{currentQuestion + 1}/{totalQuestions}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <div className="text-sm text-gray-600">Điểm</div>
              <div className="text-2xl font-black text-green-600">{score}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <div className="text-sm text-gray-600">Thời gian</div>
              <div className={`text-2xl font-black ${getTimeColor()}`}>{timeLeft}s</div>
            </div>
          </div>

          {streak > 0 && (
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-3 text-center">
              <span className="text-lg font-bold text-orange-600">🔥 Chuỗi đúng: {streak}</span>
            </div>
          )}

          {/* Question Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Quan hệ giữa hai {mode === 'nguhanh' ? 'Ngũ Hành' : mode === 'thiencan' ? 'Thiên Can' : 'Địa Chi'} này là gì?
            </h3>

            <div className="flex items-center justify-center gap-8 mb-8">
              {/* Card 1 */}
              <div className={`${mode === 'nguhanh' ? getNguHanhColor(questionData.item1.ten).bg : 'bg-gradient-to-br from-blue-500 to-purple-500'} text-white rounded-2xl p-8 shadow-xl w-48`}>
                <div className="text-center">
                  <div className="text-5xl mb-3">{questionData.item1.kyHieu || questionData.item1.ten}</div>
                  <div className="text-2xl font-black">{questionData.item1.ten}</div>
                </div>
              </div>

              <div className="text-5xl">❓</div>

              {/* Card 2 */}
              <div className={`${mode === 'nguhanh' ? getNguHanhColor(questionData.item2.ten).bg : 'bg-gradient-to-br from-pink-500 to-red-500'} text-white rounded-2xl p-8 shadow-xl w-48`}>
                <div className="text-center">
                  <div className="text-5xl mb-3">{questionData.item2.kyHieu || questionData.item2.ten}</div>
                  <div className="text-2xl font-black">{questionData.item2.ten}</div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="grid md:grid-cols-3 gap-4">
              {questionData.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={gameState !== 'playing'}
                  className={`p-6 rounded-xl font-bold text-lg transition-all ${
                    gameState === 'correct' && option === questionData.correctAnswer
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white scale-105'
                      : gameState === 'wrong' && option === questionData.correctAnswer
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                      : gameState === 'playing'
                      ? 'bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 hover:text-white hover:scale-105'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback */}
          {gameState === 'correct' && (
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 text-center animate-bounce">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-2xl font-black">Chính xác!</div>
            </div>
          )}

          {gameState === 'wrong' && (
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">❌</div>
              <div className="text-2xl font-black mb-2">Sai rồi!</div>
              <div className="text-lg">Đáp án đúng: <span className="font-black">{questionData.correctAnswer}</span></div>
            </div>
          )}
        </div>
      )}

      {/* Finished State */}
      {gameState === 'finished' && (
        <div className="bg-white rounded-2xl p-8 shadow-xl text-center space-y-6">
          <div className="text-6xl mb-4">
            {score >= totalQuestions * 0.8 ? '🏆' : score >= totalQuestions * 0.5 ? '🎉' : '💪'}
          </div>
          <h3 className="text-3xl font-black text-gray-800">
            {score >= totalQuestions * 0.8 ? 'Xuất Sắc!' : score >= totalQuestions * 0.5 ? 'Khá Tốt!' : 'Cố Gắng Lên!'}
          </h3>
          <div className="text-5xl font-black text-purple-600">{score}/{totalQuestions}</div>
          <div className="text-lg text-gray-600">
            Tỷ lệ chính xác: <span className="font-bold">{Math.round((score / totalQuestions) * 100)}%</span>
          </div>
          {bestStreak > 1 && (
            <div className="text-lg text-orange-600">
              🔥 Chuỗi đúng dài nhất: <span className="font-bold">{bestStreak}</span>
            </div>
          )}

          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={startQuiz}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              🔄 Chơi Lại
            </button>
            <button
              onClick={() => setGameState('ready')}
              className="px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              🏠 Về Trang Chủ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
