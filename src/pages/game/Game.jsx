import gaming from "../../assets/gaming.png";

const Game = () => {
  return (
  <div className="relative w-full">
           {/* Background Image */}
           <div
             className="w-full h-[60vh] bg-cover bg-center flex items-center"
             style={{ backgroundImage: `url(${gaming})` }}
           >
             {/* Text on Left */}
             <div className="pl-16 text-yellow-400 text-3xl font-chakra-petch font-semibold">
               Games
             </div>
           </div>
     
           {/* Coming Soon Section */}
           <div className="bg-[#1a1b2f] text-center py-6">
             <h2 className="text-yellow-400 text-2xl font-semibold">Coming Soon</h2>
             <div className="w-32 h-[2px] bg-yellow-400 mx-auto mt-2"></div>
           </div>
         </div>
  )
}

export default Game
