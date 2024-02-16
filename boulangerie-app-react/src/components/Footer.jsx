import React from 'react';
import logo from '../assets/Cakeclub-logo.png'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/Instagram.png'
import twitter from '../assets/Twitter.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
      <ul className='flex flex-row justify-around items-center font-bold'>
      <img src={logo} alt="/"  />
        <li><a href="#">Contactez-nous</a></li>
        <li><a href="#">Mentions Légales</a></li>
        <li><a href="#">Recrutement</a></li>
        <img src={facebook} alt="/"  />
        <img src={instagram} alt="/"  />
        <img src={twitter} alt="/" />
        </ul>
        <p className='text-center'> Copyright © 2022 Brainst. Tout droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
