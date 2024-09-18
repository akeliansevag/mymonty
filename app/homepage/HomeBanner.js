'use client';
import React from 'react';
import Image from 'next/image';
import banner from '@/public/home-banner-new.webp';
import bannerM from '@/public/saras-birthday-cake.webp';
import { useAppContext } from '@/app/AppContext';

const HomeBanner = () => {
    const { handleOpenModal } = useAppContext();
    return (
        <section className='flex flex-col relative min-h-[100dvh] pt-[var(--header-height)] overflow-hidden'>
            <div className='absolute w-full h-full top-0 left-0 -z-10 bg-[#d8f1fb]'>
                <Image quality={100} sizes='100vw' fill priority placeholder='blur' alt='Girl Holding a phone' src={banner} className='custom-object-position md:object-center object-cover -z-9' />
            </div>


            <div className='flex-1 flex-col sm:flex-row container flex gap-20'>
                <div className='flex-1 self-center sm:-mt-16'>
                    <h1 className='font-black text-[42px]  sm:text-5xl md:text-6xl lg:text-[5.4rem] xl:text-[5rem] mt-6 leading-none uppercase'>
                        YOUR SUPER DIGITAL WALLET.
                    </h1>
                    <p className='text-xl mt-8'>Explore New Ways to Master Your Money.</p>
                    <button onClick={handleOpenModal} className='mm-button mt-8'>Get The App</button>
                </div>
                <div className='flex-1 flex items-end'>
                    <Image alt="M Logo" src={bannerM} className='w-full sm:pr-20 -mb-[5px]' />
                </div>
            </div>
        </section>
    )
}

export default HomeBanner;
