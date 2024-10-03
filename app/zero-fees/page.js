import React from 'react';
import Image from 'next/image';
import banner from '@/public/fees-banner.webp';
import mobileBanner from '@/public/fees-mobile.webp';

const landing = () => {
  return (
    <section className='pt-[var(--header-height)]'>
        <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={banner} />
        <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={mobileBanner} />
    </section>
  )
}

export default landing
