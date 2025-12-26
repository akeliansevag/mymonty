'use client'
import React, {useState} from 'react'

const Boxes = () => {

    const boxes = [
        {
            title: "FREEDOM WITH A SAFETY NET",
            description: "They learn smart money habits while you supervise every step.",
            bg: '#066E63'
        },
        {
            title: "USE IT ANYWHERE",
            description: "You can use your teen card in stores, online, or ATMs worldwide.",
            bg: '#DFBD76'
        },
        {
            title: "PICK YOUR STYLE",
            description: "Choose a card design that reflects your teen’s personality.",
            bg: '#6745CF'
        },
    ];

    return (
        <section className="flex flex-col lg:justify-center relative py-20 bg-[rgb(249,244,238)] text-white overflow-hidden">
            <img src="/shape-16.svg" alt="Shape" className="absolute top-0 left-0 w-full z-10" width="1728" height="177" />
            
            <div className="container lg:mt-52">
                <h2 className="font-black text-[#066E63] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase">TEEN CARD, <br /> PARENT’S SUPPORT</h2>
                <button className="mm-button !bg-[#DFBD76CC] !text-[#066E63] font-medium mt-8">Get A Teen Card</button>

                <div className="flex max-lg:flex-col gap-12 items-center mt-16">
                    <div className='w-full'>
                        <img src="/teen-card-parents-support.webp" className="w-full max-w-[500px]" alt="Teen holding card" width="" height="" />
                    </div>
                    <div className='w-full'>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Boxes;