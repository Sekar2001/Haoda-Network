// import React from 'react'
import './Game.css'
import MobileFooter from '../Footer/MobileFooter'
import Underline from '../../assets/rectangle.svg'
import MobileNavbar from '../Navbar/MobileNavbar'

const MobileGame = () => {
  return (
    <>
       <div className='text-lg'>
        <MobileNavbar />
        <div className='game__background_img py-28'>
           <div className='flex justify-start pl-10 align-items-center'><span className='ott_heading'>Games</span></div> 
        </div>
        <div className='comming__soon__backround pb-64 text-center'>
            <div className='py-10'>
                <span className='comming__soon__heading'>Comming Soon</span>
                 <div className='flex justify-center'> <img src={Underline} alt="Rectangle" className="w-64 mt-4" /></div>
            </div>
        </div>
        <MobileFooter />
    </div>
    </>
  )
}

export default MobileGame