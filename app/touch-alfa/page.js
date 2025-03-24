import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/touch-alfa.webp';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';


export const metadata = {
    title: websiteName + 'Donations',
    description: '',
};

const accounts = () => {
    const data = {
        title: 'Tap. Pay. Done.',
        subtitle: 'Payments',
        desc: '<strong>Touch & Alfa made simple!</strong> You can now settle your Touch and Alfa postpaid bills and top up with prepaid card vouchers directly from your MyMonty wallet. Skip the queues and manage all your telecom needs with just a few taps!',
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
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </div>
    )
}

export default accounts;
