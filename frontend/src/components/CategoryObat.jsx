import React from 'react'
import { categoryData } from '../assets/assets'
import { Link } from 'react-router-dom'

const CategoryObat = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-20 text-gray-800' id='CategoryObat'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-medium'>Cari Obat Ringan dari Hasil Rekomendasi</h1>
        <p className='sm:w-1/3 text-center text-sm'>Dengan Mudah Cari Obat Ringan untuk Penanganan Mandiri pada Infeksi Saluran Pernapasan Atas</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {categoryData.map((item, index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-x5 cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/Obat/${item.Category}`}>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <p>{item.Category}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CategoryObat