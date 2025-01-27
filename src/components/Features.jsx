import {
  FaBolt,
  FaGamepad,
  FaCogs,
  FaTrophy,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBolt className="text-black text-4xl" />,
      title: "Instant Integration",
      description: "Simplify operations with a unified API",
    },
    {
      icon: <FaGamepad className="text-black text-4xl" />,
      title: "Endless Game Variety",
      description:
        "Access RNG, live dealer, and more for nonstop entertainment",
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

  return (
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
            <p className="text-sm text-gray-400 mt-2">{feature.description}</p>
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
          Your ultimate destination for gaming and streaming awaits.<br />
          Join Haoda Network now!
        </h3>
      </div>
    </div>
  );
};

export default Features;
