import React, {useState} from 'react';
import{MenuIcon, ArrowUpIcon} from '@heroicons/react/outline';

export const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className='w-screen h-[120px] z-10 fixed bg-zinc-200'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-5xl font-bold mr-4 text-red-600 sm:text-5xl'>WRLD*</h1>
                <ul className='hidden md:flex text-black font-bold text-2xl'>
                <li>Home</li>
                <li>Platforms</li>
                <li>About</li>
                <li>Pricing</li>
                <li>Support</li>
                </ul>
            
            </div>
            <div className='hidden md:flex pr-2 text-2xl'>
                <button className='border-none bg-transparent text-red-600 mr-4'>Log in</button>
                <button className='py-4'>Sign up</button>

            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-10' /> : <ArrowUpIcon className='w-10'/>}

                
                

            </div>
            </div>                
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-black w-full font-bold'>Platforms</li>
                <li className='border-b-2 border-black w-full font-bold'>Home</li>
                <li className='border-b-2 border-black w-full font-bold'>About</li>
                <li className='border-b-2 border-black w-full font-bold'>Pricing</li>
                <li className='border-b-2 border-black w-full font-bold'>Support</li>
                

            <div className='flex flex-col my-4'>
                <button className='px-8 py-3 bg-transparent text-black'>Log in</button>
                <button className='px-8 py-3'>Sign up</button>
                </div>
                </ul>   
 

        </div>




  );
};
