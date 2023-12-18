'use client';
import React from 'react';
import { FAQ_API } from '../api/api';
import useFetch from '../api/useFetch';
import Link from 'next/link';

const Types = () => {
    const { data, loading, error } = useFetch(FAQ_API);
    return (
        <div className='flex gap-3 justify-center'>
            <div className=' bg-gray-300 p-[2px] rounded-full flex'>
                {data && data.data.map((type, index) => {
                    return (
                        <div>
                            <Link className='rounded-full py-1 px-10 block leading-none ' key={index} href={`/faq/${type.title}`}>{type.title}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Types;
