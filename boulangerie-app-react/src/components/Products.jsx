import React from 'react'
import img1 from '../assets/produi-Viennoiseries.png'
import img2 from '../assets/produit-Patisseries.png'
import img3 from '../assets/produit-pain.png'
import img4 from '../assets/produit-snack.png'

const Products = () => {
  return (
    <div className=' w-full h-full bg-yellow-50'>
      <div>
        <h2 className='text-black text-center text-4xl font-bold '>Nos Produits</h2>
      </div>
      <div className='flex flex-row px-3 mt-4 justify-around'>

      <div className='text-center'>
      <img src={img1} alt="/" className="w-full h-full" />
      <figcaption>Viennoiseries</figcaption>
      </div>

      <div className='text-center'>
      <img src={img2} alt="/" className="w-full h-full" />
      <figcaption>Patisseries</figcaption>
      </div>

      <div className='text-center'>
      <img src={img3} alt="/" className="w-full h-full" />
      <figcaption>pain</figcaption>
      </div>


      <div className='text-center'>
      <img src={img4} alt="/" className="w-full h-full" />
      <figcaption className='text-center'>snack</figcaption>
      </div>
      
      </div>


      <div className='text-center pt-8'>
      <button className="bg-transparent border-black border px-4 py-2  text-black">Voir plus</button></div>

    </div>
  )
}

export default Products