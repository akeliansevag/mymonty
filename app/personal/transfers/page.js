import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/transfers-banner.png';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/transfers-section-two.png';
import Image from 'next/image';

export const metadata = {
    title: websiteName + 'Transfers',
    description: '',
};



const transfers = () => {
    const data = {
        title: 'Safely transfer money ',
        subtitle: 'Transfers',
        desc: 'Bridge the gap between you and your loved ones by sending them funds home.Contactless prepaid MasterCard you can use globally.',
        image: {
            layout: 'half',
            url: banner,
        },
        cta: {
            type: 'button',
            button: {
                name: 'Download app'
            }
        }
    };

    return (
        <>
            <Banner data={data} />

            <section className='pb-0 pt-14 lg:pt-24'>
                <div className='container flex-col-reverse flex lg:flex-row gap-10 items-center'>
                    <Image src={sectionTwo} alt='Image' />
                    <TextBlock title="Peer to Peer Remittance" description="Indulge the seamless and direct transfer of funds between individuals through MyMonty. Initiate transactions using your mobile devices, eliminating the need for traditional intermediaries like banks even for cross-border transfers." button={true} />
                </div>
            </section>
        </>
    )
}

export default transfers;
