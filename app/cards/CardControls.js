'use client';
import React from 'react';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionFourImage from '@/public/personal/lock-img.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';

const CardControls = () => {
    const anim = useGlobalAnimation();
    return (
        <div id="card-controls">
            <Section>
                <div className='container flex flex-col md:flex-row gap-10 items-center'>
                    <TextBlock title="Lock and Unlock on the Go" description="Lost your card? Doubting a fraudulent transaction? Keep your prepaid card safe and your money protected by instantly locking your card in-app." button={true} />
                    <Image ref={anim} className='md:w-1/2' src={sectionFourImage} alt='People' />
                </div>
            </Section>
        </div>
    )
}

export default CardControls;
