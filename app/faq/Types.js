'use client';
import React from 'react';
import { FAQ_API } from '../api/api';
import useFetch from '../api/useFetch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Types = () => {
    const pathname = usePathname();
    const { data, loading, error } = useFetch(FAQ_API);
    return (
        <div className='flex gap-3 justify-center'>
            <div className=' bg-gray-100 p-[2px] rounded-full flex'>
                {data && data.data.map((type, index) => {
                    return (
                        <div>
                            <Link className={`${pathname.startsWith('/faq/' + type.slug) ? 'bg-white' : ''} rounded-full text-lg py-2 px-10 block leading-none`} key={index} href={`/faq/${type.slug}`}>{type.title}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Types;
