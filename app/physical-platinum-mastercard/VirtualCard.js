'use client';
import React from 'react';
import Section from '@/app/components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionTwoImage from '@/public/multicurrency-image.webp';
import useGlobalAnimation from '../hooks/useGlobalAnimation';

const VirtualCard = () => {
    const anim = useGlobalAnimation();

    return (
        <div id="virtual-card">
            <Section>
                <div className='container text-center'>
                    <TextBlock buttonColor="dark" center={true} title="Experience the World with MyMonty Platinum Mastercard" description="Enjoy exclusive perks and secure global access with our Platinum Mastercard. Shop, dine, and travel with peace of mind. Like carrying convenience in your wallet!" button={true} />
                    <Image ref={anim} className='mx-auto mt-14' alt="Wallets" src={sectionTwoImage} />
                </div>
                <div className='container'>
                    <div className='grid lg:grid-cols-2 max-lg:grid-cols-1 gap-10 mt-10'>
                        <div className="bg-[#f7f7f7] rounded-2xl p-7">
                            <div className="flex items-center gap-5">
                                <div className='bg-[var(--mm-blue)] rounded-full w-[100px] h-[100px] flex items-center justify-center'>
                                    <svg width="53" height="42" viewBox="0 0 53 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.5 11.8125C22.1093 11.8125 18.55 15.9255 18.55 21C18.55 26.0736 22.1093 30.1875 26.5 30.1875C30.8891 30.1875 34.45 26.0753 34.45 21C34.45 15.9255 30.8907 11.8125 26.5 11.8125ZM29.8125 25.5938C29.8125 25.9563 29.516 26.25 29.15 26.25H23.85C23.484 26.25 23.1875 25.9563 23.1875 25.5938V24.2812C23.1875 23.9187 23.484 23.625 23.85 23.625H25.175V19.0772L25.1361 19.1026C25.0637 19.1505 24.9826 19.1837 24.8972 19.2004C24.8119 19.2172 24.7241 19.2171 24.6388 19.2002C24.5535 19.1832 24.4724 19.1498 24.4001 19.1019C24.3279 19.0539 24.2659 18.9922 24.2177 18.9205L23.4823 17.8287C23.434 17.757 23.4005 17.6766 23.3836 17.5921C23.3667 17.5075 23.3668 17.4205 23.3839 17.3361C23.4009 17.2516 23.4346 17.1712 23.4831 17.0997C23.5315 17.0281 23.5937 16.9667 23.6662 16.9189L24.9357 16.0806C25.2621 15.865 25.6456 15.75 26.0379 15.75H27.1625C27.5285 15.75 27.825 16.0437 27.825 16.4062V23.625H29.15C29.516 23.625 29.8125 23.9187 29.8125 24.2812V25.5938ZM50.35 5.25H2.65C1.1867 5.25 0 6.42551 0 7.875V34.125C0 35.5745 1.1867 36.75 2.65 36.75H50.35C51.8133 36.75 53 35.5745 53 34.125V7.875C53 6.42551 51.8133 5.25 50.35 5.25ZM49.025 27.5625C46.0976 27.5625 43.725 29.9127 43.725 32.8125H9.275C9.275 29.9127 6.90242 27.5625 3.975 27.5625V14.4375C6.90242 14.4375 9.275 12.0873 9.275 9.1875H43.725C43.725 12.0873 46.0976 14.4375 49.025 14.4375V27.5625Z" fill="white"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='uppercase font-bold max-lg:text-xl lg:text-2xl'>Card Issuance Fee</h3>  
                                    <h4 className='uppercase font-extrabold max-lg:text-2xl lg:text-4xl'>12 USD</h4>  
                                </div>
                                
                            </div>
                        </div>

                        <div className="bg-[#f7f7f7] rounded-2xl p-7">
                            <div className="flex items-center gap-5">
                                <div className='bg-[var(--mm-blue)] rounded-full w-[100px] h-[100px] flex items-center justify-center'>
                                    <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4499_5675)">
                                        <path d="M35.7143 5.75H31.4286V1.07812C31.4286 0.48273 30.9488 0 30.3571 0H26.7857C26.194 0 25.7143 0.48273 25.7143 1.07812V5.75H14.2857V1.07812C14.2857 0.48273 13.806 0 13.2143 0H9.64286C9.05116 0 8.57143 0.48273 8.57143 1.07812V5.75H4.28571C1.91875 5.75 0 7.68074 0 10.0625V41.6875C0 44.0693 1.91875 46 4.28571 46H35.7143C38.0812 46 40 44.0693 40 41.6875V10.0625C40 7.68074 38.0812 5.75 35.7143 5.75ZM35.1786 41.6875H4.82143C4.67935 41.6875 4.54309 41.6307 4.44262 41.5296C4.34216 41.4285 4.28571 41.2914 4.28571 41.1484V14.375H35.7143V41.1484C35.7143 41.2914 35.6578 41.4285 35.5574 41.5296C35.4569 41.6307 35.3207 41.6875 35.1786 41.6875ZM30.4599 23.6604L17.7537 36.3435C17.3337 36.7628 16.6553 36.7601 16.2385 36.3374L9.53393 29.5363C9.11723 29.1136 9.11991 28.431 9.54 28.0116L11.5685 25.9869C11.9886 25.5676 12.667 25.5702 13.0837 25.9931L17.0215 29.9876L26.9387 20.0885C27.3588 19.6692 28.0371 19.6719 28.4539 20.0946L30.4661 22.1357C30.8828 22.5584 30.88 23.2411 30.4599 23.6604Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_4499_5675">
                                        <rect width="40" height="46" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='uppercase font-bold max-lg:text-xl lg:text-2xl'>card Annual Fee</h3>  
                                    <h4 className='uppercase font-extrabold max-lg:text-2xl text-4xl'>FREE</h4>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default VirtualCard;
