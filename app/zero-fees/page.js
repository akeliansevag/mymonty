import React from 'react';
import { websiteName } from '@/app/config';
import Image from 'next/image';
import banner from '@/public/fees-banner-4.webp';
import mobileBanner from '@/public/fees-banner-4-mobile.webp';

export const metadata = {
    title: 'Zero Fees' + websiteName,
    description: '',
};

const landing = () => {
  return (
    <>
      
      <section className='pt-[var(--header-height)] mt-10 mb-20'>
          <div className='container'>
            <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={banner} width='2000' height='1078' />
            <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={mobileBanner} width='2000' height='3388' />
          </div>
          
      </section>
    </>
  )
}

export default landing
