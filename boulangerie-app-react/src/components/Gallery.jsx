import React from 'react';
import image1 from '../assets/galerie.png';
import image2 from '../assets/galerie2.png';
import image3 from '../assets/galerie3.png';
import image4 from '../assets/galerie4.png';
import image5 from '../assets/galerie5.png';
import image6 from '../assets/galerie6.png';
import image7 from '../assets/galerie7.png';

const Gallery = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-black text-center text-4xl font-bold mb-4">Galerie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src={image1} alt="/" className="w-full h-full object-cover" />
        <img src={image2} alt="/" className="w-full h-full object-cover" />
        <img src={image3} alt="/" className="w-full h-full object-cover" />
        <img src={image4} alt="/" className="w-full h-full object-cover" />
        <img src={image5} alt="/" className="w-full h-full object-cover" />
        <img src={image6} alt="/" className="w-full h-full object-cover" />
        <img src={image7} alt="/" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Gallery;
