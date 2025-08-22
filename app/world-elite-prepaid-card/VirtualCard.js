'use client';
import React from 'react';
import Section from '@/app/components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionTwoImage from '@/public/world-elite-prepaid-card-bg.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';

const VirtualCard = () => {
    const anim = useGlobalAnimation();

    return (
        <div id="virtual-card">
            <Section>
                <div className='max-w-[1060px] mx-auto w-full'>
                    <div className='container text-center'>
                        <TextBlock buttonColor="dark" center={true} title="Experience Luxury without limits with the world elite prepaid card." description="Enjoy shopping, dining, and traveling with an elite badge that’s easy to access and convenient" button={true} />
                        <Image ref={anim} className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} width='2116' height='1014' />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default VirtualCard;
