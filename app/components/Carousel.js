'use client';
import React, { useState } from 'react';
import TextBlock from './TextBlock';
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '../AppContext';

const Carousel = ({ data, video, videoMP4URL, videoWEBMURL, center }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { handleOpenModal } = useAppContext();
    const handleSelect = (index) => {
        setSelectedIndex(index);

    };
    return (
        <section className={`${center ? 'flex flex-col justify-center' : ''} relative  min-h-[calc(100vh-(var(--mobile-header-height)))]`
        }>
            {
                video && videoMP4URL && videoWEBMURL && (
                    <video className='w-full h-full object-cover absolute top-0 left-0' width="100%" playsInline autoPlay muted loop controls={false}>
                        <source src={videoWEBMURL} type="video/webm" />
                        <source src={videoMP4URL} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }
            {
                data && data?.content && (
                    data.content.map((item, index) => {
                        let contentClasses =
                            selectedIndex === index
                                ? 'opacity-1'
                                : 'opacity-0';
                        return (
                            <div key={index} className={`absolute py-14 lg:py-28 transition-opacity ease-in duration-[400ms] h-full w-full ${contentClasses}`}>
                                <div className='container gap-10 flex flex-col h-full overflow-hidden text-center relative'>
                                    <div>
                                        <TextBlock center={true} textColor="white" title={item.title} description={item.description} button={false} />
                                        {item.button && !item?.button?.modal && (
                                            <Link className='mm-button white mt-4' href={item.button?.url}>{item.button.text}</Link>
                                        )}
                                        {item.button && item?.button?.modal && (
                                            <button onClick={handleOpenModal} className='mm-button white mt-4' href={item.button?.url}>{item.button.text}</button>
                                        )}
                                    </div>
                                    <div className='flex-1 relative flex justify-center'>
                                        <img className='pb-10 max-w-[250px] md:max-w-[350px] object-contain absolute h-full w-full block' src={item.contentImage} />
                                    </div>

                                </div>
                                {
                                    item?.backgroundImage && (
                                        <Image priority quality={100} sizes='100vw' fill={true} src={item.backgroundImage} alt="Background Image" className='object-cover -z-10' />
                                    )
                                }



                            </div>

                        )
                    })
                )
            }
            <div className='absolute bottom-[20px] md:bottom-[50px] w-full overflow-auto pb-4'>
                <div className='container justify-left flex gap-5 md:justify-center'>
                    {data && data?.filters.map((filter, index2) => {
                        let buttonClasses = index2 === selectedIndex ? ' !bg-[#2657D4] !border-[#2657D4]' : '';
                        return (
                            <div onClick={() => handleSelect(index2)} key={index2} className={` whitespace-nowrap mm-button default hover:bg-[#2657D4] hover:border-[#2657D4] cursor-pointer ${buttonClasses}`}>
                                {filter.title}
                            </div>
                        )

                    })
                    }
                </div>
            </div>
        </section >
    )
}

export default Carousel;
