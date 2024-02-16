import React from 'react'
import image1 from '../assets/galerie.png';
import image2 from '../assets/galerie2.png';
import image3 from '../assets/galerie3.png';
import image4 from '../assets/galerie4.png';
import image5 from '../assets/galerie5.png';
import image6 from '../assets/galerie6.png';
import image7 from '../assets/galerie7.png';



const Gallery = () => {
  return (
    <div>

    <div>
      <h2 className='text-black text-center text-4xl font-bold '>Galerie</h2>
    </div>

     <div >
     <img src={image1} alt="/" className="w-full h-full" />
     <img src={image2} alt="/" className="w-full h-full" />
     <img src={image3} alt="/" className="w-full h-full" />
     <img src={image4} alt="/" className="w-full h-full" />
     <img src={image5} alt="/" className="w-full h-full" />
     <img src={image6} alt="/" className="w-full h-full" />
     <img src={image7} alt="/" className="w-full h-full" />
     </div>

     </div>


  )
}

export default Gallery