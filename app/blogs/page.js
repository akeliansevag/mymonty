import React from 'react';
import { websiteName } from '@/app/config';
import Banner from '../components/Banner';
import blogs from '@/public/news.webp';
import Blogs from './Blogs';
export const metadata = {
  title: 'Blog' + websiteName,
  description: 'Stay informed with MyMonty\'s blog. Get the latest insights on digital banking, fintech trends & financial tips for Lebanon. Read our articles.',
};

const data = {
  title: 'MyMonty Blog: Insights into Digital Finance',
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
