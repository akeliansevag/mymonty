import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import Image from 'next/image';
import codeOfConduct from '@/public/personal/code-of-conduct-new.webp';

export const metadata = {
  title: websiteName + 'Code of Conduct',
  description: 'Learn more about the code of conduct rules at My Monty and how we\'re committed to revolutionizing the global approach to money and enrich everyone\'s experience.',
};

const data = {
  title: 'Compliance with Conduct Rules',
  subtitle: 'Code of Conduct',
  desc: 'We\'re committed to revolutionizing the global approach to money – to simplify, enhance, and enrich the experience for everyone.',
  image: {
    inGrid: true,
    layout: 'half',
    url: codeOfConduct,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download App'
    }
  }
}

const CodeOfConduct = () => {
  const items = [
    {
      image: '/personal/code-1.webp',
      title: 'Professionalism',
      description: '<ol><li>Our employees are expected to work responsibly, actively, pragmatically, and devotedly, and to contribute to ensure world-class service in the new era.</li><li>They shall fulfill their duties legally, diligently, ethically, honestly and within the scope of authority granted to them. No activities beyond authority are allowed.</li></ol>'
    },
    {
      image: '/personal/code-2.webp',
      title: 'Integrity',
      description: '<ol><li>It is forbidden for our employees to claim or accept cash, marketable securities, gifts, special services, privileges and other property or non-property rights or benefits from customers, suppliers, competitors, subordinating institutions, and other business-related parties under any name and in any form.</li><li>They are prohibited from seeking any improper benefits in their official capacity for themselves, relatives, friends, or other individuals.</li></ol>'
    },
    {
      image: '/personal/code-3.webp',
      title: 'Conflict of Interest',
      description: '<ol><li>As professionals, our employees make business decisions every day. In making such decisions, they become responsible for remaining free from influence, or the appearance of influence.</li><li>They shall avoid any situation where their private or personal interests may conflict or appear to conflict with their duties to the company.</li></ol>'
    },
    {
      image: '/personal/code-4.webp',
      title: 'Honesty and Harmony',
      description: '<ol><li>Our employees shall ensure the authenticity, accuracy, completeness, and timeliness of working records.</li><li>They should respect each other and be empathic towards each other.</li></ol>'
    },
    {
      image: '/personal/code-5.webp',
      title: 'Treating Customers Fairly',
      description: '<ol><li>Our employees shall not show indifference, arrogance, rudeness, or discrimination against customers based on factors such as nationality, ethnicity, religion, age, gender, color, disability, or amount of business.</li><li>Our employees shall deal with customers fairly and transparently, taking the time to explain the risks and benefits, and informing them of any changes in these conditions. Employees will also respond with high professionalism, accuracy, and speed to any inquiries a customer makes.</li></ol>'
    },
    {
      image: '/personal/code-6.webp',
      title: 'Confidentiality and Data Protection',
      description: '<ol><li>Our employees are bound by the provisions of the Lebanese Law of 3 September 1956 on Banking Secrecy in the interest of its customers.</li><li>Furthermore, Personal data held by or on behalf of us must be used in compliance with data protection laws.</li></ol>'
    },

  ];
  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Code of Conduct</h2>
          <p className='leading-8 mt-4 text-center w-full md:w-2/3 mx-auto'>We are committed to conducting our business and affairs with honesty, integrity and in accordance with the highest ethical and legal standards. There is a “zero tolerance” approach towards unethical and illegal behavior.</p>
          <div className='mt-20 flex flex-col gap-10 md:gap-20'>
            {items && items.map((item, index) => {
              return (
                <div key={index} className='flex flex-col gap-10 md:gap-20 items-center md:flex-row md:even:flex-row-reverse'>
                  <div className='relative flex-[2] h-full w-full'>
                    <Image height="100" width="100" alt='Code Of Conduct Image' src={item.image} sizes="100%" className='w-full' />
                  </div>
                  <div className='flex-[3]'>
                    <h2 className=' font-bold text-4xl mb-5'>{item.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeOfConduct;
