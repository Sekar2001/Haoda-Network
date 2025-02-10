import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#161829] text-white p-6 sm:p-8">
      <div className="container mx-auto">
        {/* Top Section: Logo and Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-6 sm:space-y-0">
          {/* Left Side: Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-28 h-auto mb-4 sm:mb-0" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row sm:flex-col justify-center sm:justify-start gap-4 footer">
            <Link to="/home" className="text-white hover:text-yellow-400">
              Navigation
            </Link>
            <Link to="/home" className="text-white hover:text-yellow-400">
              Home
            </Link>
            <Link to="/ott" className="text-white hover:text-yellow-400">
              OTT
            </Link>
            <Link to="/swipe" className="text-white hover:text-yellow-400">
              Swipe
            </Link>
            <Link to="/game" className="text-white hover:text-yellow-400">
              Game
            </Link>
            <Link to="/about" className="text-white hover:text-yellow-400">
              About Us
            </Link>
            <Link to="/production" className="text-white hover:text-yellow-400">
              Production House
            </Link>
            <Link to="/contact" className="text-white hover:text-yellow-400">
              Contact Us
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <i className="fa fa-envelope"></i>
              <p>support@haodanetwork.com</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <i className="fa fa-phone"></i>
              <p>9512874236</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <i className="fa fa-phone"></i>
              <p>7532149835</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <i className="fa fa-map-marker"></i>
              <p className="text-sm sm:text-base">
                Office Address: 6th Floor, D wing,<br /> MBC Infotech Park, Thane,
                Maharashtra 400615
              </p>
            </div>
          </div>

          {/* Callback Form */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h5 className="text-lg sm:text-xl">Request a Callback</h5>
            <label>
              <span>Name</span>
              <input
                type="text"
                className="w-full mt-1 p-2 bg-gray-800 text-white border border-gray-600 rounded"
                placeholder="Enter your name"
              />
            </label>
            <label>
              <span>Mobile No</span>
              <input
                type="text"
                className="w-full mt-1 p-2 bg-gray-800 text-white border border-gray-600 rounded"
                placeholder="Enter your mobile number"
              />
            </label>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-row sm:flex-col justify-center sm:justify-start gap-4">
            <a
              href="https://instagram.com"
              className="flex items-center justify-center w-10 h-10 rounded-full text-black bg-yellow-400"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              className="flex items-center justify-center w-10 h-10 rounded-full text-black bg-yellow-400"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              className="flex items-center justify-center w-10 h-10 rounded-full text-black bg-yellow-400"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center justify-center w-10 h-10 rounded-full text-black bg-yellow-400"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
