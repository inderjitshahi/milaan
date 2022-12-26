import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Banner(props) {
    return (
        <div className='bg-purple-600 min-h-[70vh] py-5 flex flex-col space-y-5 md:flex-row justify-between sm:px-5 items-center text-white max-w-7xl overflow-hidden'>
            <div className='flex flex-col justify-center items-center md:flex-grow'>
                <h2 className='font-semibold text-2xl'>Want To Grow</h2>
                <Link className='font-bold text-4xl' target='_blank' href='https://www.instagram.com/p/CmURBRBv_MC/?utm_source=ig_web_copy_link'>Register Now</Link>
            </div>
            <div className='relative w-[98%] h-[80vh]  sm: sm:h-[60vh] sm:w-[80vh] overflow-hidden rounded-lg'>
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