import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-yellow-50 m-0 p-0 min-[100vh]:'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-center text-black text-4xl font-bold mb-7 mt-28'>Contact Us</h1>
        <div className='bg-yellow-50 w-2/5 p-6 rounded-lg shadow-md'>
          <form className='mx-auto'>
            <div className='my-3 mx-auto'>
              <input type='text'className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Nom complet *"/>
            </div>
            <div className='my-3 mx-auto'>
              <input type='text'className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Téléphone *"/>
            </div>
            <div className='my-3 mx-auto'>
              <input type='text'className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Email*"/>
            </div>
            <div className='my-3 mx-auto'>
              <input type='text'className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Sujet*"/>
            </div>
            <div className='my-3 mx-auto'>
              <textarea type='text'className='w-full h-35 mt-2 p-4 outline-none border-none rounded-lg' placeholder="Message**"></textarea>
            </div>
            <button className='w-full p-3 mt-2 bg-transparent text-black border-black'>Envoyer</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Contact