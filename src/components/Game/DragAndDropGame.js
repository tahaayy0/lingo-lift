import React, { useState, useEffect } from 'react';
import { wordsData } from '../../data/Words';

const DragAndDropGame = () => {
  const [words, setWords] = useState([]);
  const [turkishWords, setTurkishWords] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {

    const shuffledWords = [...wordsData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    const selectedTurkishWords = shuffledWords.map(word => word.turkish);
    const shuffledTurkish = [...selectedTurkishWords].sort(() => Math.random() - 0.5);

    setWords(shuffledWords.map(word => ({
      ...word,
      isMatched: false
    })));
    setTurkishWords(shuffledTurkish);
  }, []);

  const handleDragStart = (e, english) => {
    e.dataTransfer.setData('text', english);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetTurkish) => {
    e.preventDefault();
    const draggedEnglish = e.dataTransfer.getData('text');
    
    const isCorrectMatch = words.find(
      word => word.english === draggedEnglish && word.turkish === targetTurkish
    );

    if (isCorrectMatch) {
      setWords(prev => prev.map(word => 
        word.english === draggedEnglish ? { ...word, isMatched: true } : word
      ));

      const allMatched = words.every(word => 
        word.english === draggedEnglish ? true : word.isMatched
      );
      if (allMatched) setGameComplete(true);
    }
  };

  const handleRestart = () => {
    setGameComplete(false);
    const shuffledWords = [...wordsData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    setWords(shuffledWords.map(word => ({
      ...word,
      isMatched: false
    })));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-6 flex flex-col sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            {gameComplete ? (
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-indigo-600">Tebrikler!</h2>
                <div className="flex justify-center mb-6">
                  <span className="text-5xl">🎉</span>
                </div>
                <button
                  onClick={handleRestart}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
                >
                  Tekrar Oyna
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600">Kelime Eşleştirme</h2>
                  <p className="text-lg mb-6 text-center text-gray-600">İngilizce kelimeleri Türkçe karşılıklarına sürükleyin</p>
                  <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  {/* İngilizce kelimeler */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-center mb-4 text-blue-600">İngilizce</h3>
                    {words.filter(word => !word.isMatched).map((word, index) => (
                      <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, word.english)}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg cursor-move text-center shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        {word.english}
                      </div>
                    ))}
                  </div>

                  {/* Türkçe kelimeler */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-center mb-4 text-indigo-600">Türkçe</h3>
                    {turkishWords.map((turkish, index) => (
                      <div
                        key={index}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, turkish)}
                        className={`p-4 rounded-lg border-2 border-dashed transition-all duration-200
                          ${words.find(w => w.turkish === turkish && w.isMatched) 
                            ? 'bg-green-100 border-green-500 shadow-md' 
                            : 'border-indigo-300 hover:border-indigo-400'}`}
                      >
                        {turkish}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDropGame;
