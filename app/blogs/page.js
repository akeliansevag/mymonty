import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import blogs from '@/public/news.webp';
import Blogs from './Blogs';

export const metadata = {
  title: websiteName + 'Blog',
  description: '',
};

const data = {
  title: 'What’s Happening at Mymonty?',
  subtitle: 'Blogs',
  desc: 'Stay updated with the latest blogs, innovations, and milestones from MyMonty - your go-to source for everything shaping our fintech world',
  image: {
    inGrid: true,
    layout: 'half',
    url: blogs,
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

      <Blogs />
    </div>
  );
};

export default page;
