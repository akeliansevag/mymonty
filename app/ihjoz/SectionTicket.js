'use client';
import React, { useEffect, useState, useRef } from 'react';
import TextBlock from '../components/TextBlock';
import Ticket from './Ticket';

const SectionTicket = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const items = [
    'Open MyMonty and go to "E-Services"',
    'Enter your ihjoz order number',
    'Review the payment details displayed automatically',
    'Confirm and pay directly from your wallet'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsInView(visible);

        if (!visible) {
          setSelectedIndex(0); // 🔁 Reset index when out of view
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setSelectedIndex(prev =>
        prev < items.length - 1 ? prev + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView, items.length]);

  return (
    <section ref={sectionRef} className='bg-white lg:py-24 max-lg:py-10'>
      <div className='container'>
        <div className='flex flex-col lg:gap-24 max-lg:gap-14'>
          <div className="flex max-lg:flex-col lg:justify-between lg:items-center max-lg:gap-10 lg:gap-24">
            <div className='lg:w-1/3'>
              <TextBlock title="Get Your Ticket in a Snap" button={true} buttonColor="dark" />
            </div>
            <div className="lg:w-1/2">
              <div className='overflow-hidden rounded-3xl relative aspect-video flex items-center justify-center'>
                <div className='absolute w-full h-full bg-[#D6104EB2] top-0 left-0 z-10'></div>
                <img className='absolute object-cover w-full h-full top-0 left-0' src='/get-your-ticket-in-a-snap.webp' />
                <div className='relative z-10 w-full max-w-[300px] mx-auto'>
                  <Ticket index={selectedIndex + 1} title={items[selectedIndex]} />
                </div>          
              </div>
            </div>
          </div>
        </div>

        <div className='flex max-lg:flex-col lg:items-center gap-10 max-lg:mt-10 lg:mt-32 max-w-[1000px] mx-auto'>
          <div className='lg:w-1/2'>
            <img src='/transaction-fee.webp' />
          </div>
          <div className='lg:w-1/2'>
            <h3 className='uppercase font-black text-4xl max-lg:text-center'>TransactioN fee</h3>
            <div className='flex max-lg:justify-self-center items-center gap-5'>
              <div className='font-black text-9xl'>1%</div>
              <h5 className='font-bold text-balance text-3xl'>of the <br /> transaction <br /> amount</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTicket;