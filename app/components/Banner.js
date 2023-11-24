import bannerImage from '@/public/home-banner.webp';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className='h-screen w-full relative'>
            <Image fill={true} src={bannerImage} className='object-cover' />
        </section>
    )
}

export default Banner;
