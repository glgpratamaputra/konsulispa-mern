import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import klinikApotekModel from "../models/klinikApotekModel.js"
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"
import userModel from "../models/userModel.js"
import obatkModel from "../models/obatModel.js"

// API for adding klinik apotek
const addKlinikApotek = async (req, res) => {

    try {
        const { name, email, password, category, alamat, jamoperasional, layanan, kontak, mapsLink, waLink, fees } = req.body
        const imageFile = req.file

        // checking for all data to add klinikApotek
        if (!name || !email || !password || !category || !alamat || !jamoperasional || !layanan || !kontak || !mapsLink || !waLink || !fees) {
            return res.json({ success: false, message: "Missing Details" })
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })

        }

        // Hashing member klinikApotek password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const klinikApotekData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            category,
            alamat,
            jamoperasional,
            layanan,
            kontak,
            mapsLink,
            waLink,
            fees,
            date: Date.now()
        }

        const newklinikApotek = new klinikApotekModel(klinikApotekData)
        await newklinikApotek.save()

        res.json({ success: true, message: "Member Klinik Apotek Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to add obat
const addObat = async (req, res) => {

    try {
        const { name, category, kelasterapi, mekanismekerja, bentuksediaan, indikasi, kontraindikasi, efeksamping, dosis, fees } = req.body
        const imageFile = req.file

        // checking for all data to add obat
        if (!name || !category || !kelasterapi || !mekanismekerja || !bentuksediaan || !indikasi || !kontraindikasi || !efeksamping || !dosis || !fees) {
            return res.json({ success: false, message: "Missing Details" })
        }

        // cek apakah obat sudah ada
        const existing = await obatkModel.findOne({ name });
        if (existing) {
            return res.json({ success: false, message: "Obat dengan nama ini sudah ada" });
        }


        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const obatData = {
            name,
            image: imageUrl,
            category,
            kelasterapi,
            mekanismekerja,
            bentuksediaan,
            indikasi,
            kontraindikasi,
            efeksamping,
            dosis: JSON.parse(dosis),
            fees,
            date: Date.now()
        }

        const newObat = new obatkModel(obatData)
        await newObat.save()

        res.json({ success: true, message: "Obat Added Succesfully" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API for Admin Login
const loginAdmin = async (req, res) => {
    try {

        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get all klinik apotek list for admin panel
const allKlinikApotek = async (req, res) => {
    try {

        const klinikapoteks = await klinikApotekModel.find({}).select('-password')
        res.json({ success: true, klinikapoteks })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get all obat list for admin panel
const allObat = async (req, res) => {
    try {

        const obats = await obatkModel.find({})
        res.json({ success: true, obats })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get all consultation list for admin panel
const allAppointment = async (req, res) => {

    try {

        const appointments = await appointmentModel.find({})
        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancelled consultation
const appointmentCancel = async (req, res) => {

    try {

        const { appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

        // releasing klinik apotek slot

        const { placeId, slotDate, slotTime } = appointmentData

        const klinikApotekData = await klinikApotekModel.findById(placeId)

        let slots_booked = klinikApotekData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await klinikApotekModel.findByIdAndUpdate(placeId, { slots_booked })

        res.json({ success: true, message: 'Appointment cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {

    try {

        const klinikapoteks = await klinikApotekModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})
        const obats = await obatkModel.find({})

        const dashData = {
            klinikapoteks: klinikapoteks.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0, 5),
            obats: obats.length
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addKlinikApotek, addObat, loginAdmin, allKlinikApotek, allObat, allAppointment, appointmentCancel, adminDashboard }