import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const navigate = useNavigate()

    const { token, setToken, userData } = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false)

    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
        navigate('/')   //  balik ke dashboard utama

    }

    return (
        <div className='flex items-center justify-between text-sm py-4 '>
            <img onClick={() => navigate('/')} className='cursor-pointer' src={assets.logo} alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li>BERANDA</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='Diagnosa'>
                    <li>DIAGNOSA</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/Obat'>
                    <li>OBAT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/KlinikApotek'>
                    <li>KLINIK & APOTEK</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='About'>
                    <li>TENTANG KAMI</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='Contact'>
                    <li>KONTAK</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token && userData
                        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-10 rounded-full' src={userData.image} alt="" />
                            <img className='w-2,5' src={assets.dropdown_icon} alt="" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('My-Profile')} className='hover:text-primary cursor-pointer'>Profile Saya</p>
                                    <p onClick={() => navigate('My-Diagnosa')} className='hover:text-primary cursor-pointer'>Riwayat Diagnosa</p>
                                    <p onClick={() => navigate('My-Appointment')} className='hover:text-primary cursor-pointer'>Riwayat Konsultasi</p>
                                    <p onClick={logout} className='hover:text-primary cursor-pointer'>Keluar</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/Login')} className='bg-primary text-white px-8 py-3 rounded-full font-light md:block'>Buat Akun</button>
                }
                <img onClick={() => setShowMenu(true)} className='w-10 md:hidden' src={assets.menu_icon} alt="" />
                {/* mobile menu */}
                <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-shadow`}>
                    <div className='flex items-center justify-between py-4 px-4'>
                        <img className='w-15' src={assets.logo} alt="" />
                        <img className='w-12' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>BERANDA</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/Diagnosa'><p className='px-4 py-2 rounded inline-block'>DIAGNOSA</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/Obat'><p className='px-4 py-2 rounded inline-block'>OBAT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/KlinikApotek'><p className='px-4 py-2 rounded inline-block'>KLINIK & APOTEK</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/About'><p className='px-4 py-2 rounded inline-block'>TENTANG KAMI</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/Contact'><p className='px-4 py-2 rounded inline-block'>KONTAK</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar