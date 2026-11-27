import { createContext, useEffect, useState } from "react";
import { dataObat } from "../assets/assets"; // catatan : data obat, klinik apotek, dsb dari asset.js sudah tidak terpakai alias sudah pakai database semua, ini sebagai tanda aja
import { diagnosisData } from "../assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [history, setHistory] = useState([]); // State untuk menyimpan 

    const [dataKlinikApotek, setDataKlinikApotek] = useState([])
    const [dataObat, setDataObat] = useState([])

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userData, setUserData] = useState(false)


    const getKlinikApotekData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/klinikapotek/list')
            if (data.success) {
                setDataKlinikApotek(data.dataKlinikApotek)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getObatData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/obat/list')
            if (data.success) {
                setDataObat(data.dataObat)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const loadUserProfileData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
        dataObat, getKlinikApotekData,
        dataKlinikApotek,getObatData,
        token, setToken,
        backendUrl,
        userData, setUserData,
        loadUserProfileData,
        diagnosisData,
        history,       // Riwayat diagnosa
        setHistory     // Fungsi untuk memperbarui riwayat
    }

    useEffect(() => {
        getKlinikApotekData()
        getObatData()
    }, [])

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider