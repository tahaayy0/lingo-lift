import React from 'react';
import { wordsData } from '../../data/Words';

const WordList = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-[70%] mx-auto mb-20 ">
            <h2 className="text-2xl font-semibold mb-4">Word List</h2>
            <div className="space-y-2">
                {wordsData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="font-medium">{item.english}</span>
                        <span className="text-gray-600">{item.turkish}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WordList;