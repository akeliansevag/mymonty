import React from 'react'
import Questions from './Questions'
import { websiteName } from '@/app/config';

export async function generateMetadata({ params }) {
    return {
        title: `${(params.topic.charAt(0).toUpperCase() + params.topic.slice(1).replace(/-/g, ' ').toLowerCase())} ${websiteName}`, // Set the meta title dynamically
        description: 'Frequently Asked Questions',
    };
}

const page = ({ params }) => {
    return (
        <>
            <Questions params={params} />
        </>
    )
}

export default page
