import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/ihjoz-banner.webp';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionTwo from './SectionTwo';

export const metadata = {
    title: 'ihjoz' + websiteName,
    description: 'Unlock special benefits with MyMonty and IhJjoz. Discover exclusive deals & seamless digital experiences for [relevant service/product]. Explore now!',
};

const accounts = () => {
    const data = {
        title: 'ihjoz with MyMonty',
        subtitle: 'Payments',
        desc: 'With MyMonty, you\'ll never run out of things to do! Paying for your tickets on ihjoz just got easier and quicker!',
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
            <Banner data={data} />
            <SectionOne />
            <SectionTwo />
            {/* <SectionTicket /> */}
            <SectionThree />
            <SectionFour />
        </div>
    )
}

export default accounts;
