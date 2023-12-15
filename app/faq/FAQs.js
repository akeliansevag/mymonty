'use client';
import React from 'react';
import Section from '../components/Section';
import Accordion from './Accordion';
import useFetch from '../api/useFetch';
import { FAQ_API } from '../api/api';
import Link from 'next/link';

const FAQs = () => {
    const { data, loading, error } = useFetch(FAQ_API);
    return (
        <Section>
            <div className='container'>

                <div>
                    <Link href='/faq/personal'>
                        Personal
                    </Link>
                    <Link href='/faq/business'>
                        Business
                    </Link>
                </div>

            </div>
        </Section>
    )
}

export default FAQs;
