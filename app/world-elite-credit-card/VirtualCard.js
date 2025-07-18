'use client';
import React from 'react';
import Section from '@/app/components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionTwoImage from '@/public/world-elite-credit-card-banner-2.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';

const VirtualCard = () => {
    const anim = useGlobalAnimation();

    return (
        <div id="virtual-card">
            <Section>
                <div className='max-w-[1060px] mx-auto w-full'>
                    <div className='container text-center'>
                        <TextBlock buttonColor="dark" center={true} title="Enter a world of privilege with The Mastercard World Elite Credit Card." description="Live every moment in first-class. Break away from the ordinary. Shop, dine and travel in style." button={true} />
                        <Image ref={anim} className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} width='2116' height='1014' />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default VirtualCard;
