import React from 'react';
import { websiteName } from '@/app/config';
import Banner from './Banner';
import Features from './Features';
import Benefits from './Benefits';
import Perks from './Perks';
import ContactUs from './ContactUs';
import GlobalScrollHandler from "./GlobalScrollHandler";


export const metadata = {
  title: 'Salary Domiciliation' + websiteName,
  description: 'Simplify Payroll with MyMonty',
};


const Business = () => {

  return (
    <div className='text-white'>
      <GlobalScrollHandler />
      <Banner />
      <Features />
      <Benefits />
      <Perks />
      <ContactUs />
    </div>
  );
};

export default Business;
