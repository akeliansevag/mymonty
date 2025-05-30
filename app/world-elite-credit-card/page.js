import React from 'react';

import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/world-elite-credit-card-banner.webp';

import VirtualCard from './VirtualCard';
import TextBlock from '../components/TextBlock';
import Content from './cards/Content';
import Contact from './Contact';

export const metadata = {
    title: websiteName + 'Cards',
    description: '',
};

const worldEliteCards = () => {
    const data = {
        title: 'World Elite Credit Card',
        subtitle: 'Cards',
        desc: 'Live Big. Travel Like Royalty. <br /><strong>APR 26.68% (Variable)<strong>',
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
        termsAndConditions: 'credit-cards-terms-and-conditions-world-elite-credit-card-v1-15.04.2025.pdf',
        kfs: 'world-elite-kfs.pdf'
    }

    return (
        <>
            <Banner terms={terms} data={data} />
            <VirtualCard />
            <div className="py-10 lg:py-20">
                <div className="container text-center">
                    <TextBlock center={true} title="Mastercard World Elite Credit Card Benefits" description="" />
                </div>

                <Content />
            </div>

            <Contact />
        </>
    )
}

export default worldEliteCards;
