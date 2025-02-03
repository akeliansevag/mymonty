import React  from 'react';
import Answer from './Answer';
import { FAQ_API } from '@/app/api/api';
import { websiteName } from '@/app/config';

export async function generateMetadata({ params }) {
    // Fetch data from the API
    const res = await fetch(`${FAQ_API}/${params.type}/${params.topic}/${params.question}`);
    const data = await res.json();

    // Extract the title from the API response
    const title = data?.data?.[0]?.title;
    return {
        title: `${websiteName} ${title}`, // Set the meta title dynamically
        description: 'Frequently Asked Questions',
    };
}

const page = ({ params }) => {
    return (
        <div>
            <Answer params={params} />
        </div>
    )
}

export default page;
