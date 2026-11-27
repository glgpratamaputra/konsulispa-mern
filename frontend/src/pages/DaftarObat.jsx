import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const DaftarObat = () => {

  const navigate = useNavigate()

  const { medicineId } = useParams()
  const { dataObat } = useContext(AppContext)

  const [medicineInfo, setMedicineInfo] = useState(null)

  const fetchMedicineInfo = async () => {
    const medicineInfo = dataObat.find(medicine => medicine._id === medicineId)
    setMedicineInfo(medicineInfo)
    console.log(medicineInfo)
  }

  useEffect(() => {
    fetchMedicineInfo()
  }, [dataObat, medicineId])

  return medicineInfo && (
    <div>
      {/* Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-pink-100 w-full sm:max-w-72 rounded-lg rounded-b-none' src={medicineInfo.image} alt="" />
          <button onClick={()=>navigate('/KlinikApotek')} className='bg-primary text-white w-full py-2 rounded-t-none rounded-b-lg hover:bg-pink-300 transition-all'>Beli Obat</button>
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-7 py-7 bg-white'>
          {/* name dsb */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {medicineInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{medicineInfo.category}</button>
          </div>

          {/* About */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Kelas Terapi
              <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{medicineInfo.kelasterapi}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Mekanisme Kerja
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{medicineInfo.mekanismekerja}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Bentuk Sediaan
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{medicineInfo.bentuksediaan}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Indikasi
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{medicineInfo.indikasi}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Kontraindikasi
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{medicineInfo.kontraindikasi}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Efek Samping
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{medicineInfo.efeksamping}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Dosis
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>Dewasa : {medicineInfo.dosis.line1}</p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>Anak-Anak : {medicineInfo.dosis.line2}</p>
          </div>

          <p className='text-gray-900 font-medium mt-4'>
            Harga obat: Rp. <span>{medicineInfo.fees}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DaftarObat