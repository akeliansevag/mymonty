import React from 'react';
import { websiteName } from '@/app/config';
import Image from 'next/image';
import banner from '@/public/payroll-services.webp';
import bannerMobile from '@/public/payroll-services-mobile.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import { faqData } from './data';
import Accordion from './Accordion';
import Head from 'next/head';

import bnpl from '@/public/personal/bnpl.webp';
import Carousel from '@/app/components/Carousel';
import SectionOne from './SectionOne';

export const metadata = {
    title: websiteName + 'Payroll Services',
    description: '',
};

const loans = () => {
    const carouselData = {
        filters: [
            {
                title: 'Car Loan'
            },
            {
                title: 'House Loan'
            },
            {
                title: 'Plastic Surgery Loan'
            },
            {
                title: 'Student Loan'
            }
        ],
        content: [
            {
                title: 'Drive your dreams',
                description: 'Ready to hit the road in your new car? Apply for your car loan with MyMonty today and experience a hassle-free journey towards owning your dream vehicle!',

                contentImage: '/personal/loans-carousel-1-content.webp',
                backgroundImage: '/personal/car-image-1.webp',
                comingSoon: true
            },
            {
                title: 'Step into Your Dream house',
                description: 'MyMonty\'s house loans are crafted to turn your dream of owning a home into a reality, providing the financial foundation for your perfect abode.',

                contentImage: '/personal/loans-carousel-2-content.webp',
                backgroundImage: '/personal/loans-carousel-2.webp',
                comingSoon: true
            },
            {
                title: 'Boost your confidence',
                description: 'Ready to enhance your confidence and transform your appearance? Apply for your plastic surgery loan with MyMonty today.',

                contentImage: '/personal/loans-carousel-3-content.webp',
                backgroundImage: '/personal/loans-carousel-3.webp',
                comingSoon: true
            },
            {
                title: 'Invest in Your Future',
                description: 'At MyMonty, we\'re dedicated to empowering your educational journey. Trust us to support your academic aspirations.',

                contentImage: '/personal/loans-carousel-4-content.webp',
                backgroundImage: '/personal/loans-carousel-4-image.webp',
                comingSoon: true
            }
        ]
    };
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://mymonty.com.lb/payroll-services/" />
            </Head>
            <section className="flex items-center relative min-h-[calc(100vh-var(--header-height))] w-full bg-[#1965a8]">
                <Image alt='Coins' fill placeholder='blur' quality={100} sizes='100vw' src={banner} className='max-md:hidden object-cover w-full h-full' priority />
                <Image alt='Coins' fill placeholder='blur' quality={100} sizes='100vw' src={bannerMobile} className='md:hidden object-cover w-full h-full' priority />
                <div className="container flex relative z-10">
                    <div className="md:w-2/3">
                        <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase">Subscribe to our payroll services &  
                            <span className="text-[#FDBE00]"> get salary advances before payday!</span></h1>
                        <div className="text-white mt-4">
                            <p>MONTY FINANCE SAL</p>
                            <p>TERMS & CONDITIONS APPLY</p>
                        </div>
                        
                    </div>
                </div>
            </section>
            <SectionOne />
            <section className="mb-20">
                <div className='container'>
                    <div className="text-center">
                        <TextBlock title="Frequently Asked questions" center={true}/>
                    </div>
                        <div className="mt-20">
                            {faqData && (
                                faqData.map((item, index) => {
                                    return (
                                        <Accordion key={index} items={item.children} title={item.title} />
                                    )
                                })
                            )}
                        </div>
                        
                </div>
            </section>
                
            <Carousel data={carouselData} />
            <div id="bnpl">
                <Section>
                    <div className='container text-center'>
                        <TextBlock buttonColor="dark" center={true} title="Buy Now Pay Later (BNPL)" description="More flexible lending options are coming your way, so be prepared for the Buy Now Pay Later option and never miss your favorite brand sales again." button={true} />
                        <Image className='mx-auto mt-10' alt="Happy Girl " src={bnpl} />
                    </div>
                </Section>
            </div>

        </div>
    )
}

export default loans;
