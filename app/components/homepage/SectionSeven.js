import React from 'react';
import Link from 'next/link';

const SectionSeven = () => {
    return (
        <section className='pt-14 pb-14 lg:pt-28 lg:pb-20 bg-black text-white'>
            <div className='container text-center'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl text-[2.875rem] leading-none'>Download the app now</h2>
                <div className='md:w-1/2 mx-auto'>
                    <p className='leading-8 mt-4'>Skip the hustle and bustle and get straight to the money. Request it from anyone across the globe via a link!</p>
                    <Link href="#" className='mm-button white mt-6 mx-auto'>Download app</Link>
                </div>
            </div>
        </section>
    )
}

export default SectionSeven;
