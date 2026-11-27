import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const MyAppointment = () => {

    const { backendUrl, token, getKlinikApotekData } = useContext(AppContext)

    const [appointments, setAppointments] = useState([])
    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    const getUserAppointments = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

            if (data.success) {
                setAppointments(data.appointments.reverse())
                console.log(data.appointments);
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {

        try {

            const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
                getKlinikApotekData()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    useEffect(() => {
        if (token) {
            getUserAppointments()
        }
    }, [token])

    return (
        <div>
            <p className='text-gray-600 border-b pb-3' >Riwayat Konsultasi Anda</p>
            <div>
                {appointments.map((item, index) => (
                    <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-3 border-b' key={index}>
                        <div>
                            <img className='w-32 bg-pink-50' src={item.klinikApotekData.image} alt="" />
                        </div>
                        <div className='flex-1 text-sm text-gray-600'>
                            <p className='font-semibold mt-2'>{item.klinikApotekData.name}</p>
                            <p>{item.klinikApotekData.category}</p>
                            <p className='font-semibold mt-1'>Alamat:</p>
                            <p>{item.klinikApotekData.alamat}</p>
                            <p className='font-light mt-1'><span className='font-semibold'>Hari & Tanggal:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
                        </div>
                        <div></div>
                        <div className='flex flex-col gap-2 justify-center'>
                            {/* Jika Completed */}
                            {!item.cancelled && item.isCompleted && (
                                <button className=" text-green-500 text-center sm:min-w-48 py-2 border border-green-500 rounded">
                                    Appointment Completed
                                </button>
                            )}
                            {/* Jika belum Completed */}
                            {!item.cancelled && !item.isCompleted && (
                                <>
                                    <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300">
                                        Bayar ditempat
                                    </button>
                                    <button
                                        onClick={() => cancelAppointment(item._id)}
                                        className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300"
                                    >
                                        Batal Booking
                                    </button>
                                </>
                            )}
                            {/* Jika Cancelled */}
                            {item.cancelled && (
                                <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">
                                    Appointment Cancelled
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointment