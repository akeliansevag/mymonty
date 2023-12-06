import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import Image from 'next/image';
import banner from '@/public/personal/loans-banner.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import free from '@/public/personal/free.webp';
import installment from '@/public/personal/installment.webp';
import twopointfive from '@/public/personal/2.5.webp';

import bnpl from '@/public/personal/bnpl.webp';
import Carousel from '@/app/components/Carousel';

export const metadata = {
    title: websiteName + 'Loans',
    description: '',
};

const loans = () => {
    const data = {
        title: 'Receive your Advance on Salary',
        subtitle: 'Loans',
        desc: 'Harness the power of MyMonty for hassle-free salary domiciliation and unlock early salary advances based on your eligibility.',
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
                    text: 'Apply now',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/loans-carousel-1-content.webp',
                backgroundImage: '/personal/loans-carousel-1-image.webp'
            },
            {
                title: 'Step into Your Dream house',
                description: 'MyMonty\'s house loans are crafted to turn your dream of owning a home into a reality, providing the financial foundation for your perfect abode.',
                button: {
                    text: 'Apply now',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/loans-carousel-2-content.webp',
                backgroundImage: '/personal/loans-carousel-2.webp'
            },
            {
                title: 'Step into Your Dream house',
                description: 'MyMonty\'s house loans are crafted to turn your dream of owning a home into a reality, providing the financial foundation for your perfect abode.',
                button: {
                    text: 'Apply now',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/loans-carousel-3-content.webp',
                backgroundImage: '/personal/loans-carousel-3.webp'
            },
            {
                title: 'Step into Your Dream house',
                description: 'MyMonty\'s house loans are crafted to turn your dream of owning a home into a reality, providing the financial foundation for your perfect abode.',
                button: {
                    text: 'Apply now',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/loans-carousel-4-content.webp',
                backgroundImage: '/personal/loans-carousel-4-image.webp'
            }
        ]
    };
    return (
        <div>
            <Banner data={data} />
            <div id="advance-on-salary">
                <Section>
                    <div className='container overflow-hidden text-center'>
                        <TextBlock center={true} title="Advance on Salary" description="Have you ever faced an urgent payment? Or missed a black Friday for that “insufficient funds in your account” message? With MyMonty early Salary, you will have access to a portion of your next salary in advance to spend and return at your convenience with 3 flexible options." button={true} />
                        <div className='flex flex-col md:flex-row gap-10 items-center justify-center mt-10'>
                            <div>
                                <Image className='' alt="Free" src={free} />
                            </div>
                            <div>
                                <Image className='' alt="Installment" src={installment} />
                            </div>
                            <div>
                                <Image className='' alt="Two Point Five" src={twopointfive} />
                            </div>

                        </div>

                    </div>
                </Section>
            </div>

            <Carousel data={carouselData} />
            <div id="bnpl">
                <Section>
                    <div className='container text-center'>
                        <TextBlock center={true} title="Buy now pay later" description="More flexible lending options are coming your way, so be prepared for the Buy Now Pay Later option and never miss your favorite brand sale no more." button={true} />
                        <Image className='mx-auto mt-10' alt="Happy Girl " src={bnpl} />
                    </div>
                </Section>
            </div>

        </div>
    )
}

export default loans;
