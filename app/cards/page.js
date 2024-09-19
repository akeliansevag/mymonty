import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/cards-banner-2.webp';

import Carousel from '@/app/components/Carousel';

import CardWithdrawal from './CardWithdrawal';
import DiverseCards from './DiverseCards';
import AnimatedBanner from './AnimatedBanner';
import VirtualCard from './VirtualCard';
import CardControls from './CardControls';
import Monitor from './Monitor';

export const metadata = {
    title: websiteName + 'Cards',
    description: '',
};

const cards = () => {
    const data = {
        title: 'prepaid Card you can use globally',
        subtitle: 'Cards',
        desc: 'Contactless card for a borderless experience.',
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
                title: 'Make Contactless Paymets '
            },
            {
                title: 'Create a Virtual Card'
            },
            {
                title: 'Pay With Your Phone'
            },
        ],
        content: [
            {
                title: 'Make Contactless Payments',
                description: 'Tap to pay! Use your physical prepaid card for easy, quick, and secure contactless payments.',
                button: {
                    text: 'Download App',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/cards-carousel-1-content-n.webp',
                backgroundImage: '/personal/cards-carousel-11.webp'
            },
            {
                title: 'Create a Virtual Card',
                description: 'Boost your online shopping security with an in-app virtual card for safer transactions.',
                button: {
                    text: 'Download App',
                    url: '#',
                    modal: true,
                },
                contentImage: '/personal/cards-carousel-3-content.webp',
                backgroundImage: '/personal/cards-carousel-2.webp'
            },
            {
                title: 'Pay with Your Phone',
                description: 'Scan the QR code at the POS for fast and convenient payments.',
                button: {
                    text: 'Download App',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/cards-qr-2.webp',
                backgroundImage: '/personal/cards-carousel-3.webp'
            }
        ]
    };
    return (
        <>
            <Banner data={data} AnimatedImage={AnimatedBanner} />
            <VirtualCard />
            <div id="physical-card">
                <Carousel data={carouselData} />
            </div>

            <CardControls />

            <div id="transaction-history">
                <Monitor />
            </div>

            <div id="card-withdrawal">
                <CardWithdrawal />
            </div>

            <div id="diverse-cards" className='bg-black text-white'>
                <DiverseCards />
            </div>

        </>
    )
}

export default cards;
