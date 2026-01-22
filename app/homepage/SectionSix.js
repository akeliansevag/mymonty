'use client';
import React, { useState } from 'react';
import sectionImage from '@/public/sectionsiximage-new.webp';
import Image from 'next/image';
import { useAppContext } from '@/app/AppContext';

const SectionSix = () => {
    const { handleOpenModal } = useAppContext();

    const [selectedCard, setSelectedCard] = useState('worldelite');

    const cardMedia = {
        worldelite: {
            video: '/we-video.mp4',
            image: '/section6-we.webp',
        },
        platinum: {
            video: '/platinum-video.mp4',
            image: '/section6-platinum.webp',
        },
    };


    return (
        <section className="bg-white py-14 lg:py-28">
            <div className="container text-center">
                <h2 className="uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">
                    Credit Cards
                </h2>

                <div className="lg:w-1/2 mx-auto">
                    <p className="leading-8 mt-8">
                        Freedom to spend. Power to choose. <br />
                        Issued in Eur and USD.
                    </p>

                    <button
                        onClick={handleOpenModal}
                        className="mm-button mt-8"
                    >
                        Explore Credit Cards
                    </button>
                </div>

                {/* Video Section */}
                <div className="relative mt-14 rounded-3xl overflow-hidden">

                    {/* WORLD ELITE VIDEO */}
                    <video
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            selectedCard === 'worldelite'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source
                            src={cardMedia.worldelite.video}
                            type="video/mp4"
                        />
                    </video>

                    {/* PLATINUM VIDEO */}
                    <video
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            selectedCard === 'platinum'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source
                            src={cardMedia.platinum.video}
                            type="video/mp4"
                        />
                    </video>

                    {/* Keeps height/layout stable */}
                    <Image
                        src={sectionImage}
                        alt=""
                        className="invisible w-full"
                        width={2120}
                        height={983}
                        priority
                    />

                    {/* Floating Card Image */}
                    <img
                        src={cardMedia[selectedCard].image}
                        alt="Credit Card"
                        className="absolute top-1/2 right-0 lg:right-[100px] -translate-y-1/2 w-1/3 transition-all duration-300"
                    />

                    {/* Buttons */}
                    <div className="absolute bottom-[10px] lg:bottom-[50px] left-1/2 -translate-x-1/2 flex gap-4 lg:gap-8">
                        <button
                            onClick={() => setSelectedCard('worldelite')}
                            className={`replace border py-2 px-4 rounded-full whitespace-nowrap text-sm lg:text-base text-white ${
                                selectedCard === 'worldelite'
                                    ? 'bg-[#2657D4] border-[#2657D4]'
                                    : 'border-white bg-transparent hover:border-[#2657D4] hover:bg-[#2657D4]'
                            }`}
                        >
                            World Elite Credit Card
                        </button>

                        <button
                            onClick={() => setSelectedCard('platinum')}
                            className={`replace border py-2 px-4 rounded-full whitespace-nowrap text-sm lg:text-base text-white ${
                                selectedCard === 'platinum'
                                    ? 'bg-[#2657D4] border-[#2657D4]'
                                    : 'border-white bg-transparent hover:border-[#2657D4] hover:bg-[#2657D4]'
                            }`}
                        >
                            Platinum Credit Card
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionSix;
