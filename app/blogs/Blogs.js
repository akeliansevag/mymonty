'use client';
import React from 'react';
import { BLOGS_API } from '@/app/api/api';
import useFetch from '@/app/api/useFetch';
import Image from 'next/image';
import Link from 'next/link';

const Blogs = () => {
  const { data } = useFetch(`${BLOGS_API}`);
 
  return (
    <section className='pt-14 pb-14'>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>
            {data &&
                data.data.map((blogsItem, index) => (
                <div key={index} className="overflow-hidden rounded-[1.875rem] bg-gray-100">
                    <div className='aspect-video w-full relative'>
                      <Image className="w-full h-full object-cover" src={blogsItem.image} alt={blogsItem.title} width={1200} height={900} />
                    </div>
                    <div className="flex flex-col gap-4 px-10 py-14">
                      <p className="text-xl">
                        {new Intl.DateTimeFormat('en-US', {
                          month: 'short',
                          day: '2-digit',
                          year: 'numeric'
                        }).format(new Date(blogsItem.date))}
                      </p>
                      <Link href={`/blogs/${blogsItem.slug}`}><h3 className="text-4xl font-bold">{blogsItem.title}</h3></Link>
                      <div className="leading-8 line-clamp-2" dangerouslySetInnerHTML={{ __html: blogsItem.description }}></div>
                      <div>
                        <Link href={`/blogs/${blogsItem.slug}`} className='mm-button mt-8'>Read More</Link>
                      </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Blogs;
