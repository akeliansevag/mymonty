'use client';
import React from 'react';
import Section from '../components/Section';
import useFetch from '../api/useFetch';

const Legals = ({ api }) => {
    const { data, loading, error } = useFetch(api);
    return (
        <Section>
            <div className='container'>
                {data && (
                    data.data?.map((item, index) => {
                        return (
                            <div key={index} className='text-base html-content' dangerouslySetInnerHTML={{ __html: item.description }} />
                        )
                    })
                )}
            </div>
        </Section>
    )
}

export default Legals;
