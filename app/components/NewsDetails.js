'use client';
import React from "react";
import  useFetch from '@/app/api/useFetch';
import Image from 'next/image';
import { NEWS_API } from '@/app/api/api';
import Link from 'next/link';

const NewsDetails = ({params}) => {
    const { data } = useFetch(`${NEWS_API}/${params.slug}`);
    return (
        <section className='py-32'>
            <div className='container'>
                <div>
                    <Link href={`/news`} className='mm-button mt-8'>Back to News</Link>
                </div>
                {data && (
                    <div className='rounded-3xl overflow-hidden bg-[#f7f7f7] mt-12'>
                        <div className='w-full relative'>
                            <Image className='w-full' src={data.data[0].image} width={1200} height={900} alt={data.data[0].title} />
                        </div>
                        <div className='px-10 py-14'>
                            <p>
                                {new Intl.DateTimeFormat('en-US', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric'
                                }).format(new Date(data.data[0].date))}
                            </p>
                            <h1 className='text-pretty text-5xl font-bold mt-4 uppercase'>{data.data[0].title}</h1>
                            <div className='blog-content mt-4' dangerouslySetInnerHTML={{ __html: data.data[0].description }}></div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default NewsDetails;