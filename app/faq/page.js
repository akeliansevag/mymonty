import React from 'react';
import { websiteName } from '@/app/config';
import Link from 'next/link';

export const metadata = {
    title: websiteName + 'FAQs',
    description: '',
};

const page = () => {

    return (
        <>
            <Link href="/faq/personal">Personal</Link>
            <Link href="/faq/business">Business</Link>
            {/* <Link href="/faq/business">Business</Link> */}
        </>
    )
}

export default page;
