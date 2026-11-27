import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopObat = () => {
  
    const navigate = useNavigate()
    const {dataObat} = useContext(AppContext)

    return (
    <div className='flex flex-col items-center gap-4 my-9 text-gray-900'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-medium'>Obat Ringan Populer yang Digunakan</h1>
        <p className='sm:w-1/3 text-center text-sm'>Dengan Mudah Cari Obat Ringan untuk Penanganan Mandiri pada Infeksi Saluran Pernapasan Atas</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {dataObat.slice(0,7).map((item, index)=>(
                <div onClick={()=>navigate(`/Daftar-Obat/${item._id}`)} className='border border-pink-200 rounder-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-pink-100' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Obat Ringan</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.category}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{ navigate('/Obat'); scrollTo(0,0) }} className='bg-pink-100 text-gray-600 px-12 py-3 rounded-full mt-10 hover:scale-105 transition-all'>Lebih Detail</button>
    </div>
  )
}

export default TopObat