import React, { useState, useEffect } from 'react';
import { wordsData } from '../../data/Words';

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
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
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
    const isAnswerCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    
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
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {showScore ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-indigo-600 mb-6">
                Quiz Tamamlandı! 🎉
              </h2>
              <div className="mb-8">
                <div className="text-6xl font-bold text-indigo-600 mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-gray-600 text-lg">
                  {score === questions.length 
                    ? "Mükemmel! Tüm soruları doğru bildiniz!" 
                    : score >= questions.length / 2 
                      ? "İyi iş çıkardınız!" 
                      : "Biraz daha pratik yapmalısınız."}
                </p>
              </div>
              <button
                onClick={handleRestart}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl
                         hover:bg-indigo-700 transform hover:scale-105 
                         transition-all duration-200 shadow-md"
              >
                Tekrar Oyna
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-indigo-600">
                    Soru {currentQuestion + 1}/{questions.length}
                  </h2>
                  <div className="bg-indigo-100 px-4 py-2 rounded-lg">
                    <span className="font-medium text-indigo-600">Skor: {score}</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-6">
                  <div 
                    className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xl text-gray-700 mb-6">{questions[currentQuestion].question}</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !selectedAnswer && handleAnswerClick(option)}
                    className={`p-4 text-left rounded-xl transition-all duration-200 
                      ${selectedAnswer === option 
                        ? isCorrect 
                          ? 'bg-green-100 border-2 border-green-500 text-green-700'
                          : 'bg-red-100 border-2 border-red-500 text-red-700'
                        : selectedAnswer && option === questions[currentQuestion].correctAnswer
                          ? 'bg-green-100 border-2 border-green-500 text-green-700'
                          : 'bg-white border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50'
                      }
                      ${selectedAnswer ? 'cursor-default' : 'cursor-pointer'}`}
                    disabled={selectedAnswer !== null}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 mr-3">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
