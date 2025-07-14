import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import { COOKIE_API } from '../api/api';
import Legals from '../components/Legals';
import privacyImage from '@/public/personal/privacy.webp';
import SmallBanner from '../components/SmallBanner';
import Head from 'next/head';
export const metadata = {
    title: websiteName + 'Cookie Policy',
    description: '',
};

const cookie = () => {
    const data = {
        title: 'our Cookie Policy at Mymonty',
        subtitle: 'Cookie Policy',
        desc: '',
        image: {
            inGrid: true,
            layout: 'half',
            url: privacyImage,
        },
    };


    return (
        <div className={styles.privacyPolicy}>
            <Head>
                <link rel="canonical" href="https://mymonty.com.lb/cookie-policy/" />
            </Head>
            <SmallBanner title="our Cookie Policy at Mymonty" />
            <Legals api={COOKIE_API} />
        </div>
    )
}

export default cookie;
