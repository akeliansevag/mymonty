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
    title: websiteName + 'MyMonty\'s Cards',
    description: '',
};

// Combined card data
const allCards = [
    {
        sectionTitle: 'Platinum credit card',
        cards: [
            {
                title: 'Platinum Card',
                color: 'Red',
                image: PlatinumCardRed,
                link: '/platinum-credit-card',
            },
            {
                title: 'Platinum Card',
                color: 'White Lucky Eye',
                image: PlatinumCardWhiteLuckyEye,
                link: '/platinum-credit-card',
            },
            {
                title: 'Platinum Card',
                color: 'Green',
                image: PlatinumCardGreen,
                link: '/platinum-credit-card',
            },
        ],
    },
    {
        sectionTitle: 'Physical Platinum Mastercard',
        cards: [
            {
                title: 'Physical Platinum Card',
                color: 'Black',
                image: PhysicalPlatinumCardBlack,
                link: '/physical-platinum-mastercard',
            },
            {
                title: 'Physical Platinum Card',
                color: 'Blue Lucky Eye',
                image: PhysicalPlatinumCardBlueLuckyEye,
                link: '/physical-platinum-mastercard',
            },
        ],
    },
    {
        sectionTitle: 'World Elite Card',
        cards: [
            // {
            //     title: 'World Elite Card',
            //     color: 'Black',
            //     image: WorldEliteCardBlack,
            //     link: '/world-elite-credit-card',
            // },
            {
                title: 'World Elite Card',
                color: 'Credit',
                image: WorldEliteCardCredit,
                link: '/world-elite-credit-card',
            },
        ],
    },
    {
        sectionTitle: 'MyMonty Euro Card',
        cards: [
            {
                title: 'Euro Card',
                color: 'Green',
                image: EuroCardGreen,
                link: '/cards',
            },
        ],
    },
]

const Cards = () => {
    return (
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
                                    <Image src={card.image} alt={`${card.title} ${card.color}`} />
                                    <div className='flex justify-between items-center text-start gap-4'>
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
    )
}

export default Cards  ;
