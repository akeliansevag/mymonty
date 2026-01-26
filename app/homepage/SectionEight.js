'use client';
import React from 'react';
import sectionImage from '@/public/section5bg.webp';
import Image from 'next/image';
import { useAppContext } from '@/app/AppContext';

const SectionEight = () => {
    const { handleOpenModal } = useAppContext();
    
    return (
        <section className='relative bg-[#0C1015] py-14 lg:py-24 text-white'>
            <div className='container'>
                <div className='flex flex-col md:flex-row max-lg:gap-10 lg:gap-32 items-center'>
                    <div className='w-full lg:w-1/2'>
                        <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>Real people. <br />Real help. <br />When you need it.</h2>
                        <p className='leading-8 mt-8'>Get instant access to our dedicated support team directly from the web. Whether you have a question, need assistance, or suspect unusual activity. We’re always here to help.</p>
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                        <div className='flex items-center gap-8 bg-[#20242A] rounded-3xl py-8 px-8 lg:px-14'>
                            <img className='' src='/phone-black.svg' />
                            <p>Call us on <br /><a className="text-2xl lg:text-5xl font-bold" href='callto:01734020'>01 734020</a></p>
                        </div>
                        <div className='flex items-center gap-8 bg-[#20242A] rounded-3xl py-8 px-8 lg:px-14'>
                            <img className='' src='/message-black.svg' />
                            <p>Chat on Whatsapp <br /><a className="text-2xl lg:text-5xl font-bold" href='https://wa.me/71871871'>71 871871</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionEight;
