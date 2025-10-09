'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';

import usdLbpCurrencies from '@/public/business/business-wallet/dual-currency-account.webp';
import transfers from '@/public/business/business-wallet/transfers.webp';
import cardsBusiness from '@/public/business/business-wallet/cards.webp';
import foreignExchange from '@/public/business/business-wallet/foreign-exchange.webp';
import multiuserAccess from '@/public/business/business-wallet/multi-user-access.webp';
import smartPayrollSolution from '@/public/business/business-wallet/smart-payroll-solution.webp';

export default function Cards() {
  // keep only one open at a time
  const [openIndex, setOpenIndex] = useState(null);
  
  const cards = [
    {
      title: 'Dual currency account',
      description: 'Manage money in multiple currencies and get statements for easy tracking.<br />Make QR payments for fast, secure checkout.<br />Access eSIMs, pay telecom and internet bills, and enjoy other value-added services.',
      image: usdLbpCurrencies,
    },
    {
      title: 'Transfers',
      description: 'Free and instant transfers to any other MyMonty account (Suppliers & Consumers).<br />Send multiple payments in one click: fast, simple, & hassle-free.<br />Schedule transfers that send themselves on time, every time<br />Request payments in seconds and get paid faster.',
      image: transfers,
    },
    {
      title: 'Cards',
      description: 'Optimize spend with smart Multi-Purpose company cards.<br />Request one prepaid virtual and unlimited prepaid physical cards for your team.<br />Get real time access and visibility over every card transaction.<br />Perfect for your team’s travel expenses or any business need on the go.',
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
    },
    {
      title: 'Smart Payroll Solution',
      description: 'Simplify the way you pay your team<br />Upload your payroll file in seconds and ensure timely payments to employees.<br />Enjoy cashless, hassle-free payments.',
      image: smartPayrollSolution,
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
            <SwiperSlide key={index} className={`rounded-3xl bg-[linear-gradient(160.77deg,#2b3333_11.72%,#040606_39.8%)] mt-12 overflow-hidden !h-auto flex flex-col items-start text-start relative ${openIndex === index ? "" : "justify-between"}`}>
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
    </>
  )
}
