import React from 'react';

import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/cards-banner-2.webp';

import AnimatedBanner from './AnimatedBanner';
import VirtualCard from './VirtualCard';
import TextBlock from '../components/TextBlock';
import Content from '../components/cards/Content';


export const metadata = {
    title: websiteName + 'Platinum Credit Card',
    description: '',
};

const cards = () => {
    const data = {
        title: 'Platinum credit card',
        subtitle: 'Cards',
        desc: '<strong>1% Cashback</strong> on any amount spent using the MyMonty Credit Card at Points of Sale or online.',
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
        termsAndConditions: '/credit-cards-terms-and-conditions.pdf', 
        kfs: '/platinum-credit-card-kfs.pdf'
    }

    return (
        <>
            <Banner terms={terms} data={data} AnimatedImage={AnimatedBanner}/>
            <VirtualCard />
            <div className="bg-gray-100 py-10 lg:py-20">
                <div className="container text-center">
                    <TextBlock center={true} title="Platinum credit card Benefits" description="" />
                </div>
                
                <Content />
            </div>
        </>
    )
}

export default cards;
