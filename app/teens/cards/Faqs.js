'use client';
import React, { useState } from 'react';
 
const faqData = [
  {
    question: 'What is the Teen Card?',
    answer: 'A supervised prepaid card for ages 11–17. Parents top up, track, and manage from the MyMonty app.'
  },
  {
    question: 'How do top-ups work?',
    answer: ''
  },
  {
    question: 'Where can it be used?',
    answer: ''
  },
  {
    question: 'Are there extra fees for the Teen Card?',
    answer: ''
  },
  
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(0);
     
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='relative py-20 overflow-x-hidden'>
            <h2 className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-none text-center uppercase'>FAQ</h2>
            
            <div className="container space-y-4 mt-16">
                {faqData.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                    <div key={index} className={`rounded-2xl p-10 cursor-pointer ${isOpen ? 'bg-[#F9FAFB]' : 'bg-transparent'}`} onClick={() => toggleFAQ(index)}>
                        <button className="flex justify-between gap-5 w-full text-left items-baseline cursor-pointer">
                            <span className="text-2xl">{faq.question}</span>
                            <div className="w-[24px] h-[24px] shrink-0 rounded-full flex items-center justify-center border-[2px] border-[#98A2B3]">
                                <span className='text-[#98A2B3] font-bold inline-block inline-flex -mt-1'>{isOpen ? '−' : '+'}</span>
                            </div>
                        </button>
                        <div className={`mt-3 text-[#475467] transition-all duration-300 overflow-hidden ${ isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0' }`}>
                            <p className="text-lg">{faq.answer}</p>
                        </div>
                    </div>
                );
            })}
            <div className='text-center'>
                <button className='mm-button mt-8'>View Fees & Limits</button>
            </div>

          </div>
        </section>
    )
}

export default Faqs;
