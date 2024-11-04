'use client';
import React from 'react';
import Section from '@/app/components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionTwoImage from '@/public/multicurrency-image.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';

const VirtualCard = () => {
    const anim = useGlobalAnimation();
    return (
        <div id="virtual-card">
            <Section>
                <div className='container text-center'>
                    <TextBlock buttonColor="dark" center={true} title="Experience the World with MyMonty Platinum Mastercard" description="Enjoy exclusive perks and secure global access with our Platinum Mastercard. Shop, dine, and travel with peace of mind. Like carrying convenience in your wallet!" button={true} />
                    <Image ref={anim} className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} />
                </div>
            </Section>
        </div>
    )
}

export default VirtualCard;
