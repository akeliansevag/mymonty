import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


{/* <div class=" relative z-1">
    <div class="absolute flex h-full w-full md:w-9/12 top-0 right-[5%] justify-end items-center" style="right: 5%; width: 50%;">
        <img alt="Girl holding a phone" fetchpriority="high" width="795" height="401" decoding="async" data-nimg="1" class="w-full md:w-2/3" style="color: transparent;" sizes="100vw" srcset="">
    </div>
    <div class="container">
        <div class="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-cener  ">
            <div class="flex flex-col w-full md:w-1/2 md:h-screen justify-center mt-[130px] md:mt-0 ">
                <div>
                    <h2>Travel Loan</h2>
                    <h1 class="font-black text-4xl sm:text-5xl md:text-6xl lg:text-[5.4rem] leading-none uppercasez mt-6">Explore the World</h1>
                    <p class="text-xl mt-8">Ready to set sail on your dream vacation or explore new destinations? Apply for your travel loan with MyMonty today and begin your journey to fulfilling your travel aspirations!</p>
                    <button class="mm-button mt-8">Apply now</button>
                </div>
            </div>
        </div>
    </div>
</div> */}



const Banner = ({ data }) => {
    return (
        <section className={`min-h-[100dvh] w-full relative bg-gray-100 ${data.image.layout !== 'full' || !data.image.inGrid ? 'max-md:pb-14' : ''}`}>
            {
                data.image.layout === 'full' && (
                    <>
                        <Image alt='Girl holding a phone' fill placeholder='blur' quality={100} sizes='100vw' src={data.image.url} className='hidden md:block object-cover custom-object-position md:object-center' priority />
                        <Image alt='Girl holding a phone' fill placeholder='blur' quality={100} sizes='100vw' src={data.image.urlMobile} className='block md:hidden object-cover' priority />
                    </>
                )
            }

            <div className='relative z-1'>
            { 
                data.image.inGrid ? (
                    <div className='container'>
                        <div className={`flex flex-col md:flex-row gap-10 md:gap-0 items-center ${data.image.layout !== 'full' ? 'justify-center ' : 'h-[100dvh]'} `}>
                            <div className={`flex flex-col w-full md:w-1/2 md:h-screen justify-center mt-[130px] md:mt-0 ${data.image.layout !== 'full' ? '' : ''}`}>
                                <div>
                                    {
                                        data?.subtitle && (
                                            <h2>{data.subtitle}</h2>
                                        )
                                    }
                                    <h1 className={`font-black text-4xl sm:text-5xl md:text-6xl lg:text-[5.4rem] leading-none uppercasez ${data.image.layout !== 'full' ? 'mt-6' : ''}`}>{data.title}</h1>
                                    <p className='text-xl mt-8'>{data.desc}</p>

                                    {
                                        data.cta.type === 'link' ? (
                                            <Link className='mm-button mt-8' href={data.cta.link.url}>{data.cta.link.name}</Link>
                                        ) : (
                                            <button className='mm-button mt-8'>{data.cta.button.name}</button>
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
                ) : (
                    <>
                        <div className='container'>
                            <div className={`flex flex-col md:flex-row gap-10 md:gap-0 items-center ${data.image.layout !== 'full' ? 'justify-cente ' : 'h-[100dvh]'} `}>
                                <div className={`flex flex-col w-full md:w-1/2 md:h-screen justify-center mt-[130px] md:mt-0 ${data.image.layout !== 'full' ? '' : ''}`}>
                                    <div>
                                        {
                                            data?.subtitle && (
                                                <h2>{data.subtitle}</h2>
                                            )
                                        }
                                        <h1 className={`font-black text-4xl sm:text-5xl md:text-6xl lg:text-[5.4rem] leading-none uppercasez ${data.image.layout !== 'full' ? 'mt-6' : ''}`}>{data.title}</h1>
                                        <p className='text-xl mt-8'>{data.desc}</p>

                                        {
                                            data.cta.type === 'link' ? (
                                                <Link className='mm-button mt-8' href={data.cta.link.url}>{data.cta.link.name}</Link>
                                            ) : (
                                                <button className='mm-button mt-8'>{data.cta.button.name}</button>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='max-md:container mt-10'>
                            <div className='md:absolute flex h-full w-full md:w-1/2 top-0 right-[5%] justify-end items-center'>
                                <Image alt='Girl holding a phone' placeholder='blur' quality={100} sizes='100vw' src={data.image.url} className='w-full' priority />
                            </div>
                        </div>
                    </>
                )
            }
            </div>
        </section>
    )
}

export default Banner;
