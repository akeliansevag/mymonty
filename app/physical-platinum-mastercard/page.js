import React from 'react';

import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/cards-banner-2.webp';

import AnimatedBanner from './AnimatedBanner';
import VirtualCard from './VirtualCard';
import TextBlock from '../components/TextBlock';
import Content from './Content';


export const metadata = {
    title: websiteName + 'Cards',
    description: '',
};

const cards = () => {
    const data = {
        title: 'Physical PLATINUM mastercard',
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

    


    return (
        <>
            <Banner data={data} AnimatedImage={AnimatedBanner} />
            <VirtualCard />
            <div className="bg-gray-100 py-10 lg:py-20">
                <div className="container text-center">
                    <TextBlock center={true} title="Physical Platinum Mastercard Benefits" description="" />
                </div>
                
                <Content />
            </div>
        </>
    )
}

export default cards;