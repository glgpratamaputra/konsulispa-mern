import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [klinikapoteks, setKlinikApoteks] = useState([])
    const [obats, setObats] = useState([])
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllKlinikApotek = async () => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/all-klinikApotek', {}, { headers: { aToken } })
            if (data.success) {
                setKlinikApoteks(data.klinikapoteks)
                console.log(data.klinikapoteks)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const getAllObat = async () => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/all-obat', {}, { headers: { aToken } })
            if (data.success) {
                setObats(data.obats)
                console.log(data.obats)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (placeId) => {

        try {

            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { placeId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllKlinikApotek()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const getAllAppointment = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/admin/appointments', { headers: { aToken } })

            if (data.success) {
                setAppointments(data.appointments)
                console.log(data.appointments);
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/cancel-appointment', { appointmentId }, { headers: { aToken } })

            if (data.success) {
                toast.success(data.message)
                getAllAppointment()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const getDashData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })

            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)

        }
    }

    const value = {
        aToken, setAToken,
        backendUrl, klinikapoteks,
        getAllKlinikApotek, changeAvailability,
        appointments, setAppointments, getAllObat,
        obats,
        getAllAppointment,
        cancelAppointment,
        dashData, getDashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider