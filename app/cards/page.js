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
                name: 'Download app'
            }
        }
    };
    const carouselData = {
        filters: [
            {
                title: 'Physical Card'
            },
            {
                title: 'Virtual Card'
            },
            {
                title: 'QR Code'
            },
        ],
        content: [
            {
                title: 'Make Contactless Payments',
                description: 'Easy, quick, and secure payments with just a single tap of your physical prepaid card at any contactless terminal.',
                button: {
                    text: 'Download app',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/cards-carousel-1-content-n.webp',
                backgroundImage: '/personal/cards-carousel-11.webp'
            },
            {
                title: 'Create a Virtual Card',
                description: 'Enhance your online shopping security by paying with your in-app virtual card for an additional layer of safety.',
                button: {
                    text: 'Download app',
                    url: '#',
                    modal: true,
                },
                contentImage: '/personal/cards-carousel-3-content.webp',
                backgroundImage: '/personal/cards-carousel-2.webp'
            },
            {
                title: 'Pay with Your Phone',
                description: 'Scan the QR code on the POS for fast payment.',
                button: {
                    text: 'Download app',
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

            <Monitor />
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
