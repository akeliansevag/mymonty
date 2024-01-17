import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/accounts-banner.webp';

import Carousel from '@/app/components/Carousel';
import AnimatedImage from './AnimatedImage';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';

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
                description: 'Top up your wallet account using any Fresh USD / LBP bank card, and see the balance updated instantly with no hidden fees. For free from your MyMonty card.',
                button: {
                    text: 'Choose your card',
                    url: '/cards'
                },
                contentImage: '/personal/accounts-carousel-1-content.png',
                backgroundImage: '/personal/accounts-carousel-1.jpg'
            },
            {
                title: 'Top up by request',
                description: 'Request money from anyone directly by selecting them from your contact list or via link or QR code.',
                // button: {
                //     text: 'Choose your card',
                //     url: '/cards'
                // },
                contentImage: '/personal/accounts-carousel-2-content.png',
                backgroundImage: '/personal/accounts-carousel-2.jpg'
            },
            {
                title: 'Top up with our partners',
                description: 'Top up your wallet accounts by depositing money at more than 1400 OMT locations across Lebanon for more convenience. Your money is reflected instantly in your wallet.',
                // button: {
                //     text: 'Choose your card',
                //     url: '/cards'
                // },
                contentImage: '/personal/accounts-carousel-3-content.png',
                backgroundImage: '/personal/accounts-carousel-3.jpg'
            },
            {
                title: 'Top up by ATM',
                description: 'Top up your wallet accounts by depositing money at any Fransabank ATMs across Lebanon. Your money is reflected instantly in your wallet.',
                // button: {
                //     text: 'Choose your card',
                //     url: '/cards'
                // },
                contentImage: '/personal/accounts-carousel-4-content.png',
                backgroundImage: '/personal/accounts-carousel-4.jpg'
            }
        ]
    };
    return (
        <div>

            <Banner data={data} AnimatedImage={AnimatedImage} />
            <SectionOne />

            <div id="top-up">
                <Carousel data={carouselData} />
            </div>
            <SectionThree />
        </div>
    )
}

export default accounts;
