'use client';
import React from 'react';
import { useAppContext } from '../AppContext';
import { Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const SectionFour = () => {
  const { handleOpenModal } = useAppContext();

  const logos = [
    {
        logo: '/logos/macys.webp'
    },
    {
        logo: '/logos/shein.webp'
    },
    {
        logo: '/logos/gplay.webp'
    },
    {
        logo: '/logos/itunes.webp'
    },
    {
        logo: '/logos/ebay.webp'
    },
    {
        logo: '/logos/amazon.webp'
    },
    {
        logo: '/logos/netflix.webp'
    },
    {
        logo: '/logos/shahed.webp'
    },
    {
        logo: '/logos/spotify.webp'
    },
    {
        logo: '/logos/anghami.webp'
    },
    {
        logo: '/logos/primevideo.webp'
    },
    {
        logo: '/logos/purple.webp'
    },
    {
        logo: '/logos/hulu.webp'
    },
    {
        logo: '/logos/idm.webp'
    },
    {
        logo: '/logos/sodetel.webp'
    },
    {
        logo: '/logos/mobi.webp'
    },
    {
        logo: '/logos/wise.webp'
    },
    {
        logo: '/logos/terranet.webp'
    },
  ];
  return (
    <section className='bg-black lg:py-24 max-lg:py-10'>
        <div className='container text-center text-white'>
            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Your Vouchers Are Waiting!</h2>
            <div className='mx-auto'>
                <p className='leading-8 mt-8'>Are you excited to start browsing? Those vouchers aren’t going to buy themselves!</p>
                <button onClick={handleOpenModal} className='mm-button white mt-8 mx-auto'>Start Shopping Now</button>
            </div>
        </div>
        <div id="logos-slider" className='max-lg:mt-10 lg:mt-24 max-h-[300px] overflow-y-hidden'>
            <Swiper
                modules={[Autoplay]}
                speed={3000}
                spaceBetween={20}
                slidesPerView={10}
                autoplay={{ delay: 1, disableOnInteraction: false }} // Optional: Adjust delay
                loop={true}
                allowTouchMove={false}
                disableOnInteraction={true}
                centeredSlides={true}
                breakpoints={{
                    0: {
                        slidesPerView: 3.5
                    },
                    550: {
                        slidesPerView: 4.5
                    },
                    768: {
                        slidesPerView: 6.5
                    },
                    1100: {
                        slidesPerView: 7.5
                    },
                    1200: {
                        slidesPerView: 8.5
                    },
                    1300: {
                        slidesPerView: 10.5
                    }

                }}
            >
                
                {logos.map((logo)=>{
                    return (
                        <SwiperSlide>
                            <div className='aspect-square rounded-xl bg-[#091111] shrink-0 grow-0 flex items-center justify-center'>
                                <img className='w-1/2 mx-auto' src={logo.logo} />
                            </div>
                        </SwiperSlide>
                        
                    )
                })}
            </Swiper>
        </div>
        
    </section>
  )
}

export default SectionFour;
