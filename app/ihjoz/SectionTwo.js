import React from 'react';
import TextBlock from '../components/TextBlock';
import Ticket from './Ticket';

const SectionTwo = () => {
  const items = [
    'Open MyMonty and go to "E-Services"', 'Enter your ihjoz order number', 'Review the payment details displayed automatically', 'Confirm and pay directly from your wallet'
  ];
  return (
    <section className='max-lg:py-10 lg:py-24 bg-white'>
      <div className='container'>
        
        <div className='bg-[#f7f7f7] rounded-2xl max-lg:py-12 lg:py-24 px-12'>
          <div className='text-center'>
            <TextBlock title="Get Your Ticket in a Snap" button={true} buttonColor="dark" center={true} />
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-14 mt-10 max-w-[1000px] mx-auto'>
            {
              items.map((item,index)=>{
                return (
                  <div className=''>
                    <Ticket index={index+1} title={item}/>  
                  </div>
                      
                )
              })
            }
          </div>
          
        </div>
        <div className='flex max-lg:flex-col lg:items-center gap-10 max-lg:mt-10 lg:mt-24 max-w-[1000px] mx-auto'>
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
  )
}

export default SectionTwo;
