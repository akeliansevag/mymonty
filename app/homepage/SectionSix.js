import React from 'react';
import backgroundImage from '@/public/sectionsixbg.webp';
import Link from 'next/link';
import Image from 'next/image';

const SectionSix = () => {
    return (
        <section className='pb-14 pt-14 lg:pt-64 lg:pb-20 bg-black relative text-white min-h-[calc(100vh-var(--mobile-header-height))] 2xl:min-h-[70vh]'>
            <Image fill placeholder='blur' quality={100} sizes='100vw' src={backgroundImage} className='object-cover z-0' alt="Background Image" />
            <div className='container'>
                <div className='flex items-center relative z-10'>
                    <div className='md:flex-1 md:flex'>
                        <div className='md:w-2/3'>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Don't ever miss a payment again</h2>
                            <p className='leading-8 mt-8'>Try our scheduled and recurring payment method for peace of mind.</p>
                            <Link href="/payments" className='mm-button white mt-8 mx-auto'>Try it out</Link>
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
