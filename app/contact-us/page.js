import React from 'react';
import Banner from '../components/Banner';
import contactUs from '@/public/personal/contact-us.webp';
import Contact from './Contact';
import { websiteName } from '@/app/config';
export const metadata = {
  title: 'Contact Us' + websiteName,
  description: 'Need assistance? Contact MyMonty\'s support team in Lebanon. Get help with your digital banking queries & app support. Reach out today!',
};

const ContactUs = () => {
  const data = {
    title: 'Do you have questions?',
    subtitle: 'Contact Us',
    desc: 'You can contact us Monday to Friday from 9:00 AM to 5:00 PM on WhatsApp at <a className="text-blue-500" target="_blank" href="https://wa.me/96171871871">+961 71 871 871</a> or send us an email at <a className="text-blue-500" href="supportlb@mymonty.com" target="_blank">supportlb@mymonty.com</a>. If you need assistance outside these hours, don\'t hesitate to contact our 24/7 Call Center at <a className="text-blue-500" target="_blank" href="tel:9611734020">+961 1 734 020</a>.',
    image: {
      inGrid: true,
      layout: 'half',
      url: contactUs,
    },
  };

  return (
    <div>
      <Banner data={data} />
      <Contact />
    </div>
  );
};

export default ContactUs;
