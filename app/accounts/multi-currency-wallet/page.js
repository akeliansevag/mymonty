import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/multi-currency-wallet-banner.webp';
import TextBlock from '../../components/TextBlock';
import Image from 'next/image';
import img2 from '@/public/send-receive-multi.webp';

export const metadata = {
    title: 'Multi-Currency Wallet' + websiteName,
    description: 'One Wallet, All Your Currencies',
};
const page = () => {
    const data = {
        title: 'One Wallet, All Your Currencies',
        subtitle: 'Accounts',
        desc: 'Get your USD, LBP and EUR wallets as soon as you complete onboarding.',
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
        kfs: 'KFS-Individual-eWallet-Account-16.7.25.pdf'
    }

  return (
    <>
        <Banner data={data} terms={terms}/>
        <section className="bg-white text-center py-28 max-lg:py-14">
            <div className="container flex flex-col gap-8">
                <TextBlock buttonColor="dark" title="Your Money, Your Way" center={true} description="Stop running to the exchange office or begging for change!
Do it all with MyMonty." />
                
                <div className="relative">
                    <div className='flex gap-10 max-lg:flex-col'>
                        <div className='bg-[#F7F7F7] rounded-2xl p-10 flex flex-col gap-5 w-full'>
                            <div>
                                <svg className='mx-auto' width="67" height="67" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M51.818 16.3639V43.6366C51.818 54.5457 49.0907 57.273 38.1816 57.273H21.818C10.9089 57.273 8.18164 54.5457 8.18164 43.6366V16.3639C8.18164 5.45481 10.9089 2.72754 21.818 2.72754H38.1816C49.0907 2.72754 51.818 5.45481 51.818 16.3639Z" stroke="black" strokeWidth="4.09091" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M35.454 12.2725H24.5449" stroke="black" strokeWidth="4.09091" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M39.4831 28.1515C40.1723 27.4306 40.1723 26.2617 39.4831 25.5407C38.7939 24.8198 37.6768 24.8198 36.9876 25.5407L26.4706 36.5429L23.0125 32.9254C22.3234 32.2045 21.206 32.2045 20.5169 32.9254C19.8277 33.6464 19.8277 34.8152 20.5169 35.5362L25.2228 40.4593C25.912 41.1802 27.0292 41.1802 27.7184 40.4593L39.4831 28.1515Z" fill="#091111"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-balance'>Send & Receive <br /> Money Easily</h3>
                            </div>
                            <p className='text-lg'>
                                Move funds between USD and LBP and EUR easily.
                            </p>
                        </div>

                        <div className='bg-[#F7F7F7] rounded-2xl p-10 flex flex-col gap-5 w-full'>
                            <div>
                                <svg className='mx-auto' width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.75 22.333H27.9167" stroke="#091111" strokeWidth="4.1875" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M58.1596 25.125H50.8943C45.9131 25.125 41.875 28.8745 41.875 33.5C41.875 38.1255 45.9131 41.875 50.8943 41.875H58.1596C58.3925 41.875 58.5086 41.875 58.6069 41.8691C60.1124 41.7773 61.3114 40.664 61.4102 39.2659C61.4167 39.1746 61.4167 39.0666 61.4167 38.8508V28.1492C61.4167 27.9334 61.4167 27.8253 61.4102 27.7341C61.3114 26.3361 60.1124 25.2226 58.6069 25.131C58.5086 25.125 58.3925 25.125 58.1596 25.125Z" stroke="#091111" strokeWidth="4.1875"/>
                                    <path d="M58.526 25.1253C58.3091 19.8985 57.6092 16.6938 55.353 14.4376C52.0825 11.167 46.8183 11.167 36.2904 11.167H27.9154C17.3873 11.167 12.1233 11.167 8.85266 14.4376C5.58203 17.7083 5.58203 22.9723 5.58203 33.5003C5.58203 44.0283 5.58203 49.2925 8.85266 52.5629C12.1233 55.8337 17.3873 55.8337 27.9154 55.8337H36.2904C46.8183 55.8337 52.0825 55.8337 55.353 52.5629C57.6092 50.307 58.3091 47.1022 58.526 41.8753" stroke="#091111" strokeWidth="4.1875"/>
                                    <path d="M50.2266 33.5H50.2502" stroke="#091111" strokeWidth="5.58333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-balance'>Keep <br /> track effortlessly</h3>
                            </div>
                            <p className='text-lg'>
                                Move funds between USD and LBP and EUR easily.
                            </p>
                        </div>

                        <div className='bg-[#F7F7F7] rounded-2xl p-10 flex flex-col gap-5 w-full'>
                            <div>
                                <svg className='mx-auto' width="67" height="67" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.2484 7.46554C44.5935 7.1086 41.0939 7.10449 36.168 7.10449C35.098 7.10449 34.2305 6.23704 34.2305 5.16699C34.2305 4.09695 35.098 3.22949 36.168 3.22949H36.3137C41.0613 3.22944 44.8216 3.22942 47.7646 3.6251C50.7935 4.03229 53.2448 4.89027 55.1782 6.82353C56.9462 8.59167 57.9119 10.2733 58.365 12.8705C58.7724 15.2051 58.7724 18.3536 58.7721 23.0015V23.2503C58.7721 24.3204 57.9046 25.1878 56.8346 25.1878C55.7646 25.1878 54.8971 24.3204 54.8971 23.2503C54.8971 18.2927 54.8896 15.4967 54.5476 13.5366C54.2443 11.7975 53.6964 10.822 52.4381 9.56357C51.3448 8.47028 49.8472 7.81499 47.2484 7.46554Z" fill="#091111"/>
                                    <path d="M7.1055 38.75C7.1055 37.68 6.23804 36.8125 5.168 36.8125C4.09793 36.8125 3.2305 37.68 3.2305 38.75L3.23047 38.9988C3.23034 43.6467 3.23027 46.7953 3.63766 49.1298C4.09083 51.7269 5.0564 53.4086 6.82454 55.1769C8.7578 57.11 11.2093 57.9679 14.238 58.3753C17.181 58.7708 20.9414 58.7708 25.6889 58.7708H25.8346C26.9047 58.7708 27.7721 57.9033 27.7721 56.8333C27.7721 55.7633 26.9047 54.8958 25.8346 54.8958C20.9087 54.8958 17.4091 54.8917 14.7543 54.5347C12.1553 54.1854 10.6579 53.53 9.56457 52.4368C8.30613 51.1784 7.75841 50.2027 7.45497 48.4639C7.11294 46.5036 7.1055 43.7077 7.1055 38.75Z" fill="#091111"/>
                                    <path d="M58.7721 38.75C58.7721 37.68 57.9046 36.8125 56.8346 36.8125C55.7646 36.8125 54.8971 37.68 54.8971 38.75C54.8971 43.7077 54.8896 46.5036 54.5476 48.4639C54.2443 50.2027 53.6964 51.1784 52.4381 52.4368C51.3448 53.53 49.8472 54.1854 47.2484 54.5347C44.5935 54.8917 41.0939 54.8958 36.168 54.8958C35.098 54.8958 34.2305 55.7633 34.2305 56.8333C34.2305 57.9033 35.098 58.7708 36.168 58.7708H36.3137C41.0613 58.7708 44.8216 58.7708 47.7646 58.3753C50.7935 57.9679 53.2448 57.11 55.1782 55.1769C56.9462 53.4086 57.9119 51.7269 58.365 49.1298C58.7724 46.7953 58.7724 43.6467 58.7721 38.9988V38.75Z" fill="#091111"/>
                                    <path d="M25.8346 3.22949H25.6889C20.9414 3.22944 17.181 3.22942 14.238 3.6251C11.2093 4.03229 8.7578 4.89027 6.82454 6.82353C5.0564 8.59167 4.09083 10.2733 3.63766 12.8705C3.23027 15.2051 3.23034 18.3536 3.23047 23.0014L3.2305 23.2503C3.2305 24.3204 4.09793 25.1878 5.168 25.1878C6.23804 25.1878 7.1055 24.3204 7.1055 23.2503C7.1055 18.2927 7.11294 15.4967 7.45497 13.5366C7.75841 11.7975 8.30613 10.822 9.56457 9.56357C10.6579 8.47028 12.1553 7.81499 14.7543 7.46554C17.4091 7.1086 20.9087 7.10449 25.8346 7.10449C26.9047 7.10449 27.7721 6.23704 27.7721 5.16699C27.7721 4.09695 26.9047 3.22949 25.8346 3.22949Z" fill="#091111"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M30.9987 23.8955C27.0751 23.8955 23.8945 27.0761 23.8945 30.9997C23.8945 34.9232 27.0751 38.1038 30.9987 38.1038C34.9222 38.1038 38.1028 34.9232 38.1028 30.9997C38.1028 27.0761 34.9222 23.8955 30.9987 23.8955ZM27.7695 30.9997C27.7695 29.2161 29.2151 27.7705 30.9987 27.7705C32.7822 27.7705 34.2278 29.2161 34.2278 30.9997C34.2278 32.7832 32.7822 34.2288 30.9987 34.2288C29.2151 34.2288 27.7695 32.7832 27.7695 30.9997Z" fill="#091111"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7559 24.4134C17.0367 20.6079 22.6736 16.1455 31.0013 16.1455C39.3289 16.1455 44.966 20.6079 48.2466 24.4134L48.33 24.5101C49.0301 25.3216 49.7501 26.1559 50.2448 27.1559C50.7979 28.2737 51.0221 29.474 51.0221 30.9997C51.0221 32.5254 50.7979 33.7256 50.2448 34.8434C49.7501 35.8434 49.0301 36.6778 48.33 37.4893L48.2466 37.5859C44.966 41.3914 39.3289 45.8538 31.0013 45.8538C22.6736 45.8538 17.0367 41.3914 13.7559 37.5859L13.6726 37.4893C12.9725 36.6778 12.2525 35.8434 11.7578 34.8434C11.2046 33.7256 10.9805 32.5254 10.9805 30.9997C10.9805 29.474 11.2046 28.2737 11.7578 27.1559C12.2525 26.1559 12.9724 25.3216 13.6725 24.5101L13.7559 24.4134ZM31.0013 20.0205C24.2045 20.0205 19.5479 23.6296 16.6908 26.9436C15.8798 27.8844 15.4849 28.3608 15.2309 28.8744C15.0156 29.3094 14.8555 29.8785 14.8555 30.9997C14.8555 32.1208 15.0156 32.6899 15.2309 33.125C15.4849 33.6385 15.8798 34.1149 16.6908 35.0558C19.5479 38.3697 24.2045 41.9788 31.0013 41.9788C37.798 41.9788 42.4547 38.3697 45.3116 35.0558C46.1228 34.1149 46.5175 33.6385 46.7717 33.125C46.9869 32.6899 47.1471 32.1208 47.1471 30.9997C47.1471 29.8785 46.9869 29.3094 46.7717 28.8744C46.5175 28.3608 46.1228 27.8844 45.3116 26.9436C42.4547 23.6296 37.798 20.0205 31.0013 20.0205Z" fill="#091111"/>
                                </svg>

                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-balance'>Safe <br /> And Secure</h3>
                            </div>
                            <p className='text-lg'>
                                Your money is protected, always.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>

        <section className="bg-white text-center py-28 max-lg:py-14">
            <div className="container flex flex-col gap-8">
                <TextBlock buttonColor="dark" title="Send & Receive Money in All Your Currencies" center={true} description="Move funds in USD, LBP, and EUR instantly with zero fees.
Transfer and receive money on the go. Skip extra charges and save time!" />
                
                <div className="relative">
                    <Image src={img2} alt="Girls Looking at the phone" width="2120" height="982" />
                </div>
                
            </div>
            
        </section> 

        <section className="bg-white py-28 max-lg:py-14">
            <div className='container'>
                <div className='flex flex-col gap-20'>
                    <div className='flex items-center max-lg:gap-10 lg:gap-32 max-lg:flex-col'>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Load Your Cards in a Tap" description="Top up your USD and EUR cards directly from your wallets. Funds are added in seconds, so you can spend online or in-store without worry." link="/accounts/forex-exchange" />
                        </div>
                        <div className='w-full'>
                            <img src='/load-your-cards.webp' className='max-w-[575px] w-full' alt='Forex Image'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center max-lg:gap-10 lg:gap-32 max-lg:flex-col-reverse'>
                        <div className='w-full'>
                            <img src='/link-wallet-to-card.webp' alt='Statement Image' className='max-w-[575px] w-full'/>
                        </div>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Link Card to Wallet" description="Activate “Link Card to Wallet” so your card always pulls money directly from your wallet. No more manual top-ups. No more “payment declined.”" link="/accounts/forex-exchange"/>
                        </div>
                        
                        
                    </div>

                </div>
                
            </div>
        </section>        
    </>
  )
}

export default page;
