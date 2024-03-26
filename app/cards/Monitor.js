'use client';
import React from 'react'
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionFiveImage from '@/public/personal/cards-section-5-image.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';

const Monitor = () => {
    const anim = useGlobalAnimation();
    return (
        <Section>
            <div className='container text-center'>
                <TextBlock center={true} title="Monitor Your Spending and Check Your Transaction History" description="You can view your card activity anytime and keep track of your spending. Additionally, we provide the option to digitally export your card statement and save it to your device." button={true} />
                <Image ref={anim} src={sectionFiveImage} alt="Image" className='pt-14 mx-auto' />
            </div>
        </Section>
    )
}

export default Monitor;
