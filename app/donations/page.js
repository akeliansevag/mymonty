import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/accounts-banner.webp';
import Head from 'next/head';
import AnimatedImage from './AnimatedImage';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionFive from './SectionFive';
import SectionTwo from './SectionTwo';
import SectionFour from './SectionFour';

export const metadata = {
    title: websiteName + 'Donations',
    description: '',
};

const accounts = () => {
    const data = {
        title: 'Make a Difference',
        subtitle: 'Donations',
        desc: '<strong>With MyMonty’s Donations</strong>, you can make a difference. Donate to trusted organizations straight from your MyMonty app! Quick, secure, and with zero fees. Because doing good should be effortless.',
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
        <div>
            <Head>
                <link rel="canonical" href="https://mymonty.com.lb/donations/" />
            </Head>

            <Banner data={data} AnimatedImage={AnimatedImage} />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            
        </div>
    )
}

export default accounts;
