import React from 'react';

import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/cards-banner-2.webp';
import Head from 'next/head';

import AnimatedBanner from './AnimatedBanner';
import AnimatedBannerOld from './AnimatedBannerOld';
import VirtualCard from './VirtualCard';
import TextBlock from '../components/TextBlock';
import Content from '../components/cards/Content';


export const metadata = {
    title: websiteName + 'Platinum Prepaid Card',
    description: '',
};

const cards = () => {
    const data = {
        title: 'Platinum Prepaid Card',
        subtitle: 'Cards',
        desc: 'World-class. Unique. Boundless.',
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

    const terms = {
        termsAndConditions: false, 
        kfs: 'KFS Physical card.pdf'
    }
    


    return (
        <>
            <Head>
                <link rel="canonical" href="https://mymonty.com.lb/platinum-prepaid-card/" />
            </Head>
            <Banner terms={terms} data={data} AnimatedImage={AnimatedBannerOld} />
            <VirtualCard />
            <div className="py-10 lg:py-20">
                <div className="container text-center">
                    <TextBlock center={true} title="Mastercard Platinum Prepaid Card Benefits" description="" />
                </div>
                
                <Content />
            </div>
        </>
    )
}

export default cards;
