import React from 'react';

const SectionThree = () => {
  const items = [
    {
        title: 'Browse & Choose',
        description: 'Open the app, head to the "E-services" tab, and browse through categories like gaming, gifts, media, and fashion.'
    },
    {
        title: 'Pick Your Merchant',
        description: 'Once you’ve picked your category, choose your favorite merchant (eBay, Netflix, Steam, etc.).'
    },
    {
        title: 'Select Your Voucher',
        description: 'Pick the voucher you want to buy. We’ve got a wide range to suit whatever you’re after!'
    },
    {
        title: 'Complete Your Purchase',
        description: 'Check out the voucher details, click "Continue," and you’re ready to go! You’ll receive your voucher instantly.'
    },
  ];
  return (
    <section className='bg-white lg:py-24 max-lg:py-10'>
      <div className='container'>
        <div className='flex max-lg:flex-col max-lg:gap-10 lg:gap-12 lg:items-center'>
            <div className='lg:w-[60%]'>
                <video
                    src="/proto.webm"
                    poster="/proto.webp"
                    loop
                    autoPlay
                    muted
                    playsInline
                />
            </div>
            <div className='lg:w-[40%]'>
                <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none text-balance'>How to Get Your Voucher </h2>
                <h3 className='uppercase font-black text-3xl'>(Simple as 1-2-3)</h3>
                <div className='flex flex-col gap-8 mt-10'>
                    {items.map((item,index)=>{
                        return (
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-4'>
                                    <div className='font-bold w-[40px] h-[40px] flex items-center justify-center border-black text-base border-[2px] rounded-full'>{index+1}</div>
                                    <h4 className='font-black'>{item.title}</h4>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree;
