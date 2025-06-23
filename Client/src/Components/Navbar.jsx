import React, { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import ProfileCard from './ProfileCard';
import { isAxiosError } from 'axios';

function Navbar() {

    const [showCard, setShowCard] = useState(false)
    const IsAuth = localStorage.getItem('token') ? true : false;
    
    const IsCreatePage = useMatch('/create-post/*');
    return (
        <>
            <div className='w-full bg-sky-300/70 h-14 sm:h-16 md:h-20 flex items-center justify-between border-b-2 border-black shadow-md'>
                <div className='px-10 font-bold text-2xl sm:text-3xl md:text-4xl '>
                    STRMLY
                </div>
                <div className='flex items-center justify-center gap-3 px-10'>
                    {IsAuth ? 
                        <>
                            {IsCreatePage ?
                                <Link to={'/dashboard'} className='hover:scale-105 font-medium text-sm sm:text-lg md:text-xl hover:underline'>
                                    Dashboard
                                </Link>
                                :
                                <Link to={'/create-post'} className='hover:scale-105 font-medium text-sm sm:text-lg md:text-xl hover:underline'>
                                    Create Post
                                </Link>
                            }
                            <span className='font-extrabold'>|</span>
                            <button onClick={() => { setShowCard(true) }} className='hover:scale-105 font-medium text-sm sm:text-lg md:text-xl hover:underline' >
                                Profile
                            </button>
                        </>
                        :
                        <>
                            <Link to={'/login'} className='hover:scale-105 font-medium text-sm sm:text-lg md:text-xl hover:underline'>
                                Login
                            </Link>
                            <span className='font-extrabold'>|</span>
                            <Link to={'/signup'} className='hover:scale-105 font-medium text-sm sm:text-lg md:text-xl hover:underline'>
                                Signup
                            </Link>
                        </>
                    }
                </div>
            </div>
            {showCard && (
                <>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={() => setShowCard(false)} />
                    <ProfileCard setshowCard={setShowCard} />
                </>
            )}
        </>
    )
}

export default Navbar