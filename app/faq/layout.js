import React from 'react';
import Banner from '@/app/components/Banner';
import banner from '@/public/faq-banner.webp';
import Section from '../components/Section';
import Types from './Types';

const layout = ({ children }) => {
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
                <div className='container max-w-5xl'>
                    {/* <Types /> */}
                    <h1 className='text-center text-3xl'>Personal</h1>
                    <div className='mt-10'>
                        {children}
                    </div>

                </div>
            </Section>
        </>
    )
}

export default layout;
