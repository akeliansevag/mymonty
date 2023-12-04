import React from "react";
import { websiteName } from "@/app/config";
import styles from "./page.module.css";
import Banner from "../components/Banner";
import Link from 'next/link';
import Image from 'next/image';
import earthImage from '@/public/company/earth.png';
import whoWeAre from '@/public/company/who-we-are.png';

export const metadata = {
  title: websiteName + "Who We Are",
  description: "",
};

const data = {
  title: 'ONE APP FOR ALL MONEY THINGS',
  subtitle: 'Who we are',
  desc: 'Manage your money effortlessly from the comfort of one single, intuitive App.',
  image:{
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
        <div className='container'>
          <div className='flex flex-col md:flex-row md:items-center gap-10 relative'>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Mission</h2>
              <p className='leading-8 mt-4'>At MyMonty, our ethos echoes the essence of simplifying financial services, fostering trust, spearheading innovation, and championing financial inclusion. We harmonize these principles to create a seamless and accessible financial landscape.<br /><br />
              In the spirit of simplicity, we strip away complexities, making financial services not just transactions but experiences that effortlessly resonate with your lifestyle. Trust is the cornerstone of our foundation; every interaction with MyMonty is built on transparency, security, and reliability.<br /><br />
              Innovation is our compass, guiding us to explore and redefine the status quo. From cutting-edge features to revolutionary products, we are committed to pushing the boundaries, ensuring that your financial experience is not just up to date but ahead of its time.<br /><br />
              Yet, our purpose extends beyond individual transactions. We believe in contributing to a more inclusive financial landscape, where everyone, irrespective of their background, has access to the tools and opportunities needed for financial growth. MyMonty is more than a platform; it's a force driving positive change in the world of finance through faster, smarter, and superior services. In every tap, every transaction, every investment, and every moment you entrust us with your financial journey, we are dedicated to embodying the principles that make MyMonty not just a service provider but a lifestyle enabler, here to</p>
            </div>
            <div className='md:w-1/2 justify-end flex'>
              <Image src={earthImage} alt='Mission' placeholder='blur'/>
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:items-center gap-10 mt-40 relative'>
            <div className='md:w-1/2 order-last md:order-first'>
              <Image src={earthImage} alt='Mission' placeholder='blur'/>
            </div>
            <div className='md:w-1/2'>
              <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Vision</h2>
              <p className='leading-8 mt-4'>MyMonty aspires to transcend the conventional boundaries of FinTech and emerge as the ultimate FinTech enabler. Drawing inspiration from the revolutionary spirit of our industry, we envision a future where MyMonty stands as the leader of change, empowering individuals and businesses alike.<br /><br />
              Our commitment to excellence goes beyond the ordinary. We aim to redefine the very essence of financial technology, creating a dynamic ecosystem where innovation has no bounds, and where cutting-edge solutions and user-centric experiences set a new standard for FinTech services<br /><br />
              To be the ultimate FinTech enabler means more than just providing services, it means anticipating needs, surpassing expectations, and creating an environment where financial empowerment is not a privilege but a right. MyMonty seamlessly integrates with your ambitions, transforming your aspirations into tangible realities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
