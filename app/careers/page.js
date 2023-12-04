import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import Banner from '../components/Banner';
import Link from 'next/link';
import Image from 'next/image';
import careers from '@/public/company/careers.png';
import growthOriented from '@/public/company/growth-oriented-environment.png';

export const metadata = {
  title: websiteName + 'Careers',
  description: '',
};

const data = {
  title: 'Join Our Dream Team',
  subtitle: 'Careers',
  desc: 'Don’t miss your chance! Check out our vacancies on LinkedIn now.',
  image:{
    inGrid: true, 
    layout: 'half',
    url: careers,
  },
  cta: {
    type: 'button',
    button: {
      name: 'Explore Careers'
    }
  }
}

const departments = {
  1: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Audit',
  },
  2: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Compliance & Legal',
  },
  3: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Risk',
  },
  4: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Product',
  },
  5: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Marketing',
  },
  6: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'IT security',
  },
  7: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Data',
  },
  8: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'IT',
  },
  9: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Operation',
  },
  10: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Network',
  },
  11: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Finance',
  },
  12: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'HR',
  },
  13: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9 15.25V41.75M28.5 25.85V41.75M39.1 36.45V41.75M55 28.5C55 43.1355 43.1355 55 28.5 55C13.8645 55 2 43.1355 2 28.5C2 13.8645 13.8645 2 28.5 2C43.1355 2 55 13.8645 55 28.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'name': 'Business development',
  },
}

const positions = {
  1: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  2: {
    'icon':  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  3: {
    'icon':  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  4: {
    'icon':  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  5: {
    'icon':  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  7: {
    'icon':  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
}

const Careers = () => {
  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Embark on Your Career Journey with Us</h2>
          <p className='leading-8 mt-4 text-center w-full md:w-2/3 mx-auto'>Our team is our biggest asset! We are dedicated to recognizing and cultivating talent from within, offering a transparent and well-defined career path for our valuable team members.<br /><br />
          We heavily invest in employee training programs, workshops, and mentorship initiatives, ensuring our team is not only well-equipped for their current roles but also ready for future challenges.</p>          
        </div>
      </section>

      <section className='pt-14 lg:pt-28'>
        <div className='relative'>
          <Image alt='Growth Oriented Environmemt' fill placeholder='blur' quality={100} sizes='100vw' className='!relative object-cover aspect-[4/7] md:aspect-auto'  src={growthOriented} />
          
          <div className='absolute top-0 flex flex-col justify-center items-center h-full w-full text-white'>
            <div className='container'>
              <div className='flex flex-col items-center gap-10'>
                <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none'>discover a nurturing and growth-oriented environment</h2>
                <p className='leading-8 mt-4 text-center w-full lg:w-2/3 mx-auto'>Whether you're just starting your career or aiming for the next milestone, discover a nurturing and growth-oriented environment that values your aspirations. We provide the resources needed to turn your career goals into reality.</p>  
                <button className='mm-button !bg-white !text-black w-max mt-5'>Join us now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20 bg-black text-white'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] leading-none'>Careers</h2>
          <div className='flex flex-wrap justify-center gap-10 text-center mt-14'>
            {Object.values(departments).map((department, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className='flex place-content-center rounded-3xl bg-gray-400 p-7'>
                {department.icon}
              </div>
              <h3 className='w-min'>{department.name}</h3>
            </div>
            ))}
          </div>
        </div>
      </section>

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] leading-none'>Our Departments</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative mt-20'>
            {Object.values(positions).map((position, index) => (
              <div key={index} className='lg:basis-1/3 overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                  <div className='flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white text-3xl font-bold'>
                  {position.icon}
                  </div>
                  <div className='mt-14'>
                    <h3 className='text-4xl font-bold'>{position.title}</h3>
                    <p className='leading-8 mt-4'>{position.description}</p>
                    <Link href={position.link} className='mm-button mt-8'>Join us now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
