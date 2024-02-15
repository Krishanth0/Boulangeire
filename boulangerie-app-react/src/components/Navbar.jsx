import React from 'react';
import logo from'../assets/Cakeclub-logo.png';

const Navbar = () => {
  return (
    <div className='text-white  flex-between bg-red-300'>
        <ul className='flex flex-row justify-around items-center font-bold'>
        <li><a href="#">Nos Produits</a></li>
        <li><a href="#">Nos Boutiques</a></li>
        <div>
          <img src={logo} alt="/" className="flex justify-center items-center" />
        </div>
        <li><a href="#">Galerie</a></li>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

  )
}

export default Navbar