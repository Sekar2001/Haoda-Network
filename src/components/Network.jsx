import game from "../assets/game.png";
import download from "../assets/down.png";
import search from "../assets/search-engine.png";
import fast from "../assets/fast-forward.png";

const Network = () => {
  return (
    <div className="bg-[#161829] text-center py-10 px-4 sm:px-8 lg:px-16">
      {/* Main Heading */}
      <h1 className="text-yellow-400 text-2xl sm:text-3xl mb-16">
        Getting Started with Haoda Network
      </h1>

      {/* Container for Boxes */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Box 1 */}
        <div className="relative bg-[#FEFFF2] text-[#434343] p-6 rounded-md shadow-md w-full max-w-[250px] h-[250px] flex flex-col items-center">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
            <img src={download} alt="Download the App" className="w-10 h-10" />
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
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
            <img src={search} alt="Browse the Library" className="w-10 h-10" />
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
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
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
  );
};

export default Network;
