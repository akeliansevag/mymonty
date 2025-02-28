import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import news from '@/public/news.webp';
import News from './News';

export const metadata = {
  title: websiteName + 'Code of Conduct',
  description: '',
};

const data = {
  title: 'What’s Happening at Mymonty?',
  subtitle: 'Code of Conduct',
  desc: 'We\'re committed to revolutionizing the global approach to money – to simplify, enhance, and enrich the experience for everyone.',
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
      <Banner data={data} />

      <News />
    </div>
  );
};

export default page;
