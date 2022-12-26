import React from 'react';

function About(props) {
    return (
        <div className='py-5 px-3 flex flex-col justify-center items-center space-y-5'>
            <h2 className='text-2xl font-bold'>Who We Are</h2>
            <div className='w-[98%] sm:w-[90%] lg:w-[75%] max-w-7xl border-2  p-5 rounded-lg drop-shadow-xl'>
                <p className='font-semibold'>
                    Milaan_DTU was formed in 2022. The society strives to promote western dance in all its myriad forms. We here at Milaan_DTU not only dance but perform our hearts out. We give the students a manifesting platform and also to compete in various competitions of several colleges. The society endeavours to give chance not only to trained professionals but also to those who possess the potential and try to nurture their talents.

                    The underlying motive of Milaan_DTU is 'Dance is an art, paint your dream and follow it'. Since it's inception in the year 2022 the society has witnessed immense growth. It has  been an active participant in western dance competition in  college festival Mecca and Quarks –the annual fest of the Department of Physics(Hindu College). It has also joined at Amity Youth fest, Pearl Academy fest and Women’s Empowerment programmes. We envision taking the society to new heights by experimenting with different dance forms, reinventing ourselves and growing together as a team. Milaan_DTU along with Srijya & Adhirta have been organizing the festival Aramya every year.
                </p>
            </div>
        </div>
    );
}

export default About;