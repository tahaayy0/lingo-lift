import React, { useState } from 'react';
import {
  wordsDataA1,
  wordsDataA2,
  wordsDataB1,
  wordsDataB2,
  wordsDataC1,
} from '../../data/Words';

const Flashcards = () => {
  const [currentLevel, setCurrentLevel] = useState('A1');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Get words for the current level
  const levelData = {
    A1: wordsDataA1,
    A2: wordsDataA2,
    B1: wordsDataB1,
    B2: wordsDataB2,
    C1: wordsDataC1,
  };
  const filteredWords = levelData[currentLevel];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredWords.length - 1 ? 0 : prevIndex + 1
    );
    setIsFlipped(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredWords.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center">
      {/* Level Selection Buttons */}
      <div className="flex gap-4 mb-8">
        {['A1', 'A2', 'B1', 'B2', 'C1'].map(level => (
          <button
            key={level}
            onClick={() => {
              setCurrentLevel(level);
              setCurrentIndex(0); // Reset index when level changes
              setIsFlipped(false);
            }}
            className={`px-4 py-2 rounded-lg ${
              currentLevel === level
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700'
            } hover:bg-indigo-500 hover:text-white transition-colors`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Flashcard */}
      <div className="max-w-lg px-4">
        <div className="relative w-full aspect-[3/2] mb-8">
          <div
            className="absolute inset-0 cursor-pointer perspective-1000"
            onClick={handleFlip}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front of card */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl backface-hidden">
                <span className="text-4xl text-indigo-600 font-bold mb-4">
                  {filteredWords[currentIndex]?.english || 'Kart Yok'}
                </span>
                <span className="text-gray-500">Çevirmek için tıklayın</span>
              </div>

              {/* Back of card */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl backface-hidden rotate-y-180">
                <span className="text-4xl text-white font-bold mb-4">
                  {filteredWords[currentIndex]?.turkish || 'Kart Yok'}
                </span>
                <span className="text-gray-500">Çevirmek için tıklayın</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 mt-8 px-24">
          <button
            onClick={handlePrevious}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Önceki
          </button>
          <span className="text-gray-600">
            {filteredWords.length > 0
              ? `${currentIndex + 1} / ${filteredWords.length}`
              : '0 / 0'}
          </span>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
