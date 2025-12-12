import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '@/app/components/Banner';
import banner from '@/public/top-up-banner.webp';
import TextBlock from '@/app/components/TextBlock';
import Branches from '@/app/components/Branches';
import ATMs from '@/app/components/ATMs';

export const metadata = {
    title: 'Top Up' + websiteName,
    description: 'Open your Free MyMonty account',
};
const page = () => {
    const data = {
        title: 'So many options',
        subtitle: 'Accounts',
        desc: 'Out of balance? No problem. There are more ways to top up your wallet than to order lunch.',
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
        <Branches title="Top Up via MyMonty Branch" description="We’d love to meet you! Visit us at:" info="Our staff at the counter are always ready to support you!" />
        <section className='max-lg:py-14 lg:py-28 bg-white'>
            <div className='container text-center'>
                <TextBlock title="Top Up via Agent Partners" description="Cash in anywhere, anytime. <br /> Visit any of the <strong> 1,400+ OMT locations </strong> across Lebanon and top up your wallet in seconds. <br /> Just give the agent your ID transaction number and the cash and watch your balance refresh instantly." center={true} />
                <img src='/top-up-via-agent-partners.webp' className='w-full max-lg:mt-5 lg:mt-16'/>
            </div>
        </section>

        <section className='max-lg:py-5 lg:py-28 bg-white'>
            <div className='container text-center'>
                <TextBlock title="Top Up by Card" description="Add funds to your wallet using any valid card. <br /> Instant. Secure. No hidden fees. <br /> Choose between USD or LBP and get your balance updated in seconds." center={true} />
                <img src='/top-up-by-card.webp' className='w-full max-lg:mt-5 lg:mt-16'/>
            </div>
        </section>
        <ATMs title="MyMonty ATMS" description="MyMonty is there, wherever you need it! Load your wallet without needing an ID or even a card. <br />
Our ATMs are available at the following locations:" bgColor="#2657D4" />

        <section className="bg-white py-28 max-lg:py-14">
            <div className='container'>
                <div className='flex flex-col max-lg:gap-14 lg:gap-32'>
                    <div className='flex items-center max-lg:gap-10 lg:gap-32 max-lg:flex-col'>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Top Up via Integrated ATMs" description="You only need your phone! <br /> No card. No ID. No teller. <br /> Just head to any Fransabank ATM, choose “MyMonty”, and follow the steps. <br /> Cardless deposits. Simple. Fast. Secure. <br />" link="/accounts/top-up" />
                        </div>
                        <div className='w-full'>
                            <img src='/top-up-via-integrated-atms.webp' className='max-w-[450px] w-full lg:ml-auto' alt='Forex Image'/>
                        </div>
                        
                    </div>

                    <div className='flex items-center max-lg:gap-10 lg:gap-32 max-lg:flex-col-reverse'>
                        <div className='w-full'>
                            <img src='/top-up-via-money-request.webp' alt='Statement Image' className='max-w-[450px] w-full'/>
                        </div>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Top Up via Money Request" description="Here’s your modern, polite way to ask for money. <br /> Make a money request to top up your wallet via mobile number or QR code. <br /> Send a payment link via SMS, WhatsApp or QR Code and let someone top up your wallet in seconds. <br /> They click, pay by card on a secure platform, and boom, your balance updates instantly." link="/accounts/top-up"/>
                        </div>
                        
                        
                    </div>

                    <div className='flex items-center max-lg:gap-10 lg:gap-32 max-lg:flex-col'>
                        <div className='w-full'>
                            <TextBlock buttonColor="dark" title="Top Up via QR Code" description="Need to load your wallet on the spot? <br /> Top up instantly from any MyMonty user! <br /> Just let them scan your QR code, enter the amount, and your wallet is updated in seconds! <br />" link="/accounts/top-up" />
                        </div>
                        <div className='w-full'>
                            <img src='/top-up-via-qr-code.webp' className='max-w-[450px] lg:ml-auto w-full' alt='Forex Image'/>
                        </div>
                        
                    </div>

                </div>
                
            </div>
        </section>       
    </>
  )
}

export default page;
