'use client';
import React from 'react';
import Section from '../components/Section';
import Accordion from './Accordion';
import useFetch from '../api/useFetch';
import { FAQ_API } from '../api/api';

const FAQs = () => {
    const { data, loading, error } = useFetch(FAQ_API);
    return (
        <Section>
            <div className='container'>
                {data && (
                    data.data?.map((item, index) => {
                        return (
                            <Accordion key={index} items={item.faqs} title={item.title} />
                        )
                    })
                )}
            </div>
        </Section>
    )
}

export default FAQs;
