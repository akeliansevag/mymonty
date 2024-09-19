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
        comingSoon: true,
        desc: 'Unlock hassle-free salary domiciliation with MyMonty and get an advance on your salary based on your eligibility.',
        image: {
            inGrid: true,
            layout: 'half',
            url: banner,
        },
        cta: {
            type: 'button',
            button: {
                name: 'Download App'
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
            <Banner data={data} />
            <SectionOne />

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
