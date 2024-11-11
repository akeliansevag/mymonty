import React from 'react';
import Image from 'next/image';
import { websiteName } from '@/app/config';
import banner from '@/public/atm-bg.webp';
import bannerMobile from '@/public/atm-receipt-mobile.webp';
import TextBlock from '../components/TextBlock';
import Section from '../components/Section';

import image2 from '@/public/instant-payment-access.webp';
import image3 from '@/public/mymonty-iphone.webp';
import image4 from '@/public/atm-girl.webp';
import image5 from '@/public/mymonty-bills.webp';
export const metadata = {
    title: websiteName + 'ATM Receipt',
    description: '',
};


const ATMReceipt = () => {
    const options = [
        {
            title: 'Pay by Amount',
            description: 'Abroad or unable to receive an OTP? Just enter your mobile number and the amount to settle. Hit Continue, and you’re all set!'
        },
        {
            title: 'Pay by pin',
            description: 'Not sure of the exact amount? No problem! Enter your mobile number, and we’ll send a secure PIN by SMS. Once entered, we’ll show you the exact amount, ready to pay.'
        }
    ];
    return (
        <>
            <section className="bg-black relative min-h-screen flex md:items-center">
                 <Image alt='Phone' fill placeholder='blur' quality={100} sizes='100vw' src={banner} className='max-md:hidden object-cover w-full h-full' priority />
                 <Image alt='Phone' fill placeholder='blur' quality={100} sizes='100vw' src={bannerMobile} className='md:hidden object-cover w-full h-full' priority />
                <div className="container max-md:mt-[calc(var(--header-height)+30px)] flex relative z-10">
                    <div className="md:w-[55%]">
                        <h1 className="text-white font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase">Touch Postpaid Bill Payments   
                            <span className="text-[#009FB4]"> Made Easy!</span></h1>
                        <div className="text-white mt-4">
                            <p>MONTY FINANCE SAL</p>
                            <p>TERMS & CONDITIONS APPLY</p>
                        </div>
                        
                    </div>
                </div>
            </section> 
            <Section>
                <div className="container text-center">
                    <TextBlock title="Instant Payment Access" description='Manage your bills right under the "E-services" tab in the app. Pay in LBP or USD, whatever’s best for you!' center={true}/>
                    <Image className="max-w-[720px] mx-auto mt-8 w-full" alt="Girl Atm" src={image2} placeholder='blur' quality={100} />
                </div>
            </Section>
            <section className="gradient-bg max-md:py-14 py-20 bg-black">
                <div className="container text-center text-white">
                    <TextBlock title="How It Works" center={true} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-20 gap-12 mt-14">
                        {
                            options.map((item,index)=>(
                                <div className="p-8 border border-white rounded-3xl relative">
                                    <div className="absolute bg-[#378A95] w-[68px] h-[68px] rounded-full text-center flex items-center justify-center text-[41px] left-0 top-[20px] -translate-x-1/2 max-lg:left-1/2 max-lg:top-0 max-lg:-translate-y-1/2">{index+1}</div>
                                    <h4 className="italic mb-4 text-[#c9c9c9] max-lg:mt-4">Option {index+1}</h4>
                                    <h2 className="smaller-title uppercase">{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            
            <section className="py-28 max-md:py-14 flex flex-col gap-40 max-lg:gap-20">
                <div>
                    <div className="container text-center">
                        <TextBlock title="Benefits at Your Fingertips" center={true}/>
                        <div className="mt-20 flex items-center max-md:flex-col max-md:gap-10">
                            <div className="md:w-2/5">
                                <div className="bg-[#f7f7f7] rounded-2xl p-8">
                                    <h2 className="uppercase font-[900] text-2xl mb-3">Ultimate Convenience</h2>
                                    <p>Make payments on your time, from wherever you are – no need for in-person visits.</p>
                                </div>
                                <div className="bg-[#f7f7f7] rounded-2xl p-8 mt-6">
                                    <h2 className="uppercase font-[900] text-2xl mb-3">flexible methods</h2>
                                    <p>Choose the option that works for you. Know the amount? Use it. You need a PIN instead? We’ve got you covered.</p>
                                </div>
                            </div>
                        
                            <div className="md:w-1/5">
                                <Image className="w-full" alt="Girl Atm" src={image3} placeholder='blur' quality={100} />  
                            </div>
                            <div className="md:w-2/5">
                                <div className="bg-[#f7f7f7] rounded-2xl p-8">
                                    <h2 className="uppercase font-[900] text-2xl mb-3">Secure payments</h2>
                                    <p>An OTP keeps every transaction safe and sound.</p>
                                </div>
                                <div className="bg-[#f7f7f7] rounded-2xl p-8 mt-6">
                                    <h2 className="uppercase font-[900] text-2xl mb-3">simple tracking</h2>
                                    <p>Manage multiple bills, view your history, and stay on top of your payments all </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container">
                        <div className="max-w-[880px] mx-auto">
                            <div className="grid max-md:grid-cols-1 grid-cols-2 gap-6">
                                <div>
                                    <Image className="w-full" alt="Girl Atm" src={image4} placeholder='blur' quality={100} />  
                                </div>
                                <div className="text-center bg-[#f7f7f7] p-10 flex flex-col gap-10 items-center justify-center rounded-3xl">
                                    <h2 className="smaller-title !mb-0">FEES</h2>
                                    <div className="bg-white rounded-3xl text-center py-5 px-5 w-full">
                                        <h2 className="uppercase font-[900] text-xl">USD PAYMENTS</h2>
                                        <h3 className="text-4xl font-bold">$0.70</h3>
                                        <p className="text-base">Per Transaction</p>
                                    </div>
                                    <div className="bg-white rounded-3xl text-center py-5 px-5 w-full">
                                        <h2 className="uppercase font-[900] text-xl">LBP Payments</h2>
                                        <h3 className="text-4xl font-bold">LBP50,000</h3>
                                        <p className="text-base">Per Transaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container">
                        <div className="flex lg:items-center max-lg:flex-col gap-10">
                            <div className="md:w-1/2">
                                <TextBlock title="Ready to Start Paying Your Bills in Seconds?" description="Open your MyMonty app now and enjoy quick, flexible, and secure bill payments on the go!
    Start Paying with MyMonty Today!" button={true} buttonColor="dark"/>
                            </div>
                            <div className="md:w-1/2">
                                <Image className="w-full" alt="Bills" src={image5} placeholder='blur' quality={100} />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
           
        </>
    )
}

export default ATMReceipt;
