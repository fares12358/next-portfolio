import React from 'react'

const NotFound = () => {
    return (
        <div className='w-full h-[calc(100%-80px)] bg-myBlack text-myGreen flex items-center justify-center flex-col'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}

export default NotFound