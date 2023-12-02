import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import Banner from '../components/Banner';
import Link from 'next/link';
import Image from 'next/image';
import eWallet from '@/public/company/e-wallet-account.png';
import contactUs from '@/public/company/contact-us.png';

export const metadata = {
  title: websiteName + 'Contact Us',
  description: '',
};

const data = {
  title: 'Do you have questions?',
  subtitle: 'Contact Us',
  desc: 'Our team is always ready to assist you or answer your inquiries. Fill out this form to reach us.',
  image:{
    layout: 'half',
    url: contactUs,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download now'
    }
  }
}

const ContactUs = () => {
  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Fill out this form to reach us</h2>
          <div className='flex flex-col gap-10 px-10 py-20 bg-gray-100 mt-20 rounded-[1.875rem]'>
            <div className='flex flex-col md:flex-row gap-10'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='full-name'>Full Name</label>
                <input id='full-name' placeholder='Full Name' className='px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl' />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='email'>Email Address</label>
                <input id='email' placeholder='Email Address' className='px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl' />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-10'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='company-name'>Company Name <span className='text-gray-500'>(Optional)</span></label>
                <input id='company-name' placeholder='Company Name' className='px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl' />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='Profession'>Profession <span className='text-gray-500'>(Optional)</span></label>
                <input id='Profession' placeholder='Profession' className='px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl' />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-10'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='mobile-number'>Mobile Number</label>
                <input id='mobile-number' placeholder='Mobile Number' className='px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl' />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='subject'>Subject</label>
                <input id='subject' placeholder='Subject' className='px-3.5 py-2.5 border-2 w-full border-gray-300 rounded-xl' />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-10'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor='mobile-number'>Your Message</label>
                <textarea id='mobile-number' placeholder='Write your message' className='px-3.5 py-2.5 border-2 w-full h-[200px] border-gray-300 rounded-xl'></textarea>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-10'>
              <div className='flex flex-col gap-1'>
                <input type='submit' className='mm-button !px-20' value='Submit' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
