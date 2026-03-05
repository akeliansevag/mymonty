'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  "All",
  "Electronics & Tech",
  "Flowers & Gifts",
  "Fashion",
  "Stationery",
  "Food & Beverage",
];

const RewardsClient = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const isVisible = (category) => activeCategory === 'All' || activeCategory === category;

  return (
    <section className="container my-12">
      <div className="container text-center">
        <div className='w-full max-w-[1060px] mx-auto'>
          <div className='container text-center'>
            <p className='leading-8 mt-8'>Filter through our partner network and track your spending across key business categories.</p>
          </div>
        </div>
      </div>
      {/* ================= CATEGORIES ================= */}
      <div className="flex justify-center mt-12 mb-10">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm border whitespace-nowrap transition
                ${
                  activeCategory === cat
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid lg:grid-cols-3 gap-6">
        {isVisible('Electronics & Tech') && (
          <div className='bg-gray-100 rounded-3xl px-4 lg:px-8 py-8'>
            <div className='bg-white rounded-3xl px-4 lg:px-8 py-8'>
              <div className='flex justify-between items-center gap-2'>
                <img src='/selfani-logo.png' alt="logo" className='' />
                <button className="rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">up to 20% Discount</button>
              </div>
              <h2 className="mt-7 text-2xl font-extrabold">Selfani Tech</h2>
              <p className="mt-4">Upgrade your tech and home appliances while enjoying exclusive savings up to <strong>20% discount</strong> on selected items when paying with your <strong>MyMonty Card</strong></p>
              <button className="rounded-full bg-[#0080A533] px-4 py-1 text-xs font-light mt-6 uppercase">Electronics & Tech</button>
            </div>
          </div>
        )}
        
        {isVisible('Flowers & Gifts') && (
          <div className='relative bg-[#FAF6FDE5] rounded-3xl px-4 lg:px-8 py-8'>
            <img
              src="/bonsai-bg.png"
              alt=""
              className="absolute right-0 bottom-0 h-full object-contain pointer-events-none z-10"
            />
            <div className='relative z-10 h-full'>
              <div className='flex justify-between items-center gap-2'>
                <img src='/bonsai-logo.png' alt="logo" className='' />
                <button className="rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">10% Discount</button>
              </div>
              <div className='w-2/3'>
                <h2 className="text-2xl font-extrabold">Bonsai Flowers</h2>
                <p className="mt-4">Celebrate every moment with Bonsai Flowers. Pay with your MyMonty Card and get a <strong>10% discount</strong> on flowers and plants.</p>
                <button className="rounded-full bg-[#CB026733] px-4 py-1 text-xs font-light mt-6 uppercase">Flowers & Gifts</button>
              </div>
            </div>
          </div>
        )}

        {isVisible('Fashion') && (
          <div className='relative bg-[#04886B1A] rounded-3xl px-4 lg:px-8 py-8'>
            <img
              src="/hashtag-bg.png"
              alt=""
              className="absolute right-8 bottom-10 h-3/4 object-contain pointer-events-none z-10"
            />
            <div className='relative z-10'>
              <div className='flex justify-between items-center gap-2'>
                <img src='/hashtag-logo.png' alt="logo" className='' />
                <button className="rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">10% Discount</button>
              </div>
              <div className='w-2/3'>
                <h2 className="mt-7 text-2xl font-extrabold">Hashtag</h2>
                <p className="mt-4">Refresh your wardrobe with the latest styles. Pay with your <strong>MyMonty Card</strong> and get <strong>10% off</strong> on clothes.</p>
                <button className="rounded-full bg-[#FFFFFF] px-4 py-1 text-xs font-light mt-6 uppercase">Fashion</button>
              </div>
            </div>
          </div>
        )}

        {isVisible('Fashion') && (
          <div className='relative bg-[#F3F0E0] rounded-3xl px-4 lg:px-8 py-8'>
            <img
              src="/20-20-vision-bg.png"
              alt=""
              className="absolute right-8 bottom-8 h-1/2 object-contain pointer-events-none z-10"
            />
            <div className='relative z-10'>
              <div className='flex justify-between items-center gap-2'>
                <h2 className='text-2xl font-extrabold'>20/20 Vision</h2>
                <button className="rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">10% Discount</button>
              </div>
              <div className='w-2/3'>
                <p className="mt-4">See better and look sharper with quality eyewear and sunglasses. <br /> Get <strong>10% discount</strong> on all eyeglasses and sunglasses when paying with your <strong>MyMonty Card</strong>.</p>
                <button className="rounded-full bg-[#ECE3A2] px-4 py-1 text-xs font-light mt-6 uppercase">Fashion</button>
              </div>
            </div>
          </div>
        )}

        {isVisible('Stationery') && (
          <div className="bg-[#F2F8FA] rounded-3xl px-4 2xl:px-8 pt-8">
            <div className="relative">
              <img
                src="/iphone-frame.webp"
                alt="Phone"
                width="260"
                height="520"
                className='w-full h-[500px]'
              />

              <div className="absolute inset-0 flex flex-col justify-end px-8 lg:px-8">
                <div className="bg-[#EBF4F6] h-4/5 mb-4 rounded-2xl p-4">
                  <div className="flex justify-between items-center">
                    <img
                      src="/ms-logo.png"
                      alt="Toy Store"
                    />
                    <button className="rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">10% Discount</button>
                  </div>

                  <h2 className="text-2xl font-extrabold mt-8">Mario's Stationery</h2>
                  <p className="mt-4">Stock up on everyday essentials for work, school, and creativity with <strong>10% discount</strong> on everything except books when paying with your <strong>MyMonty Card</strong>.</p>

                  <button className="rounded-full bg-[#ECE3A2] px-4 py-1 text-xs font-light mt-6 uppercase">Stationery</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isVisible('Electronics & Tech') && (
          <div className='relative bg-[#EAEAEA] rounded-3xl px-4 lg:px-8 py-8'>
            <img
              src="/kh-bg.png"
              alt=""
              className="absolute right-4 xl:right-8 bottom-8 h-[140px] object-contain pointer-events-none z-10"
            />
            <div className='relative z-10'>
              <div className='flex justify-between items-center gap-2'>
                <img src='/kh-logo.png' alt="logo" className='' />
                <button className="rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">10% Discount</button>
              </div>
              <div className='w-2/3 xl:w-full'>
                <h2 className="mt-7 text-2xl font-extrabold">Khoury Home</h2>
                <p className="mt-4">Enhance your home with trusted appliances and lifestyle solutions with <strong>10% off</strong> storewide excluding discounted & IT items when paying with your <strong>MyMonty Card</strong>.</p>
                <button className="rounded-full bg-[#CB020533] px-4 py-1 text-xs font-light mt-6 uppercase">Electronics & Tech</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RewardsClient;
