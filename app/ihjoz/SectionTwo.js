import React from 'react';
import TextBlock from '../components/TextBlock';
import Ticket from './Ticket';

const SectionTwo = () => {
  const items = [
    'Open MyMonty and go to "E-Services"', 'Enter your Ihjoz order number', 'Review the payment details displayed automatically', 'Confirm and pay directly from your wallet'
  ];
  return (
    <section className='max-lg:py-10 lg:py-24 bg-white'>
      <div className='container'>
        <div className='text-center'>
          <TextBlock title="Get Your Ticket in a Snap" description="Whether your gifting others or yourself, choose from platforms like <strong>Google Play, iTunes, eBay, Amazon</strong> and more. The best gifts are the ones that are easy to give (and fun to receive)." button={true} buttonColor="dark" center={true} />
        </div>
        <div className='bg-[#f7f7f7] rounded-2xl py-4 px-12 my-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-14'>
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
        <div className='flex max-lg:flex-col lg:items-center gap-10 mt-16 max-w-[1000px] mx-auto'>
          <div className='lg:w-1/2'>
            <img src='/transaction-fee.webp' />
          </div>
          <div className='lg:w-1/2'>
            <h3 className='uppercase font-black text-4xl'>TransactioN fee</h3>
            <div className='flex items-center gap-5'>
              <div className='font-black text-9xl'>1%</div>
              <h5 className='font-bold text-balance text-3xl max-w-[200px]'>of the transaction amount</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo;
