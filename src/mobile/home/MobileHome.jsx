import  { useState } from "react";
import "./home.css";
import "../Contactus/Contact.css";
// import 'swiper/css'
// import Navbar from '../../Navbar'
// import Footer from '../Footer/Footer'
import {
  MdDoubleArrow,
  MdOutlineFileDownload,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
// import rummy from "../HomePage/rummy-image.png"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { TiTick } from "react-icons/ti";
// import Marquee from 'react-fast-marquee'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import {EffectCoverflow, Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/bundle';
// import image from "../../assets/Mask group-1.png";
import image1 from "../../assets/face.png";
// import image2 from '../Images/swipe/background-img.jpeg'
import icon from "../../assets/update.png";
import icon1 from "../../assets/hub.svg";
import icon2 from "../../assets/location.svg";
import icon3 from "../../assets/diamond.svg";
import icon4 from "../../assets/navi.svg";
import MobileNavbar from "../Navbar/MobileNavbar";
import MobileFooter from "../Footer/MobileFooter";
import round5 from "../../assets/trophy.png";
import round6 from "../../assets/payment.png";
import round1 from "../../assets/insta.png";
import round2 from "../../assets/end.png";
import round4 from "../../assets/date.png";
import round3 from "../../assets/management.png";
import round7 from "../../assets/support.png";
// import Image from "./image";
import Marquee from "react-fast-marquee";

import slide_image_1 from "../../assets/Mask group-1.png";
import slide_image_2 from "../../assets/Mask group-2.png";
import slide_image_3 from "../../assets/Mask group-3.png";
import slide_image_4 from "../../assets/Mask group-4.png";
import slide_image_5 from "../../assets/Mask group-5.png";
import slide_image_6 from "../../assets/Mask group-6.png";
import slide_image_7 from "../../assets/Mask group-7.png";
import slide_image_8 from "../../assets/Mask group-8.png";
// import wa from "../../assets/wa.png";

const MobileHome = () => {
  const [collapse, setCollapse] = useState(true);
  const [collapse1, setCollapse1] = useState(true);
  const [collapse2, setCollapse2] = useState(true);
  const [collapse3, setCollapse3] = useState(true);
  const [collapse4, setCollapse4] = useState(true);

  const [select, setSelect] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const data = [
    {
      icon: <TbWorldSearch />,
      title: "Browse the Games-Tab",
      content: "Explore our extensive library of games",
    },
    {
      icon: <IoGameControllerOutline />,
      title: "Select and Download",
      content: "Choose your favorite game and start playing instantly",
    },
    {
      icon: <MdOutlineFileDownload />,
      title: "Dowload the Haoda Network App",
      content: "Available on both iOS and Android platforms",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextContent = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousContent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentState = data[currentIndex];

  const imageData = [
    {
      id: 1,
      src: "/Images/rummy-image.png",
      alt: "Image 1",
      content: "Rummy",
    },
    {
      id: 2,
      src: "/Images/fantacy-cricket",
      alt: "Image 2",
      content: "Rummy",
    },
    {
      id: 3,
      src: "/Images/andar_bagar.png",
      alt: "Image 3",
      content: "Rummy",
    },
    {
      id: 4,
      src: "/Images/rummy-image.png",
      alt: "Image 4",
      content: "Rummy",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setIndex(next),
  };

  const [index, setIndex] = useState(0);

  return (
    <div className="text-lg">
      <MobileNavbar />
      <div className="py-20 homepage__background">
        <span className="block welcome__text pb-5 font-extrabold shadow-sm">
          Welcome to
        </span>
        <span className="block Haoda__text font-extrabold shadow-md text-xs sm:text-sm">
          Haoda Network
        </span>
        <span className="block homepage__para px-10 mt-8 ">
          The ultimate entertainment experience, where gaming, streaming, and
          mobile game subscriptions collide!
        </span>
      </div>
      <div className="py-10 background_color bg-[#1F2131]">
        <span className="block top-tier__para px-24 font-inter">
          Access top-tier mobile games, exclusive OTT content, and endless fun
          all in one place
        </span>
      </div>
      <div className="Games__HaodaNetwork__background ">
       
        <div className="Games__HaodaNetwork__background_img">
          <div className=" grid gap-2 py-5">
            <span className="block Games__HaodaNetwork__heading">
              Games on Haoda Network OTT Platform
            </span>
            <span className="block Games__HaodaNetwork__para px-16 font-inter">
              
              Our app offers a diverse range of exciting games for every<br/> gamer.
              Here&apos;s what you can enjoy:
            </span>
          </div>

          <div className="background_color">
            <div className="py-10">
              <div className="flex px-5 justify-between pb-8 items-center">
                <div className="text-lg text-yellow-500 font-inter font-semibold">
                  Fantasy Game{" "}
                </div>
                <button className="text-lg bg-[#373846] text-white font-inter px-2 py-0.5 rounded-sm">
                  See All
                </button>
              </div>
              <Marquee pauseOnHover={true}>
                <div>
                  <img
                    className="mx-2 slide_image text-white"
                    src={slide_image_5}
                    alt="slide_image"
                  />
                  <div className="text-center text-white font-bold">
                    Andar Bahar
                  </div>
                </div>
                <div>
                  <img
                    className="mx-2 slide_image"
                    src={slide_image_6}
                    alt="slide_image"
                  />
                  <div className="text-center text-white font-bold">
                    Cricket Fantacy
                  </div>
                </div>
                <div>
                  <img
                    className="mx-2 slide_image"
                    src={slide_image_7}
                    alt="slide_image"
                  />
                  <div className="text-center text-white font-bold">Rummy</div>
                </div>
                <div>
                  <img
                    className="mx-2 slide_image"
                    src={slide_image_8}
                    alt="slide_image"
                  />
                  <div className="text-center text-white font-bold">
                    Team Patti
                  </div>
                </div>
              </Marquee>
            </div>

            <div className="py-10">
              <div className="flex px-5  justify-between pb-8 items-center">
                <div className="text-lg text-yellow-500 font-inter font-semibold">
                  Traditional Game{" "}
                </div>
                <button className="text-lg bg-[#373846] text-white font-inter px-2 py-0.5 rounded-sm">
                  See All
                </button>
              </div>
              <Marquee pauseOnHover={true}>
                <div>
                  <img
                    className="mx-2 slide_image text-white"
                    src={slide_image_1}
                    alt="slide_image"
                  />
                  <div className="text-center text-white font-bold">Ludo</div>
                </div>
                <div>
                  <img
                    className="mx-2 slide_image"
                    src={slide_image_2}
                    alt="slide_image"
                  />
                  <div className="text-center text-white font-bold">Carrom</div>
                </div>
                <div>
                  <img
                    className="mx-2 slide_image"
                    src={slide_image_3}
                    alt="slide_image"
                  />
                  <div className="text-center text-white font-bold">
                    Snake&Ladders
                  </div>
                </div>
                <div>
                  <img
                    className="mx-2 slide_image"
                    src={slide_image_4}
                    alt="slide_image"
                  />
                  <div className="text-center text-white font-bold">
                    Brain Baazi
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
          {/* <div className='background_color py-10'>
          <div className='flex justify-between pb-10 px-5'>
            <div className='partnership__text_yelow'>Fantacy Game</div> <button className='text-md font-bold py-1 px-4 rounded-sm bg-gray-600 text-white '>See all</button>
          </div> */}
          {/* <div className='flex justify-center items-center'><Swiper 
             grabCursor={true}
             centeredSlides={true}
             loop={true}
             slidesPerView={2}  
              spaceBetween={20}
              autoplay={{ delay: 3000 }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              slideShadows: true,
            }}
            effect={'coverflow'}
             className='swiper_container  px-10 gap-10'
             pagination={{el:".swiper-pagination-active", clickable:true}}
             modules={[EffectCoverflow, Pagination, Navigation]}>
             <SwiperSlide className='grid justify-center'>
                <img className='swiper_images ' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>

             </SwiperSlide>
             <SwiperSlide>
                <img className='swiper_images' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>
             </SwiperSlide>
             <SwiperSlide>
                <img className='swiper_images' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>

             </SwiperSlide>
             <SwiperSlide>
                <img className='swiper_images' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>

             </SwiperSlide>
             <SwiperSlide>
                <img className='swiper_images' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>

             </SwiperSlide>
             <div className='flex justify-center text-white'><div className='swiper-pagination-active flex text-white justify-center'></div></div>
          </Swiper></div>
    </div> */}

          {/* <div className='background_color py-10'>
          <div className='flex justify-between pb-10 px-5'>
            <div className='partnership__text_yelow'>Traditional Games</div> <button className='text-md font-bold py-1 px-4 rounded-sm bg-gray-600 text-white '>See all</button>
          </div>
          <Swiper 
             grabCursor={true}
             centeredSlides={true}
             loop={true}
             slidesPerView={2}  
              spaceBetween={20}
              autoplay={{ delay: 3000 }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              slideShadows: true,
            }}
            effect={'coverflow'}
             className='swiper_container  px-10 gap-10'
             pagination={{el:".swiper-pagination-active", clickable:true}}
             modules={[EffectCoverflow, Pagination, Navigation]}>
             <SwiperSlide className='grid justify-center'>
                <img className='swiper_images ' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>

             </SwiperSlide>
             <SwiperSlide>
                <img className='swiper_images' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>
             </SwiperSlide>
             <SwiperSlide>
                <img className='swiper_images' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>

             </SwiperSlide>
             <SwiperSlide>
                <img className='swiper_images' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>

             </SwiperSlide>
             <SwiperSlide>
                <img className='swiper_images' src={image} alt='image' />
                <div className='text-center text-white text-xl pt-5'>Image</div>

             </SwiperSlide>
             <div className='flex justify-center text-white'><div className='swiper-pagination-active flex text-white justify-center'></div></div>
          </Swiper>
    </div> */}
        </div>
      </div>

      <div className="background_color py-10">
        <div className="flex justify-center">
          <span className="text-yellow-500 text-center font-semibold pb-8">
            Why Choose Haoda Network?
          </span>
        </div>
        <div className="px-10 home_dropdown_page grid gap-5">
          <div className="text-white ml-8 mr-8">
            <div
              className="flex justify-between items-center"
              onClick={() => setCollapse(!collapse)}
            >
              <img className="w-10 h-10" src={icon1} />
              <span className="all-in-one-hub text-center">
                All in one club
              </span>
              <span
                className={`all-in-one-hub-icon rounded-full shadow-lg ${
                  collapse ? "rotate-0" : "-rotate-180"
                }`}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>

            {!collapse && (
              <div className="mt-3 border-yellow-500 border-t-2 text-lg">
                <span>
                  Enjoy premium games and top-rated streaming content without
                  switchng platforms
                </span>
              </div>
            )}
          </div>
          <div className="text-white ml-8 mr-8">
            <div
              className="flex justify-between items-center"
              onClick={() => setCollapse1(!collapse1)}
            >
              <img className="w-10 h-10" src={icon2} />
              <span className="all-in-one-hub text-center">
                Play Anytime, Anywhere
              </span>
              <span
                className={`all-in-one-hub-icon rounded-full shadow-lg ${
                  collapse1 ? "rotate-0" : "-rotate-180"
                }`}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>

            {!collapse1 && (
              <div className="mt-3 border-yellow-500 border-t-2">
                <span className="text-lg">
                  Stream and play on any device, anytime, interruption-free
                </span>
              </div>
            )}
          </div>
          <div className="text-white ml-8 mr-8">
            <div
              className="flex justify-between items-center"
              onClick={() => setCollapse2(!collapse2)}
            >
              <img className="w-10 h-10" src={icon3} />
              <span className="all-in-one-hub text-center">
                Exclusive Access
              </span>
              <span
                className={`all-in-one-hub-icon rounded-full shadow-lg ${
                  collapse2 ? "rotate-0" : "-rotate-180"
                }`}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>

            {!collapse2 && (
              <div className="mt-3 border-yellow-500 border-t-2">
               
                <span className="mt-1 text-lg">
                  Get early releases, premium features, and exclusive games with
                  unlimited streaming
                </span>
              </div>
            )}
          </div>
          <div className="text-white ml-8 mr-8">
            <div
              className="flex justify-between items-center"
              onClick={() => setCollapse3(!collapse3)}
            >
              <img className="w-10 h-10" src={icon4} />
              <span className="all-in-one-hub text-center">
                Effortless Experiance
              </span>
              <span
                className={`all-in-one-hub-icon rounded-full shadow-lg ${
                  collapse3 ? "rotate-0" : "-rotate-180"
                }`}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            {!collapse3 && (
              <div className="mt-3 border-yellow-500 border-t-2 text-lg">
               
                <span>
                  Switch between games and shows seamlessly with our
                  user-friendly interface
                </span>
              </div>
            )}
          </div>
          <div className="text-white ml-8 mr-8">
            <div
              className="flex justify-between items-center"
              onClick={() => setCollapse4(!collapse4)}
            >
              <img className="w-10 h-10" src={icon} />
              <span className="all-in-one-hub text-center">
                Stay Updated
              </span>
              <span
                className={`all-in-one-hub-icon rounded-full shadow-lg ${
                  collapse4 ? "rotate-0" : "-rotate-180"
                }`}
              >
                <MdOutlineKeyboardArrowDown />
              </span>
            </div>
            {!collapse4 && (
              <div className="mt-3 border-yellow-500 border-t-2">
                <span className="pt-5 text-lg">
                  Discover fresh games and new content regularly with exciting
                  updates rolling in
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="Games__HaodaNetwork__background_img2">
        <div className="background_color games_ensure_text py-5 text-white text-center font-inter  text-[13px] px-8">
          These games ensure there&apos;s something for everyone, from casual gamesrs
          to adrenaline junkies, making Haoda Network the ultimate the ultimate
          entertainment destination!
        </div>
        <div className="getting_start_background_color py-10">
          Getting Started
        </div>
        <div className="background_color py-10">
          <div className="flex justify-center items-center gap-5">
            <div
              onClick={previousContent}
              className="getting_start_arrow rotate-180"
            >
              <MdDoubleArrow />
            </div>
            <div className="getting_start_box relative mt-10 px-5">
              <div className="grid">
                <div className="text-lg text-center text-yellow-400 font-bold">
                  {currentState.title}
                </div>
                <div className="text-[#434343] font-inter text-center font-bold">
                  {currentState.content}
                </div>
              </div>
              <div className="rounded-full absolute bottom-36 getting_start_circlebox">
                {currentState.icon}
              </div>
            </div>
            <div onClick={nextContent} className="getting_start_arrow">
              <MdDoubleArrow />
            </div>
          </div>
        </div>
      </div>
      <div className="getting_start_background_color font-inter py-10">
        Join Haoda Network Today
      </div>

      <div className="getting_start_background_color py-10">
        <span className="text-white block font-inter">
          Your ultimate gaming and streaming destination awaits!
        </span>
        <span className="block">Step up your Game with Hooda Network!</span>
      </div>

      <div className="Why_Choose_background py-10">
        <div className="flex justify-center">
          {" "}
          <div className="grid grid-cols-2 px-5 sm:px-10 gap-5 justify-center ">
            <div className="text-center border border-2 rounded-2xl p-5 border-yellow-500 Why_Choose_box h-[130px]" >
              <div className="Why_Choose_text font-inter">
                Game on any device with our inituitive platform
              </div>
            </div>

            <div className="text-center border border-2 rounded-2xl p-5 border-yellow-500 Why_Choose_box h-[130px]">
              <div className="Why_Choose_text  font-inter">
                Connect with gamers and developers worldwide
              </div>
            </div>

            <div className="text-center border border-2 rounded-2xl p-5 border-yellow-500 Why_Choose_box h-[130px]">
              <div className="Why_Choose_text sm:px-5  font-inter">
                Personalized picks to match your vibe
              </div>
            </div>

            <div className="text-center border border-2 rounded-2xl p-5 border-yellow-500 Why_Choose_box h-[130px]">
              <div className="Why_Choose_text sm:px-5  font-inter">
                Secure, transparent, and user-first
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-200 text-[13px] text-center pt-8 font-inter font-medium italic">
          Join Haoda Network today and level up your entertainment
        </div>
      </div>

      <div className="p-5 background_color">
        <div>
          <span className="block text-yellow-500 font-extrabold text-center font-chakra-petch text-lg">
            Haoda Network: Your Ultimate Gaming Aggregator
          </span>
          <span className="block text-white font-bold text-center font-inter text-[13px] ">
            Ulock the future of gaming with our powerful platform
          </span>
        </div>
        <div className="p-5 my-5 rounded-xl grid gap-8 contact__bo bg-black">
          <div className="text-center">
            <span className="text-yellow-500 font-extrabold">
              Contact Us
            </span>
            <div className="w-24 mx-auto mt-1 border-b-2 border-yellow-500"></div>
          </div>
         
          <div className="relative">
            <input type="text" className="name__input rounded-lg  px-5 py-5" />
            <span className="name__text absolute px-3 bottom-12 py-0.5 text-sm left-5 rounded-md">
              Full Name
            </span>
          </div>

          <div className="relative">
            <input className="instagram_link__input rounded-lg px-5 py-5" />
            <span className="instagram__text block gap-2 font-bold text-sm flex absolute px-3 bottom-12 py-0.5 left-5 rounded-md">
              Email
            </span>
          </div>

          <div className="relative">
            <input className="name__input rounded-lg px-5 py-5" />
            <span className="name__text absolute px-3 bottom-12 text-sm py-0.5 left-5 rounded-md">
              Company
            </span>
          </div>

          <div className="relative">
            <input className="share_about__input rounded-lg px-5 py-5" />
            <span className="message__text block gap-2 flex text-sm absolute px-3 bottom-40 py-0.5 left-5 rounded-md">
              Message
            </span>
          </div>

          <div className="flex justify-end">
            <button className="register__btn py-1.5 text-lg rounded-sm">
              Submit
            </button>
          </div>
        </div>
        <div className="pt-5">
          <span className="block text-yellow-500 font-bold text-center text-lg">
            Explore Haoda Network&apos;s Game Aggregator
          </span>
          <span className="block text-white font-semibold font-inter text-center  text-[13px]">
            Haoda Neywork is your one-stop hub for top-tier games and seamless
            integration. Here&apos;s what we offer:
          </span>
        </div>
      </div>

      <div className="background_color overflow-auto Instant-common-box py-40">
        <div className="text-white hypen_text text-nowrap flex text-6xl font-bold">
          <div>----------------------------------------------------------</div>
        </div>
        {/* <hr className=' border-4 Instant-border w-full border-dashed' /> */}
        <div className="">
          <div className="Instant-Integration-box Instant-Integration-box1">
            <div className="flex justify-center relative z-10">
              <button className="Instant-Integration-circlebox rounded-full">
                <img src={round1} alt="" />
              </button>
              {/* <hr className=' border-4 Instant-border w-full border-dashed' /> */}
            </div>
            {/* <hr className=' border-4 Instant-border absolute top-10 w-full border-dashed' /> */}
            <div className="text-center Instant-Integration-box">
              <span className="block partnership__text_yelow">
                Instant Integration
              </span>
              <span className=" text-white line__text__simply text-sm text-center">
                simply operations with a single API for smooth game aggregation
              </span>
            </div>
          </div>
          <div className="Instant-Integration-box Instant-Integration-box2">
            <div className="text-center Instant-Integration-box">
              <span className="block partnership__text_yelow">
                Endless Game Variety
              </span>
              <span className=" text-white text-sm text-center">
                Access RNG, live dealer, and more, for nonstop entertainment
              </span>
            </div>
            {/* <hr className=' border-4 Instant-border w-full border-dashed' /> */}
            <div className="flex justify-center relative z-10">
              <button className="Instant-Integration-circlebox rounded-full">
                <img src={round2} alt="" />
              </button>
            </div>
            {/* <hr className=' border-4 absolute  bottom-10 Instant-border w-full border-dashed' /> */}
          </div>
          <div className="Instant-Integration-box Instant-Integration-box3">
            <div className="flex justify-center relative z-10">
              <button className="Instant-Integration-circlebox rounded-full">
                <img src={round3} alt="" />
              </button>
            </div>
            {/* <hr className=' border-4 Instant-border absolute top-10 w-full border-dashed' /> */}
            <div className="text-center Instant-Integration-box">
              <span className="block partnership__text_yelow">
                Centralized Management
              </span>
              <span className="text-white text-sm text-center">
                Easily manage games, track and report via our unified back
                office
              </span>
            </div>
          </div>

          <div className="Instant-Integration-box Instant-Integration-box4">
            <div className="text-center Instant-Integration-box">
              <span className="block partnership__text_yelow">
                Continuous Updates
              </span>
              <span className=" text-white text-sm text-center">
                Always fresh with new titles and exclusive releases
              </span>
            </div>
            {/* <hr className=' border-4 Instant-border w-full border-dashed' /> */}
            <div className="flex justify-center relative z-10">
              <button className="Instant-Integration-circlebox rounded-full">
                <img src={round4} alt="" />
              </button>
            </div>
            {/* <hr className=' border-4 absolute  bottom-10 Instant-border w-full border-dashed' /> */}
          </div>

          <div className="Instant-Integration-box Instant-Integration-box5">
            <div className="flex justify-center  z-10 relative">
              <button className="Instant-Integration-circlebox rounded-full">
                <img src={round5} alt="" />
              </button>
            </div>
            {/* <hr className=' border-4 Instant-border absolute top-10 w-full border-dashed'/> */}
            <div className="text-center Instant-Integration-box">
              <span className="block partnership__text_yelow">
                Custom Tournments
              </span>
              <span className=" text-white text-sm text-center">
                Engage players with exciting, personalized challenges
              </span>
            </div>
          </div>

          <div className="Instant-Integration-box Instant-Integration-box6">
            <div className="text-center Instant-Integration-box">
              <span className="block partnership__text_yelow">
                Crypto-Friendly
              </span>
              <span className=" text-white text-sm text-center">
                Secure and easy crypto payments
              </span>
            </div>

            <div className="flex relative z-10 justify-center ">
              <button className="Instant-Integration-circlebox rounded-full">
                <img src={round6} alt="" />
              </button>
            </div>
            {/* <hr className=' border-4 absolute  bottom-10 Instant-border w-full border-dashed' /> */}
          </div>
          {/* <hr className=' border-4 w-full border-dashed' /> */}
          <div className="Instant-Integration-box Instant-Integration-box7 ">
            <div className="flex justify-center z-10 relative ">
              <button className="Instant-Integration-circlebox rounded-full">
                <img src={round7} alt="" />
              </button>
            </div>
            {/* <hr className=' border-4 Instant-border absolute top-10 w-full border-dashed' /> */}
            <div className="text-center Instant-Integration-box">
              <span className="block partnership__text_yelow">
                24/7 Support
              </span>
              <span className=" text-white text-sm text-center">
                reliable help, anytime you need it
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="partnership__background px-8 sm:pl-20 flex justify-center py-10">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div className="partnership__box pl-5 sm:px-10 border-dashed border-l-2 grid gap-y-10">
            <div className="relative">
              <div className="flex mb-5 sm:ml-3 partnerchip2 absolute  justify-start">
                <div className="underline3 p-1 text-2xl rounded-full">
                  <TiTick className="" />
                </div>
              </div>
              {/* <div className=''>Why partner with Haoda Network</div> */}
              <span className="partnership__text_yelow font-semibold">
                Why partner with Haoda Network
              </span>
              <div className="text-white text-sm font-inter">
                Haoda Network leads the way in innovation with its unified
                Here&apos;s the ideal partner:
              </div>
            </div>
            <div className="relative">
              <div className="flex mb-5 sm:ml-3 partnerchip absolute justify-start">
                <div className="underline2 rounded-full"></div>
              </div>
              <span className="partnership__text_yelow font-semibold">
                Fast Product Launch:
              </span>
              <div className="text-white text-sm font-inter">
                Get up and running in 1-4 weeks
              </div>
            </div>
            <div className="relative">
              <div className="flex mb-5 sm:ml-3 partnerchip absolute justify-start">
                <div className="underline2 rounded-full"></div>
              </div>
              <span className="partnership__text_yelow font-semibold">
                Exceptional Offers
              </span>
              <div className="text-white text-sm font-inter">
                Full range of products. payments, and services to grow your
                business
              </div>
            </div>
            <div className="relative">
              <div className="flex mb-5 sm:ml-3 partnerchip justify-start absolute">
                <div className="underline2 rounded-full"></div>
              </div>
              <span className="partnership__text_yelow font-semibold">
                Gamification:
              </span>
              <div className="text-white text-sm font-inter">
                Boost player engagement with exciting features
              </div>
            </div>
            <div className="relative">
              <div className="flex mb-5 sm:ml-3 partnerchip justify-start absolute">
                <div className="underline2 rounded-full"></div>
              </div>
              <span className="partnership__text_yelow font-semibold">Proven Success:</span>
              <div className="text-white text-sm font-inter">
                Trusted by clients-cehck their testimonials
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-10 background_color">
        <img className="w-3/4 mt-8" src={image1} alt="" />
      </div>
      <MobileFooter />
    </div>
  );
};

export default MobileHome;
