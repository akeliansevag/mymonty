import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/evouchers-banner.webp';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';


export const metadata = {
    title: 'eVouchers' + websiteName,
    description: 'Explore MyMonty e-Vouchers for seamless digital payments & gifts. Purchase & send vouchers instantly for various services & brands. Get yours today!',
};

const accounts = () => {
    const data = {
        title: 'Your One-Stop Voucher Shop',
        subtitle: 'Payments',
        desc: 'Top up your wallet, subscribe to your favorite service, surprise someone with a gift, or gear up for your next gaming session. MyMonty brings it all together, all the best vouchers, at no extra fees.',
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
        </div>
    )
}

export default accounts;
