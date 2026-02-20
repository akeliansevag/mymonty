'use client';
import React, { use } from 'react';
import banner from '@/public/benefits-and-offers-banner.webp';
import { useAppContext } from '@/app/AppContext';
import Image from 'next/image';

function Banner() {
    const { handleOpenModal } = useAppContext();
    return (
        <section className='flex flex-col relative min-h-[100dvh] pt-[var(--header-height)] overflow-hidden'>
            <div className='flex-1 flex-col sm:flex-row container flex gap-20'>
                <div className='lg:w-2/5 self-center sm:-mt-16'>

                    <p>Cards</p>
                    <h1 className='font-black text-[42px]  sm:text-5xl md:text-6xl lg:text-[5.4rem] xl:text-[5rem] mt-6 leading-none uppercase'>
                        Feel good savings
                    </h1>
                    <p className='text-xl mt-8'>Not a MyMonty client yet? Join today!</p>
                    <button onClick={handleOpenModal} className='mm-button mt-8'>Download App</button>
                </div>
                <div className='lg:w-3/5 flex items-end'>
                    <Image alt="M Logo" src={banner} className='w-full' width="956" height="638" />
                </div>
            </div>
        </section>
    )
}

export default Banner