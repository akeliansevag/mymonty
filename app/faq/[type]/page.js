import React from 'react';
import { websiteName } from '@/app/config';

// export const metadata = {
//     title: websiteName + 'FAQ Business',
//     description: '',
// };

const page = ({ params }) => {

    return (
        <div>
            {params.type}
        </div>
    )
}

export default page;
