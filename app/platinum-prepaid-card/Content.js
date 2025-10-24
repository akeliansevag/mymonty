"use client";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/cards/Sidebar";
import Promo from "../components/cards/Promo";

const Content = () => {
  const [currentInView, setCurrentInView] = useState(null);
  const travelRef = useRef(null);
  const lifestyleRef = useRef(null);
  const peaceRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentInView(entry.target.dataset.name); // Update to the current div in view
          }
        });
      },
      {
        root: null,
        rootMargin: "-85% 0% -15% 0%",
        threshold: 0,
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

  return (
    <div className="container py-10 lg:py-20">
      <div className="flex max-md:flex-col gap-x-5">
        <Sidebar
          travelRef={travelRef}
          lifestyleRef={lifestyleRef}
          peaceRef={peaceRef}
          divInView={currentInView}
        />

        <div className="bg-gray-100 rounded-3xl lg:rounded-l-none p-6">
          <div ref={travelRef} data-name="travel" className="content-category">
            <div className="!pt-0">
              <div>
                <h2>Platinum Mastercard® Lounge Program</h2>
                <p>
                  Enjoy airport lounge access to over 25 regional &
                  international lounges with your Platinum Mastercard.
                </p>
              </div>

              <div className="image-wrapper flex max-lg:flex-col lg:justify-between lg:items-end max-lg:items-center gap-10 p-5">
                <img
                  src="/word-elite-mastercard-lounge-program.webp"
                  className="image-bg"
                />
                <div className="z-10"></div>
                <div className="z-10 lg:h-full max-lg:flex-col lg:flex max-lg:justify-center lg:items-end gap-10">
                  <div className="text-center max-lg:mb-4">
                    <a
                      href="https://apps.apple.com/lb/app/mastercard-travel-pass/id1493489553"
                      target="_blank"
                      className="mm-button mt-4"
                    >
                      Download App Now
                    </a>
                  </div>
                  <div className="h-full">
                    <img
                      className="h-full lg:translate-y-1/4"
                      src="/mastercard-app.webp"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>HOW TO USE:</h3>
                <ul className="lg:columns-2">
                  <li>
                    Download{" "}
                    <a
                      href="https://apps.apple.com/lb/app/mastercard-travel-pass/id1493489553"
                      target="_blank"
                    >
                      Mastercard Travel Pass App
                    </a>
                  </li>
                  <li>Register your MyMonty Mastercard card</li>
                  <li>Use the app to locate lounges near you</li>
                  <li>Confirm complimentary visits eligibility</li>
                  <li>Present the app QR code to the lounge receptionist</li>
                  <li>Enjoy your lounge access</li>
                </ul>
              </div>

              <div>
                <h3 className="uppercase">Access rules:</h3>
                <p>
                  Make a minimum <strong>$1 international transaction</strong>{" "}
                  (POS or online) to unlock{" "}
                  <strong>3 months of complimentary lounge access</strong>.
                </p>
                <p>
                  <strong>
                    Complimentary access is renewed by spending the required
                    amount.
                  </strong>
                </p>
                <ul className="!list-disc mt-4">
                  <li>Annual ceiling on complimentary visits</li>
                  <li>
                    <strong>Platinum</strong>: Up to 8 visits per calendar year
                  </li>
                  <li>
                    <strong>Initial complimentary access</strong> (one-time
                    courtesy)
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h2>Costa at Dubai Airports</h2>
                <p>
                  Get freshly prepared food and beverages at Costa outlets in
                  Dubai’s airports for <strong>FREE</strong>.
                </p>
              </div>
              <div className="image-wrapper">
                <img src="/costa-at-dubai-airports.webp" className="image-bg" />
              </div>
              <div>
                <h3>HOW TO REDEEM:</h3>
                <ul>
                  <li>
                    Download the <strong>Mastercard Travel Pass</strong> App
                    from{" "}
                    <a
                      href="https://apps.apple.com/lb/app/mastercard-travel-pass/id1493489553"
                      target="_blank"
                    >
                      App Store
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.dragonpass.en.mcmea&hl=en_US&pli=1"
                      target="_blank"
                    >
                      Google Pay
                    </a>
                    , & register your Mastercard® Card
                  </li>
                  <li>
                    Enter your Dubai Airport location to find the Costa offer.
                  </li>
                  <li>
                    Redeem one item from the predetermined list, and show the QR
                    code with your boarding pass to Costa staff.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h2>Heathrow Express</h2>
                <p>
                  Travel smarter with <strong>Mastercard! Get 12% off</strong>{" "}
                  Heathrow Express tickets{" "}
                </p>
                <p>
                  (Express & Business First). Tap to book{" "}
                  <a
                    target="_blank"
                    href="http://www.heathrowexpress.com/mastercard"
                  >
                    http://www.heathrowexpress.com/mastercard
                  </a>
                </p>
              </div>
              <div className="image-wrapper">
                <img src="/heathrow-express.webp" className="image-bg" />
              </div>
              <div>
                <h3>HOW TO USE:</h3>
                <ul>
                  <li>
                    Go to Mastercard Heathrow Express offer landing page (
                    <a
                      href="http://www.heathrowexpress.com/mastercard"
                      target="_blank"
                    >
                      http://www.heathrowexpress.com/mastercard
                    </a>
                    ) to view offer details
                  </li>
                  <li>
                    Register or sign in to enjoy 12% discount on Express and
                    Business first-class tickets
                  </li>
                  <li>Select your destination to purchase your ticket.</li>
                  <li>
                    Use your eligible Mastercard and promocode Mcard12 to redeem
                    the 12% discount
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h2>Trip.com</h2>
                <p>
                  Get up to <strong>10% OFF</strong> flights and hotels bookings
                  on Trip.com with your Mastercard card and enjoy your next
                  trip!{" "}
                  <a href="https://trip.com/mastercard" target="_blank">
                    www.trip.com/mastercard
                  </a>
                </p>
              </div>

              <div className="image-wrapper flex max-lg:flex-col lg:justify-end items-center">
                <img src="/tripcom.webp" className="image-bg" />
                <div className="lg:mr-5 relative z-10 flex flex-col items-center">
                  <img
                    className="w-[165px] translate-y-8 z-10"
                    src="/trip-logo.webp"
                  />
                  <Promo code="MCTRIP10" />
                </div>
              </div>

              <div>
                <h3>HOW TO USE:</h3>
                <ul>
                  <li>
                    Simply download the trip.com app from the App Store or
                    Google Play or visit trip.com ’s website and click on the
                    Mastercard’s offer banner. You can also go directly to 
                    <a href="https://trip.com/mastercard" target="_blank">
                      www.trip.com/mastercard
                    </a>
                  </li>
                  <li>
                    Click ‘Claim’ on the promo code that matches your card type
                  </li>
                  <li>
                    Book your flight or hotel and select the promo code form the
                    ‘My Promo Codes’ section. 
                  </li>
                  <li>Your discount will be confirmed at checkout.</li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h2>IHG Hotels & Resorts</h2>
                <p>
                  Booking through their{" "}
                  <a
                    href="https://www.ihg.com/content/gb/en/deals/partner-offers/mastercard-imea?qCpid=787056394&srb_u=1&cm_mmc=WEB-_-6C-_-IMEA-_-QE-_-PTR-_-MastercardIMEA_645200-_-vanity"
                    target="_blank"
                  >
                    website
                  </a>{" "}
                  and pay with your Mastercard® for exclusive perks at IHG
                  Hotels & Resorts worldwide, including <strong>15% OFF</strong>{" "}
                  the Best Available Rate, a complimentary welcome drink, and
                  late checkout until 4 pm.
                </p>
              </div>
              <div className="image-wrapper">
                <img src="/ihg-hotes-and-resorts.webp" className="image-bg" />
              </div>
            </div>

            <div>
              <div>
                <h2>Booking.com</h2>
                <p>
                  Get up to 7% wallet credit on your next stay when booking it
                  on{" "}
                  <a
                    href="https://www.booking.com/gating/authkey?aid=2439504&key=mjB3VcxhAl"
                    target="_blank"
                  >
                    Booking.com
                  </a>
                  .
                </p>
              </div>

              <div className="image-wrapper flex max-lg:flex-col lg:justify-end items-center">
                <img src="/booking.webp" className="image-bg" />
                {/* <div className='lg:mr-5 relative z-10 flex flex-col items-center'>
                                <img className='w-[165px] translate-y-8 z-10' src='/booking-logo.webp' />
                                <Promo code="MCBKG"/>
                            </div> */}
              </div>

              <div>
                <p>
                  Use your Platinum Mastercard at checkout, and your cashback
                  will be credited to your Booking.com wallet within 70 days
                  after your stay.
                </p>
              </div>
            </div>

            <div>
              <div>
                <h2>AVIS Car Rental</h2>
                <p>
                  Up to 20% off your next car rental • A complimentary upgrade
                  with every rental through their{" "}
                  <a
                    href="https://secure-one.avisworld.com/en_GB/Avis-MastercardMEA/AvisPreferred"
                    target="_blank"
                  >
                    website
                  </a>
                  .
                </p>
              </div>

              <div className="image-wrapper flex max-lg:flex-col lg:justify-end items-center">
                <img src="/avis-2.webp" className="image-bg" />
              </div>
            </div>

            <div>
              <div>
                <h2>Budget Truck And Car Rental</h2>
                <p>
                  Get <strong>UP TO 10%</strong> off on your next car or truck
                  rental. Simply visit Budget’s{" "}
                  <a
                    href="https://one.budgetinternational.com/en_GB/Budget-MastercardMEA/"
                    target="_blank"
                  >
                    website
                  </a>{" "}
                  and reserve your vehicle using your eligible Mastercard®.
                </p>
              </div>

              <div className="image-wrapper flex items-center justify-center">
                <img src="/budget.webp" className="image-bg" />
                <div className="absolute z-10 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
                <div className="z-10 relative max-w-[280px]">
                  <img src="/budget-logo.webp" />
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2>Rentalcars.com </h2>
                <p>
                  Enjoy an exclusive <strong>10% DISCOUNT</strong> when you book
                  with your Mastercard on{" "}
                  <a href="https://www.rentalcars.com/" target="_blank">
                    Rentalcars.com
                  </a>
                  .
                </p>
              </div>

              <div className="image-wrapper">
                <img src="/rentalcars.webp" className="image-bg" />
              </div>
            </div>

            <div>
              <div>
                <h2>Priceless Cities</h2>
                <p>
                  Enjoy exclusive access to dining, travel, and entertainment
                  experiences in over 40 cities and countries through{" "}
                  <a href="https://priceless.com" target="_blank">
                    Priceless.com
                  </a>
                  .
                </p>
              </div>

              <div className="image-wrapper flex justify-end items-end">
                <img src="/priceless-2.webp" className="image-bg" />
                <div className="w-full h-full top-0 left-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_72.62%,#000000_92.93%)] absolute z-10"></div>
                <div className="relative z-10">
                  <svg
                    width="100"
                    height="66"
                    viewBox="0 0 100 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.0352 15.6772H60.2778V50.0326H39.0352V15.6772Z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M41.2232 32.8577C41.2206 29.5496 41.9779 26.2843 43.4379 23.3088C44.898 20.3333 47.0224 17.7256 49.6504 15.6831C46.3955 13.1502 42.4865 11.575 38.3702 11.1378C34.254 10.7006 30.0966 11.4189 26.3731 13.2106C22.6497 15.0024 19.5104 17.7953 17.3141 21.2701C15.1178 24.7449 13.9531 28.7615 13.9531 32.8607C13.9531 36.96 15.1178 40.9766 17.3141 44.4514C19.5104 47.9262 22.6497 50.7191 26.3731 52.5108C30.0966 54.3026 34.254 55.0209 38.3702 54.5836C42.4865 54.1464 46.3955 52.5713 49.6504 50.0383C47.0215 47.9952 44.8966 45.3866 43.4366 42.41C41.9766 39.4333 41.2197 36.1668 41.2232 32.8576V32.8577Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M83.2431 46.397V45.6931H83.5496V45.5474H82.8203V45.6931H83.1084V46.3971L83.2431 46.397ZM84.6589 46.397V45.5475H84.4383L84.1809 46.1543L83.9234 45.5474H83.7029V46.397H83.8622V45.7537L84.1012 46.306H84.2667L84.5058 45.7537V46.397H84.6589Z"
                      fill="#F79E1B"
                    />
                    <path
                      d="M85.3529 32.8576C85.3528 36.9572 84.1879 40.974 81.9912 44.449C79.7945 47.9239 76.6547 50.7167 72.9308 52.5082C69.2069 54.2997 65.049 55.0175 60.9325 54.5797C56.8161 54.1418 52.9071 52.5659 49.6523 50.0321C52.2793 47.9878 54.4031 45.3795 55.8635 42.4038C57.3239 39.4281 58.0827 36.1629 58.0827 32.8545C58.0827 29.5461 57.3239 26.2809 55.8635 23.3052C54.4031 20.3296 52.2793 17.7212 49.6523 15.6769C52.9071 13.1431 56.8161 11.5672 60.9326 11.1294C65.0491 10.6915 69.2069 11.4094 72.9308 13.2009C76.6548 14.9923 79.7945 17.7852 81.9912 21.2601C84.1879 24.7351 85.3529 28.752 85.3529 32.8515V32.8576Z"
                      fill="#F79E1B"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={lifestyleRef}
            data-name="lifestyle"
            className="content-category"
          >
            <div>
              <div>
                <h2>Mastercard® Gamer Pass with Go Gamers</h2>
                <p>
                  Mastercard® Gamer Pass with Go Gamers Get{" "}
                  <strong>50% OFF</strong> Premium Membership. Join global
                  tournaments, win prizes, and access expert coaching to sharpen
                  your skills. Start now at{" "}
                  <a href="https://gogamers.tech" target="_blank">
                    www.gogamers.tech
                  </a>{" "}
                  and game like a pro with Mastercard.
                </p>
              </div>

              <div className="image-wrapper flex items-center justify-center">
                <img src="/gogamers2.webp" className="image-bg" />
                <div className="w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0 absolute z-10"></div>
                <div className="relative z-10">
                  <img src="/gogamers.svg" />
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2>Vaidam</h2>
                <p>
                  Get world-class medical care with Vaidam and your Mastercard®.
                  Enjoy up to <strong>10% OFF</strong> service fees, free second
                  opinions, and concierge support in select countries. Just
                  visit{" "}
                  <a
                    href="https://www.vaidam.com/mastercard-offers"
                    target="_blank"
                  >
                    www.vaidam.com/mastercard-offers
                  </a>{" "}
                  to redeem your benefits.
                </p>
              </div>

              <div className="image-wrapper flex items-center justify-center">
                <img src="/vaidam-2.webp" className="image-bg" />
                <div className="w-full h-full bg-[rgba(0,79,148,0.5)] top-0 left-0 absolute z-10"></div>
                <div className="relative z-10">
                  <img className="w-[230px]" src="/vaidam-logo.webp" />
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2>BICESTER VILLAGE SHOPPING COLLECTION</h2>
                <p>
                  Shop luxury in style with VIP discounts at the Bicester
                  Village Shopping Collection across Europe with your
                  Mastercard. <br />
                  Visit{" "}
                  <a
                    href="https://www.thebicestercollection.com/en/destinations/"
                    target="_blank"
                  >
                    https://www.thebicestercollection.com/en/destinations/
                  </a>{" "}
                  for more.
                </p>
              </div>

              <div className="image-wrapper flex justify-end items-end">
                <img src="/bicester-village.webp" className="image-bg" />
                <div className="relative z-10">
                  <img src="/thriwe-logo.webp" className="max-w-[100px]" />
                </div>
              </div>

              <div>
                <h3>HOW TO USE:</h3>
                <p>
                  Simply visit{" "}
                  <a
                    href="https://www.thebicestercollection.com/en/destinations/"
                    target="_blank"
                  >
                    https://www.thebicestercollection.com/en/destinations/
                  </a>{" "}
                  to avail these offers.
                </p>
              </div>
            </div>

            <div>
              <div>
                <h2>MyUS Premium Membership </h2>
                <p>
                  MyUS Premium Membership Shop from top U.S. brands and ship
                  worldwide with MyUS. Get 2 years of free Premium Membership,
                  up to <strong>30% OFF</strong> shipping, and more. Simply use
                  your Mastercard at checkout:{" "}
                  <a
                    href="https://myus.com/welcome/Mastercardpremium"
                    target="_blank"
                  >
                    myus.com/welcome/Mastercardpremium
                  </a>
                  .
                </p>
              </div>

              <div className="image-wrapper flex items-center justify-center">
                <img src="/myus-2.webp" className="image-bg" />
                <div className="w-full h-full bg-[rgba(0,0,0,0.5)] top-0 left-0 absolute z-10"></div>
                <div className="relative z-10">
                  <img src="/myus.svg" />
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2>Fiit ®</h2>
                <p>
                  Crush your fitness goals with Fiit. Get a 14-day free trial
                  and <strong>25% OFF</strong> your first payment. Visit{" "}
                  <a href="https://getfiit.tv/mastercard" target="_blank">
                    getfiit.tv/mastercard
                  </a>
                  , choose your plan & pay with your Mastercard to unlock your
                  benefits.
                </p>
              </div>

              <div className="image-wrapper">
                <img src="/fiitbg.webp" className="image-bg" />
              </div>
            </div>

            <div>
              <div>
                <h2>Make Learning Fun with Lingokids </h2>
                <p>
                  1 week of complimentary Lingokids Plus access,{" "}
                  <strong>50% OFF</strong> all future monthly subscriptions for
                  life & full access to premium content, even offline.
                </p>
              </div>

              <div className="image-wrapper flex max-lg:flex-col lg:justify-end items-center">
                <img src="/lingokids-2.webp" className="image-bg" />
                <div className="lg:mr-5 relative z-10 flex flex-col items-center">
                  <img
                    className="w-[165px] translate-y-8 z-10"
                    src="/lingokids-logo.webp"
                  />
                  <Promo code="MASTERCARD50" />
                </div>
              </div>

              <div>
                <p>
                  Visit the{" "}
                  <a href="https://lingokids.com/mastercardmea" target="_blank">
                    Lingokids Mastercard page
                  </a>
                  , enter promo code, and click Redeem.
                </p>
              </div>
            </div>

            <div>
              <div>
                <h2>Express VPN</h2>
                <p>
                  Connect instantly to a secure, ultra-fast global server
                  network and browse, stream, and shop online with total peace
                  of mind, all with one tap through ExpressVPN. <br />
                  <strong>Get 30-Days of complimentary trial</strong> from
                  ExpressVPN and enjoy either{" "}
                  <strong>
                    51% off a 12-month plan with 4 extra months complimentary or
                    61% off a 24-month plan with 4 extra months complimentary!
                  </strong>
                </p>
              </div>

              <div>
                <img className="rounded-3xl" src="/expressvpn.webp" />
              </div>

              <div>
                <h3 className="text-lg mt-4 uppercase">How to use:</h3>
                <ul className="text-lg">
                  <li className="!text-lg">
                    Download the ExpressVPN app from{" "}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.expressvpn.vpn&hl=en_IE"
                      target="_blank"
                    >
                      Google Play
                    </a>{" "}
                    or the{" "}
                    <a
                      href="https://apps.apple.com/us/app/expressvpn-fast-secure-vpn/id886492891"
                      target="_blank"
                    >
                      App Store
                    </a>
                  </li>
                  <li className="!text-lg">
                    Visit{" "}
                    <a
                      href="www.expressvpn.com/eg/mastercard-mea"
                      target="_blank"
                    >
                      www.expressvpn.com/eg/mastercard-mea
                    </a>{" "}
                    to activate your 30-day complimentary trial. Pay nothing
                    today, then enjoy 51% off a 12-month plan with 4 extra
                    months complimentary or 61% discount on a 24-month plan
                    including 4 extra complimentary months!
                  </li>
                  <li className="!text-lg">
                    Log in and use your Mastercard card to redeem the discount.
                  </li>
                  <li className="!text-lg">
                    To use the service; tap once to connect to ExpressVPN’s
                    global network of ultra-fast servers across 105 countries.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div ref={peaceRef} data-name="peace" className="content-category">
            <div className="!pb-0 !border-b-0">
              <div>
                <h2>Purchase Protection</h2>
                <p>
                  Automatically protect your purchases from theft or accident
                  for 180 days with Purchase Protection from your Platinum
                  Mastercard®. Visit{" "}
                  <a href="https://mcpeaceofmind.com">mcpeaceofmind.com</a> to
                  claim online.
                </p>
              </div>

              <div>
                <img className="rounded-3xl" src="/purchase-protection.webp" />
              </div>

              <div>
                <h3 className="text-lg mt-4 uppercase">How to use:</h3>
                <p className="text-lg mt-3">
                  Visit{" "}
                  <a href="https://mcpeaceofmind.com/platinum" target="_blank">
                    mcpeaceofmind.com
                  </a>{" "}
                  to claim online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
