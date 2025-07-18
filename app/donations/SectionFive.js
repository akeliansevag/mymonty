'use client';
import React from 'react';

const SectionFive = () => {
    return (
        <div className='bg-black text-white relative flex items-center justify-center py-32 join-us'>
            <div className="join-us-overlay"></div>
            <img src='/donations-join-us.webp' alt='Join Us' className='absolute object-cover w-full h-full' width="1920" height="1280" />
            <div className='container relative text-center z-20'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none max-w-[600px] mx-auto text-balance'>Join Us in Changing Lives!</h2>
            </div>
        </div>
    )
}

export default SectionFive;
