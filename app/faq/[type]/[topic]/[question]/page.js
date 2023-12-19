import React from 'react';
import Answer from './Answer';

const page = ({ params }) => {
    return (
        <div>
            <Answer params={params} />
        </div>
    )
}

export default page;
