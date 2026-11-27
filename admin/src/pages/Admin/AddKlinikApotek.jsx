import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddKlinikApotek = () => {


    const [klinikApotekImg, setklinikApotekImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [category, setCategory] = useState('Jakarta')
    const [fees, setFees] = useState('50')
    const [alamat, setAlamat] = useState('')
    const [jamoperasional, setJamOperasional] = useState('')
    const [layanan, setLayanan] = useState('')
    const [kontak, setKontak] = useState('62888999')
    const [mapsLink, setMapsLink] = useState('https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur')
    const [waLink, setWaLink] = useState('https://wa.me/+6281292278233')

    const { backendUrl, aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!klinikApotekImg) {
                return toast.error('Image Not Selected')
            }

            const formData = new FormData()

            formData.append('image', klinikApotekImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('category', category)
            formData.append('fees', Number(fees))
            formData.append('alamat', alamat)
            formData.append('jamoperasional', jamoperasional)
            formData.append('layanan', layanan)
            formData.append('kontak', kontak)
            formData.append('mapsLink', mapsLink)
            formData.append('waLink', waLink)

            // console log form data
            formData.forEach((value, key) => {
                console.log(`${key} : ${value}`);
            })

            const { data } = await axios.post(backendUrl + '/api/admin/add-klinikapotek', formData, { headers : { aToken } })
            
            if (data.success){
                toast.success(data.message)
                setklinikApotekImg(false)
                setName('')
                setEmail('')
                setPassword('')
                setCategory('')
                setFees('')
                setAlamat('')
                setJamOperasional('')
                setLayanan('')
                setKontak('')
                setMapsLink('')
                setWaLink('')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='m-5 w-full'>

            <p className='mb-3 text-lg font-medium'>Tambah Klinik Apotek</p>

            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={klinikApotekImg ? URL.createObjectURL(klinikApotekImg) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setklinikApotekImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p>Upload profil <br /> klinik apotek</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Nama</p>
                            <input onChange={(e) => setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Email</p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Password</p>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Category</p>
                            <select onChange={(e) => setCategory(e.target.value)} value={category} className='border rounded px-3 py-2' name="" id="">
                                <option value="Jakarta">Jakarta</option>
                                <option value="Bogor">Bogor</option>
                                <option value="Depok">Depok</option>
                                <option value="Tangerang">Tangerang</option>
                                <option value="Bekasi">Bekasi</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Fees</p>
                            <input onChange={(e) => setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='fees' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Alamat</p>
                            <input onChange={(e) => setAlamat(e.target.value)} value={alamat} className='border rounded px-3 py-2' type="text" placeholder='Alamat' required />
                        </div>

                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Jam Operasional</p>
                            <input onChange={(e) => setJamOperasional(e.target.value)} value={jamoperasional} className='border rounded px-3 py-2' type="text" placeholder='Jam Operasional' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Layanan</p>
                            <input onChange={(e) => setLayanan(e.target.value)} value={layanan} className='border rounded px-3 py-2' type="text" placeholder='Layanan' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Kontak</p>
                            <input onChange={(e) => setKontak(e.target.value)} value={kontak} className='border rounded px-3 py-2' type="number" placeholder='Kontak' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Google Maps Link</p>
                            <textarea onChange={(e) => setMapsLink(e.target.value)} value={mapsLink} className='w-full px-4 pt-2 border rounded' type="text" placeholder='Google Maps Link' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>WhastApp Link</p>
                            <textarea onChange={(e) => setWaLink(e.target.value)} value={waLink} className='w-full px-4 pt-2 border rounded' type="text" placeholder='WhatsApp Link' required />
                        </div>
                    </div>
                </div>

                <button type='submit' className='bg-primary px-10 py-3 mt-6 text-white rounded-full'>Tambah Klinik Apotek</button>
            </div>
        </form>
    )
}

export default AddKlinikApotek