import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*left side*/}
            <div>
                <img src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Sistem Rekomendasi Pengobatan Gejala Infeksi Saluran Pernafasan Atas dengan Tindakan Mandiri dan Konsultasi Medis</p>
            </div>

            {/*Center*/}
            <div>
                <p className='text-xl font-medium mb-7'>APLIKASI</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>HOME</li>
                    <li>TENTANG KAMI</li>
                    <li>KEBIJAKAN PRIVASI</li>
                </ul>
            </div>

            {/*Right Side */}
            <div>
                <p className='text-xl font-medium mb-7'>HUBUNGI KAMI</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>cispafoundation@gmail.com</li>
                    <li>(+62) 888-999</li>
                </ul>
            </div>
        </div>
            {/* Copyright */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@Gilang Pratama - All Rights Reserved</p>
            </div>
    </div>
    
  )
}

export default Footer