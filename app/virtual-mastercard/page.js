import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/virtual-mastercard.webp';

import Image from 'next/image';
import img2 from '@/public/virtual-mastercard-2.webp';
import TextBlock from '../components/TextBlock';

export const metadata = {
    title: websiteName + 'Payments',
    description: '',
};


const VirtualMastercard = () => {
    const data = {
        title: 'Virtual MasterCard',
        subtitle: 'Cards',
        desc: 'Your Digital Wallet’s Best Friend—The Virtual Mastercard!',
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


    const items = [
        {
            title:'Instant Access',
            description: 'Get your virtual card up and running and use it right away.',
            image: '/vcb-1.webp',
            classes: ''
        },
        {
            title:'Enhanced Security',
            description: 'Rest easy knowing your virtual card can’t be lost or stolen.',
            image: '/vcb-2.webp',
            classes: ''
        },
        {
            title:'Personalized',
            description: 'Make it yours! Choose one of the five colors that best suits your style.',
            image: '/vcb-3.webp',
            classes: ''
        },
        {
            title:'Use Only Online',
            description: 'Perfect for safe and secure online shopping and subscriptions.',
            image: '/vcb-4.webp',
            classes: ''
        },
        {
            title:'Top-Up for Exact Purchases',
            description: 'Load only what you need, then keep it at a zero balance for added security.',
            image: '/vcb-5.webp',
            classes: 'lg:col-span-2'
        },
        {
            title:'Ideal for Managing Online Spending and Budgets',
            description: 'Keep full control of your online purchases.',
            image: '/vcb-6.webp',
            classes: 'lg:col-span-2'
        },
        
    ]

    return (
        <>
            <Banner data={data} />
            <section className="bg-white text-center py-28 max-lg:py-14">
                <div className="container flex flex-col gap-8">
                    <TextBlock buttonColor="dark" title="no need to wait!" center={true} button={true} description="Spice up your digital lifestyle and make secure online purchases with ease. Your virtual card is ready whenever you are." />
                    
                    <div className="relative">
                        <Image src={img2} alt="Girls Looking at the phone"/>
                    </div>
                    
                </div>
                
            </section> 

            <section className="bg-gray-100 py-28 max-lg:py-14 text-center">
                <div className="container">
                    <TextBlock center={true} title="Virtual Card Benefits" description="Enjoy exclusive perks and secure global access with our Platinum Mastercard. Shop, dine, and travel with peace of mind. Like carrying convenience in your wallet!" />

                    <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                        {
                            items.map((item,index)=>(
                                <div key={index} className={`text-center bg-white rounded-3xl p-5 ${item.classes}`}>
                                    <h2 className="smaller-title">{item.title}</h2>
                                    <p>{item.description}</p>
                                    <img className="w-full mt-4" src={item.image} alt="Virtual Card Benefit image" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                


            </section>
        </>
    )
}

export default VirtualMastercard;
