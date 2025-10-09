import React from 'react';
import { websiteName } from '@/app/config';
import Banner from './Banner';
import Features from './Features';
import Benefits from './Benefits';
import Perks from './Perks';
import ContactUs from './ContactUs';
import GlobalScrollHandler from "./GlobalScrollHandler";
import Form from '../business-wallet/Form';


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
      {/* <ContactUs /> */}
      <section className="max-lg:py-14 lg:py-24 bg-black">
        <Form />
      </section>
    </div>
  );
};

export default Business;
