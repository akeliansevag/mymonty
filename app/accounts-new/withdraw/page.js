import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/withdraw-banner.webp';
import TextBlock from '@/app/components/TextBlock';
import Branches from '@/app/components/Branches';
import ATMs from '@/app/components/ATMs';

export const metadata = {
    title: 'Withdraw' + websiteName,
    description: 'Running out of cash?',
};
const page = () => {
    const data = {
        title: 'Running out of cash?',
        subtitle: 'Accounts',
        desc: 'MyMonty is Everywhere.',
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
        <Branches title="Withdraw via MyMonty Branch" description="We’d love to meet you! Visit us at:" info="Our staff at the counter are always ready to support you!" />
        <section className='max-lg:py-14 lg:py-28 bg-white'>
            <div className='container text-center'>
                <TextBlock title="Withdraw via Agent Partners" description="Cash out anywhere, anytime. <br /> Visit any of the <strong>1,400+ OMT locations </strong> across Lebanon. Give them your transaction ID, grab your cash, and watch your wallet balance adjust instantly." center={true} />
                <img src='/top-up-via-agent-partners.webp' className='w-full max-lg:mt-5 lg:mt-16'/>
            </div>
        </section>

        <ATMs title="Withdraw via MyMonty ATMs" description="MyMonty is there, wherever you need it! <br /> Unload your wallet balance without needing an ID or even a card. <br /> Our ATMs are available at the following locations:" bgColor="#D25788" />

        <section className="bg-white py-28 max-lg:py-14">
            <div className='container'>
                <div className='flex flex-col gap-20'>
                    <div className='flex items-center max-lg:gap-10 lg:gap-32 max-lg:flex-col'>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Withdraw Via Partner ATMs" description="Contactless withdrawals, a little magic that puts cash in your hands. <br /> Head to your nearest Fransabank or BLC ATM, select MyMonty, follow the steps, and voilà, your money is ready. <br /> Don’t forget your phone… who would anyway? " />
                        </div>
                        <div className='w-full'>
                            <img src='/top-up-via-integrated-atms.webp' className='max-w-[400px] w-full ml-auto' alt='Forex Image'/>
                        </div>
                        
                    </div>

                </div>
                
            </div>
        </section>       
    </>
  )
}

export default page;
