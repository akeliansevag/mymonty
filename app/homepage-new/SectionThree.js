import React from "react";
import { websiteName } from "@/app/config";
import Banner from "../components/Banner";


const SectionThree = () => {
  return (
    <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
      <div className="container">
        <h2 className="text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none">Your Money, Just Better </h2>
        <p className="md:px-[20vw] text-center leading-8 mt-8">Fast Access, Smart & secure! <br /> Everything you need to manage your money effortlessly. </p>

        <div className="flex gap-5 max-lg:flex-col mt-16">
          <div className="lg:w-[35%] rounded-3xl bg-[#ECBBCF] relative overflow-hidden">
            <img src="/pink-blue-bg.webp" className="h-full w-full top-0 left-0 object-cover absolute" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="p-10 pb-0 flex-1">
                <h3 className="font-black uppercase text-3xl">Join 50k+ Users  </h3>
                <p className="mt-4">MyMonty makes daily life easier for thousands of users in Lebanon. </p>
              </div>
              <div className="flex-1">
                <img src="/smiling-girl.webp" className="w-full" />
              </div>
            </div>
          </div>
          <div className="lg:w-[65%] flex flex-col gap-5">
            <div className="bg-[#f7f7f7] h-full rounded-3xl overflow-hidden relative max-lg:gap-3">
              <div className="p-10 pb-0  lg:w-2/3">
                <h3 className="font-black uppercase text-3xl">Multi-Currency Wallet</h3>
                <p className="mt-4">One app. Three currencies. USD, LBP & EUR All ready to use instantly.</p>
                <a href="/accounts/multi-currency-wallet" className="mm-button mt-6 !px-8">Learn More</a>
              </div>
              <div className="max-lg:pt-0 lg:pt-8 lg:w-4/5 ml-auto">
                <img src="/coins.webp" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
