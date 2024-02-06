'use client';
import { FAQ_API } from '@/app/api/api';
import useFetch from '@/app/api/useFetch';
import Link from 'next/link';
import React from 'react';

const Questions = ({ params }) => {
    const { data } = useFetch(`${FAQ_API}/${params.type}/${params.topic}`);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data && data.data.map((question, index) => {
                return (
                    <Link key={index} className='block rounded-xl bg-gray-100 p-5' href={`/faq/${params.type}/${params.topic}/${question.slug}`}>
                        <div className=''>
                            {question.title}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Questions;
