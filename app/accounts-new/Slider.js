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
import s4 from '@/public/sign-up-4.webp';
import s5 from '@/public/sign-up-5.webp';
import s6 from '@/public/sign-up-6.webp';

export default function Slider() {
  // keep only one open at a time
  const [openIndex, setOpenIndex] = useState(null);
  
  const cards = [
    {
      title: 'STEP 1',
      description: 'Download <br /> the app',
      image: s1,
    },
    {
      title: 'STEP 2',
      description: 'Enter your <br /> number & verify',
      image: s2,
    },
    {
      title: 'STEP 3',
      description: 'Set a passcode <br /> (add fingerprint/Face ID if you want)',
      image: s3,
    },
    {
      title: 'STEP 4',
      description: 'Verify email & scan ID',
      image: s4,
    },
    {
      title: 'STEP 5',
      description: 'Selfie verification',
      image: s5,
    },
    {
      title: 'STEP 6',
      description: 'Add your info & confirm OTP',
      image: s6,
    },
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
                <Image className='max-w-[300px] mx-auto w-full' alt='Growth Oriented Environmemt' placeholder='blur' quality={100} src={card.image} />    
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
