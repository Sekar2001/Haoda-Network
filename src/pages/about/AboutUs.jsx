import backgroundImage from "../../assets/about-background.png";
import sampleImage from "../../assets/sampleImage.png";

const AboutUs = () => {
  return (
    <div>
      {/* Background Section with Text */}
      <div
        className="h-[500px] bg-cover bg-center text-white flex flex-col items-start justify-center px-5 sm:px-10 lg:px-24"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          flex: 1,
        }}
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-chakra-petch font-semibold text-yellow-400">
          Welcome to Haoda Network
        </h3>
        <p className="text-white text-2xl">
          Your go-to hub for gaming thrills and OTT adventures. We
          <br />
          bring players, developers, and fans together on one
          <br />
          vibrant platform. Casual gamer or pro, developer or
          <br />
          enthusiast, we&apos;ve got you covered.
        </p>
      </div>

      <div className="bg-[#1b1b2f] text-white py-10 px-5">
        {/* About Us Heading */}
        <h1 className="text-yellow-400 text-2xl sm:text-3xl lg:text-4xl text-center mb-8">
          About Us
        </h1>

        {/* Section with Image and Text */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left: Image */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={sampleImage}
              alt="OTT Gaming"
              className="w-full rounded-lg border-yellow-400 shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-yellow-400 text-3xl font-chakra-petch font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-white text-2xl">
              Gaming and innovation drive us. Our team of tech-
              <br />
              savvy experts and creative pros delivers a seamless,
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

        <div className="bg-[#0F1124] text-center p-10 ">
          <h2 className="text-yellow-400 text-3xl font-chakra-petch tracking-wide">
            Our Mission
          </h2>
          <div className="w-24 h-[2px] bg-yellow-500 mx-auto my-2"></div>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Empowering gamers and creators with an all-in-one platform for
            accessibility, fun, and community. We’re here to break barriers,
            spark creativity, and redefine gaming for all.
          </p>
        </div>
     
    </div>
  );
};

export default AboutUs;