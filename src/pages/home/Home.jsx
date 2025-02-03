import thumb from "../../assets/thumb.png";
import hub from "../../assets/hub.png";
import diamond from "../../assets/diamond.png";
import loaction from "../../assets/location.png";
import navi from "../../assets/navigate.png";
import update from "../../assets/update.png";
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
import {
  FaBolt,
  FaGamepad,
  FaCogs,
  FaTrophy,
  FaHandshake,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className="text-black text-4xl" />,
    title: "Instant Integration",
    description: "Simplify operations with a unified API",
  },
  {
    icon: <FaGamepad className="text-black text-4xl" />,
    title: "Endless Game Variety",
    description: "Access RNG, live dealer, and more for nonstop entertainment",
  },
  {
    icon: <FaCogs className="text-black text-4xl" />,
    title: "Centralized Management",
    description: "Track and manage games seamlessly via a unified dashboard",
  },
  {
    icon: <FaTrophy className="text-black text-4xl" />,
    title: "Custom Tournaments",
    description: "Engage users with personalized challenges",
  },
  {
    icon: <FaHandshake className="text-black text-4xl" />,
    title: "Crypto-Friendly Payments",
    description: "Secure and easy transactions for players",
  },
  {
    icon: <FaClock className="text-black text-4xl" />,
    title: "24/7 Support",
    description: "Count on us for reliable assistance anytime",
  },
];

const additionalBoxes = [
  {
    heading: "Fast Product Launch",
    subheading: "Get started in just 1-4 weeks",
  },
  {
    heading: "All-in-One Solution",
    subheading: "Payments, gamification, and more to grow your business",
  },
  {
    heading: "Proven Success",
    subheading: "Trusted by leading clients—join our network today",
  },
];

const Slide = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative "
      style={{ backgroundImage: `url(${thumb})`, flex: 1 }}
    >
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}

      {/* Content Centered */}
      <div className="flex flex-col items-center justify-center h-full relative z-10">
        <div className="text-center text-white p-8 bg-black bg-opacity-10 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-chakra-petch  leading-tight">
            Welcome to <br />
            <span className="text-yellow-400 mt-2">Haoda Network</span>
          </h1>
          <p className="mt-6 text-lg text-white">
            The ultimate entertainment experience where gaming,streaming,and{" "}
            <br />
            mobile game subscriptions collide!
          </p>
          <span className="text-yellow-400 mt-4">
            Access top-tier mobile games,exclusive OTT content,and endless fun
            all in one place
          </span>

          {/* Search Input and Button */}
          <div className="flex items-center w-full max-w-md border  overflow-hidden mt-6">
            <input
              type="text"
              placeholder="OTT, Games"
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
              Search <FaChevronRight className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#161829] text-white">
        {/* Heading Section */}
        <div className="text-2xl text-center p-6">
          <h3 className="text-yellow-400">Why Choose Haoda Network ?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-5 bg-[#1F2131]">
          <div className="text-center p-4">
            <img src={hub} alt="Image 1" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg text-yellow-400 hover:text-green-500">
              All-in-one hub
            </h4>
            <p className="text-white">
              Enjoy premium games <br /> and top-rated streaming <br /> content
              without
              <br />
              Switching platforms
            </p>
          </div>

          <div className="text-center p-4">
            <img
              src={loaction}
              alt="Image 2"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h4 className="text-lg text-yellow-400 hover:text-green-500">
              Play Anytime,Anywhere
            </h4>
            <p className="text-white">
              Enjoy gaming and <br /> stream and play on any <br />
              device,anytime,
              <br />
              interruption-free
            </p>
          </div>

          <div className="text-center p-4">
            <img
              src={diamond}
              alt="Image 3"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h4 className="text-lg text-yellow-400 hover:text-green-500">
              Exclusive Access
            </h4>
            <p className="text-white">
              Get early releases, <br /> premium features, and <br />
              exclusive games with <br /> unlimited streaming
            </p>
          </div>

          <div className="text-center p-4">
            <img src={navi} alt="Image 4" className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg text-yellow-400 hover:text-green-500">
              Effortless Navigation
            </h4>
            <p className="text-white">
              Switch between games <br /> and shows seamlessly <br /> with our
              user-friendly <br /> interface
            </p>
          </div>

          <div className="text-center p-4">
            <img
              src={update}
              alt="Image 5"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h4 className="text-lg text-yellow-400 hover:text-green-500">
              Stay Updated
            </h4>
            <p className="text-white">
              Discover fresh games <br /> and new content <br /> regularly with
              exciting <br /> updates rolling in
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#161829] p-4 mt-2  flex justify-center items-center">
        <p className="text-yellow-400 text-center text-sm sm:text-base lg:text-lg">
          Your ultimate gaming and streaming destination awaits !
        </p>
      </div>

      <div className="bg-[#0d0e1a] text-white py-12 px-6 text-center mt-2">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        Step Up Your Game with Haoda Network!
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          "Unlimited access to games and streaming",
          "Ad-free experience",
          "Cross-platform access",
          "Fully customizable entertainment",
        ].map((feature, index) => (
          <div
            key={index}
            className="border border-yellow-400 rounded-lg p-6 bg-[#15162b] shadow-lg"
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <p className="mt-8 text-2xl  italic text-white">
        Join Haoda Network today and level up your entertainment!
      </p>
    </div>

    <div className="bg-[#1F2131] py-8 flex justify-center items-center">
        <p className="text-yellow-400  text-center text-3xl font-bold font-chakra-petch">
          Games on Haoda Network OTT Platform
        </p>
      </div>

      <div className="bg-[#161829] text-center py-4 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-16 ">
        <h1 className="text-white text-2xl  leading-snug">
          Our app offers a diverse range of exciting games for every gamer.Here&apos;s what you can enjoy:
        </h1>
       
      </div>
      <div className="bg-[#25292A] py-8">
        {/* Fantasy Games Section */}
        <div className="transition duration-500 ease-in-out">
          <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 lg:px-16 mb-8">
            <h1 className="text-yellow-400 text-lg sm:text-xl lg:text-2xl">
              Fantasy Games
            </h1>
            <button className="text-white border-2 bg-[#25292A] px-3 py-1 rounded-md text-sm sm:text-base">
              See All
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16">
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
                  className="w-40 sm:w-48 lg:w-60 h-auto mb-4"
                />
                <h5 className="text-white text-sm sm:text-base lg:text-lg">
                  {game.name}
                </h5>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Games Section */}
        <div className="transition duration-500 ease-in-out ">
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
                  className="w-40 sm:w-48 lg:w-60 h-auto mb-4"
                />
                <h5 className="text-white text-sm sm:text-base lg:text-lg">
                  {game.name}
                </h5>
              </div>
            ))}
          </div>

          <div className="bg-[#161829] p-4 mt-8 flex justify-center items-center">
            <p className="text-white text-center text-2xl ">
              These games ensure there&apos;s something for everyone,from casual gamers to <br/>
              adrenaline junkies,making Haoda Network the ultimate entertainment destination!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#161829] text-center py-10 px-4 sm:px-8 lg:px-16">
        {/* Main Heading */}
        <h1 className="text-yellow-400 text-4xl font-bold  mb-16 font-chakra-petch">
          Getting Started 
        </h1>

        {/* Container for Boxes */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Box 1 */}
          <div className="relative bg-[#FEFFF2] text-[#434343] p-6 rounded-md shadow-md w-full max-w-[250px] h-[250px] flex flex-col items-center">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center">
              <img
                src={download}
                alt="Download the App"
                className="w-10 h-10"
              />
            </div>
            <h3 className="mt-12 text-lg sm:text-xl mb-4 text-green-500 font-bold">
              Download the App
            </h3>
            <p className="font-medium text-sm sm:text-base text-center">
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
          <div className="relative bg-[#FEFFF2] text-[#434343] p-6 rounded-md shadow-md w-full max-w-[250px] h-[250px] flex flex-col items-center">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center">
              <img
                src={search}
                alt="Browse the Library"
                className="w-10 h-10"
              />
            </div>
            <h3 className="mt-12 text-lg sm:text-xl mb-4 text-green-500 font-bold">
              Browse the Library
            </h3>
            <p className="font-medium text-sm sm:text-base text-center">
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
          <div className="relative bg-[#FEFFF2] text-[#434343] p-6 rounded-md shadow-md w-full max-w-[250px] h-[250px] flex flex-col items-center">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center">
              <img src={game} alt="Start Playing" className="w-10 h-10" />
            </div>
            <h3 className="mt-12 text-lg sm:text-xl mb-4 text-green-500 font-bold">
              Start Playing
            </h3>
            <p className="font-medium text-sm sm:text-base text-center">
              Choose your favorite and dive into the action instantly
            </p>
          </div>
        </div>

        {/* New Section Below Boxes */}
        <div className="mt-16">
          <h1 className="text-yellow-400 text-2xl sm:text-3xl">
            Welcome to Haoda Network!
          </h1>
          <h2 className="text-green-400 text-xl sm:text-2xl mt-4">
            Your Ultimate Gaming Aggregator
          </h2>
          <p className="text-white text-base sm:text-lg mt-4">
            Unlock endless possibilities with our powerful platform.
          </p>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-10 px-4 sm:px-8 lg:px-16">
        {/* Feature Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Circular Wrapper */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 hover:bg-yellow-500 transform transition-transform duration-300 hover:scale-110 cursor-pointer mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-400 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="text-center mt-10">
          <h1 className="text-2xl sm:text-3xl text-green-400 mb-4">
            Partner with Haoda Network
          </h1>
          <h3 className="text-base sm:text-lg text-white">
            Revolutionize gaming integration with these key benefits:
          </h3>
        </div>

        {/* Additional Boxes */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {additionalBoxes.map((box, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h1 className="text-xl sm:text-2xl text-yellow-400 mb-4">
                {box.heading}
              </h1>
              <h3 className="text-base sm:text-lg text-white">
                {box.subheading}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="text-center mt-8">
          <h3 className="text-base sm:text-lg text-white">
            Your ultimate destination for gaming and streaming awaits.
            <br />
            Join Haoda Network now!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Slide;
