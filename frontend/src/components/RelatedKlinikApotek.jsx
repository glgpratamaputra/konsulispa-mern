import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedKlinikApotek = ({ Category, placeId }) => {

    const { dataKlinikApotek } = useContext(AppContext)
    const navigate = useNavigate()

    const [relPlace, setRelPlaces] = useState([])

    useEffect(() => {
        if (dataKlinikApotek.length > 0 && Category) {
            const dataKlinikApotekData = dataKlinikApotek.filter((klinikapotek) => klinikapotek.category === Category && klinikapotek._id !== placeId)
            setRelPlaces(dataKlinikApotekData)
        }

    }, [dataKlinikApotek, Category, placeId])

    return (
        <div className='flex flex-col items-center gap-4 my-14 text-gray-900'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-medium'>Klinik Apotek Terkait</h1>
            <p className='sm:w-1/3 text-center text-sm'>Dengan Mudah Cari Klinik & Apotek Terpercaya untuk Penanganan Mandiri pada Infeksi Saluran Pernapasan Atas</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relPlace.slice(0, 3).map((item, index) => (
                    <div onClick={() => { navigate(`/Daftar-KlinikApotek/${item._id}`); scrollTo(0, 0) }} className='border border-pink-200 rounder-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-pink-100' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-red-500'} `}>
                                <p className={`w-2 h-2 ${item.available ? ' bg-green-500' : 'bg-red-500'} rounded-full`}></p><p>{item.available ? 'Available' : 'Unavailable'}</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedKlinikApotek