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
    title: 'Money Transfers | Send & Receive Funds' + websiteName,
    description: 'Send money effortlessly within Lebanon or globally with MyMonty. Enjoy fast, secure & low-fee digital transfers. Start sending now!',
};



const transfers = () => {
    const data = {
        title: 'Safely transfer money',
        subtitle: 'Transfers',
        desc: 'Stay connected with loved ones by sending them funds effortlessly and securely.',
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
                title: 'Send Money'
            },
            {
                title: 'Receive Money'
            },
            {
                title: 'Request Money'
            }
        ],
        content: [
            {
                title: 'Send money',
                description: 'Send money to friends, family, or associates easily by entering their mobile number, tapping their transfer link, or scanning their QR code.',
                button: {
                    text: 'Download App',
                    url: '#',
                    modal: true,
                },
                contentImage: '/personal/send-coffee.webp',
                backgroundImage: '/personal/send-money-bg.webp'
            },
            {
                title: 'Receive money',
                description: 'Receive instant funds seamlessly through our streamlined digital platform for hassle-free money management.',
                button: {
                    text: 'Download App',
                    url: '#',
                    modal: true,
                },
                contentImage: '/personal/receive-money.webp',
                backgroundImage: '/personal/receive-money-bg.webp'
            },
            {
                title: 'Request money',
                description: 'Send a payment request with the amount and purpose to the recipient’s number, or share your QR/link on messaging platforms.',
                button: {
                    text: 'Download App',
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
                    <div className='container'>
                        <div className='flex-col-reverse flex lg:flex-row gap-10 items-center'>
                            <div>
                                <img className='md:w-full' src="/personal/borderless-transfers.webp" alt='Borderless transfers' width="1044" height="1441" />
                            </div>
                            <TextBlock buttonColor="dark" title="Borderless transfers" description="Swift and direct peer-to-peer (P2P) transfers are just a tap away with MyMonty. Enjoy hassle-free cross-border transactions without the usual banking delays." button={true} />
                        </div>
                    </div>
                </section>
            </div>
            <div id="send">
                <Carousel data={carouselData} />
            </div>

            <div id="recurring-transfers">
                <Section>
                    <div className='container'>
                        <div id="top-up" className='flex flex-col lg:flex-row items-center gap-10'>
                            <TextBlock buttonColor="dark" title="SEAMLESS RECURRING TRANSFERS" description="Effortlessly manage your finances with recurring transfers. Schedule automatic transfers on your chosen dates and stay in control." button={true} />
                            <Image className='md:w-1/3' src={sectionFour} alt='Image' width="920" height="1252" />
                        </div>

                        {/* <div id="cash-out" className='mt-20 md:mt-40 flex flex-col-reverse lg:flex-row items-center gap-10'>
                        <Image className='md:w-1/3' src={sectionFive} alt='Image' />
                        <TextBlock buttonColor="dark" title="TOP UP OR CASH OUT THROUGH OUR ATM/BANK NETWORK" description="Conveniently manage your funds by topping up your wallet with ease or seamlessly withdrawing cash at our partner bank ATMs, providing you with a flexible and accessible financial experience." button={true} />
                    </div> */}

                    </div>
                </Section>
            </div>

            {/* <div id="recurring">
                <Carousel center={true} video={true} videoMP4URL='/falling-coins.mp4' videoWEBMURL='/falling-coins.webm' data={carouselDataTwo} />
            </div> */}

            <div id="streamline-transfers" className=' min-h-[calc(100vh-(var(--mobile-header-height)))] relative flex items-center justify-center text-center bg-black text-white'>
                <video className='w-full h-full object-cover absolute top-0 left-0' width="100%" playsInline autoPlay muted loop controls={false}>
                    <source src='/falling-coins.webm' type="video/webm" />
                    <source src='/falling-coins.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='relative z-10 container '>
                    <TextBlock center={true} title="STREAMLINE TRANSFERS" description="Automate your transactions for a stress-free financial life. Schedule transfers to save time and stay organized." />
                </div>

            </div>

        </>
    )
}

export default transfers;
