'use client';
import React from 'react';
import Section from '../components/Section';
import useFetch from '../api/useFetch';

const Legals = ({ api }) => {
    const { data, loading, error } = useFetch(api);
    return (
        <div className='container py-10 lg:py-20 relative'>
            {data && (
                data.data?.map((item, index) => {
                    return (
                        <div key={index} className='text-base html-content' dangerouslySetInnerHTML={{ __html: item.description }} />
                    )
                })
            )}
        </div>
    )
}

export default Legals;
