import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/payments-banner.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/pay-qr.webp';
import sectionThree from '@/public/personal/instant-payment.webp';
import sectionFour from '@/public/personal/payments-swiper-1.webp';
import billPayment from '@/public/personal/bill-payment.png';
import onlineVouchers from '@/public/personal/online-vouchers.png';
import tuitionPayment from '@/public/personal/tuition-payment.png';
import weddingList from '@/public/personal/wedding-list.png';
import paymentTravel from '@/public/personal/payments-travel.webp';
import travelImage from '@/public/personal/esim-img.webp';
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
                    <div id="qr-and-link" className='flex flex-col lg:flex-row gap-10 place-items-center'>
                        <TextBlock title="Pay via QR/Link" description="No need to pay in cash banknotes anymore, just tap on the payment link or scan the payment QR and get your payment done in seconds." button={true} />
                        <Image className='md:w-1/2' src={sectionTwo} alt='Section Image' />
                    </div>
                    <div id="notifications-and-alerts" className='mt-20 md:mt-40 flex flex-col-reverse lg:flex-row gap-16 place-items-center'>
                        <Image className='md:w-1/3' src={sectionThree} alt='Section Image' />
                        <TextBlock title="Instant Payment Notifications" description="With instant payment notifications, you can confirm that your payment has gone through and the amount you were charged." button={true} />
                    </div>
                </div>
            </Section>
            <section id="pos" className='flex items-end py-14 md:py-20 relative min-h-[calc(100vh-var(--mobile-header-height))]'>
                <div className="absolute -z-[9] w-full h-full top-0 left-0 bg-black opacity-20"></div>
                <Image src={sectionFour} fill={true} placeholder='blur' sizes='100vw' className='object-cover -z-10' />
                <div className='container'>
                    <TextBlock buttonColor="white" textColor="white" title="POS payment" description="Payment made easy with MyMonty at more than 14000 Areeba POSs and for all their merchants across Lebanon. Contactless wherever supported." button={true} />
                </div>

            </section>
            <div id="bill-payment">
                <Section>
                    <div className='container text-center'>
                        <div className='gap-2 md:gap-1 grid grid-cols-2 md:grid-cols-4 items-center justify-center mb-10'>
                            <div>
                                <Image src={onlineVouchers} alt='Image' />
                            </div>
                            <div>
                                <Image src={billPayment} alt='Image' />
                            </div>

                            <div>
                                <Image src={tuitionPayment} alt='Image' />
                            </div>
                            <div>
                                <Image src={weddingList} alt='Image' />
                            </div>

                        </div>

                        <TextBlock center={true} title="Bill Payment" description="We are launching a large bundle of services very soon, including group payment, and bill splitting for your convenience." button={true} />
                    </div>
                </Section >
            </div >

            <section id="travel-esim" className='py-14 md:py-20 relative'>
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
