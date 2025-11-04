"use client";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
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
                  Use your Mastercard to book your next staycation or vacation on{" "}
                  <a
                    href="https://www.booking.com/index.en.html?aid=2439504"
                    target="_blank"
                  >
                    Booking.com
                  </a>

                   &nbsp; and enjoy up to <strong>7% MONEY BACK</strong> across millions of properties locally and around the world.
                </p>
              </div>

              <div className="image-wrapper flex max-lg:flex-col lg:justify-end items-center">
                <img src="/booking.webp" className="image-bg" />
                {/* <div className='lg:mr-5 relative z-10 flex flex-col items-center'>
                                <img className='w-[165px] translate-y-8 z-10' src='/booking-logo.webp' />
                                <Promo code="MCBKG"/>
                            </div> */}
              </div>

            </div>

            <div>
              <div>
                <h2>AVIS Car Rental</h2>
                <p>
                  Enjoy <strong>20% OFF</strong> your next car rental with Avis. Visit{" "}
                  <a
                    href="https://avisworld.com/mastercardmea"
                    target="_blank"
                  >
                    avisworld.com/mastercardmea
                  </a> and book with your Mastercard. 
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
                  rental with Budget. Visit{" "}
                  <a
                    href="https://budgetinternational.com/mastercard "
                    target="_blank"
                  >
                    www.budgetinternational.com/mastercard 
                  </a>{" "}
                  and book with your Mastercard. 
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
                  Whether you're planning a business trip or a leisurely vacation, <a href="https://rentalcars.com" target="_blank">Rentalcars.com</a> offers a wide selection of vehicles to fit your needs, from luxury cars to people carriers and minivans. With over 60,000 locations in 160 countries, booking your next ride has never been easier.
                </p>
              </div>

              <div className="image-wrapper">
                <img src="/rentalcars.webp" className="image-bg" />
                
              </div>
              <div>
                <h3 className="uppercase">Your Exclusive Benefits:</h3>
                <p> 10% discount when booking your car with Rentalcars.com using your Mastercard®</p>
              </div>
              <div>
                <h3>HOW TO REDEEM:</h3>
                <ul>
                  <li>
                    Visit the Mastercard page on Rentalcars.com by clicking <a href="https://www.rentalcars.com/" target="_blank">here</a>.
                  </li>
                  <li>
                    Search and select your preferred car.
                  </li>
                  <li>Book your ride by paying securely with your Mastercard® at checkout.</li>
                  <li>
                    Enjoy your exclusive discount!
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h2>Priceless Cities</h2>
                <p>
                  Enjoy exclusive access to dining, travel and entertainment experiences all over the world with Priceless Cities offers from Mastercard. Visit <a href="https://priceless.com" target="_blank">
                    Priceless.com
                  </a> to find out more.
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
                  Get <strong>50% OFF</strong> Go Gamers Premium Membership and unlock access to global tournaments like FIFA and League of Legends. Compete in the Mastercard Championship Series with weekly, monthly, and quarterly events, and win prizes like in-game currency and gaming gear. Plus, enjoy expert coaching sessions when you pay with your eligible Mastercard.

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
                <h2>Talabat</h2>
                <p>
                  Order your food and grocery delivery via the Talabat app and receive <strong>20% OFF</strong> on 1 food or grocery delivery order per month when placing the order on the Talabat app and paying with your eligible Mastercard card using the promo code <strong>MASTERCARD</strong>.
                </p>
              </div>

              <div>
                <img src="/talabat.webp" />
                
              </div>
              
              <div>
                <h3>HOW TO REDEEM:</h3>
                <ul>
                  <li>
                    Select the items you wish to purchase.
                  </li>
                  <li>
                    At the checkout page enter the promo code MASTERCARD to enable the 20% discount on 1 order of food and grocery delivery per month.
                  </li>
                 
                </ul>
              </div>
            </div>

            <div>
              <div>
                <h2>Fiit ®</h2>
                <p>
                  Get fit with a <strong>25%</strong> discount on your first Fiit subscription payment when you use your Mastercard <a href="https://getfiit.tv/mastercard" target="_blank">https://getfiit.tv/mastercard</a>. Access over 800 workouts led by world-class trainers across a variety of disciplines from Barre and HIIT to strength training and yoga. After a 14-day free trial, enjoy <strong>25% OFF</strong> your first payment on any monthly or yearly plan with Mastercard.
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
                 Subscribe using your eligible Mastercard through the dedicated Mastercard page and enjoy 1 week free plus <strong>50% OFF</strong> all future monthly subscriptions, forever. Just use promo code <strong>MASTERCARD50</strong> on <a target="_blank" href="https://lingokids.com/mastercardmea">https://lingokids.com/mastercardmea</a> to unlock this deal!
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

              
            </div>

            <div className="!pb-0 !border-b-0">
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
                    to activate your 30-day complimentary trial. Pay nothing today, then enjoy 51% off a 12-month plan with 4 extra months complimentary or 61% discount on a 24-month plan including 4 extra complimentary months!
                  </li>
                  <li className="!text-lg">
                    Log in and use your Mastercard card to redeem the discount.
                  </li>
                  <li className="!text-lg">
                    To use the service; tap once to connect to ExpressVPN’s global network of ultra-fast servers across 105 countries.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div ref={peaceRef} data-name="peace" className="content-category">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
