import React from 'react';
import Topics from './Topics';

const layout = ({ params, children }) => {
    return (
        <div className="flex gap-8">
            <div className="flex-1">
                <h2 className='text-lg font-bold py-2 px-4'>Topics</h2>
                <Topics params={params} />
            </div>
            <div className='flex-[3]'>
                {children}
            </div>


        </div>
    )
}

export default layout;
