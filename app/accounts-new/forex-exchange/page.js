import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/forex-exchange-banner.webp';
import TextBlock from '@/app/components/TextBlock';
import Branches from '@/app/components/Branches';
import ATMs from '@/app/components/ATMs';

export const metadata = {
    title: 'Forex Exchange' + websiteName,
    description: 'Exchange on the go',
};
const page = () => {
    const data = {
        title: 'Exchange on the go',
        subtitle: 'Accounts',
        desc: 'Quick. Fair. Hassle-free.',
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
        <section className='max-lg:py-14 lg:py-28 bg-white'>
            <div className='container text-center'>
                <TextBlock title="Switch Between USD and LBP" description="Get the daily market rate instantly. <br /> No queues. No Waiting. It’s all on your app." center={true} />
                <img src='/switch-between.webp' className='w-full mt-16'/>
            </div>
        </section>

        <section className="bg-white py-28 max-lg:py-14">
            <div className='container'>
                <div className='flex flex-col gap-20'>
                    <div className='flex items-center max-lg:gap-10 lg:gap-32 max-lg:flex-col'>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Fast AND Transparent" description="See exactly what you get before you confirm. Your money, your control." />
                        </div>
                        <div className='w-full'>
                            <img src='/fast-and-transparent.webp' className='max-w-[450px] w-full ml-auto' alt='Forex Image'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center max-lg:gap-10 lg:gap-32 max-lg:flex-col-reverse'>
                        <div className='w-full'>
                            <img src='/safe-and-secure.webp' alt='Statement Image' className='max-w-[450px] w-full'/>
                        </div>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Safe AND Secure" description="All transactions are protected by MyMonty’s top-notch security, so you can exchange with confidence."/>
                        </div>
                        
                        
                    </div>

                    <div className='flex items-center max-lg:gap-10 lg:gap-32 max-lg:flex-col'>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Exchange money like a pro" description="Skip the exchange office and forget asking friends or colleagues for change. Your wallet handles it all." />
                        </div>
                        <div className='w-full'>
                            <img src='/exchange-money.webp' className='max-w-[450px] w-full ml-auto' alt='Forex Image'/>
                        </div>
                        
                    </div>

                </div>
                
            </div>
        </section>
        <section>
            <div className='container text-center lg:mb-28 max-lg:mb-14'>
                <TextBlock buttonColor="dark" center={true} title="Powered by Srour Company for Exchange S.A.R.L." button={true}/>
                <div className='w-full mt-12'>
                    <img src='/powered-by.webp' className='w-full md:w-4/5 mx-auto' alt='Powered by'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default page;
