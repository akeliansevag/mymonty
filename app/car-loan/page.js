import React from "react";
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import Image from 'next/image';
import carKey from '@/public/personal/car-loan-banner.webp';
import sectionFourImage from '@/public/personal/your-dream-car.webp';
import TextBlock from '../components/TextBlock';
import Section from '@/app/components/Section';
import Contact from './Contact';

export const metadata = {
  title: websiteName + 'Car Loan',
  description: '',
};

const data = {
  title: 'Dream It, Drive It with MyMonty',
  subtitle: 'Loans',
  desc: 'Apply in minutes, get approved fast, and drive away in a brand-new car',
  image: {
    inGrid: true,
    layout: 'half',
    url: carKey,
  },
  cta: {
    type: 'button',
    button: {
      name: "Download App"
    }
  }
}

const CarLoan = () => {
  return (
    <div>
      <Banner data={data} />

      <section className="py-10 lg:py-20">
        <div className="container text-center">
          <TextBlock center={true} title="Simple, fast, and secure car loan from the app you trust." description="" />

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col justify-center center bg-[#F7F7F7] py-12 p-4 lg:p-12 rounded-3xl text-center h-full">
                <img src="/loan-amount.svg" className="flex-shrink-0 mx-auto" alt="" width="50" height="50" />
                <h2 className="uppercase font-black text-2xl leading-none mt-6">Loan Amount</h2>
                <p>From $5,000 to $25,000</p>
              </div>
              <div className="flex flex-col justify-center center bg-[#F7F7F7] py-12 p-4 lg:p-12 rounded-3xl text-center h-full">
                <img src="/all-risk-insurance.svg" className="flex-shrink-0 mx-auto" alt="" width="50" height="50" />
                <h2 className="uppercase font-black text-2xl leading-none mt-6">All-Risk Insurance & Life Insurance Included</h2>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-[#F7F7F7] pt-12 p-4 lg:pt-12 pb-0 rounded-3xl text-center h-full">
              <h2 className="uppercase font-black text-2xl leading-none">Domiciliate Your Salary</h2>
              <img src="/personal/domiciliate-your-salary.webp" className="w-1/2 lg:w-full mx-auto mt-12" alt="" width="50" height="50" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col justify-center center bg-[#F7F7F7] py-12 p-4 lg:p-12 rounded-3xl text-center h-full">
                <img src="/flexible-tenure.svg" className="flex-shrink-0 mx-auto" alt="" width="50" height="50" />
                <h2 className="uppercase font-black text-2xl leading-none mt-6">Flexible Tenure</h2>
                <p>1 to 4 years</p>
              </div>
              <div className="flex flex-col justify-center center bg-[#F7F7F7] py-12 p-4 lg:p-12 rounded-3xl text-center h-full">
                <img src="/transparent-terms.svg" className="flex-shrink-0 mx-auto" alt="" width="50" height="50" />
                <h2 className="uppercase font-black text-2xl leading-none mt-6">Transparent Terms of services, Quick Approvals</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='lg:py-24 max-lg:py-10 bg-black text-white relative'>
        <div className='container'>
          <div className="flex max-lg:flex-col lg:justify-between items-center gap-12 lg:gap-44">
            <div className='lg:w-1/2 flex flex-col gap-10'>
              <div className="md:max-w-full lg:max-w-[45vw] fhd:max-w-[35vw]">
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Who Can Apply?</h2>
                <p className='leading-8 mt-8'>You're eligible if you:</p>

                <ul className='font-bold flex flex-col lg:gap-10 max-lg:gap-3 mt-12'>
                  <li className='flex gap-2'>
                    <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>              
                    Are a Lebanese Citizen
                  </li>
                  <li className='flex gap-2'>
                    <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>              
                    Are aged 21–64 at loan maturity
                  </li>
                  <li className='flex gap-2'>
                    <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>              
                    Have at least 3 years of work experience
                  </li>
                  <li className='flex gap-2'>
                    <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>              
                    Hold a valid driving license for 3+ years
                  </li>
                  <li className='flex gap-2'>
                    <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>              
                    Earn a net monthly income of $1,000+ (single) or $1,500+ (married)
                  </li>strokeLinecap
                  <li className='flex gap-2'>
                    <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>              
                    Have received your salary via Monty Finance SAL for at least 10 consecutive months
                  </li>
                  <li className='flex gap-2'>
                    <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>              
                    Spent minimum 1 year at your current job
                  </li>
                </ul>
              </div>
            </div>
            <div className='lg:w-1/2'>
              <img className='w-fll rounded-3xl' src='/personal/who-can-apply.webp'/>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className='max-w-[1060px] mx-auto w-full'>
          <div className='container text-center'>
            <TextBlock buttonColor="dark" center={true} title="Your dream car is now just a few steps away." description="Car loans are finally accessible with MyMonty. Whether you’re looking to fund your very first car or upgrade your current ride, prefer a sleek sedan or a bold SUV, MyMonty Car Loans are fast, fully digital, and designed to make your life easier." button={true} />
            <Image className='mx-auto mt-14' alt="Wallets" src={sectionFourImage} />
          </div>
        </div>
      </Section>

      <Contact />
    </div>
  );
};

export default CarLoan;
