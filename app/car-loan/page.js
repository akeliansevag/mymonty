"use client"
import React from "react";
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import Banner from '../components/Banner';
import Link from 'next/link';
import Image from 'next/image';
import carLoan from '@/public/personal/car-loan.png';
import carLoan2 from '@/public/personal/car-loan2.png';
import carKey from '@/public/personal/car-key.png';
import competitiveRates from '@/public/personal/competitive-rates.svg';
import simpleApplication from '@/public/personal/simple-application.svg';
import quickApproval from '@/public/personal/quick-approval.svg';
import flexibleRepayment from '@/public/personal/flexible-repayment.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/keyboard';

const metadata = {
  title: websiteName + 'Car Loan',
  description: '',
};

const data = {
  title: 'Drive Your Dreams',
  subtitle: 'Car Loan',
  desc: 'Ready to hit the road in your new car? Apply for your car loan with MyMonty today and experience a hassle-free journey towards owning your dream vehicle!',
  image: {
    layout: 'half',
    url: carKey,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Apply now'
    }
  }
}

const CarLoan = () => {
  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <div className='flex flex-col md:flex-row md:items-center gap-10 relative'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Why Choose MyMonty for Your Car Loan?</h2>
              <p className='leading-8 mt-4'>Experience the road to your dream car with MyMonty! Our commitment lies in turning your car ownership aspirations into reality. From hassle-free car loan solutions to unwavering support, we're by your side at every turn as you embark on the journey to owning your ideal vehicle.</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={carLoan} alt='Car Loan' placeholder='blur' />
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-stretch gap-10 relative mt-20'>
            <div className='md:basis-1/2 lg:basis-1/3 overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='mt-14'>
                  <div className='flex items-center justify-center w-[120px] h-[120px] rounded-full border-4 border-black'>
                    <Image src={competitiveRates} alt='Car Loan' />
                  </div>
                  <h3 className='text-4xl font-bold mt-10'>Competitive Rates</h3>
                  <p>Benefit from competitive interest rates designed to suit your budget</p>
                </div>
              </div>
            </div>

            <div className='md:basis-1/2 lg:basis-1/3 overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='mt-14'>
                  <div className='flex items-center justify-center w-[120px] h-[120px] rounded-full border-4 border-black'>
                    <Image src={simpleApplication} alt='Car Loan' />
                  </div>
                  <h3 className='text-4xl font-bold mt-10'>Simple Application</h3>
                  <p>Our easy-to-use online </p>
                  {/* application process saves you time and effort */}
                </div>
              </div>
            </div>

            <div className='md:basis-1/2 lg:basis-1/3 overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='mt-14'>
                  <div className='flex items-center justify-center w-[120px] h-[120px] rounded-full border-4 border-black'>
                    <Image src={quickApproval} alt='Car Loan' />
                  </div>
                  <h3 className='text-4xl font-bold mt-10'>Quick Approval</h3>
                  <p>Experience swift approval, so you can get behind the wheel sooner</p>
                </div>
              </div>
            </div>

            <div className='md:basis-1/2 lg:basis-1/3 overflow-hidden rounded-[1.875rem] bg-gray-200'>
              <div className='px-10 py-14'>
                <div className='mt-14'>
                  <div className='flex items-center justify-center w-[120px] h-[120px] rounded-full border-4 border-black'>
                    <Image src={flexibleRepayment} alt='Car Loan' />
                  </div>
                  <h3 className='text-4xl font-bold mt-10'>Flexible Repayment</h3>
                  <p>We offer flexible repayment plans tailored to your financial situation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>How to Get Started?</h2>

          <div className='flex flex-col gap-10 mt-20'>
            <div className='flex flex-col md:flex-row md:items-stretch gap-10 relative text-center'>
              <div className='md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                  <div className='flex items-center justify-center w-[50px] h-[50px] md:w-[90px] md:h-[90px] rounded-full border-4 bg-[#2657D4] text-3xl font-bold text-white m-auto text-center'>1</div>
                  <h3 className='text-4xl font-bold mt-10'>Explore Loan Options</h3>
                  <p className='leading-8 mt-4'>Benefit from competitive interest rates designed to suit your budget</p>
                </div>
              </div>

              <div className='md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                  <div className='flex items-center justify-center w-[50px] h-[50px] md:w-[90px] md:h-[90px] rounded-full border-4 bg-[#2657D4] text-3xl font-bold text-white m-auto text-center'>2</div>

                  <h3 className='text-4xl font-bold mt-10'>Apply Online</h3>
                  <p className='leading-8 mt-4'>Complete our straightforward online application with your essential details</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row md:items-stretch gap-10 relative text-center'>
              <div className='md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                  <div className='flex items-center justify-center w-[50px] h-[50px] md:w-[90px] md:h-[90px] rounded-full border-4 bg-[#2657D4] text-3xl font-bold text-white m-auto text-center'>3</div>

                  <h3 className='text-4xl font-bold mt-10'>Review & Approval</h3>
                  <p className='leading-8 mt-4'>Our team will review your application and inform you of the decision</p>
                </div>
              </div>

              <div className='md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                  <div className='flex items-center justify-center w-[50px] h-[50px] md:w-[90px] md:h-[90px] rounded-full border-4 bg-[#2657D4] text-3xl font-bold text-white m-auto text-center'>4</div>

                  <h3 className='text-4xl font-bold mt-10'>Drive Away</h3>
                  <p className='leading-8 mt-4'>Once approved, funds will be disbursed, putting you on the road towards your dream car</p>
                </div>
              </div>
            </div>
          </div>

          <Image className='w-full mt-20' src={carLoan2} alt='Car Loan' placeholder='blur' />

          <div className='flex flex-col md:flex-row md:items-center gap-10 relative mt-20'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Eligibility Criteria</h2>
              <p className='leading-8 mt-4'>Be a Lebanese over 18 years old.<br />
                Have a driving license.<br />
                Have a stable income source.<br />
                Meet our credit assessment criteria.<br />
                Be a MyMonty for more than 6 months</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={carKey} alt='Car Key' placeholder='blur' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarLoan;
