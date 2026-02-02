import React from 'react';
import TextBlock from './TextBlock';

const Branches = ({title,description,info}) => {
  return (
    <section className='bg-white lg:py-28 max-lg:py-18'>
        <div className='container'>
            <div className='text-center'>
                <TextBlock center={true} title={title} description={description} />
            </div>
            <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-5 my-10'>
                <div className='rounded-2xl relative overflow-hidden w-full p-10'>
                    <img className='w-full h-full object-cover absolute top-0 left-0' src="/gefinor.webp" alt="Gefinor" />
                    <div className='bg-[#00000060] absolute top-0 left-0 w-full h-full'></div>
                    <div className='relative z-10 text-center text-white'>
                        <h3 className='font-black text-3xl mb-4 uppercase'>GEFINOR, HAMRA</h3>
                        <h4 className='text-bold text-lg'>9:30 AM to 4 PM,</h4>
                        <h4 className='text-bold text-lg'>Monday To Friday</h4>
                        {/* <a href='' className='mm-button white mt-5'>Learn More</a> */}
                    </div>
                </div>
                <div className='rounded-2xl relative overflow-hidden w-full p-10'>
                    <img className='w-full h-full object-cover absolute top-0 left-0' src="/beirut-souks.webp" alt="Beirut Souks" />
                    <div className='bg-[#00000060] absolute top-0 left-0 w-full h-full'></div>
                    <div className='relative z-10 text-center text-white'>
                        <h3 className='font-black text-3xl mb-4 uppercase'>Beirut Souks</h3>
                        <h4 className='text-bold text-lg'>10 AM to 10 PM,</h4>
                        <h4 className='text-bold text-lg'>Seven Days a Week</h4>
                        {/* <a href='' className='mm-button white mt-5'>Learn More</a> */}
                    </div>
                </div>
                <div className='rounded-2xl relative overflow-hidden w-full p-10'>
                    <img className='w-full h-full object-cover absolute top-0 left-0' src="/abc-verdun.webp" alt="ABC Verdun" />
                    <div className='bg-[#00000060] absolute top-0 left-0 w-full h-full'></div>
                    <div className='relative z-10 text-center text-white'>
                        <h3 className='font-black text-3xl mb-4 uppercase'>ABC Verdun</h3>
                        <h4 className='text-bold text-lg'>10 AM to 10 PM,</h4>
                        <h4 className='text-bold text-lg'>Seven Days a Week</h4>
                        {/* <a href='' className='mm-button white mt-5'>Learn More</a> */}
                    </div>
                </div>
                <div className='rounded-2xl relative overflow-hidden w-full p-10'>
                    <img className='w-full h-full object-cover absolute top-0 left-0' src="/abc-dbayeh.webp" alt="ABC Dbayeh" />
                    <div className='bg-[#00000060] absolute top-0 left-0 w-full h-full'></div>
                    <div className='relative z-10 text-center text-white'>
                        <h3 className='font-black text-3xl mb-4 uppercase'>ABC Dbayeh</h3>
                        <h4 className='text-bold text-lg'>10 AM to 10 PM,</h4>
                        <h4 className='text-bold text-lg'>Seven Days a Week</h4>
                        {/* <a href='' className='mm-button white mt-5'>Learn More</a> */}
                    </div>
                </div>
                
            </div>
            <div className='text-center'>
                <p>{info}</p>
            </div>
            
        </div>
    </section>
  )
}

export default Branches;