import React from "react";
import { websiteName } from "@/app/config";
import Banner from "../components/Banner";
import Image from 'next/image';
import whoWeAre from '@/public/cultures.webp';
import diversity from '@/public/diversity-and-inclusion.webp';
import innovation from '@/public/personal/innovation.webp';
import dedication from '@/public/dedication.webp';
import integrity from '@/public/integrity.webp';

export const metadata = {
  title: "Who We Are" + websiteName,
  description: "Learn about MyMonty's mission & vision for financial inclusion in Lebanon. Discover our team & commitment to digital banking innovation. Meet us!",
};

const data = {
  title: 'SHOUF TA7ET',
  subtitle: 'Giribongi',
  desc: 'shouf ta7et shou fi',
  image: {
    inGrid: true,
    layout: 'half',
    url: whoWeAre,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download App'
    }
  }
}

const WhoWeAre = () => {
  return (
    <div>
   
      
      <Banner data={data} />
      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className="container">
            <h2 className="text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">Your Money, Just Better </h2>
            <p className="md:px-[20vw] text-center leading-8 mt-8">Fast Access, Smart & secure! <br /> Everything you need to manage your money effortlessly. </p>
            
            
            <div className="flex gap-5 max-lg:flex-col mt-16">
              <div className="lg:w-[35%] rounded-3xl bg-[#ECBBCF] relative overflow-hidden">
                  <img src="/pink-blue-bg.webp" className="h-full w-full top-0 left-0 object-cover absolute"/>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="p-10 pb-0 flex-1">
                      <h3 className="font-black uppercase text-3xl">Join 50k+ Users  </h3>
                      <p className="mt-4">MyMonty makes daily life easier for thousands of users in Lebanon. </p>
                    </div>
                    <div className="flex-1">
                      <img src="/smiling-girl.webp" className="w-full"/>
                    </div>
                    
                  </div>
                  
              </div>
              <div className="lg:w-[65%] flex flex-col gap-5">
                <div className="bg-[#f7f7f7] lg:h-1/2 rounded-3xl flex max-lg:flex-col overflow-hidden relative max-lg:gap-3">
                  <div className="p-10 pr-0 max-lg:pb-5 lg:w-2/3">
                      <h3 className="font-black uppercase text-3xl">Multi-Currency Wallet</h3>
                      <p className="mt-4">One app. Three currencies. USD, LBP & EUR All ready to use instantly.</p>
                      <a href="" className="mm-button mt-6">Learn More</a>
                  </div>
                  <div className="max-lg:pt-0 lg:pt-8 lg:w-1/3 place-content-end">
                      <img src="/coins.webp"/>
                  </div>
                </div>
                <div className="bg-[linear-gradient(119.93deg,_#091111_31.73%,_#5C5858_97.35%)] lg:h-1/2 rounded-3xl overflow-hidden relative text-white flex max-lg:flex-col max-lg:gap-3">
                    <div className="p-10 pr-0 max-lg:pb-5 lg:w-2/3">
                      <h3 className="font-black uppercase text-3xl">Salary Advance</h3>
                      <p className="mt-4">Access a part of your salary before payday. For emergencies, last-minute plans, or just life. </p>
                      <a href="" className="mm-button mt-6 white">See How It Works</a>
                    </div>
                    <div className="max-lg:pt-0 lg:pt-10 pr-10 pl-4 pb-0 place-content-end lg:w-1/3">
                      <img src="/tick-mobile.webp" />
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;
