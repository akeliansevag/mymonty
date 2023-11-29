import bannerImage from '@/public/home-banner.webp'
import bannerElement from '@/public/bannerElement.webp';
import girl from '@/public/girl.webp';
import logo from '@/public/mymontylogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Banner = () => {
    return (
        <section className='min-h-[100dvh] w-full relative pt-10 flex flex-col bg-[#DCF4FE] md:bg-transparent'>
            <Image alt='Banner Image' fill placeholder='blur' quality={100} sizes='100vw' src={bannerImage} className='object-cover custom-object-position md:object-center -z-10'
                priority
            />
            <div className='container'>
                <Image alt='Logo' src={logo} priority />
            </div>
            <div className='container p-0 flex flex-col flex-1 md:flex-row md:gap-10'>
                <div className='p-4 md:flex-[2] self-center pb-10'>
                    <div>
                        <h1 className='font-black mt-4 md:mt-0 text-3xl sm:text-5xl md:text-6xl lg:text-[5.4rem] leading-none uppercase'>MyMonty will always have your back.</h1>
                        <p className='text-xl mt-5'>Explore our innovative ways to manage your finances.</p>
                        <Link className='mm-button mt-5' href="#" target='_blank'>Download app</Link>
                    </div>

                </div>

                <div className='flex-1 md:flex-1 flex items-end flex-col justify-end relative'>
                    <Image alt='Banner Image' src={bannerElement}
                        className='z-10 px-4 md:p-0'
                        priorit
                    />
                    <Image fill quality={100} sizes='100vw' alt='Girl Image' src={girl}
                        className='md:hidden object-cover object-top'
                        priority
                    />
                </div>
            </div>

        </section >
    )
}

export default Banner;
