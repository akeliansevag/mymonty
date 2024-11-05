import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/cards-banner-2.webp';

import AnimatedBanner from './AnimatedBanner';
import VirtualCard from './VirtualCard';
import TextBlock from '../components/TextBlock';
import Promo from './Promo';
import TravelIcon from './TravelIcon';
import LifestyleIcon from './LifestyleIcon';
import PeaceofmindIcon from './PeaceofmindIcon';


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
    ];

    const bicester = [
        {
            title: 'VIP invitation (to be exchanged for a VIP card with an additional 10% discount on purchases in participating boutiques)'
        },
        {
            title: '15% discount on chauffeur drive experiences at participating villages'
        },
        {
            title: '15% discount on shopping packages'
        },
        {
            title: '15% discount on Shopping Express'
        },
        {
            title: 'Access to VIP lounges (subject to availability)'
        }
    ];

    const my_us = [
        {
            title: 'A MyUS address to use at check-out at your favorite online stores'
        },
        {
            title: '30% off shipping for the first month following registration'
        },
        {
            title: 'Free Premium Membership for 2 years (a $120 value)'
        },
        {
            title: '20% off shipping for the remainder of the 2-year membership'
        }
    ]

    const go_gamers = [
        {
            title: 'Get 50 % off on Go Gamers Premium Membership & unlock access to world-renowned tournaments like FIFA, League of Legends, etc.'
        },
        {
            title: 'Access Mastercard Championship Series - Play in weekly, monthly, and quarterly tournaments and win big prizes (vouchers for in-gaming currency, gaming accessories)'
        },
        {
            title: 'Get coaching sessions from experts on the Mastercard Championship Series when paying with your eligible Mastercard'
        }
    ]

    const treatments = [
        {
            title: '10% discount on service fees for treatments in Turkey and India'
        },
        {
            title: '5% discount on service fees for treatments in the United Arab Emirates'
        },
        {
            title: 'A second opinion from top specialists in India'
        },
        {
            title: 'Complimentary Concierge Services in Thailand and Germany'
        }
    ]

    const fiit = [
        {
            title: '800+ workouts with world-class trainers'
        },
        {
            title: 'Training plans for every level'
        },
        {
            title: 'Progress tracking with smartwatches'
        },
        {
            title: 'Multiple disciplines: Barre, HIIT, strength, yoga & more'
        }
    ]

    const lingokids = [
        {
            title: '2 months of Lingokids for free for new users'
        },
        {
            title: '30% off monthly subscriptions for new and existing users'
        },
    ]

    const purchase_protection = [
        {
            title: 'Protected in case of theft or accidental damage for up to 180 days from the date of purchase'
        },
        {
            title: 'Covered for up to USD 2,000 per claim and a maximum of USD 5,000 over 12 months'
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
                        <div className="bg-white sticky top-[calc(var(--header-height)+30px)] w-[15%] rounded-xl p-5 self-start flex-none flex flex-col gap-7">
                            <div className="text-center flex flex-col items-center">
                                <div className="p-6 bg-[#E9EEFB] rounded-2xl">
                                    <TravelIcon active={false}/>
                                </div>
                                <span className={"mt-2 text-[#2657D4] font-bold"}>Travel</span>
                            </div>

                            <div className="text-center flex flex-col items-center">
                                <div className="p-6 rounded-2xl">
                                    <LifestyleIcon active={false}/>
                                </div>
                                <span className="mt-2 font-bold">Lifestyle</span>
                            </div>

                            <div className="text-center flex flex-col items-center">
                                <div className="p-6 rounded-2xl">
                                  <PeaceofmindIcon active={false}/>  
                                </div>
                                <span className="mt-2 font-bold">Peace of Mind</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-28">
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
                                        <div className="self-end">
                                            <img src="/cleartrip-logo.webp" alt="ClearTrip Logo" />
                                        </div>
                                        <div className='text-white text-center'>
                                            <h4 className="font-bold text-4xl">GET 8% OFF</h4>
                                            <p>through Cleartrip’s <a className="underline text-blue-800" target="_blank" href="https://www.cleartrip.ae/offers/uae/choose-your-country">website</a>
                                            </p>
                                            <p>or app from <a className="underline text-blue-800" target="_blank" href="https://apps.apple.com/us/app/cleartrip-flights-hotels-bus/id531324961">App Store</a></p>
                                            <p>or <a className="underline text-blue-800" target="_blank" href="https://play.google.com/store/apps/details?id=com.cleartrip.android&hl=en&gl=US&pli=1">Google Play</a></p>
                                            <Promo code="MCPLATINUM"/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="flex gap-20 items-center">
                                <div className="w-1/2">
                                    <h2 className="smaller-title">Mastercard Hotel Bookings</h2>
                                    <p>Enjoy <strong>up to 30% off</strong> at leading hotel chains worldwide and access unparalleled hotel benefits through their <a href="https://hotelbookings.priceless.com/" target="_blank" className="text-[var(--mm-blue)]">website</a> using the 6-digit Mastercard BIN.</p>
                                </div>
                                <div className="w-1/2">
                                    <img src="/hotel-bookings.webp" alt="Hotel Bookings" />
                                </div>
                            </div>

                            <div className="flex gap-20 items-center">
                                <div className="w-1/2">
                                    <img src="/hotels-resorts.webp" alt="Hotel Bookings" />
                                </div>
                                <div className="w-1/2">
                                    <h2 className="smaller-title">IHG Hotels And Resorts</h2>
                                    <p>When booking through their <a target="_blank" className="text-[var(--mm-blue)]" href="https://www.ihg.com/hotels/gb/en/reservation?fromRedirect=true&qSrt=sAV&setPMCookies=true&dp=true&gclid=CjwKCAjwpbi4BhByEiwAMC8JnSKGU1pK2JvmPQGdy6dYXU-Avkms3WDYhqMkwPW7uCt-9_Vm0x6O3RoCHf0QAvD_BwE&cm_mmc=PDSEA-_-G_F-IMEA_FS-MEA_H-IMEA_HS-MEA_6C_BSF_EXM_CORE-IHG_EN&srb_u=1">website</a>, you get a <strong>15% discount</strong> and exclusive offers on IHG Hotels & Resorts across Europe, Maldives, India, the Middle East & Africa. </p>
                                </div>
                                
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="text-center">
                                    <h2 className="smaller-title">Booking.com</h2>
                                    <p>Get <strong>10% money back</strong> on your next stay through <a href="https://booking.com" target="_blank" className="text-[--mm-blue]">Booking.com</a>, click on “Unlock Deals” and use the promo code below.</p>
                                </div>
                                <div className="overflow-hidden aspect-[16/7] relative flex justify-end">
                                    <img className="absolute object-cover w-full h-full top-0" src="/booking-com.webp" alt="booking" />
                                    <div className="z-1 relative pr-10 pt-10">
                                        <Promo code="MCBKG"/>
                                    </div>
                                    
                                </div>
                                <div className="text-center">
                                    <p>
                                    The reward will be credited to your booking.com wallet, within 64 days after the completion of your stay.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="text-center">
                                    <h2 className="smaller-title">AVIS Car Rental</h2>
                                    <p>Enjoy <strong>20% off</strong> your next car rental and a complimentary upgrade with Avis through their <a target="_blank" className="text-[var(--mm-blue)]" href="https://avisworld.com/">website</a>.</p>
                                </div>
                                <div>
                                    <img src="/avis.webp" alt="booking" />
                                </div>
                                <div className="text-center">
                                    <p>
                                        Click <a target="_blank" className="text-[var(--mm-blue)]" href="https://secure-one.avisworld.com/en_GB/Avis-MastercardMEA/AvisPreferred">here</a> to sign up for the Avis Preferred program.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="bg-white rounded-3xl p-6">
                                    <h2 className="smaller-title">Rentalcars.com</h2>
                                    <p>Enjoy 10% off car rentals when booking through <a target="_blank" className="text-[var(--mm-blue)]" href="https://rentalcars.com">Rentalcars.com</a>.</p>
                                    <img className="mt-8" src="/rental-cars.webp" alt="RentalCars" />
                                </div>
                                <div className="bg-white rounded-3xl p-6">
                                    <h2 className="smaller-title">Budget Truck & Car Rental</h2>
                                    <p>Get <strong>up to 10%</strong> off on your next car or truck rental with Budget through their <a className="text-[var(--mm-blue)]" target="_blank" href="https://one.budgetinternational.com/en_GB/Budget-MastercardMEA/">website</a>. </p>
                                    <img className="mt-8" src="/budget-truck.webp" alt="RentalCars" />
                                </div>
                            </div>

                            <div>
                                <div className="min-h-[50vh] flex items-center relative rounded-3xl p-10 overflow-hidden">
                                    <img className="z-0 object-cover w-full h-full absolute top-0 left-0" src="/priceless-cities.webp" />
                                    <div className="relative z-1">
                                        <div className='text-white w-1/2'>
                                            <h4 className="font-bold text-4xl">Priceless Cities</h4>
                                            <p>Enjoy exclusive access to dining, travel, 
                                            and entertainment experiences in over 40 cities and countries through <a href="https://priceless.com" target="_blank" className="underline">Priceless.com.</a></p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="flex gap-8">
                                <div className="w-2/3 bg-white rounded-3xl p-8">
                                    <h2 className="smaller-title">Bicester Village Shopping Collection</h2>
                                    <p>Shop luxury in style with VIP discounts at the Bicester Village Shopping Collection across Europe:</p>
                                    <ul className="flex flex-col gap-4 mt-8">
                                       {
                                       bicester.map((item,index) => (
                                        <li key={index} className="rounded-xl bg-[#f7f7f7] p-6">
                                            {item.title}
                                        </li>
                                       ))
                                       }
                                    </ul>
                                    <p className="mt-8">
                                        Visit their <a target="_blank" className="text-[var(--mm-blue)]" href="https://www.thebicestercollection.com/en/destinations">website</a> to avail these offers.
                                    </p>
                                </div>
                                <div className="w-1/3 bg-white rounded-3xl relative overflow-hidden">
                                    <img src="/bicester.webp" alt="Bicester" className="absolute object-cover top-[-100px]"/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="text-center">
                                    <h2 className="smaller-title">Farfetch</h2>
                                    <p>Enjoy <strong>10% off</strong> incredible fashion at Farfetch when spending $200 or above.</p>
                                </div>
                                <div className="min-h-[50vh] overflow-hidden relative flex justify-end">
                                    <img className="absolute object-cover w-full top-0" src="/farfetch.webp" alt="booking" />
                                    <div className="z-1 relative pr-10 pt-10">
                                        <Promo code="MCMEAFF10"/>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p>
                                        Check out the <a target="_blank" className="text-[--mm-blue]" href="https://www.farfetch.com/lb/mastercard/privileges/evergreen/terms-and-conditions.aspx?clickref=1011lzRV4NqX&utm_source=mastercard_privileges&utm_medium=partnerships&utm_campaign=PHPAR&pid=performancehorizon_int&c=PHPAR&clickid=1011lzRV4NqX&af_siteid=mastercard_privileges&af_cost_model=CPA&af_channel=partnerships&is_retargeting=true">Terms & Conditions</a> for clarification on the excluded brands.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-10 items-center">
                                <div className="w-2/3">
                                    <h2 className="smaller-title">MyUS Premium Membership</h2>
                                    <p>Shop at over 100,000 U.S. retailers, including Apple, Amazon, and Ralph Lauren, and get fast, reliable, affordable international shipping with MyUS, and enjoy:</p>
                                    <div className="grid grid-cols-2 gap-6 mt-5 mb-5">
                                       {
                                            my_us.map((item,index)=> (
                                                <div key={index} className="bg-white rounded-2xl p-5">
                                                    {item.title}
                                                </div>
                                            ))
                                       }
                                    </div>
                                    <p>Visit their <a className="text-[var(--mm-blue)]" target="_blank" href="https://www.myus.com/welcome/mastercardpremium/">website</a> to register and use your TIER Mastercard® on the payment page.</p>
                                </div>
                                <div className="w-1/3">
                                       <img src="/myus.webp" alt="MyUS" />
                                </div>
                            </div>

                            <div className="text-center bg-white rounded-3xl p-8">
                                <h2 className="smaller-title">Mastercard Gamer Pass With Go Gamers</h2>
                                <p>Get your Mastercard Gamer Pass to participate in one of the biggest online gaming communities consisting of online coaching sessions & tournaments for your favorite games & win prizes:</p>
                                <div className="grid grid-cols-3 gap-5 mt-5 mb-5">
                                    {
                                        go_gamers.map((item, index)=>(
                                            <div key={index} className="bg-[#f7f7f7] rounded-xl p-5 flex items-center">
                                                {item.title}
                                            </div>
                                        ))
                                    }
                                </div>
                                <p>
                                    Sign up or log in to <a target="_blank" className="text-[var(--mm-blue)]" href="https://gogamers.tech/">Go Gamers Gaming Community</a> and use your Mastercard to purchase “Mastercard Premium Membership” to get started.
                                </p>
                            </div>

                            <div className="flex gap-10 items-center">
                                <div className="w-1/3">
                                       <img src="/medical-tourism-concierge.webp" alt="MyUS" />
                                </div>
                                <div className="w-2/3">
                                    <h2 className="smaller-title">Medical Tourism Concierge</h2>
                                    <p>Get treatments with the best medical experts, hospitals, and clinics in India, Turkey, UAE, Germany, and Thailand. With this service, you can get:</p>
                                    <div className="grid grid-cols-2 gap-6 mt-5 mb-5">
                                       {
                                            treatments.map((item,index)=> (
                                                <div key={index} className="bg-white rounded-2xl p-5">
                                                    {item.title}
                                                </div>
                                            ))
                                       }
                                    </div>
                                    <p>Get started and check out the selected UAE, Turkish, and Indian hospitals <a target="_blank" className="text-[var(--mm-blue)]" href="https://www.vaidam.com/mastercard-offers">here.</a> </p>
                                </div>
                                
                            </div>
                                       
                            <div>
                               <div className="text-center">
                                <h2 className="smaller-title">Fiit</h2>
                                <p>Get a 25% discount on your first Fiit subscription payment after a 14-day free trial with your Mastercard and enjoy:</p>
                               </div>
                               <div className="gap-5 mt-8 items-center grid grid-cols-2">
                                 <div className="relative h-full rounded-3xl overflow-hidden">
                                    <img className="object-cover absolute w-full h-full top-0" src="/fiit.webp" alt="Fiit" />
                                    <a target="_blank" className="absolute bottom-6 left-1/2 -translate-x-1/2 mm-button blue" href="">Subscribe Now</a>
                                 </div>
                                 <div className="">
                                    <ul className="flex flex-col gap-5">
                                        {
                                            fiit.map((item,index)=>(
                                                <li key={index} className="bg-white p-5 rounded-xl">
                                                    {item.title}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    
                                 </div>
                               </div>
                            </div>
                            
                            <div>
                               <div className="text-center">
                                <h2 className="smaller-title">Lingokids</h2>
                                <p>Have your child learn through play, and develop skills like creativity, collaboration, critical thinking, and communication. Join the adventure and enjoy: </p>
                               </div>
                               <div className="gap-5 mt-8 items-center flex">
                                  <div className="w-1/3">
                                    <div className="flex justify-center">
                                        <Promo code="MASTERCARDMEA" />
                                    </div>
                                    
                                    <ul className="flex flex-col gap-5">
                                        {
                                            lingokids.map((item,index)=>(
                                                <li key={index} className="bg-white p-5 rounded-xl">
                                                    {item.title}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    
                                 </div>
                                 <div className="w-2/3">
                                    <img src="/lingokids.webp" alt="Fiit" />
                                    
                                 </div>
                                 
                               </div>
                               <p className="text-center mt-5">Visit their <a href="https://lingokids.com/mastercardmea" className="text-[var(--mm-blue)]" target="_blank">website</a> and use promo code at checkout.</p>
                            </div>
                            
                            <div className="flex items-center gap-5">
                                <div className="w-1/3">
                                    <img src="/purchase-protection.webp" alt="Purchase Protection" />
                                </div>
                                <div className="w-2/3 bg-white rounded-3xl p-5">
                                    <h2 className="smaller-title">Purchase Protection</h2>
                                    <p>Shop with confidence, knowing that the purchases you make with your Mastercard are:</p>
                                    <ul className="pl-2 mt-7">
                                        {
                                            purchase_protection.map((item, index) => 
                                                    (
                                                        <li key={index+1} className="flex items-center gap-3 mb-3">
                                                            <span className="bg-[#f7f7f7] w-[30px] h-[30px] grow-0 shrink-0 rounded-full flex items-center justify-center">{index+1}</span> 
                                                            <span>{item.title}</span>
                                                        </li>
                                                    )
                                                    
                                            )
                                        }
                                    </ul>
                                    <p className="mt-8">
                                    In case of damage, you can either get a new item to replace the damaged one or receive compensation for the item’s total value, as per the store receipt. <br />
                                    Simply visit their <a target="_blank" className="text-[var(--mm-blue)]" href="https://mcpeaceofmind.com/">website</a> to file a claim.
                                    </p>
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
