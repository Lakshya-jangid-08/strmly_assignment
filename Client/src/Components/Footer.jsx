import React from 'react'

function Footer() {
  return (
     <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
       <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
         <div className='flex flex-col md:items-start items-center w-full'>
           <div className='text-white font-bold text-2xl'>STRMLY</div>
           <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ex libero cumque iusto, in, quidem ad eligendi porro corrupti explicabo totam nobis inventore vero nostrum, reprehenderit fugit ratione saepe itaque!</p>
         </div>
         <div className="flex flex-col md:items-start items-center w-full">
           <h2 className='font-semibold text-white mb-5'>Company</h2>
           <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
             <li><a href="#">Home</a></li>
             <li><a href="#">About us</a></li>
             <li><a href="#">Contact us</a></li>
             <li><a href="#">Privacy policy</a></li>
           </ul>
         </div>
       </div>
       <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 © STRMLY. All Right Reserved.</p>
     </footer>
   )
}

export default Footer