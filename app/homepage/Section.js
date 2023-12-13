import React from 'react';
import backgroundImage from '@/public/sectionsixbg.webp';
import Link from 'next/link';
import Image from 'next/image';

const Section = () => {
    return (
        <section className='pb-14 pt-14 lg:pt-64 lg:pb-20 bg-black relative text-black min-h-[calc(100vh-var(--mobile-header-height))] 2xl:min-h-[70vh]'>
            {/* <Image fill placeholder='blur' quality={100} sizes='100vw' src={backgroundImage} className='object-cover z-0' alt="Background Image" /> */}
            <video className='w-full h-full object-cover absolute top-0 left-0' width="100%" playsInline autoPlay muted loop controls={false}>
                <source src='/house-loan.webm' type="video/webm" />
                <source src='/house-loan.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='container'>
                <div className='flex items-center relative z-10'>
                    <div className='flex-1 justify-end flex'>
                    </div>
                    <div className='md:flex-1 md:flex justify-end relative'>
                        <div className='md:w-2/3'>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Choose MyMonty for Your House Loan</h2>
                            <p className='leading-8 mt-8'>MyMonty's house loans are crafted to turn your dream of owning a home into a reality, providing the financial foundation for your perfect abode.</p>
                            <Link href="/house-loan" className='mm-button white mt-8 mx-auto'>Learn more</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section;
