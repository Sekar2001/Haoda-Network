import hub from "../assets/hub.png";
import diamond from "../assets/diamond.png";
import loaction from "../assets/location.png";
import navi from "../assets/navigate.png";
import update from "../assets/update.png";

const Choose = () => {
  return (
    <div className="bg-[#161829] text-white">
      {/* Heading Section */}
      <div className="text-2xl text-center p-6">
        <h3 className="text-green-400">Why Choose Haoda Network ?</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-5 bg-[#1F2131]">
        <div className="text-center p-4">
          <img src={hub} alt="Image 1" className="w-12 h-12 mx-auto mb-4" />
          <h4 className="text-lg text-yellow-400 hover:text-green-500">All-in-one hub</h4>
          <p className="text-white">
            Access premium games <br /> and top-rated streaming <br /> content seamlessly
          </p>
        </div>

        <div className="text-center p-4">
          <img src={loaction} alt="Image 2" className="w-12 h-12 mx-auto mb-4" />
          <h4 className="text-lg text-yellow-400 hover:text-green-500">Play Anytime,Anywhere</h4>
          <p className="text-white">
            Enjoy gaming and <br /> streaming on any <br />
            device,interruption-free
          </p>
        </div>

        <div className="text-center p-4">
          <img src={diamond} alt="Image 3" className="w-12 h-12 mx-auto mb-4" />
          <h4 className="text-lg text-yellow-400 hover:text-green-500">Exclusive Access</h4>
          <p className="text-white">
            Unlock early releases, <br /> premium features, and <br /> exclusive
            games
          </p>
        </div>

        <div className="text-center p-4">
          <img src={navi} alt="Image 4" className="w-12 h-12 mx-auto mb-4" />
          <h4 className="text-lg text-yellow-400 hover:text-green-500">Effortless Navigation</h4>
          <p className="text-white">
            Switch easily between <br /> games and shows with <br /> our
            user-friendly <br /> interface
          </p>
        </div>

        <div className="text-center p-4">
          <img src={update} alt="Image 5" className="w-12 h-12 mx-auto mb-4" />
          <h4 className="text-lg text-yellow-400 hover:text-green-500">Stay Updated</h4>
          <p className="text-white">Explore fresh content <br/> and games regularly <br/> with exciting updates</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;