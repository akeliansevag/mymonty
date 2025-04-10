import React from 'react';
import backgroundImage from '@/public/homepage-crossborder.webp';
import sectionImage from '@/public/homepage-crossborder.webp';
import Link from 'next/link';
import Image from 'next/image';


const SectionFour = () => {
    return (
        <section className='relative pt-14 pb-14 lg:pt-28 lg:pb-20 min-h-[calc(100vh-var(--mobile-header-height))] flex flex-col justify-center  bg-black text-white overflow-x-hidden'>
            {/* <Image fill placeholder='blur' quality={100} sizes='100vw' src={backgroundImage} className='object-cover w-full h-full z-0' alt="Background Image" /> */}
            <video className='w-full h-full object-cover absolute top-0 left-0' width="100%" playsInline autoPlay muted loop controls={false}>
                <source src='/sectionfourvideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='container md:flex md:items-center gap-10 relative z-10'>
                <div className='flex justify-start'>
                    <div className='p-4 md:p-0 md:w-[45%]'>
                        <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>SEND MONEY ACROSS THE GLOBE WITH EASE</h2>
                        <p className='leading-8 mt-8'>Join MyMonty's expat community and enjoy free P2P transfers to 160+ countries. Instantly send and receive money; globally, effortlessly.</p>
                        <Link href="/transfers" className='mm-button white mt-8 mx-auto mb-10'>Try it Out</Link>
                    </div>

                </div>
                {/* <div className='justify-end flex pb-10 md:pb-0'>
                    <Image src={sectionImage} alt='Section Image' placeholder='blur' className='w-full md:w-4/4 translate-x-[20%] 4xl:translate-x-0' />
                </div> */}
            </div>
        </section>
    )
}

export default SectionFour;
