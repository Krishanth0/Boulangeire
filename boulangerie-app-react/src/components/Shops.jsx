import React from 'react'

const Shops = () => {
  return (
    <div className=' w-full h-full bg-yellow-50'>
    <div>
      <h1 className='text-black text-center text-4xl font-bold '>Nos Boutiques</h1>
    </div>
    <div className='flex flex-row mt-5 justify-around text-center'>

      <div>
      <h2 className='font-bold text-3xl'>Paris</h2>
      <p>52 Rue Jenner, 75013 Paris</p>
      <p>7h00 - 20h00 </p>
      </div>

      <div>
      <h2 className='font-bold text-3xl'>Toulouse</h2>
      <p>4 Rue Suger, 31000 Toulouse</p>
      <p>7h00 - 20h00 </p>
      </div>

      <div>
      <h2 className='font-bold text-3xl'>Lile</h2>
      <p>23 Avenue Duquesne, 59000 Lille</p>
      <p>7h00 - 20h00 </p>
      </div>

    </div>
    </div>
  )
}

export default Shops