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
        <div className='flex md:justify-end mr-10'>
            <div className='h-[500px] bg- w-[300px] md:w-[360px] rounded-[30px] flex flex-col justify-end relative'>
                <video className='mb-6 mix-blend-darken' width="100%" playsInline autoPlay muted loop controls={false}>
                    <source src='/rotating-cards-5.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            

            </div>
        </div>
    )
}

export default AnimatedBanner;
