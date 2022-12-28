import React from 'react';
import { AiOutlineMenuUnfold, AiFillCheckCircle, AiOutlineFieldTime } from 'react-icons/ai'
import { TbHeartPlus } from 'react-icons/tb';
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi'
import { GiPublicSpeaker, GiTakeMyMoney, GiCalendar } from 'react-icons/gi'
import Link from 'next/link';
function About(props) {
    return (
        <div className='my-5  flex flex-col-reverse items-center justify-center sm:grid sm:grid-cols-12  sm:pl-5 relative'>
            <div className='sm:col-span-8 flex flex-col'>
                <div className='space-y-5 '>
                    <h2 className='text-2xl font-bold flex items-center space-x-3'><AiOutlineMenuUnfold /><span>Who We Are</span></h2>
                    <div className='pl-5 sm:pr-10'>
                        <p className='font-semibold text-gray-500'>
                            Milaan_DTU was formed in 2022. The society strives to promote western dance in all its myriad forms. We here at Milaan_DTU not only dance but perform our hearts out. We give the students a manifesting platform and also to compete in various competitions of several colleges. The society endeavours to give chance not only to trained professionals but also to those who possess the potential and try to nurture their talents.

                            The underlying motive of Milaan_DTU is 'Dance is an art, paint your dream and follow it'. Since it's inception in the year 2022 the society has witnessed immense growth. It has  been an active participant in western dance competition in  college festival Mecca and Quarks –the annual fest of the Department of Physics(Hindu College). It has also joined at Amity Youth fest, Pearl Academy fest and Women’s Empowerment programmes. We envision taking the society to new heights by experimenting with different dance forms, reinventing ourselves and growing together as a team. Milaan_DTU along with Srijya & Adhirta have been organizing the festival Aramya every year.
                        </p>
                    </div>
                </div>
                <div className='space-y-5 mt-5'>
                    <h2 className='text-2xl font-bold flex items-center space-x-3'><AiOutlineMenuUnfold /><span>Benefits</span></h2>
                    <div className='pl-5 text-gray-500'>
                        <ul>
                            <li className='flex items-center space-x-3 font-semibold'>
                                <TbHeartPlus className='text-pink-500'/>
                                <span>Networking- Social & Professional</span>
                            </li>
                            <li className='flex items-center space-x-3 font-semibold'>
                                <TbHeartPlus className='text-pink-500'/>
                                <span>Knowledge Sharing</span>
                            </li>
                            <li className='flex items-center space-x-3 font-semibold'>
                                <TbHeartPlus className='text-pink-500'/>
                                <span>Continuous Learning</span>
                            </li>
                            <li className='flex items-center space-x-3 font-semibold'>
                                <TbHeartPlus className='text-pink-500'/>
                                <span>Peer Support</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-[98%] h-full sm:col-span-4 my-5 sm:my-0'>
                <div className='  drop-shadow-xl shadow-gray-400 shadow-lg  space-y-2 '>
                    <div className='relative h-[7rem]  w-full'>
                        <Image
                            src="/images/logo.jpg"
                            fill
                        />
                    </div>
                    <div className='space-y-5 flex flex-col px-5 py-5'>
                        <h2 className='font-semibold text-3xl text-center'>Azure DevDay Delhi</h2>
                        <ul className='text-gray-500 space-y-5 font-semibold text-md'>
                            <li className='flex items-center'>
                                <GiCalendar />
                                <span>Date: <span>14 December</span></span>
                            </li>
                            <li className='flex items-center'>
                                <div>
                                    <Link href='https://goo.gl/maps/VKBUEEabmgp3Ty1b8' target="_blank" className='flex items-center'>
                                        <FiMapPin />
                                        <span className='flex items-center'>Location: Offline <AiFillCheckCircle className='text-green-500' /></span>
                                    </Link>
                                    <span className='text-sm'>Dr. B.R. Ambedkar Auditorium, D.T.U.</span>

                                </div>

                            </li>
                            <li className='flex items-center'>
                                <GiPublicSpeaker />
                                <span>Speaker: <span>4+ Professional Speaker </span></span>
                            </li>
                            <li className='flex items-center'>
                                <AiOutlineFieldTime />
                                <span> Days: <span>1 Days</span></span>
                            </li>
                        </ul>
                        <button className='bg-purple-500 p-3 font-bold text-white dark:text-black rounded-lg'>
                            <Link href='https://www.instagram.com/milaan_dtu/' target='_blank'>Register Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;