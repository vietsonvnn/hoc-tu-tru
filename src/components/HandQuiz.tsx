import { useState, useEffect } from 'react';
import { handPositions } from '../data/handRules';

type QuizMode = 'position' | 'month' | 'season';
type GameState = 'ready' | 'playing' | 'correct' | 'wrong' | 'finished';

export const HandQuiz = () => {
  const [mode, setMode] = useState<QuizMode>('position');
  const [gameState, setGameState] = useState<GameState>('ready');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions] = useState(10);
  const [questionData, setQuestionData] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Timer countdown
  useEffect(() => {
    if (gameState !== 'playing' || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleWrongAnswer();
          return 10;
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
    const randomPos = handPositions[Math.floor(Math.random() * handPositions.length)];

    let question, correctAnswer, options;

    switch (mode) {
      case 'position':
        question = `Địa Chi "${randomPos.diaChi}" ở vị trí nào?`;
        correctAnswer = randomPos.finger;
        options = Array.from(new Set(handPositions.map(p => p.finger)))
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);
        if (!options.includes(correctAnswer)) {
          options[Math.floor(Math.random() * 4)] = correctAnswer;
        }
        break;

      case 'month':
        question = `Địa Chi "${randomPos.diaChi}" thuộc tháng nào?`;
        correctAnswer = `Tháng ${randomPos.thang}`;
        options = handPositions
          .map(p => `Tháng ${p.thang}`)
          .filter((v, i, a) => a.indexOf(v) === i)
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);
        if (!options.includes(correctAnswer)) {
          options[Math.floor(Math.random() * 4)] = correctAnswer;
        }
        break;

      case 'season':
        question = `Địa Chi "${randomPos.diaChi}" thuộc mùa nào?`;
        correctAnswer = randomPos.mua;
        options = ['Xuân', 'Hạ', 'Thu', 'Đông'];
        break;

      default:
        break;
    }

    setQuestionData({ question, correctAnswer, options, randomPos });
    setTimeLeft(10);
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
      }, 1000);
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
    }, 1500);
  };

  const getTimeColor = () => {
    if (timeLeft > 6) return 'text-green-600';
    if (timeLeft > 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🎯 Quiz Bàn Tay
        </h2>
        <p className="text-gray-700 text-lg">Thử thách kiến thức của bạn về 12 Địa Chi</p>
      </div>

      {/* Mode Selection */}
      {gameState === 'ready' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Chọn Chế Độ</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => setMode('position')}
                className={`p-6 rounded-xl font-bold transition-all ${
                  mode === 'position'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-4xl mb-2">🖐</div>
                <div>Vị Trí</div>
                <div className="text-xs opacity-80 mt-1">Tìm vị trí trên bàn tay</div>
              </button>

              <button
                onClick={() => setMode('month')}
                className={`p-6 rounded-xl font-bold transition-all ${
                  mode === 'month'
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-4xl mb-2">📅</div>
                <div>Tháng</div>
                <div className="text-xs opacity-80 mt-1">Địa Chi thuộc tháng nào</div>
              </button>

              <button
                onClick={() => setMode('season')}
                className={`p-6 rounded-xl font-bold transition-all ${
                  mode === 'season'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-4xl mb-2">🌸</div>
                <div>Mùa</div>
                <div className="text-xs opacity-80 mt-1">Địa Chi thuộc mùa nào</div>
              </button>
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="w-full py-6 bg-gradient-to-r from-orange-500 to-red-500 text-white text-2xl font-black rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            🚀 Bắt Đầu Quiz
          </button>

          {/* Best Score */}
          {bestStreak > 0 && (
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 text-center">
              <div className="text-sm text-gray-700 mb-1">Chuỗi đúng dài nhất</div>
              <div className="text-4xl font-black text-orange-600">🔥 {bestStreak}</div>
            </div>
          )}
        </div>
      )}

      {/* Playing */}
      {(gameState === 'playing' || gameState === 'correct' || gameState === 'wrong') && questionData && (
        <div className="space-y-6">
          {/* Progress & Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <div className="text-sm text-gray-600">Câu hỏi</div>
              <div className="text-2xl font-black text-blue-600">
                {currentQuestion + 1}/{totalQuestions}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <div className="text-sm text-gray-600">Điểm</div>
              <div className="text-2xl font-black text-green-600">
                {score}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg text-center">
              <div className="text-sm text-gray-600">Thời gian</div>
              <div className={`text-2xl font-black ${getTimeColor()}`}>
                {timeLeft}s
              </div>
            </div>
          </div>

          {/* Streak */}
          {streak > 0 && (
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-3 text-center">
              <span className="text-lg font-bold text-orange-600">
                🔥 Chuỗi đúng: {streak}
              </span>
            </div>
          )}

          {/* Question */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
              {questionData.question}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
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
                      ? 'bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:scale-105'
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

      {/* Finished */}
      {gameState === 'finished' && (
        <div className="bg-white rounded-2xl p-8 shadow-xl text-center space-y-6">
          <div className="text-6xl mb-4">
            {score >= totalQuestions * 0.8 ? '🏆' : score >= totalQuestions * 0.5 ? '🎉' : '💪'}
          </div>
          <h3 className="text-3xl font-black text-gray-800">
            {score >= totalQuestions * 0.8 ? 'Xuất Sắc!' : score >= totalQuestions * 0.5 ? 'Khá Tốt!' : 'Cố Gắng Lên!'}
          </h3>
          <div className="text-5xl font-black text-blue-600">
            {score}/{totalQuestions}
          </div>
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
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
