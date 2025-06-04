import React from 'react';

import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/cards-banner-2.webp';
import image1 from '@/public/travel-shop-and-pay-in-euros.webp';
import image2 from '@/public/wallet-balance.webp';
import image3 from '@/public/euro-platinum.webp';

import AnimatedBanner from './AnimatedBanner';
import VirtualCard from './VirtualCard';
import TextBlock from '../components/TextBlock';
import Content from '../components/cards/Content';
import Section from '@/app/components/Section';
import Image from 'next/image';


export const metadata = {
    title: websiteName + 'Platinum Credit Card',
    description: '',
};

const cards = () => {
    const data = {
        title: 'Platinum credit card',
        subtitle: 'Cards',
        desc: '<strong>1% Cashback</strong> on any amount spent using the MyMonty Credit Card at Points of Sale or online.',
        image: {
            inGrid: true,
            layout: 'half',
            url: banner,
        },
        cta: {
            type: 'button',
            button: {
                name: 'Download App'
            }
        }
    };

    
    const terms = {
        termsAndConditions: '/credit-cards-terms-and-conditions.pdf', 
        kfs: '/platinum-credit-card-kfs.pdf'
    }

    return (
        <>
            <Banner terms={terms} data={data} AnimatedImage={AnimatedBanner}/>
            <VirtualCard />
            <div className="py-10 lg:py-20">
                <div className="container text-center">
                    <div className='w-full max-w-[1060px] mx-auto'>
                        <div className='container text-center'>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>Travel, shop, and pay in <span className='text-[#6BA8B1]'>Euros</span></h2>
                            <p className='leading-8 mt-8'>The MyMonty Euro Platinum Credit Card is the first and only euro credit card offered by an eWallet in Lebanon, designed exclusively for travelers and frequent spenders in Europe.</p>

                            <div className='flex max-lg:flex-col justify-between gap-8 mt-12'>
                                <div className='lg:w-2/3 flex'>
                                    <Image className='w-full object-cover rounded-3xl' alt="Girls Eating Ice Cream" src={image1} />
                                </div>
                                <div className='lg:w-1/3'>
                                    <Image className='w-full' alt="Wallet Balance" src={image2} />
                                    <Image className='w-full mt-6' alt="Mastercard Platinum Credit Card" src={image3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='mt-20 lg:mt-40'>
                        <TextBlock center={true} title="Mastercard Platinum Credit Card Benefits" description="" />
                    </div>
                </div>
                
                <Content />
            </div>
        </>
    )
}

export default cards;
