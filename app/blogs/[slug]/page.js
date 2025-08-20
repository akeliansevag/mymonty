import BlogDetails from '@/app/components/BlogDetails';
import React from 'react';
import { BLOGS_API } from '@/app/api/api';
import { websiteName } from '@/app/config';

export async function generateMetadata({ params }) {
    const res = await fetch(`${BLOGS_API}/${params.slug}`);
    const jsonData = await res.json();

    if (!jsonData.data || jsonData.data.length === 0) {
        return {
            title: "Blog Not Found",
            description: "The blog article you're looking for is not available.",
        };
    }

    const blogItem = jsonData.data[0];

    return {
        title: blogItem.title,
        description: blogItem.description.replace(/<[^>]*>?/gm, ''), // Remove HTML tags
        openGraph: {
            title: blogItem.title,
            description: blogItem.description.replace(/<[^>]*>?/gm, ''),
            images: [
                {
                    url: blogItem.image,
                    width: 1200,
                    height: 900,
                    alt: blogItem.title,
                },
            ],
        },
    };
}

const page = ({params}) => {
  return (
    <>
      <BlogDetails params={params} />
    </>
  );
}

export default page;