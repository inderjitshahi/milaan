import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin } from 'react-icons/fi'
import { GiPublicSpeaker, GiTakeMyMoney, GiCalendar } from 'react-icons/gi'
function Banner(props) {
    return (
        <div className='bg-purple-600 min-h-[90vh] grid gird-rows-2 sm:grid-cols-2 justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-2xl'>Want To Grow</h2>
                <Link className='font-bold text-4xl' target='_blank' href='https://www.instagram.com/milaan_dtu/'>Register Now</Link>
                <div className='grid grid-cols-2 gap-x-5  sm:gap-x-16 mt-5 gap-y-5 text-sm sm:text-lg text-white m-auto'>

                    <div className='flex flex-col items-center text-center justify-center'>
                        <span ><Link href='https://goo.gl/maps/VKBUEEabmgp3Ty1b8' target="_blank" className='text-center flex items-center'><FiMapPin />Location</Link></span>
                    </div>
                    <div className='flex flex-col items-center text-center justify-center '>
                        <span className='flex items-center'>
                            <GiPublicSpeaker />Speakers
                        </span>
                        <span>
                            3+ Professional Speakers
                        </span>
                    </div>
                    <div className='flex items-center justify-center text-center'>
                        <span className='flex items-center' ><GiTakeMyMoney />Free Registration</span>
                    </div>
                    <div className='flex items-center justify-center text-center'>
                        <span className='flex items-center'><GiCalendar />1 Day</span>
                    </div>
                </div>
            </div>
            <div className='relative h-[50vh] sm:h-full sm:mt-0 mt-2 w-screen sm:border-l-2 shadow-2xl overflow-hidden m-auto'>
                <Image
                    src='/images/milaan1.jpg'
                    fill
                    alt='poster'
                />
            </div>

        </div >
    );
}

export default Banner;