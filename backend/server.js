import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import klinikApotekRouter from './routes/klinikApotekRoute.js'
import userRouter from './routes/userRoute.js'
import obatRouter from './routes/obatRoute.js'


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())


// api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/klinikapotek',klinikApotekRouter)
app.use('/api/user',userRouter)
app.use('/api/obat',obatRouter)
// localhost:4000/api/admin/add-klinikApotek

app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(port, ()=> console.log("Server Started",port))