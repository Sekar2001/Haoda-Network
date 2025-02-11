import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "@fontsource/chakra-petch"; // Import the font
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="bg-[#161829]">
      <header className="container mx-auto flex flex-col sm:flex-row lg:flex-row justify-between items-center p-4">
        {/* Header Left */}
        <div className="flex items-center w-full sm:w-auto lg:w-full">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-36 h-auto mr-4 sm:mr-8 lg:mr-16" />
          </Link>
          {/* Hamburger Menu for Mobile */}
          <button className="sm:hidden text-white text-2xl focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? "X" : "☰"}
          </button>

          {/* Navigation Menu */}
          <nav className={`sm:flex ${isMenuOpen ? "block" : "hidden"} sm:block lg:flex`}>
            <ul className="navbar flex flex-col sm:flex-row sm:gap-4 lg:gap-6 sm:items-center gap-6 list-none items-center justify-start ml-16 whitespace-nowrap">
              {[
                { name: "Home", path: "/" },
                { name: "OTT", path: "/ott" },
                { name: "Swipe", path: "/swipe" },
                { name: "Game", path: "/game" },
                { name: "About Us", path: "/aboutus" },
                { name: "Production House", path: "/production" },
                { name: "Contact Us", path: "/contactus" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`text-lg font-chakra-petch transition-colors ${
                      activePath === item.path ? "text-yellow-400 font-bold" : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
