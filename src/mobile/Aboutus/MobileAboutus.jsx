import React from 'react'
import './aboutus.css'
import exclusiveHand from '../../assets/exclusive.png'
import live  from '../../assets/live.png'
import rating  from '../../assets/rating.png'
import monitor  from '../../assets/monitor.png'
import touch  from '../../assets/touch.png'
import sampleImg from '../../assets/sampleImage.png'
import MobileNavbar from '../Navbar/MobileNavbar'
import MobileFooter from '../Footer/MobileFooter'
import Underline from '../../assets/rectangle.svg'

const MobileAboutus = () => {
  return (
    <div className='text-lg'>
        <MobileNavbar />
        <div className='about__background__img py-10 sm:py-20 px-5 sm:pl-10'>
            <span className='block about__us__heading mb-3'>Welcome to Haoda Network</span>
            <span className='block about__us__para font-inter font-semibold'>Your go-to hub for Gaming thrills and OTT adventures.<br/> We bring Players, Developers, and Fans together no one vibrant platform. Casual gamer or pro. Developer or Enthusiast, we've got you covered</span>
        </div>
        <div className='background_color px-10 sm:px-14 py-10'>
            <span className='about__us__heading mb-1 block text-center font-semibold font-inter'>About Us</span><div className='flex justify-center mb-10'><img className='w-64' src={Underline} /></div>
            <div>
              <span className='about__us__Bigheading block'><div className='text-center'>Who we Are</div></span>
              <span className='about__who__para'><div className='text-center font-inter'>Gaming and innovation drive us. our team of tech-savvy experts and creative pros delivers a seamless, diverse gaming experiance. Form indie gems to blocknuster hits, we've curated something for everyone</div></span>
              <div className='who-we-are_img flex justify-center items-center py-10'><img src={sampleImg} alt='' /></div>
            </div>

            <div className='py-5'>
              <span className='about__us__heading block'><div className='text-center'>Our Mission</div></span>
              <span className='about__who__para'><div className='text-center font-inter'>Gaming and innovation drive us. our team of tech-savvy experts and creative pros delivers a seamless, diverse gaming experiance. Form indie gems to blocknuster hits, we've curated something for everyone</div></span>
            </div>
        </div>
        <div className='What_We_Offer_background flex flex-col py-10'>
            <div className='about__us__heading pb-1 text-center'>What We Offer</div>
            <div className='flex justify-center mb-10'><img className='w-64' src={Underline} /></div>
            <div className='grid gap-10 justify-center py-20 aboutus_background_game'>
            <div className='flex items-center What_We_Offer_box px-14 gap-8'>
                <div>
                    <button className='Signal__icon p-5 rounded-2xl'><img src={live} alt='' /></button>
                </div>
                <div>
                    <span className='block DiverseGameLibrary_heading'>Diverse Game Library</span>
                    <span className='block DiverseGameLibrary_text font-inter'>Discover top-notch games across genres and platforms</span>
                </div>
            </div>

            <div className='flex items-center What_We_Offer_box px-14 gap-8'>
                <div className='text-right'>
                    <span className='block DiverseGameLibrary_heading'>OTT Gaming</span>
                    <span className='block DiverseGameLibrary_text font-inter'>Stream games anytime, anywhere, no high-end gear needed</span>
                </div>
                <div>
                    <button className='Signal__icon p-5 rounded-2xl'><img src={rating} alt=''  /></button>
                </div>   
            </div>

            <div className='flex items-center What_We_Offer_box px-14 gap-8'>
                <div>
                    <button className='Signal__icon p-5 rounded-2xl'><img src={exclusiveHand} alt='' /></button>
                </div>
                <div>
                    <span className='block DiverseGameLibrary_heading'>Developer Support</span>
                    <span className='block DiverseGameLibrary_text font-inter'>Showcase, connect, and monetize your creations</span>
                </div>
            </div>

            <div className='flex items-center What_We_Offer_box px-14 gap-8'>
                <div className='text-right'>
                    <span className='block DiverseGameLibrary_heading'>Community Features</span>
                    <span className='block DiverseGameLibrary_text font-inter'>Join tournaments, climb leaderboards, and make connections</span>
                </div>
                <div>
                    <button className='Signal__icon p-5 rounded-2xl'><img src={monitor} alt='' /></button>
                </div>   
            </div>

            <div className='flex items-center What_We_Offer_box px-14 gap-8'>
                <div>
                    <button className='Signal__icon p-5 rounded-2xl'><img src={touch} alt='' /></button>
                </div>
                <div>
                    <span className='block DiverseGameLibrary_heading'>Next-Gen Tech</span>
                    <span className='block DiverseGameLibrary_text font-inter'>Enjoy fast, reliable, and visually stunning gameplay</span>
                </div>
            </div></div>
        </div>
        <div className='Why_Choose_background py-10'>
          <div className='about__us__heading pb-1 text-center'>Why Choose Us?</div>
          <div className='flex justify-center mb-10'><img src={Underline} className='w-64' alt='underline' /></div>
         <div className='flex justify-center'> <div className='grid grid-cols-2 px-5 sm:px-10 gap-5 justify-center '>
              <div className='text-center border border-2 rounded-2xl p-2 sm:p-5 border-yellow-500 Why_Choose_box h-[140px]'>
                <div className='Why_Choose_heading pb-2  font-inter font-bold'>Easy Access</div>
                <div className='Why_Choose_text font-inter'>Game on any device with our inituitive platform</div>
              </div>

              <div className='text-center border border-2 rounded-2xl p-2 sm:p-5 border-yellow-500 Why_Choose_box  h-[140px]'>
                <div className='Why_Choose_heading pb-2 font-inter font-bold'>Global Community</div>
                <div className='Why_Choose_text font-inter '>Connect with gamers and developers worldwide</div>
              </div>

              <div className='text-center border border-2 rounded-2xl p-2 sm:p-5 border-yellow-500 Why_Choose_box  h-[140px]'>
                <div className='Why_Choose_heading pb-2 font-inter font-bold'>Tailored For you</div>
                <div className='Why_Choose_text px-3 sm:px-5 font-inter'>Personalized picks to match your vibe</div>
              </div>

              <div className='text-center border border-2 rounded-2xl p-2 sm:p-5 border-yellow-500 Why_Choose_box  h-[140px]'>
                <div className='Why_Choose_heading pb-2 font-inter font-bold'>Trusted Partner</div>
                <div className='Why_Choose_text sm:px-5 font-inter '>Secure, transparent, and user-first</div>
              </div>
          </div> </div>

          <div className='py-10 px-10'>
             <div className='about__us__heading pb-1 text-center'>Join Us</div>
             <div className='flex justify-center mb-10'><img src={Underline} className='w-64' alt='underline' /></div>
             <div className='Join__Us__paraText font-inter'>Dive into gaming's future with Haoda Network's Play, create, or explore the possibilities are endless. Let's make gaming extraordinary</div>
             <div className='about__us__heading pb-1 text-center font-inter'>Start now!</div>

          </div>
        </div>
        <MobileFooter />
    </div>
  )
}

export default MobileAboutus