'use client';

import React from 'react';
import backgroundImage from '@/public/sectionfourimage-new.webp';
import image1 from '@/public/sectionsix.webp';
import Link from 'next/link';
import { useAppContext } from '@/app/AppContext';

const SectionFour = () => {
    const { handleOpenModal } = useAppContext();

    return (
        <section
            className="relative min-h-[calc(80vh-var(--mobile-header-height))] lg:min-h-[calc(120vh-var(--mobile-header-height))] flex justify-center text-white overflow-hidden py-14 lg:py-28"
        >
            <video
                className="absolute bottom-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/sectionfourimage-new.webp"
            >
                <source src="/section4video.mp4" type="video/mp4" />
            </video>
            {/* Content */}
            <div className="container relative z-10 text-center px-4">
                <div className='lg:w-1/2 mx-auto'>
                    <h2 className="uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">
                        Virtual Cards
                    </h2>
                    <p className="leading-8 mt-8">
                        Pay securely online, anytime. Instant & free. <br /> Perfect for Netflix, Amazon or any online payment.
                    </p>
                    <a href="/standard-virtual-card" className="mm-button whiter mt-8">Find Your Card</a>
                </div>
            </div>
        </section>
    );
};

export default SectionFour;