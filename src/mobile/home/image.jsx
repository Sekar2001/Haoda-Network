import React from 'react';
import './image.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../../assets/Mask group-1.png';
import slide_image_2 from '../../assets/Mask group-2.png';
import slide_image_3 from '../../assets/Mask group-3.png';
import slide_image_4 from '../../assets/Mask group-4.png';
import slide_image_5 from '../../assets/Mask group-5.png';
import slide_image_6 from '../../assets/Mask group-6.png';
import slide_image_7 from '../../assets/Mask group-7.png';
import slide_image_8 from '../../assets/Mask group-8.png';

function Image() {
  return (
   <>
       <div className="container overflow-auto">
      <div className='flex justify-between items-center px-5'>
        <div>Fantacy Games</div>
        <button className='bg-gray-200 px-2 py-0.5 rounded-sm'>See All</button>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container overflow-auto"
      >
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    <div className="container overflow-auto">
      <div className='flex justify-between items-center px-5'>
        <div>Traditional Games</div>
        <button className='bg-gray-200 px-2 py-0.5 rounded-sm'>See All</button>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container overflow-auto"
      >
        <SwiperSlide>
          <img className='mx-5' src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='mx-5' src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='mx-5' src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='mx-5' src={slide_image_4} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
   </>
  );
}


export default Image;