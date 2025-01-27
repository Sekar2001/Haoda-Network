import thumb from "../assets/thumb.png"; 

const Slide = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${thumb})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div> 

      {/* Content Centered */}
      <div className="flex flex-col items-center justify-center h-full relative z-10"> 
        <div className="text-center text-white p-8 bg-black bg-opacity-10 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-400  leading-tight">
            Welcome to <br />
            <span className="text-yellow-400 mt-2">Haoda Network</span>
          </h1>
          <p className="mt-6 text-lg text-white">
            The ultimate entertainment experience where gaming meets streaming!
          </p>
          <p className="mt-6 text-lg text-yellow-400">
            Discover premium mobile games, exclusive OTT content, and endless
            <br />
            fun all in one place.
          </p>

          {/* Search Input and Button */}
          <div className="mt-6 flex  justify-center flex-col items-center sm:flex-row sm:space-x-4"> 
            <input
              type="text"
              className="p-2 text-black  w-full sm:w-auto" 
              placeholder="OTT, Games"
              style={{ fontSize: "16px", maxWidth: "250px" }}
            />
            <button
              className="p-2 bg-yellow-400 text-black   mt-4 sm:mt-0"
              style={{ fontSize: "16px", maxWidth: "150px" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;