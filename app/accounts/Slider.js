'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';

import s1 from '@/public/sign-up-1.webp';
import s2 from '@/public/sign-up-2.webp';
import s3 from '@/public/sign-up-3.webp';
import s4 from '@/public/sign-up-3.webp';

export default function Slider() {
  // keep only one open at a time
  const [openIndex, setOpenIndex] = useState(null);
  
  const cards = [
    {
      title: 'STEP 1:',
      description: 'Download the app',
      image: s1,
    },
    {
      title: 'STEP 2:',
      description: 'Enter your number & verify',
      image: s2,
    },
    {
      title: 'STEP 3:',
      description: 'Set a passcode (add fingerprint/Face ID if you want)',
      image: s3,
    },
    {
      title: 'STEP 4:',
      description: 'This is Step 4',
      image: s4,
    }
  ];

  

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        speed={1500}
        spaceBetween={25}
        // autoplay={{ delay: 3000, disableOnInteraction: false }} // Optional: Adjust delay
        loop={true}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1.2, // < md
          },
          768: {
            slidesPerView: 2.5, // >= md / lg
          },
          1024: {
            slidesPerView: 3.5, // >= xl
          },
        }}
      >
        {cards.map((card, index)=>{
          return (
            <SwiperSlide key={index} className={`rounded-3xl bg-[#F7F7F7] mt-12 overflow-hidden !h-auto flex flex-col text-center relative ${openIndex === index ? "" : "justify-between"}`}>
              <div className='p-4 lg:p-8 text-center'>
                <h2 className='text-2xl font-black uppercase'>{ card.title }</h2>
                <h2 className='text-2xl font-black uppercase mt-7' dangerouslySetInnerHTML={{ __html: card.description }}></h2>
              </div>
              <div className='relative'>
                <Image className='max-w-[250px] mx-auto w-full' alt='Growth Oriented Environmemt' placeholder='blur' quality={100} src={card.image} />    
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
