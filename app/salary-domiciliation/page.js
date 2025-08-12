import React from 'react';
import { websiteName } from '@/app/config';
import Banner from './Banner';
import Features from './Features';


export const metadata = {
  title: 'Salary Domiciliation' + websiteName,
  description: 'Simplify Payroll with MyMonty',
};


const Business = () => {

  return (
    <div className='bg-[#091111] text-white'>
      <Banner />
      <Features />
    </div>
  );
};

export default Business;
