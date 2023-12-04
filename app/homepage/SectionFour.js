import React from 'react';
import backgroundImage from '@/public/sectionfourbg.webp';
import sectionImage from '@/public/sectionfiveimage.webp';
import Link from 'next/link';
import Image from 'next/image';


const SectionFour = () => {
    return (
        <section className='pt-14 pb-14 lg:pt-28 lg:pb-20 bg-black relative text-white'>
            <Image fill placeholder='blur' quality={100} sizes='100vw' src={backgroundImage} className='object-cover w-full h-full z-0' alt="Background Image" />
            <div className='md:flex md:items-center gap-10 relative z-10'>
                <div className='flex-1 flex justify-end'>
                    <div className='p-4 md:p-0 md:w-2/3'>
                        <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>title is missing here</h2>
                        <p className='leading-8 mt-4'>Become a part of our expats community and enjoy Free P2P cross-border transfers through MyMonty. Instantly send money to more than 160 countries.</p>
                        <Link href="#" className='mm-button white mt-6 mx-auto mb-10'>Try it out</Link>
                    </div>

                </div>
                <div className='flex-1 justify-end flex pb-10 md:pb-0'>
                    <Image src={sectionImage} alt='Section Image' placeholder='blur' />
                </div>
            </div>
        </section>
    )
}

export default SectionFour;
