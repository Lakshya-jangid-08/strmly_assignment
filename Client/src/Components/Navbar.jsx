import React from 'react'
import { Link, useMatch } from 'react-router-dom'

function Navbar() {
    const IsCreatePage = useMatch('/create-post/*');
    const IsProfilePage = useMatch('/profile/*');
  return (
    <div className='w-full bg-sky-300/70 h-14 sm:h-16 md:h-20 flex items-center justify-between border-b-2 border-black shadow-md'>
        <div className='px-10 font-bold text-2xl sm:text-3xl md:text-4xl '>
            STRMLY
        </div>
        <div className='flex items-center justify-center gap-3 px-10'>
            { IsCreatePage ?
                <Link to={'/dashboard'} className='hover:scale-105 font-medium text-sm sm:text-lg md:text-xl hover:underline'>
                    Dashboard
                </Link>
                :
                <Link to={'/create-post'} className='hover:scale-105 font-medium text-sm sm:text-lg md:text-xl hover:underline'>
                    Create Post
                </Link>
            }
           <span className='font-extrabold'>|</span>
           {  IsProfilePage ? 
                <Link to={'/Logout'} className='hover:scale-105 font-medium text-sm sm:text-lg md:text-xl hover:underline'>
                    logout
                </Link>
                :
                <Link to={'/profile'} className='hover:scale-105 font-medium text-sm sm:text-lg md:text-xl hover:underline'>
                    Profile
                </Link>

           } 
        </div>
    </div>
  )
}

export default Navbar