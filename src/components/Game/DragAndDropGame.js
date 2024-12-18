import React, { useState, useEffect } from 'react';
import { wordsData } from '../../data/Words';

const DragAndDropGame = () => {
  const [words, setWords] = useState([]);
  const [turkishWords, setTurkishWords] = useState([]);
  const [score, setScore] = useState(0);
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
      setScore(prev => prev + 10);
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
    setScore(0);
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
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          {gameComplete ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Tebrikler!</h2>
              <p className="text-xl mb-4">Skorunuz: {score}</p>
              <button
                onClick={handleRestart}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Tekrar Oyna
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Skor: {score}</h2>
                <p className="text-lg mb-4">İngilizce kelimeleri Türkçe karşılıklarına sürükleyin.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                {/* İngilizce kelimeler */}
                <div className="space-y-4">
                  {words.filter(word => !word.isMatched).map((word, index) => (
                    <div
                      key={index}
                      draggable
                      onDragStart={(e) => handleDragStart(e, word.english)}
                      className="bg-blue-100 p-3 rounded-lg cursor-move text-center"
                    >
                      {word.english}
                    </div>
                  ))}
                </div>

                {/* Türkçe kelimeler */}
                <div className="space-y-4">
                  {turkishWords.map((turkish, index) => (
                    <div
                      key={index}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, turkish)}
                      className={`p-3 rounded-lg border-2 border-dashed 
                        ${words.find(w => w.turkish === turkish && w.isMatched) 
                          ? 'bg-green-100 border-green-500' 
                          : 'border-gray-300'}`}
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
  );
};

export default DragAndDropGame;
