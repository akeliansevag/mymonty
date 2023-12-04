import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import Image from 'next/image';
import banner from '@/public/personal/cards-banner.png';
import Section from '@/app/components/Section';
import sectionTwoImage from '@/public/personal/cards-section-two.png';
import TextBlock from '@/app/components/TextBlock';
import Carousel from '@/app/components/Carousel';
import sectionFourImage from '@/public/personal/section-4-image.png';
import sectionFiveImage from '@/public/personal/cards-section-5-image.png';
import cardHand from '@/public/personal/card-hand.png';
import bgImage from '@/public/personal/cards-bg-image.jpg';

export const metadata = {
    title: websiteName + 'Cards',
    description: '',
};

const cards = () => {
    const data = {
        title: 'Loreum Ipsum kdhg jdhd hdggdh',
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
                    url: '#'
                },
                contentImage: '/personal/cards-carousel-1-content.png',
                backgroundImage: '/personal/cards-carousel-1.jpg'
            },
            {
                title: 'Create a Virtual Card',
                description: 'Pay even safer with your in-app virtual card for an extra layer of security when shopping online.',
                button: {
                    text: 'Download app',
                    url: '#'
                },
                contentImage: '/personal/cards-carousel-2-content.png',
                backgroundImage: '/personal/cards-carousel-2.jpg'
            },
            {
                title: 'Pay with Your Phone',
                description: 'Open your camera and scan the QR code on the POS for fast payment.',
                button: {
                    text: 'Download app',
                    url: '#'
                },
                contentImage: '/personal/cards-carousel-3-content.png',
                backgroundImage: '/personal/cards-carousel-3.jpg'
            }
        ]
    };
    return (
        <>
            <Banner data={data} />
            <Section>
                <div className='container text-center'>
                    <TextBlock title="Free Multicurrency Account" description="Get your free multicurrency account in both Fresh USD/LBP whenever you complete the onboarding process." button={true} />
                    <Image className='mx-auto mt-10' alt="Wallets" src={sectionTwoImage} />
                </div>
            </Section>
            <Carousel data={carouselData} />
            <Section>
                <div className='container flex flex-col md:flex-row gap-10 items-center'>
                    <TextBlock title="Lock and Unlock on the Go" description="Lost your card? Doubting a fraudulent transaction? Keep your prepaid card safe and your money protected by instantly locking your card in-app." button={true} />
                    <Image src={sectionFourImage} alt='People' />
                </div>
            </Section>
            <Section>
                <div className='container text-center'>
                    <TextBlock title="Monitor Your Spendings and Check Your Transaction History" description="You can view your card activity at any time and keep your eye on your spendings, we will let you digitally export your card statement and save it to your device." button={true} />
                    <Image src={sectionFiveImage} alt="Image" className='pt-14 mx-auto' />
                </div>
            </Section>
            <Section bgImage={bgImage}>
                <div className='container text-center'>
                    <TextBlock title="Withdraw Whenever, Wherever" description="Get cash when you need it. Use your prepaid Mastercard to withdraw from ATMs anywhere in the world with no hidden fees." button={true} />
                </div>
                <Image className='mt-20' src={cardHand} alt='Card Hand' />
            </Section>
        </>
    )
}

export default cards;
