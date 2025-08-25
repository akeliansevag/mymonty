import React from 'react';
import { websiteName } from '@/app/config';
import Banner from './Banner';
import HowTo from './HowTo';
import WhensTheDraw from './WhensTheDraw';
import WhyJoin from './WhyJoin';


export const metadata = {
  title: 'Sign Up & Win' + websiteName,
  description: 'A Kia Sportage or Kia K4',
};


const Business = () => {

  return (
    <div>
      <Banner />
      <HowTo />
      <section className='bg-white relative max-lg:py-16 lg:py-24'>
        {/* <img src='/whybg.webp'  className='absolute left-0 top-0 w-full h-full object-cover'/> */}
        <div className='container relative z-10'>
           <WhyJoin />
           <WhensTheDraw />
        </div>
      </section>
    </div>
  );
};

export default Business;
