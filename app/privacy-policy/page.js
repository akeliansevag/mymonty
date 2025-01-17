import React from 'react';
import Banner from '@/app/components/Banner';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import { PRIVACY_API } from '../api/api';
import Legals from '../components/Legals';
import privacyImage from '@/public/personal/privacy.webp';
import SmallBanner from '../components/SmallBanner';

export const metadata = {
    title: websiteName + 'Privacy Policy - Data Protection',
    description: 'Learn more about our privacy policy at My Monty as we are committed to handling your personal data in a fair, secure, and transparent manner.',
};

const terms = () => {
    const data = {
        title: 'our Policy at Mymonty',
        subtitle: 'Privacy Policy',
        desc: '',
        image: {
            inGrid: true,
            layout: 'half',
            url: privacyImage,
        },
        cta: false
    };
    return (
        <div className={styles.privacyPolicy}>
            <SmallBanner title="Our Policy at MyMonty" />
            <Legals api={PRIVACY_API} />
        </div>
    )
}

export default terms;
