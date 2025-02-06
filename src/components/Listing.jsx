import curve from "../assets/curve.png";
import insta from "../assets/insta.png";
import end from "../assets/end.png";
import management from "../assets/management.png";
import date from "../assets/date.png";
import trophy from "../assets/trophy.png";
import payment from "../assets/payment.png";
import support from "../assets/support.png";

const Listing = () => {
  return (
    <div className="bg-[#161829] py-16 flex flex-col items-center relative">
      <img src={curve} alt="Curve" className="absolute top-1/2 transform -translate-y-1/2 w-full" />
      
      <div className="max-w-6xl w-full flex flex-wrap justify-between items-center relative z-10 px-8">
        {[
          { img: insta, title: "Instant Integration", desc: "Simplify operations with a single API for smooth game aggregation" },
          { img: end, title: "Endless Game Variety", desc: "Access RNG, live dealer, and more, for nonstop entertainment" },
          { img: management, title: "Centralized Management", desc: "Easily manage games, track, and report via our unified back office" },
          { img: date, title: "Continuous Updates", desc: "Always fresh with new titles and exclusive releases" },
          { img: trophy, title: "Custom Tournaments", desc: "Engage players with exciting, personalized challenges" },
          { img: payment, title: "Crypto-Friendly", desc: "Secure and easy crypto payments" },
          { img: support, title: "24/7 Support", desc: "Reliable help, anytime you need it" }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center w-1/4 mb-12 transform transition duration-300 hover:scale-110">
            <div className="bg-yellow-400 p-4 rounded-full flex justify-center items-center">
              <img src={item.img} alt={item.title} className="w-16 h-16" />
            </div>
            <h3 className="text-yellow-400 font-semibold mt-4 text-lg">{item.title}</h3>
            <p className="text-white text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
