import React from "react";
import "./Production.css";
import { TiUpload } from "react-icons/ti";
import MobileFooter from "../Footer/MobileFooter";
import MobileNavbar from "../Navbar/MobileNavbar";

const MobileProduction = () => {
  return (
    <div className="text-lg">
      <MobileNavbar />
      <div className="production_house_background py-28">
        <div className="flex justify-start pl-10 align-items-center">
          <span className="ott_heading">Production house</span>
        </div>
      </div>
      <div className="comming__soon__backgroun">
        <div className="py-10 text-center">
          <span className="comming__soon__heading font-inter font-semibold">
            Register as content creater
          </span>
        </div>
      </div>
      <div className="p-5 production_house_background_img">
        <div className="p-5 rounded-xl grid gap-8 contact__bo bg-black">
          <div className="flex justify-center">
            <div className="w-3/4 h-40 bg-gray-800 text-white px-5 rounded-lg text-center flex items-center justify-center border-gray-300">
              <div>
                <span className="text-gray-200 text-4xl flex justify-center">
                  <TiUpload />
                </span>
                <span className="font-inter text-yellow-400">click here</span>
                <span className="font-inter"> to upload</span>
                <br />
                <span className="block font-inter">your portfolio</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <input className="name__input outline-none rounded-sm px-5 py-5" />
            <span className="name__text text-sm absolute px-3 bottom-12 py-0.5 left-3 rounded-md">
              Name
            </span>
          </div>

          <div className="relative">
            <input className="instagram_link__input outline-none rounded-sm px-5 py-5" />
            <span className="instagram__text block gap-2 flex absolute px-3 bottom-12 py-0.5 text-sm left-3 rounded-md">
              <span>Instagram</span> <span>Link</span>
            </span>
          </div>

          <div className="relative">
            <input className="share_about__input outline-none rounded-sm px-5 py-5" />
            <span className="share_about__text block text-sm gap-2 flex absolute px-3 bottom-40 py-0.5 text-sm left-3 rounded-md">
              <span>Share About Your</span> <span>Self</span>
            </span>
          </div>

          <div className="relative">
            <input className="name__input outline-none rounded-sm px-5 py-5" />
            <span className="name__text absolute px-3 bottom-12 py-0.5 text-sm left-3 rounded-md">
              Choose skills
            </span>
          </div>

          <div className="relative">
            <input className="name__input outline-none rounded-sm px-5 py-5" />
            <span className="name__text absolute px-3 bottom-12 py-0.5 text-sm left-3 rounded-md">
              Facebook link
            </span>
          </div>

          <div className="relative">
            <input className="name__input outline-none rounded-sm px-5 py-5" />
            <span className="name__text absolute px-3 bottom-12  text-sm left-3 rounded-md">
              Youtube link
            </span>
          </div>
          <div className="flex justify-center">
            <button className="register__btn py-1.5 rounded-sm">
              Register
            </button>
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};

export default MobileProduction;
