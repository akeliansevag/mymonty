'use client';
import React, { useEffect, useState, useRef } from 'react';

import { register } from 'swiper/element/bundle';


const CardsSlider = () => {
    const [sliderInitialized, setSliderInitialized] = useState(false);
    const swiperElRef = useRef(null)
    useEffect(() => {

        register();

        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperinit', (e) => {
            setSliderInitialized(true);
        });
        swiperElRef.current.initialize();
    }, [])
    return (
        <div className={`mt-10 duration-1000 transition-opacity ${!sliderInitialized ? 'opacity-0' : 'opacity-100'}`}>
            <swiper-container init={false} ref={swiperElRef} effect="creative"
                autoplay-delay="1000"
                autoplay-pause-on-mouse-enter
                loop
                centered-slides
                slides-per-view="auto"
                creative-effect='{"limitProgress":1, "prev": {"shadow": false, "translate": [-300, 0, -400]}, "next": {"shadow": false, "translate": [300, 0, -400]}}'>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((card, index) => {
                    return (
                        <swiper-slide key={index}>
                            <img src={`/cards2/card-${card}.webp`} />
                        </swiper-slide>
                    )

                })}
            </swiper-container>
        </div >

    )
}

export default CardsSlider;
