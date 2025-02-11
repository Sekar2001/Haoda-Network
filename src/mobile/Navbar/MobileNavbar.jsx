import React, { useState } from 'react';
import haodanetworkLogo from '../../assets/logo.png'
import { TfiMenuAlt } from 'react-icons/tfi';
import './Navbar.css'

const MobileNavbar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav className="flex navbar__container sticky top-0 z-40 pt-5 pb-5 px-5 bg-[#161829] justify-between">
           <div className="text-xl font-bold"><img className='h-14 w-full' src={haodanetworkLogo} alt='image' /></div>
           <div className='flex items-center gap-5'>
           <button onClick={toggleSubMenu} className="text-yellow-500 text-3xl">
              <TfiMenuAlt />
          </button>
           </div>
          <div
        className={`fixed top-24 w-96 navbar__width h-full bg-[#161829] text-white transform transition-transform ${
          isSubMenuOpen ? 'isSubMenuOpenfalse' : 'isSubMenuOpentrue'
        }`}
        style={{ transitionDuration: '300ms' }}
      >
        <div className="p-4">
          
          <ul className="space-y-4 mt-6">
            <li><a href="/" className="navbar_menu">Home</a></li>
            <li><a href="/ott" className="navbar_menu">OTT</a></li>
            <li><a href="/swipe" className="navbar_menu">Swipe</a></li>
            <li><a href="/game" className="navbar_menu">Game</a></li>
            <li><a href="/aboutus" className="navbar_menu">About Us</a></li>
            <li><a href="/production" className="navbar_menu">Production House</a></li>
            <li><a href="/contactus" className="navbar_menu">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;