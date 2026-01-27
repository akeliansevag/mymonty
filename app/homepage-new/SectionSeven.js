'use client';
import React from 'react';
import sectionImage from '@/public/section7img.webp';
import Image from 'next/image';
import { useAppContext } from '@/app/AppContext';

const SectionSeven = () => {
    const { handleOpenModal } = useAppContext();
    
    return (
        <section className='bg-[#F7F7F7] py-14 lg:py-28'>
            <div className='container text-center'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Security, Built In</h2>
                <div className='lg:w-1/2 mx-auto'>
                    <p className='leading-8 mt-8'>Your identity and data are protected from day one. <br /> Your money, safe by default.</p>
                    <button onClick={handleOpenModal} className='mm-button mt-8'>Expore Credit Cards</button>
                </div>
                <div className='text-center'>
                    <Image alt="Section Image" src={sectionImage} className='mx-auto mt-14' wdtih="2120" height="983" />
                </div>

            </div>
        </section>
    )
}

export default SectionSeven;
