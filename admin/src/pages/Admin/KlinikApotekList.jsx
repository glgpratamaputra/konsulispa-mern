import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const KlinikApotekList = () => {

  const { klinikapoteks, aToken, getAllKlinikApotek, changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllKlinikApotek()
    }

  }, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>Data Klinik Apotek Terdaftar</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          klinikapoteks.map((item, index) => (
            <div className='border border-pink-200 rounded-none max-w-56 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img src={item.image} alt="" />
              <div className='p-4'>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm'>{item.category}</p>
                <div className='mt-2 flex items-center gap-1 text-sm'>
                  <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                  <p>Available</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default KlinikApotekList