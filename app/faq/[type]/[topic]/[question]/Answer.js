'use client';
import { FAQ_API } from '@/app/api/api';
import useFetch from '@/app/api/useFetch';
import React from 'react';

const Answer = ({ params }) => {
    const { data } = useFetch(`${FAQ_API}/${params.type}/${params.topic}/${params.question}`);

    return (
        <div>
            {data && (
                <>
                    <h3 className='text-2xl font-bold mb-2'>{data.data[0].title}</h3>
                    <div className='text-base html-content' dangerouslySetInnerHTML={{ __html: data.data[0].description }} />
                </>

            )}
        </div>
    )
}

export default Answer
