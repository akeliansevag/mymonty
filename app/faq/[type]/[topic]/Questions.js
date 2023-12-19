'use client';
import { FAQ_API } from '@/app/api/api';
import useFetch from '@/app/api/useFetch';
import Link from 'next/link';
import React from 'react';

const Questions = ({ params }) => {
    const { data } = useFetch(`${FAQ_API}/${params.type}/${params.topic}`);
    return (
        <div className="grid grid-cols-2 gap-5">
            {data && data.data.map((question, index) => {
                return (
                    <div key={index} className='rounded-xl bg-gray-100 p-5'>
                        <Link href={`/faq/${params.type}/${params.topic}/${question.slug}`}>{question.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Questions;
