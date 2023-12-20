import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import { PRIVACY_API } from '../api/api';
import Legals from '../components/Legals';
import privacyImage from '@/public/personal/privacy.webp';

export const metadata = {
    title: websiteName + 'Privacy Policy',
    description: '',
};

const terms = () => {
    const data = {
        title: 'our Policy at Mymonty',
        subtitle: 'Privacy Policy',
        desc: 'Continuous Development: At MyMonty, we are dedicated to nurturing the professional',
        image: {
            inGrid: true,
            layout: 'half',
            url: privacyImage,
        },
        cta: {
            type: 'sfsfsdf',
            button: {
                name: 'Download app'
            }
        }
    };
    return (
        <div className={styles.privacyPolicy}>
            <Banner data={data} />
            <Legals api={PRIVACY_API} />
        </div>
    )
}

export default terms;
