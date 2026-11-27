import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-900'>
          <p className='text-gray-700'>KONTAK KAMI</p>
        </div>
        
        <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>KANTOR KAMI</p>
            <p className='text-gray-500'>Jalan Gagak Hitam <br/> Jakarta Selatan, Indonesia </p>
            <p className='text-gray-500'>Telepon: (+62) 888-999 <br/> Email: cispafoundation@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>SOSIAL MEDIA</p>
            <div className='flex flex-row justify-center items-start gap-6'>
              <img className='w-8 cursor-pointer' src={assets.instagram} alt="" />
              <img className='w-8 cursor-pointer' src={assets.twitter} alt="" />
              <img className='w-8 cursor-pointer' src={assets.skype} alt="" />
              <img className='w-8 cursor-pointer' src={assets.telegram} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact