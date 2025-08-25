import React from 'react';

const HowTo = () => {
  return (
    <section className='bg-white max-lg:py-16 lg:py-24'>
        <div className='container'>
            <h2 className='section-title text-center'>How to Enter, Sign Up & Win</h2>
            <div className='flex max-lg:flex-col gap-5 mt-10 text-center'>
                <div className='lg:w-1/3 bg-[#F7F7F7] rounded-3xl py-7 lg:px-16 max-lg:px-10 flex flex-col gap-5'>
                    <h4 className='font-black text-[20px]'>STEP 1</h4>
                    <h3 className='smaller-title uppercase text-balance text-center'>Download the MyMonty App</h3>
                    <img src='/car-step-1.webp' className='max-lg:max-w-[350px] mx-auto w-full'/>
                </div>
                <div className='lg:w-1/3 bg-[#F7F7F7] rounded-3xl py-7 lg:px-16 max-lg:px-10 flex flex-col gap-5'>
                    <h4 className='font-black text-[20px]'>STEP 2</h4>
                    <h3 className='smaller-title uppercase text-balance text-center'>Create <br /> an Account</h3>
                    <img src='/car-step-2.webp' className='max-lg:max-w-[350px] mx-auto w-full'/>
                </div>
                <div className='lg:w-1/3 bg-[#F7F7F7] rounded-3xl py-7 lg:px-16 max-lg:px-10 flex flex-col'>
                    <h4 className='font-black text-[20px]'>THAT'S IT!</h4>
                    <h3 className='smaller-title uppercase text-balance text-center mt-5'>You’re entered automatically!</h3>
                    <img src='/youre-entered.webp' className='mx-auto w-full max-w-[250px]'/>
                </div>
            </div>


            <div className='rounded-3xl flex max-lg:flex-col overflow-hidden max-lg:mt-10 lg:mt-24'>
                <div className='max-lg:w-full lg:w-[calc(100%-100px)] bg-black text-white max-lg:p-10 lg:p-20 flex items-center'>
                  <div>
                    <h2 className='section-title'>Already an active* MyMonty user?</h2>
                    <p className='mt-5 text-pretty'>Your name automatically enters the draw!</p>
                    <p className='text-[var(--mm-blue)] text-base mt-5 text-pretty'>*At least one transaction in August & September</p>
                  </div>
                </div>
                <div className='w-full bg-black relative'>
                    <div class="absolute left-[-1px] top-[-1px] z-10 w-[100px] h-full bg-gradient-to-r from-black to-transparent"></div>
                    <img src='/youve-entered-a-draw-bg.webp' className='w-full'/>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default HowTo;
