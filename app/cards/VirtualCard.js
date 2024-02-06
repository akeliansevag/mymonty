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
                    <TextBlock center={true} title="Access your money wherever you are" description="With MyMonty virtual cards, your financial freedom is always within the palm of your hand. You can access the money in your MyMonty virtual prepaid card, online or at cardless ATMs within our network, and you’ll get Mastercard’s great-value exchange rates when spending abroad." button={true} />
                    <Image ref={anim} className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} />
                </div>
            </Section>
        </div>
    )
}

export default VirtualCard;
