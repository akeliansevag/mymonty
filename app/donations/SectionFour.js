'use client';
import React,{useRef} from 'react';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';

import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const SectionFour = () => {
    const swiperElRef = useRef(null);
    const cards = [
        {
            image: '/beit-el-baraka-bg.webp',
            logo: '/beit-el-baraka-logo.webp',
            title: 'Beit El Baraka',
            description: 'is a Lebanon-based NGO supporting vulnerable communities, especially the elderly and children in financial hardship. They provide food, medical care, education, and livelihood support, aiming to prevent poverty and restore dignity to those in need.',
            url: 'https://beitelbaraka.org/',
        },
        {
            image: '/embrace-bg.webp',
            logo: '/embrace-logo.webp',
            title: 'Embrace',
            description: 'is a non-profit focused on mental health awareness and support. They provide accessible counseling services and work to reduce the stigma surrounding mental health, ensuring that more individuals, especially young adults, can seek help.',
            url: 'https://embracelebanon.org/',
        },

    ];
    return (
       <Section>
            <div className='container text-center'>
                <TextBlock center={true} title="Our Trusted Charities" description="We’ve partnered with a variety of trusted organizations to help you support the causes that matter most. And more are always joining the list, so keep checking to see how you can make an impact."/>
            </div>
            <div>
                {/* <div id="charities-slider" className="mt-16 duration-1000 transition-opacity">
                    <Swiper 
                        modules={[Pagination,Autoplay]}
                        ref={swiperElRef}
                        loop={true}
                        autoplay={true}
                        pagination={{   
                            clickable: true,
                            el: '.custom-pagination'
                        }}
                        centeredSlides={true}
                        slidesPerView="1.5"
                        spaceBetween={25}
                        breakpoints={{
                            320: {
                                slidesPerView: "1.1",
                                centeredSlides: false,
                                autoplay: false
                            },
                            992: {
                                slidesPerView: "2.5",
                                centeredSlides: true,
                            },
                            1400: {
                                slidesPerView: "3.5",
                                centeredSlides: true,
                            }
                        }}
                    >

                        {cards.map((card, index) => {
                            return (
                                <SwiperSlide 
                                   
                                    key={index}
                                >
                                    <div className='text-white overflow-hidden relative flex flex-col gap-5 rounded-3xl p-6 bg-black w-full h-full'>
                                        <div className='absolute z-10 inset-0 bg-[linear-gradient(246.5deg,rgba(0,0,0,0.4)_4.01%,rgba(0,0,0,0.8)_65.23%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]'></div>
                                        <img className='absolute top-0 left-0 w-full h-full object-cover' src={card.image}/>
                                        <div className='flex max-lg:items-center max-lg:flex-col lg:justify-between lg:items-center relative gap-5 z-20'>
                                            <div>
                                                <img className='max-lg:w-[100px] max-lg:mx-auto' src={card.logo} />
                                            </div>
                                            <div>
                                                <a target='_blank' className='hover:bg-white text-center hover:text-black rounded-full text-base py-2 px-3 leading-none text-nowrap text-white border border-white' href={card.url}>
                                                    Visit Website
                                                </a>
                                            </div>
                                           
                                        </div>
                                        <div className='relative z-20 max-lg:text-center'>
                                            <h4 className='text-2xl font-bold mb-2'>{card.title}</h4>
                                            <p className='text-base'>{card.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )

                        })}
                    </Swiper>
                    <div className='container text-center'>
                        <div className="custom-pagination"></div>
                    </div>
                </div> */}
            </div>
            <div className='container mt-16 flex gap-5'>
                <div className='grid max-lg:grid-cols-1 lg:grid-cols-2 max-w-[1200px] gap-5 mx-auto'>
                    {cards.map((card, index) => {
                        return (
                            <div key={index} className='text-white overflow-hidden relative flex flex-col gap-5 rounded-[20px] p-6 bg-black w-full h-full'>
                                <div className='absolute z-10 inset-0 bg-[linear-gradient(246.5deg,rgba(0,0,0,0.4)_4.01%,rgba(0,0,0,0.8)_65.23%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]'></div>
                                <img className='absolute top-0 left-0 w-full h-full object-cover' alt={card.title} src={card.image} width="120" height="110" />
                                <div className='flex max-lg:items-center max-lg:flex-col lg:justify-between lg:items-center relative gap-5 z-20'>
                                    <div>
                                        <img className='max-lg:w-[100px] max-lg:mx-auto w-full' alt={card.title} src={card.logo} width="889" height="586" />
                                    </div>
                                    <div className='max-lg:hidden lg:block'>
                                        <a target='_blank' className='hover:bg-white text-center hover:text-black rounded-full text-base py-2 px-3 leading-none text-nowrap text-white border border-white' href={card.url}>
                                            Visit Website
                                        </a>
                                    </div>
                                
                                </div>
                                <div className='relative z-20 flex flex-col gap-3 max-lg:text-center'>
                                    <h4 className='text-2xl font-bold'>{card.title}</h4>
                                    <div className='max-lg:block lg:hidden '>
                                        <a target='_blank' className='hover:bg-white text-center hover:text-black rounded-full text-base py-2 px-3 leading-none text-nowrap text-white border border-white' href={card.url}>
                                            Visit Website
                                        </a>
                                    </div>
                                    <p className='text-base'>{card.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </Section>

    )
}

export default SectionFour;
