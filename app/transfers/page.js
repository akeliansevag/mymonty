import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/transfers-banner.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/transfers-section-two.webp';
import sectionFour from '@/public/personal/top-up.webp';
import sectionFive from '@/public/personal/top-up-bank.webp';
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
                    url: '#',
                    modal: true,
                },
                contentImage: '/personal/send-money.webp',
                backgroundImage: '/personal/send-money-bg.webp'
            },
            {
                title: 'Receive money',
                description: 'Effortlessly receive instant funds through our streamlined digital platform, ensuring hassle-free transactions for seamless money management.',
                button: {
                    text: 'Download app',
                    url: '#',
                    modal: true,
                },
                contentImage: '/personal/receive-money.webp',
                backgroundImage: '/personal/receive-money-bg.webp'
            },
            {
                title: 'Request money',
                description: 'Easily send money to friends, family, or associates by entering their mobile number, or by tapping on their transfer link or scanning their QR.',
                button: {
                    text: 'Download app',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/request-money.webp',
                backgroundImage: '/personal/request-money-bg.webp'
            },

        ]
    };

    const carouselDataTwo = {
        filters: [
            {
                title: 'Recurring Transfers'
            },
            {
                title: 'Scheduled Transfers'
            }
        ],
        content: [
            {
                title: 'Seamless Recurring transfers',
                description: 'Set up recurring transfers and stay in control of your financial tasks and obligations, funds will be transferred automatically including starting and end dates and even days of recurrence.',
            },
            {
                title: 'Streamline Transfers',
                description: 'Set up a schedule for your automated transactions and streamline financial tasks, offering convenience, saving time, and contributing to a more organized and stress-free financial life.',
            }

        ]
    };

    return (
        <>
            <Banner data={data} />
            <div id="p2p-remittance">
                <section className='pb-0 pt-14 lg:pt-24'>
                    <div className='container flex-col-reverse flex lg:flex-row gap-10 items-center'>
                        <Image className='md:w-1/2' src={sectionTwo} alt='Image' />
                        <TextBlock title="Borderless transfers" description="Indulge the seamless and direct transfer of funds between individuals through MyMonty. Initiate transactions using your mobile devices, eliminating the need for traditional intermediaries like banks even for cross-border transfers." button={true} />
                    </div>
                </section>
            </div>
            <div id="send">
                <Carousel data={carouselData} />
            </div>

            <Section>
                <div className='container'>
                    <div id="top-up" className='flex flex-col lg:flex-row items-center gap-10'>
                        <TextBlock title="Top up or cash out with our partners" description="Top up your wallet account at any OMT agent, the funds will be reflected instantly in your wallet account. You can cash out yourself or send a code for a beneficiary to cash out on your behalf." button={true} />
                        <Image className='md:w-1/3' src={sectionFour} alt='Image' />
                    </div>

                    <div id="cash-out" className='mt-40 flex flex-col-reverse lg:flex-row items-center gap-10'>
                        <Image className='md:w-1/3' src={sectionFive} alt='Image' />
                        <TextBlock title="Top up or cash out by ATM/bank network" description="Top up your wallet or cash out at our partner bank ATM or bank counter." button={true} />
                    </div>

                </div>
            </Section>
            <div id="recurring">
                <Carousel center={true} video={true} videoMP4URL='/falling-coins.mp4' videoWEBMURL='/falling-coins.webm' data={carouselDataTwo} />
            </div>

        </>
    )
}

export default transfers;
