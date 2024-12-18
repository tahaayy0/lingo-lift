import React, { useState } from 'react';
import { wordsData } from '../../data/Words';


const WordList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('english');
    

    const filteredWords = wordsData.filter(word => 
        word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.turkish.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedWords = [...filteredWords].sort((a, b) => 
        a[sortBy].localeCompare(b[sortBy])
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Kelime Listesi</h2>
                        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Kelime ara..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                />
                                <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
                            </div>
                            <select
                                className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 outline-none"
                            >
                                <option value="wordsDataA1">A1</option>
                                <option value="wordsDataA2">A2</option>
                                <option value="wordsDataB1">B1</option>
                                <option value="wordsDataB2">B2</option>
                                <option value="wordsDataC1">C1</option>
                            </select>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 outline-none"
                            >
                                <option value="english">İngilizce (A-Z)</option>
                                <option value="turkish">Türkçe (A-Z)</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {sortedWords.map((item, index) => (
                            <div 
                                key={index} 
                                className="flex justify-between items-center p-4 rounded-lg hover:bg-indigo-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 font-medium">
                                        {index + 1}
                                    </span>
                                    <span className="font-medium text-gray-800">{item.english}</span>
                                </div>
                                <span className="text-gray-600">{item.turkish}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center text-gray-500">
                        Toplam {sortedWords.length} kelime bulundu
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordList;