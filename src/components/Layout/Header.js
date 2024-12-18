import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Lingo Lift
            </Link>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-gray-300 transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/flashcards"
                  className="hover:text-gray-300 transition-colors"
                >
                  Flashcards
                </Link>
              </li>
              <li>
                <Link 
                  to="/wordlist"
                  className="hover:text-gray-300 transition-colors"
                >
                  Word List
                </Link>
              </li>
              <li>
                <Link 
                  to="/quiz" 
                  className="hover:text-gray-300 transition-colors"
                >
                  Quiz Game
                </Link>
              </li>
              <li>
                <Link 
                  to="/draganddrop"
                  className="hover:text-gray-300 transition-colors"
                >
                  Drag And Drop Game
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
