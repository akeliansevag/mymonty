import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/loyalty-banner.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/cashback-n.webp';
import sectionFour from '@/public/personal/referral.webp';
import sectionFive from '@/public/personal/loyalty-img.webp';
import Image from 'next/image';

export const metadata = {
    title: 'Loyalty' + websiteName,
    description: '',
};



const loyalty = () => {
    const data = {
        title: 'Pamper yourself, our treat',
        subtitle: 'Loyalty',
        desc: 'Indulge in luxury with our exclusive offer! Immerse yourself in a special treat from our loyalty program.',
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
                            <TextBlock buttonColor="light" textColor="white" title="Cashback" description="Prepare to indulge in the convenience of digital transactions with your MyMonty card, as we'll soon be introducing a rewarding cashback feature. Your earnings will be seamlessly reflected in your wallet account. Stay tuned to embrace the upcoming digital experience with us!" button={true} />
                        </div>
                    </div>

                    <div className='flex justify-end w-full'>
                        <Image src={sectionTwo} alt='Loyalty Cards' className='mt-10 md:w-1/2' width="1888" height="1034" />
                    </div>
                </section >
            </div >

            <Section>
                <div className='container'>
                    <div id="referral" className='flex flex-col lg:flex-row items-center gap-20'>
                        <TextBlock buttonColor="dark" title="Referral" description="Coming soon! Refer a friend and get rewarded as soon as your invitee gets onboarded and starts using MyMonty. Stay tuned for more details!" button={true} />
                        <Image className='md:w-1/3' src={sectionFour} alt='Image' width="1013" height="948" />
                    </div>

                    <div id="loyalty-program" className='mt-20 md:mt-40 flex flex-col-reverse lg:flex-row items-center gap-20'>
                        <Image className='md:w-1/3' src={sectionFive} alt='Image' width="812" height="1108" />
                        <TextBlock buttonColor="dark" title="Loyalty points program" description="We are crafting one of the finest loyalty programs in the country to enhance your experience with us. This allows you to reap the benefits by redeeming your loyalty points." button={true} />
                    </div>

                </div>
            </Section>
        </>
    )
}

export default loyalty;
