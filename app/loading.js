import React from 'react';

const loading = () => {
    return (
        <div className='h-screen w-screen fixed bg-red-600 flex items-center justify-center text-white z-50'>
            <h1 className='text-[60px]'>LOADING...</h1>
        </div>
    )
}

export default loading;
