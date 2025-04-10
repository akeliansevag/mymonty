import React from 'react';
import backgroundImage from '@/public/sectionsixbg.webp';
import backgroundImage1 from '@/public/sectionsixbg1.webp';
import Link from 'next/link';
import Image from 'next/image';

const Section = () => {
    return (
        <section className='flex items-center pb-14 pt-14 lg:pt-20 lg:pb-20 bg-black relative text-black min-h-[calc(100vh-var(--mobile-header-height))]'>
            {/* <Image fill placeholder='blur' quality={100} sizes='100vw' src={backgroundImage1} className='object-cover z-0' alt="Background Image" /> */}
            <video className='w-full h-full object-cover absolute top-0 left-0' width="100%" playsInline autoPlay muted loop controls={false}>
                <source src='/house-loan.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='container'>
                <div className='flex items-center relative z-10'>
                    <div className='md:flex-1 md:flex relative text-center'>
                        <div className='md:w-1/2 mx-auto'>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>TURN YOUR DREAM HOME INTO REALITY</h2>
                            <p className='leading-8 mt-8'>With MyMonty's house loans, your dream of owning a home is within reach.<br />
                                Get the financial foundation you need for your perfect <strong>HOME.</strong></p>
                            <Link href="/house-loan" className='mm-button black mt-8 mx-auto'>Learn More</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section;
