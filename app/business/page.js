import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import Banner from '../components/Banner';
import Link from 'next/link';
import Image from 'next/image';
import business from '@/public/business/business.webp';
import employeeBenefits from '@/public/business/employee-benefits.webp';
import earlySalary from '@/public/business/early-salary.webp';
import earlySalary2 from '@/public/business/early-salary2.webp';
import Section from './Section';

export const metadata = {
  title: websiteName + 'Business',
  description: '',
};

const data = {
  title: 'MyMonty Better Than a Bank.',
  subtitle: '',
  desc: 'Explore our innovative ways to manage your finances.',
  image: {
    inGrid: true,
    layout: 'half',
    url: business,
  },
  cta: {
    type: 'link',
    link: {
      name: 'Get the app',
      url: '/business#download-now',
    }
  }
}

const Business = () => {
  return (
    <div className='bg-[#091111] text-white'>
      <Banner data={data} theme="dark" />

      <Section />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='relative'>
          <Image alt='Growth Oriented Environmemt' fill placeholder='blur' quality={100} sizes='100vw' className='!relative object-cover aspect-[4/7] md:aspect-auto' src={employeeBenefits} />

          <div className='absolute top-0 flex flex-col justify-center items-center h-full w-full text-white'>
            <div className='container'>
              <div className='flex flex-col items-center gap-10'>
                <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none'>Elevate Your Employee Benefits with Our Upcoming Products</h2>
                <p className='leading-8 mt-4 text-center w-full lg:w-2/3 mx-auto'>Exciting developments are on the horizon. Keep an eye on this space for announcements, sneak peeks, and launch dates for our new suite of financial products.<br />
                  At MyMonty, we're dedicated to continuously improving and expanding our offerings to best serve our employees' needs.</p>
                <button className='mm-button !bg-white !text-black w-max mt-5'>See how to send</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <div className='flex flex-col items-center'>
            <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none'>How Does Early Salary Work?</h2>

            <p className='leading-8 mt-10 text-center w-full lg:w-2/3'>Implementing Early Salary for our employees is simple. Our dedicated sales team can facilitate the integration, ensuring a smooth and secure process that aligns with our payroll system.</p>

            <button className='mm-button !bg-white !text-black w-max mt-5'>Get Started Today!</button>

            <Image alt='Growth Oriented Environmemt' placeholder='blur' className='mt-10' src={earlySalary} />

            <p className='leading-8 mt-10 text-center w-full lg:w-4/5'>By offering Early Salary, we're not just providing a financial service; we're investing in the well-being and satisfaction of our employees. Join us in empowering our workforce to manage their finances more effectively.</p>
          </div>
        </div>
      </section>

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <div className='relative'>
            <Image alt='Growth Oriented Environmemt' fill placeholder='blur' quality={100} sizes='100vw' className='!relative object-cover aspect-[4/7] md:aspect-auto' src={earlySalary2} />
            <div className='absolute top-0 flex flex-col justify-center items-center h-full w-full text-white px-4'>
              <div className='flex flex-col items-center gap-10'>
                <p className='leading-8 mt-4 text-center w-full lg:w-2/3 mx-auto'>To learn more about implementing Early Salary at MyMonty, contact our sales department or explore the resources provided on this platform.</p>
                <button className='mm-button !bg-white !text-black w-max mt-5'>Contact us now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
