import React from 'react';
import { websiteName } from '@/app/config';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import BusinessBanner from '../components/BusinessBanner';

export const metadata = {
  title: 'Business' + websiteName,
  description: 'MyMonty Business: Tailored digital banking solutions for your enterprise in Lebanon. Streamline payments, manage accounts & grow your business. Get started!',
};


const BusinessOld = () => {

  return (
    <div className='bg-[#091111] text-white'>
      <BusinessBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default BusinessOld;
