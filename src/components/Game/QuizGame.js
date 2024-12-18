import React, { useState, useEffect } from 'react';
import { wordsData } from '../../data/Words';

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Rastgele 10 soru oluştur
    const shuffledWords = [...wordsData].sort(() => Math.random() - 0.5).slice(0, 10);
    
    const preparedQuestions = shuffledWords.map(word => {
      // Doğru cevap dışında 3 rastgele yanlış cevap seç
      const otherAnswers = wordsData
        .filter(w => w.turkish !== word.turkish)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.turkish);

      // Tüm seçenekleri karıştır
      const options = [...otherAnswers, word.turkish]
        .sort(() => Math.random() - 0.5);

      return {
        question: `"${word.english}" kelimesinin Türkçe karşılığı nedir?`,
        options: options,
        correctAnswer: word.turkish
      };
    });

    setQuestions(preparedQuestions);
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    
    // Yeni sorular oluştur
    const shuffledWords = [...wordsData].sort(() => Math.random() - 0.5).slice(0, 10);
    
    const preparedQuestions = shuffledWords.map(word => {
      const otherAnswers = wordsData
        .filter(w => w.turkish !== word.turkish)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.turkish);

      const options = [...otherAnswers, word.turkish]
        .sort(() => Math.random() - 0.5);

      return {
        question: `"${word.english}" kelimesinin Türkçe karşılığı nedir?`,
        options: options,
        correctAnswer: word.turkish
      };
    });

    setQuestions(preparedQuestions);
  };

  if (questions.length === 0) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          {showScore ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                Oyun Bitti!
              </h2>
              <p className="text-xl mb-4">
                Toplam {questions.length} sorudan {score} tanesini doğru bildiniz!
              </p>
              <button
                onClick={handleRestart}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Tekrar Oyna
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Soru {currentQuestion + 1}/{questions.length}
                </h2>
                <p className="text-xl">{questions[currentQuestion].question}</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className="bg-gray-200 p-4 text-left rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
