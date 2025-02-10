import backgroundImage from "../../assets/about-background.png";
import sampleImage from "../../assets/sampleImage.png";
import cont from "../../assets/cont.png";
import live from "../../assets/live.png";
import exclusive from "../../assets/exclusive.png";
import monitor from "../../assets/monitor.png";
import rating from "../../assets/rating.png";
import touch from "../../assets/touch.png";
import rectangle from "../../assets/rectangle.svg";
import "../about/AboutUs.css";

// const features = [
//   {
//     title: "Diverse Game Library",
//     description: "Discover top-notch games across genres and platforms",
//     image: live,
//   },
//   {
//     title: "OTT Gaming",
//     description: "Stream games anytime, anywhere, no high-end gear needed",
//     image: rating,
//   },
//   {
//     title: "Developer Support",
//     description: "Showcase, connect, and monetize your creations",
//     image: exclusive,
//   },
//   {
//     title: "Community Features",
//     description: "Join tournaments, climb leaderboards, and make connections",
//     image: monitor,
//   },
//   {
//     title: "Next-Gen Tech",
//     description: "Enjoy fast, reliable, and visually stunning gameplay",
//     image: touch,
//   },
// ];

const AboutUs = () => {
  return (
   <>
      {/* Background Section with Text */}
      <div
        className="h-[450px] bg-cover bg-center text-white flex flex-col items-start justify-center px-5 sm:px-10 lg:px-24"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="container mx-auto px-4">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-chakra-petch font-semibold text-yellow-400">
          Welcome to Haoda Network
        </h3>
        <p className="text-white text-xl">
          Your go-to hub for gaming thrills and OTT adventures. We
          <br />
          bring players, developers, and fans together on one
          <br />
          vibrant platform. Casual gamer or pro, developer or
          <br />
          enthusiast, we&apos;ve got you covered.
        </p>
      </div>
      </div>

      <div className="bg-[#1F2131] text-white py-10 px-5">
        {/* About Us Heading */}
        <h1 className="text-yellow-400 text-2xl sm:text-3xl lg:text-4xl text-center mb-8">
          About Us
        </h1>

        {/* Section with Image and Text */}
        <div className="max-w-6xl container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left: Image */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={sampleImage}
              alt="OTT Gaming"
              className="w-[500px] h-[300px] rounded-lg border-yellow-400 shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-yellow-400 text-3xl font-chakra-petch font-semibold mb-4 mt-16">
              Who We Are
            </h2>
            <p className="text-white text-xl mt-4">
              Gaming and innovation drive us. Our team of tech-savvy
              <br />
              experts and creative pros delivers a seamless,
              <br />
              diverse gaming experience. From indie gems to
              <br />
              blockbuster hits, we&apos;ve curated something for
              <br />
              everyone.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#161829] text-center p-10">
        <h2 className="text-yellow-400 text-3xl font-chakra-petch tracking-wide">
          Our Mission
        </h2>
        <img src={rectangle} alt="Rectangle" className="container mx-auto mt-4 w-1/2" />
        <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
          Empowering gamers and creators with an all-in-one platform for
          accessibility, fun, and community. We’re here to break barriers, spark
          creativity, and redefine gaming for all.
        </p>
      </div>

      {/* Background Section for Contact */}
      <div
        className="relative w-full bg-[#0F1124] text-white text-center py-10  "
        style={{
          backgroundImage: `url(${cont})`,
        }}
      >
        <div className="container mx-auto">
        <h2 className="text-3xl font-chakra-petch text-yellow-400 mb-6 text-center ">   {/*text-left pl-24*/}
          What We Offer
        </h2>
       
        <div className="flex flex-wrap justify-center gap-28  mx-auto">
          {/* Card 1 */}
          <div className="bg-black bg-opacity-60 p-6 rounded-xl shadow-lg text-center hover:bg-opacity-80 transition duration-300 w-full sm:w-[48%] md:w-[25%]">
            <div className="mb-3">
              <img
                src={live}
                alt="Diverse Game Library"
                className="mx-auto h-16 w-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-yellow-400">
              Diverse Game Library
            </h3>
            <p className="text-white mt-2">
              Discover top-notch games across genres and platforms
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black bg-opacity-60 p-6 rounded-xl shadow-lg text-center hover:bg-opacity-80 transition duration-300 w-full sm:w-[48%] md:w-[25%]">
            <div className="mb-3">
              <img
                src={rating}
                alt="OTT Gaming"
                className="mx-auto h-16 w-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-yellow-400">
              OTT Gaming
            </h3>
            <p className="text-white mt-2">
              Stream games anytime, anywhere, no high-end gear needed
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black bg-opacity-60 p-6 rounded-xl shadow-lg text-center hover:bg-opacity-80 transition duration-300 w-full sm:w-[48%] md:w-[25%]">
            <div className="mb-3">
              <img
                src={exclusive}
                alt="Developer Support"
                className="mx-auto h-16 w-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-yellow-400">
              Developer Support
            </h3>
            <p className="text-white mt-2">
              Showcase, connect, and monetize your creations
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-black bg-opacity-60 p-6 rounded-xl shadow-lg text-center hover:bg-opacity-80 transition duration-300 w-full sm:w-[48%] md:w-[25%]">
            <div className="mb-3">
              <img
                src={monitor}
                alt="Community Features"
                className="mx-auto h-16 w-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-yellow-400">
              Community Features
            </h3>
            <p className="text-white mt-2">
              Join tournaments, climb leaderboards, and make connections
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-black bg-opacity-60 p-6 rounded-xl shadow-lg text-center hover:bg-opacity-80 transition duration-300 w-full sm:w-[48%] md:w-[25%]">
            <div className="mb-3">
              <img
                src={touch}
                alt="Next-Gen Tech"
                className="mx-auto h-16 w-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-yellow-400">
              Next-Gen Tech
            </h3>
            <p className="text-white mt-2">
              Enjoy fast, reliable, and visually stunning gameplay
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="relative w-full bg-[#1F2131] text-white text-center py-10">
        <div className="relative z-10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-chakra-petch font-bold text-yellow-400 mb-8">
              Why Choose Us?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
              {/* Card 1 */}
              <div className="bg-[#1b1b2f] p-6 rounded-xl flex flex-col items-center w-full border-2 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Easy Access
                </h3>
                <p className="text-base text-center">
                  Game on any device with our
                  <br />
                  intuitive platform
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1b1b2f] p-6 rounded-xl flex flex-col items-center w-full border-2 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Global Community
                </h3>
                <p className="text-base text-center">
                  Connect with gamers and
                  <br />
                  developers worldwide
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1b1b2f] p-6 rounded-xl flex flex-col items-center w-full border-2 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Tailored For You
                </h3>
                <p className="text-base text-center">
                  Personalized picks to match
                  <br />
                  your vibe
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#1b1b2f] p-6 rounded-xl flex flex-col items-center w-full border-2 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Trusted Partner
                </h3>
                <p className="text-base text-center">
                  Secure, transparent, and
                  <br />
                  user-first
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="relative w-full bg-[#161829] text-white text-center py-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-chakra-petch font-bold text-yellow-400 mb-4">
            Join Us
          </h2>
          <img src={rectangle} alt="Rectangle" className="mx-auto mt-4 w-1/2" />

          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Dive into gaming&apos;s future with Haoda Networks Play, create, or
            explore the possibilities are endless. Let&apos;s make gaming
            extraordinary.
            <p className="text-xl text-yellow-400 leading-relaxed max-w-3xl mx-auto ">
              Start now!
            </p>
          </p>
        </div>
      </div>
      </>
  );
};

export default AboutUs;
