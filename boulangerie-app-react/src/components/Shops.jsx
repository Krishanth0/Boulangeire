import React from 'react';
import img from '../assets/croissant.png';

const Shops = () => {
  return (
    <div className='w-full h-full bg-yellow-50 p-20 relative'>
      <div className="absolute top-0 right-0 transform rotate-[47.95deg]">
        <img src={img} alt="/" className="w-[145.83px] h-[97.22px]" />
      </div>
      <div>
        <h1 className='text-black text-center text-4xl font-bold'>Nos Boutiques</h1>
      </div>
      <div className='flex flex-row mt-8 justify-around text-center'>

        <div className='mb-8'>
          <h2 className='font-bold text-3xl'>Paris</h2>
          <p>52 Rue Jenner, 75013 Paris</p>
          <p>7h00 - 20h00 </p>
        </div>

        <div className='mb-8'>
          <h2 className='font-bold text-3xl'>Toulouse</h2>
          <p>4 Rue Suger, 31000 Toulouse</p>
          <p>7h00 - 20h00 </p>
        </div>

        <div className='mb-8'>
          <h2 className='font-bold text-3xl'>Lille</h2>
          <p>23 Avenue Duquesne, 59000 Lille</p>
          <p>7h00 - 20h00 </p>
        </div>

      </div>
    </div>
  );
}

export default Shops;
