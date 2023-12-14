'use client';
import React from 'react';
import Image from 'next/image';
import banner from '@/public/home-banner-3.webp';
import bannerM from '@/public/home-banner-m.webp';
import { useAppContext } from '@/app/AppContext';

const HomeBanner = () => {
    const { handleOpenModal } = useAppContext();
    return (
        <section className='flex flex-col relative min-h-screen pt-[var(--header-height)]'>
            <div className='absolute w-full h-full top-0 left-0 -z-10 bg-[#DCF4FE]'>
                <Image quality={100} sizes='100vw' fill priority placeholder='blur' alt='Girl Holding a phone' src={banner} className='custom-object-position md:object-center object-cover -z-9' />
            </div>


            <div className='flex-1 flex-col sm:flex-row container flex gap-20'>
                <div className='flex-1 self-center sm:-mt-16'>
                    <h1 className='font-black text-4xl sm:text-5xl md:text-6xl lg:text-[5.4rem] leading-none uppercase'>
                        MYMONTY BETTER THAN A BANK.
                    </h1>
                    <p className='text-xl mt-8'>Explore our innovative ways to manage your finances.</p>
                    <button onClick={handleOpenModal} className='mm-button mt-8 blue'>Get the app</button>
                </div>
                <div className='flex-1 flex items-end'>
                    <Image alt="M Logo" src={bannerM} className='w-full sm:pr-20' />
                </div>
            </div>
        </section>
    )
}

export default HomeBanner;
