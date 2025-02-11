import React from 'react';
import haodanetworkLogo from '../../assets/logo.png'
import './Footer.css'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';
import { GrLocation } from 'react-icons/gr';
import { LuPhoneCall } from 'react-icons/lu';

const MobileFooter = () => {
  return (
    <div className='footer__background text-lg text-lg grid gap-10 py-10'>
        <div className='flex flex-wrap gap-y-5 justify-between px-10'>
            <div className=''>
                <img className='h-14 w-full' src={haodanetworkLogo} alt='image' />
                
            </div>
            <div>
                <span className='follow__us__heading'>Follow Us</span>
                <div className='flex gap-2 pt-4'>
                   <span className='follow__us__icon rounded-full p-2 text-white'><BsInstagram /></span>
                   <span className='follow__us__icon rounded-full p-2 text-white'><FaFacebookF /></span>
                   <span className='follow__us__icon rounded-full p-2 text-white'><FaLinkedinIn /></span>
                   <span className='follow__us__icon rounded-full p-2 text-white'><FaXTwitter /></span>
                </div>
            </div>
            <div className='pr-5 grid gap-3'>
                <span className='contact_us_heading'>Contact Us</span>
                <div className='grid gap-3'>
                <div className='flex gap-3 justify-start text-md text-white items-center'>
                    <span className='text-2xl'><TfiEmail /></span>
                    <span className='text-sm'>support@haodanetwok.com</span>
                </div>
                <div className='flex gap-3 justify-start text-md text-white items-center'>
                    <span className='text-2xl'><LuPhoneCall /></span>
                    <div>
                      <span className='block'>94890396064</span>
                      <span className='block'>94890396064</span>
                    </div>
                </div>
                <div className='flex gap-3 justify-start text-md text-white'>
                    <span className='text-2xl pt-1.5'><GrLocation /></span>
                    <div>
                       <span className='flex flex-wrap'>No. 853, 4th Floor, Thiyagaraja Complex,</span> <span className='block'>Poonamallee High Road, Chennai,</span> <span className='block'>Tamil Nadu - 600010</span>
                    </div>
                </div>
                </div>
            </div>
            <div className='grid gap-3'>
                <span className='contact_us_heading'>Navigation</span>
                <div className='flex flex-col gap-2'>
                   <a href='/'><span className='text-white'>Home</span></a>
                   <a href='/ott'><span className='text-white'>OTT</span></a>
                   <a href='/swipe'><span className='text-white'>Swipe</span></a>
                   <a href='/game'> <span className='text-white'>Game</span></a>
                   <a href='/aboutus'><span className='text-white'>About Us</span></a>
                   <a href='/production'><span className='text-white'>Production House</span></a>
                   <a href='/contactus'> <span className='text-white'>Contact Us</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileFooter