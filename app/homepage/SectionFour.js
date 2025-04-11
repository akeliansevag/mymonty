import React from 'react';
import sectionImage from '@/public/dream-home.webp';
import Link from 'next/link';
import Image from 'next/image';


const SectionFour = () => {
    return (
        <section className='bg-white pt-14 pb-14 lg:pt-28 lg:pb-28'>
            <div className='container text-center'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>TURN YOUR DREAM HOME INTO REALITY</h2>
                <div className='lg:w-1/2 mx-auto'>
                    <p className='leading-8 mt-8'>With MyMonty's house loans, your dream of owning a home is within reach. 
                    Get the financial foundation you need for your perfect <span class="font-bold">HOME</span>.</p>
                </div>
                <Link href="/loans" className='mm-button black mt-8 mx-auto mb-10'>Learn More</Link>
                
                <div className='text-center'>
                    <Image alt="Section Image" src={sectionImage} className='mx-auto mt-14' />
                </div>

            </div>
        </section>
    )
}

export default SectionFour;
