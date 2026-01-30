'use client';
import React from 'react';
import { useAppContext } from '../AppContext';
import TextBlock from '../components/TextBlock';

const SectionFour = () => {
  const { handleOpenModal } = useAppContext();
  return (
    <section className='bg-white max-lg:py-14 lg:py-28'>
      <div className='container'>
        <div className='flex items-center lg:justify-between max-lg:flex-col gap-5'>
          <div className='md:w-1/2'>
            <TextBlock title="Join the Partner Network" description="Offer your patients flexible 0% wellness financing and unlock new growth opportunities for your clinic."/>
            <button onClick={handleOpenModal} className='mm-button blue mt-7'>Become A partner Clinic</button>
          </div>
          <div>
            <img src='/montycare-9.webp' className='max-w-[450px] w-full'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFour
