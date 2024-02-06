'use client';
import React, { useEffect, useState } from 'react';
import { FAQ_API } from '../api/api';
import useFetch from '../api/useFetch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Types = () => {
    const pathname = usePathname();
    const { data, loading, error } = useFetch(FAQ_API);
    const [selectedClasses, setSelectedClasses] = useState('');
    const handleSelect = (index) => {
        if (index == 0) {
            setSelectedClasses('translate-x-0');
        }
        if (index == 1) {
            setSelectedClasses('translate-x-[calc(100%-4px)]');
        }
    };
    useEffect(() => {
        if (pathname.startsWith('/faq/personal')) {
            setSelectedClasses('translate-x-0');
        }
        if (pathname.startsWith('/faq/business')) {
            setSelectedClasses('translate-x-[calc(100%-4px)]');
        }
    }, [])
    return (
        <div className='flex gap-3 justify-center'>
            <div className=' bg-gray-100 p-[2px] rounded-full flex relative'>
                <div className={`absolute h-[90%] z-0 top-1/2 -translate-y-1/2  rounded-full transition-all bg-white ${selectedClasses} w-1/2`}></div>
                {data && data.data.map((type, index) => {
                    return (
                        <div key={index} className='flex-1'>
                            <Link onClick={() => handleSelect(index)} className={`relative z-1 rounded-full text-lg py-2 px-10 block leading-none`} href={`/faq/${type.slug}`}>{type.title}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Types;
