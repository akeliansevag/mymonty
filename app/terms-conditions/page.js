import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import { TERMS_API } from '../api/api';
import Legals from '../components/Legals';
import termsImage from '@/public/personal/terms-and-conditions.webp';

export const metadata = {
    title: websiteName + 'Terms & Conditions',
    description: ''
};

const terms = () => {
    const data = {
        title: 'our terms and conditions',
        subtitle: 'Terms and Conditions',
        desc: '',
        image: {
            inGrid: true,
            layout: 'half',
            url: termsImage,
        }
    };
    return (
        <div className={styles.terms}>
            <Banner data={data} />
            <Legals api={TERMS_API} />
        </div>
    )
}

export default terms;
