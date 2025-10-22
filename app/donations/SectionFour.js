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
        {
            image: '/oum-el-nour-bg.webp',
            logo: '/oum-el-nour-logo.webp',
            title: 'Oum el Nour',
            description: 'is a Lebanese non-profit organization dedicated to helping individuals overcome addiction. They provide prevention, rehabilitation, and reintegration programs, raising awareness about the dangers of drug use while offering a safe space for people struggling with addiction to heal and rebuild their lives.',
            url: 'https://www.oumelnour.org/',
        },
        {
            image: 'lebmedcare-bg.webp',
            logo: '/lebmedcare-logo.webp',
            title: 'Lebmedcare',
            description: 'is a Lebanese non-profit organization committed to providing essential medical assistance. They provide medications and health resources to those in need, helping ensure that more people receive the medical care they deserve during these challenging times in Lebanon.',
            url: 'https://teams.microsoft.com/l/message/19:1e9e400b-1c04-4367-8a7c-2f8f9ec0841c_6bc8b70c-6929-4ae7-9291-6a5c076bc2f0@unq.gbl.spaces/1761054436161?context=%7B%22contextType%22%3A%22chat%22%7D',
        },
        {
            image: '/tamanna-bg.webp',
            logo: '/tamanna-logo.webp',
            title: 'Tamanna',
            description: 'is a Lebanese non-profit organization that grants the wishes of children with critical illnesses. They turn children’s wishes into reality giving them hope and strength during times of stress and hardship.',
            url: 'https://www.tamanna.me/',
        },
        
    ];
    return (
       <Section>
            <div className='container text-center'>
                <TextBlock center={true} title="Our Trusted Charities" description="We’ve partnered with a variety of trusted organizations to help you support the causes that matter most. And more are always joining the list, so keep checking to see how you can make an impact."/>
            </div>
            <div>
                <div id="charities-slider" className="mt-16 duration-1000 transition-opacity">
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
                                    className="!h-auto"
                                    key={index}
                                >
                                    <div className='text-white overflow-hidden relative flex flex-col gap-5 rounded-3xl p-6 bg-black w-full h-full'>
                                        <div className='absolute z-10 inset-0'></div>
                                        <img className='absolute top-0 left-0 w-full h-full object-cover' src={card.image}/>
                                        <div className='flex max-lg:items-center max-lg:flex-col lg:justify-between lg:items-center relative gap-5 z-20'>
                                            <div className='aspect-square w-[120px] flex items-center justify-center'>
                                                <img className='w-full' src={card.logo} />
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
                </div>
            </div>
            {/* <div className='container mt-16 flex gap-5'>
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
                
            </div> */}
        </Section>

    )
}

export default SectionFour;
