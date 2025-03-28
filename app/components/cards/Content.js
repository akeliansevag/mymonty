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
            rootMargin: '-15% 0% -15% 0%',
            //threshold: 0.5, 
           } // Adjust threshold for desired visibility
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
            title: 'Use the app to locate lounges near you.'
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
            title: 'Free account setup (a $20 value)'
        },
        {
            title: 'Free Premium Membership for 2 years (a $120 value)'
        },
        {
            title: '30% off shipping for the remainder of the 2-year membership'
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
    ];

    const purchase_protection = [
        {
            title: 'Protected in case of theft or accidental damage for up to 180 days from the date of purchase'
        },
        {
            title: 'Covered for up to USD 2,000 per claim and a maximum of USD 5,000 over 12 months'
        }
    ]

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

    const howToRedeem = [
        {
            title: 'Visit the <a target="_blank" href="https://lingokids.com/mastercardmea" style="color:#2657d4">Lingokids Mastercard page</a>, enter the promo code, and click <strong>Redeem</strong>.'
        },
        {
            title: 'Enter your email and complete payment.'
        },
        {
            title: 'Download the Lingokids app, log in with your email, and select <strong>I have an account</strong>.'
        }
        
    ];
  return (
    <div className="container py-10 lg:py-20">
        <div className="flex max-md:flex-col gap-x-5">
            <Sidebar travelRef={travelRef} lifestyleRef={lifestyleRef} peaceRef={peaceRef} divInView={currentInView}/>
            
            <div className="">
                <div ref={travelRef} data-name="travel" className="flex flex-col max-lg:gap-14 gap-28">
                    <div className="bg-white rounded-xl p-8">
                        <h2 className="smaller-title">Middle East & Levant Platinum Mastercard Lounge Program</h2>
                        <p>Enjoy FREE unlimited access to over 25 regional and international DragonPass lounges, business facilities, complimentary refreshments, and snacks mentioned in the MasterCard Travel Pass app.</p>
                        <a href="https://apps.apple.com/lb/app/mastercard-travel-pass/id1493489553" target="_blank" className="mm-button blue mt-4">Download App Now</a>
                        
                        <div className="flex lg:items-center max-lg:flex-col lg:-mt-10">
                            <div className="lg:w-5/6">
                                <h3 className="font-bold mb-3 max-lg:mt-10">HOW TO USE:</h3>
                                <ul className="pl-2">
                                    {
                                        howToUse.map((item, index) => 
                                                (
                                                    <li key={index+1} className="flex items-center gap-3 mb-3">
                                                        <span className="bg-[#f7f7f7] shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center">{index+1}</span> 
                                                        <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
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
                        <h2 className="smaller-title text-center">Cleartrip Flight & Hotel Bookings</h2>
                        <div className="min-h-[30vh] relative rounded-3xl p-10 overflow-hidden">
                            <img className="z-0 object-cover w-full h-full absolute top-0 left-0" src="/cleartrip.webp" />
                            <div className="flex max-lg:flex-col max-lg:gap-8 lg:justify-between relative z-1">
                                <div className="self-center lg:self-end">
                                    <img src="/cleartrip-logo.webp" alt="ClearTrip Logo" />
                                </div>
                                <div className='text-white text-center'>
                                    <h4 className="font-bold text-4xl">GET 8% OFF</h4>
                                    <p>through Cleartrip’s <a className="underline" target="_blank" href="https://www.cleartrip.ae/offers/uae/choose-your-country">website</a>
                                    </p>
                                    <p>or app from <a className="underline" target="_blank" href="https://apps.apple.com/us/app/cleartrip-flights-hotels-bus/id531324961">App Store</a></p>
                                    <p>or <a className="underline" target="_blank" href="https://play.google.com/store/apps/details?id=com.cleartrip.android&hl=en&gl=US&pli=1">Google Play</a></p>
                                    <Promo code="MCPLATINUM"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex max-lg:flex-col max-lg:gap-10 gap-20 lg:items-center">
                        <div className="lg:w-1/2">
                            <h2 className="smaller-title">Mastercard Hotel Bookings</h2>
                            <p>Enjoy <strong>up to 30% off</strong> at leading hotel chains worldwide and access unparalleled hotel benefits through their <a href="https://hotelbookings.priceless.com/" target="_blank" className="text-[var(--mm-blue)]">website</a> using the 6-digit Mastercard BIN.</p>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="/hotel-bookings.webp" alt="Hotel Bookings" />
                        </div>
                    </div>

                    <div className="flex max-lg:flex-col-reverse max-lg:gap-10 gap-20 lg:items-center">
                        <div className="lg:w-1/2">
                            <img src="/hotels-resorts.webp" alt="Hotel Bookings" />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="smaller-title">IHG Hotels And Resorts</h2>
                            <p>When booking through their <a target="_blank" className="text-[var(--mm-blue)]" href="https://www.ihg.com/hotels/gb/en/reservation?fromRedirect=true&qSrt=sAV&setPMCookies=true&dp=true&gclid=CjwKCAjwpbi4BhByEiwAMC8JnSKGU1pK2JvmPQGdy6dYXU-Avkms3WDYhqMkwPW7uCt-9_Vm0x6O3RoCHf0QAvD_BwE&cm_mmc=PDSEA-_-G_F-IMEA_FS-MEA_H-IMEA_HS-MEA_6C_BSF_EXM_CORE-IHG_EN&srb_u=1">website</a>, you get a <strong>15% discount</strong> and exclusive offers on IHG Hotels & Resorts across Europe, Maldives, India, the Middle East & Africa. </p>
                        </div>
                        
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="text-center">
                            <h2 className="smaller-title">Booking.com</h2>
                            <p>Get <strong>10% money back</strong> on your next stay through <a href="https://booking.com" target="_blank" className="text-[--mm-blue]">Booking.com</a>!</p>
                            <p className="md:px-10">Use your Platinum Mastercard at checkout, and your cashback will be credited to your Booking.com wallet within 70 days after your stay.</p>
                        </div>
                        <div className="overflow-hidden aspect-[16/7] relative flex justify-end">
                            <img className="absolute object-cover w-full h-full top-0" src="/booking-com.webp" alt="booking" />
                            <div className="z-1 relative pr-10 lg:pt-10">
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

                    <div className="flex max-lg:flex-col gap-10">
                        <div className="bg-white rounded-3xl p-6 lg:w-1/2">
                            <h2 className="smaller-title">Rentalcars.com</h2>
                            <p>Enjoy 10% off car rentals when booking through <a target="_blank" className="text-[var(--mm-blue)]" href="https://rentalcars.com">Rentalcars.com</a>.</p>
                            <div className="mt-8 relative aspect-[361/187] rounded-[40px] overflow-hidden">
                                <img className="absolute w-full h-full object-cover top-0" src="/rental-cars.webp" alt="RentalCars" />
                            </div>
                            
                        </div>
                        <div className="bg-white rounded-3xl p-6 lg:w-1/2">
                            <h2 className="smaller-title">Budget Truck & Car Rental</h2>
                            <p>Get <strong>up to 10%</strong> off on your next car or truck rental with Budget through their <a className="text-[var(--mm-blue)]" target="_blank" href="https://one.budgetinternational.com/en_GB/Budget-MastercardMEA/">website</a>. </p>
                            <img className="mt-8" src="/budget-truck.webp" alt="RentalCars" />
                        </div>
                    </div>

                    <div>
                        <div className="lg:aspect-[145/63] flex max-lg:flex-col lg:items-center relative rounded-3xl lg:p-10 lg:overflow-hidden">
                            <img className="max-lg:pb-3 z-0 lg:object-cover w-full h-full lg:absolute top-0 left-0" src="/priceless-cities.webp" />
                            <div className="relative z-1">
                                <div className='text-white max-lg:text-black lg:w-1/2'>
                                    <h4 className="font-bold text-4xl">Priceless Cities</h4>
                                    <p>Enjoy exclusive access to dining, travel, 
                                    and entertainment experiences in over 40 cities and countries through <a href="https://priceless.com" target="_blank" className="underline">Priceless.com.</a></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div>
                        <div className="text-center">
                            <h2 className="smaller-title">Costa Coffee</h2>
                            <p>Get a free food or drink item at Costa in Dubai Airports!</p>
                        </div>
                        
                        <div className="flex max-md:flex-col gap-8 mt-10">
                            <div className="bg-white w-full md:w-1/3 rounded-xl relative overflow-hidden">
                               <img src='/costa.webp' className="md:absolute object-cover w-full h-full" alt="Costa Coffee"/>
                            </div>
                            <div className="bg-white rounded-xl p-8 w-full md:w-2/3">
                                <h3 className="font-bold mb-3 max-md:mt-10">HOW TO USE:</h3>
                                <ul className="pl-2">
                                    {
                                        howToUseCosta.map((item, index) => 
                                                (
                                                    <li key={index+1} className="flex gap-3 mb-3">
                                                        <span className="bg-[#f7f7f7] mt-1 shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center">{index+1}</span> 
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
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 9.5V6M11 13H11.01M8.9 18.2L10.36 20.1467C10.5771 20.4362 10.6857 20.5809 10.8188 20.6327C10.9353 20.678 11.0647 20.678 11.1812 20.6327C11.3143 20.5809 11.4229 20.4362 11.64 20.1467L13.1 18.2C13.3931 17.8091 13.5397 17.6137 13.7185 17.4645C13.9569 17.2656 14.2383 17.1248 14.5405 17.0535C14.7671 17 15.0114 17 15.5 17C16.8978 17 17.5967 17 18.1481 16.7716C18.8831 16.4672 19.4672 15.8831 19.7716 15.1481C20 14.5967 20 13.8978 20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H6.8C5.11984 2 4.27976 2 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2 4.27976 2 5.11984 2 6.8V12.5C2 13.8978 2 14.5967 2.22836 15.1481C2.53284 15.8831 3.11687 16.4672 3.85195 16.7716C4.40326 17 5.10218 17 6.5 17C6.98858 17 7.23287 17 7.45951 17.0535C7.76169 17.1248 8.04312 17.2656 8.2815 17.4645C8.46028 17.6137 8.60685 17.8091 8.9 18.2Z" stroke="black" stroke-width="2.3" stroke-linecap="round" strokeLinejoin="round"/></svg>
                                        </span>
                                    </div> 
                                    <p>After redeeming your Costa offer, lounge access will be temporarily unavailable for 2 hours and vice versa.</p>
                                </div>
                            </div>
                           
                        </div>    
                    </div>
                    
                    <div className="w-full h-[1px] bg-[#dfdfdf] max-lg:mb-14 mb-28"></div>
                </div>

                <div ref={peaceRef} data-name="peace" className="flex flex-col max-lg:gap-14 gap-28">
                    <div className="flex items-center max-lg:flex-col-reverse gap-5">
                        <div className="lg:w-1/3">
                            <img src="/purchase-protection.webp" alt="Purchase Protection" />
                        </div>
                        <div className="lg:w-2/3 bg-white rounded-3xl p-5">
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
                    <div className="w-full h-[1px] bg-[#dfdfdf] max-lg:mb-14 mb-28"></div>
                </div>
                
                <div ref={lifestyleRef} data-name="lifestyle" className="flex flex-col max-lg:gap-14 gap-28">
                    <div className="flex max-lg:flex-col gap-8">
                        <div className="lg:w-2/3 bg-white rounded-3xl p-8">
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
                        <div className="bg-white lg:w-1/3 rounded-3xl relative overflow-hidden">
                            <img src="/bicester.webp" alt="Bicester" className="absolute h-full w-full object-cover"/>
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-5">
                        <div className="text-center">
                            <h2 className="smaller-title">Farfetch</h2>
                            <p>Enjoy <strong>10% off</strong> incredible fashion at Farfetch when spending $300 or above with promo code: MCFF.</p>
                            <p>You can also download the app from the <a className="blue-text" target="_blank" href="https://apps.apple.com/us/app/farfetch-shop-luxury-fashion/id906698760">App Store</a> or <a className="blue-text" target="_blank" href="https://play.google.com/store/search?q=farfetch&c=apps">Google Play</a>.</p>
                        </div>
                        <div className="lg:aspect-[87/32] lg:overflow-hidden relative lg:flex justify-end">
                            <img className="lg:absolute object-cover w-full top-0" src="/farfetch.webp" alt="booking" />
                            <div className="z-1 relative lg:pr-10 max-lg:flex max-lg:justify-center lg:pt-10">
                                <Promo code="MCFF"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <p>
                                Check out the <a target="_blank" className="text-[--mm-blue]" href="https://www.farfetch.com/lb/mastercard/privileges/evergreen/terms-and-conditions.aspx?clickref=1011lzRV4NqX&utm_source=mastercard_privileges&utm_medium=partnerships&utm_campaign=PHPAR&pid=performancehorizon_int&c=PHPAR&clickid=1011lzRV4NqX&af_siteid=mastercard_privileges&af_cost_model=CPA&af_channel=partnerships&is_retargeting=true">Terms & Conditions</a> for clarification on excluded brands & items.
                            </p>
                        </div>
                    </div> */}

                    <div className="flex max-lg:flex-col gap-10 items-center">
                        <div className="lg:w-2/3">
                            <h2 className="smaller-title">MyUS Premium Membership</h2>
                            <p>Shop at over 100,000 U.S. retailers, including Apple, Amazon, and Ralph Lauren, and get fast, reliable, affordable international shipping with MyUS, and enjoy:</p>
                            <div className="grid lg:grid-cols-2 gap-6 mt-5 mb-5">
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
                        <div className="lg:w-1/3">
                                <img src="/myus.webp" alt="MyUS" />
                        </div>
                    </div>

                    <div className="text-center bg-white rounded-3xl p-8">
                        <h2 className="smaller-title">Mastercard Gamer Pass With Go Gamers</h2>
                        <p>Get your Mastercard Gamer Pass to participate in one of the biggest online gaming communities consisting of online coaching sessions & tournaments for your favorite games & win prizes:</p>
                        <div className="grid lg:grid-cols-3 gap-5 mt-5 mb-5">
                            {
                                go_gamers.map((item, index)=>(
                                    <div key={index} className="bg-[#f7f7f7] rounded-xl p-5 flex items-center">
                                        {item.title}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mb-7">
                            <img src="/go-gamers.webp" alt="Go Gamers image" />
                        </div>
                        <p>
                            Sign up or log in to <a target="_blank" className="text-[var(--mm-blue)]" href="https://gogamers.tech/">Go Gamers Gaming Community</a> and use your Mastercard to purchase “Mastercard Premium Membership” to get started.
                        </p>
                    </div>

                    <div className="flex max-lg:flex-col gap-10">
                        <div className="lg:w-1/3">
                                <img src="/medical-tourism-concierge.webp" alt="MyUS" />
                        </div>
                        <div className="lg:w-2/3">
                            <h2 className="smaller-title">Medical Tourism Concierge</h2>
                            <p>Get treatments with the best medical experts, hospitals, and clinics in India, Turkey, UAE, Germany, and Thailand. With this service, you can get:</p>
                            <div className="grid lg:grid-cols-2 gap-3 mt-5 mb-5">
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
                        <div className="gap-5 mt-8 items-center grid lg:grid-cols-2">
                            <div className="relative h-full rounded-3xl overflow-hidden">
                            <img className="lg:object-cover lg:absolute w-full h-full top-0" src="/fiit.webp" alt="Fiit" />
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
                        <div className="bg-white rounded-xl p-8">
                            <div className="flex max-md:flex-col gap-32 max-md:gap-7">
                                <div className="md:w-1/2">
                                    <h2 className="smaller-title">Lingokids</h2>
                                    <p>Let your child learn through play and build skills like creativity, collaboration, critical thinking, and communication. Join the adventure and enjoy:</p>
                                    <div className="flex flex-col gap-5 mt-5">
                                        <div className="bg-[#f7f7f7] p-4 rounded-xl text-lg">
                                            50% off on all future monthly subscriptions 
                                            for new and existing users
                                        </div>

                                        <div className="bg-[#f7f7f7] p-4 rounded-xl text-lg">
                                            1 week of complimentary Lingokids Plus membership
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="font-bold mb-3">HOW TO REDEEM:</h3>
                                    <ul className="pl-2">
                                        {
                                            howToRedeem.map((item, index) => 
                                                    (
                                                        <li key={index+1} className="flex gap-3 mb-3">
                                                            <span className="bg-[#f7f7f7] mt-1 shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center">{index+1}</span> 
                                                            <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                                        </li>
                                                    )
                                                    
                                            )
                                        }
                                    </ul>
                                    <div className="px-5 mt-4">
                                        <Promo code="MASTERCARD50" black={true} full={true}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-5">
                                <img className="w-full" src="/lingo.webp" alt="Lingo Kids" />
                            </div>
                        </div>
                       
                    </div>

                   
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Content
