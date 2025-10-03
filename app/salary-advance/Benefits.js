'use client'
import React from 'react'
import { useAppContext } from '../AppContext';
import AppForm from '@/app/components/Form';

const Benefits = () => {

    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleOriginalOpenModal = () => {
        setFormComponent(<AppForm />);
        setLargeWidth(false);
        handleOpenModal();
    }
    return (
        <section className='py-24'>
            <div className='container space-y-4 md:space-y-8'>
                <h2 className='section-title text-center'>MyMonty Salary Advance, your instant solution to any cash emergency.</h2>
                <div className="flex max-lg:flex-col gap-4 md:gap-8">
                    <div className="flex flex-col items-center text-center border gap-3 border-white/40 rounded-2xl p-4 md:p-8 w-full">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33398 20.8334C8.33398 12.9766 8.33398 9.04825 10.7748 6.60746C13.2155 4.16669 17.1439 4.16669 25.0006 4.16669C32.8573 4.16669 36.7859 4.16669 39.2265 6.60746C41.6673 9.04825 41.6673 12.9766 41.6673 20.8334V29.1667C41.6673 37.0234 41.6673 40.9519 39.2265 43.3925C36.7859 45.8334 32.8573 45.8334 25.0006 45.8334C17.1439 45.8334 13.2155 45.8334 10.7748 43.3925C8.33398 40.9519 8.33398 37.0234 8.33398 29.1667V20.8334Z" stroke="white" strokeWidth="4" />
                            <path d="M31.25 38.869H18.75" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        <h4 className="font-black uppercase">Available 24/7 from your phone</h4>
                    </div>
                    <div className="flex flex-col items-center text-center border gap-3 border-white/40 rounded-2xl p-4 md:p-8 w-full">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.7494 39.5833C12.8974 39.5833 9.97145 39.5833 7.8696 38.179C6.95968 37.5708 6.17843 36.7896 5.57043 35.8798C4.16602 33.7779 4.16602 30.8519 4.16602 25C4.16602 19.1481 4.16602 16.2221 5.57043 14.1203C6.17843 13.2104 6.95968 12.4291 7.8696 11.8211C9.97145 10.4167 12.8974 10.4167 18.7494 10.4167H31.2494C37.1012 10.4167 40.0273 10.4167 42.1291 11.8211C43.0389 12.4291 43.8202 13.2104 44.4283 14.1203C45.8327 16.2221 45.8327 19.1481 45.8327 25C45.8327 30.8519 45.8327 33.7779 44.4283 35.8798C43.8202 36.7896 43.0389 37.5708 42.1291 38.179C40.0273 39.5833 37.1012 39.5833 31.2494 39.5833H18.7494Z" stroke="white" strokeWidth="4" />
                            <path d="M18.75 18.75C15.2982 18.75 12.5 21.5481 12.5 25C12.5 28.4519 15.2982 31.25 18.75 31.25" stroke="white" strokeWidth="4" />
                            <path d="M31.25 18.75C34.7019 18.75 37.5 21.5481 37.5 25C37.5 28.4519 34.7019 31.25 31.25 31.25" stroke="white" strokeWidth="4" />
                            <path d="M18.75 10.4167V38.5417" stroke="white" strokeWidth="4" strokeLinecap="round" />
                            <path d="M31.25 10.4167V38.5417" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        <h4 className="font-black uppercase">Fully digital, no waiting lines</h4>
                    </div>
                    <div className="flex flex-col items-center text-center border gap-3 border-white/40 rounded-2xl p-4 md:p-8 w-full">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.75 27.0833C43.75 37.4387 35.3554 45.8333 25 45.8333C14.6447 45.8333 6.25 37.4387 6.25 27.0833C6.25 16.728 14.6447 8.33331 25 8.33331C35.3554 8.33331 43.75 16.728 43.75 27.0833Z" stroke="white" strokeWidth="4" />
                            <path d="M25 27.0833V18.75" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.834 4.16669H29.1673" stroke="white" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        <h4 className="font-black uppercase">Instant cash when needed </h4>
                    </div>
                </div>
                <div className='text-center'>
                    <button onClick={handleOriginalOpenModal} className='mm-button white'>Download App</button>
                </div>
            </div>
        </section>
    )
}

export default Benefits
