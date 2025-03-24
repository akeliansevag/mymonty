import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionFive = () => {
  return (
    <section className='bg-white relative'>
        <div className='absolute w-full lg:h-[68%] max-lg:h-full bg-[#f7f7f7] bottom-0 z-0'></div>
        <div className='container relative z-10'>
            <div className='flex max-lg:flex-col-reverse gap-10 lg:items-end'>
                <div>
                    <img src='/start-paying-smarter.webp' className='max-lg:-mt-10'/>
                </div>
                <div className='lg:mb-14 max-lg:mt-10'>
                    <TextBlock title="start paying smarter!" description="Not on MyMonty yet? <strong>Download</strong> the app and get started!" button={true} buttonColor='dark' />
                </div>  
            </div>
        </div>
    </section>
  )
}

export default SectionFive;
