import React from 'react';
import sectionImage from '@/public/sectiontwoimage.webp';
import Image from 'next/image';

const SectionTwo = () => {
    return (
        <section className='bg-white pt-14 pb-14 lg:pt-28 lg:pb-20'>
            <div className='container text-center'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Prepare yourself, it's time for MyMonty</h2>
                <div className='lg:w-1/2 mx-auto'>
                    <p className='leading-8 mt-8'>There's no need to stand in queues or handle stacks of paperwork, you can be up and running in a matter of minutes. Just download the App and create an account. It's as straightforward as that.</p>
                </div>
                <div className='text-center'>
                    <Image alt="Section Image" src={sectionImage} className='mx-auto mt-14' />
                </div>

            </div>
        </section>
    )
}

export default SectionTwo;
