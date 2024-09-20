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
        title: 'ACCOUNT ACCESS MADE SIMPLE',
        subtitle: 'Accounts',
        desc: 'Unlock your account with unparalleled ease and say goodbye to hassle!',
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
                title: 'Top Up Your Wallet'
            },
            {
                title: 'Request a TOP-UP'
            },
            {
                title: 'Top Up or Cash Out With Our Partners'
            },
            {
                title: 'Top Up or Cash Out Via Our ATM/BANK Network'
            }
        ],
        content: [
            {
                title: 'TOP UP YOUR WALLET',
                description: 'Instant Boost with Your Card. <br /> Update your wallet balance instantly with no hidden fees using any Fresh USD/LBP bank card. <br /> It’s free with your MyMonty card.',
                button: {
                    text: 'Choose your card',
                    url: '/cards'
                },
                contentImage: '/personal/accounts-carousel-1-content.png',
                backgroundImage: '/personal/accounts-carousel-1.jpg'
            },
            {
                title: 'REQUEST A TOP-UP',
                description: 'Top Up by Request <br /> Get money from anyone by selecting them from your contact list, or via a link or QR code.',
                // button: {
                //     text: 'Choose your card',
                //     url: '/cards'
                // },
                contentImage: '/personal/accounts-carousel-2-content.png',
                backgroundImage: '/personal/accounts-carousel-2.jpg'
            },
            {
                title: 'TOP UP OR CASH OUT WITH OUR PARTNERS',
                description: '1400+ Locations, Instant Convenience.<br /> Deposit money, cash out personally or send a code for someone else to cash out on your behalf at over 1400 OMT locations across Lebanon. <br /> Your funds reflect instantly in your wallet for ultimate convenience.',
                // button: {
                //     text: 'Choose your card',
                //     url: '/cards'
                // },
                contentImage: '/personal/accounts-carousel-3-content.png',
                backgroundImage: '/personal/accounts-carousel-3.jpg'
            },
            {
                title: 'TOP UP OR CASH OUT VIA OUR ATM/BANK NETWORK',
                description: 'Flexible Finances at Your Fingertips <br />Top up your wallet effortlessly or withdraw cash seamlessly at our partner bank ATMs and see it instantly in your wallet. Enjoy a flexible and accessible financial experience.',
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
