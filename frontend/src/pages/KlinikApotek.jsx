import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const KlinikApotek = () => {

  const { Category } = useParams()
  const [filterKlinikApotek, setFilterKlinikApotek] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const navigate = useNavigate()

  const { dataKlinikApotek } = useContext(AppContext)

  const applyFilter = () => {
    if (Category) {
      setFilterKlinikApotek(dataKlinikApotek.filter(klinikapotek => klinikapotek.category === Category))
    } else {
      setFilterKlinikApotek(dataKlinikApotek)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [dataKlinikApotek, Category])


  return (
    <div>
      <p className='text-gray-600'>Cari klinik & apotek berdasarkan kategori tempat</p>
      <div className='flex flex-col sm:flex-row items-start gap-6 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Kategori</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => Category === 'Jakarta' ? navigate('/KlinikApotek') : navigate('/KlinikApotek/Jakarta')} className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Jakarta" ? "bg-pink-100 text-black" : ""}`} >Jakarta</p>
          <p onClick={() => Category === 'Bogor' ? navigate('/KlinikApotek') : navigate('/KlinikApotek/Bogor')} className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Bogor" ? "bg-pink-100 text-black" : ""}`} >Bogor</p>
          <p onClick={() => Category === 'Depok' ? navigate('/KlinikApotek') : navigate('/KlinikApotek/Depok')} className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Depok" ? "bg-pink-100 text-black" : ""}`} >Depok</p>
          <p onClick={() => Category === 'Tangerang' ? navigate('/KlinikApotek') : navigate('/KlinikApotek/Tangerang')} className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Tangerang" ? "bg-pink-100 text-black" : ""}`} >Tangerang</p>
          <p onClick={() => Category === 'Bekasi' ? navigate('/KlinikApotek') : navigate('/KlinikApotek/Bekasi')} className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Bekasi" ? "bg-pink-100 text-black" : ""}`} >Bekasi</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterKlinikApotek.map((item, index) => (
              <div onClick={() => navigate(`/Daftar-KlinikApotek/${item._id}`)} className='border border-pink-200 rounder-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-pink-100' src={item.image} alt="" />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-red-500'} `}>
                    <p className={`w-2 h-2 ${item.available ? ' bg-green-500' : 'bg-red-500'} rounded-full`}></p><p>{item.available ? 'Available' : 'Unavailable'}</p>
                  </div>
                  <p className='text-gray-900 text-base font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.category}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default KlinikApotek