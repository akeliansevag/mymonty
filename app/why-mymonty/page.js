'use client'
import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import Banner from '../components/Banner';
import Link from 'next/link';
import Image from 'next/image';
import whyMyMonty from '@/public/personal/why-mymonty.webp';
import highEnd from '@/public/personal/one-stop-shop.webp';
import oneStop from '@/public/personal/high-end.webp';
import friendlySupport from '@/public/personal/friendly-support.webp';
import noHiddenFees from '@/public/personal/no-hidden-fees.webp';

const data = {
  title: 'EMPOWERING LEBANESE CITIZENS WITH FINANCIAL SERVICES',
  subtitle: 'Why MyMonty',
  desc: 'Eligible citizens will have access to a comprehensive range of financial services. T&C Apply.',
  image: {
    inGrid: true,
    layout: 'half',
    url: whyMyMonty,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download App'
    }
  }
}

const WhyMyMonty = () => {
  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Simple Onboarding</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative mt-20'>
            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='flex items-center justify-center w-[60px] h-[60px] rounded-full border-2 border-black text-3xl font-bold'>1</div>
                <div className='mt-14'>
                  <h3 className='text-4xl font-bold'>No need for paperwork hassle</h3>
                </div>
              </div>
            </div>

            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='flex items-center justify-center w-[60px] h-[60px] rounded-full border-2 border-black text-3xl font-bold'>2</div>
                <div className='mt-14'>
                  <h3 className='text-4xl font-bold'>No need to visit branches</h3>
                </div>
              </div>
            </div>

            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='flex items-center justify-center w-[60px] h-[60px] rounded-full border-2 border-black text-3xl font-bold'>3</div>
                <div className='mt-14'>
                  <h3 className='text-4xl font-bold'>No need for appointments </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Benefit from an e-wallet account</h2>
          <p className='text-center text-[#2657D4] text-[1.75rem] font-bold mt-5'>In just a few minutes!</p>
          {/* 280 586 text-4xl md:text-6xl top-[30px] md:top-[70px] ////// w-[50px] h-[50px] md:w-[90px] md:h-[90px]*/}
          <div className='grid grid-cols-2 lg:grid-cols-4'>
            <div className='relative flex items-center justify-center w-[140px] h-[140px] md:w-[280px] md:h-[280px] lg:w-72 lg:h-72 rounded-full border-2 bg-[#2657D4] text-lg md:text-4xl font-bold text-white m-auto mt-14 md:mt-28 text-center'>
              <p className='md:px-10'>Download app</p>
              <div className='absolute top-0 md:top-[20px] left-0'>
                <div className='flex items-center justify-center w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-full border-2 md:border-4 bg-[#2657D4] text-md font-bold text-white m-auto text-center'>1</div>
              </div>
            </div>

            <div className='relative flex items-center justify-center w-[140px] h-[140px] md:w-[280px] md:h-[280px] lg:w-72 lg:h-72 rounded-full border-2 bg-[#2657D4] text-lg md:text-4xl font-bold text-white m-auto mt-14 md:mt-28 text-center'>
              <p className='md:px-10'>Fill<br />e-KYC</p>
              <div className='absolute top-0 md:top-[20px] left-0'>
                <div className='flex items-center justify-center w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-full border-2 md:border-4 bg-[#2657D4] text-md font-bold text-white m-auto text-center'>2</div>
              </div>
            </div>

            <div className='relative flex items-center justify-center w-[140px] h-[140px] md:w-[280px] md:h-[280px] lg:w-72 lg:h-72 rounded-full border-2 bg-[#2657D4] text-lg md:text-4xl font-bold text-white m-auto mt-14 md:mt-28 text-center'>
              <p className='md:px-10'>Upload ID /passport</p>
              <div className='absolute top-0 md:top-[20px] left-0'>
                <div className='flex items-center justify-center w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-full border-2 md:border-4 bg-[#2657D4] text-md font-bold text-white m-auto text-center'>3</div>
              </div>
            </div>

            <div className='relative flex items-center justify-center w-[140px] h-[140px] md:w-[280px] md:h-[280px] lg:w-72 lg:h-72 rounded-full border-2 bg-[#2657D4] text-lg md:text-4xl font-bold text-white m-auto mt-14 md:mt-28 text-center'>
              <p className='md:px-10'>Sign electronically</p>
              <div className='absolute top-0 md:top-[20px] left-0'>
                <div className='flex items-center justify-center w-[30px] h-[30px] md:w-[60px] md:h-[60px] rounded-full border-2 md:border-4 bg-[#2657D4] text-md font-bold text-white m-auto text-center'>4</div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>
            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <Image className="w-full" src={oneStop} alt='High-End Security' placeholder='blur' />
              <div className='px-10 py-14'>
                <h3 className='text-4xl font-bold'>HIGH-END Security</h3>
                <p className='leading-8 mt-4'>Rest assured, your security is our top priority. Our platform is fortified with advanced, state-of-the-art technology designed to offer robust protection against fraud and hacking attempts, ensuring your peace of mind.</p>
              </div>
            </div>

            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <Image className="w-full" src={friendlySupport} alt='High-End Security' placeholder='blur' />
              <div className='px-10 py-14'>
                <h3 className='text-4xl font-bold'>One-Stop Shop</h3>
                <p className='leading-8 mt-4'>Experience the convenience of comprehensive financial services - from seamless payments and transfers, international remittances, and flexible lending options - all through a single application.</p>
              </div>
            </div>

            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <Image className="w-full" src={highEnd} alt='High-End Security' placeholder='blur' />
              <div className='px-10 py-14'>
                <h3 className='text-4xl font-bold'>Friendly Support</h3>
                <p className='leading-8 mt-4'>Despite being a digital-first application, we ensure round-the-clock support, with our dedicated team available 24/7 to assist you.</p>
              </div>
            </div>

            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <Image className="w-full" src={noHiddenFees} alt='High-End Security' placeholder='blur' />
              <div className='px-10 py-14'>
                <h3 className='text-4xl font-bold'>No Hidden Fees</h3>
                <p className='leading-8 mt-4'>We guarantee full transparency with our fees. You will see all transaction costs clearly outlined beforehand, ensuring there are no hidden charges.</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default WhyMyMonty;
