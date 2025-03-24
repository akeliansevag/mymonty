'use client';
import React from 'react';
import Section from '../components/Section';
import TextBlock from '../components/TextBlock';
import { useAppContext } from '../AppContext';

const SectionOne = () => {
    const { handleOpenModal } = useAppContext();
    const items = [
        {
            description: '<p>Navigate to the <strong>E-Services</strong> tab in your MyMonty app.</p>'
        },
        {
            description: '<p>Enter your mobile number and receive a <strong>one-time PIN</strong> by SMS.</p>'
        },
        {
            description: '<p>Input the PIN, and your bill amount will be <strong>fetched</strong> automatically</p>'
        },
        {
            description: '<p>Enjoy a <strong>quick and easy</strong> payment process!</p>'
        },
    ];
    return (
        <Section>
            <div id="dual-currency-wallet" className='container'>
                <div className='text-center'>
                     <TextBlock buttonColor="dark" center={true} title="No Postponing, Just Post-paying!" button={false} />
                </div>
                <div className='flex flex-col max-lg:gap-10 lg:gap-20 lg:mt-24 max-lg:mt-10'>
                    <div className='flex max-lg:flex-col lg:items-center max-lg:gap-10 lg:gap-32'>
                        <div className="lg:w-1/2 flex flex-col gap-5">
                            <h3 className='uppercase font-black max-lg:text-xl lg:text-3xl text-balance'>Touch Postpaid Bill Payment</h3>
                            <p>Settle your Touch postpaid bills straight from the 
                                MyMonty app through the E-Services tab with two 
                                flexible options.
                            </p>
                            <div>
                                <button onClick={handleOpenModal} className='mm-button' href="#">Download App</button>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <img src='/touch.webp' className='w-full'/>
                        </div>
                    </div>

                    <div className='flex max-lg:flex-col max-lg:gap-10 lg:gap-32'>
                        <div className='lg:w-1/2'>
                            <div className='flex items-center gap-5'>
                                <span className='w-[60px] h-[60px] text-center flex items-center justify-center rounded-full border-[2px] border-black font-bold text-2xl'>1</span>
                                <h4 className='font-bold text-2xl'>Via Amount</h4>
                            </div>
                            <p className='mt-5'>Enter your <strong>mobile number</strong> and the invoiced amount to complete the <strong>transaction</strong>. Perfect for users who are abroad or unable to receive <storng>an OTP</storng>.</p>
                        </div>
                        <div className='lg:w-1/2'>
                            <div className='flex items-center gap-5'>
                                <span className='w-[60px] h-[60px] text-center flex items-center justify-center rounded-full border-[2px] border-black font-bold text-2xl'>2</span>
                                <h4 className='font-bold text-2xl'>Via PIN</h4>
                            </div>
                            <p className='mt-5'>Enter your <strong>mobile number</strong> to receive a <strong>one-time PIN by SMS</strong>. Once you input the PIN, your bill amount is automatically generated for payment.</p>
                        </div>
                    </div>

                    <div className='flex max-lg:flex-col lg:items-center max-lg:gap-10 lg:gap-32'>
                        <div className="lg:w-1/2">
                            <img src='/alfa.webp' className='w-full'/>
                        </div>
                        <div className="lg:w-1/2 flex flex-col gap-5">
                            <h3 className='uppercase font-black max-lg:text-xl lg:text-3xl text-balance'>Alfa Postpaid Bill Payment</h3>
                            <p>Easily settle your Alfa postpaid bills through MyMonty.</p>
                            <div>
                                <button onClick={handleOpenModal} className='mm-button' href="#">Download App</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div>
                    <div className='relative  text-center text-black'>
                        <div className='relative'>
                            <div className="flex lg:justify-between max-lg:flex-col lg:gap-0 max-lg:gap-8 lg:mt-16 max-lg:mt-10">
                                {items.map((item,index)=> (
                                    <div key={index} className='lg:w-1/4 flex flex-col items-center gap-4 relative px-5'>
                                        <div className={`max-lg:hidden absolute w-[calc(90%-70px)] h-[1px] bg-black top-[35px] left-[calc(55%+35px)] ${index===(items.length-1) ? 'hidden' : 'max-lg:block'}`}></div>
                                        <div className='rounded-full border  border-black w-[70px] h-[70px] flex items-center justify-center font-bold relative'>{index+1}
                                        
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

    )
}

export default SectionOne;
