import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import Image from 'next/image';
import banner from '@/public/personal/cards-banner-2.webp';
import Section from '@/app/components/Section';
import sectionTwoImage from '@/public/personal/multicurrency-image.webp';
import TextBlock from '@/app/components/TextBlock';
import Carousel from '@/app/components/Carousel';
import sectionFourImage from '@/public/personal/lock-img.webp';
import sectionFiveImage from '@/public/personal/cards-section-5-image.webp';

import CardWithdrawal from './CardWithdrawal';
import DiverseCards from './DiverseCards';

export const metadata = {
    title: websiteName + 'Cards',
    description: '',
};

const cards = () => {
    const data = {
        title: 'prepaid MasterCard you can use globally.',
        subtitle: 'Cards',
        desc: 'Contactless prepaid MasterCard you can use globally.',
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
                title: 'Pay with Make Contactless Payments',
                description: 'Easy, quick, and secure payments with just a single tap of your physical prepaid card at any contactless terminal.',
                button: {
                    text: 'Download app',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/cards-carousel-1-content.webp',
                backgroundImage: '/personal/cards-carousel-1.webp'
            },
            {
                title: 'Create a Virtual Card',
                description: 'Pay even safer with your in-app virtual card for an extra layer of security when shopping online.',
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
                description: 'Open your camera and scan the QR code on the POS for fast payment.',
                button: {
                    text: 'Download app',
                    url: '#',
                    modal: true
                },
                contentImage: '/personal/cards-carousel-3-content.webp',
                backgroundImage: '/personal/cards-carousel-3.webp'
            }
        ]
    };
    return (
        <>
            <Banner data={data} />
            <div id="virtual-card">
                <Section>
                    <div className='container text-center'>
                        <TextBlock center={true} title="Access your money wherever you are" description="With MyMonty virtual cards, your financial freedom is always within the palm of your hand. You can access the money in your MyMonty virtual prepaid card, online or at cardless ATMs within our network, and you’ll get Mastercard’s great-value exchange rates when spending abroad." button={true} />
                        <Image className='mx-auto mt-10' alt="Wallets" src={sectionTwoImage} />
                    </div>
                </Section>
            </div>
            <div id="physical-card">
                <Carousel data={carouselData} />
            </div>

            <div id="card-controls">
                <Section>
                    <div className='container flex flex-col md:flex-row gap-10 items-center'>
                        <TextBlock title="Lock and Unlock on the Go" description="Lost your card? Doubting a fraudulent transaction? Keep your prepaid card safe and your money protected by instantly locking your card in-app." button={true} />
                        <Image className='md:w-1/2' src={sectionFourImage} alt='People' />
                    </div>
                </Section>
            </div>

            <Section>
                <div className='container text-center'>
                    <TextBlock center={true} title="Monitor Your Spendings and Check Your Transaction History" description="You can view your card activity at any time and keep your eye on your spendings, we will let you digitally export your card statement and save it to your device." button={true} />
                    <Image src={sectionFiveImage} alt="Image" className='pt-14 mx-auto' />
                </div>
            </Section>
            <div id="card-withdrawal">
                <CardWithdrawal />
            </div>

            <div id="diverse-cards">
                <DiverseCards />
            </div>

        </>
    )
}

export default cards;
