import React from 'react';
import { websiteName } from '@/app/config';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
    title: websiteName + 'FAQs',
    description: '',
};

const page = () => {

    return (
        <>
            <Head>
                <link rel="canonical" href="https://mymonty.com.lb/faqs/" />
            </Head>
            <Link href="/faq/personal">Personal</Link>
            <Link href="/faq/business">Business</Link>
            {/* <Link href="/faq/business">Business</Link> */}
        </>
    )
}

export default page;
