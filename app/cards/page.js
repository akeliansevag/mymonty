import React from 'react';
import Image from 'next/image';
import { websiteName } from '@/app/config';
import TextBlock from '../components/TextBlock';
import PlatinumCardRed from '@/public/platinum-card-red.webp';
import PlatinumCardWhiteLuckyEye from '@/public/platinum-card-white-lucky-eye.webp';
import PlatinumCardGreen from '@/public/platinum-card-green.webp';
import PhysicalPlatinumCardBlack from '@/public/physical-platinum-card-black.webp';
import PhysicalPlatinumCardBlueLuckyEye from '@/public/physical-platinum-card-blue-lucky-eye.webp';

import WorldEliteCardBlack from '@/public/world-elite-card-black.webp';
import WorldEliteCardCredit from '@/public/world-elite-card-credit.webp';

import EuroCardGreen from '@/public/euro-card-green.webp';

import Link from 'next/link';

export const metadata = {
    title: 'MyMonty\'s Cards' + websiteName,
    description: 'Explore MyMonty\'s range of digital & physical cards in Lebanon. From prepaid to credit, find the perfect card for your spending needs. Get your card!',
};

// Combined card data
const allCards = [
    {
        sectionTitle: 'Mastercard Platinum credit card',
        cards: [
            {
                title: 'Platinum Credit Card',
                color: 'Red',
                image: PlatinumCardRed,
                link: '/platinum-credit-card',
            },
            {
                title: 'Platinum Credit Card',
                color: 'Lucky Eye',
                image: PlatinumCardWhiteLuckyEye,
                link: '/platinum-credit-card',
            },
            {
                title: 'Platinum Credit Card',
                color: 'Green',
                image: PlatinumCardGreen,
                link: '/platinum-credit-card',
            },
            {
                title: 'Euro Credit Card',
                color: 'Green',
                image: EuroCardGreen,
                link: '/cards',
            },
        ],
    },
    {
        sectionTitle: 'Mastercard Platinum Prepaid Card',
        cards: [
            {
                title: 'Platinum Prepaid Card',
                color: 'Black',
                image: PhysicalPlatinumCardBlack,
                link: '/physical-platinum-mastercard',
            },
            {
                title: 'Platinum Prepaid Card',
                color: 'Lucky Eye',
                image: PhysicalPlatinumCardBlueLuckyEye,
                link: '/physical-platinum-mastercard',
            },
        ]
    },
    {
        sectionTitle: 'Mastercard World Elite Credit Card',
        cards: [
            // {
            //     title: 'World Elite Card',
            //     color: 'Black',
            //     image: WorldEliteCardBlack,
            //     link: '/world-elite-credit-card',
            // },
            {
                title: 'World Elite Credit Card',
                color: 'Credit',
                image: WorldEliteCardCredit,
                link: '/world-elite-credit-card',
            },
        ],
    },
]

const Cards = () => {
    return (
        <>
            <section className='bg-[#F7F7F7] pt-14 pb-14 lg:mt-28 lg:pt-20 lg:pb-20'> 
                <div className='container text-center'>
                    <h2>MyMonty's Cards</h2>
                    <h1 className="font-black text-xl sm:text-2xl md:text-4xl fhd:text-5xl leading-none uppercase mt-4">All You Need to Know About Your Card</h1>

                    {allCards.map((section, index) => (
                        <div key={index}>
                            <h3 className='text-xl mt-32 uppercase font-black'>{section.sectionTitle}</h3>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                                {section.cards.map((card, idx) => (
                                    <div key={idx} className='flex flex-col gap-4'>
                                        <Image src={card.image} alt={`${card.title} ${card.color}`} width='682' height='602' />
                                        <div className='w-full lg:w-4/5 mx-auto flex justify-between items-center text-start gap-4'>
                                            <div className='flex flex-col mt-4'>
                                                <h4 className='text-base font-bold'>{card.title}</h4>
                                                <p className='text-base'>{card.color}</p>
                                            </div>
                                            <Link className='mm-button mt-8 !text-[12px]' href={card.link}>
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Cards  ;
