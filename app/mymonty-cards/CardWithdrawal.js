'use client';
import React, { useEffect, useState } from 'react';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';

import bg1 from '@/public/withdrawal/bg-1.webp';
import bg2 from '@/public/withdrawal/bg-2.webp';
import bg3 from '@/public/withdrawal/bg-3.webp';
import bg4 from '@/public/withdrawal/bg-4.webp';
import hand from '@/public/withdrawal/hand.webp';

const CardWithdrawal = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);
    const data = [
        {
            bg: bg1,
            hand: hand,
            dark: false
        },
        {
            bg: bg2,
            hand: hand,
            dark: false
        },
        {
            bg: bg3,
            hand: hand,
            dark: false
        },
        {
            bg: bg4,
            hand: hand,
            dark: true
        },
    ];
    useEffect(() => {

        let key = 0;
        setInterval(() => {
            if (key < data.length) {
                data[key]?.dark ? setDarkTheme(true) : setDarkTheme(false);
                setImageIndex(key);
                key++;
                if (key == data.length) {
                    key = 0;
                }
            }
        }, 750);
    }, [])
    return (
        <div className={`relative py-14 md:py-24 ${!darkTheme ? 'text-white' : ''}`}>
            <div className='container text-center'>
                <TextBlock buttonColor={!darkTheme ? 'white' : ''} center={true} title="Withdraw Whenever, Wherever" description="Need cash? Use your prepaid Mastercard to withdraw from ATMs worldwide." button={true} />
            </div>
            {data && data.map((item, index) => {
                return (
                    <Image className={`${index !== imageIndex ? 'hidden' : ''} object-cover -z-10`} key={index} alt="Background image" src={item.bg} fill priority sizes="100vw" width="" height="" />
                )
            })}

            {data && data.map((item, index2) => {
                return (
                    <Image priority key={index2} className={`${index2 !== imageIndex ? 'hidden' : ''} mt-20 md:w-1/2 translate-x-[-22%] md:translate-x-0`} src={item.hand} alt='Card Hand' />
                )
            })}


        </div>

    )
}

export default CardWithdrawal;
