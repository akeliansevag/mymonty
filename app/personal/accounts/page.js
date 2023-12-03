import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/personal/accounts-banner.png';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwoImage from '@/public/personal/accounts-cards.png';
import coins from '@/public/personal/coins.png';
import Carousel from '@/app/components/Carousel';

export const metadata = {
    title: websiteName + 'Accounts',
    description: '',
};

const accounts = () => {
    const data = {
        title: 'Unlocking Your Account the Easiest Way',
        subtitle: 'Accounts',
        desc: 'Experience convenience like never before as you unlock your account hassle-free!',
        image: {
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
                title: 'Top up by card'
            },
            {
                title: 'Top up by request'
            },
            {
                title: 'Top up with our partners'
            },
            {
                title: 'Top up by ATM'
            }
        ],
        content: [
            {
                title: 'Top up by Card',
                description: 'Top up your wallet account using any Fresh USD bank Card, and see the balance updated instantly with no hidden fees, for free from your MyMonty card.',
                button: {
                    text: 'Choose your card',
                    url: '#'
                },
                contentImage: '/personal/accounts-carousel-1-content.png',
                backgroundImage: '/personal/accounts-carousel-1.jpg'
            },
            {
                title: 'Top up by request',
                description: 'Request money from any MyMonty user directly by selecting them from your contact list or via link or QR code.',
                button: {
                    text: 'Choose your card',
                    url: '#'
                },
                contentImage: '/personal/accounts-carousel-2-content.png',
                backgroundImage: '/personal/accounts-carousel-2.jpg'
            },
            {
                title: 'Top up with our partners',
                description: 'Top up your wallet accounts by depositing money at more than 1400 OMT locations across Lebanon for more convenience. Your money is reflected instantly in your wallet.',
                button: {
                    text: 'Choose your card',
                    url: '#'
                },
                contentImage: '/personal/accounts-carousel-3-content.png',
                backgroundImage: '/personal/accounts-carousel-3.jpg'
            },
            {
                title: 'Top up by ATM',
                description: 'Top up your wallet accounts by depositing money at any Fransabank or BLC branch or ATM across Lebanon. Your money is reflected instantly in your wallet.',
                button: {
                    text: 'Choose your card',
                    url: '#'
                },
                contentImage: '/personal/accounts-carousel-4-content.png',
                backgroundImage: '/personal/accounts-carousel-4.jpg'
            }
        ]
    };
    return (
        <div>
            <Banner data={data} />
            <Section>
                <div id="multicurrency-account" className='container text-center'>
                    <TextBlock title="Free Multicurrency Account" description="Get your free multicurrency account in both Fresh USD/LBP whenever you complete the onboarding process." button={true} />
                    <Image className='mx-auto mt-10' alt="Wallets" src={sectionTwoImage} />
                </div>
            </Section>
            <Carousel data={carouselData} />
            <Section>
                <div className='container flex flex-col items-center lg:flex-row gap-10'>
                    <TextBlock title='Loreum ipsum loreun' description="Get your free multicurrency account in both Fresh USD/LBP whenever you complete the onboarding process." button={true} />
                    <Image src={coins} alt="Coins" />
                </div>

            </Section>
        </div>
    )
}

export default accounts;
