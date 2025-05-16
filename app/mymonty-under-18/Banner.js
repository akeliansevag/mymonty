'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import banner from '@/public/youth-banner.webp';
import youthCard from '@/public/youth-card.webp';

function Banner() {

    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(1);
    const [bannerOpacity, setBannerOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const maxOpacityScroll = windowHeight * 0.2;
            const newOpacity = Math.min(1, scrollPosition / maxOpacityScroll);
            const newBannerOpacity = Math.max(0, 1 - scrollPosition / (windowHeight * 0.4)); // Slower fade for banner
            const newScale = 1 + Math.min(0.1, scrollPosition / (windowHeight * 0.8) * 0.2);  // Scales up to 1.1
            setOpacity(newOpacity);
            setBannerOpacity(newBannerOpacity);
            setScale(newScale);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <section className='flex flex-col relative lg:min-h-[100dvh] pt-[var(--header-height)] overflow-hidden max-lg:pb-32'>
            <img src='/youth-banner.webp' alt='Youth Card' className='absolute top-0 left-0 object-cover object-bottom w-full h-full -z-10' style={{ opacity: bannerOpacity, transition: 'opacity 0.1s linear' }}/>
            <div className='container h-full text-center mt-20 2xl:mt-40'>
                <h1 className='font-black text-[42px] sm:text-5xl md:text-6xl lg:text-[5.4rem] xl:text-[5.4rem] mt-6 leading-none uppercase'>Be life ready</h1>
                <p className='text-xl mt-8'>Your money. Your rules. Your Card.</p>
                <button className='mm-button !bg-white !text-black mt-8'>Download The App</button>
                <Image 
                    quality={100} 
                    sizes='100vw' 
                    priority 
                    placeholder='blur' 
                    alt='Youth Card' 
                    src={youthCard}
                    className={`w-[100%] lg:w-[40%] 2xl:w-1/2 mx-auto mt-10 2xl:mt-20 transition-opacity duration-500`} 
                    style={{ opacity, transform: `scale(${scale})`, transition: 'opacity 0.1s linear, transform 0.3s ease-out' }}
                    width=''
                    height=''
                />
            </div>
        </section>
    )
}

export default Banner