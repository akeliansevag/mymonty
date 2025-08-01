import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionFour = () => {
  return (
    <section className='lg:py-24 max-lg:py-10 bg-white'>
        <div className='container'>
            <div className='flex max-w-[1000px] mx-auto max-lg:flex-col lg:items-center justify-between gap-10'>
                <div className='lg:w-1/2'>
                    <img src='/never-miss.webp' alt="2 people taking a photo" width="1150" height="648" />
                </div>
                <div className='lg:w-1/2 max-lg:text-center'>
                    <TextBlock title="Never miss out on the fun with ihjoz and Mymonty!" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionFour;
