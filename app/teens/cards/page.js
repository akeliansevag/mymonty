import React from 'react'
import { websiteName } from '@/app/config';
import Banner from './Banner';
import AnimationSection from './AnimationSection';
import SectionTwo from './SectionTwo';
import Boxes1 from './Boxes1';
import Slider from './Slider';
import Faqs from './Faqs';
import SectionOne from './SectionOne';
import Boxes from './Boxes';

export const metadata = {
    title: 'Cards | Teens' + websiteName,
    description: '',
};



const standardImages = [
  "standard-1",
  "standard-2",
];

const platinumImages = [
  "platinum-1",
  "platinum-2",
  "platinum-3",
  "platinum-4",
];

const faqData = [
  {
    question: 'How do I open a MyMonty Business account?',
    answer: 'How do I open a MyMonty Business account'
  },
  {
    question: 'Am I eligible for a MyMonty Business account?',
    answer: 'How do I open a MyMonty Business account'
  },
  {
    question: 'Is MyMonty Business account the right choice for my business?',
    answer: 'How do I open a MyMonty Business account'
  }
];

const Teens = () => {

    


    return (
        <>
            <Banner />

            <SectionOne />

            <Boxes />

            <AnimationSection />

            <section className='relative py-20 overflow-x-hidden'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase'>The Teen Prepaid Card Your <span className='text-[#2657D4]'>Teen</span> Will Love!</h2>
                        <p className='text-xl mt-8'>The Teen Prepaid Card Your Teen Will Love!</p>
                        <button className='mm-button mt-8'>Get The App</button>
                    </div>
                    
                    <div className="grid max-lg:grid-cols-1 lg:grid-cols-3 gap-5 mt-10 text-center">
                        <div className='text-center border-[6px] border-white shadow-md bg-[#F7F7F7] rounded-3xl py-8 px-4'>
                            <h2 className="smaller-title">Top up anytime from your MyMonty wallet.</h2>
                            <img className="w-full mt-20" src="/top-up-anytime.webp" alt="Top up" width="100%" height="100%" />
                        </div>
                        <div className='text-center border-[6px] border-white shadow-md bg-[#F7F7F7] rounded-3xl py-8 px-4'>
                            <h2 className="smaller-title">Track spending with live balance and history.</h2>
                            <img className="w-full mt-20" src="/track-spending.webp" alt="Top up" width="100%" height="100%" />
                        </div>
                        <div className='text-center border-[6px] border-white shadow-md bg-[#F7F7F7] rounded-3xl py-8 px-4'>
                            <h2 className="smaller-title">Support smart habits by loading pocket money on a schedule.</h2>
                            <img className="w-full mt-20" src="/support-smart-habits.webp" alt="Support smart habits" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </section>

            <Boxes1 />

            <section className='relative py-20 overflow-x-hidden'>
                <div className='container'>
                    <div className='flex flex-col md:flex-row md:items-center text-start gap-10 md:gap-60 relative'>
                        <div className='md:w-1/2'>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-[#483EB2]'>Fees & limits</h2>
                            <p className='leading-8 mt-4'>Teen card fees and limits are the same as MyMonty physical prepaid cards.</p>
                            <button className='mm-button !bg-[#483EB2] mt-8'>View Fees & Limits</button>
                        </div>
                        <div className='md:w-1/2'>
                            <img className="w-full mt-20" src="/fees-and-limits.webp" alt="Fees And Limits" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative py-20 bg-[#ECE2F5] overflow-x-hidden'>
                <div className='container'>
                    <h2 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-none text-center uppercase'>Designs & tiers</h2>
                
                    <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-5 mt-10 text-center">
                        <div className='text-center border-[6px] border-[#F7F7F7] shadow-md bg-white rounded-3xl py-16 px-8 md:px-24'>
                            <h2 className="smaller-title">Standard</h2>
                            <p className="text-xl mt-4 text-center md:px-16">Everything your teen needs to get started.</p>
                            <Slider images={standardImages} />
                        </div>
                        <div className='text-center border-[6px] border-[#F7F7F7] shadow-md bg-white rounded-3xl py-16 px-8 md:px-24'>
                            <h2 className="smaller-title">Platinum</h2>
                            <p className="text-xl mt-4 text-center md:px-16">Upgraded look and feel. Pick the style that fits your teen.</p>
                            <Slider images={platinumImages} />
                        </div>
                    </div>
                </div>
            </section>
        
            <Faqs />

            <section className='relative py-20 overflow-x-hidden'>
                <div className='container'>
                    <div className='flex flex-col md:flex-row md:items-center text-start gap-10 md:gap-60 relative'>
                        <div className='md:w-1/2'>
                            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Ready to start?</h2>
                            <p className='leading-8 mt-4'>Set your teen up for smart spending with your guidance and full visibility.</p>
                            <button className='mm-button !bg-[#2657D4] mt-8'>Get A Teen Card</button>
                            <button className='mm-button mt-8 ml-4'>Download MyMonty</button>
                        </div>
                        <div className='md:w-1/2'>
                            <img className="w-full" src="/ready-to-start.webp" alt="Ready to Start" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teens;
