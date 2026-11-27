import React, { useState } from 'react'
import { useContext } from 'react'
import { KlinikApotekContext } from '../../context/KlinikApotekContext'
import { AppContext } from '../../context/AppContext'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const KlinikApotekProfile = () => {

  const { kToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(KlinikApotekContext)
  const { currency } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)

  const updateProfile = async () => {
    
    try {
      
      const updateData = {
        placeId: profileData._id,
        alamat: profileData.alamat,
        mapsLink: profileData.mapsLink,
        jamoperasional: profileData.jamoperasional,
        layanan: profileData.layanan,
        kontak: profileData.kontak,
        waLink: profileData.waLink,
        fees: profileData.fees,
        available: profileData.available
      }

      const {data} = await axios.post(backendUrl + '/api/klinikapotek/update-profile',updateData,{headers:{kToken}})

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      
      toast.error(error.message)
      console.log(error)

    }

  }

  useEffect(() => {
    if (kToken) {
      getProfileData()
    }
  }, [kToken])

  return profileData && (
    <div>

      <div className='flex flex-col gap-4 m-5'>

        <div>
          <img className='w-full  sm:max-w-64 rounded-lg' src={profileData.image} alt="" />
        </div>

        <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white '>

          {/* Klinik Apotek Information - name, category*/}

          <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
          <div className='gap-2 mt-2 text-gray-600'>
            <button className='py-0.5 px-2 border text-cs rounded-full'>{profileData.category}</button>
          </div>

          {/* Klinik Apotek About */}
          <div className='mt-3'>
            <p className='flex items-center gap-1 font-medium text-neutral-800 mt-3'>Alamat</p>
            <p className='text-base text-gray-600 max-w-[700px] mt-1'>
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, alamat: e.target.value }))} value={profileData.alamat} /> : profileData.alamat}
            </p>
          </div>

          <div>
            <p className='flex items-center gap-1 font-medium text-neutral-800 mt-3'>Google Maps Link</p>
            <p className='text-base text-gray-600 max-w-[700px] mt-1'>
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, mapsLink: e.target.value }))} value={profileData.mapsLink} /> : profileData.mapsLink}
            </p>
          </div>

          <div>
            <p className='flex items-center gap-1 font-medium text-neutral-800 mt-3'>Jam Operasional</p>
            <p className='text-base text-gray-600 max-w-[700px] mt-1'>
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, jamoperasional: e.target.value }))} value={profileData.jamoperasional} /> : profileData.jamoperasional}
            </p>
          </div>

          <div>
            <p className='flex items-center gap-1 font-medium text-neutral-800 mt-3'>Layanan</p>
            <p className='text-base text-gray-600 max-w-[700px] mt-1'>
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, layanan: e.target.value }))} value={profileData.layanan} /> : profileData.layanan}
            </p>
          </div>

          <div>
            <p className='flex items-center gap-1 font-medium text-neutral-800 mt-3'>WhatsApp</p>
            <p className='text-base text-gray-600 max-w-[700px] mt-1'>
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, kontak: e.target.value }))} value={profileData.kontak} /> : profileData.kontak}
            </p>
          </div>

          <div>
            <p className='flex items-center gap-1 font-medium text-neutral-800 mt-3'>WhatsApp Link</p>
            <p className='text-base text-gray-600 max-w-[700px] mt-1'>
              {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, waLink: e.target.value }))} value={profileData.waLink} /> : profileData.waLink}
            </p>
          </div>

          <p className='font-medium text-neutral-800 mt-3'>Fee Konsultasi: <span>{currency} {isEdit ? <input type="number" onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} /> : profileData.fees}</span></p>

          <div className='flex gap-1 pt-2'>
            <input onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profileData.available} type="checkbox" />
            <label htmlFor="">Available</label>
          </div>

          {
            isEdit
              ? <button onClick={updateProfile} className='px-7 py-1 border border-pink-200 bg-pink-200 text-base text-gray-500 rounded-full mt-5 hover:scale-105 transition-all'>Save</button>
              : <button onClick={() => setIsEdit(true)} className='px-7 py-1 border border-pink-200 bg-pink-200 text-base text-gray-500 rounded-full mt-5 hover:scale-105 transition-all'>Edit</button>

          }

        </div>

      </div>

    </div>
  )
}

export default KlinikApotekProfile