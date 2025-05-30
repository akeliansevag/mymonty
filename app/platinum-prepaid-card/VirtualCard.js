'use client';
import React from 'react';
import Section from '@/app/components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionTwoImage from '@/public/physical-platinum-mastercard-banner2.webp';
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
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>Experience the World With MyMonty Mastercard Platinum Prepaid Card</h2>
                            <p className="leading-8 mt-8">Enjoy exclusive perks and secure global access with MyMonty Platinum Prepaid Card. Shop, dine, and travel with peace of mind. Like carrying convenience in your wallet!</p>
                            <div className="flex justify-between items-center gap-4 w-max mx-auto text-white rounded-full bg-black p-2 pr-6 mt-8">
                                <svg width="56" height="53" viewBox="0 0 56 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="27.7874" cy="26.7766" rx="27.2327" ry="26.2212" fill="white"/>
                                    <path d="M41.3327 24.3334H14.666M26.666 29.6667H19.9993M14.666 21.9334L14.666 32.0667C14.666 33.5602 14.666 34.307 14.9567 34.8774C15.2123 35.3792 15.6203 35.7871 16.122 36.0428C16.6925 36.3334 17.4392 36.3334 18.9327 36.3334L37.066 36.3334C38.5595 36.3334 39.3062 36.3334 39.8767 36.0428C40.3784 35.7871 40.7864 35.3792 41.042 34.8774C41.3327 34.307 41.3327 33.5602 41.3327 32.0667V21.9334C41.3327 20.4399 41.3327 19.6932 41.042 19.1228C40.7864 18.621 40.3784 18.2131 39.8767 17.9574C39.3062 17.6667 38.5595 17.6667 37.066 17.6667L18.9327 17.6667C17.4392 17.6667 16.6925 17.6667 16.122 17.9574C15.6203 18.2131 15.2123 18.621 14.9567 19.1228C14.666 19.6932 14.666 20.4399 14.666 21.9334Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='font-bold'>CARD ANNUAL FEE - 12 USD</span>
                            </div>
                            <button onClick={handleOpenModal} className="mm-button mt-8 !bg-black !text-white" href="#">Download App</button>
                        </div >
        
                        <Image ref={anim} className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default VirtualCard;
