'use client';
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar'
import Promo from './Promo';



const Content = () => {
    const [currentInView, setCurrentInView] = useState(null);
    const travelRef = useRef(null);
    const lifestyleRef = useRef(null);
    const peaceRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  setCurrentInView(entry.target.dataset.name); // Update to the current div in view
                }
              });
            },
            {
                root: null,
                rootMargin: '-85% 0% -15% 0%',
                threshold: 0
            }
        );

       // Observe each ref
       if (travelRef.current) observer.observe(travelRef.current);
       if (lifestyleRef.current) observer.observe(lifestyleRef.current);
       if (peaceRef.current) observer.observe(peaceRef.current);


        return () => {
            // Unobserve when component unmounts
            if (travelRef.current) observer.unobserve(travelRef.current);
            if (lifestyleRef.current) observer.unobserve(lifestyleRef.current);
            if (peaceRef.current) observer.unobserve(peaceRef.current);
        };
    }, []);
    
    const howToUse = [
        {
            title: 'Download <a style="color:#2657d4" href="https://apps.apple.com/lb/app/mastercard-travel-pass/id1493489553" target="_blank">Mastercard Travel Pass App</a>'
        },
        {
            title: 'Register your MyMonty Mastercard card securely'
        },
        {
            title: 'Use the app to locate lounges near you'
        },
        {
            title: 'Confirm complimentary visits eligibility'
        },
        {
            title: 'Present the app QR code to the lounge receptionist'
        },
        {
            title: 'Enjoy your lounge access	'
        }
    ];

    const howToUseCosta = [
        {
            title: 'Download the <strong>Mastercard Travel Pass</strong> App from the <a target="_blank" href="https://apps.apple.com/lb/app/mastercard-travel-pass/id1493489553" style="color:#2657d4">App Store</a> or <a target="_blank" href="https://play.google.com/store/apps/details?id=com.dragonpass.en.mcmea&hl=en_US" style="color:#2657d4">Google Play</a>, and register your Platinum Mastercard'
        },
        {
            title: 'Enter your Dubai Airport location to find the Costa offer.'
        },
        {
            title: 'Redeem one item from the predetermined list, and show the QR code with your boarding pass to Costa staff.'
        }
    ];

  return (
    <div className="container py-10 lg:py-20">
        <div className="flex max-md:flex-col gap-x-5">
            <Sidebar travelRef={travelRef} lifestyleRef={lifestyleRef} peaceRef={peaceRef} divInView={currentInView}/>
            
            <div className="bg-gray-100 rounded-3xl lg:rounded-l-none p-8">
                <div ref={travelRef} data-name="travel" className="content-category">
                    <div className='!pt-0'>
                        <h2 className="smaller-title">World Elite Mastercard® Lounge Program</h2>
                        <p>Enjoy FREE unlimited access with one guest to over 1,200 airport lounges in 450+ cities across 135+ countries through DragonPass, including business amenities, Wi-Fi, and complimentary refreshments.</p>
                        <a href="https://apps.apple.com/lb/app/mastercard-travel-pass/id1493489553" target="_blank" className="mm-button blue mt-4">Download App Now</a>
                        
                        <div className="flex lg:items-center max-lg:flex-col lg:justify-between gap-10">
                            <div className="lg:w-3/5 mt-4">
                                <h3 className="font-bold mb-3 max-lg:mt-10">HOW TO USE:</h3>
                                <ul className="">
                                    {
                                        howToUse.map((item, index) => 
                                            (
                                                <li key={index+1} className="flex gap-3 mb-3 text-lg">
                                                    <span className="bg-transparent">{index+1}</span> 
                                                    <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="relative lg:w-2/5 overflow-hidden">
                                <img alt="2 mobile phones" src='/how-to-use-2.webp' />
                            </div>
                        </div>    
                    </div>       
                    
                    <div className='flex max-lg:flex-col lg:justify-between lg:items-center gap-10'>
                        <div className='lg:w-3/5'>
                            <h2 className="smaller-title text-balance">Cleartrip Flight & Hotel Bookings</h2>
                            <div>
                                <h4 className="font-bold text-4xl text-[#2657D4]">GET 12% OFF</h4>
                                <p>through Cleartrip’s <a className="underline" target="_blank" href="https://www.cleartrip.ae/offers/uae/choose-your-country">website</a> or app from <a className="underline" target="_blank" href="https://apps.apple.com/us/app/cleartrip-flights-hotels-bus/id531324961">App Store</a> or <a className="underline" target="_blank" href="https://play.google.com/store/apps/details?id=com.cleartrip.android&hl=en&gl=US&pli=1">Google Play</a>
                                </p>
                                <div className='bg-black inline-block rounded-xl mt-6'>
                                    <img src="/cleartrip-logo.webp" alt="ClearTrip Logo" />
                                </div>                          
                            </div>
                        </div>
                        <div className='lg:w-2/5 aspect-[5/4] relative w-full overflow-hidden rounded-[40px] flex justify-center items-end p-5'>
                            <img className='absolute w-full h-full object-cover top-0 left-0' src='/cleartrip2.webp' />
                            <Promo code="MCWORLDELITE"/>
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col gap-10">
                        <div className="lg:w-3/5">
                            <h2 className="smaller-title">Costa Coffee</h2>
                            <p>Get a free food or drink item at Costa in Dubai Airports!</p>
                            <h3 className="mt-5 font-bold mb-3 max-md:mt-10">HOW TO USE:</h3>
                            <ul className="">
                                {
                                    howToUseCosta.map((item, index) => 
                                        (
                                            <li key={index+1} className="flex gap-3 mb-3 text-lg">
                                                <span className="flex">{index+1}</span> 
                                                <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                        <div className="lg:w-2/5 aspect-[5/4] rounded-[40px] relative overflow-hidden">
                            <img src='/costa.webp' className="absolute object-cover w-full h-full" alt="Costa Coffee"/>
                        </div>                                        
                    </div> 

                    <div className="flex flex-col gap-10">
                        <div className="text-center">
                            <h2 className="smaller-title">Global Hotel Alliance Titanium Membership</h2>
                            <p>Complimentary Titanium membership in the Global Hotel Alliance DISCOVERY program, offering VIP perks at 500+ hotels worldwide, including guaranteed room availability, double upgrades, early check-in, late check-out, and Discovery Dollar rewards.</p>
                            
                        </div>
                        <div className="">
                            <img src="/gha-discovery.webp" alt="Global Hotel Alliance Titanium Membership" />
                        </div>
                        <div className="text-center">
                        <p>To activate, call World Elite Mastercard® Concierge to enroll, then create an account 
                        at <span className="blue-text font-bold">GHA DISCOVERY</span> or download the app.</p>
                        
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col lg:justify-between gap-10 lg:items-center">
                        
                        <div className="lg:w-3/5">
                            <h2 className="smaller-title">IHG Hotels And Resorts</h2>
                            <p>When booking through their <a target="_blank" className="text-[var(--mm-blue)]" href="https://www.ihg.com/hotels/gb/en/reservation?fromRedirect=true&qSrt=sAV&setPMCookies=true&dp=true&gclid=CjwKCAjwpbi4BhByEiwAMC8JnSKGU1pK2JvmPQGdy6dYXU-Avkms3WDYhqMkwPW7uCt-9_Vm0x6O3RoCHf0QAvD_BwE&cm_mmc=PDSEA-_-G_F-IMEA_FS-MEA_H-IMEA_HS-MEA_6C_BSF_EXM_CORE-IHG_EN&srb_u=1">website</a>, you get a <strong>15% discount</strong> and exclusive offers on IHG Hotels & Resorts across Europe, Maldives, India, the Middle East & Africa. </p>
                        </div>
                        <div className="lg:w-2/5">
                            <img src="/hotel-resorts2.webp" alt="Hotel Bookings" />
                        </div>
                        
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="text-center">
                            <h2 className="smaller-title">Booking.com</h2>
                            <p>Get <strong>10% money back</strong> on your next stay through <a href="https://booking.com" target="_blank" className="text-[--mm-blue]">Booking.com</a></p>
                            
                        </div>
                        <div className="lg:aspect-[16/5] max-lg:aspect-[16/12] relative flex items-end justify-end">
                            <img className="absolute rounded-3xl object-cover w-full h-full top-0" src="/booking-com-2.webp" alt="booking" />
                            <div className='absolute right-9 -top-6'>
                                <svg width="98" height="96" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4972_8653)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M98 18.4329C98 8.26025 89.7508 0.00135803 79.5947 0.00135803H18.4052C8.2492 0.00135803 0 8.26025 0 18.4329V77.569C0 87.7389 8.2492 96.0006 18.4053 96.0006H79.5947C89.7508 96.0006 98 87.7389 98 77.569L98 18.4329Z" fill="#0C3B7C"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.00390625 59.6406H48.949V96.0003H0.00394212L0.00390625 59.6406Z" fill="#0C3B7C"/>
                                <path d="M44.5396 63.544L36.6464 63.5361V54.0827C36.6464 52.0629 37.4287 51.0116 39.1543 50.7715H44.5396C48.3801 50.7715 50.8644 53.1968 50.8644 57.1223C50.8644 61.1541 48.443 63.5401 44.5396 63.544ZM36.6464 38.0462V35.5578C36.6464 33.3805 37.5662 32.345 39.5828 32.2111H43.6237C47.0868 32.2111 49.1624 34.2861 49.1624 37.7627C49.1624 40.4086 47.7394 43.4993 43.7495 43.4993H36.6464V38.0462ZM54.6184 47.4799L53.1915 46.6767L54.4376 45.6097C55.8881 44.3616 58.3174 41.5543 58.3174 36.7114C58.3174 29.2936 52.5743 24.5098 43.6866 24.5098H33.5449V24.5059H32.3893C29.7556 24.6043 27.6447 26.7501 27.6172 29.4039V71.4934H43.8871C53.7654 71.4934 60.1413 66.1072 60.1413 57.7641C60.1413 53.2716 58.0815 49.4328 54.6184 47.4799Z" fill="white"/>
                                <path d="M64.3789 65.6792C64.3789 62.4639 66.9679 59.8627 70.1577 59.8627C73.3556 59.8627 75.9567 62.4639 75.9567 65.6792C75.9567 68.8904 73.3556 71.4957 70.1577 71.4957C66.9679 71.4957 64.3789 68.8904 64.3789 65.6792Z" fill="#00BAFC"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_4972_8653">
                                <rect width="98" height="96" fill="white" transform="translate(0 0.000732422)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>
                            
                            <div className="z-1 relative pr-12 pb-4">
                                <Promo code="MCBKG"/>
                            </div>
                            
                        </div>
                        <div className="text-center">
                        <p>Use your World Elite Mastercard at checkout, and your cashback will be credited to your Booking.com wallet within 70 days after your stay.</p>
                        
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="text-center">
                            <h2 className="smaller-title">AVIS Car Rental</h2>
                            <p>Enjoy <strong>35% off</strong> your next car rental and a complimentary upgrade with Avis through their <a target="_blank" className="text-[var(--mm-blue)]" href="https://avisworld.com/">website</a>.</p>
                        </div>
                        <div>
                            <img src="/avis.webp" alt="booking" />
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col lg:justify-between gap-10">
                        <div className='lg:w-3/5'>
                            <h2 className="smaller-title">Hertz</h2>
                            <p className='lg:w-2/3'>Book with your World Elite Mastercard® to unlock Hertz Gold Plus Rewards® President's Circle membership. Skip the rental queue, 
                            get guaranteed car upgrades, and faster returns at over 7,700 locations worldwide. Just sign up at <a target="_blank" className="text-[var(--mm-blue)]" href="https://hertz.com/worldelite">hertz.com/worldelite</a> or log in and add CDP 1795034 to your profile.</p>
                        </div>

                        <div className="lg:w-2/5 relative aspect-video rounded-[40px] overflow-hidden">
                            <img className="absolute w-full h-full object-cover top-0" src="/hertz.webp" alt="Hertz" />
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col lg:justify-between gap-10">
                        <div className='lg:w-3/5'>
                            <h2 className="smaller-title">Budget Truck & Car Rental</h2>
                            <p className='lg:w-2/3'>Get <strong>up to 10% off</strong> on your next car or truck rental. Simply visit <a className="text-[var(--mm-blue)]" target="_blank" href="https://one.budgetinternational.com/en_GB/Budget-MastercardMEA/">Budget’s website</a> and reserve your vehicle using your eligible Mastercard®.</p>
                            
                        </div>
                        <div className='lg:w-2/5'>
                            <img src="/budget-truck.webp" alt="RentalCars" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="text-center">
                            <h2 className="smaller-title">Global Blue VIP Services</h2>
                            <p>Present your Mastercard® at the entrance & get <strong>Complimentary access</strong> to <strong>Global Blue City VIP Lounges</strong> for VAT refund assistance & to <strong>Global Blue Airport VIP Fast Lanes</strong>. Register at <a target="_blank" className="text-[var(--mm-blue)]" href="https://registration.globalblue.com/gb/splash?flow=ncpt&sourceCode=OTPNS001MEAXXXXXX001">Global Blue's website</a> to set your eligible Mastercard® as the preferred refund target.</p>
                        </div>
                        
                        <div>
                            <img src="/global-blue-vip-services.webp" alt="Global Blue VIP Services" />
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col lg:justify-between gap-10">
                        <div className='lg:w-3/5'>
                            <h2 className="smaller-title">Stay Connected Globally with Flexiroam</h2>
                            <p className='lg:w-2/3'>Get <strong>1 GB of free</strong> global roaming data three times a year with your Mastercard®, plus <strong>15% off</strong> future Flexiroam plans.
                            To redeem, download the <a className="text-[var(--mm-blue)]" target="_blank" href="https://play.google.com/store/apps/details?id=com.flexiroamx&pcampaignid=web_share&pli=1">Flexiroam App</a>, sign up, and use your card number to check eligibility.</p>
                            
                        </div>
                        <div className='lg:w-2/5'>
                            <img src="/flexiroam.webp" alt="Flexiroam" />
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col lg:justify-between gap-10">
                        <div className='lg:w-3/5'>
                            <h2 className="smaller-title">Rentalcars.com</h2>
                            <p className='lg:w-2/3'>Enjoy an exclusive <strong>10% discount</strong> when you book with your Mastercard on <a className="text-[var(--mm-blue)]" target="_blank" href="https://rentalcars.com">Rentalcars.com</a>.</p>
                            
                        </div>
                        <div className='lg:w-2/5'>
                            <img src="/rental-cars.webp" alt="RentalCars" />
                        </div>
                    </div>

                    <div className='flex max-lg:flex-col gap-10 lg:justify-between'> 
                        <div className="lg:w-3/5">
                            <div className='lg:w-2/3'>
                                <h2 className="smaller-title">Priceless Cities</h2>
                                    <p>Enjoy exclusive access to dining, travel, 
                                    and entertainment experiences in over 40 cities and countries through <a href="https://priceless.com" target="_blank" className="text-[var(--mm-blue)]">Priceless.com.</a>
                                    </p>
                                <img className='mt-3' src='/mastercard-logo.webp' />
                            </div>
                        </div>
                        <div className='lg:w-2/5 aspect-video relative overflow-hidden rounded-[40px]'> 
                            <img className='absolute top-0 left-0 w-full h-full object-cover' src="/priceless-cities2.webp" />    
                        </div>            
                    </div>

                    <div>
                     
                        <div className="flex max-lg:flex-col gap-10">
                            <div className="lg:w-3/5">
                                    <h2 className="smaller-title">Costa Coffee</h2>
                                    <p>Get a free food or drink item at Costa in Dubai Airports!</p>
                                    <h3 className="mt-5 font-bold mb-3 max-md:mt-10">HOW TO USE:</h3>
                                    <ul className="">
                                        {
                                            howToUseCosta.map((item, index) => 
                                                    (
                                                        <li key={index+1} className="flex gap-3 mb-3 text-lg">
                                                            <span className="flex">{index+1}</span> 
                                                            <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                                        </li>
                                                    )
                                                    
                                            )
                                        }
                                    </ul>
                                        
                                    <div className="pt-5">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-bold">
                                            Just a heads up 
                                            </h3>
                                            <span>
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 9.5V6M11 13H11.01M8.9 18.2L10.36 20.1467C10.5771 20.4362 10.6857 20.5809 10.8188 20.6327C10.9353 20.678 11.0647 20.678 11.1812 20.6327C11.3143 20.5809 11.4229 20.4362 11.64 20.1467L13.1 18.2C13.3931 17.8091 13.5397 17.6137 13.7185 17.4645C13.9569 17.2656 14.2383 17.1248 14.5405 17.0535C14.7671 17 15.0114 17 15.5 17C16.8978 17 17.5967 17 18.1481 16.7716C18.8831 16.4672 19.4672 15.8831 19.7716 15.1481C20 14.5967 20 13.8978 20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H6.8C5.11984 2 4.27976 2 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2 4.27976 2 5.11984 2 6.8V12.5C2 13.8978 2 14.5967 2.22836 15.1481C2.53284 15.8831 3.11687 16.4672 3.85195 16.7716C4.40326 17 5.10218 17 6.5 17C6.98858 17 7.23287 17 7.45951 17.0535C7.76169 17.1248 8.04312 17.2656 8.2815 17.4645C8.46028 17.6137 8.60685 17.8091 8.9 18.2Z" stroke="black" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                            </span>
                                        </div> 
                                        <p>After redeeming your Costa offer, lounge access will be temporarily unavailable for 2 hours and vice versa.</p>
                                    </div>
                            </div>
                            <div className="lg:w-2/5 aspect-[5/4] rounded-[40px] relative overflow-hidden">
                                <img src='/costa.webp' className="absolute object-cover w-full h-full" alt="Costa Coffee"/>
                            </div>                                        
                        </div>    
                    </div>
                </div>     

                <div ref={peaceRef} data-name="peace" className="content-category">
                    <div className="flex max-lg:flex-col gap-10 lg:justify-between">
                        <div className="lg:w-2/5">
                            <h2 className="smaller-title">Medical Insurance</h2>
                            <p>Travel with peace of mind! your Mastercard® covers you automatically.<br />Get up to USD 500,000 in medical, accident, and emergency evacuation insurance.<br />Visit <a target="_blank" className="text-[var(--mm-blue)]" href="https://mcpeaceofmind.com">mcpeaceofmind.com</a> to learn more and travel confidently!</p>
                        </div>
                        <div className="lg:w-2/5">
                            <img src="/medical-insurance.webp" alt="Medical Insurance" />
                        </div>
                        
                    </div>
                    <div className="flex max-lg:flex-col gap-10 lg:justify-between">
                        <div className="lg:w-2/5">
                            <h2 className="smaller-title">Travel Inconvenience Insurance</h2>
                            <p>Travel disruptions? World Elite Mastercard® has you covered. Get up to USD 7,500 for trip cancellations, baggage delays, and more.<br />Visit <a target="_blank" className="text-[var(--mm-blue)]" href="https://mcpeaceofmind.com">mcpeaceofmind.com</a> to file a claim</p>
                        </div>
                        <div className="lg:w-2/5">
                            <img src="/travel-insurance-inconvenience.webp" alt="Travel Inconvenience Insurance" />
                        </div>
                        
                    </div>

                    <div className="flex max-lg:flex-col gap-10 lg:justify-between">
                        <div className="lg:w-2/5">
                            <h2 className="smaller-title">Rental Collision and Loss Damage Waiver</h2>
                            <p>Get up to USD 50,000 for physical damage, theft, and more.<br />Visit <a target="_blank" className="text-[var(--mm-blue)]" href="https://mcpeaceofmind.com/worldelite">mcpeaceofmind.com/worldelite</a> or call Concierge to file a claim.</p>
                        </div>
                        <div className="lg:w-2/5">
                            <img src="/rental-collision-and-loss-damage-waiver.webp" alt="Rental Collision and Loss Damage Waiver" />
                        </div>
                        
                    </div>

                    <div className="flex max-lg:flex-col gap-10 lg:justify-between">
                        <div className="lg:w-2/5">
                            <h2 className="smaller-title">Travel Insurance Confirmation Letter</h2>
                            <p>Get your official Travel Insurance Confirmation Letter with World Elite Mastercard®.<br />Ensure visa requirements are met with coverage for parents and children.<br />Visit <a target="_blank" className="text-[var(--mm-blue)]" href="https://mcpeaceofmind.com/worldelite">asd</a> to generate your letter effortlessly!</p>
                        </div>
                        <div className="lg:w-2/5">
                            <img src="/travel-insurance-confirmation-letter.webp" alt="Travel Insurance Confirmation Letter" />
                        </div>
                        
                    </div>
                </div>

                <div ref={lifestyleRef} data-name="lifestyle" className="content-category">
                    <div className="flex max-lg:flex-col gap-10 lg:justify-between">
                        <div className="lg:w-2/5">
                            <h2 className="smaller-title">Mastercard Concierge</h2>
                            <p>Access 24/7 VIP service with your World Elite Mastercard®. From booking travel to finding last-minute reservations, help is always a call or a message away.<br /><br />Chat anytime on WhatsApp or call your dedicated concierge number.<br /><br />For Arabic: +44 7418 368707<br />For English: +44 7418 368708</p>
                        </div>
                        <div className="lg:w-2/5 rounded-[40px] relative overflow-hidden">
                            <img src="/mastercard-concierge.webp" alt="Mastercard Concierge" />
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col gap-10 lg:justify-between">
                        <div className="lg:w-2/5">
                            <h2 className="smaller-title">European Shopping Collection</h2>
                            <p>Up to <strong>15% off</strong> shopping packages, transfers, and more at Europe’s top designer outlets.<br />Get an extra 10% off with your VIP Card when you pay with your eligible Mastercard®. Unlock your benefits <a href="https://thebicestervillageshoppingcollection.com/mastercard-mea" target="_blank" className="text-[var(--mm-blue)]">here</a>.</p>
                        </div>
                        <div className="lg:w-2/5 rounded-[40px] relative overflow-hidden">
                            <img src="/european-shopping-collection.webp" alt="European Shopping Collection" />
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col gap-10 items-center lg:justify-between">
                        <div className="lg:w-3/5">
                            <h2 className="smaller-title">MyUS Premium Membership</h2>
                            <p>MyUS Premium Membership Shop from top U.S. brands and ship worldwide with MyUS.<br />Get 2 years of free Premium Membership, <strong>up to 30% off</strong> shipping, and more.<br />Simply use your Mastercard at checkout: <a className="text-[var(--mm-blue)]" target="_blank" class="break-all" href="https://www.myus.com/welcome/mastercardpremium/">myus.com/welcome/Mastercardpremium</a>.</p>
                        </div>
                        <div className="lg:w-2/5">
                            <img src="/myus3.webp" alt="MyUS" />
                        </div>
                    </div>

                    <div className='flex max-lg:flex-col gap-10 lg:justify-between'>
                        <div className='lg:w-3/5'>
                            <h2 className="smaller-title">Mastercard® Gamer Pass with Go Gamers</h2>
                            <p>Mastercard® Gamer Pass with Go Gamers get <strong>50% off</strong> Premium Membership.<br />Join global tournaments, win prizes, and access expert coaching to sharpen your skills.<br />Start now at <a target="_blank" className="text-[var(--mm-blue)]" href="https://gogamers.tech/">www.gogamers.tech</a> and game like a pro with Mastercard.</p>
                        </div>
                        
                        <div className="lg:w-2/5">
                            <img src="/go-gamers3.webp" alt="Go Gamers image" />
                        </div>
                        
                    </div>

                    <div className='flex max-lg:flex-col gap-10 lg:justify-between'>
                        <div className='lg:w-3/5'>
                            <h2 className="smaller-title">Vaidam</h2>
                            <p>Get world-class medical care with Vaidam and your Mastercard®.<br />Enjoy up to 10% off service fees, free second opinions, and concierge support in select countries.<br />Just visit <a target="_blank" className="text-[var(--mm-blue)]" href="https://www.vaidam.com/mastercard-offers">www.vaidam.com/mastercard-offers</a> to redeem your benefits.</p>
                        </div>
                        
                        <div className="lg:w-2/5">
                            <img src="/vaidam.webp" alt="Vaidam" />
                        </div>
                        
                    </div>

                    <div className='flex max-lg:flex-col gap-10 lg:justify-between'>
                        <div className="lg:w-2/5">
                            <div>
                                <h2 className="smaller-title">Lingokids</h2>
                                <p>1 week of complimentary Lingokids Plus access, 50% off all future monthly subscriptions for life & full access to premium content, even offline.<br /><br />Visit the <a target="_blank" className="text-[var(--mm-blue)]" href="https://lingokids.com/mastercardmea">Lingokids Mastercard page</a>, enter promo code, and click Redeem.</p>
                            </div>
                        </div>
                        
                        <div className='lg:w-2/5 relative rounded-[40px] overflow-hidden'>
                            <img className="w-full h-full absolute object-cover" src="/lingo3.webp" alt="Lingo Kids" />
                            <div className="px-5 mt-4 flex items-end justify-center pb-10 h-full">
                                <Promo code="MASTERCARD50" />
                            </div>
                        </div>
                    </div>
                    
                    <div className='!pb-0 !border-b-0 flex max-lg:flex-col gap-10 lg:justify-between'>
                        <div className='lg:w-2/5'>
                            <h2 className="smaller-title">Fiit</h2>
                            <p>Crush your fitness goals with Fiit. <br />Get a 14-day free trial and <strong>25% off</strong> your first payment. Visit <a target="_blank" className="text-[var(--mm-blue)]" href="https://getfiit.tv/mastercard">getfiit.tv/mastercard</a>, choose your plan & pay with your Mastercard to unlock your benefits.</p>
                        </div>
                        
                        <div className="lg:w-2/5 relative aspect-[5/4] rounded-[40px] overflow-hidden">
                            <img src="/fiit2.webp" alt="Go Gamers image" className='absolute w-full h-full object-cover left-0 top-0' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Content;
