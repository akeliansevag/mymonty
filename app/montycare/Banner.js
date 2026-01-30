'use client'
import { useAppContext } from '../AppContext';
import bannerImage from '@/public/montycare-banner-3.webp';
import Image from 'next/image';
import QrCode from '@/app/components/QrCode';

const Banner = () => {
    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleOriginalOpenModal = () => {
        setFormComponent(<QrCode />);
        setLargeWidth(false);
        handleOpenModal();
    }

    return (
        <>
            <section className='md:pt-5 max-md:pt-[calc(var(--header-height)+50px)] flex flex-col justify-center w-full relative bg-gray-100'>
                <div className='container'>
                    <div className='flex justify-between gap-10 items-center max-lg:flex-col'>
                        
                        <div className='max-lg:w-full lg:w-1/2 flex flex-col'>
                            <p className='text-[#091111]/50 font-bold'>Cards</p>
                            <div>
                                <h1 className='text-balance font-black text-4xl sm:text-5xl mb-5 md:text-6xl fhd:text-[5.4rem] leading-none uppercase mt-6'>Because <span className="text-[#E2282B]">Care</span> Cannot Wait.</h1>
                                <p className='text-balance'>Your gateway to simple, flexible, and affordable wellness financing; designed for both users and partner clinics.</p>
                                {/* <div>
                                    <button onClick={handleOriginalOpenModal} className="mm-button mt-8">Download MyMonty</button>
                                </div> */}
                            </div>
                            
                        </div>
                        <div className='max-lg:w-full lg:w-1/2'>
                            <div className='w-full rounded-3xl overflow-hidden lg:mt-28'>
                                <Image alt='Salary' placeholder='blur' quality={100} sizes='100vw' src={bannerImage} className='w-full' priority width='1000' height='1266' />
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className='container'>
                    <div className="md:absolute md:bottom-10 text-base underline text-[#2657D4]">
                        <a className="block uppercase" href="/key-facts-statements">Key Facts Statement (KFS)</a>
                    </div>
                </div> */}
            </section>
        </>  
    )
}
export default Banner
