import React, { useState, useEffect } from 'react';
import { wordsData } from '../data/Words';
import WordList from '../components/Learning/WordList';

const HomePage = () => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    const savedWords = JSON.parse(localStorage.getItem('wordList') || '[]');
    setWordList(savedWords);
  }, []);

  const handleAddWord = (e) => {
    e.preventDefault();
    if (word && translation) {
      const newWordList = [...wordList, { word, translation }];
      setWordList(newWordList);
      localStorage.setItem('wordList', JSON.stringify(newWordList));
      setWord('');
      setTranslation('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Lingo Liftle Kalın Sağlıcakla Kalın</h1>
      <p className="text-xl mb-8">Practice and improve your English skills!</p>
      
     
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Word</h2>
        <form onSubmit={handleAddWord} className="space-y-4">
          <div>
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Enter English word"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
              placeholder="Enter Turkish translation"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Add Word
          </button>
        </form>
      </div>

     
    </div>
  );
};

export default HomePage;