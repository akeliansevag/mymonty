import React from "react";
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import Image from 'next/image';
import plasticSurgery1 from '@/public/plastic-surgery-loan-banner.webp';
import plasticSurgery2 from '@/public/personal/plastic-surgery-loan2.webp';
import plasticSurgery3 from '@/public/personal/plastic-surgery-loan3.webp';
import LoanSlider from "../components/LoanSlider";

export const metadata = {
  title: websiteName + 'Plastic Surgery',
  description: '',
};

const data = {
  title: 'Boost your confidence',
  subtitle: 'Plastic Surgery Loan',
  desc: 'Ready to enhance your confidence and transform your appearance? Apply for your plastic surgery loan with MyMonty today and take the first step towards your transformation journey!',
  image: {
    inGrid: false,
    layout: 'half',
    url: plasticSurgery1,
  },
  cta: {
    type: 'button',
    button: {
      name: "I'm interested"
    }
  }
}


const PlasticSurgeryLoan = () => {
  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <div className='flex flex-col md:flex-row md:items-center gap-10 relative'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Why Choose MyMonty for Your Plastic Surgery Loan?</h2>
              <p className='leading-8 mt-4'>At MyMonty, we understand the importance of feeling confident in your own skin. Our plastic surgery loans are tailored to support your journey towards self-confidence and empowerment.</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={plasticSurgery2} alt='Car Loan' placeholder='blur' className='max-md:w-full' />
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

                <h3 className='text-2xl md:text-4xl font-black mt-10'>Drive Away</h3>
                <p className='leading-8 mt-4'>Once approved, funds will be disbursed, putting you on the road towards your dream car</p>
              </div>
            </div>
          </div>

          <Image className='w-full mt-20' src={plasticSurgery3} alt='Car Loan' placeholder='blur' />

          <div className='flex flex-col md:flex-row md:items-center gap-10 relative mt-20'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Eligibility Criteria</h2>



              <p className='leading-8 mt-6'>Meet our credit assessment criteria<br />
                Provide necessary documentation regarding the planned procedure.<br />
                Be a MyMonty for more than 6 months.</p>
              {/* <button className='mm-button mt-14 !px-20'>Apply Now</button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlasticSurgeryLoan;
