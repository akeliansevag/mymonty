import React from 'react';
import Banner from '../components/Banner';
import payroll from '@/public/personal/contact-us.webp';
import PayrollForm from './PayrollForm';
import { websiteName } from '@/app/config';

  export const metadata = {
    title: 'Payroll' + websiteName,
    description: '',
  };

const Payroll = () => {
  return (
    <div>

      <PayrollForm />
    </div>
  );
};

export default Payroll;
