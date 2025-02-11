import swipe from "../../assets/swipe.png";
import rectangle from "../../assets/rectangle.svg";

const SwipeDesktop = () => {
  return (
    <>
         {/* Background Section */}
         <div
           className="w-full h-[420px] bg-cover bg-center text-white flex flex-col items-start justify-center px-5 sm:px-10 lg:px-24"
           style={{ backgroundImage: `url(${swipe})` }}
         >
           {/* Container */}
           <div className="container mx-auto px-4">
             {/* Text on Left */}
             <div className="text-yellow-400 text-3xl font-chakra-petch font-semibold ">
               Swipe
             </div>
           </div>
         </div>
   
         {/* Coming Soon Section */}
         <div className="bg-[#1F2131] text-center py-8">
           <div className="container mx-auto px-4">
             <h2 className="text-yellow-400 text-2xl font-semibold font-inter">Coming Soon</h2>
             <img src={rectangle} alt="Rectangle" className="mx-auto mt-4" />
           </div>
         </div>
       </>
  );
};

export default SwipeDesktop;
