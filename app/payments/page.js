import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/personal/payments-banner.webp';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import sectionTwo from '@/public/personal/pay-qr.webp';
import sectionThree from '@/public/instant-payment.webp';
import sectionFour from '@/public/personal/payments-swiper-1.webp';
import paymentTravel from '@/public/personal/payments-travel.webp';
import travelImage from '@/public/personal/esim-img.png';
import topUp from '@/public/top-up.webp';
import Image from 'next/image';

export const metadata = {
    title: 'Online Payment Apps' + websiteName,
    description: 'Make secure & instant payments with MyMonty in Lebanon. Pay bills, send money & manage all your transactions digitally. Start paying smart!',
};


const payments = () => {
    const data = {
        title: 'Simple and secure payments',
        subtitle: 'Payments',
        desc: 'Experience the ease and speed of our user-friendly payment solutions. Let us handle your transactions seamlessly, so you can focus on what truly matters.',
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
            <section id="pos" className='flex items-end py-14 md:py-20 relative min-h-[calc(100vh-var(--mobile-header-height))]'>
                <div className="absolute -z-[9] w-full h-full top-0 left-0 bg-black opacity-20"></div>
                <Image src={sectionFour} alt='Pay effortlessly' placeholder='blur' sizes='100vw' className='absolute top-0 object-cover -z-10 w-full h-full' width="3456" height="1932" />
                <div className='container'>
                    <TextBlock buttonColor="white" textColor="white" title="POS payment" description="Pay effortlessly with MyMonty at over 14,000 areeba, Pay Xpress & MontyPay POS locations and merchants across Lebanon. Enjoy contactless payments wherever supported." button={true} />
                </div>

            </section>
            <Section>
                <div className='container'>
                    <div id="qr-and-link" className='flex flex-col lg:flex-row gap-10 place-items-center'>
                        <TextBlock buttonColor="dark" title="PAY VIA LINK/QR CODE" description="Ditch the cash. Complete your transactions in seconds by tapping the payment link or scanning the QR code." button={true} />
                        <Image className='md:w-1/2' src={sectionTwo} alt='Section Image' width="1040" height="732" />
                    </div>

                    <div id="online-vouchers" className='mt-20 md:mt-40 flex flex-col-reverse lg:flex-row gap-16 place-items-center'>
                        <Image className='md:w-1/3' src={topUp} alt='Section Image' width="920" height="1350" />
                        <TextBlock buttonColor="dark" title="ONLINE VOUCHERS" description="Discover a world of convenience with our online vouchers. Perfect for gifts, rewards, or personal use, these vouchers offer a seamless way to manage your spending." button={true} />
                    </div>
                    <div id="notifications-and-alerts" className='mt-20 md:mt-40 flex flex-col lg:flex-row gap-16 place-items-center'>
                        <TextBlock buttonColor="dark" title="Instant Payment Notifications" description="Stay in the loop with instant notifications confirming the successful processing of your payments and the corresponding charges." button={true} />
                        <Image className='md:w-1/3' src={sectionThree} alt='Section Image' width="900" height="786" />
                    </div>
                </div>
            </Section>

            {/* <div id="bill-payment">
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
            </div > */}

            <section id="travel-esim" className='py-14 md:py-20 relative'>
                <Image src={paymentTravel} alt='Explore the world' placeholder='blur' sizes='100vw' className='absolute top-0 object-cover -z-10 w-full h-full' width="3456" height="2378" />
                <div className='container'>
                    <div className='w-full lg:w-1/2'>
                        <TextBlock buttonColor="dark" title="Travel eSim" description="Explore the world fully connected with MyMonty’s travel eSIM. Enjoy super-fast 4G+ data bundles in 190+ countries, ensuring you're always connected no matter where your journey takes you. Easily pay for your data bundle directly from your MyMonty account for added convenience." button={true} />
                    </div>

                    <Image src={travelImage} alt='Image' className='mt-10 w-full lg:w-1/3' width="780" height="974" />
                </div>
            </section>
        </>
    )
}

export default payments;
