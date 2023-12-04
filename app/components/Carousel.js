'use client';
import React, { useState } from 'react';
import TextBlock from './TextBlock';
import Image from 'next/image';
import Link from 'next/link';

const Carousel = ({ data }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleSelect = (index) => {
        setSelectedIndex(index);
    };
    return (
        <section className='relative py-14 lg:py-28 min-h-[calc(100vh-(var(--mobile-header-height)))]'>
            {data && data?.content && (
                data.content.map((item, index) => {
                    let contentClasses =
                        selectedIndex === index
                            ? 'opacity-1 z-0 transition-opacity'
                            : 'opacity-0 -z-100 hidden';
                    return (
                        <div key={index} className={`h-full w-full transition-all ${contentClasses}`}>
                            <div className='container text-center relative'>
                                <TextBlock textColor="white" title={item.title} description={item.description} button={false} />
                                {item.button && (
                                    <Link className='mm-button white mt-4' href={item.button?.url}>{item.button.text}</Link>
                                )}
                                <img className='my-10 mx-auto' src={item.contentImage} />
                            </div>
                            <Image priority quality={100} sizes='100vw' fill={true} src={item.backgroundImage} alt="Background Image" className='object-cover -z-10' />
                        </div>

                    )
                })
            )
            }
            <div className='absolute bottom-[50px] w-full overflow-auto pb-4'>
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

        </section>
    )
}

export default Carousel;
