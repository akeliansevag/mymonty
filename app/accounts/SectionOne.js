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
            <div id="dual-currency-wallet" className='container text-center'>
                <TextBlock buttonColor="dark" center={true} title="DUAL CURRENCY WALLET" description="Double the Power! <br /> Get your dual currency wallet in Fresh USD and LBP as soon as you complete onboarding." button={true} />
                <Image ref={animRef} className='mx-auto mt-10 md:w-2/3' alt="Wallets" src={sectionTwoImage} width='1392' height='464' />
            </div>
        </Section>

    )
}

export default SectionOne;
