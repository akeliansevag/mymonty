'use client';
import React from 'react';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionTwoImage from '@/public/personal/accounts-cards.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';


const SectionOne = () => {
    const animRef = useGlobalAnimation();
    return (
        <Section>
            <div id="multicurrency-wallet" className='container text-center'>
                <TextBlock center={true} title="DUAL CURRENCY WALLET" description="Get your dual currency wallet in both Fresh USD and LBP upon completing the onboarding process." button={true} />
                <Image ref={animRef} className='mx-auto mt-10 md:w-2/3' alt="Wallets" src={sectionTwoImage} />
            </div>
        </Section>

    )
}

export default SectionOne;
