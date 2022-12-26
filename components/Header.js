import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Header(props) {
    return (
        <div className='bg-pink-600 py-2 px-1 sm:px-10 font-bold flex flex-col sm:flex-row justify-between items-center text-white drop-shadow-lg border-b-1 border-gray-400'>
            <div className='relative h-[3rem] w-[3rem] rounded-full overflow-hidden'>
                <Image
                    src='/images/logo.jpg'
                    fill
                    alt='LOGO'
                />
            </div>
            <div>
                <Link href='https://www.instagram.com/milaan_dtu/' target='_blank'>Join Now</Link>
            </div>
        </div>
    );
}   

export default Header;