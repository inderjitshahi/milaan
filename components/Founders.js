import React from 'react';
import Image from 'next/image';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import Link from 'next/link';
function Founders(props) {
    return (
        <div className='sm:py-5 px-5 space-y-5  my-5 '>
            <h2 className='text-2xl font-bold flex items-center space-x-3 '><AiOutlineMenuUnfold/><span>Founders</span></h2>
            <div className='grid grid-cols-2 sm:flex  sm:flex-row gap-5 sm:space-y-0 sm:justify-evenly '>
                <Link href='' className='flex flex-col  items-center  justify-center'>
                    <div className='relative h-16 w-16 md:h-32 md:w-32 rounded-full overflow-hidden'>
                        <Image
                            src='/images/logo.jpg'
                            fill
                            alt="Udit"
                        />
                    </div>
                    <span>Udit</span>
                </Link>
                <Link href="https://port-folio-vxwv.vercel.app/" target='_blank' className='flex flex-col items-center '>
                    <div className='relative h-16 w-16 md:h-32 md:w-32 rounded-full overflow-hidden'>
                        <Image
                            src='/images/logo.jpg'
                            fill
                            alt="Inderjit Shahi"
                        />
                    </div>
                    <span className=''>Inderjit Shahi</span>
                </Link>
                <div className='flex flex-col items-center'>
                    <div className='relative h-16 w-16 md:h-32 md:w-32 rounded-full overflow-hidden'>
                        <Image
                            src='/images/logo.jpg'
                            fill
                            alt="Prerna"
                        />
                    </div>
                    <span>Prerna</span>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative h-16 w-16 md:h-32 md:w-32 rounded-full overflow-hidden'>
                        <Image
                            src='/images/logo.jpg'
                            fill
                            alt="Taiyab"
                        />
                    </div>
                    <span>Taiyab</span>
                </div>
            </div>
        </div>
    );
}

export default Founders;