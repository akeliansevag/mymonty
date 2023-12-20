import React from 'react'
import Questions from './Questions'

const page = ({ params }) => {
    return (
        <>
            <Questions params={params} />
        </>
    )
}

export default page
