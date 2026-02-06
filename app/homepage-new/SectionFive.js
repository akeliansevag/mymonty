'use client';
import React from 'react';
import { useAppContext } from '@/app/AppContext';

const SectionFive = () => {
    const { handleOpenModal } = useAppContext();
    
    return (
        <section className="relative overflow-hidden">
            <img className="w-full max-xl:h-screen object-cover" src='/section5bg.webp' width="" height="" />

            {/* Content */}
            <div className="container absolute z-10 left-1/2 top-16 -translate-x-1/2 text-center px-4">
                <div className='lg:w-1/3 mx-auto'>
                    <h2 className="uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">
                        prepaid Cards 
                    </h2>
                    <p className="leading-8 mt-8">
                        Designed to fit your lifestyle. Spend in-store, online, or overseas.
                    </p>
                    <a href="/prepaid-cards" className="mm-button mt-8">Find Your Card</a>
                </div>
            </div>
        </section>
    )
}

export default SectionFive;
