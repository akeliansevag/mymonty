import React from 'react';
import Image from 'next/image';
import { websiteName } from '@/app/config';
import banner from '@/public/khoury-home-banner.webp';
import bannerMobile from '@/public/khoury-banner-mobile.webp';
import TextBlock from '../components/TextBlock';
import santa1 from '@/public/santa-1.webp';
import santa2 from '@/public/santa-2.webp';
import whiteCard from '@/public/white-card.webp';
import plexiQR from '@/public/plexi-qr.webp';
import christmasBG from '@/public/christmas-bg.webp';
import mobile from '@/public/khoury-mobile.webp';
import santa from '@/public/santa-kids.webp';

export const metadata = {
    title: websiteName + 'Khoury Home',
    description: '',
};


const KhouryHome = () => {
  
    return (
        <>
            <section className="bg-black relative text-white">
                <Image className="w-full max-md:hidden" alt="Santa" src={banner} placeholder='blur' quality={100} />
                <Image className="w-full md:hidden" alt="Santa" src={bannerMobile} placeholder='blur' quality={100} />
                <div className="absolute bottom-6 w-full max-md:px-4 px-12 flex justify-between items-center gap-2 max-md:text-xs text-base">
                    <div>
                        <p>* <a className="underline underline-offset-4" href="/khoury-home/terms-and-conditions">Terms and conditions</a> apply</p>
                    </div>
                    <div>
                     <p>Monty Finance S.A.L.</p>
                    </div>
                </div>
            </section> 
            <section className="max-lg:py-10 py-24">
                <div className="container text-center">
                    <TextBlock title="The ultimate Christmas offer" description='This holiday season, MyMonty and Khoury Home are here to bring you an unbeatable Christmas shopping experience with up to 20% OFF your favorite products!' center={true}/>
                    <p className="mt-5">*<a href="/khoury-home/terms-and-conditions" className="underline blue-text">Terms and conditions</a> apply.</p>
                    <div className="mt-8 grid grid-cols-2 max-lg:gap-4 lg:gap-8 max-w-[720px] mx-auto">
                        <Image alt="Santa" src={santa1} placeholder='blur' quality={100} />
                        <Image alt="Santa" src={santa2} placeholder='blur' quality={100} />
                    </div>
                    
                </div>
            </section>
            
            <section>
                <div className="container">
                    <div className="text-center mb-14">
                        <TextBlock title="HOW IT WORKS" center={true}/>
                    </div>
                </div>
                <div className="w-full bg-[#E1D0D0]/10 py-20">
                    <div className="container">
                        <div>
                            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.32C0 5.51585 5.51585 0 12.32 0H77.68C84.4842 0 90 5.51585 90 12.32V77.68C90 84.4842 84.4841 90 77.68 90H12.32C5.51585 90 0 84.4841 0 77.68V12.32ZM29.0232 27H19V62.2436H29.0232V27ZM48.7965 32.7868C51.4194 27.7391 56.395 27 59.694 27L59.685 27.018C69.3747 27.018 71.9977 34.7518 71.9977 43.4951V62.2616H61.9745V43.6934C61.9745 38.9792 60.5593 35.2836 56.1877 35.2836C51.816 35.2836 50.473 39.1144 50.473 43.7565V62.2526H40.5219V43.6844C40.5219 38.9702 39.1788 35.2746 34.7351 35.2746C33.6715 35.2746 32.8783 35.5089 32.3555 35.7613V28.9019C34.041 27.7211 35.8798 27 38.2324 27C43.4784 27 47.0478 29.2895 48.7965 32.7868Z" fill="black"/>
                            </svg>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-10 mt-8">
                            <div className="md:pr-20">
                                <TextBlock title="IF you’re a mymonty user" description="Pay using MyMonty card or the QR code and get 10% discount on Khoury Home products and 20% discount on La Maison products." />
                            </div>
                            <div className="bg-[#E8A600] bg-opacity-[8%] rounded-[30px] max-md:px-8 px-14 py-16">
                                <Image className="mx-auto" alt="Virtual Card" src={whiteCard} placeholder='blur' quality={100} />
                                <h4 className="uppercase font-[900] text-center text-[20px] mt-6">Pay using mymonty card</h4>
                            </div>
                            <div className="bg-[#F37E69] bg-opacity-[8%] rounded-[30px] max-md:px-12 px-28 py-16">
                                <Image className="mx-auto" alt="Plexi QR" src={plexiQR} placeholder='blur' quality={100} />
                                <h4 className="uppercase font-[900] text-center text-[20px] mt-6">Pay by scanning qr code</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            <section className="relative w-full pt-14 bg-red-800">
                <Image className="absolute w-full h-full object-cover top-0 left-0 z-0" alt="Virtual Card" src={christmasBG} placeholder='blur' quality={100} />
                <div className="container relative z-10">
                    <svg width="111" height="109" viewBox="0 0 111 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 21.32C11 14.5158 16.5159 9 23.32 9H88.68C95.4842 9 101 14.5159 101 21.32V86.68C101 93.4842 95.4841 99 88.68 99H23.32C16.5158 99 11 93.4841 11 86.68V21.32ZM40.0232 36H30V71.2436H40.0232V36ZM59.7965 41.7868C62.4194 36.7391 67.395 36 70.694 36L70.685 36.018C80.3747 36.018 82.9977 43.7518 82.9977 52.4951V71.2616H72.9745V52.6934C72.9745 47.9792 71.5593 44.2836 67.1877 44.2836C62.816 44.2836 61.473 48.1144 61.473 52.7565V71.2526H51.5219V52.6844C51.5219 47.9702 50.1788 44.2746 45.7351 44.2746C44.6715 44.2746 43.8783 44.5089 43.3555 44.7613V37.9019C45.041 36.7211 46.8798 36 49.2324 36C54.4784 36 58.0478 38.2895 59.7965 41.7868Z" fill="white"/>
                        <path d="M83 28L106 5" stroke="white" stroke-width="9" stroke-linecap="round"/>
                        <path d="M5 104.5L26 84" stroke="white" stroke-width="9" stroke-linecap="round"/>
                    </svg>
                    <div className="grid lg:grid-cols-2 mt-8 max-lg:gap-10 gap-36">
                        <div className="text-white">
                            <TextBlock title="IF you’re Not a mymonty user" description="Visit MyMonty booth at Khoury Home Dora or Ghazir, and MyMonty team will help you download the app and set up an account to benefit from the offer. <br /><br /> In other branches where our staff is not present, you can reach MyMonty’s 24/7 customer support team by calling <a style='text-decoration:underline;' href='tel:+9611734020'>01-734020</a> or via WhatsApp at <a style='text-decoration:underline;' href='tel:+96171871871'>71-871871</a>, Monday to Friday from 9 AM to 5 PM." />
                        </div>
                        <div>
                            <Image className="max-lg:mx-auto" alt="Plexi QR" src={mobile} placeholder='blur' quality={100} />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="max-lg:py-10 py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 items-center gap-10">
                        <div>
                            <TextBlock title="Don’t miss out!" description="Get up to 20% OFF with MyMonty and make this holiday season unforgettable for you and your loved ones!" buttonColor="dark" button={true}/>
                            <p className="mt-10 max-lg:mb-10">*<a href="/khoury-home/terms-and-conditions" className="underline blue-text">Terms and conditions</a> apply.</p>
                        </div>
                        <div>
                            <Image className="max-lg:mx-auto" alt="Santa" src={santa} placeholder='blur' quality={100} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KhouryHome  ;
