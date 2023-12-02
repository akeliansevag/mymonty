import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = ({ data }) => {
    return (
        <section className='min-h-[100dvh] w-full relative bg-gray-100'>
            {
                data.image.layout === 'full' && (
                    <>
                        <Image alt='Girl holding a phone' fill placeholder='blur' quality={100} sizes='100vw' src={data.image.url} className='hidden md:block object-cover custom-object-position md:object-center' priority />
                        <Image alt='Girl holding a phone' fill placeholder='blur' quality={100} sizes='100vw' src={data.image.urlMobile} className='block md:hidden object-cover' priority />
                    </>
                )
            }

            <div className='container relative z-1'>
                <div className={`flex flex-col md:flex-row gap-10 md:gap-0 items-center ${data.image.layout !== 'full' ? 'justify-center ' : 'h-[100dvh]'} `}>
                    <div className={`flex flex-col w-full md:w-1/2 md:h-screen justify-center mt-[130px] md:mt-0 ${data.image.layout !== 'full' ? '' : ''}`}>
                        <div>
                            {
                                data?.subtitle && (
                                    <h2 className={`${data.image.layout !== 'full' ? 'mt-4' : ''}`}>{data.subtitle}</h2>
                                )
                            }
                            <h1 className='font-black mt-4 md:mt-0 text-4xl sm:text-5xl md:text-6xl lg:text-[5.4rem] leading-none uppercase'>{data.title}</h1>
                            <p className='text-xl mt-5'>{data.desc}</p>

                            {
                                data.cta.type === 'link' ? (
                                    <Link className='mm-button mt-5' href={data.cta.link.url}>{data.cta.link.name}</Link>
                                ) : (
                                    <button className='mm-button mt-5'>{data.cta.button.name}</button>
                                )
                            }
                        </div>
                    </div>

                    {
                        data.image.layout === 'half' && (
                            <div className='w-full md:w-1/2'>
                                <Image alt='Girl holding a phone' placeholder='blur' quality={100} sizes='100vw' src={data.image.url} className='w-full md:w-2/3 ml-auto' priority />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Banner;
