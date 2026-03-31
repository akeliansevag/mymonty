'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import creditcarddesktop from '@/public/credit-card-banner-desktop.webp';
import creditcardmobile from '@/public/credit-card-banner-mobile.webp';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

const banners = [
  {
    bannerDesktop: creditcarddesktop,
    bannerMobile: creditcardmobile,
    link: 'https://creditcard.mymonty.com.lb',
  },
];

const BannerAd = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed z-50 bottom-0 left-0 w-full">

      {/* 🔽 HANDLE BAR (when closed) */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed bottom-0 left-0 group w-full h-2 bg-[#2657d4]/90 cursor-pointer transition-all duration-300 hover:h-6 flex items-center justify-center"
        >
          {/* little indicator line */}
          <div className="w-10 h-[2px] bg-white opacity-70 rounded-full group-hover:opacity-100 transition" />
        </div>
      )}

      {/* 🔼 FULL BANNER */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative">

          {/* ❌ CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-50 bg-black/50 rounded-full p-1 hover:bg-black/70 transition"
            aria-label="Close banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <Swiper
            modules={[Autoplay]}
            speed={3000}
            slidesPerView={1}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            loop
            allowTouchMove={false}
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <a href={banner.link} target="_blank">
                  <Image
                    className="max-sm:hidden w-full"
                    quality={100}
                    sizes="100vw"
                    priority
                    placeholder="blur"
                    alt="Banner Desktop"
                    src={banner.bannerDesktop}
                    width="3000"
                    height="157"
                  />
                  <Image
                    className="sm:hidden w-full"
                    quality={100}
                    sizes="100vw"
                    priority
                    placeholder="blur"
                    alt="Banner Mobile"
                    src={banner.bannerMobile}
                    width="800"
                    height="150"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </div>
  );
};

export default BannerAd;