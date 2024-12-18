import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Lingo Lift Logo" className="h-12 w-auto" />
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Lingo Lift
            </Link>
          </div>
          
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/flashcards"
                  className="hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Flashcards
                </Link>
              </li>
              <li>
                <Link 
                  to="/wordlist"
                  className="hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Word List
                </Link>
              </li>
              <li>
                <Link 
                  to="/quiz" 
                  className="hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Quiz Game
                </Link>
              </li>
              <li>
                <Link 
                  to="/draganddrop"
                  className="hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Drag And Drop
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
