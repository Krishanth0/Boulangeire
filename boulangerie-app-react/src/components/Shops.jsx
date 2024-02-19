import React from 'react';
import img from '../assets/croissant.png';
import line from '../assets/line.png'

const Shops = () => {
  return (
    <div className='w-full h-[497px] relative bg-yellow-50 '>
      <div className="absolute top-0 right-0 transform ">
        <img src={img} alt="/" className="w-[145.83px] h-[97.22px] rotate-[47.95deg]" />
      </div>
      <div>
        <h1 className='text-black text-center text-4xl font-bold'>Nos Boutiques</h1>
      </div>
      <div className='flex flex-row mt-32 justify-around text-center'>

        <div className='mb-2'>
          <h2 className='font-semibold text-4xl'>Paris</h2>
          <p className='text-lg'>52 Rue Jenner, 75013 Paris</p>
          <p className='text-lg'>7h00 - 20h00 </p>
          <img src={line} alt="/" className="w-72  h-0.5" />
        </div>

        <div className='mb-2'>
          <h2 className='font-semibold text-4xl'>Toulouse</h2>
          <p className='text-lg'>4 Rue Suger, 31000 Toulouse</p>
          <p className='text-lg'>7h00 - 20h00 </p>
          <img src={line} alt="/" className="w-72  h-0.5" />
        </div>

        <div className='mb-2'>
          <h2 className='font-semibold text-4xl'>Lille</h2>
          <p className='text-lg'>23 Avenue Duquesne, 59000 Lille</p>
          <p className='text-lg'>7h00 - 20h00 </p>
          <img src={line} alt="/" className="w-72  h-0.5" />
        </div>

      </div>
    </div>
  );
}

export default Shops;
