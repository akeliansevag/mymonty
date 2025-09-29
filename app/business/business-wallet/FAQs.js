'use client';
import React, { useState } from 'react';
 
const faqData = [
  {
    question: 'How do I open a MyMonty Business account?',
    answer: 'How do I open a MyMonty Business account'
  },
  {
    question: 'Am I eligible for a MyMonty Business account?',
    answer: 'How do I open a MyMonty Business account'
  },
  {
    question: 'Is MyMonty Business account the right choice for my business?',
    answer: 'How do I open a MyMonty Business account'
  }
];
 
const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);
 
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <div className="container">
      <div className='flex max-lg:gap-10 lg:gap-18 max-lg:flex-col'>
        <div className='space-y-6'>
            <p className="text-[#FDFDFD]">Got Questions?</p>
            <h2 className="section-title text-balance">Mymonty business faqs</h2>
            <p className="text-[#FDFDFD]">Terms and Conditions apply*</p>
            <a href='' className='mm-button white'>Learn More</a>
        </div>
        <div>
            <div className="space-y-4">
            {faqData.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                <div key={index} className={`rounded-2xl p-10 cursor-pointer ${isOpen ? 'bg-[#1C1F21]' : 'bg-transparent'}`} onClick={() => toggleFAQ(index)}>
                  <button className="flex justify-between gap-5 w-full text-left items-baseline cursor-pointer">
                    <span className="text-2xl">{faq.question}</span>
                    <div className="w-[24px] h-[24px] shrink-0 rounded-full flex items-center justify-center border-[2px] border-[#ffffff30]">
                      <span className='text-[#ffffff30] font-bold inline-block inline-flex -mt-1'>{isOpen ? '−' : '+'}</span>
                    </div>
                  </button>
                  <div className={`mt-3 text-gray-100 transition-all duration-300 overflow-hidden ${ isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0' }`}>
                    <p className="text-lg">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default FAQs;
 