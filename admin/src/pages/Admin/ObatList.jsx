import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const ObatList = () => {

    const { obats, aToken, getAllObat, changeAvailability } = useContext(AdminContext)

    useEffect(() => {
        if (aToken) {
            getAllObat()
        }

    }, [aToken])

    return (
        <div className='m-5 max-h-[90vh] overflow-y-scroll'>
            <h1 className='text-lg font-medium'>Data Obat Terdaftar</h1>
            <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
                {
                    obats.map((item, index) => (
                        <div className='border border-pink-200 rounder-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 max-w-56' key={index}>
                            <img className='bg-pink-100' src={item.image} alt="" />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Obat Ringan</p>
                                </div>
                                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                                <p className='text-zinc-600 text-sm'>{item.category}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ObatList