import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/loyalty-banner.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/cashback.webp';
import sectionFour from '@/public/personal/referral.webp';
import sectionFive from '@/public/personal/loyalty-img.webp';
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
            inGrid: true,
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
            <div id="cashback">
                <section className='bg-black text-white pt-14 md:pt-28'>
                    <div className='container'>
                        <div>
                            <TextBlock textColor="white" title="Cashback" description="While you are enjoying spending and transacting with your MyMonty card, we will reward you with a cashback that will be reflected to your wallet account, so we encourage you to go digital with us." button={true} buttonColor="white" />
                        </div>
                    </div>

                    <div className='flex justify-end w-full'>
                        <Image src={sectionTwo} alt='Loyalty Cards' className='mt-10 md:w-1/2' />
                    </div>
                </section >
            </div >

            <Section>
                <div className='container'>
                    <div id="referral" className='flex flex-col lg:flex-row items-center gap-20'>
                        <TextBlock title="Referral" description="Refer a friend and get rewarded as soon as your invitee gets onboarded and starts using MyMonty." button={true} />
                        <Image className='md:w-1/3' src={sectionFour} alt='Image' />
                    </div>

                    <div id="loyalty-program" className='mt-40 flex flex-col-reverse lg:flex-row items-center gap-20'>
                        <Image className='md:w-1/3' src={sectionFive} alt='Image' />
                        <TextBlock title="Loyalty points program" description="We are tailoring one of the best loyalty programs in the country to upgrade your experience with us so that you benefit by redeeming your loyalty points." button={true} />
                    </div>

                </div>
            </Section>
        </>
    )
}

export default loyalty;
