import express from 'express'
import { klinikApotekList, loginKlinikApotek, appointmentsKlinikApotek, appointmentComplete, appointmentCancel, klinikApotekDashboard, klinikApotekProfile, updateKlinikApotekProfile } from '../controllers/klinikApotekController.js'
import authKlinikApotek from '../middlewares/authKlinikApotek.js'

const klinikApotekRouter = express.Router()

klinikApotekRouter.get('/list',klinikApotekList)
klinikApotekRouter.post('/login',loginKlinikApotek)
klinikApotekRouter.get('/appointments',authKlinikApotek,appointmentsKlinikApotek)
klinikApotekRouter.post('/complete-appointment',authKlinikApotek,appointmentComplete)
klinikApotekRouter.post('/cancel-appointment',authKlinikApotek,appointmentCancel)
klinikApotekRouter.get('/dashboard', authKlinikApotek, klinikApotekDashboard)
klinikApotekRouter.get('/profile', authKlinikApotek, klinikApotekProfile)
klinikApotekRouter.post('/update-profile', authKlinikApotek, updateKlinikApotekProfile)

export default klinikApotekRouter