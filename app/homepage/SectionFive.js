'use client';

import React, { useEffect, useState } from 'react';
import backgroundImage from '@/public/dream-home.webp';
import Link from 'next/link';

const SectionFive = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const section = document.getElementById('section-five');
            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Only trigger parallax effect when scrolling in this section's range
            if (scrollY >= sectionTop - window.innerHeight && scrollY <= sectionTop + sectionHeight) {
                setOffsetY((scrollY - sectionTop) * 0.1); // Adjusted for subtle movement
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="section-five"
            className="bg-white pt-14 pb-14 lg:pt-28 lg:pb-20"
        >
            {/* Content */}
            <div className="relative z-10 text-center px-4 h-full">
                <div className='lg:w-1/2 mx-auto'>
                    <h2 className="uppercase text-black font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">
                    TURN YOUR DREAM HOME INTO REALITY
                    </h2>
                    <p className="leading-8 mt-8 text-black">
                    With MyMonty's house loans, your dream of owning a home is within reach. 
                    Get the financial foundation you need for your perfect <span class="font-bold">HOME</span>.
                    </p>
                    <Link href="/loans" className="mm-button mt-8 mx-auto">
                        Learn More
                    </Link>
                </div>
                <div className='container'>
                    <div class="relative bg-black h-[500px] overflow-hidden rounded-3xl mt-12">
                        <div
                            className="absolute w-full h-[130%] bg-bottom z-0 will-change-transform"
                            style={{
                                backgroundImage: `url(${backgroundImage.src})`,
                                transform: `translateY(${offsetY}px) scale(1.2)`,  // Parallax movement
                                transition: 'transform 0.1s ease-out',
                            }}
                        ></div>

                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[300px]">
                            <img src='/sectionfive.webp' alt='Section Six Image' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFive;
