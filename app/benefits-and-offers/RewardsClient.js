'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  'All',
  'Fuel & Automotive',
  'Entertainment & Media',
  'Cinema',
  'Babies & Family',
  'Food & Beverage',
];

const RewardsClient = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const isVisible = (category) => activeCategory === 'All' || activeCategory === category;

  return (
    <section className="container my-12">
      <div className="container text-center">
        <div className='w-full max-w-[1060px] mx-auto'>
          <div className='container text-center'>
            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>Rewards & Spending</h2>
            <p className='leading-8 mt-8'>Filter through our partner network and track your spending across key business categories.</p>
          </div>
        </div>
      </div>
      {/* ================= CATEGORIES ================= */}
      <div className="flex justify-center mt-24 mb-10">
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
      <div className="grid grid-cols-12 gap-6 grid-flow-row-dense">
        {/* ===== MEDCO ===== */}
        {isVisible('Fuel & Automotive') && (
          <div className="col-span-12 lg:col-span-4 bg-[#F7F7F7] rounded-3xl p-12 flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm overflow-hidden">
              <div className="bg-orange-400 p-4 flex items-center justify-between">
                <Image src="/medco.webp" alt="Medco" width={48} height={48} />
                <span className="bg-white text-xs px-4 py-2 rounded-full font-bold">
                  Win a YOYO Car
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">MEDCO</h3>
                <p className="text-sm text-gray-700">
                  Premium fuel savings for your entire fleet at over 2,000 stations nationwide.
                </p>

                <div className="flex justify-between items-end">
                  <span className="text-xs px-4 py-2 rounded-full bg-gray-100 font-bold">
                    FUEL & AUTOMOTIVE
                  </span>
                  <Image src="/car.webp" alt="Car" width={100} height={100} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== ANGHAMI (WIDE) ===== */}
        {isVisible('Entertainment & Media') && (
          <div className="col-span-12 lg:col-span-8 bg-[#DEE6FA] rounded-3xl p-4 lg:py-12 lg:px-24 flex items-center">
            <div className="relative bg-[#EEF2FF] rounded-2xl p-8 flex items-center gap-8 w-full">
              <div className="flex-1 space-y-12">
                <div className="flex items-start gap-3">
                  <Image src="/anghami.webp" alt="Anghami" width={52} height={52} />
                  <div className="w-2/3">
                    <h3 className="text-2xl font-bold">Anghami Plus</h3>
                    <p className="text-gray-800">
                      Get <strong>4 months free subscription</strong> on Anghami Plus and an ongoing 15%
                      off when paying with your MyMonty card.
                    </p>
                  </div>
                  <span className="w-1/3 ml-auto bg-black text-white text-xs px-4 py-2 rounded-full font-bold">
                    4 Months on US + 15% OFF
                  </span>
                </div>
                <span className="inline-block text-xs px-4 py-2 rounded-full bg-gray-200 font-bold">
                  ENTERTAINMENT & MEDIA
                </span>
              </div>

              <Image
                src="/anghami-girl.webp"
                alt=""
                width={200}
                height={200}
                className="absolute right-0 bottom-0"
              />
            </div>
          </div>
        )}

        {/* ===== OSN ===== */}
        {isVisible('Entertainment & Media') && (
          <div className="col-span-12 lg:col-span-4 bg-black rounded-3xl p-8">
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <Image src="/osn.webp" alt="OSN" width={150} height={150} />
                <span className="bg-purple-600 text-white text-xs px-4 py-2 rounded-full font-bold">
                  4 Months on US + 15% OFF
                </span>
              </div>

              <div className="bg-white rounded-2xl p-6 h-full flex flex-col space-y-12">
                <p className="text-gray-800">
                  Get <strong>4 months OSN+</strong> subscription on us and an ongoing 15% off when
                  paying with your MyMonty Mastercard.
                </p>

                <div className="mt-auto text-xs px-4 py-2 rounded-full bg-gray-100 w-fit font-bold">
                  ENTERTAINMENT & MEDIA
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== NESTED GRID BLOCK (Fuel & Automotive) ===== */}
        {isVisible('Fuel & Automotive') && (
          <div className="grid grid-cols-12 gap-8 col-span-12 lg:col-span-4 overflow-hidden">
            {/* ===== IMAGE CARD ===== */}
            <div className="col-span-6 lg:col-span-6 rounded-3xl bg-gray-100 overflow-hidden aspect-square">
              <Image
                src="/mymonty-logo.webp"
                alt=""
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ===== PHONE CARD ===== */}
            <div className="col-span-6 lg:col-span-6 rounded-3xl overflow-hidden aspect-square">
              <Image
                className="w-full"
                src="/benefits-phone.webp"
                alt=""
                width={200}
                height={400}
              />
            </div>

            <div className="col-span-12 rounded-3xl">
              <Image
                className="w-full"
                src="/girl-using-phone.webp"
                alt=""
                width={200}
                height={400}
              />
            </div>
          </div>
        )}

        {/* ===== KETTANEH ===== */}
        {isVisible('Fuel & Automotive') && (
          <div className="col-span-12 lg:col-span-4 bg-[#EEF3F7] rounded-3xl p-8 relative overflow-hidden">
            <div className="h-full flex flex-col z-10 relative">
              <div className="flex justify-between items-center mb-6">
                <Image src="/kettaneh.webp" alt="OSN" width={52} height={52} />
                <span className="bg-black text-white text-xs px-4 py-2 rounded-full font-bold">
                  Special Interest Rate
                </span>
              </div>

              <div className="h-full flex flex-col space-y-12 mt-14">
                <div>
                  <h3 className="font-bold text-3xl">Ets. F.A Kettaneh S.A</h3>
                  <p className="text-gray-800">
                    Get <strong>4.99%</strong> interest <strong>instead of 7%</strong> on car loans
                    on Audi A3 cars, for employees receiving their salary on MyMonty.
                  </p>
                </div>
                <div className="mt-auto text-xs px-4 py-2 rounded-full bg-gray-100 w-fit font-bold">
                  ENTERTAINMENT & MEDIA
                </div>
              </div>
            </div>

            <Image
              src="/car-benefits.webp"
              alt=""
              width={260}
              height={160}
              className="absolute top-0 right-0 w-full h-full object-cover object-[35%] opacity-20"
            />
          </div>
        )}

        {/* ================= A.N. BOUKHATHER (WIDE) ================= */}
        {isVisible('Entertainment & Media') && (
          <div className="col-span-12 bg-[#EAF0FB] rounded-[40px] p-10">
            <div className="relative bg-white rounded-[32px] p-10 flex items-center gap-10">
              {/* Left */}
              <div className="flex-1 space-y-12">
                <div className="flex items-start gap-3">
                  <Image src="/an-boukhather.webp" alt="A.N. Boukhather" width={44} height={44} />
                  <div className="w-2/3">
                    <h3 className="text-2xl font-bold">A.N. Boukhather SAL</h3>
                    <p className="text-gray-800 max-w-xl">
                      Exclusive <strong>car loan deal on Mazda</strong> and <strong>Ford</strong>{' '}
                      cars for employees receiving their salary on MyMonty.
                    </p>
                  </div>
                  <span className="absolute top-8 right-6 ml-auto bg-black text-white text-xs px-4 py-2 rounded-full font-bold">
                    4.99% Interest instead of 7%
                  </span>
                </div>
                <span className="inline-block text-xs px-4 py-2 rounded-full bg-gray-200 font-bold">
                  ENTERTAINMENT & MEDIA
                </span>
              </div>

              {/* Right */}
              <div className="flex-1 w-full">
                <Image
                  className="w-full mt-auto"
                  src="/ford-mazda.webp"
                  alt="Ford & Mazda"
                  width={260}
                  height={160}
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= PRENATAL ================= */}
        {isVisible('Babies & Family') && (
          <div className="col-span-12 lg:col-span-4 bg-[#EEF6E8] rounded-[32px] relative overflow-hidden">
            <div className="flex items-center justify-between ml-6 my-6 bg-[#DEEBD6] p-4 rounded-full rounded-r-none">
              <Image src="/prenatal.webp" alt="Prenatal" width={51} height={51} />
              <span className="bg-black text-white text-xs px-4 py-2 rounded-full font-bold">
                10% Discount
              </span>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-bold mb-2">Prenatal</h3>
              <p className="text-gray-800">
                Get <strong>10% discount</strong> by paying with your MyMonty card. Offer is excluding
                discounted items.
              </p>

              <span className="inline-block mt-6 text-xs px-4 py-2 rounded-full bg-gray-100 font-bold">
                BABIES & FAMILY
              </span>

              <Image
                src="/prenatal-woman.webp"
                alt=""
                width={300}
                height={400}
                className="absolute bottom-0 right-0 opacity-20"
              />
            </div>
          </div>
        )}

        {/* ================= TOY STORE (PHONE) ================= */}
        {isVisible('Babies & Family') && (
          <div className="col-span-12 overflow-hidden lg:col-span-4 bg-[#F2F8FA] rounded-[32px] px-8 flex justify-center items-end pt-8">
            <div className="relative">
              <img src="/iphone-frame.webp" className="w-full" />

              <div className="absolute top-[20%] flex flex-col justify-center px-8">
                <div className="bg-white rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <img src="/toystore.webp" alt="Toy Store" width={36} height={36} />
                    <span className="bg-black text-white text-xs px-3 py-1 rounded-full font-bold">
                      10% Discount
                    </span>
                  </div>

                  <h3 className="text-lg font-bold">Toy Store</h3>
                  <p className="text-sm text-gray-700">
                    Get <strong>15% discount</strong> by paying with your MyMonty card. Offer is
                    excluding discounted items.
                  </p>

                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-gray-100 font-bold">
                    BABIES & FAMILY
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= ADI ================= */}
        {isVisible('Food & Beverage') && (
          <div className="col-span-12 lg:col-span-4 bg-[#F7F7F7] rounded-[32px] p-8">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-[#E6B84C] p-4 flex items-center justify-between">
                <Image src="/adi.webp" alt="ADI" width={40} height={40} />
                <span className="bg-black text-white text-xs px-4 py-2 rounded-full font-bold">
                  10% Discount
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">ADI</h3>
                <p className="text-gray-800">
                  Get <strong>10% discount</strong> by paying with your MyMonty card.
                </p>

                <span className="inline-block text-xs px-4 py-2 rounded-full bg-gray-100 font-bold">
                  FOOD & BEVERAGE
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ================= GRAND CINEMAS (WIDE) ================= */}
        {isVisible('Cinema') && (
          <div className="col-span-12 bg-[#EAF0FB] rounded-[40px] p-10">
            <div className="h-full flex max-lg:flex-col items-center gap-10">
              {/* Left */}
              <div className="relative flex-1 rounded-[32px] p-10 bg-white h-full space-y-12 w-full">
                <div className="flex items-start gap-3">
                  <Image src="/grand-cinemas.webp" alt="A.N. Boukhather" width={44} height={44} />
                  <div className="w-2/3">
                    <h3 className="text-2xl font-bold">Grand Cinemas</h3>
                    <p className="text-gray-800 max-w-xl">
                      Get 10% discount on tickets for all MyMonty cardholders (excluding public
                      holidays).
                    </p>
                  </div>
                  <span className="absolute top-8 right-6 ml-auto bg-black text-white text-xs px-4 py-2 rounded-full font-bold">
                    10% Discount
                  </span>
                </div>
                <span className="inline-block text-xs px-4 py-2 rounded-full bg-gray-200 font-bold">
                  ENTERTAINMENT & MEDIA
                </span>
              </div>

              {/* Right */}
              <div className="flex gap-8 flex-1 w-full">
                <Image
                  className="w-full aspect-[3.5/4] object-cover mt-auto rounded-3xl"
                  src="/grand-cinemas-img2.webp"
                  alt="Grand Cinema"
                  width={260}
                  height={160}
                />
                <Image
                  className="w-full aspect-[3.5/4] object-cover mt-auto rounded-3xl"
                  src="/grand-cinemas-img1.webp"
                  alt="Grand Cinema"
                  width={260}
                  height={160}
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= DUNKIN ================= */}
        {isVisible('Food & Beverage') && (
          <div className="col-span-12 lg:col-span-5 bg-[#FFF1E5] rounded-[32px] p-8">
            <div className="grid grid-cols-12 gap-6 items-center h-full">
              {/* Text */}
              <div className="col-span-5 space-y-4">
                <Image src="/dunkin.webp" alt="Dunkin" width={48} height={48} />

                <h3 className="text-2xl font-bold">DUNKIN’</h3>

                <p className="text-gray-800">When paying with MyMonty card.</p>

                <span className="inline-block text-xs px-4 py-2 rounded-full bg-gray-100 font-bold">
                  FOOD & BEVERAGE
                </span>
              </div>

              {/* Image */}
              <div className="col-span-7 relative h-full">
                <span className="absolute top-4 bg-black text-white text-xs px-4 py-2 rounded-full z-10 font-bold left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                  10% Discount
                </span>

                <div className="rounded-3xl h-full overflow-hidden">
                  <img src="/dunkin-img.webp" alt="Dunkin Donuts" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= THE CASK & BARREL ================= */}
        {isVisible('Food & Beverage') && (
          <div className="col-span-12 lg:col-span-7 bg-[#F6F6F6] rounded-[32px] p-8">
            <div className="grid grid-cols-12 gap-6 items-center h-full">
              {/* Text */}
              <div className="col-span-7 space-y-4">
                <Image
                  src="/the-cask-and-barrel.webp"
                  alt="The Cask & Barrel"
                  width={48}
                  height={48}
                />

                <h3 className="text-2xl font-bold">The Cask & Barrel</h3>

                <p className="text-gray-800">
                  Get <strong>20% discount</strong> by paying with your MyMonty card. Offer is valid
                  during lunch time from 1pm to 4:30pm.
                </p>

                <span className="inline-block text-xs px-4 py-2 rounded-full bg-gray-100 font-bold">
                  FOOD & BEVERAGE
                </span>
              </div>

              {/* Image */}
              <div className="col-span-5 relative">
                <span className="absolute top-4 bg-black left-1/2 -translate-x-1/2 text-center text-white text-xs px-4 py-2 rounded-full z-10 font-bold">
                  10% Discount
                </span>

                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/the-cask-and-barrel-img.webp"
                    alt="The Cask & Barrel"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RewardsClient;
