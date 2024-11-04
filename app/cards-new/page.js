import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/cards-banner-2.webp';

import AnimatedBanner from './AnimatedBanner';
import VirtualCard from './VirtualCard';
import TextBlock from '../components/TextBlock';


export const metadata = {
    title: websiteName + 'Cards',
    description: '',
};

const cards = () => {
    const data = {
        title: 'Physical PLATINUM mastercard',
        subtitle: 'Cards',
        desc: 'World-class. Unique. Boundless.',
        image: {
            inGrid: true,
            layout: 'half',
            url: banner,
        },
        cta: {
            type: 'button',
            button: {
                name: 'Download App'
            }
        }
    };

    const howToUse = [
        {
            title: 'Download Mastercard Travel Pass App'
        },
        {
            title: 'Use the app to locate lounges near you'
        },
        {
            title: 'Present the app QR code to the lounge receptionist'
        },
        {
            title: 'Enjoy your lounge access'
        }
    ]

    return (
        <>
            <Banner data={data} AnimatedImage={AnimatedBanner} />
            <VirtualCard />
            <div className="bg-gray-100 py-10 lg:py-20">
                <div className="container text-center">
                    <TextBlock center={true} title="Physical Platinum Mastercard Benefits" description="i need text here i need text herei need text herei need text herei need text herei need text herei need text herei need text herei need text here" />
                </div>
                
                <div className="container py-10 lg:py-20">
                    <div className="flex gap-x-5">
                        <div className="bg-white sticky top-[calc(var(--header-height)+30px)] w-[15%] rounded-xl p-5 self-start flex-none">

                        </div>
                        <div>
                            <div className="bg-white rounded-xl p-8">
                                <h2 className="smaller-title">Middle East and Levant Platinum Mastercard Lounge Program</h2>
                                <p>Enjoy FREE unlimited access to over 25 regional and international DragonPass lounges, business facilities, complimentary refreshments, and snacks mentioned in the MasterCard Travel Pass app.</p>
                                <button className="mm-button blue mt-4">Download App Now</button>
                                
                                <div className="flex items-center -mt-10">
                                    <div className="w-5/6">
                                        <h3 className="font-bold mb-3">HOW TO USE:</h3>
                                        <ul className="pl-2">
                                            {
                                                howToUse.map((item, index) => 
                                                        (
                                                            <li key={index+1} className="flex items-center gap-3 mb-3">
                                                                <span className="bg-[#f7f7f7] w-[30px] h-[30px] rounded-full flex items-center justify-center">{index+1}</span> 
                                                                <span>{item.title}</span>
                                                            </li>
                                                        )
                                                        
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="relative">
                                        <img alt="2 mobile phones" src='/how-to-use.webp' />
                                    </div>
                                </div>    
                            </div>

                            <div>
                                <h2 className="smaller-title text-center">Cleartrip Flights and Hotel Bookings</h2>
                                <div className="min-h-[30vh] relative rounded-3xl p-10 overflow-hidden">
                                    <img className="z-0 object-cover w-full h-full absolute top-0 left-0" src="/cleartrip.webp" />
                                    <div className="flex justify-between relative z-1">
                                        <div>
                                            <img src="/cleartrip-logo.webp" alt="ClearTrip Logo" />
                                        </div>
                                        <div className='text-white text-center'>
                                            <h4 className="font-bold text-4xl">GET 8% OFF</h4>
                                            <p>through Cleartrip’s <a className="underline text-blue-800" target="_blank" href="https://www.cleartrip.ae/offers/uae/choose-your-country">website</a>
                                            </p>
                                            <p>or app from <a className="underline text-blue-800" target="_blank" href="https://apps.apple.com/us/app/cleartrip-flights-hotels-bus/id531324961">App Store</a></p>
                                            <p>or <a className="underline text-blue-800" target="_blank" href="https://play.google.com/store/apps/details?id=com.cleartrip.android&hl=en&gl=US&pli=1">Google Play</a></p>
                                            <div className="relative hole text-black my-4 bg-white rounded-xl p-5 min-h-[108px] flex items-center justify-center">
                                                <div>
                                                    <h5>Promo Code:</h5>
                                                    <h6 className="font-bold text-2xl">MCPLATINUM</h6>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default cards;
