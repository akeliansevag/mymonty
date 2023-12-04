import React from 'react';
import Banner from '@/app/components/Banner';
import banner from '@/public/faq-banner.png'
import { websiteName } from '@/app/config';
import Section from '../components/Section';
import { faqData } from './data';
import Accordion from './Accordion';

export const metadata = {
    title: websiteName + 'FAQ',
    description: '',
};

const faq = () => {
    const data = {
        title: 'FAQ',
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
            <Section>
                <div className='container'>
                    {faqData && (
                        faqData.map((item, index) => {
                            return (
                                <Accordion key={index} items={item.children} title={item.title} />
                            )
                        })
                    )}
                </div>
            </Section>
        </>
    )
}

export default faq;
