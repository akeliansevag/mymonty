import React from 'react';
import bannerImage from '@/public/salary-domiciliation-banner.webp';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className='lg:py-32 max-lg:py-16 bg-black'>
        <div className='container'>
            <div className='flex gap-10 items-center max-lg:flex-col'>
                <div className='max-lg:w-full lg:w-2/3 flex flex-col gap-5'>
                    <h1 className='text-balance font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase mt-6'>Simplify Payroll with MyMonty</h1>
                    <p className='text-balance'>Simplify salary disbursements and empower your team with instant access to Financial Benefits.</p>
                    <div>
                        <button data-to="contact-us" className="mm-button white">Book Your Demo</button>
                    </div>
                    
                </div>
                <div className='max-lg:w-full lg:w-1/3'>
                    <div className='w-full rounded-3xl overflow-hidden'>
                        <Image alt='Salary' placeholder='blur' quality={100} sizes='100vw' src={bannerImage} className='w-full' priority width='1000' height='1266' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner;
