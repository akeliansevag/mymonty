import React from 'react';

import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/gold-prepaid-card.webp';

import VirtualCard from './VirtualCard';
import TextBlock from '../components/TextBlock';
import Content from './Content';


export const metadata = {
    title: 'Mastercard Gold Prepaid Card' + websiteName,
    description: 'The Gold Side of Life.',
};

const cards = () => {
    const data = {
        title: 'Mastercard Gold Prepaid Card',
        subtitle: 'Cards',
        desc: 'The Gold Side of Life.',
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
        termsAndConditions: 'MyMonty Prepaid MasterCard Terms.pdf', 
        kfs: 'Gold Prepaid Card KFS.pdf'
    }

    return (
        <>
          
            <Banner terms={terms} data={data} />
            <VirtualCard />
            <div className="py-10 lg:py-20">
                <div className="container text-center">
                    <TextBlock center={true} title="Gold Prepaid card Benefits" description="" />
                </div>
                
                <Content />
            </div>
        </>
    )
}

export default cards;
