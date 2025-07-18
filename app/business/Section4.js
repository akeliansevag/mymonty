'use client';
import React, { useEffect } from 'react'
import Image from 'next/image';
import earlySalary from '@/public/business/early-salary2.webp';
import { useAppContext } from '@/app/AppContext';
import Form from './Form';

const Section4 = () => {
    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleButtonClick = () => {
        setFormComponent(<Form />);
        setLargeWidth(true);
        handleOpenModal();
    }

    return (
        <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
            <div className='container'>
                <div className='relative'>
                    <Image alt='Growth Oriented Environmemt' placeholder='blur' quality={100} sizes='100vw' className='!relative object-cover aspect-[4/7] md:aspect-auto w-full h-full' src={earlySalary} width='1662' height='840' />
                    <div className='absolute top-0 flex flex-col justify-center items-center h-full w-full text-white px-4'>
                        <div className='flex flex-col items-center gap-10'>
                            <p className='leading-8 mt-4 text-center w-full lg:w-2/3 mx-auto'>To learn more about implementing Early Salary with MyMonty, contact our sales department or explore the resources provided on this platform.</p>
                            <button onClick={handleButtonClick} className='mm-button !bg-white !text-black w-max mt-5'>Contact Us Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4