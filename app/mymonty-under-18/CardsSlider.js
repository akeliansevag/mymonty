'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/effect-fade';

import howToGetMyMonty1 from '@/public/how-to-get-mymonty-under-18-1.webp';
import howToGetMyMonty2 from '@/public/how-to-get-mymonty-under-18-2.webp';
import howToGetMyMonty3 from '@/public/how-to-get-mymonty-under-18-3.webp';
import howToGetMyMonty4 from '@/public/how-to-get-mymonty-under-18-4.webp';
import Image from 'next/image';

const CardsSlider = () => {
    const swiperParams = {
        modules:[EffectFade],
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    };

    const items = [
        howToGetMyMonty1,
        howToGetMyMonty2,
        howToGetMyMonty3,
        howToGetMyMonty4,
    ];

    return (
        <Swiper {...swiperParams} className="relative">
            {items && items.map((item, key) => (
                <SwiperSlide key={key}>
                    <Image
                        src={item}
                        alt={`How to get MyMonty <18 - Slide ${key + 1}`}
                        quality={100}
                        sizes="100vw"
                        priority={key === 0}  // Prioritize the first image for faster load
                        className="w-full"
                    />
                    <img
                        src="/shape-14.svg"
                        alt="Shape Decoration"
                        className="absolute -bottom-0 -left-0 animate-[rotate_10s_linear_infinite]"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CardsSlider;
