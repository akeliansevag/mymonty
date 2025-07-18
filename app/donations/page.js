import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/accounts-banner.webp';
import AnimatedImage from './AnimatedImage';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionFive from './SectionFive';
import SectionTwo from './SectionTwo';
import SectionFour from './SectionFour';

export const metadata = {
    title: 'Donations' + websiteName,
    description: 'Make secure & easy donations through MyMonty in Lebanon. Support causes you care about directly from your digital wallet. Donate today!',
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
