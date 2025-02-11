import React from 'react'
import './Contact.css'
import { BsClockHistory } from 'react-icons/bs'
import { LuPhoneCall } from 'react-icons/lu'
import { TfiEmail } from 'react-icons/tfi'
import { TiTick } from 'react-icons/ti'
import { GrLocation } from 'react-icons/gr'
import MobileNavbar from '../Navbar/MobileNavbar'
import HandImg from '../../assets/hand.png'
import MobileFooter from '../Footer/MobileFooter'
import Underline from '../../assets/rectangle.svg'
import map from '../../assets/address.png'

const MobileContactus = () => {
  return (
    <div className='text-lg'>
        <MobileNavbar />
      <div>
         <div className='contact__background_img px-10 sm:px-20 py-20'>
           <div className='flex justify-start align-items-center'><span className='ott_heading'>We're here to help!</span></div> 
           <span className='text-white font-inter text-[13px]'>Whether you have questions, feedback, or partnership <br/>inquiries, our team is ready to assist you</span>
        </div>
        <div className='comming__soon__backround'>
            <div className='py-8 text-center'>
                <span className='comming__soon__heading block font-inter'>Get in Touch</span>
                <div className='flex justify-center'> <img src={Underline} alt="Rectangle" className="w-64 mt-4" /></div>
            </div>
        </div>

        <div className='contact__second__background px-10 sm:pl-20 py-10'>
            <span className='contact__sales__heading block font-bold'>Contact Us</span>
            <div className='flex mb-5 ml-2 justify-start'><div className='underline1'></div></div>

            <div className='flex mb-5 gap-5'>
                <div className='contact_sales_icon mt-3'><TfiEmail /></div>
                <div>
                    <span className='contact_sales_text block font-inter'>For general support or queries, reach us at</span>
                    <span className='contact_sales_heading block'>support@haodanetwork.com</span>

                </div>
            </div>

            <div className='flex mb-5 gap-5'>
                <div className='contact_sales_icon mt-3'><LuPhoneCall /></div>
                <div>
                    <span className='contact_sales_text block font-inter'>For urgent matters, contact our team at</span>
                    <span className='contact_sales_heading block'>1-800-GAMING</span>
                    
                </div>
            </div>

            <div className='flex mb-5 gap-5'>
                <div className='contact_sales_icon mt-3'><BsClockHistory /></div>
                <div>
                    <span className='contact_sales_text block font-inter'>Available Monday to Friday, from</span>
                    <span className='contact_sales_heading block'>9 AM to 6 PM</span>
                    
                </div>
            </div>
        </div>

        <div className='partnership__background px-8 sm:pl-20 flex justify-center py-10'> <div>
            <div className='flex justify-center'>
                <img src={HandImg} alt='' />
            </div>
            <div className='partnership__box pl-5 sm:px-10 border-dashed border-l-2 grid gap-y-10'>
                <div className='relative'>
                    <div className='flex mb-5 sm:ml-3 partnerchip2 absolute  justify-start'><div className='underline3 p-1 text-2xl rounded-full'><TiTick className='' /></div></div>
                    <span className='partnership__text_yelow font-extrabold'>Partnership Opportunities</span>
                </div>
                <div className='relative'>
                <div className='flex mb-5 sm:ml-3 partnerchip absolute justify-start'><div className='underline2 rounded-full'></div></div>
                    <span className='partnership__text font-inter'>Are you a game developer or industry partner</span>
                </div>
                <div className='relative'>
                <div className='flex mb-5 sm:ml-3 partnerchip absolute justify-start'><div className='underline2 rounded-full'></div></div>
                    <span className='partnership__text font-inter'>Let's work together to create incredible gaming experiances</span>
                </div>
                <div className='relative'>
                <div className='flex mb-5 sm:ml-3 partnerchip justify-start absolute'><div className='underline2 rounded-full'></div></div>
                    <span className='partnership__text font-inter'>Drop us an email at <span className='partnership__text_yelow'>Partenrs@haodanetwork.com</span> to start the conversion</span>
                </div>
            </div></div>
        </div>

        <div className='py-20 world_map_page flex  justify-center'>
             
             <div className='world_map'>
                 <div className='py-10 text-center'>
                    <span className='comming__soon__heading block font-inter'>Join our Community</span>
                    <div className='flex justify-center'> <img src={Underline} alt="Rectangle" className="w-64 mt-4" /></div>
                 </div>
                 <div className='grid justify-center'>
                 <div className='world_map_text mb-5 text-center'>Location</div>
                <div className='map_img'>
                    <img src={map} alt='' />
                </div>
                    <div className='flex gap-5 justify-center items-center pt-5 '>
                        <div className='location_icon'><GrLocation /></div>
                        <div className='text-white  font-inter  text-[13px]'><span className='flex flex-wrap'>No. 853, 4th Floor, Thiyagaraja Complex,</span> <span className='block'>Poonamallee High Road, Chennai,</span> <span className='block'>Tamil Nadu - 600010</span></div>
                    </div>
                 </div>
                  
               </div>
             </div>
        </div>
        <div className='contact_question_background pl-10 py-10'>
             <div className='contact_question_heading font-inter font-semibold'>Have a Question?</div>
             <div className='contact_question_text pb-5 font-inter font-medium italic text-[13px]'>Fill out the form below, and we'll get back to you as soon as possible:</div>
             <div className='py-5 grid gap-5'>
                 <div className='relative'>
                    <input className='name_input py-2 px-2 rounded-md outline-none' />
                    <span className='absolute name_span px-3 bottom-7 left-3 rounded-sm'>name</span>
                 </div>
                 <div className='relative'>
                    <input className='name_input py-2 px-2 rounded-md outline-none' />
                    <span className='absolute name_span px-3 bottom-7 left-3 rounded-sm'>email</span>
                 </div>
                 <div className='relative'>
                    <input className='name_input py-2 px-2 rounded-md outline-none' />
                    <span className='absolute name_span px-3 bottom-7 left-3 rounded-sm'>subject</span>
                 </div>
                 <div className='relative'>
                    <input className='message_input py-2 px-2 rounded-md outline-none' />
                    <span className='absolute name_span px-3 bottom-20 left-3 rounded-sm'>Message</span>
                 </div>
                 <div><button className='contact_submit_btn'>Submit</button></div>
             </div>
        </div>
        <div className='contactus_bottom_text py-10 font-inter font-semibold italic'>
            We are excited to hear from you and help make your gaming experience unforgettable
        </div>
      {/* <Footer /> */}
      <MobileFooter />
    </div>
  )
}

export default MobileContactus