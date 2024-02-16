import React from 'react';
import bg from '../assets/cake-home.png';

const Header = () => {
  return (
    <div className="relative">
      <img src={bg} alt="/" className="w-full h-full" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-2">Boulangerie & Patisserie</h1>
        <h2 className="text-xl mb-4">PARIS-LILE-TOULOUSE</h2>
        <button className="bg-transparent border-white border px-4 py-2 text-white">Contactez-Nous</button>
      </div>
    </div>
  );
};

export default Header;
