import React from 'react';
import backgroundImage from '@/public/sectionfourbg.webp';
import sectionImage from '@/public/sectionfiveimage-new.webp';
import Link from 'next/link';
import Image from 'next/image';


const SectionFour = () => {
    return (
        <section className='relative pt-14 pb-14 lg:pt-28  lg:pb-20 min-h-[calc(100vh-var(--mobile-header-height))] flex flex-col justify-center  bg-black text-white overflow-x-hidden'>
            <Image fill placeholder='blur' quality={100} sizes='100vw' src={backgroundImage} className='object-cover w-full h-full z-0' alt="Background Image" />
            <div className='4xl:container md:flex md:items-center gap-10 relative z-10'>
                <div className='flex justify-end 4xl:justify-start 2xl:pl-28 4xl:pl-0'>
                    <div className='p-4 md:p-0 md:w-2/3'>
                        <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Cross-border transfers with MyMonty</h2>
                        <p className='leading-8 mt-8'>Connect globally with your loved ones through MyMonty's expat community.<br />
                            Enjoy free transfers to 160+ countries. Instantly send and receive money.</p>
                        <Link href="/transfers" className='mm-button white mt-8 mx-auto mb-10'>Try it out</Link>
                    </div>

                </div>
                <div className='justify-end flex pb-10 md:pb-0'>
                    <Image src={sectionImage} alt='Section Image' placeholder='blur' className='w-full md:w-4/4 translate-x-[20%] 4xl:translate-x-0' />
                </div>
            </div>
        </section>
    )
}

export default SectionFour;
