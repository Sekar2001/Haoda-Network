import backgroundImage from "../assets/about-background.png";
import sampleImage from "../assets/sampleImage.png";
import live from "../assets/live 1.png";
import display from "../assets/monitor.png";
import ratings from "../assets/rating.png";
import exclusived from "../assets/exclusive.png";
import access from "../assets/access-control.png";
import badges from "../assets/badge.png";
import ads from "../assets/no-ads.png";
import rewards from "../assets/reward.png";
import button from "../assets/press-button.png";
import downloads from "../assets/download.png";
import applications from "../assets/application.png";

const AboutUs = () => {
  return (
    <div>
      {/* Background Section with Text */}
      <div
        className="h-[500px] bg-cover bg-center text-white flex flex-col items-start justify-center px-5 sm:px-10 lg:px-24"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-400">
          Here&apos;s a polished version specifically for OTT{" "}
          <br className="hidden sm:block" /> Gaming and Video streaming
          services:
        </h3>
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
              className="w-full rounded-lg  border-yellow-400 shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-green-400 text-xl sm:text-2xl font-semibold mb-4">
              OTT Gaming and Video Streaming Services
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Welcome to the ultimate entertainment experience, where gaming and
              streaming come together in perfect harmony. At Haoda Network, we
              bring you cutting-edge OTT gaming and video streaming services
              that redefine how you play, watch, and interact.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="bg-darkBlue text-white py-16 px-8">
          <h2 className="text-center text-yellow-400 text-2xl sm:text-3xl mb-8">
            What We Offer
          </h2>
          <h3 className="text-yellow-300 text-xl sm:text-2xl font-semibold mb-10 ml-4 sm:ml-8">
            OTT Gaming
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Cards */}
            {[
              {
                src: live,
                title: "Game Streaming Anytime, Anywhere",
                desc: "No high-end gear? No problem. Stream your favorite games directly on any device.",
              },
              {
                src: ratings,
                title: "Seamless Experience",
                desc: "Switch between gaming and watching with ease on our intuitive platform.",
              },
              {
                src: exclusived,
                title: "Exclusive Gaming Content",
                desc: "Get early access to premium games, exclusive titles, and custom tournaments.",
              },
              {
                src: display,
                title: "Cross-Platform Play",
                desc: "Play seamlessly across mobile, tablet, and desktop platforms.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg text-center shadow-lg"
              >
                <div className="text-green-400 text-4xl mb-4 flex justify-center items-center">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-16 h-auto"
                  />
                </div>
                <h4 className="text-green-400 text-lg sm:text-xl font-semibold mb-2 text-center">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-yellow-300 text-xl sm:text-2xl font-semibold mt-10 ml-4 sm:ml-8">
            Video Streaming Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-8">
            {/* Additional Cards */}
            {[
              {
                src: badges,
                title: "Top-Tier Content",
                desc: "Stream blockbuster movies, popular series, and exclusive shows all in one place.",
              },
              {
                src: ads,
                title: "Ad-Free Entertainment",
                desc: "Enjoy uninterrupted viewing with our premium, ad-free experience.",
              },
              {
                src: rewards,
                title: "Personalized Recommendations",
                desc: "Get tailored content based on your interests and preferences.",
              },
              {
                src: access,
                title: "On-Demand Access",
                desc: "Watch anytime, anywhere with the ability to pause and resume on multiple devices.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg text-center shadow-lg"
              >
                <div className="text-green-400 text-4xl mb-4 flex justify-center items-center">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-16 h-auto"
                  />
                </div>
                <h4 className="text-green-400 text-lg sm:text-xl font-semibold mb-2 text-center">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1b1b2f] text-white py-10 px-6 mt-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl text-yellow-400 mb-8">
              Why Choose Haoda Network for OTT Gaming and Streaming?
            </h2>
            <div className="flex flex-col space-y-6">
              {[
                {
                  title: "All-in-One Hub:",
                  text: "No need to juggle between platforms—play games and stream videos seamlessly in one app.",
                },
                {
                  title: "Exclusive Access:",
                  text: "Unlock early releases, premium features, and exclusive shows.",
                },
                {
                  title: "Customizable Experience:",
                  text: "Tailor your entertainment with personalized settings and curated content.",
                },
                {
                  title: "Reliable Performance:",
                  text: "Powered by next-gen technology for a fast, smooth, and visually stunning experience.",
                },
                {
                  title: "Community Connection:",
                  text: "Engage with other gamers and fans through tournaments, leaderboards, and interactive features.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    {index !== 4 && (
                      <div className="h-full w-[2px] bg-yellow-400"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl">{item.title}</h3>
                    <p className="text-sm md:text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="bg-[#0d0d2b] text-white py-16 px-8">
          <h2 className="text-center text-yellow-400 text-2xl sm:text-3xl mb-8">
            What We Offer
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {[
              {
                img: downloads,
                title: "Download the Haoda Network App",
                text: "Available on iOS, Android, and Web platforms.",
              },
              {
                img: button,
                title: "Subscribe",
                text: "Choose from our flexible plans to unlock the full suite of gaming and streaming services.",
              },
              {
                img: applications,
                title: "Dive In",
                text: "Start exploring games, watching videos, and experiencing the future of entertainment today!",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1b1b2f] w-full sm:w-72 p-8 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-auto mx-auto mb-4"
                />
                <h3 className="text-yellow-400 text-lg sm:text-2xl mb-4">
                  {item.title}
                </h3>
                <p className="text-white text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join the Revolution Section */}
        <div className="bg-[#1b1b2f] text-white py-8 px-8">
          <h2 className="text-center text-yellow-400 text-2xl sm:text-3xl mb-4">
            Join the Revolution
          </h2>
          <p className="text-center text-gray-300 text-sm sm:text-base max-w-4xl mx-auto">
            With Haoda Network, the boundaries between gaming and streaming
            blur, offering a unified entertainment destination.
            <br />
            Let&apos;s redefine fun, creativity, and connection—together.
            <br />
            Start your journey now!
          </p>
        </div>

        {/* Footer */}
        <div className="bg-[#0d0d2b] text-white py-10 px-8">
          <p className="text-center text-gray-300 text-sm sm:text-base max-w-4xl mx-auto">
            This version ensures clarity, excitement, and professionalism,
            making your OTT Gaming and video streaming services
            <br />
            appealing to a broad audience. Let me know if you&apos;d like
            further refinements!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
