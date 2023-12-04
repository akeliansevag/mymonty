import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/payments-banner.png';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/pay-qr.png';
import sectionThree from '@/public/personal/instant-payment.png';
import sectionFour from '@/public/personal/payments-swiper-1.jpg';
import billPayment from '@/public/personal/bill-payment.png';
import onlineVouchers from '@/public/personal/online-vouchers.png';
import tuitionPayment from '@/public/personal/tuition-payment.png';
import weddingList from '@/public/personal/wedding-list.png';
import paymentTravel from '@/public/personal/payments-travel.jpg';
import travelImage from '@/public/personal/esim-img.png';
import Image from 'next/image';

export const metadata = {
    title: websiteName + 'Payments',
    description: '',
};



const payments = () => {
    const data = {
        title: 'Simple and secure payments',
        subtitle: 'Payments',
        desc: 'Feel the ease and speed of our user-friendly payment solutions. Leave the seamless handling of your transactions to us, while you focus on what truly matters.',
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

            <Section>
                <div className='container'>
                    <div className='flex flex-col lg:flex-row gap-10 place-items-center'>
                        <TextBlock title="Pay via QR/Link" description="No need to pay in cash banknotes anymore, just tap on the payment link or scan the payment QR and get your payment done in seconds." button={true} />
                        <Image src={sectionTwo} alt='Section Image' />
                    </div>
                    <div className='mt-40 flex flex-col-reverse lg:flex-row gap-10 place-items-center'>
                        <Image src={sectionThree} alt='Section Image' />
                        <TextBlock title="Instant Payment Notifications" description="With instant payment notifications, you can confirm that your payment has gone through and the amount you were charged." button={true} />
                    </div>
                </div>
            </Section>
            <section className='flex items-end py-14 md:py-20 relative min-h-[calc(100vh-var(--mobile-header-height))]'>
                <Image src={sectionFour} fill={true} placeholder='blur' sizes='100vw' className='object-cover -z-10' />
                <div className='container'>
                    <TextBlock buttonColor="white" textColor="white" title="POS payment" description="Payment made easy with MyMonty at more than 14000 Areeba and Credit Libanais POS and for all their merchants across Lebanon. Contactless wherever supported." button={true} />
                </div>

            </section>
            <Section>
                <div className='container text-center'>
                    <div className='flex flex-col md:flex-row gap-10 items-center justify-center mb-10'>
                        <Image src={billPayment} alt='Image' />
                        <Image src={onlineVouchers} alt='Image' />
                        <Image src={tuitionPayment} alt='Image' />
                        <Image src={weddingList} alt='Image' />
                    </div>

                    <TextBlock center={true} title="Bill Payment" description="We are launching a large bundle of services very soon, including group payment, and bill splitting for your convenience." button={true} />
                </div>
            </Section>
            <section className='py-14 md:py-20 relative'>
                <Image src={paymentTravel} fill={true} placeholder='blur' sizes='100vw' className='object-cover -z-10' />
                <div className='container'>
                    <TextBlock title="Travel eSim" description="No need to pay in cash banknotes anymore, just tap on the payment link or scan the payment QR and get your payment done in seconds." button={true} />
                    <Image src={travelImage} alt='Image' className='mt-10' />
                </div>
            </section>
        </>
    )
}

export default payments;
