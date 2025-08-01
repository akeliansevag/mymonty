'use client';
import Image from 'next/image';
import React from 'react';
import { useAppContext } from '../AppContext';
import AppForm from '@/app/components/Form';
import business from '@/public/business/business4.webp';

const BusinessBanner = () => {
    const { handleOpenModal } = useAppContext();

    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleOriginalOpenModal = () => {
        setFormComponent(<AppForm />);
        setLargeWidth(false);
        handleOpenModal();
    }

    return (
        <section className="pb-14 md:py-20 max-md:pt-[calc(var(--header-height)+20px)] flex flex-col w-full relative bg-black">
            <div className="relative z-1">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center  ">
                        <div className="flex flex-col w-full md:w-1/2 justify-center md:mt-0 ">
                            <div>
                                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase mt-6">MYMONTY: YOUR SUPER DIGITAL WALLET</h1>
                                <p className="text-xl mt-8">Explore innovative ways to manage your finances.</p>
                                <button onClick={handleOriginalOpenModal} className="mm-button mt-8 white">Get The App</button>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <Image alt='Plant Coin' placeholder='blur' quality={100} sizes='100vw' src={business} className='w-full md:w-2/3 ml-auto' priority width='549' height='821' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessBanner;
