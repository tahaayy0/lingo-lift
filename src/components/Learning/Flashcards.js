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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24">
            <div className="max-w-lg mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-12">Hafıza Kartları</h1>
                
                <div className="relative w-full aspect-[3/2] mb-8">
                    <div 
                        className="absolute inset-0 cursor-pointer perspective-1000"
                        onClick={handleFlip}
                    >
                        <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                            isFlipped ? 'rotate-y-180' : ''
                        }`}>
                            {/* Front of card */}
                            <div className="absolute w-full h-full flex flex-col items-center justify-center p-6 
                                        bg-white rounded-2xl shadow-xl backface-hidden">
                                <span className="text-4xl text-indigo-600 font-bold mb-4">
                                    {wordsData[currentIndex].english}
                                </span>
                                <span className="text-gray-500">Çevirmek için tıklayın</span>
                            </div>
                            
                            {/* Back of card */}
                            <div className="absolute w-full h-full flex flex-col items-center justify-center p-6 
                                        bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl backface-hidden rotate-y-180">
                                <span className="text-4xl text-white font-bold mb-4">
                                    {wordsData[currentIndex].turkish}
                                </span>
                                <span className="text-gray-500">Çevirmek için tıklayın</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-8  px-24">
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
        </div>
    );
};

export default Flashcards;
