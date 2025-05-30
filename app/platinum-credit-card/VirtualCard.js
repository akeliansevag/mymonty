'use client';
import React from 'react';
import Section from '@/app/components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionTwoImage from '@/public/platinum-credit-card-banner3.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';

const VirtualCard = () => {
    const anim = useGlobalAnimation();
    return (
        <div id="virtual-card">
            <Section>
                <div className='w-full max-w-[1060px] mx-auto'>
                    <div className='container text-center'>
                        <TextBlock buttonColor="dark" center={true} title="Ready when you are" description="The MyMonty Mastercard Platinum Credit Card combines convenience, security, 
    and exclusive perks all in one place. From urgent purchases to spontaneous adventures, trust your MyMonty Credit Card to save the day." button={true} />
                        <Image ref={anim} className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} />
                    </div>
                </div>
               
            </Section>
        </div>
    )
}

export default VirtualCard;
