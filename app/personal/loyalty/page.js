import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/loyalty-banner.png';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/loyalty-cards.png';
import sectionFour from '@/public/personal/loyalty-3.png';
import sectionFive from '@/public/personal/loyalty-4.png';
import Image from 'next/image';

export const metadata = {
    title: websiteName + 'Loyalty',
    description: '',
};



const loyalty = () => {
    const data = {
        title: 'Pamper yourself, our treat',
        subtitle: 'Loyalty',
        desc: 'Enjoy our exclusive offer designed for luxury! Dive into indulgence with our loyalty program\'s special treat',
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

            <Section bgDark={true} textColor="white">
                <div className='container text-center'>
                    <Image src={sectionTwo} alt='Loyalty Cards' className='mb-10 mx-auto' />
                    <TextBlock textColor="white" title="Cashback" description="While you are enjoying spending and transacting with your MyMonty card, we will reward you with a cashback that will be reflected to your wallet account, so we encourage you to go digital with us." button={true} buttonColor="white" />
                </div>

            </Section>
            <Section>
                <div className='container'>
                    <div className='flex flex-col lg:flex-row items-center gap-20'>
                        <TextBlock title="Referral" description="Refer a friend and get rewarded as soon as your invitee gets onboarded and starts using MyMonty." button={true} />
                        <Image src={sectionFour} alt='Image' />
                    </div>

                    <div className='mt-40 flex flex-col-reverse lg:flex-row items-center gap-20'>
                        <Image src={sectionFive} alt='Image' />
                        <TextBlock title="Loyalty points program" description="We are tailoring one of the best loyalty programs in the country to upgrade your experience with us so that you benefit by redeeming your loyalty points." button={true} />
                    </div>

                </div>
            </Section>
        </>
    )
}

export default loyalty;
