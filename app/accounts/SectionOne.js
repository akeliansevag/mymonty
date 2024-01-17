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
                <TextBlock center={true} title="Free Multicurrency Wallet" description="Get your free multicurrency wallet in both Fresh USD/LBP whenever you complete the onboarding process." button={true} />
                <Image ref={animRef} className='mx-auto mt-10 md:w-2/3' alt="Wallets" src={sectionTwoImage} />
            </div>
        </Section>

    )
}

export default SectionOne;
