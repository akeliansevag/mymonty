'use client';
import React from 'react';
import { NEWS_API } from '@/app/api/api';
import useFetch from '@/app/api/useFetch';
import Image from 'next/image';
import Link from 'next/link';

const News = () => {
  const { data } = useFetch(`${NEWS_API}`);
 
  return (
    <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>
            {data &&
                data.data.map((newsItem, index) => (
                <div key={index} className="overflow-hidden rounded-[1.875rem] bg-gray-100">
                    <div className='aspect-video w-full relative'>
                      <Image className="w-full h-full object-cover" src={newsItem.image} alt={newsItem.title} width={1200} height={900} />
                    </div>
                    <div className="flex flex-col gap-4 px-10 py-14">
                      <p className="text-xl">
                        {new Intl.DateTimeFormat('en-US', {
                          month: 'short',
                          day: '2-digit',
                          year: 'numeric'
                        }).format(new Date(newsItem.date))}
                      </p>
                      <Link href={`/news/${newsItem.slug}`}><h3 className="text-4xl font-bold">{newsItem.title}</h3></Link>
                      <div className="leading-8 line-clamp-2" dangerouslySetInnerHTML={{ __html: newsItem.description }}></div>
                      <div>
                        <Link href={`/news/${newsItem.slug}`} className='mm-button mt-8'>Read More</Link>
                      </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default News;
