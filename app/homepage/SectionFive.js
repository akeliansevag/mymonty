'use client';
import React from 'react';
import sectionImage from '@/public/section5bg.webp';
import Image from 'next/image';
import { useAppContext } from '@/app/AppContext';

const SectionFive = () => {
    const { handleOpenModal } = useAppContext();
    
    return (
        <section
            className="relative min-h-[calc(80vh-var(--mobile-header-height))] lg:min-h-[calc(100vh-var(--mobile-header-height))] flex justify-center overflow-hidden py-14"
        >
            <img className="absolute bottom-0 left-0 w-full h-full object-cover" src='/section5bg.webp' width="" height="" />

            {/* Content */}
            <div className="pt-8 lg:pt-16 container relative z-10 text-center px-4">
                <div className='lg:w-1/3 mx-auto'>
                    <h2 className="uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">
                        prepaid Cards 
                    </h2>
                    <p className="leading-8 mt-8">
                        Designed to fit your lifestyle. Euro & World Elite available. Spend in-store, online, or overseas.
                    </p>
                    <button onClick={handleOpenModal} className='mm-button mt-8'>Find Your Card</button>
                </div>
            </div>
        </section>
    )
}

export default SectionFive;
