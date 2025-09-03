'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import usdLbpCurrencies from '@/public/business1/usd-and-lbp-currencies.webp';
import transfers from '@/public/business1/transfers.webp';
import cardsBusiness from '@/public/business1/cards.webp';
import foreignExchange from '@/public/business1/foreign-exchange.webp';
import multiuserAccess from '@/public/business1/multiuser-access.webp';

export default function Cards() {
  // keep only one open at a time
  const [openIndex, setOpenIndex] = useState(null);
  
  const cards = [
    {
      title: 'USD & LBP Currencies',
      description: 'Get statements for easy tracking.<br />Make QR payments for fast, secure checkout.<br />Access eSIMs, gift cards, and other eServices.',
      image: usdLbpCurrencies,
    },
    {
      title: 'Transfers',
      description: 'Get statements for easy tracking.<br />Make QR payments for fast, secure checkout.<br />Access eSIMs, gift cards, and other eServices.',
      image: transfers,
    },
    {
      title: 'Cards',
      description: 'Issue unlimited physical cards and one virtual prepaid card.<br />Use platinum physical cards and credit cards for flexible business spending.<br />Customize card embossing:<br />- Business name only (virtual)<br />- Business + holder name (physical)',
      image: cardsBusiness,
    },
    {
      title: 'Foreign Exchange',
      description: 'Exchange between USD and LBP directly within the account.',
      image: foreignExchange,
    },
    {
      title: 'Multi-user access',
      description: 'Allow up to 3 users to access the account.',
      image: multiuserAccess,
    }
  ];

  

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Swiper
        modules={[Pagination,Autoplay]}
        speed={1500}
        spaceBetween={25}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Optional: Adjust delay
        loop={true}
        pagination={{   
          clickable: true,
          el: '.custom-pagination'
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5, // < md
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
            <SwiperSlide key={index} className={`rounded-3xl bg-[#091111] mt-12 overflow-hidden !h-auto flex flex-col relative ${openIndex === index ? "" : "justify-between"}`}>
              <div className='p-4 lg:p-8'>
                <h2 className='text-2xl font-black uppercase'>{ card.title }</h2>
                <button className='text-sm border border-white rounded-full py-2 px-4 mt-8' onClick={() => toggleItem(index)}>Learn More</button>
              </div>
              <div className='relative'>
                {openIndex === index ? (
                  <p className='text-lg p-4 lg:p-8 text-left' dangerouslySetInnerHTML={{ __html: card.description }}></p>
                  ) : (
                  <Image className='mt-10' alt='Growth Oriented Environmemt' placeholder='blur' quality={100} src={card.image} width="1662" height="755" />
                )}  
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='container text-center'>
        <div className="custom-pagination"></div>
      </div>
    </>
  )
}
