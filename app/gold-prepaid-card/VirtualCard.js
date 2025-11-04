'use client';
import React from 'react';
import Section from '@/app/components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionTwoImage from '@/public/live-bold-spend-gold.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';
import { useAppContext } from '../AppContext';

const VirtualCard = () => {
    const anim = useGlobalAnimation();
    const { handleOpenModal } = useAppContext();

    return (
        <div id="virtual-card">
            <Section>
                <div className='max-w-[1060px] mx-auto w-full'>
                    <div className='container text-center'>
                        <div className="md:max-w-full lg:max-w-[60vw] fhd:max-w-[45vw] mx-auto">
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>ELive bold, spend <span className='text-[#CDA65A]'>Gold.</span></h2>
                            <p className="leading-8 mt-8">With Mastercard Gold Prepaid Card from MyMonty, spending power meets high standards.</p>
                            
                            <button onClick={handleOpenModal} className="mm-button mt-8 !bg-black !text-white" href="#">Download App</button>
                        </div >
        
                        <Image ref={anim} className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} width='2120' height='860' />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default VirtualCard;
