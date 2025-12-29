'use client'
import React, {useState} from 'react'
import { useAppContext } from '../../AppContext';
import QrCode from '@/app/components/QrCode';

const Boxes = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleBox = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const boxes = [
        {
            title: "FREEDOM WITH A SAFETY NET",
            description: "They learn smart money habits while you supervise every step.",
        },
        {
            title: "USE IT ANYWHERE",
            description: "You can use your teen card in stores, online, or ATMs worldwide.",
        },
        {
            title: "PICK YOUR STYLE",
            description: "Choose a card design that reflects your teen’s personality.",
        },
    ];

    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleOriginalOpenModal = () => {
        setFormComponent(<QrCode />);
        setLargeWidth(false);
        handleOpenModal();
    }

    return (
        <section className="flex flex-col lg:justify-center relative py-20 bg-[rgb(249,244,238)] text-white overflow-hidden">
            <img src="/shape-16.svg" alt="Shape" className="absolute top-0 left-0 w-full z-10" width="1728" height="177" />
            
            <div className="container lg:mt-52">
                <h2 className="font-black text-[#066E63] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] mt-6 leading-none uppercase">TEEN CARD, <br /> PARENT’S SUPPORT</h2>
                <button onClick={handleOriginalOpenModal} className="mm-button !bg-[#DFBD76CC] !text-[#066E63] hover:!bg-[#066E63] font-medium mt-8">Get A Teen Card</button>

                <div className="flex max-lg:flex-col gap-12 items-center mt-16">
                    <img src="/teen-card-parents-support.webp" className="w-full max-w-[500px]" alt="Teen holding card" width="" height="" />

                    <div className="w-full space-y-8">
                        {boxes.map((box, index) => {
                            const isActive = openIndex === index;
                            return (
                            <div
                                key={index}
                                onClick={() => toggleBox(index)}
                                className={`${
                                isActive
                                    ? "bg-[#066E63] text-white py-20 px-6 shadow-md"
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

export default Boxes;
