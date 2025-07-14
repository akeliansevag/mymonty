import React from 'react';
import Banner from '../components/Banner';
import payroll from '@/public/personal/contact-us.webp';
import PayrollForm from './PayrollForm';
import Head from 'next/head';

const Payroll = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://mymonty.com.lb/payroll/" />
      </Head>
      <PayrollForm />
    </div>
  );
};

export default Payroll;
