import React from 'react'

export const About = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-red-600'>Trusted by people </h2>
                <p className='text-3xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit laborum exercitationem architecto. Pariatur quae iure a explicabo et odit iste unde nesciunt eum quas id distinctio vero, quidem suscipit?</p>
            </div> 

            <div className='grid md:gri-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-red-600'>100%</p>
                    <p className='mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-red-600'>24/7</p>
                    <p className='mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-red-600'>100K</p>
                    <p className='mt-2'>Transactaions</p>
                </div>
            </div>
        </div>
    </div>
  )
}
