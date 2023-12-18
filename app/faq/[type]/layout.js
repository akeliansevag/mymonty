'use client';
import React from 'react';
import { FAQ_API } from '@/app/api/api';
import useFetch from '@/app/api/useFetch';
import Link from 'next/link';


const layout = ({ children, params }) => {
    const data = useFetch(`${FAQ_API}/${params.type}`);
    return (
        <div>
            <div className='flex gap-3 justify-center'>
            </div>
            {children}
        </div>


    )
};

export default layout;
