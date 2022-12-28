import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
function Header(props) {
    const [dark, setDark] = useState(true);
    useEffect(() => {
        console.log(dark);
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);
    function handleTheme() {
        setDark(!dark);
    }
    return (
        <div className='bg-pink-600 py-2 px-2 sm:px-10 font-bold flex  justify-between items-center text-white drop-shadow-lg border-b-1 border-gray-400 max-w-10xl'>
            <div className='relative h-[3rem] w-[3rem] rounded-full overflow-hidden'>
                <Image
                    src='/images/logo.jpg'
                    fill
                    alt='LOGO'
                />
            </div>
            <div className='space-x-5 flex items-center dark:text-black'>
                {!dark ? <MdDarkMode className='text-2xl hover:scale-125 cursor-pointer text-black' onClick={handleTheme} /> : <MdLightMode className='cursor-pointer hover:scale-125 text-2xl' onClick={handleTheme} />}

                <Link href='https://www.instagram.com/milaan_dtu/' target='_blank'>Join Now</Link>
                <Link href='https://is-blog.vercel.app/' target='_blank'>Blog</Link>
            </div>
        </div>
    );
}

export default Header;