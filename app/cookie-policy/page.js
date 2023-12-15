import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import Section from '../components/Section';
import styles from './page.module.css';
import { COOKIE_API } from '../api/api';
import Legals from '../components/Legals';

export const metadata = {
    title: websiteName + 'Cookie Policy',
    description: '',
};

const cookie = () => {
    const data = {
        title: 'our Policy at Mymonty',
        subtitle: 'Privacy Policy',
        desc: 'Continuous Development: At MyMonty, we are dedicated to nurturing the professional',
        image: false,
    };


    return (
        <div className={styles.privacyPolicy}>
            <Banner data={data} />
            <Legals api={COOKIE_API} />
        </div>
    )
}

export default cookie;
