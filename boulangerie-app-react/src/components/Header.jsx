import React from 'react';
import bg from '../assets/cake-home.png';
import line from '../assets/whiteline.png';
import arrow from '../assets/arrow.png';

const Header = () => {
  return (
    <div className="relative">
      <img src={bg} alt="/" className="w-full h-full" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold">
        <h1 className="text-[110px] mb-2">Boulangerie & Patisserie</h1>
        <h2 className="text-[32px] mb-4">PARIS • LILE • TOULOUSE</h2>
        <button className="bg-transparent border-4 border-white px-4 py-2 text-white text-lg mt-[19rem]">Contactez-Nous</button>
        <img src={arrow} alt="Arrow" className="absolute bottom-0 mb-8 animate-bounce" style={{ animationDuration: '1s', animationIterationCount: 'infinite' }}/>
      </div>
    </div>
  );
};

export default Header;
