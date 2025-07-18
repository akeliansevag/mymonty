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
                    <TextBlock buttonColor="dark" title="LOCK YOUR CARD ON THE GO" description="Lost your card or suspect fraud? Instantly lock your card within the app to protect your funds." button={true} />
                    <Image ref={anim} className='md:w-1/2' src={sectionFourImage} alt='People' width='1071' height='826' />
                </div>
            </Section>
        </div>
    )
}

export default CardControls;
