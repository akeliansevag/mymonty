"use client";
import React, {useRef} from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/autoplay";

const Slider = ({ images = [] }) => {
  const swiperElRef = useRef(null);
  
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        ref={swiperElRef}
        loop={true}
        autoplay={true}
        pagination={{   
          clickable: true,
          el: '.custom-pagination1'
        }}
        speed={1500}
        spaceBetween={25}
        slidesPerView={1}
        grabCursor={true}
      >
        {images.map((image, i) => (
          <SwiperSlide
            key={i}
            className="!h-auto flex items-center justify-center mt-10 md:mt-20"
          >
            <img
              src={`/${image}.webp`}
              alt={image}
              className="w-full mx-auto"
              width="930"
              height="1046"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination1"></div>
    </>
  );
};

export default Slider;
