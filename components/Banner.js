import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Banner(props) {
    return (
        <div className='bg-purple-600 min-h-[70vh] flex justify-between sm:px-5 items-center text-white'>
            <div className='flex flex-col justify-center items-center flex-grow'>
                <h2 className='font-semibold text-2xl'>Want To Grow</h2>
                <Link className='font-bold text-4xl' target='_blank' href='https://www.instagram.com/p/CmURBRBv_MC/?utm_source=ig_web_copy_link'>Register Now</Link>
            </div>
            <div className='relative h-[60vh] w-[80vh] overflow-hidden rounded-lg'>
                <Image
                src='/images/milaan1.jpg'
                fill
                alt='poster'
                />
            </div>
            
        </div>
    );
}

export default Banner;