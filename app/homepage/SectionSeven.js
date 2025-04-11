'use client';

import React, { useEffect, useState } from 'react';
import backgroundImage from '@/public/sectionsixbg2.webp';
import backgroundImageMobile from '@/public/sectionsixbg2-mobile.webp';
import image1 from '@/public/sectionsix.webp';
import Link from 'next/link';

const SectionSeven = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const section = document.getElementById('section-six');
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
            id="section-six"
            className="relative min-h-[calc(100vh-var(--mobile-header-height))] flex justify-center text-white overflow-hidden"
        >
            {/* Parallax Background Image */}
            <div
                className="hidden lg:block absolute top-0 left-0 w-full h-[100%] bg-cover bg-center z-0 will-change-transform"
                style={{
                    backgroundImage: `url(${backgroundImage.src})`,
                    transform: `translateY(${offsetY}px)`,  // Parallax movement
                    transition: 'transform 0.1s ease-out',
                }}
            />
            <div
                className="block lg:hidden absolute top-0 left-0 w-full h-[120%] bg-cover bg-center z-0 will-change-transform"
                style={{
                    backgroundImage: `url(${backgroundImageMobile.src})`,
                    transform: `translateY(${offsetY}px)`,  // Parallax movement
                    transition: 'transform 0.1s ease-out',
                }}
            />

            {/* Content */}
            <div className="pt-8 lg:pt-16 container relative z-10 text-center px-4">
                <div className='lg:w-1/2 mx-auto'>
                    <h2 className="uppercase text-black font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">
                        SET IT AND FORGET IT: PAYMENTS MADE EASY
                    </h2>
                    <p className="leading-8 mt-8 text-black">
                        Never miss a payment again with our scheduled and recurring payment options. Enjoy peace of mind and stay on top of your finances.
                    </p>
                    <Link href="/payments" className="mm-button mt-8 mx-auto">
                        Try It Out
                    </Link>
                    <img className='w-1/2 mt-24 mx-auto' src='/sectionsix.webp' alt='Section Six Image' />
                </div>
                
            </div>
        </section>
    );
};

export default SectionSeven;
