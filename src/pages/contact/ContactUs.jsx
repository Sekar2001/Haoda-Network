import anime from "../../assets/anime.png";
import image from "../../assets/image.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone-call.png";
import wall from "../../assets/wall-clock 1.png";
import hand from "../../assets/hand.png";
import tick from "../../assets/tick.png";
import address from "../../assets/address.png";
import quiz from "../../assets/quiz.png";
import navigate from "../../assets/navigate.png";
import rectangle from "../../assets/rectangle.svg";
const ContactUs = () => {
  return (
   <>
      {/* Background Image */}
      <div
        className="h-[600px] bg-cover bg-center text-white flex flex-col items-start justify-center px-5 sm:px-10 lg:px-24"
        style={{ backgroundImage: `url(${anime})` }}
      >
        
        {/* Text on Left */}
        <div className="pl-16 text-yellow-400 text-3xl font-chakra-petch font-semibold container mx-auto">
          We&apos;re here to help!
          <p className="text-white text-lg font-inter">
            Whether you have questions, feedback, or partnership
            <br />
            inquiries, our team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="bg-[#1F2131] text-center py-6">
        <h2 className="text-yellow-400 text-2xl font-semibold">Get in Touch</h2>
        <img src={rectangle} alt="Rectangle" className="mx-auto mt-4" />
      </div>

      {/* Image section */}
      <div
        className="h-[600px] bg-cover bg-center text-white flex flex-col items-start justify-center px-5 sm:px-10 lg:px-24"
        style={{ backgroundImage: `url(${image})` }}
      >
      <div className="container mx-auto pl-16 text-yellow-400 text-3xl font-semibold">
          
          <div className="flex flex-col justify-center ml-auto pr-16 space-y-4 mt-6">
            <h3>Contact Sales</h3>
            <div className="flex items-center space-x-4">
              <img src={mail} alt="Email Support Icon" className="w-8 h-8" />
              <div>
                <p className="text-white text-sm">
                  Reach us for general support or queries
                </p>
                <p className="text-yellow-400 text-lg hover:text-white">
                  support@haodanetwork.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={phone} alt="Phone Support Icon" className="w-8 h-8" />
              <div>
                <p className="text-white text-sm">
                  Have an urgent matter? Call our team at
                </p>
                <p className="text-yellow-400 text-lg hover:text-white">
                  1-800-GAMING
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={wall} alt="Business Hours Icon" className="w-8 h-8" />
              <div>
                <p className="text-white text-sm">
                  Available Monday to Friday, from
                </p>
                <p className="text-yellow-400 text-lg hover:text-white">
                  9 AM to 6 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership section */}
      <div className="bg-[#1F2131]">
        <div className="py-12 px-16 flex items-center space-x-8 container mx-auto">
          <div className="w-1/4 ml-24">
            <img
              src={hand}
              alt="Handshake"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-3/4 ml-8">
            <div className="flex items-center mb-4">
              <img src={tick} alt="Check" className="w-6 h-6 mr-2 ml-4" />
              <h2 className="text-yellow-400 text-3xl font-chakra-petch font-semibold">
                Partnership Opportunities
              </h2>
            </div>
            <ul className="text-white list-none pl-6 space-y-3 text-lg">
              <li className="relative pl-5 text-2xl">
                <span className="absolute left-0 top-3 w-3 h-3 bg-yellow-400 rounded-full"></span>
                Are you a game developer or industry partner?
              </li>
              <li className="relative pl-5 text-2xl">
                <span className="absolute left-0 top-3 w-3 h-3 bg-yellow-400 rounded-full"></span>
                Let&apos;s work together to create incredible gaming experiences
              </li>
              <li className="relative pl-5 text-2xl">
                <span className="absolute left-0 top-3 w-3 h-3 bg-yellow-400 rounded-full"></span>
                Drop us an email at
                <a
                  href="mailto:partners@haodanetwork.com"
                  className="text-yellow-400 font-semibold ml-1"
                >
                  partners@haodanetwork.com
                </a>
                to start the conversation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Community section */}
      <div className="bg-[#161826] text-center py-6">
        <h2 className="text-yellow-400 text-3xl font-semibold">
          Join Our Community
        </h2>
        <img src={rectangle} alt="Rectangle" className="mx-auto mt-4" />
      </div>

      {/* Location and form section */}
      <div className="bg-[#1F2131]">
        {/* Location Section */}
        <div className="py-12 px-16 flex items-start space-x-8 container mx-auto">
          <div className="w-1/4 ml-24 mt-32">
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Location
            </h2>
            <img
              src={address}
              alt="Map"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-white mt-4 flex items-center space-x-2">
              <img src={navigate} alt="Check" className="w-8 h-8" />
              <span>
              Office Address: 6th Floor, D wing, MBC Infotech Park, Thane,
              Maharashtra 400615
              </span>
            </p>
          </div>
          {/* Form Section */}
          <div
            className="h-[600px] bg-cover bg-center text-white flex flex-col items-start justify-center px-10 mt-40"
            style={{
              backgroundImage: `url(${quiz})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl  bg-opacity-20 p-8 rounded-lg shadow-lg">
              {/* Contact Form */}
              <div>
                <h2 className="text-yellow-400 text-3xl ">Have a Question?</h2>
                <p className="text-white text-xl italic mt-4 mb-6">
                  Fill out the form below, and we’ll get back to you as soon as
                  possible:
                </p>
          
                <form className="space-y-6">
                  {/* Name */}
                  <div className="relative ">
                    <label className="block text-sm font-medium text-gray-900 bg-yellow-500 px-6   md:absolute md:-top-2  md:left-4 md:rounded">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded  text-black"
                      required
                    />
                  </div>
          
                  {/* Email */}
                  <div className="relative ">
                    <label className="block text-sm font-medium text-gray-900 bg-yellow-500 px-6   md:absolute md:-top-2  md:left-4 md:rounded">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 rounded  text-black"
                      required
                    />
                  </div>
          
                  {/* Subject */}
                  <div className="relative ">
                    <label className="block text-sm font-medium text-gray-900 bg-yellow-500 px-6   md:absolute md:-top-2  md:left-4 md:rounded">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded  text-black"
                      required
                    />
                  </div>
          
                  {/* Message */}
                  <div className="relative ">
                    <label className="block text-sm font-medium text-gray-900 bg-yellow-500 px-6   md:absolute md:-top-2  md:left-4 md:rounded">
                      Message
                    </label>
                    <textarea
                      className="w-full p-3 rounded  text-black"
                      rows="4"
                      required
                    ></textarea>
                  </div>
          
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-yellow-400 text-black text-lg px-1 py-1 rounded w-2/4 hover:bg-yellow-500 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="bg-[#1a1b2f] text-yellow-400 justify-center text-center p-10 ">
        <div className="container mx-auto">
        <h1 className="text-2xl font-semibold italic">
          We&apos;re excited to hear from you and help make your <br />
          gaming experience unforgettable!
        </h1>
        </div>
      </div>
      </>
  );
};

export default ContactUs;
