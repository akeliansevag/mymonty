'use client';
import React, { useState } from 'react';

const Accordion = ({ title, items }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='mb-10'>
            <h2 className='mb-5 text-2xl font-bold'>{title}</h2>
            {items?.map((item, index) => {
                const isOpen = openIndex === index;
                let toggleClasses = isOpen ? 'max-h-96' : 'max-h-0';

                return (
                    <div
                        onClick={() => handleToggle(index)}
                        key={index}
                        className='bg-[#F9FAFB] mb-5 p-6 rounded-md overflow-hidden cursor-pointer'
                    >
                        <h3 className='text-xl flex justify-between items-center'>
                            <div>
                                {item.title}
                            </div>
                            <div className='text-[#98A2B3] rounded-full w-[20px] h-[20px] border-[2px] border-[#98A2B3] flex shrink-0 items-center justify-center'>
                                <span className='-mt-1'>
                                    {isOpen ? '-' : '+'}
                                </span>
                            </div>

                        </h3>
                        <div className={`html-content text-base overflow-hidden transition-all ${toggleClasses}`}>
                            <div className='pt-3' dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;

