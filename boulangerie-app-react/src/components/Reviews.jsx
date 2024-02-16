import React from 'react';
import bg from '../assets/avis.png';

const Reviews = () => {
  return (
    <div className='relative w-full h-full'>
      <img src={bg} alt="/" className="w-full h-full" />

      <div className="absolute inset-0 flex flex-col items-center justify-space-evenly text-white">
        <h1 className="text-4xl font-bold mb-2">Avis</h1>
        <h2 className="text-4xl font-bold">Eva Bouvet</h2>
        <p className="text-2xl mb-4">
          « Lorem ipsum dolor sit amet consectetur. Arcu risus cras mattis etiam eleifend mattis mi.
          Egestas sit sollicitudin diam sit laoreet. Aliquet habitasse iaculis libero laoreet. »
        </p>
      </div>
    </div>
  );
}

export default Reviews;
