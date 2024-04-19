import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import Image from 'next/image';
import banner from '@/public/personal/loans-banner.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';


import bnpl from '@/public/personal/bnpl.webp';
import Carousel from '@/app/components/Carousel';
import SectionOne from './SectionOne';

export const metadata = {
    title: websiteName + 'Loans',
    description: '',
};

const loans = () => {
    const data = {
        title: 'Receive your Advance on Salary',
        subtitle: 'Loans',
        desc: 'Harness the power of MyMonty for hassle-free salary domiciliation and unlock an advance on salary based on your eligibility.',
        image: {
            inGrid: true,
            layout: 'half',
            url: banner,
        },
        cta: {
            type: 'button',
            button: {
                name: 'Download app'
            }
        }
    };
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
                button: {
                    text: 'Learn more',
                    url: '/car-loan',
                },
                contentImage: '/personal/loans-carousel-1-content.webp',
                backgroundImage: '/personal/car-image-1.webp',
                comingSoon: true
            },
            {
                title: 'Step into Your Dream house',
                description: 'MyMonty\'s house loans are crafted to turn your dream of owning a home into a reality, providing the financial foundation for your perfect abode.',
                button: {
                    text: 'Learn more',
                    url: '/house-loan',
                },
                contentImage: '/personal/loans-carousel-2-content.webp',
                backgroundImage: '/personal/loans-carousel-2.webp',
                comingSoon: true
            },
            {
                title: 'Boost your confidence',
                description: 'Ready to enhance your confidence and transform your appearance? Apply for your plastic surgery loan with MyMonty today.',
                button: {
                    text: 'Learn more',
                    url: '/plastic-surgery-loan',
                },
                contentImage: '/personal/loans-carousel-3-content.webp',
                backgroundImage: '/personal/loans-carousel-3.webp',
                comingSoon: true
            },
            {
                title: 'Invest in Your Future',
                description: 'At MyMonty, we\'re dedicated to empowering your educational journey. Trust us to support your academic aspirations.',
                button: {
                    text: 'Learn more',
                    url: '/student-loan',
                },
                contentImage: '/personal/loans-carousel-4-content.webp',
                backgroundImage: '/personal/loans-carousel-4-image.webp',
                comingSoon: true
            }
        ]
    };
    return (
        <div>
            <Banner data={data} />
            <SectionOne />

            <Carousel data={carouselData} />
            <div id="bnpl">
                <Section>
                    <div className='container text-center'>
                        <TextBlock center={true} title="Buy now pay later" description="More flexible lending options are coming your way, so be prepared for the Buy Now Pay Later option and never miss your favorite brand sales again." button={true} />
                        <Image className='mx-auto mt-10' alt="Happy Girl " src={bnpl} />
                    </div>
                </Section>
            </div>

        </div>
    )
}

export default loans;
