import React from 'react';
import { websiteName } from '@/app/config';
import banner from '@/public/montycare-banner.webp';
import Banner from '../components/Banner';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import Contact from './Contact';
import BeforeAfterSlider from './BeforeAfterSlider';
import FaqTwoColumns from './FaqTwoColumns';


export const metadata = {
  title: 'Montycare' + websiteName,
  description: '',
};


const data = {
  title: 'Because <span class="text-[#E2282B]">Care</span> Cannot Wait.',
  subtitle: 'Loans',
  desc: 'Your gateway to simple, flexible, and affordable wellness financing; designed for both users and partner clinics.',
  image: {
    inGrid: true,
    layout: 'half',
    url: banner,
  },
  cta: false
}



const page = () => {
  return (
    <div>
      <Banner data={data} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      
      <BeforeAfterSlider
        beforeSrc="/before.webp"
        afterSrc="/after.webp"
        className='!h-[80vh]'
      /> 
      <Contact />
      <section className='bg-[#f7f7f7] max-lg:py-14 lg:py-28'>
        <div className='container'>
          <FaqTwoColumns />
        </div>
      </section>
    </div>
  )
}

export default page
