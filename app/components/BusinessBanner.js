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
        <section className="pt-14 flex flex-col md:pt-20  w-full relative bg-black max-md:pt-14">
            <div className="relative z-1">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-center  ">
                        <div className="flex flex-col w-full md:w-1/2 justify-center md:mt-0 ">
                            <div>
                                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase mt-6">MyMonty Your Super Digital Wallet.</h1>
                                <p className="text-xl mt-8">Explore innovative ways to manage your finances.</p>
                                <button onClick={handleOriginalOpenModal} className="mm-button mt-8 white">Get the app</button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image alt='Girl holding a phone' placeholder='blur' quality={100} sizes='100vw' src={business} className='w-full md:w-2/3 ml-auto' priority />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessBanner;
