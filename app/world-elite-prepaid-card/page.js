import React from 'react';

import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/world-elite-prepaid-card-banner.webp';

import VirtualCard from './VirtualCard';
import TextBlock from '../components/TextBlock';
import Content from '../components/elite-cards/Content';
import Contact from '../components/elite-cards/Contact';

export const metadata = {
    title: 'World Elite Prepaid Card' + websiteName,
    description: 'Experience Luxury without limits with the world elite prepaid card.',
};

const worldEliteCards = () => {
    const data = {
        title: 'World Elite Prepaid Card',
        subtitle: 'Cards',
        desc: 'Welcome to the Elite Lifestyle',
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
        termsAndConditions: '/world-elite-prepaid-cards-terms-(v.1.0-npy).pdf',
        kfs: '/kfs/World-Elite-Prepaid-Card-KFS.pdf'
    }

    return (
        <>
           

            <Banner terms={terms} data={data} />
            <VirtualCard />
            <div className="py-10 lg:py-20">
                <div className="container text-center">
                    <TextBlock center={true} title="World elite Prepaid Card Benefits" description="" />
                </div>

                <Content />
            </div>

            <Contact />
        </>
    )
}

export default worldEliteCards;
