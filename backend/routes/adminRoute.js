import express from 'express'
import { addKlinikApotek,addObat,allKlinikApotek,allObat,loginAdmin,allAppointment, appointmentCancel, adminDashboard } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailablity } from '../controllers/klinikApotekController.js'

const adminRouter = express.Router()

adminRouter.post('/add-klinikApotek',authAdmin,upload.single('image'),addKlinikApotek)
adminRouter.post('/add-obat',authAdmin,upload.single('image'),addObat)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-klinikApotek',authAdmin,allKlinikApotek)
adminRouter.post('/all-obat',authAdmin,allObat)
adminRouter.post('/change-availability',authAdmin,changeAvailablity)
adminRouter.get('/appointments',authAdmin,allAppointment)
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
adminRouter.get('/dashboard',authAdmin,adminDashboard)

export default adminRouter