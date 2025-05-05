'use client';
import React, { useEffect, useState, useRef } from 'react';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';

import c1 from '@/public/diverse/card-1.webp';
import c2 from '@/public/diverse/card-2.webp';
import c3 from '@/public/diverse/card-3.webp';
import c4 from '@/public/diverse/card-4.webp';
import c5 from '@/public/diverse/card-5.webp';
import c6 from '@/public/diverse/card-6.webp';
import c7 from '@/public/diverse/card-7.webp';
import c8 from '@/public/diverse/card-8.webp';
import c9 from '@/public/diverse/card-9.webp';
import c10 from '@/public/diverse/card-10.webp';

import { register } from 'swiper/element/bundle';


const DiverseCards = () => {
    const [sliderInitialized, setSliderInitialized] = useState(false);
    const swiperElRef = useRef(null);
    const data = [
        {
            img: c1
        },
        {
            img: c2
        },
        {
            img: c3
        },
        {
            img: c4
        },
        {
            img: c5
        },
        {
            img: c6
        },
        {
            img: c7
        },
        {
            img: c8
        },
        {
            img: c9
        },
        {
            img: c10
        },

    ];
    const swiperParams = {
        injectStyles: [
            `
                :host .swiper-wrapper{
                    -webkit-transition-timing-function:linear!important;
                    transition-timing-function:linear!important; 
                }
                :host .swiper-slide{
                    width:5px !important;
                }
            `
        ],
        autoplay: {
            delay: 0
        },
        loop: true,
        speed: 4000,
        allowTouchMove: false,
        disableOnInteraction: true,
        centeredSlides: true,
        breakpoints: {
            320: {
                spaceBetween: 15,
                slidesPerView: 2
            },
            480: {
                spaceBetween: 15,
                slidesPerView: 2
            },
            640: {
                spaceBetween: 30,
                slidesPerView: 4
            },
            992: {
                spaceBetween: 30,
                slidesPerView: 6
            }
        }
    }
    useEffect(() => {
        register();
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperinit', (e) => {
            setSliderInitialized(true);
        });
        Object.assign(swiperElRef.current, swiperParams);
        swiperElRef.current.initialize();
    }, [swiperParams, swiperElRef])
    return (

        <Section>
            <div className='container text-center'>
                <TextBlock center={true} title="EXPLORE OUR DIVERSE RANGE OF CARDS" description="Choose the color that suits your lifestyle. With our virtual cards, financial freedom is at your fingertips. " />
            </div>
            <div className={`diverse-swiper mt-8 md:mt-20 duration-1000 transition-opacity ${!sliderInitialized ? 'opacity-0' : 'opacity-100'}`}>
                <swiper-container init={false} ref={swiperElRef}>
                    {data.map((item, index) => {
                        return (
                            <swiper-slide key={index} >
                                <img src={item.img.src} alt="Card" />
                            </swiper-slide>

                        )
                    })}
                </swiper-container>
            </div>
        </Section >

    )
}

export default DiverseCards;
