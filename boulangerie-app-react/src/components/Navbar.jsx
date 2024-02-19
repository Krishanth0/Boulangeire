import React from 'react';
import logo from'../assets/Cakeclub-logo.png';
import bg from '../assets/cake-home.png';

const Navbar = () => {
  return (
    <div className='text-white text-xl flex-between bg-black'>
    <div className='container mx-auto'>
        <ul className='flex flex-row justify-around items-center font-semibold '>
        <li><a href="#">Nos Produits</a></li>
        <li><a href="#">Nos Boutiques</a></li>
        <div>
          <img src={logo} alt="/" className="flex justify-center items-center flex-shrink-0" />
        </div>
        <li><a href="#">Galerie</a></li>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    </div>

  )
}

export default Navbar