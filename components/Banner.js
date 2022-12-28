import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin } from 'react-icons/fi'
import { GiPublicSpeaker, GiTakeMyMoney, GiCalendar } from 'react-icons/gi'
function Banner(props) {
    return (
        <div className='bg-purple-600  grid gird-rows-2 md:grid-cols-2 justify-center items-center'>
            <div className='flex flex-col justify-center items-center py-5'>
                <h2 className='font-semibold text-2xl'>Want To Grow</h2>
                <Link className='font-bold text-3xl' target='_blank' href='https://www.instagram.com/milaan_dtu/'>Register Now</Link>
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
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel"
            >
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner relative w-full overflow-hidden">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                            className="block w-full"
                            alt="Motorbike Smoke"
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                            className="block w-full"
                            alt="Mountaintop"
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                            className="block w-full"
                            alt="Woman Reading a Book"
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div >
    );
}

export default Banner;