import React from 'react';
import Image from 'next/image';
import { websiteName } from '@/app/config';
import TextBlock from '../components/TextBlock';
import GoldCard from '@/public/gold-card.webp';

import PhysicalPlatinumCardBlack from '@/public/physical-platinum-card-black.webp';
import PhysicalPlatinumCardBlueLuckyEye from '@/public/physical-platinum-card-blue-lucky-eye.webp';
import PhysicalPlatinumCreditCardBlue from '@/public/physical-platinum-credit-card-blue.webp';

import WorldEliteCardBlack from '@/public/world-elite-card-black.webp';

import Link from 'next/link';

export const metadata = {
    title: 'MyMonty\'s Cards' + websiteName,
    description: 'Explore MyMonty\'s range of digital & physical cards in Lebanon. From prepaid to credit, find the perfect card for your spending needs. Get your card!',
};

// Combined card data
const allCards = [
    {
        sectionTitle: 'Mastercard Gold prepaid card',
        cards: [
            {
                title: 'Gold Prepaid Card',
                color: 'Gold',
                image: GoldCard,
                link: '/gold-prepaid-card',
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
            {
                title: 'Euro Platinum Prepaid Card',
                color: 'Blue',
                image: PhysicalPlatinumCreditCardBlue,
                link: '/physical-platinum-mastercard#euro-platinum',
            },
        ]
    },
    {
        sectionTitle: 'Mastercard World Elite Prepaid Card',
        cards: [
            {
                title: 'World Elite Prepaid Card',
                color: 'Black',
                image: WorldEliteCardBlack,
                link: '/world-elite-prepaid-card',
            },
        ],
    },
]

const Cards = () => {
    return (
        <>
            <section className='bg-[#F7F7F7]'> 
                <div className='container text-center py-28'>
                    <h1 className="font-black text-xl sm:text-2xl md:text-4xl fhd:text-5xl leading-none uppercase mt-4">All You Need to Know About Your Card</h1>

                    {allCards.map((section, index) => (
                        <div key={index}>
                            <h3 className='text-xl mt-32 uppercase font-black'>{section.sectionTitle}</h3>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-left'>
                                {section.cards.map((card, idx) => (
                                    <div key={idx} className='flex flex-col gap-4'>
                                        <Image src={card.image} alt={`${card.title} ${card.color}`} width='682' height='602' />
                                        <div className='text-center -mt-5'>
                                            <div className='flex flex-col mt-4'>
                                                <h4 className='text-base font-bold'>{card.title}</h4>
                                                <p className='text-base'>{card.color}</p>
                                            </div>
                                            <Link className='mm-button mt-3 !text-[12px]' href={card.link}>
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
