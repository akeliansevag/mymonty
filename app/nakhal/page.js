import React from 'react';
import Image from 'next/image';
import { websiteName } from '@/app/config';
import mymontyLogo from '@/public/mymonty-logo.svg';
import nakhalLogo from '@/public/nakhal-logo.svg';
import xmark from '@/public/x.svg';
import banner from '@/public/nakhal-bg.webp';
import bannerMobile from '@/public/nakhal-bg.webp';
import TextBlock from '../components/TextBlock';
import Section from '../components/Section';

import image1 from '@/public/dreaming-of-your-next-vacation-1.webp';
import image2 from '@/public/dreaming-of-your-next-vacation-2.webp';
import image3 from '@/public/dreaming-of-your-next-vacation-3.webp';
import image4 from '@/public/why-you-will-love-it.webp';
import image5 from '@/public/card-features.webp';
import image6 from '@/public/already-booked-with-nakhal.webp';
import Documents from './documents';

export const metadata = {
    title: websiteName + 'MyMonty X Nakhal',
    description: '',
};


const nakhal = () => {
    const whyYouWillLoveIt = [
        {
            title: 'No upfront payment',
        },
        {
            title: 'Quick approval process',
        },
        {
            title: 'Track spending via the MyMonty App',
        },
        {
            title: 'Flexible monthly installments',
        },
        {
            title: 'Exclusive offers from Nakhal',
        },
        {
            title: '1% cashback on every purchase (POS and online)',
        }
    ];

    const eligibility = [
        {
            description: 'Be a Lebanese citizen, aged 21 to 60',
            icon: 'lebanese-citizen',
        },
        {
            description: 'Earn a minimum gross monthly income of USD 1,000',
            icon: 'minimum-gross',
        },
        {
            description: 'Be successfully onboarded on the MyMonty App',
            icon: 'successfully-onboarded',
        },
        {
            description: 'Hold a clean Central Credit Register record',
            icon: 'central-credit-register',
        },
        {
            description: 'Be employed in the private sector for 12+ months OR self-employed for 3+ years',
            icon: 'private-sector',
        },
        {
            description: 'Book a Nakhal travel package worth USD 1,000+ <span style="color:#2657D4">(Regular airline flights are not eligible)</span>',
            icon: 'travel-package',
        }
    ];

    const features = [
        {
            title: 'Mastercard Platinum Credit Card',
            description: '',
        },
        {
            title: 'Fresh USD currency',
            description: '',
        },
        {
            title: 'Revolving Credit',
            description: '',
        },
        {
            title: 'Repayment in Fresh USD at MyMonty locations',
            description: '',
        },
        {
            title: 'Limit: USD 500 –3,000 ',
            description: '(subject to approval & travel package amount)',
        },
        {
            title: 'APR: 26.68%',
            description: '(may vary)',
        },
        {
            title: 'Grace Period:',
            description: 'Up to 35 days on purchases',
        },
        {
            title: 'Monthly Interest Rate:',
            description: 'POS & Online: 1.99% <br/> ATM Withdrawals: 2.5%',
        },
        {
            title: 'Annual Validity:',
            description: '5 years',
        },
    ];

    return (
        <>
            <section className="bg-black relative min-h-screen flex md:items-center">
                <Image alt='Airplane' fill placeholder='blur' quality={100} sizes='100vw' src={banner} className='max-md:hidden object-cover w-full h-full' priority />
                <Image alt='Airplane' fill placeholder='blur' quality={100} sizes='100vw' src={bannerMobile} className='md:hidden object-cover w-full h-full' priority />
                <div className="container h-full max-md:mt-[calc(var(--header-height)+30px)] flex relative z-10">
                    <div className="md:w-[50%]">
                        <div className="flex items-start gap-8">
                            <Image alt='MyMonty Logo' quality={100} src={mymontyLogo} priority />
                            <Image alt='X' quality={100} src={xmark} priority />
                            <Image alt='Nakhal Logo' quality={100} src={nakhalLogo} priority />
                        </div>  
                        <h1 className="mt-10 text-[#273D6B] font-black text-4xl sm:text-5xl md:text-7xl fhd:text-[4.2rem] leading-none uppercase">Travel Now <br /> Pay Later</h1>
                        <p className="text-white max-md:mt-3 max-md:text-base text-4xl font-medium mt-6 md:pr-52">Free Platinum Credit Card to pay for your trip</p>
                    </div>
                </div>
                <div className="text-white w-full max-lg:mt-10 max-md:text-[12px] text-[14px] absolute max-md:bottom-9 bottom-20 lg:mt-20">
                    <div className="container">
                        <p>MONTY FINANCE SAL</p>
                        <p>TERMS & CONDITIONS APPLY</p>
                    </div>
                </div>
            </section> 
            <Section>
                <div className="container text-center">
                    <TextBlock title="Dreaming of your next vacation?"  description='Monty Finance S.A.L. and Nakhal & Cie S.A.L. are joining forces to bring you a limited-time travel promotion, book your next getaway with Nakhal and pay later using the MyMonty Platinum Credit Card.' center={true}/>
                    <TextBlock className="mt-10" description='Apply now through Nakhal to enjoy flexible payment terms that make travel more affordable.' bold={true} center={true}/>
                    <div class="flex items-center gap-8 relative mt-8">
                        <Image className="" alt="Girl Atm" src={image2} placeholder='blur' quality={100} />
                        <Image className="max-md:hidden w-full" alt="Girl Atm" src={image1} placeholder='blur' quality={100} />
                        <Image className="absolute md:top-1/2 md:-translate-y-1/2 md:left-[27%] max-md:bottom-0 max-md:translate-y-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-w-[250px]" alt="Girl Atm" src={image3} placeholder='blur' quality={100} />
                    </div>
                </div>
            </Section>

            <Section>
                <div className="container max-md:mt-20">
                    <div className="flex lg:items-center max-lg:flex-col gap-10">
                        <div className="md:w-1/2">
                            <TextBlock title="why you’ll love it" />

                            <div className='flex flex-col gap-8 mt-12'>
                                {
                                    whyYouWillLoveIt.map((item, index)=>(
                                        <div className="flex gap-4">
                                            <img className="w-[30px] h-[30px] flex-shrink-0" alt="Check" src='rounded-check.svg' />
                                            <h3 className="font-[700]">{ item.title }</h3>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Image className="w-full" alt="Bills" src={image4} placeholder='blur' quality={100} />
                        </div>
                    </div>
                </div>
            </Section>

            
            <section className="bg-[#F7F7F7] max-md:py-14 py-20">
                <div className="container">
                    <TextBlock title="Are You Eligible to apply?" center={false} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
                        {
                            eligibility.map((item,index)=>(
                                <div className="flex items-center gap-10 p-8 bg-white rounded-3xl relative">
                                    <img className="flex-shrink-0" alt="" src={`${item.icon}.svg`} width="64" height="64" />
                                    <p className="text-xl font-[700]" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <Section>
                <div className="container max-md:mt-20">
                    <TextBlock title="Required Documents" />

                    <Documents />
                </div>
            </Section>
            
            <Section>
                <div className="container max-md:mt-20">
                    <TextBlock title="Card Features" />
                    <div className="flex max-lg:flex-col gap-10 mt-10">
                        <div className="md:w-1/3">
                            <Image className="w-full" alt="Card Features" src={image5} placeholder='blur' quality={100} />
                        </div>

                        <div className="md:w-2/3">
                            <div className='flex flex-col gap-4'>
                                {
                                    features.map((item, index)=>(
                                        <div className="features-shadow flex justify-between items-center p-5 rounded-2xl">
                                            <h3 className="font-[700]">{ item.title }</h3>
                                            <p className='text-base' dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            
            <div className="container py-20">
                <div className="flex lg:items-center max-lg:flex-col gap-10">
                    <div className="md:w-1/2">
                        <TextBlock title="Already Booked with Nakhal?" description="Apply Now through Nakhal to Fund Your Trip!" button={true} buttonColor="dark"/>
                    </div>
                    <div className="md:w-1/2">
                        <Image className="w-full" alt="Bills" src={image6} placeholder='blur' quality={100} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default nakhal;
