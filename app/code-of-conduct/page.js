import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import Banner from '../components/Banner';
import Link from 'next/link';
import Image from 'next/image';
import earth from '@/public/company/earth1.png';
import codeOfConduct from '@/public/company/code-of-conduct.png';

export const metadata = {
  title: websiteName + 'Code of Conduct',
  description: '',
};

const data = {
  title: 'Compliance with Conduct Rules',
  subtitle: 'Code of Conduct',
  desc: 'We\'re committed to revolutionizing the global approach to money – to simplify, enhance, and enrich the experience for everyone.',
  image:{
    layout: 'half',
    url: codeOfConduct,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download app'
    }
  }
}

const CodeOfConduct = () => {
  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Simple Onboarding</h2>
          <p className='leading-8 mt-4 text-center w-full md:w-2/3 mx-auto'>At MyMonty, we believe in achieving success through unwavering commitment to our core values. Our culture thrives on accountability, open communication, and a pursuit of excellence, all grounded in the principles of doing what is right.<br /><br />
          Our reputation is our most important asset, built on a foundation of trust and integrity. We expect each member of our team to actively contribute to preserving and enhancing our standing by embracing the following Code of Conduct:</p>
          
          <div className='flex flex-col gap-10 mt-20'>
            <div className='flex flex-col md:flex-row md:items-stretch gap-10 relative'>
              <div className='aspect-square md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100 group/item relative md:group/item'>
                <div className='px-10 py-14 md:group/edit visible md:group-hover/item:invisible md:group/edit relative z-10'>
                  <div className='flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full border-2 border-white md:border-black text-white md:text-black text-xl md:text-3xl font-bold'>1</div>
                  <div className='mt-6 md:mt-14'>
                    <h3 className='text-3xl md:text-4xl font-bold text-white md:text-black'>Global Integrity</h3>
                    <p className='block md:hidden text-white text-base mt-10'>Uphold the highest standards of integrity, honesty, and ethical conduct both within and beyond company premises.</p>
                  </div>
                </div>
                <div className='md:group/edit md:invisible md:group-hover/item:visible absolute aspect-square top-0 left-0 h-full w-full px-10 py-14'>
                  <Image fill placeholder='blur' quality={100} sizes='100vw' src={earth} className='object-cover z-1 md:z-0' alt="Background Image" />
                  
                  <p className='hidden md:flex flex-col items-center justify-center h-full relative text-white sm:text-2xl lg:text-4xl'>Uphold the highest standards of integrity, honesty, and ethical conduct both within and beyond company premises.</p>
                </div>
              </div>

              <div className='aspect-square md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100 group/item relative md:group/item'>
                <div className='px-10 py-14 md:group/edit visible md:group-hover/item:invisible md:group/edit relative z-10'>
                  <div className='flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full border-2 border-white md:border-black text-white md:text-black text-xl md:text-3xl font-bold'>2</div>
                  <div className='mt-6 md:mt-14'>
                    <h3 className='text-3xl md:text-4xl font-bold text-white md:text-black'>Collaborative Excellence</h3>
                    <p className='block md:hidden text-white text-base mt-10'>Perform duties with honesty, ethical conduct, and unwavering good faith, fostering a culture of excellence.</p>
                  </div>
                </div>
                <div className='md:group/edit md:invisible md:group-hover/item:visible absolute aspect-square top-0 left-0 h-full w-full px-10 py-14'>
                  <Image fill placeholder='blur' quality={100} sizes='100vw' src={earth} className='object-cover z-1 md:z-0' alt="Background Image" />
                  
                  <p className='hidden md:flex flex-col items-center justify-center h-full relative text-white sm:text-2xl lg:text-4xl'>Perform duties with honesty, ethical conduct, and unwavering good faith, fostering a culture of excellence.</p>
                </div>
              </div>
              
            </div>

            <div className='flex flex-col md:flex-row md:items-stretch gap-10 relative'>
              <div className='aspect-square md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100 group/item relative md:group/item'>
                <div className='px-10 py-14 md:group/edit visible md:group-hover/item:invisible md:group/edit relative z-10'>
                  <div className='flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full border-2 border-white md:border-black text-white md:text-black text-xl md:text-3xl font-bold'>3</div>
                  <div className='mt-6 md:mt-14'>
                    <h3 className='text-3xl md:text-4xl font-bold text-white md:text-black'>Respectful Engagement</h3>
                    <p className='block md:hidden text-white text-base mt-10'>Demonstrate patience, respect, and consideration, contributing to individual, team, and company success.</p>
                  </div>
                </div>
                <div className='md:group/edit md:invisible md:group-hover/item:visible absolute aspect-square top-0 left-0 h-full w-full px-10 py-14'>
                  <Image fill placeholder='blur' quality={100} sizes='100vw' src={earth} className='object-cover z-1 md:z-0' alt="Background Image" />
                  
                  <p className='hidden md:flex flex-col items-center justify-center h-full relative text-white sm:text-2xl lg:text-4xl'>Demonstrate patience, respect, and consideration, contributing to individual, team, and company success.</p>
                </div>
              </div>

              <div className='aspect-square md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100 group/item relative md:group/item'>
                <div className='px-10 py-14 md:group/edit visible md:group-hover/item:invisible md:group/edit relative z-10'>
                  <div className='flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full border-2 border-white md:border-black text-white md:text-black text-xl md:text-3xl font-bold'>4</div>
                  <div className='mt-6 md:mt-14'>
                    <h3 className='text-3xl md:text-4xl font-bold text-white md:text-black'>Legal Adherence</h3>
                    <p className='block md:hidden text-white text-base mt-10'>Comply with all relevant laws and regulations, respecting both local laws and cultural norms.</p>
                  </div>
                </div>
                <div className='md:group/edit md:invisible md:group-hover/item:visible absolute aspect-square top-0 left-0 h-full w-full px-10 py-14'>
                  <Image fill placeholder='blur' quality={100} sizes='100vw' src={earth} className='object-cover z-1 md:z-0' alt="Background Image" />
                  
                  <p className='hidden md:flex flex-col items-center justify-center h-full relative text-white sm:text-2xl lg:text-4xl'>Comply with all relevant laws and regulations, respecting both local laws and cultural norms.</p>
                </div>
              </div>
              
            </div>

            <div className='flex flex-col md:flex-row md:items-stretch gap-10 relative'>
              <div className='aspect-square md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100 group/item relative md:group/item'>
                <div className='px-10 py-14 md:group/edit visible md:group-hover/item:invisible md:group/edit relative z-10'>
                  <div className='flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full border-2 border-white md:border-black text-white md:text-black text-xl md:text-3xl font-bold'>5</div>
                  <div className='mt-6 md:mt-14'>
                    <h3 className='text-3xl md:text-4xl font-bold text-white md:text-black'>Loyal Partnership</h3>
                    <p className='block md:hidden text-white text-base mt-10'>Respect company rules, announcements, and instructions, maintaining a harmonious balance between personal interests and the collective well-being of the Company.</p>
                  </div>
                </div>
                <div className='md:group/edit md:invisible md:group-hover/item:visible absolute aspect-square top-0 left-0 h-full w-full px-10 py-14'>
                  <Image fill placeholder='blur' quality={100} sizes='100vw' src={earth} className='object-cover z-1 md:z-0' alt="Background Image" />
                  
                  <p className='hidden md:flex flex-col items-center justify-center h-full relative text-white sm:text-2xl lg:text-4xl'>Respect company rules, announcements, and instructions, maintaining a harmonious balance between personal interests and the collective well-being of the Company.</p>
                </div>
              </div>

              <div className='aspect-square md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100 group/item relative md:group/item'>
                <div className='px-10 py-14 md:group/edit visible md:group-hover/item:invisible md:group/edit relative z-10'>
                  <div className='flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full border-2 border-white md:border-black text-white md:text-black text-xl md:text-3xl font-bold'>6</div>
                  <div className='mt-6 md:mt-14'>
                    <h3 className='text-3xl md:text-4xl font-bold text-white md:text-black'>Dedicated Commitment</h3>
                    <p className='block md:hidden text-white text-base mt-10'>Work with loyalty and unwavering commitment to the company's mission and vision.</p>
                  </div>
                </div>
                <div className='md:group/edit md:invisible md:group-hover/item:visible absolute aspect-square top-0 left-0 h-full w-full px-10 py-14'>
                  <Image fill placeholder='blur' quality={100} sizes='100vw' src={earth} className='object-cover z-1 md:z-0' alt="Background Image" />
                  
                  <p className='hidden md:flex flex-col items-center justify-center h-full relative text-white sm:text-2xl lg:text-4xl'>Work with loyalty and unwavering commitment to the company's mission and vision.</p>
                </div>
              </div>
              
            </div>

            <div className='flex flex-col md:flex-row md:items-stretch gap-10 relative'>
              <div className='aspect-square md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100 group/item relative md:group/item'>
                <div className='px-10 py-14 md:group/edit visible md:group-hover/item:invisible md:group/edit relative z-10'>
                  <div className='flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full border-2 border-white md:border-black text-white md:text-black text-xl md:text-3xl font-bold'>7</div>
                  <div className='mt-6 md:mt-14'>
                    <h3 className='text-3xl md:text-4xl font-bold text-white md:text-black'>Professional Etiquette</h3>
                    <p className='block md:hidden text-white text-base mt-10'>Behave professionally, treating others with respect and dignity in all interactions.</p>
                  </div>
                </div>
                <div className='md:group/edit md:invisible md:group-hover/item:visible absolute aspect-square top-0 left-0 h-full w-full px-10 py-14'>
                  <Image fill placeholder='blur' quality={100} sizes='100vw' src={earth} className='object-cover z-1 md:z-0' alt="Background Image" />
                  
                  <p className='hidden md:flex flex-col items-center justify-center h-full relative text-white sm:text-2xl lg:text-4xl'>Behave professionally, treating others with respect and dignity in all interactions.</p>
                </div>
              </div>

              <div className='aspect-square md:basis-1/2 overflow-hidden rounded-[1.875rem] bg-gray-100 group/item relative md:group/item'>
                <div className='px-10 py-14 md:group/edit visible md:group-hover/item:invisible md:group/edit relative z-10'>
                  <div className='flex items-center justify-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full border-2 border-white md:border-black text-white md:text-black text-xl md:text-3xl font-bold'>8</div>
                  <div className='mt-6 md:mt-14'>
                    <h3 className='text-3xl md:text-4xl font-bold text-white md:text-black'>Confidentiality Champions</h3>
                    <p className='block md:hidden text-white text-base mt-10'>Ensure the confidentiality of company, customer, supplier, or business associate information, refraining from disclosing confidential information to unauthorized individuals.</p>
                  </div>
                </div>
                <div className='md:group/edit md:invisible md:group-hover/item:visible absolute aspect-square top-0 left-0 h-full w-full px-10 py-14'>
                  <Image fill placeholder='blur' quality={100} sizes='100vw' src={earth} className='object-cover z-1 md:z-0' alt="Background Image" />
                  
                  <p className='hidden md:flex flex-col items-center justify-center h-full relative text-white sm:text-2xl lg:text-4xl'>Ensure the confidentiality of company, customer, supplier, or business associate information, refraining from disclosing confidential information to unauthorized individuals.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeOfConduct;
