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
                <TextBlock buttonColor="dark" center={true} title="MONITOR YOUR SPENDING AND CHECK YOUR TRANSACTION HISTORY" description="Keep tabs on your card activity anytime. Digitally export and save your card statements to your device." button={true} />
                <Image ref={anim} src={sectionFiveImage} alt="Image" className='pt-14 mx-auto' width="2120" height="826" />
            </div>
        </Section>
    )
}

export default Monitor;
