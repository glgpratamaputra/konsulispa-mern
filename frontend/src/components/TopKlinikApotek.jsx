import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopKlinikApotek = () => {
  
    const navigate = useNavigate()
    const {dataKlinikApotek} = useContext(AppContext)

    return (
    <div className='flex flex-col items-center gap-4 my-9 text-gray-900'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-medium'>Klinik Apotek Terbaik Area Jabodetabek</h1>
        <p className='sm:w-1/3 text-center text-sm'>Dengan Mudah Cari Klinik & Apotek Terpercaya untuk Penanganan Mandiri pada Infeksi Saluran Pernapasan Atas</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {dataKlinikApotek.slice(0,7).map((item, index)=>(
                <div onClick={()=>{navigate(`/Daftar-KlinikApotek/${item._id}`); scrollTo(0,0)}} className='border border-pink-200 rounder-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-pink-100' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-red-500'} `}>
                            <p className= {`w-2 h-2 ${item.available ? ' bg-green-500' : 'bg-red-500'} rounded-full`}></p><p>{item.available ? 'Available':'Unavailable'}</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.category}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{ navigate('/KlinikApotek'); scrollTo(0,0) }} className='bg-pink-100 text-gray-600 px-12 py-3 rounded-full mt-10 hover:scale-105 transition-all'>Lebih Detail</button>
    </div>
  )
}

export default TopKlinikApotek