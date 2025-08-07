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
            title: 'Visit the <a target="_blank" href="https://lingokids.com/mastercardmea" style="color:#2657d4">Lingokids Mastercard page</a>, enter the promo code MASTERCARD50, and click <strong>Redeem</strong>.'
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
                <Sidebar travelRef={travelRef} lifestyleRef={lifestyleRef} peaceRef={peaceRef} divInView={currentInView} />

                <div className="bg-gray-100 rounded-3xl lg:rounded-l-none p-8">
                    <div ref={travelRef} data-name="travel" className="content-category">
                        <div className='!pt-0'>
                            <h2 className="smaller-title">Middle East & Levant Platinum Mastercard Lounge Program</h2>
                            <p>Enjoy FREE access to over 25 regional and international DragonPass lounges, business facilities, complimentary refreshments, and snacks mentioned in the MasterCard Travel Pass app.</p>


                            <a href="https://apps.apple.com/lb/app/mastercard-travel-pass/id1493489553" target="_blank" className="mm-button blue mt-4">Download App Now</a>

                            <div className="flex lg:items-center max-lg:flex-col lg:justify-between gap-10">
                                <div className="lg:w-3/5">
                                    <h3 className="font-bold mb-3 max-lg:mt-10">HOW TO USE:</h3>
                                    <ul className="">
                                        {
                                            howToUse.map((item, index) =>
                                            (
                                                <li key={index + 1} className="flex gap-3 mb-3 text-lg">
                                                    <span className="bg-transparent">{index + 1}</span>
                                                    <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                                </li>
                                            )

                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="relative lg:w-2/5 overflow-hidden">
                                    <img alt="2 mobile phones" src='/how-to-use-2.webp' width='680' height='534' />
                                </div>
                            </div>
                        </div>

                        <div className='flex max-lg:flex-col lg:justify-between lg:items-center gap-10'>
                            <div className='lg:w-3/5'>
                                <h2 className="smaller-title text-balance">Cleartrip Flight & Hotel Bookings</h2>
                                <div>
                                    <h4 className="font-bold text-4xl text-[#2657D4]">GET 8% OFF</h4>
                                    <p>through Cleartrip’s <a className="underline" target="_blank" href="https://www.cleartrip.ae/offers/uae/choose-your-country">website</a> or app from <a className="underline" target="_blank" href="https://apps.apple.com/us/app/cleartrip-flights-hotels-bus/id531324961">App Store</a> or <a className="underline" target="_blank" href="https://play.google.com/store/apps/details?id=com.cleartrip.android&hl=en&gl=US&pli=1">Google Play</a>
                                    </p>
                                    <div className='bg-black inline-block rounded-xl mt-6'>
                                        <img src="/cleartrip-logo.webp" alt="ClearTrip Logo" width="187" height="59" />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-2/5 aspect-[5/4] relative w-full overflow-hidden rounded-[40px] flex justify-center items-end p-5'>
                                <img className='absolute w-full h-full object-cover top-0 left-0' src='/cleartrip2.webp' width='1000' height='666' />
                                <Promo code="MCPLATINUM" />
                            </div>
                        </div>

                        <div className="flex max-lg:flex-col max-lg:gap-10 gap-10 lg:items-center">
                            <div className="lg:w-3/5">
                                <h2 className="smaller-title">Mastercard Hotel Bookings</h2>
                                <p>Enjoy <strong>up to 30% off</strong> at leading hotel chains worldwide and access unparalleled hotel benefits through their <a href="https://hotelbookings.priceless.com/" target="_blank" className="text-[var(--mm-blue)]">website</a> using the 6-digit Mastercard BIN.</p>
                            </div>
                            <div className="lg:w-2/5">
                                <img src="/mastercard2.webp" alt="Hotel Bookings" width="680" height="534" />
                            </div>
                        </div>

                        <div className="flex max-lg:flex-col lg:justify-between gap-10 lg:items-center">

                            <div className="lg:w-3/5">
                                <h2 className="smaller-title">IHG Hotels And Resorts</h2>
                                <p>When booking through their <a target="_blank" className="text-[var(--mm-blue)]" href="http://www.ihg.com/mastercardoffer">website</a>, you get a <strong>15% discount</strong> and exclusive offers on IHG Hotels & Resorts across Europe, Maldives, India, the Middle East & Africa. </p>
                            </div>
                            <div className="lg:w-2/5">
                                <img src="/hotel-resorts2.webp" alt="Hotel Bookings" width="680" height="534" />
                            </div>

                        </div>

                        <div className="flex flex-col gap-10">
                            <div className="text-center">
                                <h2 className="smaller-title">Booking.com</h2>
                                <p>Get <strong>10% money back</strong> on your next stay through <a href="https://www.booking.com/gating/authkey?aid=2439504&key=mjB3VcxhAl" target="_blank" className="text-[--mm-blue]">Booking.com</a>!</p>

                            </div>
                            <div className="lg:aspect-[16/5] max-lg:aspect-[16/12] relative flex items-end justify-end">
                                <img className="absolute rounded-3xl object-cover w-full h-full top-0" src="/booking-com-2.webp" alt="booking" width="1200" height="799" />
                                <div className='absolute right-9 -top-6'>
                                    <svg width="98" height="96" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4972_8653)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M98 18.4329C98 8.26025 89.7508 0.00135803 79.5947 0.00135803H18.4052C8.2492 0.00135803 0 8.26025 0 18.4329V77.569C0 87.7389 8.2492 96.0006 18.4053 96.0006H79.5947C89.7508 96.0006 98 87.7389 98 77.569L98 18.4329Z" fill="#0C3B7C" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.00390625 59.6406H48.949V96.0003H0.00394212L0.00390625 59.6406Z" fill="#0C3B7C" />
                                            <path d="M44.5396 63.544L36.6464 63.5361V54.0827C36.6464 52.0629 37.4287 51.0116 39.1543 50.7715H44.5396C48.3801 50.7715 50.8644 53.1968 50.8644 57.1223C50.8644 61.1541 48.443 63.5401 44.5396 63.544ZM36.6464 38.0462V35.5578C36.6464 33.3805 37.5662 32.345 39.5828 32.2111H43.6237C47.0868 32.2111 49.1624 34.2861 49.1624 37.7627C49.1624 40.4086 47.7394 43.4993 43.7495 43.4993H36.6464V38.0462ZM54.6184 47.4799L53.1915 46.6767L54.4376 45.6097C55.8881 44.3616 58.3174 41.5543 58.3174 36.7114C58.3174 29.2936 52.5743 24.5098 43.6866 24.5098H33.5449V24.5059H32.3893C29.7556 24.6043 27.6447 26.7501 27.6172 29.4039V71.4934H43.8871C53.7654 71.4934 60.1413 66.1072 60.1413 57.7641C60.1413 53.2716 58.0815 49.4328 54.6184 47.4799Z" fill="white" />
                                            <path d="M64.3789 65.6792C64.3789 62.4639 66.9679 59.8627 70.1577 59.8627C73.3556 59.8627 75.9567 62.4639 75.9567 65.6792C75.9567 68.8904 73.3556 71.4957 70.1577 71.4957C66.9679 71.4957 64.3789 68.8904 64.3789 65.6792Z" fill="#00BAFC" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4972_8653">
                                                <rect width="98" height="96" fill="white" transform="translate(0 0.000732422)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="z-1 relative pr-12 pb-4">
                                    <Promo code="MCBKG" />
                                </div>

                            </div>
                            <div className="text-center">
                                <p>Use your Platinum Mastercard at checkout, and your cashback will be credited to your Booking.com wallet within 70 days after your stay.</p>

                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="text-center">
                                <h2 className="smaller-title">AVIS Car Rental</h2>
                                <p>Enjoy <strong>20% off</strong> your next car rental and a complimentary upgrade with Avis through their <a target="_blank" className="text-[var(--mm-blue)]" href="https://avisworld.com/mastercardmea">website</a>.</p>
                            </div>
                            <div>
                                <img src="/avis.webp" alt="booking" width="1740" height="814" />
                            </div>
                            <div className="text-center">
                                <p>
                                    Click <a target="_blank" className="text-[var(--mm-blue)]" href="https://secure-one.avisworld.com/en_GB/Avis-MastercardMEA/AvisPreferred">here</a> to sign up for the Avis Preferred program.
                                </p>
                            </div>
                        </div>

                        <div className="flex max-lg:flex-col lg:justify-between gap-10">
                            <div className='lg:w-3/5'>
                                <h2 className="smaller-title">Rentalcars.com</h2>
                                <p className='lg:w-1/2'>Enjoy 10% off car rentals when booking through <a target="_blank" className="text-[var(--mm-blue)]" href="https://www.rentalcars.com/?affiliateCode=mastercard047&enabler=mastercardme">Rentalcars.com</a>.</p>
                            </div>

                            <div className="lg:w-2/5 relative aspect-video rounded-[40px] overflow-hidden">
                                <img className="absolute w-full h-full object-cover top-0" src="/rental-cars.webp" alt="RentalCars" width="722" height="530" />
                            </div>
                        </div>

                        <div className="flex max-lg:flex-col lg:justify-between gap-10">
                            <div className='lg:w-3/5'>
                                <h2 className="smaller-title">Budget Truck & Car Rental</h2>
                                <p className='lg:w-1/2'>Get <strong>up to 10%</strong> off on your next car or truck rental with Budget through their <a className="text-[var(--mm-blue)]" target="_blank" href="www.budgetinternational.com/mastercard">website</a>. </p>

                            </div>
                            <div className='lg:w-2/5'>
                                <img src="/budget-truck.webp" alt="RentalCars" width="722" height="374" />
                            </div>
                        </div>

                        <div className='flex max-lg:flex-col gap-10 lg:justify-between'>
                            <div className="lg:w-3/5">
                                <div className='lg:w-2/3'>
                                    <h2 className="smaller-title">Priceless Cities</h2>
                                    <p>Enjoy exclusive access to dining, travel,
                                        and entertainment experiences in over 40 cities and countries through <a href="https://priceless.com" target="_blank" className="text-[var(--mm-blue)]">Priceless.com.</a>
                                    </p>
                                    <img className='mt-3' src='/mastercard-logo.webp' width='100' heigiht='66' />
                                </div>
                            </div>
                            <div className='lg:w-2/5 aspect-video relative overflow-hidden rounded-[40px]'>
                                <img className='absolute top-0 left-0 w-full h-full object-cover' src="/priceless-cities2.webp" width='1000' height='666' />
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
                                                <li key={index + 1} className="flex gap-3 mb-3 text-lg">
                                                    <span className="flex">{index + 1}</span>
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
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 9.5V6M11 13H11.01M8.9 18.2L10.36 20.1467C10.5771 20.4362 10.6857 20.5809 10.8188 20.6327C10.9353 20.678 11.0647 20.678 11.1812 20.6327C11.3143 20.5809 11.4229 20.4362 11.64 20.1467L13.1 18.2C13.3931 17.8091 13.5397 17.6137 13.7185 17.4645C13.9569 17.2656 14.2383 17.1248 14.5405 17.0535C14.7671 17 15.0114 17 15.5 17C16.8978 17 17.5967 17 18.1481 16.7716C18.8831 16.4672 19.4672 15.8831 19.7716 15.1481C20 14.5967 20 13.8978 20 12.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H6.8C5.11984 2 4.27976 2 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2 4.27976 2 5.11984 2 6.8V12.5C2 13.8978 2 14.5967 2.22836 15.1481C2.53284 15.8831 3.11687 16.4672 3.85195 16.7716C4.40326 17 5.10218 17 6.5 17C6.98858 17 7.23287 17 7.45951 17.0535C7.76169 17.1248 8.04312 17.2656 8.2815 17.4645C8.46028 17.6137 8.60685 17.8091 8.9 18.2Z" stroke="black" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </span>
                                        </div>
                                        <p>After redeeming your Costa offer, lounge access will be temporarily unavailable for 2 hours and vice versa.</p>
                                    </div>
                                </div>
                                <div className="lg:w-2/5 aspect-[5/4] rounded-[40px] relative overflow-hidden">
                                    <img src='/costa.webp' className="absolute object-cover w-full h-full" alt="Costa Coffee" width='800' height='800' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={peaceRef} data-name="peace" className="content-category">
                        <div className="flex max-lg:flex-col gap-10 lg:justify-between">
                            <div className="lg:w-2/5">
                                <h2 className="smaller-title">Purchase Protection</h2>
                                <p>Shop with confidence, knowing that the purchases you make with your Mastercard are:</p>
                                <ul className="mt-7">
                                    {
                                        purchase_protection.map((item, index) =>
                                        (
                                            <li key={index + 1} className="flex gap-4 mb-3 text-lg">
                                                <span>{index + 1}</span>
                                                <span>{item.title}</span>
                                            </li>
                                        )

                                        )
                                    }
                                </ul>
                                <p className="mt-8">
                                    In case of damage, you can either get a new item to replace the damaged one or receive compensation for the item’s total value, as per the store receipt. <br />
                                    Simply visit their <a target="_blank" className="text-[var(--mm-blue)]" href="https://mcpeaceofmind.com/platinum">website</a> to file a claim.
                                </p>
                            </div>
                            <div className="lg:w-2/5">
                                <img src="/purchase-protection.webp" alt="Purchase Protection" width='596' height='845' />
                            </div>

                        </div>
                    </div>
                    <div ref={lifestyleRef} data-name="lifestyle" className="content-category">
                        <div className="flex max-lg:flex-col gap-10 lg:justify-between">
                            <div className="lg:w-2/5">
                                <h2 className="smaller-title">Bicester Village Shopping Collection</h2>
                                <p>Shop luxury in style with VIP discounts at the Bicester Village Shopping Collection across Europe:</p>
                                <ul className="flex flex-col gap-4 mt-8">
                                    {
                                        bicester.map((item, index) => (
                                            <li key={index} className="flex gap-3 text-lg">
                                                <span>
                                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.75 5.31309C1.75 3.77294 1.75 3.00287 2.04973 2.41461C2.31338 1.89717 2.73408 1.47647 3.25153 1.21282C3.83978 0.913086 4.60986 0.913086 6.15 0.913086H13.85C15.3901 0.913086 16.1602 0.913086 16.7485 1.21282C17.2659 1.47647 17.6866 1.89717 17.9503 2.41461C18.25 3.00287 18.25 3.77294 18.25 5.31309V13.0131C18.25 14.5532 18.25 15.3233 17.9503 15.9116C17.6866 16.429 17.2659 16.8497 16.7485 17.1134C16.1602 17.4131 15.3901 17.4131 13.85 17.4131H6.15C4.60986 17.4131 3.83978 17.4131 3.25153 17.1134C2.73408 16.8497 2.31338 16.429 2.04973 15.9116C1.75 15.3233 1.75 14.5532 1.75 13.0131V5.31309Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className='-mt-[7px]'>
                                                    {item.title}
                                                </span>


                                            </li>
                                        ))
                                    }
                                </ul>
                                <p className="mt-8">
                                    Visit their <a target="_blank" className="text-[var(--mm-blue)]" href="https://thebicestervillageshoppingcollection.com/mastercard-mea">website</a> to avail these offers.
                                </p>
                            </div>
                            <div className="lg:w-2/5 rounded-[40px] relative overflow-hidden">
                                <img src="/bicester.webp" alt="Bicester" className="absolute h-full w-full object-cover" width='580' height='1448' />
                            </div>
                        </div>

                        {/* <div className="flex flex-col gap-5">
                            <div className="text-center">
                                <h2 className="smaller-title">Farfetch</h2>
                                <p>Enjoy <strong>10% off</strong> incredible fashion at <a className="blue-text" href="https://www.farfetch.com/lb/shopping/women/sale/all/items.aspx?utm_source=google&utm_medium=cpc&utm_keywordid=26798745&isbrand=yes&pid=google_search&af_channel=Search&c=703495184&af_c_id=703495184&af_siteid=&af_keywords=kwd-533010193&af_adset_id=36605822557&af_ad_id=591351217847&af_sub1=26798745&is_retargeting=true&gad_source=1&gclid=Cj0KCQiA0fu5BhDQARIsAMXUBOL1E-xbQSps1LXLwYT9gBx2Kj1NMzlA9osX8zCmCKW0ghXCeEOu2v8aAgNSEALw_wcB">Farfetch</a> when spending $300 or above.</p>

                            </div>
                            <div className="max-lg:aspect-video lg:aspect-[87/32] rounded-[40px] overflow-hidden relative">
                                <img className="absolute object-cover h-full w-full top-0" src="/farfetch.webp" alt="booking" />
                                <div className="lg:absolute lg:bottom-4 lg:right-10 max-lg:flex max-lg:items-center max-lg:h-full max-lg:justify-center">
                                    <Promo code="MCFF" />
                                </div>
                            </div>
                            <div className="text-center">
                                <p>You can also download the app from the <a className="blue-text" target="_blank" href="https://apps.apple.com/us/app/farfetch-shop-luxury-fashion/id906698760">App Store</a> or <a className="blue-text" target="_blank" href="https://play.google.com/store/search?q=farfetch&c=apps">Google Play</a>.</p>
                                <p>
                                    Check out the <a target="_blank" className="text-[--mm-blue]" href="https://www.farfetch.com/lb/mastercard/privileges/evergreen/terms-and-conditions.aspx?clickref=1011lzRV4NqX&utm_source=mastercard_privileges&utm_medium=partnerships&utm_campaign=PHPAR&pid=performancehorizon_int&c=PHPAR&clickid=1011lzRV4NqX&af_siteid=mastercard_privileges&af_cost_model=CPA&af_channel=partnerships&is_retargeting=true">Terms & Conditions</a> for clarification on excluded brands & items.
                                </p>
                            </div>
                        </div> */}

                        <div className="flex max-lg:flex-col gap-10 items-center lg:justify-between">
                            <div className="lg:w-3/5">
                                <h2 className="smaller-title">MyUS Premium Membership</h2>
                                <p>Shop at over 100,000 U.S. retailers, including Apple, Amazon, and Ralph Lauren, and get fast, reliable, affordable international shipping with MyUS, and enjoy:</p>
                                <div className="flex flex-col gap-5 mt-5 mb-5">
                                    {
                                        my_us.map((item, index) => (
                                            <div key={index} className="flex gap-3 text-lg">
                                                <span>
                                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.75 5.31309C1.75 3.77294 1.75 3.00287 2.04973 2.41461C2.31338 1.89717 2.73408 1.47647 3.25153 1.21282C3.83978 0.913086 4.60986 0.913086 6.15 0.913086H13.85C15.3901 0.913086 16.1602 0.913086 16.7485 1.21282C17.2659 1.47647 17.6866 1.89717 17.9503 2.41461C18.25 3.00287 18.25 3.77294 18.25 5.31309V13.0131C18.25 14.5532 18.25 15.3233 17.9503 15.9116C17.6866 16.429 17.2659 16.8497 16.7485 17.1134C16.1602 17.4131 15.3901 17.4131 13.85 17.4131H6.15C4.60986 17.4131 3.83978 17.4131 3.25153 17.1134C2.73408 16.8497 2.31338 16.429 2.04973 15.9116C1.75 15.3233 1.75 14.5532 1.75 13.0131V5.31309Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className='-mt-[7px]'>
                                                    {item.title}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <p>Visit their <a className="text-[var(--mm-blue)]" target="_blank" href="https://www.myus.com/welcome/mastercardpremium/">website</a> to register and use your TIER Mastercard® on the payment page.</p>
                            </div>
                            <div className="lg:w-2/5">
                                <img src="/myus2.webp" alt="MyUS" width='1000' height='1561' />
                            </div>
                        </div>

                        <div className='flex max-lg:flex-col gap-10 lg:justify-between'>
                            <div className='lg:w-2/5'>
                                <h2 className="smaller-title">Mastercard Gamer Pass With Go Gamers</h2>
                                <p>Get your Mastercard Gamer Pass to participate in one of the biggest online gaming communities consisting of online coaching sessions & tournaments for your favorite games & win prizes:</p>
                                <div className="flex flex-col gap-4 mt-5 mb-5">
                                    {
                                        go_gamers.map((item, index) => (
                                            <div key={index} className="flex gap-3 text-lg">
                                                <span>
                                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.75 5.31309C1.75 3.77294 1.75 3.00287 2.04973 2.41461C2.31338 1.89717 2.73408 1.47647 3.25153 1.21282C3.83978 0.913086 4.60986 0.913086 6.15 0.913086H13.85C15.3901 0.913086 16.1602 0.913086 16.7485 1.21282C17.2659 1.47647 17.6866 1.89717 17.9503 2.41461C18.25 3.00287 18.25 3.77294 18.25 5.31309V13.0131C18.25 14.5532 18.25 15.3233 17.9503 15.9116C17.6866 16.429 17.2659 16.8497 16.7485 17.1134C16.1602 17.4131 15.3901 17.4131 13.85 17.4131H6.15C4.60986 17.4131 3.83978 17.4131 3.25153 17.1134C2.73408 16.8497 2.31338 16.429 2.04973 15.9116C1.75 15.3233 1.75 14.5532 1.75 13.0131V5.31309Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className='-mt-[7px]'>
                                                    {item.title}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <p>
                                    Sign up or log in to <a target="_blank" className="text-[var(--mm-blue)]" href="https://gogamers.tech/">Go Gamers Gaming Community</a> and use your Mastercard to purchase “Mastercard Premium Membership” to get started.
                                </p>
                            </div>

                            <div className="lg:w-2/5">
                                <img src="/go-gamers2.webp" alt="Go Gamers image" width='800' height='1582' />
                            </div>

                        </div>

                        <div className='flex max-lg:flex-col gap-10 lg:justify-between'>
                            <div className='lg:w-2/5'>
                                <h2 className="smaller-title">Medical Tourism Concierge</h2>
                                <p>Get treatments with the best medical experts, hospitals, and clinics in India, Turkey, UAE, Germany, and Thailand. With this service, you can get:</p>
                                <div className="flex flex-col gap-4 mt-5 mb-5">
                                    {
                                        treatments.map((item, index) => (
                                            <div key={index} className="flex gap-3 text-lg">
                                                <span>
                                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.75 5.31309C1.75 3.77294 1.75 3.00287 2.04973 2.41461C2.31338 1.89717 2.73408 1.47647 3.25153 1.21282C3.83978 0.913086 4.60986 0.913086 6.15 0.913086H13.85C15.3901 0.913086 16.1602 0.913086 16.7485 1.21282C17.2659 1.47647 17.6866 1.89717 17.9503 2.41461C18.25 3.00287 18.25 3.77294 18.25 5.31309V13.0131C18.25 14.5532 18.25 15.3233 17.9503 15.9116C17.6866 16.429 17.2659 16.8497 16.7485 17.1134C16.1602 17.4131 15.3901 17.4131 13.85 17.4131H6.15C4.60986 17.4131 3.83978 17.4131 3.25153 17.1134C2.73408 16.8497 2.31338 16.429 2.04973 15.9116C1.75 15.3233 1.75 14.5532 1.75 13.0131V5.31309Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className='-mt-[7px]'>
                                                    {item.title}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <p>Get started and check out the selected UAE, Turkish, and Indian hospitals <a target="_blank" className="text-[var(--mm-blue)]" href="https://www.vaidam.com/mastercard-offers">here.</a> </p>
                            </div>

                            <div className="lg:w-2/5">
                                <img src="/medical-tourism-concierge2.webp" alt="Go Gamers image" width='1000' height='1513'/>
                            </div>

                        </div>

                        <div className='flex max-lg:flex-col gap-10 lg:justify-between'>
                            <div className='lg:w-2/5'>
                                <h2 className="smaller-title">Fiit</h2>
                                <p>Get a 25% discount on your first Fiit subscription payment after a 14-day free trial with your Mastercard and enjoy:</p>
                                <div className="flex flex-col gap-4 mt-5 mb-5">
                                    {
                                        fiit.map((item, index) => (
                                            <div key={index} className="flex gap-3 text-lg">
                                                <span>
                                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.75 5.31309C1.75 3.77294 1.75 3.00287 2.04973 2.41461C2.31338 1.89717 2.73408 1.47647 3.25153 1.21282C3.83978 0.913086 4.60986 0.913086 6.15 0.913086H13.85C15.3901 0.913086 16.1602 0.913086 16.7485 1.21282C17.2659 1.47647 17.6866 1.89717 17.9503 2.41461C18.25 3.00287 18.25 3.77294 18.25 5.31309V13.0131C18.25 14.5532 18.25 15.3233 17.9503 15.9116C17.6866 16.429 17.2659 16.8497 16.7485 17.1134C16.1602 17.4131 15.3901 17.4131 13.85 17.4131H6.15C4.60986 17.4131 3.83978 17.4131 3.25153 17.1134C2.73408 16.8497 2.31338 16.429 2.04973 15.9116C1.75 15.3233 1.75 14.5532 1.75 13.0131V5.31309Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className='-mt-[7px]'>
                                                    {item.title}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                                <a href="https://getfiit.tv/mastercard" target='_blank' className='mm-button blue'>Subscribe Now</a>
                            </div>

                            <div className="lg:w-2/5 relative aspect-[5/4] rounded-[40px] overflow-hidden">
                                <img src="/fiit2.webp" alt="Go Gamers image" className='absolute w-full h-full object-cover left-0 top-0' width='1000' height='666' />

                            </div>

                        </div>

                        <div id="shahid">
                            <div>
                                <h2 className="smaller-title">Get All the Drama for Half the Price</h2>
                                <p><strong>Get 50% Off Shahid VIP with Your MyMonty Card.</strong> Your favorite shows just got more affordable. <strong>Enjoy 50% off your Shahid VIP monthly plan</strong> when you use an eligible <strong>MyMonty Mastercard®.</strong></p>
                                <p className="text-lg mt-5">Offer is valid for newly registered MyMonty Mastercard cards on the Shahid platform only.</p>
                            </div>
                            <div className='flex max-lg:flex-col items-center gap-10 mt-10'>
                                <div className="lg:w-3/5">                                             
                                    <h3 className="mt-5 font-bold mb-3 max-md:mt-1 uppercase">to get your discount:</h3>
                                    <ul className="">
                                        <li className="flex gap-3 mb-3 text-lg">
                                            <span className="flex">1</span> 
                                            <span>Go to www.shahid.net/Mastercard</span>
                                        </li>
                                        <li className="flex gap-3 mb-3 text-lg">
                                            <span className="flex">2</span> 
                                            <span>Login or sign up for a Shahid account</span>
                                        </li> 
                                        <li className="flex gap-3 mb-3 text-lg">
                                            <span className="flex">3</span> 
                                            <span>Add your eligible MyMonty Mastercard® details</span>
                                        </li> 
                                        <li className="flex gap-3 mb-3 text-lg">
                                            <span className="flex">4</span> 
                                            <span>Redeem and enjoy streaming at half the price!</span>
                                        </li> 
                                    </ul>

                                    <h3 className="mt-5 font-bold mb-3 max-md:mt-10 uppercase">terms & conditions</h3>
                                    <a href="/Shahid-T&Cs - May 2025.pdf" target="_blank" className="mm-button blue mt-1">View Full Terms & Conditions</a>
                                </div>
                                <div className="lg:w-2/5 aspect-[5/4] rounded-[40px] relative overflow-hidden">
                                    <img src='/shahed.webp' className="absolute object-cover w-full h-full" alt="Shahed" width='666' height='590' />
                                </div>                                       
                            </div>
                        </div>

                        <div className='!pb-0 !border-b-0 flex max-lg:flex-col gap-10 lg:justify-between'>
                            <div className="lg:w-2/5">
                                <div>
                                    <h2 className="smaller-title">Lingokids</h2>
                                    <p>Let your child learn through play and build skills like creativity, collaboration, critical thinking, and communication. Join the adventure and enjoy:</p>
                                    <div className="flex flex-col gap-5 mt-5">
                                        <div className="text-lg flex gap-3">
                                            <span>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.75 5.31309C1.75 3.77294 1.75 3.00287 2.04973 2.41461C2.31338 1.89717 2.73408 1.47647 3.25153 1.21282C3.83978 0.913086 4.60986 0.913086 6.15 0.913086H13.85C15.3901 0.913086 16.1602 0.913086 16.7485 1.21282C17.2659 1.47647 17.6866 1.89717 17.9503 2.41461C18.25 3.00287 18.25 3.77294 18.25 5.31309V13.0131C18.25 14.5532 18.25 15.3233 17.9503 15.9116C17.6866 16.429 17.2659 16.8497 16.7485 17.1134C16.1602 17.4131 15.3901 17.4131 13.85 17.4131H6.15C4.60986 17.4131 3.83978 17.4131 3.25153 17.1134C2.73408 16.8497 2.31338 16.429 2.04973 15.9116C1.75 15.3233 1.75 14.5532 1.75 13.0131V5.31309Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className='-mt-[5px]'>
                                                50% off on all future monthly subscriptions
                                                for new and existing users
                                            </span>

                                        </div>

                                        <div className="text-lg flex gap-3">
                                            <span>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.75 5.31309C1.75 3.77294 1.75 3.00287 2.04973 2.41461C2.31338 1.89717 2.73408 1.47647 3.25153 1.21282C3.83978 0.913086 4.60986 0.913086 6.15 0.913086H13.85C15.3901 0.913086 16.1602 0.913086 16.7485 1.21282C17.2659 1.47647 17.6866 1.89717 17.9503 2.41461C18.25 3.00287 18.25 3.77294 18.25 5.31309V13.0131C18.25 14.5532 18.25 15.3233 17.9503 15.9116C17.6866 16.429 17.2659 16.8497 16.7485 17.1134C16.1602 17.4131 15.3901 17.4131 13.85 17.4131H6.15C4.60986 17.4131 3.83978 17.4131 3.25153 17.1134C2.73408 16.8497 2.31338 16.429 2.04973 15.9116C1.75 15.3233 1.75 14.5532 1.75 13.0131V5.31309Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className='-mt-[5px]'>
                                                1 week of complimentary Lingokids Plus membership
                                            </span>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-3 mt-5">HOW TO REDEEM:</h3>
                                    <ul className="">
                                        {
                                            howToRedeem.map((item, index) =>
                                            (
                                                <li key={index + 1} className="flex gap-3 mb-3 text-lg">
                                                    <span className=" shrink-0 rounded-full flex">{index + 1}</span>
                                                    <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                                                </li>
                                            )

                                            )
                                        }
                                    </ul>

                                </div>
                            </div>

                            <div className='lg:w-2/5 relative max-lg:aspect-[5/4] lg:aspect-[9/13] rounded-[40px] overflow-hidden'>
                                <img className="w-full h-full absolute object-cover" src="/lingo2.webp" alt="Lingo Kids" width='1000' height='666' />
                                <div className="px-5 mt-4 flex items-end justify-center pb-10 h-full">
                                    <Promo code="MASTERCARD50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content;
