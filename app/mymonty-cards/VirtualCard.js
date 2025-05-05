'use client';
import React from 'react';
import Section from '@/app/components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionTwoImage from '@/public/personal/multicurrency-image.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';

const VirtualCard = () => {
    const anim = useGlobalAnimation();
    return (
        <div id="virtual-card">
            <Section>
                <div className='container text-center'>
                    <TextBlock buttonColor="dark" center={true} title="ACCESS YOUR MONEY ANYTIME, ANYWHERE!" description="Your MyMonty virtual prepaid card gives you access to funds online or at cordless ATMs within our network, with great exchange rates for spending abroad." button={true} />
                    <Image ref={anim} className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} />
                </div>
            </Section>
        </div>
    )
}

export default VirtualCard;
