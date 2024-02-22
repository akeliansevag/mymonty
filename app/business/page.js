import React from 'react';
import { websiteName } from '@/app/config';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import BusinessBanner from '../components/BusinessBanner';

export const metadata = {
  title: websiteName + 'Business',
  description: '',
};


const Business = () => {

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

export default Business;
