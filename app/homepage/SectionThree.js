import Image from 'next/image';
import sectionImage from '@/public/sectionthreeimage2.webp';
import React from 'react';
import Link from 'next/link';

const SectionThree = () => {
    return (
        <section className='pt-14 pb-14 lg:pt-28 lg:pb-20 bg-black text-white'>
            <div className='container text-center'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Explore Our Diverse Range of Cards</h2>
                <div className='lg:w-1/2 mx-auto'>
                    <p className='leading-8 mt-4'>Pick the color and style that matches your lifestyle and personality. Choose between your free Standard card or the Premium card and be ready for the envious looks it attracts.</p>
                    <Link href="#" className='mm-button white mt-6 mx-auto'>Choose your card</Link>
                </div>
                <div className='text-center'>
                    <Image alt="Section Image" src={sectionImage} className='mx-auto mt-14 w-full md:w-2/3' />
                </div>

            </div>
        </section>
    )
}

export default SectionThree;
