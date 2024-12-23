import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import QuizGame from './components/Game/QuizGame';
import DragAndDropGame from './components/Game/DragAndDropGame';
import Footer from './components/Layout/Footer';
import Flashcards from './components/Learning/Flashcards';
import WordList from './components/Learning/WordList';

function App() {
  return (
    <Router>
      <div className="min-h-screen from-blue-50 via-indigo-50 to-purple-50 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        <main className="container mx-auto px-4 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wordlist" element={<WordList />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/quiz" element={<QuizGame />} />
            <Route path="/dragAndDrop" element={<DragAndDropGame />} />
         </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
