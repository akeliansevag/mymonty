'use client';
import React, { useState } from 'react';

const SectionOne = () => {
    const [activeCard, setActiveCard] = useState(0);
    const features = [
        {
            title: "TOP UP IN SECONDS",
            description: "Add money instantly and stay on top of every transaction your teen makes.",
            image: '/card-1.webp',
            bg: '#271D71'
        },
        {
            title: "SEE EVERYTHING, ANYTIME",
            description: "Track spending and balance changes directly from your MyMonty app.",
            image: '/card-2.webp',
            bg: '#E95942'
        },
        {
            title: "YOUR TEEN STAYS INFORMED TOO",
            description: "They’ll receive real-time SMS notifications for every purchase, so they’re always aware of their balance.",
            image: '/card-3.webp',
            bg: '#F98BB0'
            
        },
        {
            title: "SIMPLER MONEY MANAGEMENT",
            description: "Send money instantly whenever your teen needs it and guide their spending.",
            image: '/card-4.webp',
            bg: '#14BDD0'
        },
    ];

  return (
    <section className="py-20">
        <div className='container'>
            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase text-center">YOUR TEEN’S FIRST STEP TO FINANCIAL INDEPENDENCE</h2>
            
            <div className="flex max-lg:flex-col gap-12 mt-16 items-center justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 max-md:gap-6 md:gap-12">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            style={{
                                backgroundColor: index === activeCard ? feature.bg : '',
                                color: index === activeCard ? '#ffffff' : ''
                                
                            }}
                            className='transition cursor-pointer rounded-2xl p-4'
                            onMouseEnter={() => setActiveCard(index)} 
                        >
                            <h3 className="font-black text-2xl">{feature.title}</h3>
                            <p className="mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
                <div className='w-full relative max-md:h-[300px] md:h-[600px]'>
                    {
                        features.map((feature, index)=>
                            (
                                <img  key={index}  src={feature.image} className={`h-full object-contain absolute top-0 ${index === activeCard ? 'show' : 'hidden'}`} alt="Card" />
                            )
                        )
                    }
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default SectionOne;
