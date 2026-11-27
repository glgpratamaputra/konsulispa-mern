import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { KlinikApotekContext } from '../context/KlinikApotekContext'

const Sidebar = () => {
  
    const {aToken} = useContext(AdminContext)
    const {kToken} = useContext(KlinikApotekContext)

    return (
    <div className='min-h-screen bg-white border-r'>
        {
            aToken && <ul className='text-gray-600 mt-5'>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/admin-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p className='hidden md:block'>Dashboard</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/all-appointments'}>
                <img src={assets.appointment_icon} alt="" />
                <p className='hidden md:block'>Konsultasi</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/add-klinikapotek'}>
                <img src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Tambah Klinik Apotek</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/klinikapotek-list'}>
                <img src={assets.people_icon} alt="" />
                <p className='hidden md:block'>List Klinik Apotek</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/add-obat'}>
                <img src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Tambah Obat</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/obat-list'}>
                <img className='w-6' src={assets.obat_icon} alt="" />
                <p className='hidden md:block'>List Obat</p>
            </NavLink>

            </ul>
        }
        {
            kToken && <ul className='text-gray-600 mt-5'>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/klinikapotek-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p className='hidden md:block'>Dashboard</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/klinikapotek-appointments'}>
                <img src={assets.appointment_icon} alt="" />
                <p className='hidden md:block'>Konsultasi</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-white border-r-4 border-primary' : ''}`} to={'/klinikapotek-profile'}>
                <img src={assets.people_icon} alt="" />
                <p className='hidden md:block'>Profile</p>
            </NavLink>

            </ul>
        }
    </div>
  )
}

export default Sidebar