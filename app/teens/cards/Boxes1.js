'use client'
import React, {useState} from 'react'

const Boxes1 = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleBox = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const boxes = [
        {
            title: "Parents or guardians",
            description: "The primary users who request and manage the Teen Card",
        },
        {
            title: "Kids aged 11-17",
            description: "They can receive a Teen Card that parents supervise through the app",
        },
    ];

    return (
        <section className="flex flex-col lg:justify-center relative py-20 bg-black text-white overflow-hidden">
            <img src="/shape-16.svg" alt="Shape" className="absolute top-0 left-0 w-full z-10" width="1728" height="177" />
            
            <div className="container lg:mt-52">
                <h2 className="font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase">Who can get it?</h2>

                <div className="flex max-lg:flex-col gap-12 items-center mt-16">
                    <img src="/who-can-get-it.webp" className="w-full max-w-[500px]" alt="father and son snowing" width="" height="" />

                    <div className="w-full space-y-8">
                        {boxes.map((box, index) => {
                            const isActive = openIndex === index;
                            return (
                            <div
                                key={index}
                                onClick={() => toggleBox(index)}
                                className={`${
                                isActive
                                    ? "bg-[#7CC2FD] py-20 px-6 shadow-md"
                                    : "bg-white py-6 px-6 shadow-md"
                                } w-full text-black rounded-2xl cursor-pointer transition-all duration-300 ease-in-out overflow-hidden`}
                            >
                                <h3 className="font-black text-2xl">{box.title}</h3>
                                {isActive && <p className="mt-2">{box.description}</p>}
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Boxes1;
