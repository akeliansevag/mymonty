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
                <TextBlock title='Welcome to The New Era of Effortless Payments' description="Experience hassle-free and quick money transactions that are not only efficient, but also enjoyable and highly adaptable." button={true} />
                <Image ref={animRef} className='md:w-1/3' src={coins} alt="Coins" />
            </div>
        </Section>

    )
}

export default SectionThree;
