import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import Banner from '../components/Banner';
import Image from 'next/image';
import business from '@/public/business/business.webp';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

export const metadata = {
  title: websiteName + 'Business',
  description: '',
};

const data = {
  title: 'MyMonty Better Than a Bank.',
  subtitle: '',
  desc: 'Explore our innovative ways to manage your finances.',
  image: {
    inGrid: true,
    layout: 'half',
    url: business,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Get the app',
    }
  }
}

const Business = () => {

  return (
    <div className='bg-[#091111] text-white'>
      <Banner data={data} theme="dark" salaryForm={false} />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Business;
