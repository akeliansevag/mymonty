import React from "react";
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import Image from 'next/image';
import student1 from '@/public/student-loan-banner.webp';
import student2 from '@/public/personal/student-loan2.webp';
import student3 from '@/public/personal/student-loan3.webp';
import LoanSlider from "../components/LoanSlider";

import Head from 'next/head';

export const metadata = {
  title: websiteName + 'Student Loan',
  description: '',
};

const data = {
  title: 'Invest in Your Future',
  subtitle: 'Student Loan',
  desc: 'At MyMonty, we\'re dedicated to empowering your educational journey. Trust us to support your academic aspirations with our tailored and supportive student loan solutions.',
  image: {
    inGrid: false,
    layout: 'half',
    url: student1,
  },
  comingSoon: true,
  cta: {
    type: 'button',
    button: {
      name: "I'm interested"
    }
  }
}



const StudentLoan = () => {
  return (
    <div>

      <Head>
        <link rel="canonical" href="https://mymonty.com.lb/student-loan/" />
      </Head>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <div className='flex flex-col md:flex-row md:items-center gap-10 relative'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Why Choose MyMonty for Your Student Loan?</h2>
              <p className='leading-8 mt-4'>At MyMonty, we understand the importance of education in shaping your future. Our student loan options are tailored to support your academic journey, ensuring financial ease and peace of mind as you pursue your educational goals.</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={student2} alt='Car Loan' placeholder='blur' className='max-md:w-full' width='700' height='732' />
            </div>
          </div>

          <LoanSlider />
        </div>
      </section>

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>How to Get Started?</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 text-center'>
            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='flex items-center justify-center w-[50px] h-[50px] md:w-[90px] md:h-[90px] rounded-full border-4 bg-[#2657D4] text-3xl font-black text-white m-auto text-center'>1</div>
                <h3 className='text-2xl md:text-4xl font-black mt-10'>Explore Loan Options</h3>
                <p className='leading-8 mt-4'>Benefit from competitive interest rates designed to suit your budget</p>
              </div>
            </div>

            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='flex items-center justify-center w-[50px] h-[50px] md:w-[90px] md:h-[90px] rounded-full border-4 bg-[#2657D4] text-3xl font-black text-white m-auto text-center'>2</div>

                <h3 className='text-2xl md:text-4xl font-black mt-10'>Apply Online</h3>
                <p className='leading-8 mt-4'>Complete our straightforward online application with your essential details</p>
              </div>
            </div>

            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='flex items-center justify-center w-[50px] h-[50px] md:w-[90px] md:h-[90px] rounded-full border-4 bg-[#2657D4] text-3xl font-black text-white m-auto text-center'>3</div>

                <h3 className='text-2xl md:text-4xl font-black mt-10'>Review & Approval</h3>
                <p className='leading-8 mt-4'>Our team will review your application and inform you of the decision</p>
              </div>
            </div>

            <div className='overflow-hidden rounded-[1.875rem] bg-gray-100'>
              <div className='px-10 py-14'>
                <div className='flex items-center justify-center w-[50px] h-[50px] md:w-[90px] md:h-[90px] rounded-full border-4 bg-[#2657D4] text-3xl font-black text-white m-auto text-center'>4</div>

                <h3 className='text-2xl md:text-4xl font-black mt-10'>Educational Pursuit</h3>
                <p className='leading-8 mt-4'>Upon approval, funds will be disbursed, opening the door for you to pursue your academic dreams</p>
              </div>
            </div>
          </div>

          <Image className='w-full mt-20' src={student3} alt='Car Loan' placeholder='blur' width='2120' height='896' />

          <div className='flex flex-col md:flex-row md:items-center gap-10 relative mt-20'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Eligibility Criteria</h2>

              <p className='leading-8 mt-6'>Be enrolled in an accredited educational institution.<br />
                Provide necessary documentation.<br />
                Have a stable income source.<br />
                Meet our credit assessment criteria.<br />
                Be an active MyMonty user for over 6 months.</p>
              {/* <button className='mm-button mt-14 !px-20'>Apply Now</button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLoan;
