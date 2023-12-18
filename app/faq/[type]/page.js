import React from 'react';
import { websiteName } from '@/app/config';

let metadata = {
    title: '',
    description: ''
};

const page = ({ params }) => {
    metadata.title = websiteName + 'FAQ ' + params.type;
    return (
        <div>
            {params.type}
        </div>
    )
}

export default page;

export { metadata };