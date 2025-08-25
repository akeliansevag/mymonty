'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const WhyJoin = () => {
  const items = [
    {
      img: '/why-join-1.webp',
      title: 'Pay bills, shop online & in-store',

    },
    {
      img: '/why-join-2.webp',
      title: 'Send money locally & abroad between Mymonty users',
    },
    {
      img: '/why-join-3.webp',
      title: 'Access credit cards, car loans & salary advances',
      
    },
    {
      img: '/why-join-4.webp',
      title: 'Safe, secure, & simple',
    },
  ];

  const mainSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='max-lg:mb-16 lg:mb-36'>
      <div className='container mt-10'>
        <div className='flex max-lg:flex-col max-lg:gap-10 lg:gap-24'>
          {/* LEFT: Text Thumbnails */}
          <div className='lg:w-1/2 flex flex-col gap-6'>
          <h2 className='section-title'>Why Join MyMonty?</h2>
            <p className=''>Your all-in-one smart finance app:</p>
            {items.map((item, index) => (
              <div
                key={index}
                
              >
                <div>
                  <h3 onClick={() => mainSwiperRef.current?.slideToLoop(index)} className={`${activeIndex===index ? 'opacity-100' : 'opacity-10'} text-black cursor-pointer text-3xl font-black uppercase`}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* RIGHT: Square Image Slider */}
          <div className='lg:w-1/2 rounded-3xl bg-[#EFEFEF] overflow-hidden px-10 pt-10'>
            <Swiper
              modules={[Autoplay, EffectFade]}
              onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              spaceBetween={0}
              effect='fade'
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className='h-full'
            >
              {items.map((item, index) => (
                <SwiperSlide className="flex flex-col justify-end" key={index}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className='sm:max-w-[300px] mx-auto'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default WhyJoin;