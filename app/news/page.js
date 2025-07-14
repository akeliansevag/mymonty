import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import news from '@/public/news.webp';
import News from './News';
import Head from 'next/head';

export const metadata = {
  title: websiteName + 'News',
  description: '',
};

const data = {
  title: 'What’s Happening at Mymonty?',
  subtitle: 'News',
  desc: 'Stay updated with the latest news, innovations, and milestones from MyMonty - your go-to source for everything shaping our fintech world',
  image: {
    inGrid: true,
    layout: 'half',
    url: news,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Download App'
    }
  }
}

const page = () => {
 
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://mymonty.com.lb/news/" />
      </Head>
      
      <Banner data={data} />

      <News />
    </div>
  );
};

export default page;
