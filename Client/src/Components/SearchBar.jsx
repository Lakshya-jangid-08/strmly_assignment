import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchBar({data}) {
    const [Input, setInput] = useState(data ? data : '');
    const navigate = useNavigate();
    
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/dashboard/' + Input);
    }
  
    return (
    <div className='w-full flex items-center justify-end'>
        <div className='h-8 sm:h-9 md:h-10 lg:w-1/3 md:w-1/2  w-2/3 sm:w-1/2 '>
            <form className='w-full h-full flex  border-black  border-2 rounded-xl'
                onSubmit={(e)=>{submitHandler(e)}} >
            <input type="text" placeholder='Enter category' className='
                rounded-l-xl h-full w-full placeholder:text-gray-500
                outline-none px-4 text-xs sm:text-base md:text-lg lg:text-xl placeholder:text-xs 
                sm:placeholder:text-base md:placeholder:text-lg '
                value={Input} onChange={(e)=>{ setInput(e.target.value) }} />
            < button type="submit" className='bg-blue-600 text-xs sm:text-base md:text-lg 
                rounded-r-xl text-white px-2 sm:px-3  md:px-4' >
                Search
            </button>
            </form>
        </div>
    </div>
  )
}

export default SearchBar