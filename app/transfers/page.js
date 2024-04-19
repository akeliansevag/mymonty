import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/transfer-couple-1.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/borderless-transfers.webp';
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
        desc: 'Bridge the gap between you and your loved ones by sending them funds home.',
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
                description: 'Easily send money to friends, family, or associates by entering their mobile number, or by tapping on their transfer link or scanning their QR code.',
                button: {
                    text: 'Download app',
                    url: '#',
                    modal: true,
                },
                contentImage: '/personal/send-coffee.webp',
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
                description: 'Send a payment request by specifying the amount and purpose to the recipient\'s number or share your QR/link on messaging platforms.',
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
                description: 'Set up recurring transfers to effortlessly manage your financial tasks and obligations. Funds will be automatically transferred on scheduled dates, as well as the days of recurrence, putting you in complete control.',
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
            <div id="borderless-transfers">
                <section className='pb-0 pt-14 lg:pt-24'>
                    <div className='container flex-col-reverse flex lg:flex-row gap-10 items-center'>
                        <Image className='md:w-full' src={sectionTwo} alt='Image' />
                        <TextBlock buttonColor="dark" title="Borderless transfers" description="Experience swift and direct peer-to-peer (P2P) fund transfers between individuals through MyMonty. Initiate transactions effortlessly using your mobile device, without the delays associated with conventional banking processes, even for cross-border transfers." button={true} />
                    </div>
                </section>
            </div>
            <div id="send">
                <Carousel data={carouselData} />
            </div>

            <Section>
                <div className='container'>
                    <div id="top-up" className='flex flex-col lg:flex-row items-center gap-10'>
                        <TextBlock buttonColor="dark" title="Top up or cash out with our partners" description="Top up your wallet account at any OMT agent, and the funds will be instantly reflected in your account. You have the option to either cash out personally or send a code for a beneficiary to cash out on your behalf." button={true} />
                        <Image className='md:w-1/3' src={sectionFour} alt='Image' />
                    </div>

                    <div id="cash-out" className='mt-20 md:mt-40 flex flex-col-reverse lg:flex-row items-center gap-10'>
                        <Image className='md:w-1/3' src={sectionFive} alt='Image' />
                        <TextBlock buttonColor="dark" title="TOP UP OR CASH OUT THROUGH OUR ATM/BANK NETWORK" description="Conveniently manage your funds by topping up your wallet with ease or seamlessly withdrawing cash at our partner bank ATMs, providing you with a flexible and accessible financial experience." button={true} />
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
