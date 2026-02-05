'use client';
import React from 'react';
import sectionImage from '@/public/sectionthreeimage-new.webp';
import Image from 'next/image';
import { useAppContext } from '@/app/AppContext';

const SectionTwo = () => {
    const { handleOpenModal } = useAppContext();
    
    return (
        <section className='bg-white py-14 lg:py-28'>
            <div className='container text-center'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Manage your money in one place</h2>
                <div className='lg:w-1/2 mx-auto'>
                    <p className='leading-8 mt-8'>Move funds instantly, send or receive money anytime, and stay in control with real-time balances and transactions. <br /> Everything is secure, simple, and always ready at your fingertips.</p>
                    <button onClick={handleOpenModal} className='mm-button mt-8'>Download App</button>
                </div>
                <div className='text-center'>
                    <Image alt="Section Image" src={sectionImage} className='mx-auto mt-14' wdtih="2120" height="983" />
                </div>

            </div>
        </section>
    )
}

export default SectionTwo;
