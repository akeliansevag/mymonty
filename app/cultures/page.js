import React from "react";
import { websiteName } from "@/app/config";
import Banner from "../components/Banner";
import Image from 'next/image';
import diversity from '@/public/personal/diversity-and-inclusion.webp';
import innovation from '@/public/personal/innovation.webp';
import dedication from '@/public/personal/dedication-and-loyalty.webp';
import integrity from '@/public/personal/integrity.webp';
import sustainable from '@/public/personal/sustainable-development.webp';
import cultures from '@/public/personal/cultures.webp';

export const metadata = {
  title: websiteName + "Cultures",
  description: "",
};

const data = {
  title: 'Our Culture, Our Foundation',
  subtitle: 'Culture',
  desc: 'Our devoted, agile, and multicultural team is committed to go the extra mile in digitizing your future and making your life easier',
  image: {
    inGrid: true,
    layout: 'half',
    url: cultures,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download app'
    }
  }
}

const Cultures = () => {
  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <div className='flex flex-col md:flex-row md:items-center gap-10 relative'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Diversity and Inclusion</h2>
              <p className='leading-8 mt-4'>We sincerely believe in fostering an environment that promotes inclusiveness starting with our employees and moving to the entire financial ecosystem. We are committed to creating a world where nobody is left behind.</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={diversity} alt='Diversity and Inclusion' placeholder='blur' />
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-10 mt-40 relative'>
            <div className='md:w-1/2 order-last md:order-first'>
              <Image src={innovation} alt='Innovation' placeholder='blur' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Innovation</h2>
              <p className='leading-8 mt-4'>We take risks, encourage innovation, act, and learn from our experiences. Our staff members are encouraged to try new things and are given the freedom to fail. We see skill mastery as a starting point rather than a finish line. We think that working hard to accomplish our goals will get us farther than we had thought. Finally, we believe in changing the world one step at a time and work hard to achieve it creatively while having fun along the way.</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-10 mt-40 relative'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Dedication & Loyalty</h2>
              <p className='leading-8 mt-4'>We strive to do our duties to the best of our abilities while combining excellence and professionalism. We also never cease exploring the boundaries of what is possible.<br />
                What genuinely makes us happy is seeing our team grow as a result of their enthusiasm for what they do, and motivating others by being dependable, consistent, and honest with them.</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={dedication} alt='Dedication & Loyalty' placeholder='blur' />
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-10 mt-40 relative'>
            <div className='md:w-1/2 order-last md:order-first'>
              <Image src={integrity} alt='Integrity' placeholder='blur' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Integrity</h2>
              <p className='leading-8 mt-4'>We as a family uphold honesty toward one another and the external stakeholders since trust is the foundation of all successful partnerships. We commit to honesty and consistency. As a result, we always conduct business according to a strong foundation of moral principles and in compliance with ethics.</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-10 mt-40 relative'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Sustainable Development</h2>
              <p className='leading-8 mt-4'>We care about our environment and work to keep natural systems capable of providing the services that are crucial to the economy and society. Because the earth is not ours, we must use resources wisely in order to meet the demands of the present and future generations without compromising the dependability and stability of the natural system.</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={sustainable} alt='Sustainable Development' placeholder='blur' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cultures;
