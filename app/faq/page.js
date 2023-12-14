import React from 'react';
import Banner from '@/app/components/Banner';
import banner from '@/public/personal/code-of-conduct.webp';
import { websiteName } from '@/app/config';
import Section from '../components/Section';
import { faqData } from './data';
import Accordion from './Accordion';
import FAQs from './FAQs';

export const metadata = {
    title: websiteName + 'FAQ',
    description: '',
};

const faq = () => {
    const data = {
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
            <Banner data={data} />
            <FAQs />

        </>
    )
}

export default faq;
