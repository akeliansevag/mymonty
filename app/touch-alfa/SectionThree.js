import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionThree = () => {
    const items = [
        {
            icon: '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 20H25" stroke="white" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M52.0832 22.5H45.577C41.1163 22.5 37.5 25.8577 37.5 30C37.5 34.1423 41.1163 37.5 45.577 37.5H52.0832C52.2917 37.5 52.3957 37.5 52.4837 37.4948C53.832 37.4125 54.9057 36.4155 54.9942 35.1635C55 35.0818 55 34.985 55 34.7918V25.2082C55 25.015 55 24.9181 54.9942 24.8365C54.9057 23.5846 53.832 22.5874 52.4837 22.5054C52.3957 22.5 52.2917 22.5 52.0832 22.5Z" stroke="white" stroke-width="3.75"/><path d="M52.4125 22.5C52.2183 17.8192 51.5915 14.9494 49.571 12.9289C46.6422 10 41.928 10 32.5 10H25C15.5719 10 10.8579 10 7.92893 12.9289C5 15.8579 5 20.5719 5 30C5 39.428 5 44.1422 7.92893 47.071C10.8579 50 15.5719 50 25 50H32.5C41.928 50 46.6422 50 49.571 47.071C51.5915 45.0507 52.2183 42.1808 52.4125 37.5" stroke="white" stroke-width="3.75"/><path d="M44.9785 30H45.001" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            currency: 'USD',
            price: '0.70'
        },
        {
            icon: '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 20H25" stroke="white" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M52.0832 22.5H45.577C41.1163 22.5 37.5 25.8577 37.5 30C37.5 34.1423 41.1163 37.5 45.577 37.5H52.0832C52.2917 37.5 52.3957 37.5 52.4837 37.4948C53.832 37.4125 54.9057 36.4155 54.9942 35.1635C55 35.0818 55 34.985 55 34.7918V25.2082C55 25.015 55 24.9181 54.9942 24.8365C54.9057 23.5846 53.832 22.5874 52.4837 22.5054C52.3957 22.5 52.2917 22.5 52.0832 22.5Z" stroke="white" stroke-width="3.75"/><path d="M52.4125 22.5C52.2183 17.8192 51.5915 14.9494 49.571 12.9289C46.6422 10 41.928 10 32.5 10H25C15.5719 10 10.8579 10 7.92893 12.9289C5 15.8579 5 20.5719 5 30C5 39.428 5 44.1422 7.92893 47.071C10.8579 50 15.5719 50 25 50H32.5C41.928 50 46.6422 50 49.571 47.071C51.5915 45.0507 52.2183 42.1808 52.4125 37.5" stroke="white" stroke-width="3.75"/><path d="M44.9785 30H45.001" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            currency: 'LBP',
            price: '50,000'
        }
    ];
  return (
    <section className='lg:py-24 max-lg:py-10 bg-black text-white'>
        <div className='container'>
            <div className='flex max-lg:flex-col gap-10 lg:justify-between'>
                <div className='lg:w-1/3'>
                    <TextBlock title="FEES" description="These fees apply to transactions based on the selected currency" />
                </div>
                <div className='lg:w-2/3 flex lg:justify-between gap-10'>
                    {items.map((item)=>{
                        return (
                            <div className='w-1/2 flex flex-col lg:items-center gap-3'>
                                <div className='flex items-center gap-4'>
                                    <div className='item-icon' dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                                    <h4 className='font-bold text-2xl'>{item.currency}</h4>
                                </div>
                                <div className='lg:max-w-[200px] max-lg:max-w-[150px] w-full h-[1px] bg-white'></div>
                                <p className='mt-4'>{item.price}</p>
                            </div>
                        )
                    })}
                </div>
                
                
            </div>
            
        </div>
    </section>
  )
}

export default SectionThree;
