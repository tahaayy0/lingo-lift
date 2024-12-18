import React, { useState } from 'react';
import { wordsData } from '../../data/Words';

const Flashcards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === wordsData.length - 1 ? 0 : prevIndex + 1
        );
        setIsFlipped(false);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? wordsData.length - 1 : prevIndex - 1
        );
        setIsFlipped(false);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flex flex-col items-center p-5 min-h-screen">
            <div 
                className="relative w-80 h-52 cursor-pointer perspective-1000"
                onClick={handleFlip}
            >
                <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                }`}>
                 
                    <div className="absolute w-full h-full flex items-center justify-center p-6 
                                  bg-white rounded-xl shadow-lg backface-hidden">
                        <span className="text-2xl text-gray-800 font-medium">
                            {wordsData[currentIndex].english}
                        </span>
                    </div>
                    
                  
                    <div className="absolute w-full h-full flex items-center justify-center p-6 
                                  bg-gray-50 rounded-xl shadow-lg backface-hidden rotate-y-180">
                        <span className="text-2xl text-gray-800 font-medium">
                            {wordsData[currentIndex].turkish}
                        </span>
                    </div>
                </div>
            </div>

          
            <div className="flex items-center gap-4 mt-8">
                <button 
                    onClick={handlePrevious}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg 
                             hover:bg-blue-600 transition-colors duration-200"
                >
                    Önceki
                </button>
                <span className="text-gray-600">
                    {currentIndex + 1} / {wordsData.length}
                </span>
                <button 
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg 
                             hover:bg-blue-600 transition-colors duration-200"
                >
                    Sonraki
                </button>
            </div>
        </div>
    );
};

export default Flashcards;
