import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddObat = () => {


    const [obatImg, setObatImg] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('Batuk')
    const [kelasterapi, setKelasTerapi] = useState('Antitusif')
    const [mekanismekerja, setMekanismeKerja] = useState('')
    const [bentuksediaan, setBentukSediaan] = useState('')
    const [indikasi, setIndikasi] = useState('')
    const [kontraindikasi, setKontraindikasi] = useState('')
    const [efeksamping, setEfekSamping] = useState('')
    const [dosisdewasa, setDosisDewasa] = useState('')
    const [dosisanak, setDosisAnak] = useState('')
    const [fees, setFees] = useState('50')



    const { backendUrl, aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (!obatImg) {
                return toast.error('Image Not Selected')
            }

            const formData = new FormData()

            formData.append('image', obatImg)
            formData.append('name', name)
            formData.append('category', category)
            formData.append('fees', Number(fees))
            formData.append('kelasterapi', kelasterapi)
            formData.append('mekanismekerja', mekanismekerja)
            formData.append('bentuksediaan', bentuksediaan)
            formData.append('indikasi', indikasi)
            formData.append('kontraindikasi', kontraindikasi)
            formData.append('efeksamping', efeksamping)
            formData.append('dosis',JSON.stringify({line1:dosisdewasa,line2:dosisanak}))

            // console log form data
            formData.forEach((value, key) => {
                console.log(`${key} : ${value}`);
            })

            const { data } = await axios.post(backendUrl + '/api/admin/add-obat', formData, { headers: { aToken } })

            if (data.success) {
                toast.success(data.message)
                setObatImg(false)
                setName('')
                setCategory('')
                setFees('')
                setKelasTerapi('')
                setMekanismeKerja('')
                setBentukSediaan('')
                setIndikasi('')
                setKontraindikasi('')
                setEfekSamping('')
                setDosisDewasa('')
                setDosisAnak('')
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

            <p className='mb-3 text-lg font-medium'>Tambah Obat</p>

            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[90vh] overflow-y-scroll'>
                <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doc-img">
                        <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={obatImg ? URL.createObjectURL(obatImg) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setObatImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p>Upload profil <br /> obat</p>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Nama</p>
                            <input onChange={(e) => setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Category</p>
                            <select onChange={(e) => setCategory(e.target.value)} value={category} className='border rounded px-3 py-2' name="" id="">
                                <option value="Batuk">Batuk</option>
                                <option value="Pilek">Pilek</option>
                                <option value="Flu">Flu</option>
                                <option value="Asma">Asma</option>
                                <option value="Demam">Demam</option>
                                <option value="Nyeri">Nyeri</option>
                            </select>
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Fees</p>
                            <input onChange={(e) => setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Fees' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Kelas Terapi</p>
                            <input onChange={(e) => setKelasTerapi(e.target.value)} value={kelasterapi} className='border rounded px-3 py-2' type="text" placeholder='Kelas Terapi' required />
                        </div>

                    </div>

                    <div className='w-full lg:flex-1 flex flex-col gap-4'>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Mekanisme Kerja</p>
                            <input onChange={(e) => setMekanismeKerja(e.target.value)} value={mekanismekerja} className='border rounded px-3 py-2' type="text" placeholder='Mekanisme Kerja' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Bentuk Sediaan</p>
                            <input onChange={(e) => setBentukSediaan(e.target.value)} value={bentuksediaan} className='border rounded px-3 py-2' type="text" placeholder='Bentuk Sediaan' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Indikasi</p>
                            <input onChange={(e) => setIndikasi(e.target.value)} value={indikasi} className='border rounded px-3 py-2' type="text" placeholder='Indikasi' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Kontraindikasi</p>
                            <input onChange={(e) => setKontraindikasi(e.target.value)} value={kontraindikasi} className='border rounded px-3 py-2' type="text" placeholder='Kontraindikasi' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Efek Samping</p>
                            <input onChange={(e) => setEfekSamping(e.target.value)} value={efeksamping} className='border rounded px-3 py-2' type="text" placeholder='Efek Samping' required />
                        </div>

                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Dosis</p>
                            <input onChange={(e) => setDosisDewasa(e.target.value)} value={dosisdewasa} className='border rounded px-3 py-2' type="text" placeholder='Dewasa' required />
                            <input onChange={(e) => setDosisAnak(e.target.value)} value={dosisanak} className='border rounded px-3 py-2' type="text" placeholder='Anak-Anak' required />
                        </div>
                    </div>
                </div>

                <button type='submit' className='bg-primary px-10 py-3 mt-6 text-white rounded-full'>Tambah Obat</button>
            </div>
        </form>
    )
}

export default AddObat