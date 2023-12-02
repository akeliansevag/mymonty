import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = ({ data }) => {
    return (
        <section className='min-h-[100dvh] w-full relative bg-gray-100'>
            {
                data.image.layout === 'full' && (
                    <Image alt='Girl holding a phone' fill placeholder='blur' quality={100} sizes='100vw' src={data.image.url} className='object-cover custom-object-position md:object-center' priority />
                )
            }

            <div className='container relative z-1'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='flex flex-col w-1/2 h-screen justify-center'>
                        <div>
                            {
                                data?.subtitle && (
                                    <h2 className=''>{data.subtitle}</h2>
                                )
                            }
                            <h1 className='font-black mt-4 md:mt-0 text-3xl sm:text-5xl md:text-6xl lg:text-[5.4rem] leading-none uppercase'>{data.title}</h1>
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
                            <div className='w-1/2'>
                                <Image alt='Girl holding a phone' placeholder='blur' quality={100} sizes='100vw' src={data.image.url} className='object-cover custom-object-position md:object-center -z-10 ml-auto' priority />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Banner;
