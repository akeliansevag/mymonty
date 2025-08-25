'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import nakhaldesktop from '@/public/nakhal-banner-desktop.webp';
import nakhalmobile from '@/public/nakhal-banner-mobile.webp';
import mastercarddesktop from '@/public/mastercard-banner-desktop.webp';
import mastercardmobile from '@/public/mastercard-banner-mobile.webp';
import forexdesktop from '@/public/forex-desktop.webp';
import forexmobile from '@/public/forex-mobile.webp';
import kiadesktop from '@/public/kia-ad.webp';
import kiamobile from '@/public/kia-ad-mobile.webp';


import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

const banners = [
  {
    bannerDesktop: kiadesktop,
    bannerMobile: kiamobile,
    link: '/sign-up-and-win',
  },
  {
    bannerDesktop: nakhaldesktop,
    bannerMobile: nakhalmobile,
    link: '/nakhal',
  },
  // {
  //   bannerDesktop: mastercarddesktop,
  //   bannerMobile: mastercardmobile,
  //   link: '/mc-bdf-areeba-terms-and-conditions',
  // },
  {
    bannerDesktop: forexdesktop,
    bannerMobile: forexmobile,
    link: false,
  },
];

const BannerAd = () => {
  return (
      <Swiper
        modules={[Autoplay]}
        speed={3000}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 7000, disableOnInteraction: false }} // Optional: Adjust delay
        loop={true}
        allowTouchMove={false}
        className="fixed z-30 bottom-0 left-0 w-full"
        // disableOnInteraction={true}
      >
        
        {banners.map((banner, index)=>{
          return (
            <SwiperSlide key={index}>
              {
                banner.link && (
                  <Link href={banner.link}>
                    <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Banner Desktop' src={banner.bannerDesktop} width='3000' height='157' />
                    <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Banner Mobile' src={banner.bannerMobile} width='800' height='150'  />
                  </Link>
                )
              }

              {
                !banner.link && (
                  <div>
                    <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Banner Desktop' src={banner.bannerDesktop} width='3000' height='157' />
                    <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Banner Mobile' src={banner.bannerMobile} width='800' height='150'  />
                  </div>
                )
              }
              
            </SwiperSlide>
          )
        })}
      </Swiper>

    // <Link href="/nakhal" className="fixed z-30 bottom-0 w-full">
    //   <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Nakhal Banner' src={nakhaldesktop} width='3000' height='157' />
    //   <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Nakhal Banner' src={nakhalmobile} width='800' height='150'  />
    // </Link>
  )
}

export default BannerAd;