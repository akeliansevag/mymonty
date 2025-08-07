import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';

import React from 'react';
import banner from '@/public/virtual-mastercard.webp';

import Image from 'next/image';
import img2 from '@/public/virtual-mastercard-2.webp';
import TextBlock from '../components/TextBlock';

export const metadata = {
    title: 'Standard Virtual Card' + websiteName,
    description: 'Get your MyMonty Standard Virtual Card instantly. Secure online payments, easy management & global acceptance. Apply for your virtual card!',
};


const VirtualMastercard = () => {
    const data = {
        title: 'Standard Virtual Card',
        subtitle: 'Cards',
        desc: 'Your Digital Wallet’s Best Friend',
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
            description: 'Take full control and stay on top of your online purchases.',
            image: '/vcb-6.webp',
            classes: 'lg:col-span-2'
        },
        
    ]
    const terms = {
        termsAndConditions: '/Virtual Prepaid Card Terms.pdf', 
        kfs: '/KFS - Business Virtual Prepaid Card.pdf'
    }
    return (
        <>
            <Banner terms={terms} data={data} />
            <section className="bg-white text-center py-28 max-lg:py-14">
                <div className="container flex flex-col gap-8">
                    <TextBlock buttonColor="dark" title="no need to wait!" center={true} button={true} description="Spice up your digital lifestyle and make secure online purchases with ease. Your MyMonty Mastercard Standard Virtual Card is ready whenever you are — no need to wait!" />
                    
                    <div className="relative">
                        <Image src={img2} alt="Girls Looking at the phone" width="2120" height="982" />
                    </div>
                    
                </div>
                
            </section> 

            <section className="bg-gray-100 py-28 max-lg:py-14 text-center">
                <div className="container">
                    <TextBlock center={true} title="Mastercard Standard Virtual Card Benefits" description="Enjoy instant access and seamless online payments with our Virtual Card. Shop, subscribe, and transact securely. It’s all just a few taps away!" />

                    <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                        {
                            items.map((item,index)=>(
                                <div key={index} className={`text-center bg-white rounded-3xl p-5 ${item.classes}`}>
                                    <h2 className="smaller-title">{item.title}</h2>
                                    <p>{item.description}</p>
                                    <img className="w-full mt-4" src={item.image} alt="Virtual Card Benefit image" width="100%" height="100%" />
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
