import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionFive = () => {
  return (
    <section className='bg-white relative'>
        <div className='absolute w-full max-lg:h-full lg:h-[75%] bg-[#f7f7f7] bottom-0 z-0'></div>
        <div className='container relative z-10'>
            <div className='flex max-lg:flex-col-reverse gap-10 lg:items-end'>
                <div className='lg:w-1/3'>
                    <img src='/start-paying-smarter.webp' className='max-lg:max-w-[300px] max-lg:mx-auto w-full' width="844" height="1012" alt="Start paying smarter" />
                </div>
                <div className='lg:mb-14 lg:w-2/3 max-lg:mt-10'>
                    <TextBlock noMaxWidth={true} title="start paying smarter!" description="Not on MyMonty yet? <strong>Download</strong> the app and get started!" button={true} buttonColor='dark' />
                </div>  
            </div>
        </div>
    </section>
  )
}

export default SectionFive;
