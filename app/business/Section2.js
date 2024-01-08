'use client';
import React, { useEffect } from 'react'
import Image from 'next/image';
import employeeBenefits from '@/public/business/employee-benefits.webp';
import { useAppContext } from '@/app/AppContext';
import Form from './Form';

const Section2 = () => {
    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleButtonClick = () => {
        setFormComponent(<Form />);
        setLargeWidth(true);
        handleOpenModal();
    }

    return (
        <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
            <div className='relative'>
                <Image alt='Growth Oriented Environmemt' fill placeholder='blur' quality={100} sizes='100vw' className='!relative object-cover aspect-[4/7] md:aspect-auto' src={employeeBenefits} />

                <div className='absolute top-0 flex flex-col justify-center items-center h-full w-full text-white'>
                    <div className='container'>
                        <div className='flex flex-col items-center gap-10'>
                            <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none'>Elevate Your Employee Benefits with Our Upcoming Products</h2>
                            <p className='leading-8 mt-4 text-center w-full lg:w-2/3 mx-auto'>Exciting developments are on the horizon. Keep an eye on this space for announcements, sneak peeks, and launch dates for our new suite of financial products.<br />
                                At MyMonty, we're dedicated to continuously improving and expanding our offerings to best serve our employees' needs.</p>
                            <button onClick={handleButtonClick} className='mm-button !bg-white !text-black w-max mt-5'>Try it now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2