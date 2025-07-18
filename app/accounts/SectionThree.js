'use client';
import React from 'react';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import useGlobalAnimation from '../hooks/useGlobalAnimation';
import coins from '@/public/personal/coins.webp';


const SectionThree = () => {
    const animRef = useGlobalAnimation();
    return (
        <Section>
            <div className='container flex flex-col items-center lg:flex-row gap-10'>
                <TextBlock buttonColor="dark" title='WELCOME TO THE FUTURE OF EASY PAYMENTS' description="Enjoy smooth, quick money transactions that are not just efficient but also fun and incredibly flexible." button={true} />
                <Image ref={animRef} className='md:w-1/3' src={coins} alt="Coins" width="1028" height="834" />
            </div>
        </Section>

    )
}

export default SectionThree;
