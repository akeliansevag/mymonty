'use client';
import { FAQ_API } from '@/app/api/api';
import useFetch from '@/app/api/useFetch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Topics = ({ params }) => {
    const { data } = useFetch(`${FAQ_API}/${params.type}`);
    const pathname = usePathname();
    return (
        <ul className='flex flex-col gap-2'>
            {data && data.data.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={`${pathname.startsWith(`/faq/${params.type}/${item.slug}`) ? 'bg-gray-100' : ''} w-full block rounded-full text-base hover:bg-gray-100 py-2 px-4`} href={`/faq/${params.type}/${item.slug}`}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Topics;
