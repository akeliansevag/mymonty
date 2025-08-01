import React from 'react';
import sectionImage from '@/public/sectiontwoimage-new.webp';
import Image from 'next/image';

const SectionTwo = () => {
    return (
        <section className='bg-white pt-14 pb-14 lg:pt-28 lg:pb-20'>
            <div className='container text-center'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>RELAX & FOCUS ON WHAT MATTERS</h2>
                <div className='lg:w-1/2 mx-auto'>
                    <p className='leading-8 mt-8'>Forget the lines and paperwork, set up your account in minutes.
                        Download the app, create your account, and you're good to go. Simple as that.</p>
                </div>
                <div className='text-center'>
                    <Image alt="Section Image" src={sectionImage} className='mx-auto mt-14' wdtih="2120" height="983" />
                </div>

            </div>
        </section>
    )
}

export default SectionTwo;
