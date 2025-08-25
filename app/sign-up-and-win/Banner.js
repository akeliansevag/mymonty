'use client';
import React from 'react';
import { useAppContext } from '../AppContext';
import AppForm from '@/app/components/Form';

const Banner = () => {
  const { handleOpenModal } = useAppContext();
  const { setFormComponent, setLargeWidth } = useAppContext();
   const handleOriginalOpenModal = () => {
        setFormComponent(<AppForm />);
        setLargeWidth(false);
        handleOpenModal();
    }
  return (
    <section className='text-white lg:py-32 max-lg:py-16 bg-black relative min-h-[calc(100vh-127px)] flex flex-col lg:justify-center'>
        <img src='/mymonty-car-banner.webp' className='max-sm:hidden absolute top-0 left-0 object-cover w-full h-full'/>
        <img src='/mymonty-car-banner-mobile.webp' className='sm:hidden absolute top-0 left-0 object-cover w-full h-full'/>
        <div className='container relative z-10'>
            <div>
                <div className='max-lg:w-full lg:w-1/2 flex flex-col gap-5'>
                    <h1 className='text-balance font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase mt-6'>Sign Up & Win with MyMonty</h1>
                    <p className='text-balance'>A Kia Sportage or Kia K4</p>
                    <div>
                        <button onClick={handleOriginalOpenModal} className="mm-button white">Download App</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Banner;
