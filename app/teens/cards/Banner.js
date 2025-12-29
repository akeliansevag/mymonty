'use client'
import { useAppContext } from '../../AppContext';
import bannerImage from '@/public/teen-card-banner.webp';
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
            <section className='lg:py-32 max-lg:py-16 bg-[#F7F7F7]'>
                <div className='container'>
                    <div className='flex justify-between gap-10 items-center max-lg:flex-col'>
                        <div className='max-lg:w-full lg:w-1/2 flex flex-col gap-5'>
                            <h1 className='text-balance font-black text-4xl sm:text-5xl md:text-6xl fhd:text-[5.4rem] leading-none uppercase mt-6'>A physical prepaid card for teens</h1>
                            <p className='text-balance'>Guided by the parents.</p>
                            <div>
                                <button onClick={handleOriginalOpenModal} className="mm-button mt-8">Download MyMonty</button>
                                {/* <button className="mm-button !bg-[#2657D4] mt-8 ml-4">Get a Teen Card</button> */}
                            </div>
                        </div>
                        <div className='max-lg:w-full lg:w-1/3'>
                            <div className='w-full rounded-3xl overflow-hidden'>
                                <Image alt='Salary' placeholder='blur' quality={100} sizes='100vw' src={bannerImage} className='w-full' priority width='1000' height='1266' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>  
    )
}
export default Banner
