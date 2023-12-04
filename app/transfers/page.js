import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/transfers-banner.png';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/transfers-section-two.png';
import sectionFour from '@/public/personal/top-up.png';
import sectionFive from '@/public/personal/top-up-bank.png';
import Image from 'next/image';
import Carousel from '../components/Carousel';

export const metadata = {
    title: websiteName + 'Transfers',
    description: '',
};



const transfers = () => {
    const data = {
        title: 'Safely transfer money ',
        subtitle: 'Transfers',
        desc: 'Bridge the gap between you and your loved ones by sending them funds home.Contactless prepaid MasterCard you can use globally.',
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
                title: 'SEND'
            },
            {
                title: 'RECEIVE'
            },
            {
                title: 'REQUEST'
            }
        ],
        content: [
            {
                title: 'Send money',
                description: 'Send a payment request, specifying the amount and purpose to the recipient number or share your QR/Link on chatting platforms.',
                button: {
                    text: 'Download app',
                    url: '#'
                },
                contentImage: '/personal/send-money.png',
                backgroundImage: '/personal/send-money-bg.jpg'
            },
            {
                title: 'Receive money',
                description: 'Effortlessly receive instant funds through our streamlined digital platform, ensuring hassle-free transactions for seamless money management.',
                button: {
                    text: 'Download app',
                    url: '#'
                },
                contentImage: '/personal/receive-money.png',
                backgroundImage: '/personal/receive-money-bg.jpg'
            },
            {
                title: 'Request money',
                description: 'Easily send money to friends, family, or associates by entering their mobile number, or by tapping on their transfer link or scanning their QR.',
                button: {
                    text: 'Download app',
                    url: '#'
                },
                contentImage: '/personal/request-money.png',
                backgroundImage: '/personal/request-money-bg.jpg'
            },

        ]
    };

    const carouselDataTwo = {
        filters: [
            {
                title: 'Recurring'
            },
            {
                title: 'Scheduled Transfers'
            }
        ],
        content: [
            {
                title: 'Recurring',
                description: 'Set up recurring payments and stay in control of your financial tasks and obligations. Establish a recurrent schedule for funds to be transferred automatically including starting and end dates and even days of recurrence.',
                backgroundImage: '/personal/recurring.jpg'
            },
            {
                title: 'Scheduled Transfers',
                description: 'Set up recurring payments and stay in control of your financial tasks and obligations. Establish a recurrent schedule for funds to be transferred automatically including starting and end dates and even days of recurrence.',
                backgroundImage: '/personal/recurring.jpg'
            }

        ]
    };

    return (
        <>
            <Banner data={data} />

            <section className='pb-0 pt-14 lg:pt-24'>
                <div className='container flex-col-reverse flex lg:flex-row gap-10 items-center'>
                    <Image src={sectionTwo} alt='Image' />
                    <TextBlock title="Borderless transfers" description="Indulge the seamless and direct transfer of funds between individuals through MyMonty. Initiate transactions using your mobile devices, eliminating the need for traditional intermediaries like banks even for cross-border transfers." button={true} />
                </div>
            </section>
            <Carousel data={carouselData} />
            <Section>
                <div className='container'>
                    <div className='flex flex-col lg:flex-row items-center gap-10'>
                        <TextBlock title="Top up or cash out with our partners" description="Top up your wallet account at any OMT agent, the funds will be reflected instantly in your wallet account. You can cash out yourself or send a code for a beneficiary to cash out on your behalf." button={true} />
                        <Image src={sectionFour} alt='Image' />
                    </div>

                    <div className='mt-40 flex flex-col-reverse lg:flex-row items-center gap-10'>
                        <Image src={sectionFive} alt='Image' />
                        <TextBlock title="Top up or cash out by ATM/bank network" description="Top up your wallet or cash out at our partner bank ATM or bank counter." button={true} />
                    </div>

                </div>
            </Section>
            <Carousel data={carouselDataTwo} />
        </>
    )
}

export default transfers;
