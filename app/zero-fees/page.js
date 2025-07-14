import React from 'react';
import Image from 'next/image';
import banner from '@/public/fees-banner-4.webp';
import mobileBanner from '@/public/fees-banner-4-mobile.webp';
import Head from 'next/head';

const landing = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://mymonty.com.lb/zero-fees/" />
      </Head>
      <section className='pt-[var(--header-height)] mt-10 mb-20'>
          <div className='container'>
            <Image className='max-sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={banner} />
            <Image className='sm:hidden w-full' quality={100} sizes='100vw' priority placeholder='blur' alt='Fees Banner' src={mobileBanner} />
          </div>
          
      </section>
    </>
  )
}

export default landing
