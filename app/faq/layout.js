"use client";
import React from 'react'
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/code-of-conduct.webp';
import Section from '../components/Section';
import Link from 'next/link';
import { FAQ_API } from '../api/api';
import useFetch from '../api/useFetch';

const layout = ({ children }) => {
    const { data, loading, error } = useFetch(FAQ_API);
    const bannerData = {
        title: 'Frequently Asked Questions',
        subtitle: 'FAQ',
        desc: 'Our team is always ready to assist you or answer your inquiries. Fill out this form to reach us.',
        image: {
            inGrid: true,
            layout: 'half',
            url: banner,
        },
        cta: {
            type: 'link',
            link: {
                name: 'Contact Us',
                url: '/contact-us'
            }
        }
    };
    return (
        <>
            <Banner data={bannerData} />
            <Section>
                <div className='container'>
                    <div className='flex gap-3 justify-center'>
                        <div className='flex gap-3'>
                            {data && data.data.map((type, index) => {
                                return (
                                    <Link key={index} href={`/faq/${type.title}`}>{type.title}</Link>
                                )
                            })}
                        </div>

                    </div>
                    {children}
                </div>

            </Section>
        </>
    )
}

export default layout
