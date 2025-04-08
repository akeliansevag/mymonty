import React from 'react';
import TextBlock from '../components/TextBlock';

const SectionOne = () => {
  return (
    <section className='bg-white lg:pt-24 max-lg:pt-10'>
        <div className='container'>
            <div className='flex flex-col lg:gap-24 max-lg:gap-14'>
                <div className="flex max-lg:flex-col lg:justify-between lg:items-center max-lg:gap-10 lg:gap-24">
                    <div className='lg:w-1/2'>
                        <TextBlock title="Book Smart, Pay Fast" description="Pay for your ihjoz ticket easily with the ihjoz feature on MyMonty! Just enter your reference number and complete your payment quickly, without the fuss. No stress, no extra steps!" button={true} buttonColor="dark" />
                    </div>
                    <div className="lg:w-1/2">
                        <img className='' src='/book-smart.webp' alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default SectionOne;
