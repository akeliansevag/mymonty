import React from 'react';
import Banner from '../components/Banner';
import contactUs from '@/public/personal/contact-us.webp';
import Contact from './Contact';

const ContactUs = () => {

  const data = {
    title: 'Do you have questions?',
    subtitle: 'Contact Us',
    desc: 'You can contact us Monday to Friday from 9:00 AM to 5:00 PM on WhatsApp at +961 71 871 871 or send us an email at supportlb@mymonty.com. If you need assistance outside these hours, don\'t hesitate to contact our 24/7 Call Center at +961 1 734 020.',
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
