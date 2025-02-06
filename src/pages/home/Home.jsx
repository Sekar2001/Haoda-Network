import thumb from "../../assets/thumb.png";
import { FaChevronRight } from "react-icons/fa";
import hub from "../../assets/hub.svg";
import diamond from "../../assets/diamond.svg";
import location from "../../assets/location.svg";
import navi from "../../assets/navi.svg";
import up from "../../assets/up.svg";
import maskgroup from "../../assets/Mask group-1.png";
import maskgrouped from "../../assets/Mask group-2.png";
import maskgroups from "../../assets/Mask group-3.png";
import maskgrouping from "../../assets/Mask group-4.png";
import mask from "../../assets/Mask group-5.png";
import masks from "../../assets/Mask group-6.png";
import masked from "../../assets/Mask group-7.png";
import masking from "../../assets/Mask group-8.png";
import game from "../../assets/game.png";
import download from "../../assets/download.png";
import search from "../../assets/search-engine.png";
import fast from "../../assets/fast-forward.png";
import clock from "../../assets/wall-clock 1.png";
import call from "../../assets/phone-call.png";
import mail from "../../assets/mail.png";
import curve from "../../assets/curve.png";
import insta from "../../assets/insta.png";
import end from "../../assets/end.png";
import management from "../../assets/management.png";
import date from "../../assets/date.png";
import trophy from "../../assets/trophy.png";
import payment from "../../assets/payment.png";
import support from "../../assets/support.png";
import tick from "../../assets/tick.png";
import face from "../../assets/face.png";
import wave from "../../assets/wave.png";
import lines from "../../assets/lines.png";
import attach from "../../assets/attach.png";
import "../home/Home.css";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="min-h-screen flex flex-col bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/50"
        style={{ backgroundImage: `url(${thumb})` }}
      >
        <div className="flex flex-col items-center justify-center h-full relative z-10">
          <div className="text-center text-white p-8 bg-black bg-opacity-10 rounded-lg">
            <h1 className="mt-16 text-3xl  font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white font-chakra-petch leading-tight">
              Welcome to <br />
              <span className="text-yellow-400 font-bold mt-2">
                Haoda Network
              </span>
            </h1>
            <p className="mt-6 text-lg text-white">
              The ultimate entertainment experience where gaming, streaming, and
              <br />
              mobile game subscriptions collide!
            </p>
            <span className="text-yellow-400 mt-4">
              Access top-tier mobile games, exclusive OTT content, and endless
              fun all in one place
            </span>

            {/* Search Input and Button */}
            <div className="flex items-center ml-16 w-full max-w-md border overflow-hidden mt-16">
              <input
                type="text"
                placeholder="OTT, Games"
                className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
              />
              <button
                className="flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
                role="button"
              >
                Search <FaChevronRight className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Haoda Network */}
      <div
        className="bg-[#161829] text-white bg-cover "
        style={{ backgroundImage: `url(${wave})` }}
      >
        <div className="text-2xl text-center p-6">
          <h3 className="text-yellow-400">Why Choose Haoda Network?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-5 bg-[#1F2131]">
          <div className="choose-item text-center p-4">
            <img
              src={hub}
              alt="All-in-one hub"
              className="choose-image w-12 h-12 mx-auto mb-4 transition duration-300"
            />
            <h4 className="choose-title text-lg text-yellow-400">
              All-in-one hub
            </h4>
            <p className="text-white">
              Enjoy premium games and top-rated streaming content without
              switching platforms.
            </p>
          </div>

          <div className="choose-item text-center p-4">
            <img
              src={location}
              alt="Play Anytime, Anywhere"
              className="choose-image w-12 h-12 mx-auto mb-4 transition duration-300"
            />
            <h4 className="choose-title text-lg text-yellow-400">
              Play Anytime, Anywhere
            </h4>
            <p className="text-white">
              Enjoy gaming and streaming on any device, anytime,
              interruption-free.
            </p>
          </div>

          <div className="choose-item text-center p-4">
            <img
              src={diamond}
              alt="Exclusive Access"
              className="choose-image w-12 h-12 mx-auto mb-4 transition duration-300"
            />
            <h4 className="choose-title text-lg text-yellow-400">
              Exclusive Access
            </h4>
            <p className="text-white">
              Get early releases, premium features, and exclusive games with
              unlimited streaming.
            </p>
          </div>

          <div className="choose-item text-center p-4">
            <img
              src={navi}
              alt="Effortless Navigation"
              className="choose-image w-12 h-12 mx-auto mb-4 transition duration-300"
            />
            <h4 className="choose-title text-lg text-yellow-400">
              Effortless Navigation
            </h4>
            <p className="text-white">
              Switch between games and shows seamlessly with our user-friendly
              interface.
            </p>
          </div>

          <div className="choose-item text-center p-4">
            <img
              src={up}
              alt="Stay Updated"
              className="choose-image w-12 h-12 mx-auto mb-4 transition duration-300"
            />
            <h4 className="choose-title text-lg text-yellow-400">
              Stay Updated
            </h4>
            <p className="text-white">
              Discover fresh games and new content regularly with exciting
              updates.
            </p>
          </div>
        </div>

        {/* Ultimate Gaming Section */}
        <div className="bg-[#161829] p-4 mt-2 flex justify-center items-center">
          <p className="text-yellow-400 text-center text-sm sm:text-base lg:text-lg">
            Your ultimate gaming and streaming destination awaits!
          </p>
        </div>

        <div className="bg-[#0d0e1a] text-white py-12 px-6 text-center mt-2">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Step Up Your Game with Haoda Network!
          </h2>
          <div className="gameHaodaNetword  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center text-center gap-6 max-w-6xl mx-auto">
            {[
              "Unlimited access to games and streaming",
              "Ad-free experience",
              "Cross-platform access",
              "Fully customizable entertainment",
            ].map((feature, index) => (
              <div
                key={index}
                className="border-2 border-yellow-400 rounded-lg p-6 bg-[#15162b] shadow-lg text-center"
              >
                {feature}
              </div>
            ))}
          </div>
          <p className="mt-8 text-2xl italic text-white">
            Join Haoda Network today and level up your entertainment!
          </p>
        </div>
      </div>

      {/* Games Section */}
      <div className="bg-[#1F2131] py-8 flex justify-center items-center">
        <p className="text-yellow-400 text-center text-3xl font-bold font-chakra-petch">
          Games on Haoda Network OTT Platform
        </p>
      </div>

      <div
        className="bg-[#161829] text-center py-2 sm:py-5 lg:py-6 px-2 sm:px-4 lg:px-8"
        style={{ backgroundImage: `url(${attach})` }}
      >
        <h1 className="text-white text-xl leading-snug">
          Our app offers a diverse range of exciting games for every gamer.
          Here&apos;s what you can enjoy:
        </h1>
      </div>

      {/* Fantasy Games Section */}
      <div className="bg-[#1F2131] py-8">
        <div className="transition duration-500 ease-in-out">
          <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 lg:px-16 mb-8">
            <h1 className="text-yellow-400 text-lg sm:text-xl lg:text-2xl">
              Fantasy Games
            </h1>
            <button className="text-white border-2 bg-[#25292A] px-3 py-1 rounded-md text-sm sm:text-base">
              See All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16 ">
            {[
              { name: "Rummy", image: mask },
              { name: "Cricket Fantasy", image: masks },
              { name: "Teen Patti", image: masked },
              { name: "Andar Bahar", image: masking },
            ].map((game, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center transition transform hover:scale-110 duration-300 ease-in-out"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-40 sm:w-48 lg:w-30 h-auto mb-4"
                />
                <h5 className="text-white text-sm font-chakra-petch sm:text-base lg:text-lg">
                  {game.name}
                </h5>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Games Section */}
        <div className="transition duration-500 ease-in-out mt-24">
          <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 lg:px-16 mt-16 mb-8">
            <h1 className="text-yellow-400 text-lg sm:text-xl lg:text-2xl">
              Traditional Games
            </h1>
            <button className="text-white border-2 bg-[#25292A] px-3 py-1 rounded-md text-sm sm:text-base">
              See All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16">
            {[
              { name: "Ludo", image: maskgroup },
              { name: "Carrom", image: maskgrouped },
              { name: "Snake & Ladders", image: maskgroups },
              { name: "BrainBazzi", image: maskgrouping },
            ].map((game, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center transition transform hover:scale-110 duration-300 ease-in-out"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-40 sm:w-48 lg:w-30 h-auto mb-4"
                />
                <h5 className="text-white text-sm font-chakra-petch sm:text-base lg:text-lg">
                  {game.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#161829] p-4 mt-8 flex justify-center items-center">
        <p className="text-white text-center text-xl max-w-2xl">
          These games ensure there&apos;s something for everyone, from casual
          gamers to adrenaline junkies, making Haoda Network the ultimate
          entertainment destination!
        </p>
      </div>
      </div>
      

      {/* getting started */}
      <div className="bg-[#161829] text-center py-10 px-4 sm:px-8 lg:px-16 ">
        {/* Main Heading */}
        <h1 className="text-yellow-400 text-4xl font-bold  mb-16 font-chakra-petch">
          Getting Started
        </h1>

        {/* Container for Boxes */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Box 1 */}
          <div className="relative bg-[#FEFFF2] text-[#434343] p-6 rounded-2xl shadow-md w-full max-w-[250px] h-[250px] flex flex-col items-center border-r-4 border-b-4 border-yellow-400">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center ">
              <img
                src={download}
                alt="Download the App"
                className="w-10 h-10"
              />
            </div>
            <h3 className="mt-12 text-lg sm:text-xl mb-4 text-yellow-400 font-chakra-petch font-bold">
              Download the App
            </h3>
            <p className="font-semibold font-inter text-sm sm:text-base text-center text-[#434343]">
              Available on iOS and Android
            </p>
          </div>

          {/* Arrow */}
          <img
            src={fast}
            alt="Next"
            className="hidden sm:block w-8 h-8 lg:w-12 lg:h-12"
          />

          {/* Box 2 */}
          <div className="relative bg-[#FEFFF2] text-[#434343] p-6 rounded-2xl shadow-md w-full max-w-[250px] h-[250px] flex flex-col items-center border-r-4 border-b-4 border-yellow-400">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center">
              <img
                src={search}
                alt="Browse the Library"
                className="w-10 h-10"
              />
            </div>
            <h3 className="mt-12 text-lg sm:text-xl mb-4 text-yellow-400 font-chakra-petch font-bold">
              Browse the Library
            </h3>
            <p className="font-semibold font-inter text-sm sm:text-base text-center text-[#434343]">
              Explore an extensive collection of games and content
            </p>
          </div>

          {/* Arrow */}
          <img
            src={fast}
            alt="Next"
            className="hidden sm:block w-8 h-8 lg:w-12 lg:h-12"
          />

          {/* Box 3 */}
          <div className="relative bg-[#FEFFF2] text-[#434343] p-6 rounded-2xl shadow-md w-full max-w-[250px] h-[250px] flex flex-col items-center border-r-4 border-b-4 border-yellow-400 ">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center">
              <img src={game} alt="Start Playing" className="w-10 h-10" />
            </div>
            <h3 className="mt-12 text-lg sm:text-xl mb-4 text-yellow-400 font-chakra-petch font-bold">
              Start Playing
            </h3>
            <p className="font-semibold font-inter text-sm sm:text-base text-center text-[#434343]">
              Choose your favorite and dive into the action instantly
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1E2030] py-3 flex justify-center items-center">
        <p className="text-yellow-400 text-center italic ">
          join Haoda Network Today
        </p>
      </div>

      {/* Ultimate Gaming Aggregator */}

      <div
        className="bg-[#161829] p-10 flex flex-col justify-center items-center text-center bg-cover   "
        style={{ backgroundImage: `url(${lines})` }}
      >
        {/* Header Section */}
        <h1 className="text-yellow-400 text-3xl font-bold font-chakra-petch">
          Haoda Network: Your Ultimate Gaming Aggregator
        </h1>
        <p className="text-white text-2xl mt-4">
          Unlock the future of gaming with our powerful platform
        </p>

        {/* Contact Form Section */}
        <div className="max-w-5xl mx-auto bg-black bg-opacity-75 rounded-lg p-8 shadow-lg mt-16 flex flex-col md:flex-row gap-8">
          {/* Left Column - Contact Info */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-yellow-400 text-2xl">Contact Sales</h3>

            {/* Email */}
            <div className="mb-6 mt-4 flex items-center text-white">
              <img src={mail} alt="Email Icon" className="w-6 h-auto mr-4" />
              <div className="mt-4">
                For general support or queries, reach us at <br />
                <span className="text-yellow-400 font-semibold hover:text-white">
                  support@haodanetwork.com
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6 mt-4 flex items-center text-white">
              <img src={call} alt="Phone Icon" className="w-6 h-auto mr-4" />
              <div >
                For urgent matters, contact our team at <br />
                <span className="text-yellow-400 font-semibold hover:text-white">
                  1-800-GAMING
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex mt-4 items-center text-white">
              <img src={clock} alt="Clock Icon" className="w-6 h-auto mr-4" />
              <div >
                Available
                <span className="font-semibold mx-1">Monday to Friday</span>,
                from <br />
                <span className="text-yellow-400 font-semibold hover:text-white">
                  9 AM to 6 PM
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="md:w-1/2">
            <form className="flex flex-col space-y-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="absolute -top-3 left-2 bg-yellow-400 text-black px-2 text-xs font-semibold rounded"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-400 rounded-md text-black focus:outline-none"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute -top-3 left-2 bg-yellow-400 text-black px-2 text-xs font-semibold rounded"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-400 rounded-md text-black focus:outline-none"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="company"
                  className="absolute -top-3 left-2 bg-yellow-400 text-black px-2 text-xs font-semibold rounded"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full p-3 border border-gray-400 rounded-md text-black focus:outline-none"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="absolute -top-3 left-2 bg-yellow-400 text-black px-2 text-xs font-semibold rounded"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-400 rounded-md text-black focus:outline-none"
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-400 text-black p-1 rounded-md w-1/2 ml-32 font-semibold hover:bg-yellow-500 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <h1 className="text-yellow-400 text-3xl mt-16 font-bold font-chakra-petch">
          Explore Haoda Network&apos;s <br /> Game Aggregator
        </h1>
        <p className="text-white text-2xl mt-4">
          Haoda Network is your one-stop hub for top-tier games and seamless
          <br /> integration. Here&apos;s what we offer:
        </p>
      </div>

      {/* Background Curve */}

      <div className="features-section">
        {/* Curved Path */}
        <div className="curve-container">
          <img src={curve} alt="Curve" className="curve-image" />
        </div>

        {/* Features Section */}
        <div className="features-container clearfix">
          <div className="feature-item instantIntegration">
            {/* Icon Container */}
            <div className="icon-container ">
              <div className="icon-background">
                <img src={insta} alt="Feature 1" className="icon" />
              </div>
            </div>
            {/* Text Section */}
            <h3 className="feature-title font-chakra-petch">Instant Integration</h3>
            <p className="feature-description">
              Simplify operations with a single API for smooth game aggregation
            </p>
          </div>

          <div className="feature-item endlessGameVariety">
            {/* Text Section */}
            <h3 className="feature-title font-chakra-petch">Endless Game Variety</h3>
            <p className="feature-description">
              Access RNG, live dealer, and more, for nonstop entertainment
            </p>
            {/* Icon Container */}
            <div className="icon-container mt-5">
              <div className="icon-background">
                <img src={end} alt="Feature 2" className="icon" />
              </div>
            </div>
          </div>

          <div className="feature-item centralizedManagement">
            {/* Icon Container */}
            <div className="icon-container">
              <div className="icon-background">
                <img src={management} alt="Feature 3" className="icon" />
              </div>
            </div>
            {/* Text Section */}
            <h3 className="feature-title font-chakra-petch">Centralized Management</h3>
            <p className="feature-description">
              Easily manage games, track, and report via our unified back office
            </p>
          </div>

          <div className="feature-item continuousUpdates">
            {/* Text Section */}
            <h3 className="feature-title font-chakra-petch">Continuous Updates</h3>
            <p className="feature-description">
              Always fresh with new titles and exclusive releases
            </p>
            {/* Icon Container */}
            <div className="icon-container mt-5">
              <div className="icon-background">
                <img src={date} alt="Feature 3" className="icon" />
              </div>
            </div>
          </div>

          <div className="feature-item customTournaments">
            {/* Text Section */}
            <h3 className="feature-title font-chakra-petch">Custom Tournaments</h3>
            <p className="feature-description">
              Engage players with exciting, personalized challenges
            </p>
            {/* Icon Container */}
            <div className="icon-container mt-5">
              <div className="icon-background">
                <img src={trophy} alt="Feature 3" className="icon" />
              </div>
            </div>
          </div>

          <div className="feature-item crypto-Friendly">
            {/* Icon Container */}
            <div className="icon-container">
              <div className="icon-background">
                <img src={payment} alt="Feature 3" className="icon" />
              </div>
            </div>
            {/* Text Section */}
            <h3 className="feature-title font-chakra-petch">Crypto-Friendly</h3>
            <p className="feature-description">
              Secure and easy crypto payments
            </p>
          </div>

          <div className="feature-item support">
            {/* Text Section */}
            <h3 className="feature-title font-chakra-petch">24/7 Support</h3>
            <p className="feature-description">
              Reliable help, anytime you need it
            </p>
            {/* Icon Container */}
            <div className="icon-container mt-5">
              <div className="icon-background">
                <img src={support} alt="Feature 3" className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* partner with haoda network */}
      <div className="bg-[#1a1b2f] py-12 px-16 flex items-center gap-12">
        {/* Left Side - Content */}
        <div className="w-3/5">
          {/* Heading */}
          <div className="flex items-center space-x-4 mb-4">
            <img src={tick} alt="Check" className="w-10 h-10" />
            <h2 className="text-yellow-400 text-4xl font-chakra-petch font-semibold">
              Why Partner with Haoda Network?
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-white text-xl mb-6 ml-16">
            Haoda Network leads the way in innovation with its unified API.
            Here&apos;s why we’re the ideal partner:
          </p>

          {/* Timeline */}
          <div className="relative pl-4 space-y-6">
            <div className="relative">
              <span className="absolute -left-4 top-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
              <h3 className="text-yellow-400 text-xl ml-8 font-semibold">
                Fast Product Launch:
              </h3>
              <p className="text-white text-lg ml-8">
                Get up and running in 1-4 weeks
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-4 top-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
              <h3 className="text-yellow-400 text-xl ml-8 font-semibold">
                Exceptional Offers:
              </h3>
              <p className="text-white text-lg ml-8">
                Full range of products, payments, and services to grow your
                business
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-4 top-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
              <h3 className="text-yellow-400 text-xl ml-8 font-semibold">
                Gamification:
              </h3>
              <p className="text-white text-lg ml-8">
                Boost player engagement with exciting features
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-4 top-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
              <h3 className="text-yellow-400 text-xl ml-8 font-semibold">
                Proven Success:
              </h3>
              <p className="text-white text-lg ml-8">
                Trusted by clients—check their testimonials!
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-2/5 relative">
          <img
            src={face}
            alt="Handshake"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
