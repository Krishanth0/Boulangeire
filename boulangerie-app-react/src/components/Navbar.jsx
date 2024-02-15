import React from 'react'
import logo from'../assets/Cakeclub-logo.png'

const Navbar = () => {
  return (
  
    <div className='w-screen z-10 bg bg-transparent'>
          <div>
          <img src="Cakeclub-logo.png'go" alt="/" className="flex justify-center items-center" />
        </div>
    <div className='text-black flex-between'>
        <ul>
        <li><a href="#">Nos Produits</a></li>
        <li><a href="#">Nos Boutiques</a></li>
        <li><a href="#">Pakeclub</a></li>
        <li><a href="#">Galerie</a></li>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar