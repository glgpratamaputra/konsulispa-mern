import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'

const Banner = () => {

    const navigate = useNavigate()

    const {token} = useContext(AppContext)

    return (
        <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20'>
            {/*left side */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 '>
                <div className='text-xl sm:text-2x1 md:text-3x1 lg:text-5xl font-semibold text-white '>
                    <p>Diagnosa Gratis Sekarang</p>
                    <p className='mt-4'>Dapatkan Rekomendasi</p>
                    <p className='mt-4'>Tindakan Medis atau Mandiri</p>
                </div>
                <button
                    onClick={() => {
                        if (token) {
                            toast.warn("Anda sudah login")
                            navigate('/')
                            scrollTo(0, 0)
                        } else {
                            navigate('/Login')
                            scrollTo(0, 0)
                        }
                    }}
                    className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'
                >
                    Buat Akun
                </button>
            </div>
            {/*Right side*/}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.banner_img} alt="" />
            </div>
        </div>
    )
}

export default Banner