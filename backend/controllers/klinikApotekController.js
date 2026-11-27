import klinikApotekModel from "../models/klinikApotekModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"

const changeAvailablity = async (req, res) => {
    try {

        const { placeId } = req.body

        const dataKlinikApotek = await klinikApotekModel.findById(placeId)
        await klinikApotekModel.findByIdAndUpdate(placeId, { available: !dataKlinikApotek.available })
        res.json({ success: true, message: 'Availablity Changed' })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const klinikApotekList = async (req, res) => {
    try {

        const dataKlinikApotek = await klinikApotekModel.find({}).select(['-password', '-email'])

        res.json({ success: true, dataKlinikApotek })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API for klinik apotek login
const loginKlinikApotek = async (req, res) => {

    try {

        const { email, password } = req.body
        const dataKlinikApotek = await klinikApotekModel.findOne({ email })

        if (!dataKlinikApotek) {
            return res.json({ success: false, message: 'Invalid credentials' })
        }

        const isMatch = await bcrypt.compare(password, dataKlinikApotek.password)

        if (isMatch) {

            const token = jwt.sign({ id: dataKlinikApotek._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: 'Invalid credentials' })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


// API to get klinik apotek appointments for klinik apotek panel
const appointmentsKlinikApotek = async (req, res) => {

    try {

        const placeId = req.placeId
        const appointments = await appointmentModel.find({ placeId: placeId })
        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


// API to mark apoointment completed for klinik apotek panel
const appointmentComplete = async (req, res) => {

    try {

        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })

        // releasing klinik apotek slot

        const { placeId, slotDate, slotTime } = appointmentData

        const klinikApotekData = await klinikApotekModel.findById(placeId)

        let slots_booked = klinikApotekData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await klinikApotekModel.findByIdAndUpdate(placeId, { slots_booked })

        res.json({ success: true, message: 'Appointment completed' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to cancel apoointment completed for klinik apotek panel
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

// API to get dashboard data for klinik apotek panel
const klinikApotekDashboard = async (req, res) => {
    try {

        const placeId = req.placeId
        const appointments = await appointmentModel.find({ placeId: placeId })
        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })

        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse().slice(0, 5)
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get klinik apotek profile for klinik apotek panel
const klinikApotekProfile = async (req,res) => {
    
    try {
        
        const placeId = req.placeId
        const profileData = await klinikApotekModel.findById(placeId).select('-password')

        res.json({success:true, profileData})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update klinik apotek profile data from klinik apotek panel
const updateKlinikApotekProfile = async (req,res) => {
    
    try {

        const {placeId, alamat, mapsLink, jamoperasional, layanan, kontak, waLink, fees, available} = req.body

        await klinikApotekModel.findByIdAndUpdate(placeId, {alamat, mapsLink, jamoperasional, layanan, kontak, waLink, fees, available})

        res.json({success:true, message:'Profile Updated'})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export { changeAvailablity, klinikApotekList, loginKlinikApotek, appointmentsKlinikApotek, appointmentComplete, appointmentCancel, klinikApotekDashboard, klinikApotekProfile, updateKlinikApotekProfile }