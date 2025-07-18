import NewsDetails from '@/app/components/NewsDetails';
import React from 'react';
import { NEWS_API } from '@/app/api/api';
import { websiteName } from '@/app/config';

export async function generateMetadata({ params }) {
    const res = await fetch(`${NEWS_API}/${params.slug}`);
    const jsonData = await res.json();

    if (!jsonData.data || jsonData.data.length === 0) {
        return {
            title: "News Not Found",
            description: "The news article you're looking for is not available.",
        };
    }

    const newsItem = jsonData.data[0];

    return {
        title: newsItem.title + websiteName,
        description: newsItem.description.replace(/<[^>]*>?/gm, ''), // Remove HTML tags
        openGraph: {
            title: newsItem.title + websiteName,
            description: newsItem.description.replace(/<[^>]*>?/gm, ''),
            images: [
                {
                    url: newsItem.image,
                    width: 1200,
                    height: 900,
                    alt: newsItem.title,
                },
            ],
        },
    };
}

const page = ({params}) => {
  return (
    <NewsDetails params={params} />
  );
}

export default page;