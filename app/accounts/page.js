import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/accounts-banner.webp';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import img2 from '@/public/accounts-section-2.webp';
import Carousel from './Carousel';
import Slider from './Slider';
import DownloadApp from '../components/DownloadApp';
import Link from 'next/link';

export const metadata = {
    title: 'Accounts' + websiteName,
    description: 'Open your Free MyMonty account',
};
const page = () => {
    const data = {
        title: 'Open your Free MyMonty account',
        subtitle: 'Accounts',
        desc: 'Money transfers, E-Services, Payments, Prepaid Cards, Credit Cards, & Salary Advances - All in one app',
        image: {
            inGrid: true,
            layout: 'half',
            url: banner,
        },
        cta: {
            type: 'button',
            button: {
                name: 'Download app'
            }
        }
    };

    const terms = {
        termsAndConditions: false, 
        kfs: '/kfs/Individual-eWallet-Account-KFS.pdf'
    }

    const carouselData = {
        filters: [
            {
                title: 'Top Up'
            },
            {
                title: 'Withdraw'
            }
        ],
        content: [
            {
                title: 'Top Up',
                description: 'Add your cash, in a flash. No hidden fees. Choose your way:',
                button: {
                    text: 'Learn More',
                    url: '/accounts/top-up',
                    modal: false,
                },
                contentImage: '/top-up-carousel-content.webp',
                backgroundImage: '/top-up-carousel.webp'
            },
            {
                title: 'Withdraw',
                description: 'Your money, whenever and wherever you need it. Choose your nearest option:',
                button: {
                    text: 'Learn More',
                    url: '/accounts/withdraw',
                    modal: false,
                },
                contentImage: '/withdraw-carousel-content-2.webp',
                backgroundImage: '/withdraw-carousel.webp'
            },

        ]
    };
  return (
    <>
        <Banner data={data} terms={terms}/>
        <section className="bg-white text-center py-28 max-lg:py-14">
            <div className="container">
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>MULTI-CURRENCY WALLET</h2>
                <p className="leading-8 mt-8">One Wallet, All Your Currencies. <br /> Get your USD, LBP, and EUR wallets instantly as soon as you complete onboarding.</p>
                <Link href="/accounts/multi-currency-wallet">
                    <button className="mm-button mt-8 !text-white">Learn More</button>
                </Link>

                <div className="relative mt-8">
                    <Image src={img2} alt="Girls Looking at the phone" width="2120" height="982" />
                </div>
                
            </div>
            
        </section> 

        <Carousel data={carouselData}/>
        <section className="bg-white py-28 max-lg:py-14">
            <div className='container '>
                <div className='flex flex-col gap-20'>
                    <div className='flex items-center justify-between max-lg:gap-10 lg:gap-52 max-lg:flex-col'>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Forex" description="Exchange on the go. Quick. Transparent. Reliable. Get USD, EUR, and LBP at the daily market rate, anytime and anywhere." link="/accounts/forex-exchange" />
                        </div>
                        <div className='w-full'>
                            <img src='/accounts-forex.webp' className='w-full max-w-[450px] lg:ml-auto' alt='Forex Image'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center justify-between max-lg:gap-10 lg:gap-52 max-lg:flex-col-reverse'>
                        <div className='w-full'>
                            <img src='/accounts-statement.webp' alt='Statement Image' className='w-full max-w-[400px]'/>
                        </div>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Statement of Account" description="Prove you’ve got the funds It only takes a few taps!" link="/accounts/forex-exchange"/>
                        </div>
                        
                        
                    </div>

                    <div className='flex items-center justify-between max-lg:gap-10 lg:gap-52 max-lg:flex-col'>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Pay with QR Code" description="Just Scan & Pay. It’s that simple! MyMonty makes your life easier!" link="/accounts/forex-exchange" />
                        </div>
                        <div className='w-full'>
                            <img src='/accounts-qr.webp' alt='QR Image' className='w-full max-w-[450px] lg:ml-auto' />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>

        <section className="bg-white text-center py-28 max-lg:py-14">
            <div className='container'>
                <TextBlock title="Sign Up on MyMonty" center={true} description="Takes less than making your morning coffee." />    
            </div> 
            <Slider />
            <div className='container'>
                <DownloadApp />
            </div>
                
        </section>
        
        
    </>
  )
}

export default page;
