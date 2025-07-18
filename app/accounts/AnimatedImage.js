'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

const AnimatedImage = () => {
    const [isImageLoaded, setImageLoaded] = useState(false);
    const imageElement = useRef();
    const whiteBox = useRef();
    const textOne = useRef();
    const textTwo = useRef();
    const blueCircle = useRef();
    const numberElement = useRef();
    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        var tl = gsap.timeline();
        tl.to(whiteBox.current, { scale: 1, y: 0, opacity: 1, duration: 0.4 });
        tl.to(textOne.current, { opacity: 1, duration: 0.5 });
        tl.to(textTwo.current, { opacity: 1, duration: 0.5 });
        tl.to(blueCircle.current, { scale: 1, duration: 0.3 }, "-=1");
        // tl.from(numberElement.current, {
        //     textContent: 0,
        //     duration: 1,
        //     ease: "power1.in",
        //     snap: { textContent: 1 },
        //     stagger: {
        //         each: 1.0,
        //         onUpdate: function () {
        //             numberElement.current.innerHTML = numberWithCommas(Math.ceil(numberElement.current.textContent));
        //         }
        //     }
        // }, "-=1");
        let animatedValue = { value: 0 };

        gsap.to(animatedValue, {
            value: 20700000, // your target number
            duration: 2, // duration of the animation in seconds
            ease: "power1.inOut", // easing function
            onUpdate: function () {
                // Update the DOM element with the current animated value
                // Optionally format it with commas
                numberElement.current.textContent = numberWithCommas(Math.round(animatedValue.value));
            }
        });


    }, [isImageLoaded]);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
        <div className='flex md:justify-end'>
            <div className='h-[500px] relative flex justify-center'>
                <img onLoad={handleImageLoaded} ref={imageElement} width="100" height="100" src="/animated/accounts-banner.webp" sizes='100%' alt='Accounts Banner' className='w-full h-full -z-1' />
                {/* <img src='/animated/accounts-banner.webp' className='block absolute -z-1 top-0 h-full' /> */}
                <div ref={whiteBox} className='opacity-50 scale-0 absolute translate-y-[calc(100%+30px)] bottom-[30px] rounded-[30px] bg-white w-[80%] h-[115px] z-1'>
                    <div ref={blueCircle} className='flex items-center justify-center w-[68px] h-[68px] rounded-full bg-[#2657D4] absolute translate-y-[-50%] left-3 scale-0'>
                        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6673 13.3333V10.6667C22.6673 6.98477 19.6825 4 16.0007 4C12.3188 4 9.33398 6.98477 9.33398 10.6667V13.3333M16.0007 19.3333V22M11.734 28H20.2673C22.5075 28 23.6276 28 24.4833 27.564C25.2359 27.1805 25.8478 26.5686 26.2313 25.816C26.6673 24.9603 26.6673 23.8402 26.6673 21.6V19.7333C26.6673 17.4931 26.6673 16.373 26.2313 15.5174C25.8478 14.7647 25.2359 14.1528 24.4833 13.7693C23.6276 13.3333 22.5075 13.3333 20.2673 13.3333H11.734C9.49377 13.3333 8.37367 13.3333 7.51802 13.7693C6.76537 14.1528 6.15345 14.7647 5.76996 15.5174C5.33398 16.373 5.33398 17.4931 5.33398 19.7333V21.6C5.33398 23.8402 5.33398 24.9603 5.76996 25.816C6.15345 26.5686 6.76537 27.1805 7.51802 27.564C8.37367 28 9.49377 28 11.734 28Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='pb-3 pl-5 absolute bottom-0'>
                        <h3 className='opacity-0 text-[#727272] text-xl font-[500]' ref={textOne}>Wallet balance</h3>
                        <h2 className='opacity-0 font-[900] text-2xl' ref={textTwo}>LBP <span ref={numberElement}>20700000</span></h2>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default AnimatedImage;
