import React from "react";
import { websiteName } from "@/app/config";
import Banner from "../components/Banner";
import Image from 'next/image';
import whoWeAre from '@/public/cultures.webp';
import diversity from '@/public/diversity-and-inclusion.webp';
import innovation from '@/public/personal/innovation.webp';
import dedication from '@/public/dedication.webp';
import integrity from '@/public/integrity.webp';
import sustainable from '@/public/development.webp';


export const metadata = {
  title: websiteName + "Who We Are",
  description: "",
};

const data = {
  title: 'ONE APP FOR ALL MONEY THINGS',
  subtitle: 'Who we are',
  desc: 'Manage your money effortlessly from the comfort of one single, intuitive App.',
  image: {
    inGrid: true,
    layout: 'half',
    url: whoWeAre,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download app'
    }
  }
}

const WhoWeAre = () => {
  return (
    <div>
      <Banner data={data} />
      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className="container grid sm:grid-cols-2 gap-10">
          <div className="sm:flex-1 gap-5 flex-col items-center flex bg-[#F7F7F7] rounded-lg p-10">
            <div>
              <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="59" cy="59" r="57.5" stroke="black" stroke-width="3" />
                <path d="M82.1339 58.9996H72.879M45.1143 58.9996H35.8594M58.9966 45.1172V35.8623M58.9966 82.1368V72.8819M77.5064 58.9996C77.5064 69.2222 69.2193 77.5094 58.9966 77.5094C48.7739 77.5094 40.4868 69.2222 40.4868 58.9996C40.4868 48.7769 48.7739 40.4898 58.9966 40.4898C69.2193 40.4898 77.5064 48.7769 77.5064 58.9996ZM65.9378 58.9996C65.9378 62.8331 62.8301 65.9407 58.9966 65.9407C55.1631 65.9407 52.0555 62.8331 52.0555 58.9996C52.0555 55.1661 55.1631 52.0584 58.9966 52.0584C62.8301 52.0584 65.9378 55.1661 65.9378 58.9996Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h2 className="text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">MISSION</h2>
            <p className="text-center leading-8">Simplify banking, inspire trust, lead innovation and contribute to financial inclusion.</p>
          </div>
          <div className="sm:flex-1 gap-5 flex-col items-center flex bg-[#F7F7F7] rounded-lg p-10">
            <div>
              <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="59" cy="59" r="57.5" stroke="black" stroke-width="3" />
                <path d="M36.8312 60.6499C36.5161 60.151 36.3586 59.9015 36.2704 59.5167C36.2041 59.2277 36.2041 58.7719 36.2704 58.4829C36.3586 58.0981 36.5161 57.8486 36.8312 57.3497C39.4351 53.2267 47.1858 42.8037 58.9974 42.8037C70.809 42.8037 78.5596 53.2267 81.1635 57.3497C81.4786 57.8486 81.6362 58.0981 81.7244 58.4829C81.7906 58.7719 81.7906 59.2277 81.7244 59.5167C81.6362 59.9015 81.4786 60.151 81.1635 60.6499C78.5596 64.7729 70.809 75.1959 58.9974 75.1959C47.1858 75.1959 39.4351 64.7729 36.8312 60.6499Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M58.9974 65.941C62.8309 65.941 65.9386 62.8333 65.9386 58.9998C65.9386 55.1663 62.8309 52.0586 58.9974 52.0586C55.1639 52.0586 52.0562 55.1663 52.0562 58.9998C52.0562 62.8333 55.1639 65.941 58.9974 65.941Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
            <h2 className="text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">VISION</h2>
            <p className="text-center leading-8">To become a global digital financial services enabler.</p>
          </div>

        </div>
      </section>
      <section className="pt-14 sm:pt-24">
        <div className="container">
          <h2 className="text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">Our Culture, Our Foundation</h2>
          <p className="md:px-[20vw] text-center leading-8 mt-8">Our devoted, agile, and multicultural team is committed to go the extra mile in digitizing your future and making your life easier</p>
        </div>

      </section>
      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <div className='flex flex-col md:flex-row md:items-center gap-10 md:gap-60 relative'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Diversity and Inclusion</h2>
              <p className='leading-8 mt-4'>We sincerely believe in fostering an environment that promotes inclusiveness starting with our employees and moving to the entire financial ecosystem. We are committed to creating a world where nobody is left behind.</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={diversity} alt='Diversity and Inclusion' placeholder='blur' />
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-10 md:gap-60 mt-40 relative'>
            <div className='md:w-1/2 order-last md:order-first'>
              <Image src={innovation} alt='Innovation' placeholder='blur' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Innovation</h2>
              <p className='leading-8 mt-4'>We take risks, encourage innovation, act, and learn from our experiences. Our staff members are encouraged to try new things and are given the freedom to fail. We see skill mastery as a starting point rather than a finish line. We think that working hard to accomplish our goals will get us farther than we had thought. Finally, we believe in changing the world one step at a time and work hard to achieve it creatively while having fun along the way.</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-10 md:gap-60 mt-40 relative'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Dedication & Loyalty</h2>
              <p className='leading-8 mt-4'>We strive to do our duties to the best of our abilities while combining excellence and professionalism. We also never cease exploring the boundaries of what is possible.<br />
                What genuinely makes us happy is seeing our team grow as a result of their enthusiasm for what they do, and motivating others by being dependable, consistent, and honest with them.</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={dedication} alt='Dedication & Loyalty' placeholder='blur' />
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-10 md:gap-60 mt-40 relative'>
            <div className='md:w-1/2 order-last md:order-first'>
              <Image src={integrity} alt='Integrity' placeholder='blur' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Integrity</h2>
              <p className='leading-8 mt-4'>We as a family uphold honesty toward one another and the external stakeholders since trust is the foundation of all successful partnerships. We commit to honesty and consistency. As a result, we always conduct business according to a strong foundation of moral principles and in compliance with ethics.</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-10 md:gap-60 mt-40 relative'>
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

export default WhoWeAre;
