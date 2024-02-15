import React from 'react';
import bg from '../assets/cake-home.png';

const Header = () => {
  return (
    <div >
      <img src={bg} alt="/" className="w-full h-full" />

      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Boulangerie & Patisserie</h1>
        <h2 className="text-xl mb-4">PARIS-LILE-TOULOUSE</h2>
        <button className="bg-transparent border-white border px-4 py-2 rounded text-white">Contactez-Nous</button>
      </div>
    </div>
  );
};

export default Header;
