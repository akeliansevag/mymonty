import React from 'react';

const SectionFive = () => {
  return (
    <section className='py-14 lg:pb-28 bg-white'> 
        <div className='container'>
            <h2 className='section-title text-center'>A Better Way to Grow Your Clinic</h2>
            <p className='text-center mt-5 text-pretty'>Offer your patients flexible financing and grow your practice with Lebanon’s first Health & Beauty credit card.</p>
            <div className='mt-10 flex max-md:flex-col gap-5'>
                <div className='w-full space-y-5'>
                    <div className='bg-[#f7f7f7] rounded-2xl p-8 flex items-center justify-center'>
                        <h4 className='text-center text-pretty text-[22px]'>Zero financial risk. We manage all collections.</h4>
                    </div>
                    <div className='bg-[#f7f7f7] rounded-2xl p-8 flex items-center justify-center'>
                        <h4 className='text-center text-pretty text-[22px]'>Boost patient conversion with interest free for 3 months.</h4>
                    </div>
                    <div className='bg-[#f7f7f7] rounded-2xl p-8 flex items-center justify-center'>
                        <h4 className='text-center text-pretty text-[22px]'>Increase procedure volumes and attract new clients.</h4>
                    </div>
                </div>
                <div className='bg-gray-300 w-full max-md:aspect-[4/5] rounded-2xl overflow-hidden relative'>
                    <img src='/montycare-10.webp' className='absolute left-0 top-0 w-full h-full object-cover z-10'/>
                </div>
                <div className='w-full flex flex-col gap-5'>
                    <div className='bg-[#f7f7f7] h-full rounded-2xl p-8 flex items-center justify-center'>
                        <h4 className='text-center text-pretty text-[22px]'>Guaranteed payments within standard MontyPay settlement cycle.</h4>
                    </div>
                    <div className='bg-[#f7f7f7] h-full rounded-2xl p-8 flex items-center justify-center'>
                        <h4 className='text-center text-pretty text-[22px]'>Marketing support. In-clinic and digital promotional materials.</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionFive;
