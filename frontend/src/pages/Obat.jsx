import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Obat = () => {
  
  const { Category } = useParams()
  const [filterMedicine,setFilterMedicine] = useState([])
  const [showFilter,setShowFilter] = useState(false)

  const navigate = useNavigate()

  const{dataObat} = useContext(AppContext)

  const applyFilter = () => {
    if (Category){
      setFilterMedicine(dataObat.filter(medicine => medicine.category === Category))
    } else {
      setFilterMedicine(dataObat)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[dataObat,Category])
  
  
  return (
    <div>
        <p className='text-gray-600'>Cari obat berdasarkan kategori penyakit</p>
        <div className='flex flex-col sm:flex-row items-start gap-6 mt-5'>
          <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : '' }`} onClick={()=>setShowFilter(prev => !prev)}>Kategori</button>
          <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <p onClick={()=> Category === 'Batuk' ? navigate('/Obat') : navigate('/Obat/Batuk') } className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Batuk" ? "bg-pink-100 text-black" : ""}`} >Batuk</p>
            <p onClick={()=> Category === 'Pilek' ? navigate('/Obat') : navigate('/Obat/Pilek') } className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Pilek" ? "bg-pink-100 text-black" : ""}`} >Pilek</p>
            <p onClick={()=> Category === 'Flu' ? navigate('/Obat') : navigate('/Obat/Flu') } className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Flu" ? "bg-pink-100 text-black" : ""}`} >Flu</p>
            <p onClick={()=> Category === 'Asma' ? navigate('/Obat') : navigate('/Obat/Asma') } className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Asma" ? "bg-pink-100 text-black" : ""}`} >Asma</p>
            <p onClick={()=> Category === 'Demam' ? navigate('/Obat') : navigate('/Obat/Demam') } className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Demam" ? "bg-pink-100 text-black" : ""}`} >Demam</p>
            <p onClick={()=> Category === 'Nyeri' ? navigate('/Obat') : navigate('/Obat/Nyeri') } className={`w-[94vw] sm:w-auto mb-3 pl-3 py-1.5 pr-17 border border-gray-300 rounded transition-all cursor-pointer ${Category === "Nyeri" ? "bg-pink-100 text-black" : ""}`} >Nyeri</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterMedicine.map((item, index)=>(
                <div onClick={()=>navigate(`/Daftar-Obat/${item._id}`)} className='border border-pink-200 rounder-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-pink-100' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Obat Ringan</p>
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

export default Obat