import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/payments-banner.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/pay-qr.webp';
import sectionThree from '@/public/personal/instant-payment.webp';
import sectionFour from '@/public/personal/payments-swiper-1.webp';
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

    const billPayments = [
        {
            icon: '/personal/bill-payments.svg',
            title: 'Bill payments'
        },
        {
            icon: '/personal/online-vouchers.svg',
            title: 'Online vouchers'
        },
        {
            icon: '/personal/tuition-payments.svg',
            title: 'Tuition payments'
        },
        {
            icon: '/personal/wedding-list-payments.svg',
            title: 'Wedding list payments'
        },
    ];

    return (
        <>
            <Banner data={data} />

            <Section>
                <div className='container'>
                    <div id="qr-and-link" className='flex flex-col lg:flex-row gap-10 place-items-center'>
                        <TextBlock buttonColor="dark" title="PAY VIA LINK/QR CODE" description="No need to pay in cash anymore. Simply tap on the payment link or scan the QR code to complete your transaction in seconds." button={true} />
                        <Image className='md:w-1/2' src={sectionTwo} alt='Section Image' />
                    </div>
                    <div id="notifications-and-alerts" className='mt-20 md:mt-40 flex flex-col-reverse lg:flex-row gap-16 place-items-center'>
                        <Image className='md:w-1/3' src={sectionThree} alt='Section Image' />
                        <TextBlock buttonColor="dark" title="Instant Payment Notifications" description="Receive instant payment notifications to confirm the successful processing of your payment and the corresponding charged amount." button={true} />
                    </div>
                </div>
            </Section>
            <section id="pos" className='flex items-end py-14 md:py-20 relative min-h-[calc(100vh-var(--mobile-header-height))]'>
                <div className="absolute -z-[9] w-full h-full top-0 left-0 bg-black opacity-20"></div>
                <Image src={sectionFour} fill={true} placeholder='blur' sizes='100vw' className='object-cover -z-10' />
                <div className='container'>
                    <TextBlock buttonColor="white" textColor="white" title="POS payment" description="Simplify payments with MyMonty at over 14,000 Areeba POS locations and with all their merchants across Lebanon. Enjoy contactless payments wherever supported." button={true} />
                </div>

            </section>
            <div id="bill-payment">
                <Section>
                    <div className='container text-center md:px-20'>
                        <div className='gap-2 md:gap-6 grid grid-cols-2 md:grid-cols-4 items-center justify-center mb-16'>
                            {billPayments && billPayments.map((item, index) => {
                                return (
                                    <div className='md:min-h-[268px] h-full rounded-3xl flex justify-center items-center text-white bg-black p-10' key={index}>
                                        <div className='flex gap-4 flex-col items-center justify-center'>
                                            <img alt="icon" src={item.icon} />
                                            <h3 className='text-2xl uppercase font-bold'>{item.title}</h3>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>

                        <TextBlock buttonColor="dark" center={true} title="Bill Payment" description="We are launching an extensive bundle of services very soon, featuring group payments and bill splitting for your convenience." button={true} />
                    </div>
                </Section >
            </div >

            <section id="travel-esim" className='py-14 md:py-20 relative'>
                <Image src={paymentTravel} fill={true} placeholder='blur' sizes='100vw' className='object-cover -z-10' />
                <div className='container'>
                    <TextBlock buttonColor="dark" title="Travel eSim" description="Explore the world fully connected thanks MyMonty’s travel eSIM. Gain access to super-fast and convenient 4G+ data bundles in 190+ countries. Stay connected effortlessly wherever your journey takes you." button={true} />
                    <Image src={travelImage} alt='Image' className='mt-10' />
                </div>
            </section>
        </>
    )
}

export default payments;
