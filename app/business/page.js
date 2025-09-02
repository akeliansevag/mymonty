import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import businessBanner from '@/public/business1/business-banner.webp';
import Link from 'next/link';
import Image from 'next/image';

import Cards from './Cards';
import FAQs from './FAQs';

import effortlessExperience from '@/public/effortless-experience.svg';
import fullControl from '@/public/full-control.svg';
import unwaveringSecurity from '@/public/unwavering-security.svg';
import support from '@/public/support.svg';
import liveTransparency from '@/public/live-transparency.svg';
import continuousInnovation from '@/public/continuous-innovation.svg';


export const metadata = {
  title: 'Business' + websiteName,
  description: 'MyMonty Business: Tailored digital banking solutions for your enterprise in Lebanon. Streamline payments, manage accounts & grow your business. Get started!',
};


const Business = () => {
  const data = {
    title: 'Change the Way You Business',
    desc: 'The digital corporate account that powers your growth.',
    image: {
      inGrid: true,
      layout: 'half',
      url: businessBanner,
    },
    cta: {
      type: 'button',
      button: {
        name: 'Get Started'
      }
    }
  };

  const items = [
    {
      title: 'Effortless Experience',
      description: 'One dashboard, intuitive workflows, zero friction.',
      icon: effortlessExperience,
    },
    {
      title: 'Full Control',
      description: 'Real-time card issuance, spending limits.',
      icon: fullControl,
    },
    {
      title: 'Unwavering Security',
      description: 'Regulatory compliance.',
      icon: unwaveringSecurity,
    },
    {
      title: '24/7 Support',
      description: 'Always-on customer care.',
      icon: support,
    },
    {
      title: 'Live Transparency',
      description: 'One dashboard, intuitive workflows, zero friction.',
      icon: liveTransparency,
    },
    {
      title: 'Continuous Innovation',
      description: 'Evolving features in lending, commerce, and rewards.',
      icon: continuousInnovation,
    },
  ]
    
  return (
    <div className='bg-black text-white'>
      <Banner theme="dark-green" data={data} />

      <section className='text-center my-14 py-14'>
        <div className='container'>
          <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>One Account, All Your Processes</h2>
          <div className='lg:w-1/2 mx-auto'>
            <p className='leading-8 mt-8'>Manage your business financials. Move your money smoothly. All in one place, and on your terms.</p>
            <Link href="/cards" className='mm-button white mt-8 mx-auto'>Contact Us</Link>
          </div>
        </div>
      </section>

      <section className='ml-container-align'>
        <Cards />
      </section>

      <section className='container my-14 py-14 space-y-12 lg:space-y-24'>
        <div className='flex max-lg:flex-col max-lg:gap-4 lg:gap-32 items-center justify-between'>
          <div className='lg:w-1/3 order-2 lg:order-1'>
            <img src='/business1/smarter-cash.webp' />
          </div>

          <div className='lg:w-2/3 order-1 lg:order-2'>
            <h2 className='section-title text-balance uppercase'>Smarter cash AND Currency management</h2>
            <ul className='flex flex-col gap-5 mt-7 list-disc pl-4'>
              <li>Manage transactions seamlessly in both local (LBP) and foreign (USD) currencies.</li>
              <li>Access liquidity efficiently to support cash-intensive operations.</li>
              <li>Process payroll, reimbursements, and supplier payments with ease.</li>
              <li>Optimize cash flow and enhance overall financial operations.</li>
            </ul>
          </div>
        </div>

        <div className='flex max-lg:flex-col max-lg:gap-4 lg:gap-32 items-center justify-between'>
          <div className='lg:w-2/3 order-1 lg:order-2'>
            <h2 className='section-title text-balance uppercase'>Simpler AND faster business operations</h2>
            <ul className='flex flex-col gap-5 mt-7 list-disc pl-4'>
              <li>Simplifies accounting, tax reporting, and auditing.</li>
              <li>Enables clearer financial tracking and transparency.</li>
              <li>Reduces reliance on traditional banking hours or locations.</li>
              <li>Saves time by automating routine payments (like salaries).</li>
              <li>Reduces errors and ensure timely disbursements.</li>
            </ul>
          </div>
          <div className='lg:w-1/3 order-1 lg:order-2'>
            <img src='/business1/simpler-and-faster.webp' />
          </div>
        </div>

        <div className='flex max-lg:flex-col max-lg:gap-4 lg:gap-32 items-center justify-between'>
          <div className='lg:w-1/3 order-2 lg:order-1'>
            <img src='/business1/secure-and-regulated.webp' />
          </div>

          <div className='lg:w-2/3 order-1 lg:order-2'>
            <h2 className='section-title text-balance uppercase'>Secure & Regulated</h2>
            <p className='mt-7'>Monty Finance is a licensed financial institution regulated by Banque du Liban, so your funds are always protected by law.</p>
            
            <h2 className='section-title text-balance uppercase mt-14'>24/7 Customer Support</h2>
            <p className='mt-7'>Need help? We're right here, anytime, to answer your questions and sort things out for you quickly.</p>
          </div>
        </div>
      </section>

      <section className='my-24 py-24 bg-[#0A0C0C]'>
        <div className='container text-center'>
          <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>MyMonty Business Account</h2>
          <Link href="/cards" className='mm-button white mt-8 mx-auto'>Start Your Business Account</Link>

          <div className='grid max-lg:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-12'>
            {items.map((item, index)=>{
              return (
                <div className='flex flex-col justify-center items-center gap-2 bg-[#1C1F21] rounded-3xl px-8 py-12'>
                  <Image src={item.icon} alt={item.title} width='35' height='35' />
                  <h2 className='text-2xl font-black uppercase'>{ item.title }</h2>
                  <p className='lg:w-1/2 text-white/70' dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      <section className="py-24 ">
        <FAQs />
      </section>
    </div>
  );
};

export default Business;
