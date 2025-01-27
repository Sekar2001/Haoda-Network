import { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="flex flex-col sm:flex-row lg:flex-row justify-between items-center p-5 bg-black">
        {/* Header Left */}
        <div className="flex items-center w-full sm:w-auto lg:w-1/2">
          <img src={logo} alt="Logo" className="w-36 h-auto mr-4 sm:mr-8 lg:mr-16" />
          
          {/* Hamburger Menu for Mobile */}
          <button
            className="sm:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>

          {/* Navigation Menu */}
          <nav className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block lg:flex`}>
            <ul className="flex flex-col sm:flex-row sm:gap-4 lg:gap-4  sm:items-center gap-6 list-none items-center justify-start whitespace-nowrap ">
              <li><a href="/" className="text-white text-lg hover:text-yellow-400">Home</a></li>
              <li><a href="/ott" className="text-white text-lg hover:text-yellow-400">OTT</a></li>
              <li><a href="/swipe" className="text-white text-lg hover:text-yellow-400">Swipe</a></li>
              <li><a href="/game" className="text-white text-lg hover:text-yellow-400">Game</a></li>
              <li><a href="/about" className="text-white text-lg hover:text-yellow-400">About Us</a></li>
              <li><a href="/production" className="text-white text-lg hover:text-yellow-400">Production House</a></li>
              <li><a href="/contact" className="text-white text-lg hover:text-yellow-400">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        {/* Header Right */}
        <div className="mt-4 sm:mt-0 sm:w-1/2 lg:w-auto sm:text-right w-full">
          <button className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-white text-lg rounded-lg hover:bg-green-400">
            Download App
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
