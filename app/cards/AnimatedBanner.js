'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

const AnimatedBanner = () => {
    const pink = useRef();
    const blue = useRef();

    useEffect(() => {
        var tl = gsap.timeline();
        tl.to(pink.current, { scale: 1, duration: 0.4 });
        tl.to(blue.current, { scale: 1, duration: 0.4 }, "-=0.3");
    }, [])
    return (
        <div className='flex md:justify-end'>
            <div className='h-[500px] bg-black w-[300px] md:w-[360px] rounded-[30px] flex flex-col justify-end relative'>
                <video className='mb-6' width="100%" playsInline autoPlay muted loop controls={false}>
                    <source src='/rotating-card-2.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='absolute right-0 translate-x-2/4 flex flex-col gap-3 bottom-1/4 translate-y-1/2'>
                    <div ref={pink} className='scale-0 w-[68px] h-[68px] rounded-full bg-[#D25788] flex items-center justify-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3239 6.78976C14.8658 6.70964 15.4248 6.66667 16.0006 6.66667C22.8072 6.66667 27.2737 12.6731 28.7743 15.0491C28.9559 15.3367 29.0467 15.4805 29.0975 15.7022C29.1357 15.8688 29.1356 16.1316 29.0975 16.2981C29.0466 16.5199 28.9551 16.6646 28.7722 16.9541C28.3725 17.5869 27.7629 18.4761 26.9553 19.4406M8.96576 8.95338C6.083 10.9089 4.12593 13.6258 3.22814 15.047C3.04571 15.3358 2.9545 15.4802 2.90365 15.702C2.86546 15.8685 2.86545 16.1313 2.90362 16.2978C2.95444 16.5196 3.04524 16.6634 3.22685 16.9509C4.72739 19.3269 9.19388 25.3333 16.0006 25.3333C18.7451 25.3333 21.1092 24.3568 23.0518 23.0355M4.00055 4L28.0006 28M13.1721 13.1716C12.4483 13.8954 12.0006 14.8954 12.0006 16C12.0006 18.2091 13.7914 20 16.0006 20C17.1051 20 18.1051 19.5523 18.829 18.8284" stroke="white" stroke-width="4" stroke-linecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                    <div ref={blue} className='scale-0 w-[68px] h-[68px] rounded-full bg-[#2657D4] flex items-center justify-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6663 13.3333V10.6667C22.6663 6.98477 19.6816 4 15.9997 4C12.3178 4 9.33301 6.98477 9.33301 10.6667V13.3333M15.9997 19.3333V22M11.733 28H20.2663C22.5066 28 23.6267 28 24.4823 27.564C25.235 27.1805 25.8469 26.5686 26.2304 25.816C26.6663 24.9603 26.6663 23.8402 26.6663 21.6V19.7333C26.6663 17.4931 26.6663 16.373 26.2304 15.5174C25.8469 14.7647 25.235 14.1528 24.4823 13.7693C23.6267 13.3333 22.5066 13.3333 20.2663 13.3333H11.733C9.4928 13.3333 8.37269 13.3333 7.51705 13.7693C6.7644 14.1528 6.15248 14.7647 5.76898 15.5174C5.33301 16.373 5.33301 17.4931 5.33301 19.7333V21.6C5.33301 23.8402 5.33301 24.9603 5.76898 25.816C6.15248 26.5686 6.7644 27.1805 7.51705 27.564C8.37269 28 9.4928 28 11.733 28Z" stroke="white" stroke-width="4" stroke-linecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AnimatedBanner;
