import React from 'react';
import { websiteName } from '@/app/config';
import Banner from './Banner';
import Features from './Features';
import Benefits from './Benefits';


export const metadata = {
  title: 'Salary Domiciliation' + websiteName,
  description: 'Simplify Payroll with MyMonty',
};


const Business = () => {

  return (
    <div className='text-white'>
      <Banner />
      <Features />
      <Benefits />
    </div>
  );
};

export default Business;
