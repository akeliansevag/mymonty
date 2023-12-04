import React from 'react';
import Banner from '../components/Banner';
import contactUs from '@/public/company/contact-us.png';
import Contact from './Contact';

const ContactUs = () => {

  const data = {
    title: 'Do you have questions?',
    subtitle: 'Contact Us',
    desc: 'Our team is always ready to assist you or answer your inquiries. Fill out this form to reach us.',
    image: {
      inGrid: true,
      layout: 'half',
      url: contactUs,
    },
    cta: {
      type: 'button',
      button: {
        name: 'Contact Us',
      },
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
