'use client'
import { useAppContext } from '../../AppContext';
import QrCode from '@/app/components/QrCode';

const ReadyToStart = () => {
    const { handleOpenModal } = useAppContext();
    const { setFormComponent, setLargeWidth } = useAppContext();

    const handleOriginalOpenModal = () => {
        setFormComponent(<QrCode />);
        setLargeWidth(false);
        handleOpenModal();
    }

    return (
        <section className='relative py-20 overflow-x-hidden'>
            <div className='container'>
                <div className='flex flex-col md:flex-row md:items-center text-start gap-10 md:gap-60 relative'>
                    <div className='md:w-1/2'>
                        <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Ready to start?</h2>
                        <p className='leading-8 mt-4'>Set your teen up for smart spending with your guidance and full visibility.</p>
                        <button onClick={handleOriginalOpenModal} className='mm-button mt-8'>Download MyMonty</button>
                    </div>
                    <div className='md:w-1/2'>
                        <img className="w-full" src="/ready-to-start.webp" alt="Ready to Start" width="100%" height="100%" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ReadyToStart