import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

export const metadata = {
    title: websiteName + 'Terms & Conditions',
    description: '',
};

const terms = () => {
    const data = {
        title: 'Unlocking Your Account the Easiest Way',
        subtitle: 'Accounts',
        desc: 'Experience convenience like never before as you unlock your account hassle-free!',
        image: false,
        cta: {
            type: 'button',
            button: {
                name: 'Download app'
            }
        }
    };
    return (
        <div>
            <Banner data={data} />

        </div>
    )
}

export default terms;
