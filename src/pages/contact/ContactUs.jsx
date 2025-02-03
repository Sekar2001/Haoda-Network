import anime from "../../assets/anime-girl.png";
import image from "../../assets/backimage.png";
import clock from "../../assets/wall-clock 1.png";
import call from "../../assets/phone-call.png";
import mail from "../../assets/mail.png";

const ContactUs = () => {
  return (
    <div className="bg-[#0d0d2b] text-white py-16 px-4 sm:px-8" style={{flex:1}}>
      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Column */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-yellow-400 text-xl sm:text-2xl md:text-3xl mb-4">
            We’re here to help! Whether you have questions, feedback, or
            partnership inquiries, our team is ready to assist you.
          </h2>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2">
          <img
            src={anime}
            alt="Contact Illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Get in Touch Heading */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-center text-yellow-400 text-2xl sm:text-3xl mb-8">
          Get in Touch
        </h2>
      </div>

      {/* Background Image and Contact Form Section */}
      <div
        className="relative bg-cover bg-center text-white py-16 px-4 sm:px-8"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Contact Form Section */}
          <div className="flex flex-col md:flex-row bg-black bg-opacity-75 rounded-lg p-4 sm:p-8 shadow-lg mt-16 gap-8">
            {/* Left Column */}
            <div className="md:w-1/2 text-left">
              <h3 className="text-green-400 text-lg sm:text-xl md:text-2xl mb-4">
                Contact Us
              </h3>

              {/* Email */}
              <p className="mb-4 flex items-center">
                <img src={mail} alt="Email Icon" className="w-8 h-auto mr-4" />
                <span>
                  For general support or queries, reach us at <br />
                  <span className="text-yellow-400 text-base sm:text-lg">
                    support@haodanetwork.com
                  </span>
                </span>
              </p>

              {/* Phone */}
              <p className="mb-4 flex items-center">
                <img src={call} alt="Phone Icon" className="w-8 h-auto mr-4" />
                <span>
                  For urgent matters, contact our team at <br />
                  <span className="text-yellow-400 text-base sm:text-lg">
                    1-800 Gaming
                  </span>
                </span>
              </p>

              {/* Hours */}
              <p className="mb-4 flex items-center">
                <img src={clock} alt="Clock Icon" className="w-8 h-auto mr-4" />
                <span>
                  Available Monday to Friday, <br />
                  <span className="text-yellow-400 text-base sm:text-lg">
                    9 AM to 6 PM
                  </span>
                </span>
              </p>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2">
              <form className="flex flex-col space-y-4">
                <div>
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-yellow-400 rounded-md text-black focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-yellow-400 rounded-md text-black focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Write
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border border-yellow-400 rounded-md text-black focus:outline-none"
                    rows="4"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-yellow-400 text-black py-2 rounded-md hover:bg-yellow-500 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="bg-[#1b1b2f] text-white py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl text-yellow-400 mb-8">
            Partnership Opportunities
          </h2>
          <div className="flex flex-col space-y-6">
            {[  
              "Are you a game developer or an industry partner?",
              "Let’s collaborate to create incredible gaming experiences!",
              "Drop us an email at partners@haodanetwork.com to start the conversation.",
            ].map((text, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="h-full w-[2px] bg-yellow-400"></div>
                </div>
                <p className="text-base sm:text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Community Section */}
      <div className="bg-[#0d0d2b] text-white py-8 px-4 sm:px-8">
        <h2 className="text-center text-yellow-400 text-2xl sm:text-3xl mb-4">
          Join Our Community
        </h2>
        <p className="text-center text-gray-300 text-sm sm:text-base max-w-4xl mx-auto">
          Stay connected and be part of the Haoda Network family!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
