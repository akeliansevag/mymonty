import React from 'react';

const QrCode = () => {
    return (
        <div className='flex flex-col items-center gap-4 md:gap-7 mt-10 md:mt-10 rounded-[1.875rem]'>
            <h2 className='uppercase leading-none font-black text-center text-2xl sm:text-3xl md:text-[2.25rem]'>
                Get the MyMonty app
            </h2>

            <p>Scan the QR code to download the app</p>

            <img src="/qr-code.svg" className='w-1/2' alt='Car Loan' width='150' height='150' />
        </div>
    )
}

export default QrCode