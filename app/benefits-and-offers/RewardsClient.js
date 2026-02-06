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

const rewards = [
  {
    id: 1,
    title: 'MEDCO',
    description:
      'Premium fuel savings for your entire fleet at over 2,000 stations nationwide.',
    category: 'Fuel & Automotive',
    badge: 'Win a YOYO Car',
    image: '/images/medco.png',
    link: '/benefits/medco',
  },
  {
    id: 2,
    title: 'Anghami Plus',
    description: 'Get 4 months free subscription and 15% off.',
    category: 'Entertainment & Media',
    badge: '4 Months On Us • 15% OFF',
    image: '/images/anghami.png',
    link: '/benefits/anghami',
  },
];

const RewardsClient = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRewards =
    activeCategory === 'All'
      ? rewards
      : rewards.filter(r => r.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Search + Date */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search keyword..."
          className="flex-1 rounded-full border px-5 py-3 outline-none"
        />

        <button className="rounded-full bg-blue-600 text-white px-6 py-3">
          Valid from January 1 – 31
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm border transition
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredRewards.map(item => (
          <Link
            key={item.id}
            href={item.link}
            className="rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition flex flex-col gap-3"
          >
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-44 object-cover"
              />
              {item.badge && (
                <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>

            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>

            <span className="mt-auto text-xs px-3 py-1 rounded-full bg-gray-100 w-fit">
              {item.category}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RewardsClient;
