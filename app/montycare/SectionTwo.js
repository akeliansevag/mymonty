import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionTwo = () => {
  return (
    <section className='bg-white py-14 lg:pb-28'>
      <div className='container'>
        <div className='flex items-center lg:justify-between max-lg:flex-col gap-5'>
          <div className='md:w-1/2'>
            <TextBlock title="Your Care, Simplified." description="Get the treatment you want without the wait. 
Montycare lets you pay over time with a simple, flexible credit line you can use at leading clinics across Lebanon. Fast approval, easy payments, zero complications." button={true} buttonColor="dark" />
          </div>
          <div>
            <img src='/montycare-6.webp' className='max-w-[450px] w-full'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
