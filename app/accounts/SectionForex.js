'use client';
import React from 'react';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';
import Image from 'next/image';
import sectionForexImage1 from '@/public/personal/forex-on-the-go.webp';
// import useGlobalAnimation from '../hooks/useGlobalAnimation';


const SectionForex = () => {
    const howItWorks = [
        {
            title: 'Head to the More tab in the MyMonty app',
        },
        {
            title: 'Tap Exchange and pick your currencies',
        },
        {
            title: 'Enter the amount you want to convert',
        },
        {
            title: 'Confirm, and you\'re all set!',
        }
    ];
    return (
        <div>
            <Section bg="bg-[#F7F7F7]">
                <div id="forex" className="container">
                    <div className="text-center">
                        <TextBlock buttonColor="dark" center={true} subTitle="Quick, Transparent, Reliable" title="Forex on the Go" description="Enjoy real-time currency exchange right in the palm of your hand." button={false} />
                        <Image className="mx-auto mt-10" alt="Forex" src={sectionForexImage1} />
                        <TextBlock buttonColor="dark" center={true} subTitle="Convert & Transfer Instantly" title="Stay in Control" description="Need to transfer money between currencies? From LBP to USD or the other way around, with our Forex Manual Transfers, you can quickly move money between your wallets at real-time exchange rates." button={false} />
                    </div>
                    <div className="my-20 py-20">
                        <TextBlock subTitle="Unlock The Perks" button={false} />
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="bg-white p-8 rounded-2xl flex-1 min-w-[200px]">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.1 5H16.9C14.7469 5 13 6.76367 13 8.9375V43.0625C13 45.2363 14.7469 47 16.9 47H35.1C37.2531 47 39 45.2363 39 43.0625V8.9375C39 6.76367 37.2531 5 35.1 5ZM26 44.375C24.5619 44.375 23.4 43.202 23.4 41.75C23.4 40.298 24.5619 39.125 26 39.125C27.4381 39.125 28.6 40.298 28.6 41.75C28.6 43.202 27.4381 44.375 26 44.375ZM35.1 35.5156C35.1 36.057 34.6612 36.5 34.125 36.5H17.875C17.3387 36.5 16.9 36.057 16.9 35.5156V9.92188C16.9 9.38047 17.3387 8.9375 17.875 8.9375H34.125C34.6612 8.9375 35.1 9.38047 35.1 9.92188V35.5156Z" fill="black"/>
                                </svg>

                                <h2 className="text-[20px] font-[700] mt-8 uppercase">Convenience</h2>
                                <p className="mt-2">No need to visit banks or exchange offices, convert your money directly in the app.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl flex-1 min-w-[200px]">
                                <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.8328 15.5H11.5625C10.8373 15.5 10.25 14.9406 10.25 14.25C10.25 13.5594 10.8373 13 11.5625 13H43.0625C43.7877 13 44.375 12.4406 44.375 11.75C44.375 9.67891 42.6121 8 40.4375 8H10.25C7.3502 8 5 10.2383 5 13V38C5 40.7617 7.3502 43 10.25 43H42.8328C45.1313 43 47 41.318 47 39.25V19.25C47 17.182 45.1313 15.5 42.8328 15.5ZM39.125 31.75C37.6755 31.75 36.5 30.6305 36.5 29.25C36.5 27.8695 37.6755 26.75 39.125 26.75C40.5745 26.75 41.75 27.8695 41.75 29.25C41.75 30.6305 40.5745 31.75 39.125 31.75Z" fill="black"/>
                                </svg>

                                <h2 className="text-[20px] font-[700] mt-8 uppercase">Both Your Wallets, one Place</h2>
                                <p className="mt-2">Hold and manage both LBP and USD currencies all in one place.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl flex-1 min-w-[200px]">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.998 29.9375C42.998 39.3629 35.3893 47 25.999 47C16.6087 47 9 39.3629 9 29.9375C9 21.4062 15.2357 14.3352 23.3838 13.0801V10.25H21.0954C20.556 10.25 20.1147 9.80703 20.1147 9.26562V5.98438C20.1147 5.44297 20.556 5 21.0954 5H30.9025C31.4419 5 31.8832 5.44297 31.8832 5.98438V9.26562C31.8832 9.80703 31.4419 10.25 30.9025 10.25H28.6142V13.0801C31.6789 13.5559 34.474 14.852 36.7623 16.7387L39.0097 14.4828C39.3938 14.0973 40.015 14.0973 40.3991 14.4828L42.7119 16.8043C43.096 17.1898 43.096 17.8133 42.7119 18.1988L40.3092 20.6105L40.2601 20.6598C41.9927 23.3176 42.998 26.5086 42.998 29.9375ZM28.6142 32.8906V20.4629C28.6142 19.9215 28.1729 19.4785 27.6335 19.4785H24.3645C23.8251 19.4785 23.3838 19.9215 23.3838 20.4629V32.8906C23.3838 33.432 23.8251 33.875 24.3645 33.875H27.6335C28.1729 33.875 28.6142 33.432 28.6142 32.8906Z" fill="black"/>
                                </svg>

                                <h2 className="text-[20px] font-[700] mt-8 uppercase">24/7 Access</h2>
                                <p className="mt-2">Exchange currencies anytime, without time restrictions.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl flex-1 min-w-[200px]">
                                <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.6031 11.8646L27.0031 5.3015C26.5279 5.10245 26.0185 5 25.5041 5C24.9896 5 24.4802 5.10245 24.005 5.3015L8.405 11.8646C6.95063 12.4717 6 13.9074 6 15.499C6 31.7838 15.3031 43.0396 23.9969 46.6985C24.9556 47.1005 26.0362 47.1005 26.995 46.6985C33.9581 43.7697 45 33.6543 45 15.499C45 13.9074 44.0494 12.4717 42.6031 11.8646ZM25.5081 41.6121L25.5 10.3551L39.7919 16.3686C39.5238 28.7893 33.1213 37.789 25.5081 41.6121Z" fill="black"/>
                                </svg>

                                <h2 className="text-[20px] font-[700] mt-8 uppercase">Crystal clear</h2>
                                <p className="mt-2">See conversion amounts upfront, with complete transparency and no hidden fees.</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-10 py-10 text-center">
                        <TextBlock buttonColor="dark" center={true} subTitle="Getting Started Is Easy" title="How It Works" button={false} />
                        <div className='max-w-[950px] mx-auto relative'>
                            <>
                                <div className='max-lg:hidden border-t-[2px] left-1/2 -translate-x-1/2 h-[1px] border-dashed absolute top-[43px] w-[80%]'></div>
                                <div className='relative flex max-lg:flex-col max-lg:items-center max-lg:gap-10 text-center w-full'>
                                    {
                                        howItWorks.map((item,index)=>{
                                            return (
                                                <div className='w-1/2 lg:w-1/4' key={index}>
                                                    <div className="flex flex-col gap-3 items-center justify-center">
                                                            <div className='bg-[#F7F7F7] px-5'>
                                                                <div className="text-[#007AFF] font-bold w-[86px] h-[86px] flex border border-[#007AFF] rounded-full justify-center items-center ">
                                                                    {index+1}
                                                                </div>
                                                            </div>
                                                            
                                                        
                                                        <div>{item.title}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                            
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    )
}

export default SectionForex;
