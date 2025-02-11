// import React from 'react'
import './Swipe.css'
import MobileNavbar from '../Navbar/MobileNavbar'
import Underline from '../../assets/rectangle.svg'
import MobileFooter from '../Footer/MobileFooter'

const MobileSwipe = () => {
  return (
    <div className='text-lg'>
        <MobileNavbar />
        <div className='Swipe__background_img py-28'>
           <div className='flex justify-start pl-10 align-items-center'><span className='ott_heading '>Swipe</span></div> 
        </div>
        <div className='comming__soon__background'>
            <div className='py-10'>
                  <span className='comming__soon__heading text-center'><div className='text-center'>Coming Soon</div></span>
                 <div className='flex justify-center'> <img src={Underline} alt="Rectangle" className="w-64 mt-4" /></div>
            </div>
        </div>
      <MobileFooter />
    </div>
  )
}

export default MobileSwipe