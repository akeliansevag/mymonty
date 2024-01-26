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
                <TextBlock center={true} title="Monitor Your Spendings and Check Your Transaction History" description="You can view your card activity at any time and keep your eye on your spendings, we will let you digitally export your card statement and save it to your device." button={true} />
                <Image ref={anim} src={sectionFiveImage} alt="Image" className='pt-14 mx-auto' />
            </div>
        </Section>
    )
}

export default Monitor;
