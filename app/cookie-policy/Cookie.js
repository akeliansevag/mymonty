'use client';
import React from 'react';
import Section from '../components/Section';
import useFetch from '../api/useFetch';
import { COOKIE_API } from '../api/api';

const Cookie = () => {
    const { data, loading, error } = useFetch(COOKIE_API);
    console.log(data)
    return (
        <Section>
            <div className='container'>
                {data && (
                    data.data?.map((item, index) => {
                        return (
                            <>
                                {item.description}
                            </>
                        )
                    })
                )}
            </div>
        </Section>
    )
}

export default Cookie;
