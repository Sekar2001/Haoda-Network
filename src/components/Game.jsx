import maskgroup from "../assets/Mask group-1.png";
import maskgrouped from "../assets/Mask group-2.png";
import maskgroups from "../assets/Mask group-3.png";
import maskgrouping from "../assets/Mask group-4.png";
import mask from "../assets/Mask group-5.png";
import masks from "../assets/Mask group-6.png";
import masked from "../assets/Mask group-7.png";
import masking from "../assets/Mask group-8.png";

const Game = () => {
  return (
    <div className="bg-[#25292A] py-8">
      {/* Fantasy Games Section */}
      <div className="transition duration-500 ease-in-out"> 
        <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 lg:px-16 mb-8">
          <h1 className="text-green-400 text-lg sm:text-xl lg:text-2xl">
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
      <div className="transition duration-500 ease-in-out"> 
        <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 lg:px-16 mt-16 mb-8">
          <h1 className="text-green-400 text-lg sm:text-xl lg:text-2xl">
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
          <p className="text-white text-center text-sm sm:text-base lg:text-lg">
            From casual gamers to adrenaline junkies, Haoda Network has it all!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;