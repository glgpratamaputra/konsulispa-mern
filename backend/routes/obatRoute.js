import express from 'express'
import { obatList } from '../controllers/obatController.js'

const obatRouter = express.Router()

obatRouter.get('/list',obatList)

export default obatRouter