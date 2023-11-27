import React, { Suspense } from 'react';
import backgroundImage from '@/public/sectionsixbg.webp';
import Link from 'next/link';
import Image from 'next/image';

const SectionSix = () => {
    return (
        <Suspense fallback={(<div className='text-white'>Loading...</div>)}>
            <section className='pb-14 pt-14 lg:pt-64 lg:pb-20 bg-black relative text-white min-h-screen'>
                <Image fill={true} src={backgroundImage} className='object-cover w-full h-full absolute top-0 left-0 z-0' alt="Background Image" />
                <div className='flex items-center relative z-10'>
                    <div className='md:flex-1 md:flex justify-end'>
                        <div className='p-4 md:w-2/3'>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl text-[2.875rem] leading-none'>Don't ever miss a payment again</h2>
                            <p className='leading-8 mt-4'>Try our scheduled and recurring payment method and rest your mind</p>
                            <Link href="#" className='mm-button white mt-6 mx-auto'>See how to send</Link>
                        </div>

                    </div>
                    <div className='flex-1 justify-end flex'>
                    </div>
                </div>
            </section>
        </Suspense>

    )
}

export default SectionSix;
