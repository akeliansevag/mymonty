import Image from 'next/image';
import sectionImage from '@/public/sectionthreeimage2.webp';
import React from 'react';
import Link from 'next/link';
import CardsSlider from './CardsSlider';

const SectionThree = () => {
    return (
        <section className='pt-14 pb-14 lg:pt-28 lg:pb-20 bg-black text-white'>
            <div className='container text-center'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>DISCOVER OUR VIRTUAL CARD COLLECTION</h2>
                <div className='lg:w-1/2 mx-auto'>
                    <p className='leading-8 mt-8'>Choose the color and style that suits your vibe. Step into a world of personalized virtual cards made just for you!</p>
                    <Link href="/cards" className='mm-button white mt-8 mx-auto'>Choose Your Card</Link>
                </div>
                {/* <div className='text-center'>
                    <Image alt="Section Image" src={sectionImage} className='mx-auto mt-14 w-full md:w-2/3' />
                </div> */}
            </div>
            <CardsSlider />
        </section>
    )
}

export default SectionThree;
