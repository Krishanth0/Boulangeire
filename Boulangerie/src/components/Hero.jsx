import React from 'react'
import{
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import bgImg from '../assets/png.png'
 const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md: items-start w-full px-2 py-8'>
                <p className='text-2xl font-bold'>Unique Design</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold text-red-700'>Lag free</h1>
                <p className='text-2xl font-bold'>Fast</p>
                <button className='py-3 px-6 sm:w-[60%] my-4 font-bold text-2xl'>Welcome</button>

            </div>
            <div>
                <img className='w-full' src={bgImg} alt="bg" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 borderborder-slate-300 rounded-xl text-center shadow-xl'>
                <p className='font-bold text-2xl text-red-600'>Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 font-bold'><CloudUploadIcon className='h-6 text-red-600'/> App Security</p>
                <p className='flex px-4 py-2 font-bold'><DatabaseIcon className='h-6 text-red-600'/> Dashboard</p>
                <p className='flex px-4 py-2 font-bold'><ServerIcon className='h-6 text-red-600'/> Cloud Data</p>
                <p className='flex px-4 py-2 font-bold'><PaperAirplaneIcon className='h-6 text-red-600'/> API</p>
                </div>


            </div>

        </div>


    </div>
  )
}
export default Hero