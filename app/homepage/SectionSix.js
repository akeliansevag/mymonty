import React from 'react';
import backgroundImage from '@/public/sectionsixbg2.webp';
import Link from 'next/link';
import Image from 'next/image';

const SectionSix = () => {
    return (
        <section className='pb-14 pt-14 lg:pt-64 lg:pb-20 bg-black relative text-black min-h-[calc(100vh-var(--mobile-header-height))] 2xl:min-h-[70vh]'>
            <Image fill placeholder='blur' quality={100} sizes='100vw' src={backgroundImage} className='object-cover z-0' alt="Background Image" />
            <div className='container'>
                <div className='flex items-center relative z-10'>
                    <div className='md:flex-1 md:flex'>
                        <div className='md:w-2/3'>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>SET IT AND FORGET IT: PAYMENTS MADE EASY</h2>
                            <p className='leading-8 mt-8'>Never miss a payment again with our scheduled and recurring payment options. Enjoy peace of mind and stay on top of your finances.</p>
                            <Link href="/payments" className='mm-button mt-8 mx-auto'>Try It Out</Link>
                        </div>
                    </div>
                    <div className='flex-1 justify-end flex'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSix;
