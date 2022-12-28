import Link from 'next/link';
import React from 'react';

function Footer(props) {
    return (
        <div className='flex flex-col justify-center items-center w-full bg-purple-500 p-2 text-[.75rem] text-white dark:text-black'>
            <p>All Rights Reserved To Milaan_DTU </p>
            <p className='text-center'>Developed and Maintained By: <Link className='font-semibold' href='https://port-folio-vxwv.vercel.app/' target="_blank">Inderjit Shahi</Link></p>
        </div>
    );
}

export default Footer;