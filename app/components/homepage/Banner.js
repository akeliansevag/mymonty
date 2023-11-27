import bannerImage from '@/public/home-banner.webp'
import bannerElement from '@/public/bannerElement.webp';
import logo from '@/public/mymontylogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Banner = () => {
    return (
        <section className='min-h-screen w-full relative pt-10 flex flex-col'>
            <Image alt='Banner Image' fill={true} src={bannerImage} className='object-cover absolute top-0 left-0 -z-10'
                priority
            />
            <div className='container'>
                <Image alt='Logo' src={logo} priority />
            </div>
            <div className='container md:flex md:flex-1 md:gap-10'>
                <div className='flex-[2] self-center pb-10'>
                    <div>
                        <h1 className='font-black mt-4 md:mt-0 text-3xl sm:text-5xl md:text-6xl lg:text-[5.4rem] leading-none uppercase'>MyMonty will always have your back.</h1>
                        <p className='text-xl mt-5'>Explore our innovative ways to manage your finances.</p>
                        <Link className='mm-button mt-5' href="#" target='_blank'>Download app</Link>
                    </div>

                </div>
                <div className='flex-1 flex items-end'>
                    <Image alt='Banner Image' src={bannerElement}
                        className=''
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner;
