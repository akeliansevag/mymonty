'use client';
import React, { useEffect, useRef, useState } from 'react';
import TextBlock from './TextBlock';
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '../AppContext';

const Carousel = ({ data, video, videoMP4URL, videoWEBMURL, center }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [filterClicked, setFilterClicked] = useState(false);
    const [counter, setCounter] = useState(0);
    const [timeoutID, setTimeoutID] = useState(null);
    const { handleOpenModal } = useAppContext();

    const handleSelect = (index) => {
        setSelectedIndex(index);
        setFilterClicked(true);
        setCounter(0);
    };
    const duration = 8;
    const changeSlide = () => {

        setSelectedIndex((prev) => {
            if ((prev + 1) < data.content.length) {
                countUp();
                return prev + 1;
            } else {
                setSelectedIndex(0);
                setCounter(0);
                countUp();
                return prev;
            }
        });
    }
    const countUp = () => {
        for (let j = 0; j <= duration; j++) {
            let tid = setTimeout(() => {
                setCounter(j);
            }, 1000 * j);
            setTimeoutID(tid);
        }
    };

    const stopCounter = () => {
        clearTimeout(timeoutID);
    };

    useEffect(() => {
        if (!filterClicked) {
            countUp();
            let interval = setInterval(changeSlide, duration * 1000);

            return () => {
                clearInterval(interval);
                setCounter(0);
            }
        } else {
            setCounter(0);
            stopCounter();
        }
    }, [filterClicked])
    useEffect(() => {
        setSelectedIndex(0);
    }, [])
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
                                : 'opacity-0 -z-10';
                        return (
                            <div key={index} className={`absolute py-14 lg:py-10 xl:py-10 transition-opacity ease-in duration-[400ms] h-full w-full ${contentClasses}`}>
                                <div className='container gap-6 flex flex-col h-full overflow-hidden text-center relative'>
                                    <div>
                                        {item.comingSoon && (
                                            <div className='rounded-xl mb-5 inline-block text-base py-2 px-4 bg-gradient-to-r from-[#E73E3E] to-[#F02CC2] font-bold italic text-white'>
                                                Coming soon
                                            </div>
                                        )}
                                        <TextBlock center={true} textColor="white" title={item.title} description={item.description} button={false} />
                                        {item.button && !item?.button?.modal && (
                                            <Link className='mm-button !bg-white !text-black mt-4' href={item.button?.url}>{item.button.text}</Link>
                                        )}
                                        {item.button && item?.button?.modal && (
                                            <button onClick={handleOpenModal} className='mm-button white mt-4' href={item.button?.url}>{item.button.text}</button>
                                        )}
                                    </div>
                                    {
                                        item?.contentImage && (
                                            <div className='flex-1 relative flex justify-center'>
                                                <img className={`scale-0 ${selectedIndex === index ? '!scale-100 ' : ''} pb-10 max-w-[250px] md:max-w-[350px] object-contain absolute h-full w-full block transition-all delay-500`} src={item.contentImage} />
                                            </div>
                                        )
                                    }


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
            <div className='absolute bottom-[20px] md:bottom-[20px] lg:bottom-[20px] w-full overflow-auto pb-4'>
                <div className='container justify-left flex gap-5 md:justify-center'>
                    {data && data?.filters.map((filter, index2) => {
                        let buttonClasses = index2 === selectedIndex ? ' !bg-[#2657D4] !border-[#2657D4]' : '';
                        let widthClass = (index2 === selectedIndex && !filterClicked) ? '!w-full transition-all' : 'transition-none w-0';
                        return (
                            <div onClick={() => handleSelect(index2)} key={index2} className={`shrink-0 whitespace-nowrap mm-button default hover:bg-[#2657D4] hover:border-[#2657D4] cursor-pointer ${buttonClasses} relative overflow-hidden z-1`}>
                                <div className={`bg-[#1a3e96] w-0 opacity-80 absolute h-full top-0 left-0 duration-[8s] ease-linear ${widthClass}`}></div>
                                <div className='z-10 block relative'>
                                    {filter.title}
                                </div>
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
