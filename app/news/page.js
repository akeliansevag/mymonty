import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import news from '@/public/news.webp';
import News from './News';

export const metadata = {
  title: 'News' + websiteName,
  description: 'Get the latest news & updates from MyMonty. Stay informed about new features, partnerships & digital finance developments in Lebanon. Read our news.',
};

const data = {
  title: 'MyMonty News: Latest Updates & Announcements',
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
\
      
      <Banner data={data} />

      <News />
    </div>
  );
};

export default page;
