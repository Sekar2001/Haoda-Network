import prod from "../../assets/prod.png";
import production from "../../assets/production.png";
import rectangle from "../../assets/rectangle.svg";

const ProductionHouseDesktop = () => {
  return (
    <div>
      {/* Background Image */}
      <div
        className="h-[450px] bg-cover bg-center text-white flex flex-col items-start justify-center px-5 sm:px-10 lg:px-24"
        style={{ backgroundImage: `url(${prod})` }}
      >
        {/* Container */}
        <div className="container mx-auto">
          {/* Text on Left */}
          <div className="pl-16 text-yellow-400 text-3xl font-chakra-petch font-semibold">
            Production House
          </div>
        </div>
      </div>

      {/* Register Section */}
      <div className="relative w-full bg-[#1F2131] text-white text-center py-12">
        <div className="container mx-auto">
          {/* Styled Heading */}
          <h2 className="text-2xl font-inter sm:text-3xl text-yellow-400 font-semibold relative inline-block">
            Register as Content Creator
            <img src={rectangle} alt="Rectangle" className="mx-auto mt-4" />
          </h2>
        </div>

        {/* Background Image for Form */}
        <div
          className="relative w-full bg-cover bg-center mt-6"
          style={{ backgroundImage: `url(${production})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Form Container */}
          <div className="relative z-10 py-16 px-4">
            <div className="container mx-auto bg-black rounded-lg p-6 sm:p-8 max-w-3xl shadow-lg">
              {/* Upload Box */}
              <div className="text-center mb-8">
                <div className="bg-gray-200 rounded-lg p-4 w-fit mx-auto flex flex-col items-center justify-center border-2">
                  <svg
                    className="w-6 h-6 text-gray-500 mb-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 13h3l3 3h4l3-3h3M4 7h16M4 3h16M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="text-sm text-gray-500 font-inter ">
                    <span className="text-blue-500 font-inter  cursor-pointer">
                      Click here 
                    </span>
                    to upload or drop your portfolio
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-inter font-medium text-gray-900 bg-yellow-500 px-6 md:absolute md:-top-2 md:left-4 md:rounded">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 text-black rounded-md w-full"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-inter font-medium text-gray-900 bg-yellow-500 px-6 md:absolute md:-top-2 md:left-4 md:rounded">
                    Choose Skills
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 text-black rounded-md w-full"
                  />
                </div>
                <div className="relative mt-4">
                  <label className="block text-sm font-inter font-medium text-gray-900 bg-yellow-500 px-6 md:absolute md:-top-2 md:left-4 md:rounded">
                    Instagram Link
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 text-black rounded-md w-full"
                  />
                </div>
                <div className="relative mt-4">
                  <label className="block text-sm font-inter font-medium text-gray-900 bg-yellow-500 px-6 md:absolute md:-top-2 md:left-4 md:rounded">
                    Facebook Link
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 text-black rounded-md w-full"
                  />
                </div>
                <div className="sm:col-span-1 relative mt-4 ">
                  <label className="block text-sm font-inter font-medium text-gray-900 bg-yellow-500 px-6 md:absolute md:-top-2 md:left-4 md:rounded">
                    Share About Yourself
                  </label>
                  <textarea className="mt-1 p-3 text-black rounded-md w-full h-32" />
                </div>
                <div className="relative mt-4">
                  <label className="block text-sm font-inter font-medium text-gray-900 bg-yellow-500 px-6 md:absolute md:-top-2 md:left-4 md:rounded">
                    YouTube Link
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 text-black rounded-md w-full"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-[-50px] text-center ml-96">
                <button className="bg-yellow-400 text-black py-2 px-8 rounded font-semibold hover:bg-yellow-500 transition duration-300 ml-32  mb-8 font-inter ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionHouseDesktop;
