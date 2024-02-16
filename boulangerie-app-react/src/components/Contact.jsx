import React from 'react';
import cafe from '../assets/logo_cafe.png';
import tour from '../assets/toureffeil.png';
import phone from '../assets/ph_phone-thin.png';
import at from '../assets/ph_at-thin.png';
import plane from '../assets/ph_paper-plane-thin.png';

const Contact = () => {
  return (
    <div className='bg-yellow-50 m-0 p-0 min-[100vh] relative'>
      <img src={tour} alt="tour" className="absolute bottom-0 left-0 w-[200] h-[200]" />
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-center text-black text-4xl font-bold mb-7 mt-28'>Contactez-nous <img src={cafe} alt="cafe" className="w-[10] h-[10]" /></h1>
        <div className='bg-yellow-50 w-2/5 p-6 rounded-lg shadow-md'>
          <form className='mx-auto'>
            <div className='my-3 mx-auto'>
              <input type='text' className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Nom complet *" />
            </div>
            <div className='my-3 mx-auto'>
              <input type='text' className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Téléphone *" />
            </div>
            <div className='my-3 mx-auto'>
              <input type='text' className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Email*" />
            </div>
            <div className='my-3 mx-auto'>
              <input type='text' className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Sujet*" />
            </div>
            <div className='my-3 mx-auto'>
              <textarea type='text' className='w-full h-35 mt-2 p-4 outline-none border-none rounded-lg' placeholder="Message**"></textarea>
            </div>
            <button className='w-full p-3 mt-2 bg-transparent text-black border border-black'>Envoyer</button>
          </form>
        </div>

        <div className="flex mt-8">
          <div className="flex items-center mr-4 text-black text-2xl">
            <img src={phone} alt="phone" className="w-[50] h-[50] mr-2" />
            <p>01 23 45 67 89</p>
          </div>
          <div className="flex items-center mr-4 text-black text-2xl">
            <img src={at} alt="at" className="w-[50] h-[50] mr-2" />
            <p>contact@cakeclub.com</p>
          </div>
          <div className="flex items-center mr-4 text-black text-2xl">
            <img src={plane} alt="plane" className="w-[50] h-[50] mr-2" />
            <p>19 avenue Général Leclerc, 75019 Paris</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
